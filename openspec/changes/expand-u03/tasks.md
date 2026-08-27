# Tasks — Expandir U3 al estándar "índice + 9 puntos"

## 1. Estructura e índice

- [x] 1.1 Preparar frontmatter e imports del índice (title "U3 — Organizar los datos", description con emoji)
- [x] 1.2 StoryIntro de Laura ampliado, mapa del viaje (AQUÍ ESTÁS en U3, barra 3/17), objetivo, tabla de puntos, bloques del cierre
- [x] 1.3 Tabla de competencias (CG1, CE2, CE3) y "¿Por dónde empiezo?" con continuación a U4

## 2. Puntos de teoría ampliados

- [x] 2.1 `01-piensa-en-los-datos-antes-de-programar.mdx` (las 4 preguntas del original, el caos silencioso, Aclaracion nueva)
- [x] 2.2 `02-de-las-ideas-a-las-entidades.mdx` (entidades, sustantivos, ejemplo original Usuario/Receta/Comentario/Valoracion, CasoPractico)
- [x] 2.3 `03-relaciones-entre-entidades.mdx` (las 4 relaciones 1 a N del original, "¿cuántos?", Aclaracion N a M)
- [x] 2.4 `04-del-modelo-conceptual-al-esquema.mdx` (paso 1 con diagrama ASCII original, paso 2 con tabla de atributos original, CasoPractico)
- [x] 2.5 `05-traduce-a-tablas.mdx` (paso 3 original, clave foránea, Comparativa original "¿Modelar primero o sobre la marcha?")
- [x] 2.6 `06-sql-vs-nosql-y-alternativas.mdx` (4 opciones, Aclaracion original SQL/NoSQL/archivos/memoria, elección SQLite/MySQL/PostgreSQL)
- [x] 2.7 `07-buenas-practicas-de-datos.mdx` (nombres snake_case, no guardar lo calculable, CasoPractico original "Una base de datos que creció sin control")
- [x] 2.8 `08-protege-los-datos-sensibles.mdx` (hash/bcrypt, emails con cuidado, datos bancarios fuera, las 5 preguntas clave finales del original)

## 3. Cierre de unidad

- [x] 3.1 `09-cierre.mdx` (⭐ Sé el Proyecto, 🔥 Dilema de equipo, 🕵️ ¿Quién Soy?, ⚡ Laboratorio con esquema trampa, 🧠 Atrévete a Pensar, 💬 Entrevista, 🤷 Preguntas Tontas, 🎬 Post-Créditos con "PRÓXIMAMENTE EN U4")

## 4. Verificación

- [x] 4.1 `node scripts/verificar-lotes.mjs apuntes-pi1/u3-diseno-bd` → bad=0
- [x] 4.2 Escaneo YAML de los 10 archivos con node/js-yaml (regex /^---\r?\n/) → bad=0
- [x] 4.3 Enlaces Anterior/Siguiente, "Volver al índice" y "PRÓXIMAMENTE EN U4" correctos en cada punto