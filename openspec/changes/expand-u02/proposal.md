# Expandir U2 · Diseñar la solución al estándar "índice + 9 puntos"

## Why

La unidad `u2-poo` es la segunda de las 17 del proyecto que aún existe como
archivo plano sin la estructura de "libro" del estándar `contenido-unidad`
(índice + subcarpeta con 9 puntos MDX + cierre). La unidad piloto U1
(`expand-u01`) ya fijó el formato: nivel de entrada cero, contenido factual
del original 100% conservado, componentes propios del repo (StoryIntro,
Aclaracion, Comparativa, CasoPractico), navegación encadenada Anterior/
Siguiente y cierre de consolidación. U2 debe copiar ese formato.

## What Changes

- El índice `src/content/docs/apuntes-pi1/u2-poo.mdx` se reescribe al formato
  estándar: StoryIntro de Pablo ampliado, mapa del viaje global (17 unidades,
  posición U2), objetivo de la unidad, tabla de 9 puntos enlazados, bloques del
  cierre, tabla de competencias (CG1, CG2, CE2) y "¿Por dónde empiezo?".
- Se crea la subcarpeta `src/content/docs/apuntes-pi1/u2-poo/` con 9 archivos:
  `01-por-que-disenar-antes-de-codificar` a `08-validar-el-diseno-en-equipo`
  (teoría) y `09-cierre.mdx` (cierre de unidad).
- El contenido factual del archivo original se reparte entre los puntos:
  el plano de la casa y las 4 preguntas del diseño (01), divide y vencerás con
  sus criterios (02), el diagrama ASCII de capas y la regla de comunicación
  entre capas (03), el árbol de funcionalidades y la independencia (04), el
  diagrama de arquitectura con Draw.io/Mermaid/lápiz y papel y el diagrama
  ASCII `[Navegador] → [Servidor web] → [API] → [Base de datos]` (05), la tabla
  de componentes original ampliada (06), las 3 reglas y 3 preguntas técnicas
  con la Comparativa original (07) y el CasoPractico "El equipo que no diseñó
  nada" con el checklist de 6 items (08).
- El Aclaracion "¿Y si mi proyecto es pequeño y no necesita tanta estructura?"
  se conserva íntegro en el punto 01.
- El sidebar (astro.config.mjs) y el build los gestiona el orquestador; este
  cambio NO toca configuración ni despliega.

## Capabilities

Reutiliza la capability `contenido-unidad` (`openspec/specs/contenido-unidad/spec.md`),
que define el estándar de calidad: nivel de entrada cero, tamaño de capítulo,
estilo MDX del repo, cierre obligatorio, soluciones en `<details>`, coherencia
factual, cobertura de competencias y flujo de lectura encadenado.

## Impact

- `src/content/docs/apuntes-pi1/u2-poo.mdx` — reescrito (índice, ~100 líneas).
- `src/content/docs/apuntes-pi1/u2-poo/01-por-que-disenar-antes-de-codificar.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u2-poo/02-divide-y-venceras.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u2-poo/03-arquitectura-por-capas.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u2-poo/04-organizacion-por-funcionalidades.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u2-poo/05-diagrama-de-arquitectura.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u2-poo/06-diagrama-de-componentes.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u2-poo/07-decisiones-tecnicas-con-criterio.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u2-poo/08-validar-el-diseno-en-equipo.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u2-poo/09-cierre.mdx` — nuevo.
- `openspec/changes/expand-u02/` — ficheros OpenSpec de este cambio.

No se modifica `astro.config.mjs`. No se hace build. No se hacen commits.
