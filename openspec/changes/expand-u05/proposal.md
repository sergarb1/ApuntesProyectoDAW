## Why

La U5 (`u5-frontend-basico.mdx`) era un único archivo de ~120 líneas que comprimía la teoría de interfaces en listas y tablas. Incumple el estándar `contenido-unidad` que pide puntos de teoría desarrollados en profundidad (≈110–260 líneas con contexto, comparativas, ejemplos resueltos y análisis), ejercicios siempre con solución y un flujo de lectura encadenado y navegable. El mismo patrón que ya aplicó la U1 (piloto) debe replicarse en la quinta unidad.

## What Changes

- Se transforma `u5-frontend-basico.mdx` en un **índice de la unidad**: intro, ruta del viaje, mapa de los puntos, tabla de competencias (CG5, CE3) con estado de cobertura y "¿Por dónde empiezo?" por nivel de alumno.
- Se crea la subcarpeta `u5-frontend-basico/` con **9 puntos ampliados** en formato "libro", siguiendo la estructura y navegación de la U1.
- Se amplía el contenido teórico de las 8 secciones previas (interfaz importa, 4 preguntas usuario, prototipo baja fidelidad, prototipo interactivo, mobile-first, consistencia visual, feedback/errores, checklist tribunal) hasta profundidad de capítulo con tablas, ejemplos, diagramas ASCII y referencias cruzadas.
- El punto 9 (**Cierre**) conserva el cierre pedagógico: ⭐ Sé la Interfaz, 🔥 Dilema de equipo, 🕵️ ¿Quién Soy?, ⚡ Laboratorio con fallo intencionado, 🧠 Atrévete a Pensar, 💬 Entrevista, 🤷 Preguntas Tontas, 🎬 Post-Créditos con "PRÓXIMAMENTE EN U6".
- Sidebar (`astro.config.mjs`) despliega Unidad 5 con 9 puntos (orquestador).
- Scripts de exportación usarán helper `expandUnit` (cambio posterior).

## Capabilities

### Modified Capabilities
- `contenido-unidad`: se aplica por quinta vez (U5) con estándar de profundidad, ejemplos y cierres. Corrige coherencia Post-Créditos (siguiente es U6).

## Impact

- `src/content/docs/apuntes-pi1/u5-frontend-basico.mdx` (índice)
- `src/content/docs/apuntes-pi1/u5-frontend-basico/*.mdx` (9 puntos: 01-08 + 09-cierre)
- `astro.config.mjs` (grupo desplegable — orquestador)
- `openspec/specs/contenido-unidad/spec.md` (se cumple)