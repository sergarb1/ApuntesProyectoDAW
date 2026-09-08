# AGENTS - Contexto del Proyecto

## Proyecto
- **Sitio web**: Apuntes Proyecto Intermodular
- **URL**: https://sergarb1.github.io/ApuntesProyectoDAW
- **Stack**: Astro 7.0.2 + Starlight 0.41.0 + MDX
- **Curso**: 2026-2027
- **Licencia**: CC BY-SA 4.0
- **Horas del módulo**: PI1 = 34 h · PI2 = 100 h
- **Enfoque**: Contenido project-facing (cómo afrontar el proyecto), no técnico

## Estructura del sidebar
1. **Inicio** — Página principal con portada, hero buttons y card grid por UDs
2. **Material didáctico** (visible) — Proyecto 1 (intro, competencias, 7 UDs), Proyecto 2 (intro, competencias, 10 UDs, entregables, evaluación), Metodología, Herramientas, Recursos, Licencia, FAQ, Ideas
3. No existe grupo "Apuntes" ni sección "Profesores" (se eliminaron)

## Contenido por UD (estructura de carpetas)
Cada UD sigue el patrón:
- **Landing**: `src/content/docs/guia-didactica/proyecto-X/uds/uX-Y-nombre.mdx` (en `uds/`, NO dentro de la carpeta)
- **Secciones**: `src/content/docs/guia-didactica/proyecto-X/uds/uX-Y-nombre/NN-titulo.mdx` (8-10 secciones por UD)

**Proyecto 1** (7 UDs): u1-1-mvp, u1-2-scrum-lite, u1-3-requisitos, u1-4-eleccion-tecnologias, u1-5-comunicacion, u1-6-documentacion, u1-7-propuesta

**Proyecto 2** (10 UDs): u2-1-requisitos-avanzado, u2-2-scrum-avanzado, u2-3-git-avanzado, u2-4-testing, u2-5-patrones-diseno, u2-6-diagramas, u2-7-ia-copiloto, u2-8-despliegue, u2-9-monitorizacion, u2-10-propuesta-final

> Nota: la UD 2.7 (IA como Copiloto) tiene **13 secciones** (03-07 dedicadas a asistentes, agentes, skills, opencode y Spec-Driven Development). El resto de UDs tiene 9 secciones.

## Navegación entre secciones (¡importante!)
- Los enlaces entre secciones de una misma UD usan **`../NN-titulo`** (subir un nivel, luego sección)
- El enlace "Volver al índice" usa **`../`** (subir un nivel llega a la landing; NO `../uX-Y-nombre`, que duplica el segmento)
- Los enlaces de la landing a sus secciones usan **`./NN-titulo`** (la landing está en `uds/`)
- Los enlaces a la siguiente UD desde un cierre usan **`../../uX-Y-nombre`**
- NO usar `./uX-Y-nombre/NN` desde la landing (duplica el segmento) ni `../../guia-didactica/...` (ruta incorrecta)
- Desde el cierre de la última UD de PI2, "Volver a Material didáctico" usa **`../../../`**

## Bloques de navegación (cuadros destacados)
- Todas las secciones (01-09) terminan con un bloque `.nav-unidad` con cuadros `.nav-box` Anterior/Siguiente + enlace `.nav-unidad-volver`.
- **Landing** (`uX-Y-nombre.mdx`): termina con `.nav-unidad` (solo) con cuadro **Siguiente → la sección 01** (`./01-…`).
- **Sección 01**: termina con `.nav-unidad` con cuadro **← Anterior → Índice de la unidad** (`../`) + cuadro **Siguiente → la sección 02** (`../02-…`).
- Secciones intermedias (02-08): `.nav-unidad-links` (2 columnas) con Anterior + Siguiente.
- Cierres (09): Anterior (sección 08) + Siguiente (siguiente UD `../../uX-Y-nombre`), salvo el último que apunta a Material didáctico.

## Componentes propios
- `StoryIntro.astro` — Bloque narrativo introductorio con icono, título y contenido. Props: `icono`, `titulo`, contenido slot.
- `Aclaracion.astro` — Caja de aclaración tipo nota/FAQ colapsable. Props: `icono`, `pregunta`, `abierto` (opcional).
- `Comparativa.astro` — Diálogo comparativo visual. Props: `titulo`, `dialogos` (array de `{quien, texto}`).
- `CasoPractico.astro` — Ejemplo práctico tipo caso de estudio. Props: `numero`, `titulo`, contenido slot.
- `Footer.astro` — Pie de página personalizado.
- `Hero.astro` — Hero section (reemplaza el de Starlight).

