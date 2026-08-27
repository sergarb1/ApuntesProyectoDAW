# Expandir U7 · Trabajar en equipo al estándar "índice + 9 puntos"

## Why

La unidad `u7-git` existe como archivo plano de 159 líneas sin la estructura de "libro" del estándar `contenido-unidad` (índice + subcarpeta con 9 puntos MDX + cierre). Debe seguir el formato fijado por la unidad piloto U1: nivel de entrada cero, contenido factual 100% conservado, componentes propios del repo (StoryIntro, Aclaracion, Comparativa, CasoPractico), navegación encadenada Anterior/Siguiente y cierre con las 8 secciones de consolidación.

## What Changes

- El índice `src/content/docs/apuntes-pi1/u7-git.mdx` se reescribe al formato estándar: StoryIntro original ampliado (Marta/Javi/Lucas), mapa del viaje global (17 unidades, posición 7/17), objetivo de la unidad, tabla de 9 puntos enlazados, bloques del cierre, tabla de competencias (CG4, CE4) y "¿Por dónde empiezo?".
- Se crea la subcarpeta `src/content/docs/apuntes-pi1/u7-git/` con 9 archivos: `01-el-equipo-antes-que-el-codigo` a `08-conflictos-codigo-y-personas` (teoría) y `09-cierre.mdx` (cierre de unidad).
- El contenido factual del archivo original se reparte entre los puntos adecuados: reglas de equipo, flujo Git (diagrama ASCII original), código limpio (ESLint/Prettier), code review, commits descriptivos, conflictos de código, conflictos de personas. La Aclaracion "¿Y si somos dos?" va en el punto 04. El CasoPractico "El equipo que aprendió a ser equipo" va en el punto 08.
- El sidebar (astro.config.mjs) y el build los gestiona el orquestador; este cambio NO toca configuración ni despliega.

## Capabilities

Reutiliza la capability `contenido-unidad` (`openspec/specs/contenido-unidad/spec.md`), que define el estándar de calidad: nivel de entrada cero, tamaño de capítulo, estilo MDX del repo, cierre obligatorio, soluciones en `<details>`, coherencia factual, cobertura de competencias y flujo de lectura encadenado.

## Impact

- `src/content/docs/apuntes-pi1/u7-git.mdx` — reescrito (índice, ~100 líneas).
- `src/content/docs/apuntes-pi1/u7-git/01-el-equipo-antes-que-el-codigo.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u7-git/02-herramientas-y-reuniones.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u7-git/03-reparto-de-tareas.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u7-git/04-flujo-git-main-dev-feature.mdx` — nuevo (diagrama ASCII original).
- `src/content/docs/apuntes-pi1/u7-git/05-codigo-limpio-en-equipo.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u7-git/06-commits-que-se-entienden.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u7-git/07-code-review.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u7-git/08-conflictos-codigo-y-personas.mdx` — nuevo (Aclaracion + CasoPractico).
- `src/content/docs/apuntes-pi1/u7-git/09-cierre.mdx` — nuevo.
- `openspec/changes/expand-u07/` — ficheros OpenSpec de este cambio.

No se modifica `astro.config.mjs`. No se hace build. No se hacen commits.