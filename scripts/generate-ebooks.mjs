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
  'continuidad.mdx',
  'pi1/index.mdx',
  'pi1/competencias.mdx',
  'pi1/fases/reto-1.mdx',
  'pi1/fases/reto-2.mdx',
  'pi1/fases/reto-3.mdx',
  'pi1/fases/reto-4.mdx',
  'pi1/fases/reto-5.mdx',
  'pi1/evaluacion.mdx',
  'pi2/index.mdx',
  'pi2/competencias.mdx',
  'pi2/fases/sprint-0.mdx',
  'pi2/fases/sprint-1.mdx',
  'pi2/fases/sprint-2.mdx',
  'pi2/fases/sprint-3.mdx',
  'pi2/fases/sprint-4.mdx',
  'pi2/fases/sprint-5.mdx',
  'pi2/fases/sprint-6.mdx',
  'pi2/entregables.mdx',
  'pi2/evaluacion.mdx',
  'metodologia.mdx',
  'herramientas.mdx',
  'recursos.mdx',
  'profesores.mdx',
  'licencia.mdx',
  'faq.mdx',
  'ideas.mdx',
];

const APUNTES_PI1_FILES = [
  'apuntes-pi1/index.mdx',
  'apuntes-pi1/ruta-aprendizaje.mdx',
  'apuntes-pi1/u1-fundamentos-programacion.mdx',
  'apuntes-pi1/u2-poo.mdx',
  'apuntes-pi1/u3-diseno-bd.mdx',
  'apuntes-pi1/u4-lenguajes-marcas.mdx',
  'apuntes-pi1/u5-frontend-basico.mdx',
  'apuntes-pi1/u6-backend-basico.mdx',
  'apuntes-pi1/u7-git.mdx',
  'apuntes-pi1/u8-metodologias.mdx',
];

const APUNTES_PI2_FILES = [
  'apuntes-pi2/index.mdx',
  'apuntes-pi2/u1-arquitectura-web.mdx',
  'apuntes-pi2/u2-frontend-framework.mdx',
  'apuntes-pi2/u3-apis-rest.mdx',
  'apuntes-pi2/u4-ui-ux.mdx',
  'apuntes-pi2/u5-testing.mdx',
  'apuntes-pi2/u6-seguridad.mdx',
  'apuntes-pi2/u7-docker.mdx',
  'apuntes-pi2/u8-despliegue-ci-cd.mdx',
  'apuntes-pi2/u9-metodologias-agiles.mdx',
];

const ALL_FILES = [
  ...GUIDE_FILES,
  ...APUNTES_PI1_FILES,
  ...APUNTES_PI2_FILES,
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

  // Convert markdown to HTML fragment (no standalone) with TOC
  execSync(
    `pandoc "${mdFile}" -o "${htmlFile}.tmp" ` +
    `--resource-path="${BUILD_DIR};${PUBLIC_DIR}" ` +
    `--to html5 ` +
    `--toc --toc-depth=3 `,
    { stdio: 'inherit', cwd: BUILD_DIR }
  );

  // Read just the body content
  let bodyContent = fs.readFileSync(`${htmlFile}.tmp`, 'utf-8');

  // Read cover image as base64
  const coverImgBase64 = fs.readFileSync(coverImg).toString('base64');
  const coverImgDataUri = `data:image/webp;base64,${coverImgBase64}`;

  const cssPath = path.join(__dirname, 'pdf.css').replace(/\\/g, '/');

  // Build complete HTML with cover + TOC + content wrapped in .content div
  const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8" />
<link rel="stylesheet" href="${cssPath}" />
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
    { id: 'apuntes-pi1', title: 'Apuntes PI1 — Cómo afrontar el proyecto', files: APUNTES_PI1_FILES },
    { id: 'apuntes-pi2', title: 'Apuntes PI2 — Cómo evolucionar el proyecto', files: APUNTES_PI2_FILES },
    { id: 'completa', title: 'Guía Didáctica y Apuntes — Proyecto Intermodular', files: ALL_FILES },
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