## Convenios de código
- **Sidebar**: grupos con `collapsed: true/false`; usar Starlight `link` o `items` anidados
- **Contenido**: archivos `.mdx` en `src/content/docs/` con frontmatter `title` y `description`. No usar `.md` (todos convertidos a `.mdx`).
- **Componentes**: import desde `@components/` (alias configurado en `tsconfig.json`, evita "Relative Path Hell")
- **Cards**: usar `<div class="card-title">` en vez de `###` heading dentro de `<a class="card-link">` para evitar que Starlight añada `sl-anchor-link` anidado (inválido: `<a><a>`).
- **Imágenes**: en `public/` referenciadas con base `/ApuntesProyectoDAW/`
- **Config**: `astro.config.mjs` para sidebar e integraciones; `src/content.config.ts` con `docsLoader` + `docsSchema`
- **CSS**: estilos de componentes en `src/styles/custom.css` con soporte dark mode
- **Logo SVG**: `src/assets/logo.svg` (290x50, icono libro abierto + texto)
- **Favicon SVG**: `public/favicon.svg` (100x100, icono libro abierto)

## Reglas de import paths
- Todos los `.mdx` en `src/content/docs/**` usan **`@components/`** (alias configurado en `tsconfig.json`):
  ```json
  "baseUrl": ".",
  "paths": { "@components/*": ["src/components/*"] }
  ```
- NO usar imports relativos (`../../components/...`)

## Integraciones
- `@astrojs/starlight` (sidebar, search, dark/light mode, pagination, TOC, pagefind)
- `@astrojs/mdx` (componentes en contenido)
- Orden en integrations: `starlight()` antes que `mdx()`

## Comandos
- `npm run dev` — servidor de desarrollo
- `npm run build` — build estático en `dist/` (185 páginas, ~90s)
- `npm run preview` — preview del build
- `npm run ebooks` / `npm run pdf` / `npm run epub` — generan PDF/EPUB en `public/download/` (requiere pandoc + puppeteer; `npx puppeteer browsers install chrome` la primera vez)

## CSS / diseño
- **Card grid**: `grid-template-columns: repeat(2, 1fr)`, `max-width: 750px`, `margin: 2rem auto`. Mobile: `1fr`, `max-width: 100%`.
- **Card-link**: `display: block`. Sin `width: 100%` (porcentajes en grid items resuelven contra el contenedor, no la celda).
- **Portada**: `public/portada.webp` (174KB, quality 90). Formato WebP. Sin versión PNG.
- **Animaciones**: `@keyframes fadeInUp` en card-grid y hero-links. `@keyframes pulse` en `.emoji-404`.
- **404 page**: `src/content/docs/404.mdx` con emoji animado y navegación mediante Starlight `CardGrid`.
- **Botones premium**: gradient, pill shape (`999px`), sombras, hover/active states, dark mode.
- **Navegación entre secciones**: bloque `.nav-unidad` con dos tarjetas `.nav-box` (Anterior/Siguiente) y enlace `.nav-unidad-volver`. Generado en HTML dentro de cada sección (no es un componente Astro).

## Generación de ebooks
- Script: `scripts/generate-ebooks.mjs`
- Genera `guia-didactica` (páginas principales + landings de UDs) y `completa` (todo + secciones de las 17 UDs)
- Requiere **pandoc** instalado y el navegador de puppeteer descargado
- `npm run ebooks` = EPUB + PDF; `npm run epub` / `npm run pdf` para solo uno
- El PDF completo puede superar los 17MB; el timeout del PDF está en 120s (no bajar)

## Despliegue
- GitHub Pages vía Actions (`.github/workflows/deploy.yml`)
- Node 24, upload `dist/` a gh-pages
- `.nojekyll` en raíz y `public/` para evitar procesado Jekyll
- Base URL: `/ApuntesProyectoDAW/`

## Ubicación de archivos clave
- `astro.config.mjs` — configuración principal
- `src/content.config.ts` — loader Starlight
- `src/content/docs/` — todas las páginas
- `src/content/docs/index.mdx` — homepage con portada, hero buttons, card-grids por UDs
- `src/content/docs/404.mdx` — página 404 con emoji animado y navegación
- `src/content/docs/guia-didactica/` — contenido principal (proyecto-1 y proyecto-2 con sus UDs)
- `src/content/docs/guia-didactica/proyecto-X/uds/` — landings de UD (uX-Y-nombre.mdx) + carpetas con secciones
- `src/components/` — componentes Astro (StoryIntro, Aclaracion, Comparativa, CasoPractico, Footer, Hero)
- `src/styles/custom.css` — estilos globales y de componentes
- `src/assets/logo.svg` — logo del header (libro abierto)
- `public/` — assets estáticos (portada.webp, cc-by-sa.png, favicon.svg, .nojekyll)
- `scripts/generate-ebooks.mjs` — generación de PDF/EPUB
- `public/download/` — PDF/EPUB generados (completa.pdf/epub, guia-didactica.pdf/epub)
