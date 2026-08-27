# Design — Expandir U3 al estándar "índice + 9 puntos"

## Context

`u3-diseno-bd.mdx` es el tercer capítulo del "libro" de 17 unidades de la
sección Apuntes. Hoy es un archivo plano de 143 líneas con StoryIntro de
Laura, las 4 preguntas, sustantivos → entidades, relaciones 1 a N, un
Aclaracion ("¿Necesito siempre una base de datos relacional?"), pasos 1-3 del
modelo conceptual al esquema, una Comparativa ("¿Modelar primero o sobre la
marcha?"), buenas prácticas, un CasoPractico ("Una base de datos que creció
sin control") y las 5 preguntas clave finales. El estándar `contenido-unidad`
exige índice + subcarpeta con 9 puntos (8 de teoría + 1 cierre). La unidad
piloto U1 ya fijó el formato; U3 lo replica.

Stack del sitio: Astro 7 + Starlight 0.41 + MDX, solo castellano, base
`/ApuntesProyectoDAW/`. No hay backend ni build por parte del subagente.

## Goals / Non-Goals

**Goals**
- Conservar el 100% del contenido factual del archivo original, expandido y
  repartido en los puntos adecuados (nada se borra).
- Seguir la plantilla de punto de teoría (frontmatter, breadcrumb, StoryIntro,
  "La idea en una frase", secciones `##`, componente, Mini-chequeo, Resumen,
  Vocabulario, pie con Anterior/Siguiente) y la del cierre (las 8 secciones
  del estándar del repo).
- Nivel de entrada cero y enfoque project-facing: definir cada concepto o
  acrónimo (entidad, clave primaria, clave foránea, hash, bcrypt, SQL, NoSQL,
  MVP...) en su primer uso; sin jerga de programación.
- Autoverificación con `node scripts/verificar-lotes.mjs` y escaneo js-yaml.

**Non-Goals**
- No tocar `astro.config.mjs` (sidebar) ni hacer build; lo gestiona el orquestador.
- No crear imágenes nuevas: solo texto, tablas, bloques `>` y diagramas ASCII.
- No usar Head First ni CONRAD: se usan los componentes del repo.
- No mencionar boletines (este repo no tiene).

## Decisions

### D1 — Estructura de archivos

El índice vive en `src/content/docs/apuntes-pi1/u3-diseno-bd.mdx` e importa
con `../../../components/` (3 niveles). Los 9 puntos viven en la subcarpeta
`src/content/docs/apuntes-pi1/u3-diseno-bd/` e importan con
`../../../../components/` (4 niveles), siempre con rutas absolutas de import.
Todos los enlaces internos usan la base
`/ApuntesProyectoDAW/apuntes-pi1/u3-diseno-bd/...` (el verificador
`verificar-lotes.mjs` busca el patrón `.../{unit}/NN-` en el índice).

### D2 — División en 9 puntos

Distribución del contenido original:

- **01 Piensa en los datos antes de programar**: las 4 preguntas del original
  (entidades, atributos, relaciones, reglas), el caos de datos silencioso,
  Aclaracion "¿Pensar en los datos no es cosa de Bases de Datos?".
- **02 De las ideas a las entidades**: qué es una entidad, extraer sustantivos
  (ejemplo original Usuario/Receta/Comentario/Valoracion), sustantivo vs
  atributo, CasoPractico "De un enunciado de proyecto a cuatro entidades".
- **03 Relaciones entre entidades**: la pregunta "¿cuántos?", las 4 relaciones
  1 a N del original, significado de 1 a N, Aclaracion sobre N a M.
- **04 Del modelo conceptual al esquema**: paso 1 (dibujo, diagrama ASCII
  original `[Usuario] ───< tiene >─── [Receta]`) y paso 2 (tabla de atributos
  original), CasoPractico "Dibujando el esquema de la app de recetas".
- **05 Traduce a tablas**: paso 3 original (entidad → tabla, atributo →
  columna, 1 a N → clave foránea), definición de clave foránea, la Comparativa
  original "¿Modelar primero o sobre la marcha?" AQUÍ.
- **06 SQL vs NoSQL y alternativas**: la tabla de las 4 opciones, el Aclaracion
  original "¿Necesito siempre una base de datos relacional?" (SQL/NoSQL/
  archivos/memoria; para DAW lo normal es SQL), qué es SQL y NoSQL, elección
  SQLite/MySQL/PostgreSQL.
- **07 Buenas prácticas de datos**: nombrar bien (plural snake_case, columnas
  descriptivas, `id`), no guardar lo calculable (edad, precio_total), el
  CasoPractico original "Una base de datos que creció sin control" y avance a
  los datos sensibles.
- **08 Protege los datos sensibles**: hash (bcrypt) y la diferencia hash vs
  encriptar, emails con cuidado, datos bancarios fuera, CasoPractico de fuga,
  las 5 preguntas clave finales del original.
- **09 Cierre**: las 8 secciones de consolidación del estándar.

### D3 — Nivel de entrada cero

Cada punto parte de cero y define cada concepto en su primer uso (entidad,
atributo, relación, clave primaria, clave foránea, hash, bcrypt, SQL, NoSQL,
MVP). Cada punto incluye al menos una analogía cotidiana (mudanza, lista de la
compra, llaves de casa, hoja de cálculo, cajón de herramientas, despensa,
cuaderno de un médico). El tono es project-facing: cómo afrontar el proyecto,
no cómo programar.

### D4 — Sin imágenes; diagramas ASCII

No se añaden imágenes (el estándar solo permite texto). Se usan tablas,
bloques `>` y diagramas ASCII entre ``` ``` (modelo conceptual, barra de
progreso del caos, traducción a tablas).

### D5 — Cierre y continuidad hacia U4

El punto 09-cierre incluye ⭐ Sé el Proyecto (el alumno es un modelo de datos
con 3 opciones), 🔥 Dilema de equipo (Comparativa SQL vs NoSQL), 🕵️ ¿Quién
Soy? (entidad, clave foránea, hash, NoSQL), ⚡ Laboratorio de Tortura con
esquema de biblioteca con 5 fallos intencionados y pistas escalonadas, 🧠
Atrévete a Pensar, 💬 Entrevista de trabajo, 🤷 Preguntas Tontas y 🎬
Post-Créditos que enlaza con U4 mediante la línea exacta "PRÓXIMAMENTE EN U4:
Documentar y comunicar el proyecto. 📄", con enlace a
`/ApuntesProyectoDAW/apuntes-pi1/u4-lenguajes-marcas`.

## Risks / Trade-offs

- **Repetición entre puntos**: las buenas prácticas del punto 07 y los datos
  sensibles del 08 se solapan (el 08 es un desarrollo del tercer mandamiento
  del 07). Se mitiga: el 07 solo avanza el tema y enlaza al 08.
- **Longitud**: el objetivo de ~110-260 líneas por punto y ~220-260 en el
  cierre puede quedar corto si el contenido es escaso. Se mitiga ampliando con
  ejemplos, tablas y analogías sin inflar con relleno.
- **El esquema original no tenía cierre ni competencias**: se añaden
  siguiendo el estándar (8 secciones) y la tabla de competencias reales (CG1,
  CE2, CE3 de pi1/competencias.mdx).
- **Rutas frágiles**: si un slug o un título cambia, se rompe la navegación
  encadenada. Se mitiga con el escaneo de `verificar-lotes.mjs` y el escaneo
  YAML de los 10 archivos.