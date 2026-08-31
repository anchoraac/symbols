# Contributing to AnchorAAC

AnchorAAC uses a review-first workflow because visual consistency is part of the API.

## Workflow

1. Create a branch (`symbols/<concept>` or `feature/<name>`).
2. Add or update SVG assets.
3. Update `src/symbols.json`.
4. Run `npm run validate`.
5. Run `npm run optimize` only after the symbol is visually approved.
6. Open a pull request.
7. Complete visual review at 1.5 in, 2 in, and 3 in.
8. Merge only after validation and review pass.

Do not commit generated symbols directly to `main`.

## Required symbol rules

- 128×128 viewBox
- 4 px primary strokes
- 2 px secondary strokes
- semantic colors from `tokens/tokens.json`
- round line caps and joins
- no embedded raster images
- no editor metadata
- matching metadata entry in `src/symbols.json`

## Licensing

By contributing SVG artwork under `src/symbols/`, you agree that the contribution is licensed under CC BY 4.0.

Code, scripts, configuration, and metadata contributions are licensed under MIT.
