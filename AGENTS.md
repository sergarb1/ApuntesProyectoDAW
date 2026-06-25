# AGENTS - Contexto del Proyecto

## Proyecto
- **Sitio web**: Apuntes Proyecto Intermodular DAW I y II
- **URL**: https://sergarb1.github.io/ApuntesProyectoDAW
- **Stack**: Astro 7.0.2 + Starlight 0.41.0 + MDX
- **Curso**: 2026-2027
- **Licencia**: CC BY-SA 4.0

## Estructura del sidebar
1. **Inicio** - Página principal con portada
2. **Guía Didáctica** (colapsable, visible por defecto)
   - Continuidad, PI1, PI2, Metodología, Herramientas, Recursos, Profesores, Licencia, FAQ, Ideas
3. **Apuntes PI1** (colapsable, oculto por defecto) - 8 unidades
4. **Apuntes PI2** (colapsable, oculto por defecto) - 9 unidades

## Convenios de código
- **Sidebar**: grupos con `collapsed: true/false`; usar Starlight `link` o `items` anidados
- **Contenido**: archivos `.mdx` en `src/content/docs/` con frontmatter `title` y `description`
- **Componentes**: `CardGrid`, `Card`, `DiagramFlow`, `Footer`, `Hero` en `src/components/`
- **Imágenes**: en `public/` referenciadas desde `index.mdx`
- **Config**: `astro.config.mjs` para sidebar e integraciones; `src/content.config.ts` con `docsLoader` + `docsSchema`

## Integraciones
- `@astrojs/starlight` (sidebar, search, dark/light mode, pagination, TOC)
- `@astrojs/mdx` (componentes en contenido)
- Orden en integrations: `starlight()` antes que `mdx()`

## Comandos
- `npm run dev` - servidor de desarrollo
- `npm run build` - build estático en `dist/`
- `npm run preview` - preview del build

## Despliegue
- GitHub Pages vía Actions (`.github/workflows/deploy.yml`)
- Node 24, upload `dist/` a gh-pages
- `.nojekyll` en raíz y `public/` para evitar procesado Jekyll

## Ubicación de archivos clave
- `astro.config.mjs` - configuración principal
- `src/content.config.ts` - loader Starlight
- `src/content/docs/` - todas las páginas
- `src/content/docs/index.mdx` - homepage
- `src/components/` - componentes Astro
- `public/` - assets estáticos (portada.png, cc-by-sa.png, etc.)
