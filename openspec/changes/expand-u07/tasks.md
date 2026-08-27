# Tasks — Expandir U7 al estándar "índice + 9 puntos"

## Checklist de ejecución

### 1. OpenSpec
- [x] Crear `openspec/changes/expand-u07/proposal.md`
- [x] Crear `openspec/changes/expand-u07/design.md`
- [ ] Crear `openspec/changes/expand-u07/tasks.md` (este archivo)
- [ ] Crear `openspec/changes/expand-u07/.openspec.yaml`

### 2. Índice de unidad (`src/content/docs/apuntes-pi1/u7-git.mdx`)
- [ ] Frontmatter: `title: "U7 — Trabajar en equipo"`, `description` con emoji 👥
- [ ] Imports: StoryIntro, Aclaracion, Comparativa, CasoPractico desde `../../../components/`
- [ ] StoryIntro original (Marta/Javi/Lucas, merge infernal)
- [ ] Mapa viaje U7 = 7/17 con barra visual
- [ ] Objetivo de la unidad (lista de aprendizajes)
- [ ] Tabla mapa de la unidad (9 puntos con enlaces absolutos)
- [ ] Qué encontrarás en el cierre (09)
- [ ] Tabla competencias: CG4, CE4
- [ ] "¿Por dónde empiezo?" con 4 perfiles
- [ ] Enlaces: Primer punto → 01, Siguiente → U8

### 3. Puntos de teoría (8 archivos en `src/content/docs/apuntes-pi1/u7-git/`)
- [ ] 01-el-equipo-antes-que-el-codigo.mdx
- [ ] 02-herramientas-y-reuniones.mdx
- [ ] 03-reparto-de-tareas.mdx
- [ ] 04-flujo-git-main-dev-feature.mdx (diagrama ASCII original + Aclaracion "¿Y si somos dos?")
- [ ] 05-codigo-limpio-en-equipo.mdx
- [ ] 06-commits-que-se-entienden.mdx
- [ ] 07-code-review.mdx
- [ ] 08-conflictos-codigo-y-personas.mdx (Aclaracion movida a 04, CasoPractico original AQUÍ)

Cada punto debe tener:
- [ ] Frontmatter con `title` (formato "NN — Título") y `description` con emoji
- [ ] Imports desde `../../../../components/`
- [ ] Breadcrumb: `> 🗺️ **Estás en:** 📓 **U7 · Trabajar en equipo** → NN · Título`
- [ ] StoryIntro con `icono` y `titulo` contextualizado
- [ ] "La idea en una frase" (bloque `>`)
- [ ] Secciones `##` con contenido expandido
- [ ] Al menos un componente (Aclaracion, Comparativa, o CasoPractico) distribuido
- [ ] Mini-chequeo (2 preguntas con `<details>` respuestas)
- [ ] Resumen en 3 frases
- [ ] Vocabulario rápido (tabla)
- [ ] Pie: `📚 [Volver al índice...] · **Anterior:** ... · **Siguiente:** ...`

### 4. Cierre (`src/content/docs/apuntes-pi1/u7-git/09-cierre.mdx`)
- [ ] Frontmatter + imports + breadcrumb
- [ ] StoryIntro de contexto
- [ ] ⭐ Sé el Proyecto (3 opciones + `<details>` respuesta)
- [ ] 🔥 Dilema de equipo (Comparativa con 2 voces)
- [ ] 🕵️ ¿Quién Soy? (4 enigmas + `<details>` respuestas)
- [ ] ⚡ Laboratorio de Tortura (con fallo intencionado + 3 pistas escalonadas + solución)
- [ ] 🧠 Atrévete a Pensar (4 preguntas abiertas + `<details>` sugerencias)
- [ ] 💬 Entrevista de trabajo (5 preguntas + `<details>` modelos)
- [ ] 🤷 Preguntas Tontas (3 bloques `> ❓ Pregunta / > **Respuesta**`)
- [ ] 🎬 Post-Créditos con enlace a U8: "PRÓXIMAMENTE EN U8: Planificar y organizarse: Kanban, SCRUM, estimar y recuperar tiempo. 📋"
- [ ] Pie: Volver al índice + Anterior (08)

### 5. Autoverificación
- [ ] Ejecutar `node scripts/verificar-lotes.mjs apuntes-pi1/u7-git`
- [ ] Verificar: YAML bad=0, badLinks=0, ✅ Todo correcto

### 6. Entregable final
- [ ] Lista de 10 archivos MDX creados/modificados
- [ ] Resultados de verificación
- [ ] Desviaciones si las hay