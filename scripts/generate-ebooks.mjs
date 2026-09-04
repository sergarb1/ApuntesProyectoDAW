import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'src', 'content', 'docs');
const PUBLIC_DIR = path.join(ROOT, 'public');
const DOWNLOAD_DIR = path.join(PUBLIC_DIR, 'download');
const BUILD_DIR = path.join(ROOT, '.ebook-tmp');
const PORTADA = path.join(PUBLIC_DIR, 'portada.webp');

const format = (process.argv[2] || 'both').toLowerCase();

const GUIDE_FILES = [
  'guia-didactica/proyecto-1/index.mdx',
  'guia-didactica/proyecto-1/competencias.mdx',
  'guia-didactica/proyecto-1/evaluacion.mdx',
  ...udLandings('proyecto-1', 'u1-1-mvp', 'u1-2-scrum-lite', 'u1-3-requisitos', 'u1-4-eleccion-tecnologias', 'u1-5-comunicacion', 'u1-6-documentacion', 'u1-7-propuesta'),
  'guia-didactica/proyecto-2/index.mdx',
  'guia-didactica/proyecto-2/competencias.mdx',
  'guia-didactica/proyecto-2/entregables.mdx',
  'guia-didactica/proyecto-2/evaluacion.mdx',
  ...udLandings('proyecto-2', 'u2-1-requisitos-avanzado', 'u2-2-scrum-avanzado', 'u2-3-git-avanzado', 'u2-4-testing', 'u2-5-patrones-diseno', 'u2-6-diagramas', 'u2-7-ia-copiloto', 'u2-8-despliegue', 'u2-9-monitorizacion', 'u2-10-propuesta-final'),
  'metodologia.mdx',
  'herramientas.mdx',
  'recursos.mdx',
  'licencia.mdx',
  'faq.mdx',
  'ideas.mdx',
];

function udLandings(proyecto, ...uds) {
  return uds.map(ud => `guia-didactica/${proyecto}/uds/${ud}.mdx`);
}

function udSections(proyecto, ud) {
  const dir = path.join(CONTENT_DIR, 'guia-didactica', proyecto, 'uds', ud);
  const files = [];
  if (fs.existsSync(dir)) {
    for (const f of fs.readdirSync(dir).sort()) {
      if (f.endsWith('.mdx')) files.push(`guia-didactica/${proyecto}/uds/${ud}/${f}`);
    }
  }
  return files;
}

const ALL_FILES = [
  ...GUIDE_FILES,
  ...['u1-1-mvp', 'u1-2-scrum-lite', 'u1-3-requisitos', 'u1-4-eleccion-tecnologias', 'u1-5-comunicacion', 'u1-6-documentacion', 'u1-7-propuesta'].flatMap(ud => udSections('proyecto-1', ud)),
  ...['u2-1-requisitos-avanzado', 'u2-2-scrum-avanzado', 'u2-3-git-avanzado', 'u2-4-testing', 'u2-5-patrones-diseno', 'u2-6-diagramas', 'u2-7-ia-copiloto', 'u2-8-despliegue', 'u2-9-monitorizacion', 'u2-10-propuesta-final'].flatMap(ud => udSections('proyecto-2', ud)),
];

function stripFrontmatter(content) {
  return content.replace(/^---[\s\S]*?---\n*/m, '');
}

function stripImports(content) {
  return content.replace(/^import .+ from '.*';\n*/gm, '');
}

