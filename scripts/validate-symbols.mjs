import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import Ajv from "ajv";

const root = process.cwd();
const metadataPath = path.join(root, "src/symbols.json");
const schemaPath = path.join(root, "schema/symbols.schema.json");
const tokensPath = path.join(root, "tokens/tokens.json");

const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
const schema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));
const tokens = JSON.parse(fs.readFileSync(tokensPath, "utf8"));

let failures = 0;
const fail = (msg) => { failures++; console.error(`✖ ${msg}`); };
const pass = (msg) => console.log(`✓ ${msg}`);

const ajv = new Ajv({ allErrors: true, strict: false });
const validate = ajv.compile(schema);
if (!validate(metadata)) {
  for (const err of validate.errors || []) fail(`metadata schema: ${err.instancePath || "/"} ${err.message}`);
} else {
  pass("metadata matches schema");
}

const seenIds = new Set();
for (const item of metadata) {
  if (seenIds.has(item.id)) fail(`duplicate metadata id: ${item.id}`);
  seenIds.add(item.id);

  const expectedColor = {
    pronoun: "yellow",
    verb: "green",
    noun: "orange",
    descriptor: "blue",
    social: "pink",
    negation: "red",
    preposition: "purple"
  }[item.category];

  if (expectedColor && item.fitzgeraldColor !== expectedColor) {
    fail(`${item.id}: category ${item.category} should use ${expectedColor}, not ${item.fitzgeraldColor}`);
  }

  const svgPath = path.join(root, item.path);
  if (!fs.existsSync(svgPath)) {
    fail(`${item.id}: missing SVG at ${item.path}`);
    continue;
  }

  const svg = fs.readFileSync(svgPath, "utf8");

  if (!/viewBox=["']0 0 128 128["']/.test(svg)) fail(`${item.id}: viewBox must be 0 0 128 128`);
  if (!/\bwidth=["']128["']/.test(svg)) fail(`${item.id}: width must be 128`);
  if (!/\bheight=["']128["']/.test(svg)) fail(`${item.id}: height must be 128`);
  if (/<image\b/i.test(svg)) fail(`${item.id}: embedded raster <image> is not allowed`);
  if (/<foreignObject\b/i.test(svg)) fail(`${item.id}: foreignObject is not allowed`);

  const widths = [...svg.matchAll(/stroke-width=["']([^"']+)["']/g)].map(m => Number(m[1]));
  for (const width of widths) {
    if (![2, 4].includes(width)) fail(`${item.id}: disallowed stroke-width ${width}; allowed widths are 2 and 4`);
  }

  const fitz = tokens.fitzgerald[item.category];
  if (fitz) {
    if (!svg.includes(fitz.fill)) fail(`${item.id}: missing category fill ${fitz.fill}`);
    if (!svg.includes(fitz.border)) fail(`${item.id}: missing category border ${fitz.border}`);
  }

  if (!/stroke-linecap=["']round["']/.test(svg)) {
    fail(`${item.id}: expected at least one round stroke-linecap declaration`);
  }
}

const svgRoot = path.join(root, "src/symbols");
const walk = dir => fs.readdirSync(dir, {withFileTypes:true}).flatMap(e => {
  const p = path.join(dir, e.name);
  return e.isDirectory() ? walk(p) : [p];
});
const svgFiles = walk(svgRoot).filter(p => p.endsWith(".svg"));
const indexed = new Set(metadata.map(m => path.normalize(path.join(root, m.path))));
for (const file of svgFiles) {
  if (!indexed.has(path.normalize(file))) fail(`unindexed SVG: ${path.relative(root, file)}`);
}

if (failures) {
  console.error(`\nValidation failed with ${failures} issue(s).`);
  process.exit(1);
}

console.log(`\nValidation passed for ${metadata.length} symbol(s).`);
