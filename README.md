# Apuntes Proyecto Intermodular DAW I y II

Sitio web educativo con guía didáctica y apuntes para afrontar el **Proyecto Intermodular** del ciclo **Desarrollo de Aplicaciones Web (DAW)**. Curso 2026-2027.

Enfoque **project-facing**: no es contenido técnico (cómo programar), sino cómo afrontar, planificar, ejecutar y defender un proyecto software.

## Tecnologías

- [Astro](https://astro.build) 7.0.2
- [Starlight](https://starlight.astro.build) 0.41.0
- MDX para componentes en contenido
- Pagefind para búsqueda offline
- GitHub Actions para despliegue continuo

## Características

- **Homepage** con portada, hero buttons y card grids (2 columnas en PC, 1 en móvil)
- **Guía Didáctica** completa: plan docente, retos PI1 (5), sprints PI2 (7), evaluación, FAQ, ideas
- **Apuntes PI1** (8 unidades) y **PI2** (9 unidades) con enfoque práctico
- **Componentes propios**: StoryIntro, Aclaracion, Comparativa, CasoPractico
- **Animaciones**: fadeInUp en cards, pulse en 404, transiciones suaves hover
- **404 divertida** con emoji animado y navegación rápida
- **Logo y favicon SVG** personalizados (icono de libro abierto)
- **Modo oscuro/claro**, búsqueda offline, sitemap
- **Responsive**: adaptado a móvil y escritorio

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build estático en dist/
npm run preview  # previsualizar build
```

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
│       ├── pi1/             # Guía PI1
│       ├── pi2/             # Guía PI2
│       ├── apuntes-pi1/     # Apuntes PI1 (ocultos del sidebar)
│       └── apuntes-pi2/     # Apuntes PI2 (ocultos del sidebar)
├── styles/custom.css        # Estilos globales y de componentes
public/                      # Assets estáticos (imágenes, favicon)
```

## Despliegue

GitHub Pages vía GitHub Actions. Cada push a `main` despliega automáticamente en:

👉 [https://sergarb1.github.io/ApuntesProyectoDAW](https://sergarb1.github.io/ApuntesProyectoDAW) 👈

## Licencia

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) — Sergi Garcia Barea