function stripAstroComponents(content) {
  content = content.replace(
    /<Comparativa[\s\S]*?dialogos=\{(\[[\s\S]*?\])\}[\s\S]*?\/\s*>/g,
    (match, dialogosStr) => {
      try {
        const dialogos = eval('(' + dialogosStr + ')');
        if (Array.isArray(dialogos)) {
          return dialogos.map(d => {
            const quien = d.quien || '';
            const texto = d.texto || '';
            return `> **${quien}**\n> \n> ${texto}\n`;
          }).join('\n');
        }
      } catch {}
      return '';
    }
  );

  content = content.replace(/<Comparativa[^>]*\/\s*>/g, '');

  content = content.replace(
    /<StoryIntro\s[^>]*titulo="([^"]*)"[^>]*>([\s\S]*?)<\/StoryIntro>/g,
    (match, titulo, inner) => {
      return `\n\n> _🎬 ${titulo}_\n>\n> ${inner.trim().replace(/\n/g, '\n> ')}\n\n`;
    }
  );

  content = content.replace(
    /<Aclaracion[^>]*icono="([^"]*)"[^>]*pregunta="([^"]*)"[^>]*>([\s\S]*?)<\/Aclaracion>/g,
    (match, icono, pregunta, inner) => {
      return `\n\n<details>\n<summary>${icono} ${pregunta}</summary>\n\n${inner.trim()}\n\n</details>\n\n`;
    }
  );

  content = content.replace(
    /<Aclaracion[^>]*pregunta="([^"]*)"[^>]*>([\s\S]*?)<\/Aclaracion>/g,
    (match, pregunta, inner) => {
      return `\n\n<details>\n<summary>❓ ${pregunta}</summary>\n\n${inner.trim()}\n\n</details>\n\n`;
    }
  );

  content = content.replace(
    /<CasoPractico[^>]*numero="([^"]*)"\s*titulo="([^"]*)"[^>]*>([\s\S]*?)<\/CasoPractico>/g,
    (match, numero, titulo, inner) => {
      return `\n\n**📋 Caso ${numero}: ${titulo}**\n\n${inner.trim()}\n\n`;
    }
  );

  content = content.replace(
    /<CasoPractico[^>]*titulo="([^"]*)"[^>]*>([\s\S]*?)<\/CasoPractico>/g,
    (match, titulo, inner) => {
      return `\n\n**📋 ${titulo}**\n\n${inner.trim()}\n\n`;
    }
  );

  content = content.replace(/<[A-Z]\w*[^>]*\/\s*>/g, '');
  content = content.replace(/<\/?[A-Z]\w*[^>]*>/g, '');

  return content;
}

function cleanHtmlDivs(content) {
  content = content.replace(/<div class="diagram-flow">/g, '\n');
  content = content.replace(/<div class="diagram-step">/g, '**');
  content = content.replace(/<\/div>/g, ' → ');
  content = content.replace(/<div class="diagram-arrow">→<\/div>/g, '');
  content = content.replace(/<div[^>]*>/g, '\n');
  content = content.replace(/<\/div>/g, '');
  return content;
}

