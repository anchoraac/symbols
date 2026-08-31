# AnchorAAC v0.1 Stabilization Audit

## Current state verified

The live repository already contains:

- 10 core symbols
- 10 classroom/schedule symbols
- `src/primitives/humanoid.svg`
- `tokens/tokens.json`
- `src/symbols.json`
- split MIT / CC BY 4.0 licensing files
- npm package metadata

The Gemini handoff is stale: the 10 schedule symbols it describes as remaining work are already present on `main`.

## Critical findings

1. The stated stroke contract is 4 px primary / 2 px secondary, but current SVGs repeatedly use 3 px strokes.
2. The repository has no automated SVG or metadata validation.
3. `main` is unprotected and has no required status checks.
4. The README is a stub rather than project documentation.
5. `package.json` is not yet a stable npm publishing contract.
6. Metadata has no machine-readable schema.
7. The design system defines only one primitive, which is not enough to prevent symbol drift.
8. The generated schedule symbols should be treated as unreviewed assets, not accepted production assets.

## Recommended sequence

1. Freeze new symbol generation.
2. Adopt `DESIGN-SYSTEM.md`.
3. Add schema + validator + CI.
4. Run validator against current 20 symbols.
5. Repair failing SVGs.
6. Visually review all 20 at 1.5 in, 2 in, and 3 in output sizes.
7. Protect `main`.
8. Resume Core 60 expansion via PRs only.
9. Stabilize npm/CDN publishing.
10. Build the classroom print utility.

## Review policy

`feature/*` or `symbols/*` branch → automated validation → visual review → PR → merge.
