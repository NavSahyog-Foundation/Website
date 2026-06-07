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
artifacts, not committed. The diff is **strict** (pixelmatch `threshold:0`,
`includeAA:true`) so any rendered-pixel difference is caught.

> **Caveat — config-only changes:** the Astro dev server serves cached CSS and
> does **not** recompile when only `tailwind.config.mjs` changes (no `.astro`
> file touched). For those, verify against a fresh **production build**
> (`astro build` → `astro preview`) instead of `astro dev`, or clear
> `node_modules/.vite node_modules/.astro .astro` before capturing. Changes that
> also edit markup recompile normally.

> Note: `unpkg.com` (Leaflet) is blocked by the network policy, so the two map
> dashboard pages render without the map in this environment. Their non-map
> chrome is still diffed; the map widget itself must be eyeballed when its turn
> comes (item 5.1).

---

## Items

Legend: ⬜ todo · 🔄 in progress · ✅ done (with `✓ NO PIXEL DRIFT`)

### 1 — Tokenize magic numbers (invisible refactor)

- [x] **1.1** ✅ Added a fluid display type scale (`fontSize.fluid-*`) to
  `tailwind.config.mjs` — a faithful 1:1 capture of all 21 distinct inline
  `clamp()` sizes (59 occurrences across 20 files). Near-duplicates kept
  distinct; flagged for later consolidation. `✓ NO PIXEL DRIFT`.
- [x] **1.2** ✅ Tokenized the mono-label primitives — eyebrow sizes
  (`text-eyebrow{,-sm,-lg}`) and the 7 letter-spacings (`tracking-label-NN`),
  174 arbitrary values replaced — and added a `.label-mono` class, extracted into
  78 `class="…"` sites carrying the `font-mono uppercase text-eyebrow` trio.
  Tracking/color/spacing kept inline since they vary. `✓ NO PIXEL DRIFT`.
- [x] **1.3** ✅ Added a section vertical-rhythm scale (`.section-y{,-md,-sm,-xs}`)
  for the recurring responsive `py` pairs and swapped 33 occurrences. One-off
  pairs left inline. `✓ NO PIXEL DRIFT`.
- [x] **1.4** ✅ Tokenized the fixed-px text scale (`text-13`…`text-40`, bare px
  strings) — 97 replacements — and mapped `py-[14px]`→`py-3.5`, `py-[10px]`→`py-2.5`
  onto the existing spacing scale. 3 one-off `text-[13.5px]` left inline. Arbitrary
  leading-[…] values noted as a future candidate. `✓ NO PIXEL DRIFT`.

### 2 — Extract repeated component patterns (invisible refactor)

- [x] **2.1** ✅ Added an `.eyebrow-center` modifier (rule on both sides) and
  replaced the 4 hand-inlined eyebrow copies (`index`, `donate`, `partners`,
  `donors`) with `.eyebrow` / `.eyebrow-center`. `✓ NO PIXEL DRIFT`.
- [x] **2.2** ✅ Added a `.link-arrow` class and swapped all 7 "… →" hover-gap
  links (`index` ×3, `impact` ×2, `donate`, `projects`). Font-weight/margin kept
  inline. `✓ NO PIXEL DRIFT`.
- [x] **2.3** ✅ Added a `.chip` class (terracotta dot via `::before`) and
  replaced the 3 bullet-dot trust chips in `index`, `donate`, `support` — the
  inner dot `<span>` is now generated. `✓ NO PIXEL DRIFT`.
- [x] **2.4** ✅ Revised: the existing `StatCard` is light-mode-specific
  (terracotta-rule eyebrow, `text-ink`, fluid-stat size) and is the wrong
  abstraction for the dark blocks — forcing it would bloat the component and risk
  drift. Instead data-drove `donate`'s three identical dark cards via a local
  `.map()`. The `index` donor blocks have heterogeneous accent-fragment values
  (not cleanly mappable without `set:html`) and stay bespoke; a unified dark-mode
  stat component is deferred to the §5 visual-sign-off pass. `✓ NO PIXEL DRIFT`.

