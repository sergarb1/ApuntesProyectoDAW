import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname ?? path.dirname(new URL(import.meta.url).pathname), '..');
const CONTENT_DIR = path.join(ROOT, 'src', 'content', 'docs');

const args = process.argv.slice(2);
const units = args.length > 0 ? args : readAllUnits();

const FM_REGEX = /^---\r?\n([\s\S]*?)\r?\n---/;

function readAllUnits() {
  const out = [];
  for (const dir of ['apuntes-pi1', 'apuntes-pi2']) {
    const base = path.join(CONTENT_DIR, dir);
    if (!fs.existsSync(base)) continue;
    for (const entry of fs.readdirSync(base).sort()) {
      const full = path.join(base, entry);
      if (fs.statSync(full).isDirectory()) out.push(`${dir}/${entry}`);
    }
  }
  return out;
}

function unitFiles(unit) {
  const base = path.join(CONTENT_DIR, unit);
  const index = `${unit}.mdx`;
  const points = [];
  if (fs.existsSync(base) && fs.statSync(base).isDirectory()) {
    for (const f of fs.readdirSync(base).sort()) {
      if (f.endsWith('.mdx')) points.push(`${unit}/${f}`);
    }
  }
  return [index, ...points];
}

function parseFrontmatter(rel) {
  const full = path.join(CONTENT_DIR, rel);
  if (!fs.existsSync(full)) return { missing: true };
  const content = fs.readFileSync(full, 'utf-8');
  const match = content.match(FM_REGEX);
  if (!match) return { noFm: true };
  try {
    return { data: yaml.load(match[1]) };
  } catch (e) {
    return { yamlError: e.message };
  }
}

let badYaml = 0;
let badLinks = 0;
let checked = 0;

for (const unit of units) {
  const files = unitFiles(unit);
  const idx = files[0];
  const points = files.slice(1);
  const idxFm = parseFrontmatter(idx);
  if (idxFm.missing || idxFm.noFm || idxFm.yamlError) {
    badYaml++;
    console.log(`❌ ${idx} :: ${idxFm.missing ? 'missing' : idxFm.noFm ? 'no frontmatter' : idxFm.yamlError}`);
  } else {
    const data = idxFm.data;
    if (!data.title || !data.description) {
      badYaml++;
      console.log(`❌ ${idx} :: falta title/description`);
    }
  }

  const indexContent = fs.existsSync(path.join(CONTENT_DIR, idx))
    ? fs.readFileSync(path.join(CONTENT_DIR, idx), 'utf-8') : '';

  for (const p of points) {
    checked++;
    const fm = parseFrontmatter(p);
    if (fm.missing || fm.noFm || fm.yamlError) {
      badYaml++;
      console.log(`❌ ${p} :: ${fm.missing ? 'missing' : fm.noFm ? 'no frontmatter' : fm.yamlError}`);
      continue;
    }
    const data = fm.data;
    if (!data.title || !data.description) {
      badYaml++;
      console.log(`❌ ${p} :: falta title/description`);
    }
    const content = fs.readFileSync(path.join(CONTENT_DIR, p), 'utf-8');
    if (!content.includes('Volver al índice de la unidad')) {
      badLinks++;
      console.log(`❌ ${p} :: falta "Volver al índice de la unidad"`);
    }
    const isCierre = p.includes('09-cierre');
    if (!isCierre && !/Siguiente:/.test(content)) {
      badLinks++;
      console.log(`❌ ${p} :: falta enlace "Siguiente:"`);
    }
  }

  for (let i = 1; i <= 9; i++) {
    const n = i === 9 ? '09-cierre' : String(i).padStart(2, '0');
    const token = i === 9 ? `${unit}/${n}` : `${unit}/${n}-`;
    if (!indexContent.includes(token)) {
      badLinks++;
      console.log(`❌ ${idx} :: falta enlace al punto ${n}`);
    }
  }
}

console.log(`\n📊 Unidades revisadas: ${units.length}`);
console.log(`📄 Puntos de teoría/cierre: ${checked}`);
console.log(`❌ Errores YAML: ${badYaml}`);
console.log(`❌ Errores de navegación: ${badLinks}`);
if (badYaml === 0 && badLinks === 0) {
  console.log('✅ Todo correcto.');
  process.exit(0);
} else {
  process.exit(1);
}
