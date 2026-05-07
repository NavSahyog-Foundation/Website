import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const PREVIEW = process.env.PREVIEW === '1' || !process.env.CUSTOM_DOMAIN;
const [repoOwner, repoName] = (process.env.GITHUB_REPOSITORY || 'NavSahyog-Foundation/Website').split('/');
const githubPagesSite = `https://${repoOwner.toLowerCase()}.github.io`;
const githubPagesBase = `/${repoName}`;

export default defineConfig({
  site: PREVIEW ? githubPagesSite : 'https://www.navsahyog.org',
  base: PREVIEW ? githubPagesBase : '/',
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !/\/(blogs|media|whats-new)\/?$/.test(page),
    }),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  build: {
    assets: 'assets',
  },
  redirects: {
    '/blogs': '/news',
    '/media': '/news',
    '/whats-new': '/news',
  },
});
