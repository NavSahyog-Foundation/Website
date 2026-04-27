import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/wp/**/*.{jpg,jpeg,png,webp,gif,avif}',
  { eager: true }
);

const images: Record<string, ImageMetadata> = {};
for (const [key, mod] of Object.entries(modules)) {
  images[key.replace('/src/assets/wp/', '')] = mod.default;
}

const warned = new Set<string>();

export function wpImage(src: string): ImageMetadata | null {
  const key = src
    .replace(/^https?:\/\/[^/]+\//, '')
    .replace(/^\/+/, '')
    .replace(/^wp-content\/uploads\//, '');
  const img = images[key];
  if (!img) {
    if (!warned.has(key)) {
      warned.add(key);
      console.warn(`[wpImage] missing asset: src/assets/wp/${key} (referenced as "${src}")`);
    }
    return null;
  }
  return img;
}
