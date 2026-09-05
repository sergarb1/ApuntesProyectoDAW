# Apuntes Proyecto Intermodular DAW I y II

Sitio web educativo con material didáctico y apuntes para afrontar el **Proyecto Intermodular** del ciclo **Desarrollo de Aplicaciones Web (DAW)**. Curso 2026-2027. Horas del módulo: **PI1 = 34 h · PI2 = 100 h**.

Enfoque **project-facing**: no es contenido técnico (cómo programar), sino cómo afrontar, planificar, ejecutar y defender un proyecto software.

## Tecnologías

- [Astro](https://astro.build) 7.0.2
- [Starlight](https://starlight.astro.build) 0.41.0
- MDX para componentes en contenido
- Pagefind para búsqueda offline
- GitHub Actions para despliegue continuo

## Características

- **Homepage** con portada, hero buttons y card grid por UDs (2 columnas en PC, 1 en móvil)
- **Material didáctico** completo: plan docente, 17 Unidades Didácticas (7 PI1 + 10 PI2 con Testing), evaluación, FAQ, ideas
- **Componentes propios**: StoryIntro, Aclaracion, Comparativa, CasoPractico
- **Navegación entre secciones** con cuadros destacados Anterior/Siguiente
- **Animaciones**: fadeInUp en cards, pulse en 404, transiciones suaves hover
- **404 divertida** con emoji animado y navegación rápida
- **Logo y favicon SVG** personalizados (icono de libro abierto)
- **Modo oscuro/claro**, búsqueda offline, sitemap
- **Responsive**: adaptado a móvil y escritorio
- **Ebooks descargables** (PDF/EPUB) generados con pandoc + puppeteer

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build estático en dist/
npm run preview  # previsualizar build
npm run ebooks   # genera PDF/EPUB en public/download/ (requiere pandoc)
```

Nota: para generar los PDF hace falta además el navegador de puppeteer:
`npx puppeteer browsers install chrome` (la primera vez).

## Estructura

```
src/
├── assets/logo.svg          # Logo del header
├── components/              # Componentes Astro personalizados
├── content/
│   ├── config.ts            # Loader Starlight
│   └── docs/                # Todas las páginas (.mdx)
│       ├── index.mdx        # Homepage
│       ├── 404.mdx          # Página 404
│       └── guia-didactica/  # Contenido principal
│           ├── proyecto-1/  # PI1: 7 UDs
│           ├── proyecto-2/  # PI2: 10 UDs
│           └── ...          # Metodología, recursos, etc.
├── styles/custom.css        # Estilos globales y de componentes
scripts/                     # Generación de ebooks (generate-ebooks.mjs)
public/                      # Assets estáticos (imágenes, favicon, download/)
```

Cada UD se organiza así:
- `uds/uX-Y-nombre.mdx` — landing de la unidad
- `uds/uX-Y-nombre/NN-titulo.mdx` — secciones de la unidad (8-10 por UD)

## Despliegue

GitHub Pages vía GitHub Actions. Cada push a `main` despliega automáticamente en:

👉 [https://sergarb1.github.io/ApuntesProyectoDAW](https://sergarb1.github.io/ApuntesProyectoDAW) 👈

## Licencia

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) — Sergi Garcia Barea
