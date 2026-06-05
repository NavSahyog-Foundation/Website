#!/usr/bin/env node
// Visual-regression harness for the NavSahyog site.
//
// Captures deterministic full-page screenshots of every route at desktop and
// mobile widths, and diffs two capture sets pixel-by-pixel so a refactor can be
// proven to produce zero visual drift.
//
// Usage:
//   node scripts/visual.mjs shot <outDir>            # capture all routes
//   node scripts/visual.mjs diff <dirA> <dirB> <out> # compare two capture sets
//
// Requires a running server (default http://localhost:4321). Override with BASE_URL.
// Chromium is the pre-installed Playwright build under /opt/pw-browsers.

import { chromium } from 'playwright';
import { mkdir, writeFile, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const CHROME = process.env.CHROME_PATH || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const BASE = (process.env.BASE_URL || 'http://localhost:4321').replace(/\/$/, '');

// Every route worth a visual baseline: all static pages + one representative
// dynamic event and village slug.
export const ROUTES = [
  ['home', '/'],
  ['about-our-story', '/about/our-story/'],
  ['about-five-factors', '/about/five-factors/'],
  ['about-the-team', '/about/the-team/'],
  ['program-big-problem', '/program/big-problem/'],
  ['program-intervention', '/program/intervention/'],
  ['program-projects', '/program/projects/'],
  ['program-jal-vriddhi', '/program/jal-vriddhi/'],
  ['program-presence', '/program/presence/'],
  ['program-partners', '/program/partners/'],
  ['program-donors', '/program/donors/'],
  ['impact', '/impact/'],
  ['impact-testimonials', '/impact/testimonials/'],
  ['support', '/support/'],
  ['donate', '/donate/'],
  ['contact', '/contact/'],
  ['news', '/news/'],
  ['downloads', '/downloads/'],
  ['covid-19-relief', '/covid-19-relief/'],
  ['404', '/404/'],
  ['event-annual-competitions', '/events/annual-competitions/'],
  ['village-tumkur-01', '/program/villages/tumkur-01/'],
];

const VIEWPORTS = [
  { name: 'desktop', width: 1280, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

async function capture(outDir) {
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch({ executablePath: CHROME });
  const results = [];
  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
      reducedMotion: 'reduce',
    });
    // Block the one un-allowlisted external dependency (Leaflet on unpkg) so
    // dashboard pages settle instead of hanging on a request that never resolves.
    await context.route('**://unpkg.com/**', (r) => r.abort());
    const page = await context.newPage();
    for (const [name, route] of ROUTES) {
      const url = `${BASE}${route}`;
      try {
        await page.goto(url, { waitUntil: 'load', timeout: 45000 });
        // Explicitly load the fonts in use so a swap can't race the screenshot.
        await page.evaluate(async () => {
          await Promise.all([
            document.fonts.load('400 16px Inter'),
            document.fonts.load('500 16px Inter'),
            document.fonts.load('600 16px Inter'),
            document.fonts.load('500 48px Fraunces'),
            document.fonts.load('italic 400 48px "Instrument Serif"'),
            document.fonts.load('400 14px "DM Mono"'),
          ]);
          await document.fonts.ready;
        });
        // Freeze transitions/animations and neutralize video frames (which
        // decode nondeterministically) while preserving their layout box.
        await page.addStyleTag({
          content:
            '*,*::before,*::after{transition:none!important;animation:none!important;caret-color:transparent!important}' +
            'video{visibility:hidden!important}',
        });
        // Native lazy-loading only fetches near-viewport images, so a full-page
        // shot can race them and reflow. Force every image eager and wait
        // (bounded) for all real images to decode, so height is stable and the
        // same pixels are present in every run.
        await page.evaluate(() =>
          document.querySelectorAll('img').forEach((i) => { i.loading = 'eager'; }),
        );
        await Promise.race([
          page.evaluate(() =>
            Promise.all(
              [...document.images]
                .filter((i) => i.getAttribute('src')) // skip src-less placeholders
                .map((i) =>
                  i.complete && i.naturalWidth > 0
                    ? i.decode().catch(() => {})
                    : new Promise((r) => {
                        i.addEventListener('load', () => i.decode().then(r, r), { once: true });
                        i.addEventListener('error', r, { once: true });
                      }),
                ),
            ),
          ),
          page.waitForTimeout(20000),
        ]);
        await page.waitForTimeout(400);
        const file = path.join(outDir, `${name}-${vp.name}.png`);
        await page.screenshot({ path: file, fullPage: true });
        results.push(`${name}-${vp.name}`);
      } catch (err) {
        console.error(`  ! ${name}-${vp.name}: ${err.message}`);
      }
    }
    await context.close();
  }
  await browser.close();
  console.log(`Captured ${results.length} screenshots to ${outDir}`);
}

async function diff(dirA, dirB, outDir) {
  await mkdir(outDir, { recursive: true });
  const files = (await readdir(dirA)).filter((f) => f.endsWith('.png'));
  let totalDiff = 0;
  const rows = [];
  for (const f of files.sort()) {
    let a, b;
    try {
      a = PNG.sync.read(await readFile(path.join(dirA, f)));
      b = PNG.sync.read(await readFile(path.join(dirB, f)));
    } catch {
      rows.push(`MISSING  ${f}`);
      continue;
    }
    if (a.width !== b.width || a.height !== b.height) {
      rows.push(`SIZE≠   ${f}  ${a.width}x${a.height} vs ${b.width}x${b.height}`);
      totalDiff += 1;
      continue;
    }
    const { width, height } = a;
    const out = new PNG({ width, height });
    const n = pixelmatch(a.data, b.data, out.data, width, height, { threshold: 0.1 });
    if (n > 0) {
      await writeFile(path.join(outDir, f), PNG.sync.write(out));
      rows.push(`DIFF ${String(n).padStart(8)}px  ${f}`);
      totalDiff += n;
    } else {
      rows.push(`ok            ${f}`);
    }
  }
  console.log(rows.join('\n'));
  console.log(`\nTotal differing pixels: ${totalDiff}`);
  console.log(totalDiff === 0 ? '✓ NO PIXEL DRIFT' : `✗ drift detected — diff images in ${outDir}`);
  process.exit(totalDiff === 0 ? 0 : 1);
}

const [cmd, ...args] = process.argv.slice(2);
if (cmd === 'shot') await capture(args[0] || 'docs/visual/current');
else if (cmd === 'diff') await diff(args[0], args[1], args[2] || 'docs/visual/diff');
else {
  console.error('Usage: visual.mjs shot <outDir> | diff <dirA> <dirB> <outDir>');
  process.exit(2);
}
