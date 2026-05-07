# NavSahyog Foundation — Website

The website at [www.navsahyog.org](https://www.navsahyog.org). This README is for the **NavSahyog team** — how to update the site, find content, and ship changes. The technical bits are at the bottom for developers.

---

## How a change reaches the live site

1. You edit a file on GitHub (use the pencil ✏️ icon — no setup needed).
2. You click **Commit changes** at the bottom.
3. Within ~2 minutes, GitHub rebuilds the site and pushes it live.
4. Refresh [www.navsahyog.org](https://www.navsahyog.org) to see the change.

That's it. There's no separate "publish" or "deploy" step. Every commit on `main` is live.

> **Tip:** if you want to preview a bigger change first, click **Create a new branch for this commit** when you save. That puts the change on a side branch and opens a Pull Request — share the PR link with someone for review before merging.

---

## Recipes — common updates

### Add a news / event story

News stories live in [`src/content/events/`](src/content/events/). Each story is one Markdown file.

1. In `src/content/events/`, click **Add file → Create new file**.
2. Name it with a short slug, e.g. `village-coordinator-meet-2026.md`.
3. Paste this template and fill in:

```markdown
---
title: "Village Coordinator Meet 2026"
date: 15 March 2026
summary: "One-line summary that shows on the News page card."
heroImage: 2026/03/coordinator-meet-hero.jpg
gallery:
  - 2026/03/coordinator-meet-1.jpg
  - 2026/03/coordinator-meet-2.jpg
videos: []
---

The full article goes here, written in Markdown.

You can have **bold**, *italic*, [links](https://example.com), and:

- bullet points
- like this

## A subheading

More paragraphs.
```

4. **Image paths** point to files inside `src/assets/media/<year>/<month>/`. Upload your photos there first (see "Add a photo" below).
5. Commit. Your story appears at `/events/village-coordinator-meet-2026/` and is listed on the News page automatically.

### Add a photo

Photos live in [`src/assets/media/<year>/<month>/`](src/assets/media/), grouped by year and month uploaded.

1. Navigate to the right `<year>/<month>` folder (or create one — click **Add file → Create new file**, type `2026/05/.gitkeep` to make a folder).
2. Click **Add file → Upload files**, drag your photo in.
3. Commit.
4. Reference it from any story or page as `2026/05/your-photo.jpg`.

The site automatically resizes and optimizes every photo at build time — you can upload large originals.

### Add a downloadable PDF

PDFs are listed on the [Downloads](src/pages/downloads.astro) page. Two ways to host them:

**A. As a file in the repo (small PDFs, < 5 MB)**

1. Drop the PDF into [`public/downloads/`](public/downloads/) — name it like `annual-report-2025-26.pdf`.
2. Open [`src/data/downloads.ts`](src/data/downloads.ts) and add a new entry under the right section:

   ```ts
   { title: 'Annual Report 2025–26', file: '/downloads/annual-report-2025-26.pdf' },
   ```

**B. As a Google Drive link (larger PDFs, or already on Drive)**

1. Get a shareable link from Drive (set to "Anyone with the link can view").
2. In `src/data/downloads.ts`, add:

   ```ts
   { title: 'Annual Report 2025–26', file: 'https://drive.google.com/file/d/.../view?usp=sharing', external: true },
   ```

The `external: true` flag changes the button to read "Drive ↗" instead of "PDF ↓".

3. Commit.

### Add or remove a team member

Team list lives in [`src/data/team.ts`](src/data/team.ts), grouped by role (advisors, founders, functional leaders, programme team, area facilitators).

To add a functional leader:

```ts
export const functionalLeaders: TeamMember[] = [
  // ...existing entries
  { name: 'New Person Name', role: 'Their role title' },
];
```

For Area Facilitators, also include `village` and `photo` (with the photo path under `src/assets/media/`):

```ts
{ name: 'Sarvamangala', village: 'Medanahalli', photo: '2025/12/b1-150x150.png' },
```

### Add a new village cluster page

Villages live in [`src/content/villages/`](src/content/villages/). Each cluster is one Markdown file. Same idea as events:

1. Create `src/content/villages/<cluster-slug>.md`:

   ```markdown
   ---
   title: Villages in <Cluster Name>
   cluster: <Cluster Name>
   region: Karnataka     # or Tamil Nadu, or Nagaland
   order: 6
   villageNames:
     - Village One
     - Village Two
     - Village Three
   summary: Optional short description that appears under the title.
   heroImage: 2026/04/cluster-hero.jpg
   gallery:
     - 2026/04/cluster-photo-1.jpg
   ---

   The cluster's story goes here, in Markdown.
   ```

2. Open [`src/data/villages.ts`](src/data/villages.ts) and add the cluster to the list — set `hasPage: true` so the Presence page links to it:

   ```ts
   { slug: 'cluster-slug', name: '<Cluster Name>', region: 'Karnataka', district: 'Some District', hasPage: true },
   ```

### Update partners

Partner logos live in [`src/data/partners.ts`](src/data/partners.ts). Upload the logo to `src/assets/media/<year>/<month>/`, then add an entry:

```ts
{ name: 'Partner Name', logo: '2026/05/partner-logo.png', url: 'https://partnerwebsite.org' },
```

### Update donor lists

Yearly donor lists live in [`src/data/donors.ts`](src/data/donors.ts). To add the FY 2025–26 cohort:

```ts
{
  heading: '2025 - 2026',
  donors: [
    'Mr Donor One',
    'Mrs Donor Two',
    // ...
  ],
},
```

### Edit a static page (Home, Donate, Impact, etc.)

Most page text lives directly in the corresponding `.astro` file under [`src/pages/`](src/pages/):

| Page | File |
| --- | --- |
| Home | [`src/pages/index.astro`](src/pages/index.astro) |
| Donate | [`src/pages/donate.astro`](src/pages/donate.astro) |
| Impact | [`src/pages/impact/index.astro`](src/pages/impact/index.astro) |
| Our Story | [`src/pages/about/our-story.astro`](src/pages/about/our-story.astro) |
| Five Factors | [`src/pages/about/five-factors.astro`](src/pages/about/five-factors.astro) |
| The Team | [`src/pages/about/the-team.astro`](src/pages/about/the-team.astro) |
| Big Problem | [`src/pages/program/big-problem.astro`](src/pages/program/big-problem.astro) |
| Intervention | [`src/pages/program/intervention.astro`](src/pages/program/intervention.astro) |
| Projects | [`src/pages/program/projects.astro`](src/pages/program/projects.astro) |
| Jal Vriddhi | [`src/pages/program/jal-vriddhi.astro`](src/pages/program/jal-vriddhi.astro) |
| Presence | [`src/pages/program/presence.astro`](src/pages/program/presence.astro) |
| Partners | [`src/pages/program/partners.astro`](src/pages/program/partners.astro) |
| Donors | [`src/pages/program/donors.astro`](src/pages/program/donors.astro) |
| Contact | [`src/pages/contact.astro`](src/pages/contact.astro) |
| News & Stories | [`src/pages/news/index.astro`](src/pages/news/index.astro) |
| Support Us | [`src/pages/support/index.astro`](src/pages/support/index.astro) |

Open the file, find the text between HTML tags (everything inside `<h1>...</h1>`, `<p>...</p>`, etc.), edit it, commit. Don't worry about the styling — the classes are already set up correctly.

### Update the navigation menu (header / footer links)

Header dropdowns: [`src/components/Header.astro`](src/components/Header.astro) — edit the `nav` array near the top.

Footer columns: [`src/components/Footer.astro`](src/components/Footer.astro) — edit the `cols` array.

---

## Common gotchas

- **Image not showing up?** Check the path is exactly right (case-sensitive) and the file is committed to `src/assets/media/`. The build logs will warn `[media] missing asset: ...`.
- **YAML frontmatter errors?** The `---` lines at the top of Markdown files are picky about indentation (use spaces, not tabs) and quotes. If a colon `:` appears inside a value, wrap the whole value in `"double quotes"`.
- **Forgot to set `hasPage: true`** on a new village cluster? The cluster will list on the Presence page but won't be clickable. Update `src/data/villages.ts` and re-commit.
- **Page didn't update after committing?** Check the deploy status under the [**Actions** tab](https://github.com/NavSahyog-Foundation/Website/actions) on GitHub. A red ❌ means the build failed — click into the run for the error message.

---

## Site organisation

The header has 5 sections, then a Donate button:

| Section | What lives there |
| --- | --- |
| **About** | Our Story · The Five Factors · The Team |
| **Our Work** | The Big Problem · Intervention · Projects · Jal Vriddhi · Presence |
| **Impact** | Impact (numbers + studies) · Testimonials |
| **Support Us** | Donate · Partners · Our Donors · Contact |
| **News & Stories** | Featured Reports · Stories from the field · In the press · Events · Archive |

Plus: Downloads (footer), Covid-19 Relief (footer), and dynamic `/events/<slug>/` and `/program/villages/<slug>/` pages.

---

## For developers

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Deployed to [GitHub Pages](https://pages.github.com) on every push to `main`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to ./dist
npm run preview  # serve ./dist locally
```

Requires Node.js 22.

### Repo layout

```
src/
  assets/
    images/             # hand-curated photos, imported from .astro files
    media/              # bulk media library, addressed by string path through <Img />
  components/           # Header, Footer, Hero, PageHeader, Img, Gallery, StatCard, ProgramDashboard
  content/
    events/             # Markdown event/news pages
    villages/           # Markdown village cluster pages
  data/                 # team.ts, villages.ts, downloads.ts, partners.ts, donors.ts
  layouts/
    Layout.astro        # shared page shell
  pages/                # one file per URL; sub-folders → sub-routes
  styles/global.css     # Tailwind entrypoint + Editorial Cream design tokens
  utils/
    media.ts            # resolves string paths to ImageMetadata for <Img />
    url.ts              # base-URL-aware href helper
public/
  downloads/            # PDFs served as-is
  videos/               # video assets served as-is
  CNAME                 # custom domain for GitHub Pages
.github/workflows/
  deploy.yml            # builds and deploys on every push to main
```

### Design system

Cream paper background, terracotta accent, Fraunces serif display.

- **Tokens:** `tailwind.config.mjs` (palette, fonts) and `src/styles/global.css` (utilities like `.display`, `.eyebrow`, `.btn-primary`)
- **Heading style:** wrap an italic accent word in `<span class="display-italic text-accent">` for the editorial feel
- **Mono eyebrow:** `<div class="eyebrow"><span>Eyebrow text</span></div>`

### Custom domain & base path

`astro.config.mjs` reads two env vars at build time:

| Env | Effect |
| --- | --- |
| `CUSTOM_DOMAIN=1` | Build for `www.navsahyog.org`, base `/` |
| _(unset)_ | Build for GitHub Pages, base `/<repo-name>` |

The CI workflow at `.github/workflows/deploy.yml` decides which to set.
