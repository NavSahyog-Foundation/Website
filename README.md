# NavSahyog Foundation — Website

Static website for [NavSahyog Foundation](https://www.navsahyog.org), built with [Astro](https://astro.build) and deployed free of charge on [GitHub Pages](https://pages.github.com).

## Why Astro

- **Zero JavaScript** shipped by default — fast on rural/low-bandwidth connections.
- **Markdown content collections** — the team can edit blog posts, village pages and downloads by editing plain text files (on GitHub's web editor, no code knowledge needed).
- **Built-in image optimization** — every photo is automatically resized and converted to WebP/AVIF at build time.
- **GitHub Pages compatible** — one workflow file, no paid hosting.

## Local development

Requires Node.js 22.

```bash
npm install
npm run dev     # starts a dev server at http://localhost:4321
npm run build   # builds the production site into ./dist
npm run preview # serves the built site locally
```

## Repository layout

```
src/
  assets/images/        # photos used by components (optimized by Astro)
  components/           # Header, Footer, Hero, PageHeader, StatCard
  content/
    blog/               # Markdown blog posts
  data/
    team.ts             # team roster (edit here to add/remove team members)
    villages.ts         # village cluster list
    downloads.ts        # list of PDFs shown on the Downloads page
    partners.ts         # partners and donors grouped by category
  layouts/
    Layout.astro        # shared page shell
  pages/                # one file per URL, including sub-routes
  styles/global.css     # Tailwind entrypoint + shared styles
public/
  downloads/            # PDFs served as-is (annual reports, impact studies)
  videos/               # video assets
  CNAME                 # custom domain for GitHub Pages
  robots.txt
.github/workflows/
  deploy.yml            # builds and deploys to GitHub Pages on every push to main
```

## Editing content

**Text on a page:** edit the `.astro` file in `src/pages/`.

**Blog posts:** add a new Markdown file in `src/content/blog/` with frontmatter for `title`, `date`, and `summary`.

**Downloads (PDFs):** drop the PDF into `public/downloads/` and add an entry in `src/data/downloads.ts`.

**Team, partners, villages:** edit the corresponding `.ts` file in `src/data/`.

**Images:** place in `src/assets/images/` and import in the page. Astro will generate responsive versions automatically.

## Deploy

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes the output to GitHub Pages. No manual steps.

The custom domain is set via `public/CNAME` (currently `www.navsahyog.org`).
