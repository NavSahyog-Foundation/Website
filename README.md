# NavSahayog Website static mirror snapshot

This repository currently contains a wget mirror of https://www.navsahyog.org/ captured for static migration work.

## Snapshot notes

- Source: https://www.navsahyog.org/
- Capture method: `wget --mirror --convert-links --adjust-extension --page-requisites --no-parent -e robots=off -U "Mozilla/5.0" https://www.navsahyog.org/`
- Mirrored content lives under `www.navsahyog.org/`
- This is a working offline snapshot for migration and refactoring, not yet a cleaned GitHub Pages build

## Important caveats

- Some URLs returned `403` or `404` during capture. The main page set and most assets were downloaded successfully.
- A number of pages still contain absolute references to WordPress JS/CSS endpoints on `https://www.navsahyog.org/...`.
- Dynamic WordPress features like forms, donations, search, comments, and some plugin behavior will need replacement or removal for a pure static deployment.

## Suggested next steps

1. Audit all remaining external references.
2. Decide the GitHub Pages structure you want.
3. Replace dynamic WordPress/plugin features with static or Jamstack equivalents.
4. Clean URLs/assets and validate locally before publishing.