### 3 — Config / token hygiene (invisible refactor)

- [x] **3.1** ✅ Removed the redundant `surface` color family (its hexes
  duplicated `paper`/`ink`). Migrated its single use (`bg-surface-soft` in
  `ProgramDashboard`) to `bg-paper-alt` (identical color). `✓ NO PIXEL DRIFT`.
- [x] **3.2** ✅ Extracted the duplicated accent-word splitter into
  `utils/accentWord.ts` (`splitAccentWord`), used by both `PageHeader` and
  `Hero`, and dropped the `set:html` path in favour of plain text expressions
  (titles are plain text). Build clean. `✓ NO PIXEL DRIFT`.
- [x] **3.3** ✅ Documented (code comment) why the homepage hero stays bespoke:
  rich-markup title (`<br>`) and lede (`<strong>`), a larger fluid size, and
  tighter padding than interior-page heroes — none expressible through `Hero`'s
  plain-string props without making it a leaky abstraction. `✓ NO PIXEL DRIFT`.

### 4 — Centralize duplicated data (invisible refactor)

- [x] **4.1** ✅ Created `src/data/statuses.ts` (`jalVriddhiStatuses`, with
  colour + legend description) as the single source. The `jal-vriddhi.astro`
  legend now maps over it instead of hardcoding hexes, and the same array still
  feeds the `ProgramDashboard` config. `✓ NO PIXEL DRIFT`.

### 5 — Visual decisions (NOT pixel-identical — flag for sign-off)

- [x] **5.1** ✅ Restyled `ProgramDashboard.astro` to the editorial system:
  square corners (dropped `rounded-xl/lg`), hairline `border-line` grid, no
  shadows, Fraunces `display` KPI numerals, terracotta `accent-soft` error
  banner (was amber), and `ink`/`accent`/`paper-alt` tokens instead of
  `slate`/`amber`/`brand` — including the JS-generated filter chips and state
  bars. Affects the Jal Vriddhi page only. Intentional visual change; before/after
  reviewed (build clean). *(Live map/KPIs render the error state in-sandbox since
  the API + Leaflet are blocked; chrome restyle verified.)*

### 6 — Correctness / a11y / perf (separate from the visual refactor)

- [x] **6.1** ✅ The donate CTA now reflects the selection — the script writes
  `?amount=<n>&frequency=<onetime|monthly>` onto the payment link from the active
  tier / custom amount / frequency radio (functionally probed). Danamojo's prefill
  params couldn't be confirmed (docs are access-restricted), but unknown query
  params are ignored, so this is a safe strict improvement. Visually
  `✓ NO PIXEL DRIFT` (only the href changes).
- [x] **6.2** ✅ Darkened `ink-3` `#807a6e` → `#6d675d` — the lightest value that
  clears WCAG AA (≥4.5:1) on all light backgrounds (paper 5.02, paper-alt 4.55,
  white 5.60); the old value failed all three. Intentional ~13% darkening of
  muted text/captions only; headings/body unchanged. Footprint reviewed via
  build-based before/after.
  > Harness note: discovered `pixelmatch`'s default `includeAA:false` masked this
  > subtle glyph-edge change as anti-aliasing. Hardened the diff to
  > `threshold:0 + includeAA:true` (strict exact) and re-validated §1–§4 + §6.1
  > against the pre-refactor original — **0 differing pixels**, confirming all
  > "zero-drift" refactors are byte-for-byte identical.
- [ ] **6.3** Self-host fonts via `@fontsource` to drop the render-blocking
  Google Fonts request and remove a third-party runtime dependency. *(Aims for
  identical rendering; verify with the harness.)*
- [ ] **6.4** Bundle Leaflet via npm instead of the runtime `unpkg` CDN load.

---

## Suggested order

1 → 2 → 3 → 4 (all zero-drift), then 6.1 (real bug), then the sign-off items
5.1 / 6.2 / 6.3 / 6.4 one at a time.
