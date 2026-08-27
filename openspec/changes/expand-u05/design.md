## Context

La U5 es la quinta unidad del curso y debe cumplir el estándar `contenido-unidad`. `docsLoader` resuelve slugs `u5-frontend-basico` y `u5-frontend-basico/NN-...`. El script EPUB usará helper `expandUnit`.

## Goals / Non-Goals

**Goals:**
- Completar U5 con índice + 9 puntos navegables, cada uno ≈110–260 líneas.
- Nivel de entrada cero: definir términos (mobile-first, prototipo, consistencia, feedback, MVP...) en primer uso con analogías.
- Cierre con fallo intencionado en laboratorio.
- Tabla competencias (CG5, CE3) en índice con cobertura.
- Encadenado correcto anterior/siguiente y hacia U6.

**Non-Goals:**
- No ampliar otras unidades en este change.
- No rediseñar CSS/layout; no cambiar scripts (helper `expandUnit` se añade al final).

## Decisions

### D1: Estructura
- Índice: `u5-frontend-basico.mdx`
- Puntos: `u5-frontend-basico/NN-...mdx` (01-08 teoría + 09-cierre)
- **Razón:** mismo patrón U1-U4.

### D2: División 9 puntos
1. `01-la-interfaz-importa` — por qué la interfaz no es cosmética
2. `02-piensa-en-el-usuario` — 4 preguntas por pantalla
3. `03-prototipo-baja-fidelidad` — papel/Figma antes de HTML
4. `04-prototipo-interactivo` — validar navegación antes de codificar
5. `05-implementacion-mobile-first` — HTML → CSS → JS, 375px primero
6. `06-consistencia-visual` — paleta, tipografía, espaciado, componentes
7. `07-feedback-y-errores-visibles` — feedback, errores asociados al campo
8. `08-lo-que-el-tribunal-mira` — checklist real defensa (Aclaracion "¿Y si no se me da bien el diseño?" AQUÍ + CasoPractico)
9. `09-cierre` — ⭐ Sé la Interfaz, 🔥 Dilema backend vs UI, 🕵️ ¿Quién Soy?, ⚡ Laboratorio (fallo: botón gris/contraste, sin validación real-time, enlace pequeño), 🧠 Atrévete, 💬 Entrevista, 🤷 Preguntas Tontas, 🎬 Post-Créditos "PRÓXIMAMENTE EN U6"

### D3: Nivel entrada cero
Acrónimos definidos en primer uso (MVP, mobile-first, wireframe, mockup, UI, UX, CSS, JS, HTML, API, JSON, REST, JWT, DOM, SPA, SSR, CSR...). Plantilla U1: frase inicial, secciones `##`, tabla/analogía, "Resumen en 3 frases", vocabulario `>`, enlaces Anterior/Siguiente/Volver.

### D4: Diagramas
Solo ASCII (tablas, árboles, flujos). Sin assets nuevos.

### D5: Cierre y continuidad
- Post-Créditos: "PRÓXIMAMENTE EN U6: Implementar la lógica: priorizar, programar por partes y refactorizar a tiempo. ⚙️"
- Índice: tabla competencias CG5/CE3, enlaces a 9 puntos con slugs reales.

## Risks / Trade-offs
- [Puntos 01-08 generados por subagente] → se verifica con `verificar-lotes.mjs`.
- [Fallo intencionado laboratorio: contraste/validación] → estándar lo reclama; pistas escalonadas.