# AGENTS - Contexto del Proyecto

## Proyecto
- **Sitio web**: Apuntes Proyecto Intermodular
- **URL**: https://sergarb1.github.io/ApuntesProyectoDAW
- **Stack**: Astro 7.0.2 + Starlight 0.41.0 + MDX
- **Curso**: 2026-2027
- **Licencia**: CC BY-SA 4.0
- **Enfoque**: Contenido project-facing (cómo afrontar el proyecto), no técnico

## Estructura del sidebar
1. **Inicio** — Página principal con portada y card grid
2. **Guía Didáctica** (visible) — Continuidad, PI1 (intro, competencias, 5 retos, evaluación), PI2 (intro, competencias, 7 sprints, entregables, evaluación), Metodología, Herramientas, Recursos, Profesores, Licencia, FAQ, Ideas
3. **Apuntes PI1** (oculto) — 8 unidades + ruta de aprendizaje
4. **Apuntes PI2** (oculto) — 9 unidades

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
- **Componentes**: import relativo desde `src/components/` (contar niveles `../..`)
- **Cards**: usar `<div class="card-title">` en vez de `###` heading dentro de `<a class="card-link">` para evitar que Starlight añada `sl-anchor-link` anidado (inválido: `<a><a>`).
- **Imágenes**: en `public/` referenciadas con base `/ApuntesProyectoDAW/`
- **Config**: `astro.config.mjs` para sidebar e integraciones; `src/content.config.ts` con `docsLoader` + `docsSchema`
- **CSS**: estilos de componentes en `src/styles/custom.css` con soporte dark mode
- **Logo SVG**: `src/assets/logo.svg` (290x50, icono libro abierto + texto)
- **Favicon SVG**: `public/favicon.svg` (100x100, icono libro abierto)

## Reglas de import paths
- `src/content/docs/*.mdx` → `../../components/`
- `src/content/docs/pi1/*.mdx`, `pi2/*.mdx` → `../../../components/`
- `src/content/docs/pi1/fases/*.mdx`, `pi2/fases/*.mdx` → `../../../../components/`
- `src/content/docs/apuntes-pi1/*.mdx`, `apuntes-pi2/*.mdx` → `../../../components/`

## Integraciones
- `@astrojs/starlight` (sidebar, search, dark/light mode, pagination, TOC, pagefind)
- `@astrojs/mdx` (componentes en contenido)
- Orden en integrations: `starlight()` antes que `mdx()`

## Comandos
- `npm run dev` — servidor de desarrollo
- `npm run build` — build estático en `dist/` (49 páginas, ~6s)
- `npm run preview` — preview del build

## CSS / diseño
- **Card grid**: `grid-template-columns: repeat(2, 1fr)`, `max-width: 750px`, `margin: 2rem auto`. Mobile: `1fr`, `max-width: 100%`.
- **Card-link**: `display: block`. Sin `width: 100%` (porcentajes en grid items resuelven contra el contenedor, no la celda).
- **Portada**: `public/portada.webp` (174KB, quality 90). Formato WebP. Sin versión PNG.
- **Animaciones**: `@keyframes fadeInUp` en card-grid y hero-links. `@keyframes pulse` en `.emoji-404`.
- **404 page**: `src/content/docs/404.mdx` con emoji animado y navegación mediante Starlight `CardGrid`.
- **Botones premium**: gradient, pill shape (`999px`), sombras, hover/active states, dark mode.

## Despliegue
- GitHub Pages vía Actions (`.github/workflows/deploy.yml`)
- Node 24, upload `dist/` a gh-pages
- `.nojekyll` en raíz y `public/` para evitar procesado Jekyll
- Base URL: `/ApuntesProyectoDAW/`

## Ubicación de archivos clave
- `astro.config.mjs` — configuración principal
- `src/content.config.ts` — loader Starlight
- `src/content/docs/` — todas las páginas
- `src/content/docs/index.mdx` — homepage con portada, hero buttons, card-grids
- `src/content/docs/404.mdx` — página 404 con emoji animado y navegación
- `src/components/` — componentes Astro (StoryIntro, Aclaracion, Comparativa, CasoPractico, Footer, Hero)
- `src/styles/custom.css` — estilos globales y de componentes
- `src/assets/logo.svg` — logo del header (libro abierto)
- `public/` — assets estáticos (portada.webp, cc-by-sa.png, favicon.svg, .nojekyll)
