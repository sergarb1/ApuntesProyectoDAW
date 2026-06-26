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
- `StoryIntro.astro` — Bloque narrativo introductorio con icono, título y contenido
- `Aclaracion.astro` — Caja de aclaración tipo nota informativa
- `Comparativa.astro` — Tabla comparativa visual con dos columnas enfrentadas
- `CasoPractico.astro` — Ejemplo práctico aplicado tipo caso de estudio
- `Footer.astro` — Pie de página personalizado
- `Hero.astro` — Hero section (reemplaza el de Starlight)

## Convenios de código
- **Sidebar**: grupos con `collapsed: true/false`; usar Starlight `link` o `items` anidados
- **Contenido**: archivos `.mdx` en `src/content/docs/` con frontmatter `title` y `description`
- **Componentes**: import relativo desde `src/components/` (contar niveles `../..`)
- **Imágenes**: en `public/` referenciadas con base `/ApuntesProyectoDAW/`
- **Config**: `astro.config.mjs` para sidebar e integraciones; `src/content.config.ts` con `docsLoader` + `docsSchema`
- **CSS**: estilos de componentes en `src/styles/custom.css` con soporte dark mode

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
- `npm run build` — build estático en `dist/` (49 páginas)
- `npm run preview` — preview del build

## Despliegue
- GitHub Pages vía Actions (`.github/workflows/deploy.yml`)
- Node 24, upload `dist/` a gh-pages
- `.nojekyll` en raíz y `public/` para evitar procesado Jekyll

## Ubicación de archivos clave
- `astro.config.mjs` — configuración principal
- `src/content.config.ts` — loader Starlight
- `src/content/docs/` — todas las páginas
- `src/content/docs/index.mdx` — homepage
- `src/components/` — componentes Astro (StoryIntro, Aclaracion, Comparativa, CasoPractico, Footer, Hero)
- `src/styles/custom.css` — estilos globales y de componentes
- `public/` — assets estáticos (portada.png, cc-by-sa.png, favicon.svg)
