# Expandir U1 · Definir el proyecto al estándar "índice + 9 puntos"

## Why

La unidad `u1-fundamentos-programacion` es la única de las 17 que aún existe
como archivo plano sin la estructura de "libro" del estándar
`contenido-unidad` (índice + subcarpeta con 9 puntos MDX + cierre). Además,
es la **unidad piloto**: el resto del proyecto (U2-U8 de PI1 y U1-U9 de PI2)
copiará su estructura. Su resultado debe fijar el formato: nivel de entrada
cero, contenido factual del original 100% conservado, componentes propios del
repo (StoryIntro, Aclaracion, Comparativa, CasoPractico), navegación
encadenada Anterior/Siguiente y cierre con las secciones de consolidación.

## What Changes

- El índice `src/content/docs/apuntes-pi1/u1-fundamentos-programacion.mdx`
  se reescribe al formato estándar: StoryIntro de Ana ampliado, mapa del
  viaje global (17 unidades), objetivo de la unidad, tabla de 9 puntos
  enlazados, bloques del cierre, tabla de competencias (CG1, CG5, CE1) y
  "¿Por dónde empiezo?".
- Se crea la subcarpeta
  `src/content/docs/apuntes-pi1/u1-fundamentos-programacion/` con 9 archivos:
  `01-de-la-idea-al-proyecto` a `08-el-acta-de-definicion` (teoría) y
  `09-cierre.mdx` (cierre de unidad).
- El contenido factual del archivo original se reparte entre los puntos
  adecuados: 5 preguntas, definición de MVP, tabla SMART, tabla de alcance,
  los 2 Aclaracion, la Comparativa "¿Más funcionalidades o mejor hechas?",
  el CasoPractico "Dos proyectos, dos enfoques" y la tabla de errores comunes.
- El sidebar (astro.config.mjs) y el build los gestiona el orquestador; este
  cambio NO toca configuración ni despliega.

## Capabilities

Reutiliza la capability `contenido-unidad` (`openspec/specs/contenido-unidad/spec.md`),
que define el estándar de calidad: nivel de entrada cero, tamaño de capítulo,
estilo MDX del repo, cierre obligatorio, soluciones en `<details>`, coherencia
factual, cobertura de competencias y flujo de lectura encadenado.

## Impact

- `src/content/docs/apuntes-pi1/u1-fundamentos-programacion.mdx` — reescrito (índice, ~100 líneas).
- `src/content/docs/apuntes-pi1/u1-fundamentos-programacion/01-de-la-idea-al-proyecto.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u1-fundamentos-programacion/02-el-mvp-como-mentalidad.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u1-fundamentos-programacion/03-las-cinco-preguntas.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u1-fundamentos-programacion/04-objetivos-smart.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u1-fundamentos-programacion/05-el-alcance.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u1-fundamentos-programacion/06-usuario-y-publico-objetivo.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u1-fundamentos-programacion/07-validar-la-idea.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u1-fundamentos-programacion/08-el-acta-de-definicion.mdx` — nuevo.
- `src/content/docs/apuntes-pi1/u1-fundamentos-programacion/09-cierre.mdx` — nuevo.
- `openspec/changes/expand-u01/` — ficheros OpenSpec de este cambio.

No se modifica `astro.config.mjs`. No se hace build. No se hacen commits.
