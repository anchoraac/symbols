# AnchorAAC Symbols

AnchorAAC is an open-source AAC and special-education symbol system for classroom communication, visual schedules, printable supports, and software integration.

## Status

**Early development / pre-1.0.** The visual language and metadata contract are still being stabilized.

Current library:

- Core vocabulary symbols
- Classroom schedule symbols
- Shared design tokens
- Reusable visual primitives
- Machine-readable symbol metadata

## Design

Symbols use a fixed 128×128 SVG canvas, a 4 px / 2 px stroke system, rounded geometry, and Modified Fitzgerald semantic color backgrounds.

See [`DESIGN-SYSTEM.md`](DESIGN-SYSTEM.md).

## Metadata

The master index is:

`src/symbols.json`

Each entry identifies the symbol, label, file path, grammatical/semantic category, color family, tags, and symbol kind.

See `schema/symbols.schema.json`.

## Validation

```bash
npm install
npm run validate
```

Validation checks:

- JSON/schema consistency
- duplicate IDs
- missing SVG paths
- SVG `viewBox`
- width/height
- allowed stroke widths
- basic token/color compliance
- embedded raster images
- metadata/file consistency

## Optimization

```bash
npm run optimize
```

SVGO is intentionally separate from validation so visual review occurs before destructive optimization.

## Licensing

AnchorAAC uses split licensing:

- Code, scripts, configuration, and metadata: **MIT**
- SVG artwork in `src/symbols/`: **CC BY 4.0**

See [`LICENSE`](LICENSE) and [`LICENSE-ASSETS.md`](LICENSE-ASSETS.md).

### Attribution

A reasonable attribution is:

> AnchorAAC Symbols — CC BY 4.0 — https://github.com/anchoraac/symbols

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

New assets should be developed on branches, validated automatically, visually reviewed, and merged through pull requests.

## Project direction

Planned milestones include:

1. Stabilize the initial 20-symbol set
2. Expand high-frequency core vocabulary
3. Add automated optimization and release packaging
4. Publish npm/CDN distributions
5. Build a lightweight classroom print utility
