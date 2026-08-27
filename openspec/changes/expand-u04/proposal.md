## Why

La U4 (`u4-lenguajes-marcas.mdx`) era un único archivo de ~130 líneas que comprimía la teoría de documentación y presentación en tablas y listas y colocaba las secciones de consolidación al final. Incumple el estándar `contenido-unidad` que pide puntos de teoría desarrollados en profundidad (≈110–260 líneas con contexto, comparativas, ejemplos resueltos y análisis), ejercicios siempre con solución y un flujo de lectura encadenado y navegable. El mismo patrón que ya aplicó la U1 (piloto) debe replicarse en la cuarta unidad del curso.

## What Changes

- Se transforma `u4-lenguajes-marcas.mdx` en un **índice de la unidad**: intro, ruta del viaje, mapa de los puntos, tabla de competencias (CG3, CE5, CE6) con estado de cobertura y "¿Por dónde empiezo?" por nivel de alumno.
- Se crea la subcarpeta `u4-lenguajes-marcas/` con **9 puntos ampliados** en formato "libro", siguiendo la estructura y navegación de la U1 (índice + 8 puntos de teoría + 09-cierre).
- Se amplía el contenido teórico de las 8 secciones previas (documentar no es opcional, qué documentar, estructura de memoria, reglas de oro, presentación, estructura 10 min, errores en defensa, ensayo/plan B) hasta alcanzar profundidad de capítulo con tablas comparativas, ejemplos resueltos, diagramas ASCII y referencias cruzadas.
- El punto 9 (**Cierre**) conserva el cierre pedagógico de la unidad: ⭐ Sé el Proyecto, 🔥 Dilema de equipo (Comparativa), 🕵️ ¿Quién Soy?, ⚡ Laboratorio de Tortura (con fallo intencionado), 🧠 Atrévete a Pensar, 💬 Entrevista de trabajo, 🤷 Preguntas Tontas y 🎬 Post-Créditos con "PRÓXIMAMENTE EN U5".
- El **sidebar** (`astro.config.mjs`) despliega al grupo Unidad 4 con sus 9 puntos subyacentes (lo gestiona el orquestador).
- Los scripts de exportación (EPUB/PDF) ya recorren subcarpetas con el helper `expandUnit` (cambio posterior), por lo que no necesitan cambios inmediatos.

## Capabilities

### New Capabilities
- (ninguna nueva — se reutiliza la capacidad existente `contenido-unidad`.)

### Modified Capabilities
- `contenido-unidad`: se aplica por cuarta vez a una unidad completa (U4) con el estándar de profundidad, ejemplos y cierres de unidad. Se aprovecha para corregir la coherencia del Post-Créditos (la siguiente es U5, no U6).

## Impact

- `src/content/docs/apuntes-pi1/u4-lenguajes-marcas.mdx` (reformado como índice de unidad)
- `src/content/docs/apuntes-pi1/u4-lenguajes-marcas/*.mdx` (9 puntos: 01-07 ya existían, 08 y 09 nuevos)
- `astro.config.mjs` (grupo desplegable de la Unidad 4 — orquestador)
- `openspec/specs/contenido-unidad/spec.md` (sin cambios, se cumple)
- `src/content/docs/index.md` / `scripts/*` (sin cambios)