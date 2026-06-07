#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const dashboards = {
  'jal-vriddhi': {
    url: 'https://erp.navsahyog-staging.workers.dev/api/programs/jal-vriddhi',
    out: 'src/data/program-dashboards/jal-vriddhi.json',
  },
};

const slug = process.argv[2] || 'jal-vriddhi';
const target = dashboards[slug];

if (!target) {
  console.error(`Unknown dashboard slug: ${slug}`);
  console.error(`Known slugs: ${Object.keys(dashboards).join(', ')}`);
  process.exit(1);
}

const res = await fetch(target.url, { headers: { Accept: 'application/json' } });
if (!res.ok) {
  throw new Error(`Failed to fetch ${target.url}: HTTP ${res.status}`);
}

const data = await res.json();
const outPath = path.resolve(target.out);
await mkdir(path.dirname(outPath), { recursive: true });
await writeFile(outPath, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log(`Cached ${slug} dashboard JSON to ${target.out}`);
