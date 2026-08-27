# Design — Expandir U1 al estándar "índice + 9 puntos"

## Context

`u1-fundamentos-programacion.mdx` es el primer capítulo del "libro" de 17
unidades de la sección Apuntes. Hoy es un archivo plano de 142 líneas con
StoryIntro, la tabla de errores, SMART, alcance, dos Aclaracion, una
Comparativa y un CasoPractico. El estándar `contenido-unidad` exige que cada
unidad ampliada tenga un índice + subcarpeta con 9 puntos (8 de teoría + 1
cierre), con componentes del repo, navegación encadenada y cierre de
consolidación. Esta unidad es la piloto: define el formato para las 16
restantes.

Stack del sitio: Astro 7 + Starlight 0.41 + MDX, solo castellano, base
`/ApuntesProyectoDAW/`. No hay backend ni build por parte del subagente.

## Goals / Non-Goals

**Goals**
- Conservar el 100% del contenido factual del archivo original, expandido y
  repartido en los puntos adecuados (nada se borra).
- Fijar la plantilla de punto de teoría (frontmatter, breadcrumb, StoryIntro,
  "La idea en una frase", secciones `##`, componente, Mini-chequeo, Resumen,
  Vocabulario, pie con Anterior/Siguiente) y la del cierre (las 8 secciones
  del estándar del repo).
- Nivel de entrada cero y enfoque project-facing: definir cada acrónimo
  (MVP, SMART, CRUD...) en su primer uso; sin jerga técnica de programación.
- Autoverificación con `node scripts/verificar-lotes.mjs` y escaneo js-yaml.

**Non-Goals**
- No tocar `astro.config.mjs` (sidebar) ni hacer build; lo gestiona el orquestador.
- No crear imágenes nuevas: solo texto, tablas, bloques `>` y diagramas ASCII.
- No usar Head First ni CONRAD: se usan los componentes del repo.
- No mencionar boletines (este repo no tiene).

## Decisions

### D1 — Estructura de archivos

El índice vive en `src/content/docs/apuntes-pi1/u1-fundamentos-programacion.mdx`
e importa con `../../../components/` (3 niveles). Los 9 puntos viven en la
subcarpeta `src/content/docs/apuntes-pi1/u1-fundamentos-programacion/` e
importan con `../../../../components/` (4 niveles), siempre con rutas
absolutas de import. Todos los enlaces internos usan la base
`/ApuntesProyectoDAW/apuntes-pi1/u1-fundamentos-programacion/...` (el
verificador `verificar-lotes.mjs` busca el patrón `.../{unit}/NN-` en el
índice).

### D2 — División en 9 puntos

Distribución del contenido original:

- **01 De la idea al proyecto**: idea difusa vs concreta, "una app para
  gestionar tareas" → JIRA, componentes de una idea, las 5 preguntas como
  adelanto, ejemplo recetas/intolerancias.
- **02 El MVP como mentalidad**: definición de MVP del original, Aclaracion
  "¿Y si mi MVP se queda en algo demasiado simple?", Comparativa "¿Más
  funcionalidades o mejor hechas?".
- **03 Las cinco preguntas**: las 5 preguntas del original, cada una
  desarrollada con el ejemplo de recetas/mascotas.
- **04 Objetivos SMART**: tabla SMART del original, ampliada con ejemplos
  buenos vs malos.
- **05 El alcance**: tabla "Funcionalidad | Prioridad | Tiempo estimado" del
  original, CasoPractico "Dos proyectos, dos enfoques", Aclaracion "¿Qué hago
  si el profesor me dice que mi proyecto es demasiado simple?".
- **06 Usuario y público objetivo**: nuevo contenido (usuario tipo, personas,
  por qué no es para todos), con CasoPractico nuevo.
- **07 Validar la idea**: "No consultar con el profesor" (checklist del
  original), señales de idea grande/pequeña, pivotar, CasoPractico nuevo.
- **08 El acta de definición**: tabla de errores comunes del original, plantilla,
  por qué entregarla antes de codificar.
- **09 Cierre**: las 8 secciones de consolidación del estándar.

### D3 — Nivel de entrada cero

Cada punto parte de cero y define todo acrónimo en su primer uso (MVP,
SMART, CRUD). Cada punto incluye al menos una analogía cotidiana (casa,
cocina, río, coche). El tono es project-facing: cómo afrontar el proyecto,
no cómo programar.

### D4 — Sin imágenes; diagramas ASCII

No se añaden imágenes (el estándar solo permite texto). Se usan tablas,
bloques `>` y diagramas ASCII entre ``` ```.

### D5 — Cierre y continuidad hacia U2

El punto 09-cierre incluye ⭐ Sé el Proyecto, 🔥 Dilema de equipo (Comparativa),
🕵️ ¿Quién Soy?, ⚡ Laboratorio de Tortura (SIEMPRE con fallo intencionado y
pistas escalonadas), 🧠 Atrévete a Pensar, 💬 Entrevista de trabajo, 🤷
Preguntas Tontas y 🎬 Post-Créditos. El Post-Créditos enlaza con la siguiente
unidad mediante la línea exacta "PRÓXIMAMENTE EN U2: Diseñar la solución, la
arquitectura y las decisiones técnicas. 🏗️", con enlace a
`/ApuntesProyectoDAW/apuntes-pi1/u2-poo`.

## Risks / Trade-offs

- **Repetición entre puntos**: los puntos 01 y 03 comparten el tema de las 5
  preguntas. Se mitiga: el 01 las presenta como adelanto y el 03 las
  desarrolla una a una.
- **Longitud**: el objetivo de ~110-260 líneas por punto y ~220-260 en el
  cierre puede quedar corto si el contenido es escaso. Se mitiga ampliando
  con ejemplos, tablas y analogías sin inflar con relleno.
- **Duplicación de la tabla de errores**: la tabla de errores comunes se
  preserva íntegra en el punto 08 (donde el acta los neutraliza), y el punto
  07 reutiliza la fila de validación con el profesor.
- **Rutas frágiles**: si un slug o un título cambia, se rompe la navegación
  encadenada. Se mitiga con el escaneo de `verificar-lotes.mjs` y el escaneo
  YAML de los 10 archivos.
