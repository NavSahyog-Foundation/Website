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
