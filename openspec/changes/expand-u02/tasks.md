# Tasks — Expandir U2 al estándar "índice + 9 puntos"

## 1. Estructura e índice

- [x] 1.1 Preparar frontmatter e imports del índice (title "U2 — Diseñar la solución", description con emoji)
- [x] 1.2 StoryIntro de Pablo ampliado, mapa del viaje (posición U2, barra 2/17), objetivo, tabla de puntos, bloques del cierre
- [x] 1.3 Tabla de competencias (CG1, CG2, CE2) y "¿Por dónde empiezo?" con continuidad hacia U3

## 2. Puntos de teoría ampliados

- [x] 2.1 `01-por-que-disenar-antes-de-codificar.mdx` (plano de la casa, las 4 preguntas del diseño, diseñar para escribir después, Aclaracion "proyecto pequeño")
- [x] 2.2 `02-divide-y-venceras.mdx` (principio, criterios de corte, señales de buena división, CasoPractico nuevo)
- [x] 2.3 `03-arquitectura-por-capas.mdx` (diagrama ASCII de capas del original, definición de cada capa, comunicación solo con la de al lado, Comparativa nueva)
- [x] 2.4 `04-organizacion-por-funcionalidades.mdx` (árbol ASCII Usuarios/Productos/Pedidos/Pagos, independencia, capas × funcionalidades, Aclaracion sobre dependencias)
- [x] 2.5 `05-diagrama-de-arquitectura.mdx` (cajas y flechas, Draw.io/Mermaid/lápiz y papel, diagrama ASCII Navegador→Servidor→API→BD, definición de API, Aclaracion)
- [x] 2.6 `06-diagrama-de-componentes.mdx` (tabla del original ampliada, lectura de "Depende de", CasoPractico nuevo con la app de recetas)
- [x] 2.7 `07-decisiones-tecnicas-con-criterio.mdx` (las 3 reglas y las 3 preguntas del original, Comparativa original "¿Diseñar primero o sobre la marcha?")
- [x] 2.8 `08-validar-el-diseno-en-equipo.mdx` (CasoPractico original "El equipo que no diseñó nada", checklist final del original, pasos de validación)

## 3. Cierre de unidad

- [x] 3.1 `09-cierre.mdx` (⭐ Sé el Proyecto, 🔥 Dilema de equipo, 🕵️ ¿Quién Soy?, ⚡ Laboratorio con fallo intencionado en diagrama de componentes, 🧠 Atrévete a Pensar, 💬 Entrevista, 🤷 Preguntas Tontas, 🎬 Post-Créditos con "PRÓXIMAMENTE EN U3")

## 4. Verificación

- [x] 4.1 `node scripts/verificar-lotes.mjs apuntes-pi1/u2-poo` → bad=0
- [x] 4.2 Escaneo YAML de los 10 archivos con node/js-yaml (regex /^---\r?\n/) → bad=0
- [x] 4.3 Enlaces Anterior/Siguiente y "Volver al índice" correctos en cada punto