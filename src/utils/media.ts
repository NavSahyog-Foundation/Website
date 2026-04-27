import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/media/**/*.{jpg,jpeg,png,webp,gif,avif}',
  { eager: true }
);

const images: Record<string, ImageMetadata> = {};
for (const [key, mod] of Object.entries(modules)) {
  images[key.replace('/src/assets/media/', '')] = mod.default;
}

const warned = new Set<string>();

export function media(src: string): ImageMetadata | null {
  const key = src
    .replace(/^https?:\/\/[^/]+\//, '')
    .replace(/^\/+/, '');
  const img = images[key];
  if (!img) {
    if (!warned.has(key)) {
      warned.add(key);
      console.warn(`[media] missing asset: src/assets/media/${key} (referenced as "${src}")`);
    }
    return null;
  }
  return img;
}