function extractTitle(content, filename) {
  const match = content.match(/^---[\s\S]*?---\n*/m);
  if (match) {
    const fm = match[0];
    const t = fm.match(/title:\s*"?([^"\n]+?)"?\n/);
    if (t) return t[1].replace(/"/g, '').trim();
  }
  return filename.replace('.mdx', '').replace(/[-/]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function readMdxFile(relativePath) {
  const fullPath = path.join(CONTENT_DIR, relativePath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`  ⚠️  File not found: ${relativePath}`);
    return null;
  }
  return fs.readFileSync(fullPath, 'utf-8');
}

function processMdxContent(content, filename) {
  const title = extractTitle(content, filename);
  let body = stripFrontmatter(content);
  body = stripImports(body);
  body = stripAstroComponents(body);
  body = cleanHtmlDivs(body);
  body = body.replace(/\n{4,}/g, '\n\n\n');
  body = body.replace(/\]\(\/ApuntesProyectoDAW\//g, '](./');
  return { title, body: body.trim() };
}

function buildMarkdownBook(files, bookTitle) {
  const parts = [`# ${bookTitle}\n\n`];

  for (const file of files) {
    const content = readMdxFile(file);
    if (!content) continue;
    const { title, body } = processMdxContent(content, file);
    if (!body) continue;
    parts.push(`\n\n---\n\n## ${title}\n\n${body}`);
  }

  return parts.join('');
}

function pandocAvailable() {
  try { execSync('pandoc --version', { stdio: 'ignore' }); return true; }
  catch { return false; }
}

async function generateEPUB(book, mdFile, metadataFile, coverImg) {
  console.log(`  📚 Generating EPUB...`);
  const epubFile = path.join(DOWNLOAD_DIR, `${book.id}.epub`);
  execSync(
    `pandoc "${mdFile}" -o "${epubFile}" ` +
    `--metadata-file="${metadataFile}" ` +
    `--resource-path="${BUILD_DIR};${PUBLIC_DIR}" ` +
    `--to epub3 ` +
    `--epub-cover-image="${coverImg.replace(/\\/g, '/')}" ` +
    `--split-level=2 ` +
    `--toc --toc-depth=3 ` +
    `--css="${path.join(__dirname, 'epub.css')}"`,
    { stdio: 'inherit', cwd: BUILD_DIR }
  );
  const size = (fs.statSync(epubFile).size / 1024).toFixed(0);
  console.log(`  ✅ EPUB: public/download/${book.id}.epub (${size} KB)`);
}

async function generatePDF(book, mdFile, metadataFile, coverImg) {
  console.log(`  📄 Generating PDF...`);

  const { default: puppeteer } = await import('puppeteer');

  const htmlFile = path.join(BUILD_DIR, `${book.id}.html`);
  const pdfFile = path.join(DOWNLOAD_DIR, `${book.id}.pdf`);

  // Convert markdown to HTML fragment
  execSync(
    `pandoc "${mdFile}" -o "${htmlFile}.tmp" ` +
    `--resource-path="${BUILD_DIR};${PUBLIC_DIR}" ` +
    `--to html5 --toc --toc-depth=3`,
    { stdio: 'inherit', cwd: BUILD_DIR }
  );

  const bodyContent = fs.readFileSync(`${htmlFile}.tmp`, 'utf-8');

  // Read cover image as base64
  const coverImgBase64 = fs.readFileSync(coverImg).toString('base64');
  const coverImgDataUri = `data:image/webp;base64,${coverImgBase64}`;

  // Inline CSS to avoid path resolution issues
  const cssContent = fs.readFileSync(path.join(__dirname, 'pdf.css'), 'utf-8');

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8" />
<style>${cssContent}</style>
</head>
<body>
<div class="cover-page">
  <img src="${coverImgDataUri}" alt="Portada" />
  <h1>${book.title}</h1>
  <p>Sergi Garcia Barea</p>
  <p>CC BY-SA 4.0</p>
</div>
<div class="content">
${bodyContent}
</div>
</body>
</html>`;

  fs.writeFileSync(htmlFile, html, 'utf-8');
  try { fs.unlinkSync(`${htmlFile}.tmp`); } catch {}

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0', timeout: 30000 });

    await page.pdf({
      path: pdfFile,
      format: 'A4',
      margin: { top: '0', bottom: '0', left: '0', right: '0' },
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate: `
        <div style="width:100%; font-size:9px; text-align:center; color:#999;
                    padding:5px 20px; border-top:1px solid #ddd;">
          <span class="pageNumber"></span> / <span class="totalPages"></span>
        </div>`,
    });

    const size = (fs.statSync(pdfFile).size / 1024).toFixed(0);
    console.log(`  ✅ PDF: public/download/${book.id}.pdf (${size} KB)`);
  } finally {
    await browser.close();
  }
}

async function generate() {
  if (!pandocAvailable()) {
    console.error('❌ pandoc is required. Install from https://pandoc.org/');
    process.exit(1);
  }

  fs.mkdirSync(BUILD_DIR, { recursive: true });
  fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });

  const coverImg = path.join(BUILD_DIR, 'portada.webp');
  if (fs.existsSync(PORTADA)) {
    fs.copyFileSync(PORTADA, coverImg);
  }

  const BOOKS = [
    { id: 'guia-didactica', title: 'Guía Didáctica — Proyecto Intermodular', files: GUIDE_FILES },
    { id: 'completa', title: 'Guía Didáctica Completa — Proyecto Intermodular', files: ALL_FILES },
  ];

  for (const book of BOOKS) {
    console.log(`\n📖 "${book.title}"`);

    const markdown = buildMarkdownBook(book.files, book.title);
    const mdFile = path.join(BUILD_DIR, `${book.id}.md`);
    fs.writeFileSync(mdFile, markdown, 'utf-8');

    const metadataFile = path.join(BUILD_DIR, `${book.id}-meta.yaml`);
    const metadata = `---
title: "${book.title}"
author: Sergi Garcia Barea
language: es-ES
rights: CC BY-SA 4.0
cover-image: ${coverImg.replace(/\\/g, '/')}
...
`;
    fs.writeFileSync(metadataFile, metadata, 'utf-8');

    if (format === 'epub' || format === 'both') {
      try { await generateEPUB(book, mdFile, metadataFile, coverImg); }
      catch (err) { console.error(`  ❌ EPUB failed:`, err.message); }
    }

    if (format === 'pdf' || format === 'both') {
      try { await generatePDF(book, mdFile, metadataFile, coverImg); }
      catch (err) { console.error(`  ❌ PDF failed:`, err.message); }
    }
  }

  try { fs.rmSync(BUILD_DIR, { recursive: true, force: true }); } catch {}

  console.log(`\n✅ Done! Files in public/download/`);
}

generate().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
