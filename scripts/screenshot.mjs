#!/usr/bin/env node
// Take true device-emulated screenshots via CDP.
// Headless Chrome's --window-size on Windows clamps to a min ~484 viewport
// regardless of the requested width, so we use Emulation.setDeviceMetricsOverride.
//
// Usage:
//   node scripts/screenshot.mjs <url> <out> [width] [height] [dpr]

import { spawn } from 'node:child_process';
import { writeFile } from 'node:fs/promises';

const [, , url, out, w = '375', h = '812', dpr = '2'] = process.argv;
if (!url || !out) {
  console.error('Usage: node scripts/screenshot.mjs <url> <out> [w] [h] [dpr]');
  process.exit(2);
}

const width = parseInt(w, 10);
const height = parseInt(h, 10);
const deviceScaleFactor = parseFloat(dpr);

const CHROME = '/c/Program Files/Google/Chrome/Application/chrome.exe';
const CHROME_WIN = String.raw`C:\Program Files\Google\Chrome\Application\chrome.exe`;
const PORT = 9222;

const proc = spawn(CHROME_WIN, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  `--remote-debugging-port=${PORT}`,
  '--user-data-dir=' + (process.env.TEMP || '/tmp') + '/chrome-screenshot-' + Date.now(),
  '--no-first-run',
  '--no-default-browser-check',
  '--window-size=1024,1024',
  'about:blank',
], { stdio: ['ignore', 'pipe', 'pipe'] });

proc.stderr.on('data', () => {}); // suppress

// Wait for debugger to be ready
async function getTarget() {
  for (let i = 0; i < 30; i++) {
    try {
      const r = await fetch(`http://localhost:${PORT}/json/list`);
      const targets = await r.json();
      const t = targets.find(t => t.type === 'page');
      if (t) return t;
    } catch (e) { /* not ready yet */ }
    await new Promise(r => setTimeout(r, 200));
  }
  throw new Error('Chrome did not start');
}

const target = await getTarget();
const ws = new WebSocket(target.webSocketDebuggerUrl);

let id = 0;
const pending = new Map();
ws.addEventListener('message', (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    if (msg.error) reject(new Error(msg.error.message));
    else resolve(msg.result);
  }
});

function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const i = ++id;
    pending.set(i, { resolve, reject });
    ws.send(JSON.stringify({ id: i, method, params }));
  });
}

await new Promise(r => ws.addEventListener('open', r, { once: true }));

await send('Emulation.setDeviceMetricsOverride', {
  width, height,
  deviceScaleFactor,
  mobile: true,
});
await send('Page.enable');
await send('Page.navigate', { url });

// Wait for load
await new Promise((resolve) => {
  const onMsg = (ev) => {
    const m = JSON.parse(ev.data);
    if (m.method === 'Page.loadEventFired') {
      ws.removeEventListener('message', onMsg);
      resolve();
    }
  };
  ws.addEventListener('message', onMsg);
});

// Brief settle for fonts/images
await new Promise(r => setTimeout(r, 1500));

const { data } = await send('Page.captureScreenshot', {
  format: 'png',
  captureBeyondViewport: false,
});

await writeFile(out, Buffer.from(data, 'base64'));
console.log(`Wrote ${out} at ${width}×${height}@${deviceScaleFactor}x`);

ws.close();
proc.kill('SIGKILL');
process.exit(0);
