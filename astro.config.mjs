import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const PREVIEW = process.env.PREVIEW === '1' || !process.env.CUSTOM_DOMAIN;

export default defineConfig({
  site: PREVIEW ? 'https://sameersegal.github.io' : 'https://www.navsahyog.org',
  base: PREVIEW ? '/NavSahayog-Website' : '/',
  trailingSlash: 'always',
  integrations: [tailwind()],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  build: {
    assets: 'assets',
  },
});
