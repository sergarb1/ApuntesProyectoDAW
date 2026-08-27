# Expandir U3 · Organizar los datos al estándar "índice + 9 puntos"

## Why

La unidad `u3-diseno-bd` sigue existiendo como archivo plano sin la
estructura de "libro" del estándar `contenido-unidad` (índice + subcarpeta
con 9 puntos MDX + cierre). Sigue la estela de la unidad piloto
`u1-fundamentos-programacion`, ya ampliada, y debe cumplir el mismo formato:
nivel de entrada cero, contenido factual del original 100% conservado,
componentes propios del repo (StoryIntro, Aclaracion, Comparativa,
CasoPractico), navegación encadenada Anterior/Siguiente y cierre con las
secciones de consolidación. La unidad trata de qué información guardar, cómo
estructurarla y qué herramientas usar en el Proyecto Intermodular.

## What Changes

- El índice `src/content/docs/apuntes-pi1/u3-diseno-bd.mdx` se reescribe al
  formato estándar: StoryIntro de Laura ampliado, mapa del viaje global (con
  "AQUÍ ESTÁS" en U3 y barra 3/17), objetivo de la unidad, tabla de 9 puntos
  enlazados, bloques del cierre, tabla de competencias (CG1, CE2, CE3) y
  "¿Por dónde empiezo?" con continuación hacia U4.
- Se crea la subcarpeta `src/content/docs/apuntes-pi1/u3-diseno-bd/` con 9
  archivos: `01-piensa-en-los-datos-antes-de-programar` a
  `08-protege-los-datos-sensibles` (teoría) y `09-cierre.mdx` (cierre).
- El contenido factual del archivo original se reparte entre los puntos
  adecuados: las 4 preguntas (01), sustantivos → entidades (02), relaciones
  1 a N (03), pasos 1-2 con diagrama ASCII y tabla de atributos (04), paso 3
  con clave foránea y la Comparativa "¿Modelar primero o sobre la marcha?"
  (05), el Aclaracion "¿Necesito siempre una base de datos relacional?" con
  SQL/NoSQL/archivos/memoria (06), las buenas prácticas y el CasoPractico
  "Una base de datos que creció sin control" (07), los datos sensibles (hash,
  emails, bancarios) y las 5 preguntas clave finales (08).
- El cierre (09) incluye las 8 secciones de consolidación del estándar con
  laboratorio de esquema con fallos intencionados y Post-Créditos que enlaza
  con U4 ("PRÓXIMAMENTE EN U4").
- El sidebar (astro.config.mjs) y el build los gestiona el orquestador; este
  cambio NO toca configuración ni despliega.

## Capabilities

Reutiliza la capability `contenido-unidad` (`openspec/specs/contenido-unidad/spec.md`),
que define el estándar de calidad: nivel de entrada cero, tamaño de capítulo,
estilo MDX del repo, cierre obligatorio, soluciones en `<details>`, coherencia
factual, cobertura de competencias y flujo de lectura encadenado.

## Impact

- `src/content/docs/apuntes-pi1/u3-diseno-bd.mdx` — reescrito (índice, ~95 líneas).
- `src/content/docs/apuntes-pi1/u3-diseno-bd/01-piensa-en-los-datos-antes-de-programar.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u3-diseno-bd/02-de-las-ideas-a-las-entidades.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u3-diseno-bd/03-relaciones-entre-entidades.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u3-diseno-bd/04-del-modelo-conceptual-al-esquema.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u3-diseno-bd/05-traduce-a-tablas.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u3-diseno-bd/06-sql-vs-nosql-y-alternativas.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u3-diseno-bd/07-buenas-practicas-de-datos.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u3-diseno-bd/08-protege-los-datos-sensibles.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u3-diseno-bd/09-cierre.mdx` — nuevo.
- `openspec/changes/expand-u03/` — ficheros OpenSpec de este cambio.

No se modifica `astro.config.mjs`. No se hace build. No se hacen commits.