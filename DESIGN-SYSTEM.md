# AnchorAAC Design System

## Purpose

AnchorAAC symbols must function as a coherent AAC visual language, not as independent clip-art illustrations. Symbols should remain recognizable at small classroom-card sizes, be predictable across hundreds of concepts, and preserve semantic color conventions without making color the only cue.

## Canvas

- `viewBox="0 0 128 128"`
- `width="128"` and `height="128"`
- 8 px nominal inner margin
- active content should normally remain within x/y 8–120
- rounded outer card: `rx="16"`

## Stroke system

Only two semantic stroke weights are allowed in production symbols:

- Primary: 4 px
- Secondary: 2 px

All line/path strokes should use:

- `stroke-linecap="round"`
- `stroke-linejoin="round"` where applicable

A 3 px stroke is not part of the design system and should fail validation.

## Neutral drawing colors

- Primary line: `#212121`
- Secondary/detail line: `#616161`
- White interior fill: `#FFFFFF`

## Modified Fitzgerald semantic colors

| Category | Fill | Border |
|---|---|---|
| pronoun / people | `#FFF9C4` | `#FBC02D` |
| verb / action | `#E8F5E9` | `#388E3C` |
| noun / object | `#FFE0B2` | `#F57C00` |
| descriptor | `#E1F5FE` | `#0288D1` |
| negation / imperative | `#FFEBEE` | `#D32F2F` |
| social / pragmatic | `#FCE4EC` | `#C2185B` |
| preposition / question | `#F3E5F5` | `#7B1FA2` |

## Human figure archetype

Canonical base figure:

- head: 28 px diameter
- neutral/gender-independent
- straight or intentionally posed torso
- simplified limbs
- no decorative clothing or gender-coded details unless conceptually necessary

Human figures may be posed, rotated, or partially shown, but should retain recognizable proportions.

## Visual hierarchy

1. The communicative concept must be recognizable before decorative context.
2. Prefer one dominant concept plus at most 1–2 supporting cues.
3. Avoid tiny details that disappear at 1.5-inch card size.
4. Motion arrows, highlights, and semantic-color details may clarify action but should not carry the whole meaning.
5. Do not rely on text inside the SVG.

## Accessibility

- Meaning must remain understandable in grayscale.
- Color is a category cue, not the sole semantic cue.
- Avoid unnecessary facial expressions when posture/object context is sufficient.
- Avoid culture-specific visual shorthand when a more universal representation is available.
- Use concrete object/activity depictions for emerging communicators when possible.

## Schedule/activity symbols

Schedule concepts such as `circle-time`, `centers`, and `sensory-break` are classroom activities rather than ordinary grammatical vocabulary. Their `category` still maps to the closest Fitzgerald class for visual treatment, while `kind` in metadata should distinguish `core`, `schedule`, and future classes.

## Production review sizes

Every new symbol should be visually checked at:

- 1.5 in
- 2 in
- 3 in

A symbol that only works at large size is not production-ready.
