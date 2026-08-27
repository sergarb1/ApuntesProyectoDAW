## Context

La U4 es la cuarta unidad del curso y, tras la llegada de la U1 (piloto), U2 y U3, es la cuarta que debe cumplir el estándar de profundidad `contenido-unidad`. Hoy es un solo archivo de ~130 líneas. `docsLoader` de Starlight ya resuelve slugs como `u4-lenguajes-marcas` y `u4-lenguajes-marcas/NN-...` (idéntico patrón a la U1). El script de EPUB ya itera subcarpetas de unidades con el helper `expandUnit`, y el PDF (starlight-to-pdf) sigue el sidebar.

## Goals / Non-Goals

**Goals:**
- Completar la U4 con índice + 9 puntos navegables (puntos 01-07 ya creados por subagente previo, 08 y 09 nuevos), cada uno ≈110–260 líneas.
- Nivel de entrada cero: definir todo término (memoria, MVP, SMART, plan B, gancho, simulacro…) en su primer uso dentro de cada punto, con analogías.
- Mantener (y ampliar) las secciones de consolidación en el punto 9 con fallo intencionado en el laboratorio.
- Tabla de competencias (CG3, CE5, CE6) en el índice de la unidad con estado de cobertura.
- Encadenado correcto "anterior/siguiente" entre puntos y hacia la U5.

**Non-Goals:**
- No ampliar otras unidades (U5–U9 de PI1, PI2) en este change.
- No rediseñar CSS ni layout; no cambiar `scripts/*` (el helper `expandUnit` se añade al final).
- No revisar los puntos 01-07 ya generados salvo coherencia de enlaces.

## Decisions

### D1: Estructura de archivos
- Índice: `src/content/docs/apuntes-pi1/u4-lenguajes-marcas.mdx` (tabla de competencias, contenidos, enlaces a los 9 puntos).
- Puntos: `src/content/docs/apuntes-pi1/u4-lenguajes-marcas/NN-...mdx` (01-08 teoría + 09-cierre).
- **Razón:** mismo patrón que la U1/U2/U3; slugs cortos estables ya conocidos por el PDF y la portada.

### D2: División en 9 puntos
1. `01-documentar-no-es-opcional` — por qué documentar, carta de presentación.
2. `02-que-documentar-en-pi1` — memoria, presentación, código comentado.
3. `03-la-estructura-de-la-memoria` — 6 secciones estándar, tabla de extensión.
4. `04-reglas-de-oro-de-la-memoria` — 5 reglas (capturas, diagramas, código, lenguaje, ortografía).
5. `05-presentaciones-que-no-aburren` — regla del minuto inicial, gancho.
6. `06-la-estructura-de-10-minutos` — tabla minuto a minuto.
7. `07-lo-que-no-hacer-en-una-defensa` — lista de 5 errores.
8. `08-ensayo-y-plan-b` — 3 niveles de ensayo, kit de plan B, checklist (ya creado).
9. `09-cierre` — cierre pedagógico: ⭐ Sé el Proyecto, 🔥 Dilema de equipo, 🕵️ ¿Quién Soy?, ⚡ Laboratorio con fallo, 🧠 Atrévete a Pensar, 💬 Entrevista, 🤷 Preguntas Tontas, 🎬 Post-Créditos con "PRÓXIMAMENTE EN U5".
- **Razón:** cada punto alcanza ~110–260 líneas sin hinchar el índice; el cierre pedagógico queda autoconsistente en un solo archivo.

### D3: Nivel de entrada cero
Todos los acrónimos se expanden y definen en su primer uso dentro de cada punto ("MVP — Producto Mínimo Viable: la versión más pequeña..."). Los puntos reutilizan la plantilla de la U1: frase inicial, secciones `##`, tabla y analogía, "Resumen en 3 frases", bloque de vocabulario con `>` y enlaces `Anterior/Siguiente` (además de `[Volver al índice]`).

### D4: Diagramas reutilizados (no se generan nuevos)
- Solo diagramas ASCII (tablas, árboles, flujos) — no requieren assets nuevos.
- **Razón:** coherencia con la U1 y sin dependencias externas.

### D5: Cierre y continuidad
- Post-Créditos en punto 9 con "PRÓXIMAMENTE EN U5: Construir la interfaz que ve el usuario: prototipos, mobile-first, consistencia y lo que el tribunal mira. 🎨".
- Índice: tabla de competencias del CG3/CE5/CE6 con estado ✅/apartado, y enlace a los 9 puntos usando los slugs reales de los archivos 01-09.

## Risks / Trade-offs

- [Unidad con puntos 01-07 generados por subagente previo] → se asume coherencia de formato; se verifica con `verificar-lotes.mjs`.
- [Fallo intencionado del laboratorio basado en detectar errores en memoria/presentación] → se mantiene porque lo reclama el estándar; se incluyen pistas escalonadas y nota "esto se verá en U5" si procede.
- [PDF más largo por U4 separada] → deseado: libro de verdad.