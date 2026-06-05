# CSS / HTML Refactor Plan — zero visual drift

A tracking checklist for tidying the front-end **without changing how the site
looks**. Every item is small, independently shippable, and verified with the
screenshot-diff harness below.

## Goal

The site is clean Astro + Tailwind, but the markup carries a heavy load of
repeated utility strings and hard-coded "magic-number" arbitrary values
(`text-[11px]`, `tracking-[0.18em]`, `text-[clamp(...)]`, `py-[14px]`). That is
what reads as "a lot of custom CSS." Almost all of it can be promoted to design
tokens / shared classes as a **pure refactor with identical rendering**.

## Verification workflow (run for every item)

The harness lives in [`scripts/visual.mjs`](../scripts/visual.mjs). It captures
every route at desktop (1280) and mobile (390) widths and diffs two capture sets
pixel-by-pixel.

```bash
# 1. start the dev server (root base path, real fonts)
CUSTOM_DOMAIN=1 npx astro dev --port 4321 &

# 2. BEFORE: baseline on the unchanged branch
node scripts/visual.mjs shot docs/visual/before

# 3. make the change for ONE checklist item

# 4. AFTER: re-capture and diff
node scripts/visual.mjs shot docs/visual/after
node scripts/visual.mjs diff docs/visual/before docs/visual/after docs/visual/diff
```

A passing item prints `✓ NO PIXEL DRIFT`. If drift is detected, the per-route
diff images land in `docs/visual/diff/` (magenta = changed pixels) for
inspection. The `docs/visual/` captures are git-ignored — they are scratch
artifacts, not committed.

> Note: `unpkg.com` (Leaflet) is blocked by the network policy, so the two map
> dashboard pages render without the map in this environment. Their non-map
> chrome is still diffed; the map widget itself must be eyeballed when its turn
> comes (item 5.1).

---

## Items

Legend: ⬜ todo · 🔄 in progress · ✅ done (with `✓ NO PIXEL DRIFT`)

### 1 — Tokenize magic numbers (invisible refactor)

- [ ] **1.1** Add a fluid display type scale to `tailwind.config.mjs`
  (`fontSize.display-1/2/3`, `fontSize.eyebrow`) replacing inline
  `text-[clamp(...)]` in `Hero`, `PageHeader`, `StatCard`, `index`, `donate`.
- [ ] **1.2** Promote the mono eyebrow label (`font-mono text-[11px] uppercase
  tracking-[…]`, ~80 occurrences) to a `.label-mono` component class in
  `global.css`; swap usages.
- [ ] **1.3** Tokenize the section rhythm `py-24 md:py-32` into a `.section-y`
  class (or `spacing` token); swap usages.
- [ ] **1.4** Move the remaining one-off letter-spacings / sizes
  (`tracking-[0.16em]`, `text-[15px]`, `text-[17px]`, `py-[14px]`) onto theme
  tokens.

### 2 — Extract repeated component patterns (invisible refactor)

- [ ] **2.1** `.eyebrow` variants: add centered + on-dark modifiers; replace the
  hand-inlined copies in `index.astro:261`, `donate.astro:46,90`.
- [ ] **2.2** `.link-arrow` class for the "… →" hover-gap links (7 occurrences:
  `index` ×3, `impact` ×2, `donate`, `projects`).
- [ ] **2.3** `.chip` class for the bullet-dot trust chips
  (`index`, `donate`, `support`).
- [ ] **2.4** Route the dark stat blocks in `index.astro:277-291` and
  `donate.astro:66-86` through the existing `StatCard` component.

### 3 — Config / token hygiene (invisible refactor)

- [ ] **3.1** Collapse the duplicate `paper`/`surface` color families in
  `tailwind.config.mjs` (same hexes under two names) to one, alias the other.
- [ ] **3.2** Extract the shared `accentWord` title-splitting logic out of
  `PageHeader.astro` and `Hero.astro` into `utils/accentWord.ts` (drop the
  `set:html` path while there).
- [ ] **3.3** Converge `index.astro`'s hand-rolled hero onto the `Hero`
  component (or document why it stays bespoke).

### 4 — Centralize duplicated data (invisible refactor)

- [ ] **4.1** Move the Jal Vriddhi status colors (`#d97706`, `#2563eb`,
  `#059669`, `#64748b`) into one shared `statuses.ts`, consumed by both the
  `jal-vriddhi.astro` legend and `ProgramDashboard` config — they are currently
  duplicated and can drift.

### 5 — Visual decisions (NOT pixel-identical — flag for sign-off)

- [ ] **5.1** Restyle `ProgramDashboard.astro` to match the editorial system
  (square corners, `border-line`, no shadows, `ink`/`accent` tokens instead of
  `slate`/`amber`/`brand`). **Changes appearance on the 2 dashboard pages only.**
  Requires before/after review rather than a zero-drift diff.

### 6 — Correctness / a11y / perf (separate from the visual refactor)

- [ ] **6.1** Donate tier picker is decorative — the CTA link never reflects the
  selected amount/frequency (`donate.astro:162`). Wire selection into the
  outgoing URL, or relabel as illustrative. *(Behavior fix, not visual.)*
- [ ] **6.2** Nudge `ink-3` (#807a6e) ~10% darker — it fails WCAG AA (4.5:1) on
  the 11px captions it is most used on. *(Tiny, intentional visual change.)*
- [ ] **6.3** Self-host fonts via `@fontsource` to drop the render-blocking
  Google Fonts request and remove a third-party runtime dependency. *(Aims for
  identical rendering; verify with the harness.)*
- [ ] **6.4** Bundle Leaflet via npm instead of the runtime `unpkg` CDN load.

---

## Suggested order

1 → 2 → 3 → 4 (all zero-drift), then 6.1 (real bug), then the sign-off items
5.1 / 6.2 / 6.3 / 6.4 one at a time.
