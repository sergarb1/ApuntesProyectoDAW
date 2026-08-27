# Design — Expandir U2 al estándar "índice + 9 puntos"

## Context

`u2-poo.mdx` es el segundo capítulo del "libro" de 17 unidades de la sección
Apuntes. Hoy es un archivo plano de 159 líneas con StoryIntro de Pablo, las 4
preguntas del diseño, divide y vencerás (capas + funcionalidades), un
Aclaracion de proyecto pequeño, dos diagramas (arquitectura y componentes), una
Comparativa, las reglas de decisiones técnicas, un CasoPractico de equipo y un
checklist. El estándar `contenido-unidad` exige que cada unidad ampliada tenga
un índice + subcarpeta con 9 puntos (8 de teoría + 1 cierre). La unidad U1
(`expand-u01`) es la piloto y fija el formato que U2 copia.

Stack del sitio: Astro 7 + Starlight 0.41 + MDX, solo castellano, base
`/ApuntesProyectoDAW/`. No hay backend ni build por parte del subagente.

## Goals / Non-Goals

**Goals**
- Conservar el 100% del contenido factual del archivo original, expandido y
  repartido en los puntos adecuados (nada se borra).
- Replicar la plantilla de punto de teoría del piloto U1 (frontmatter,
  breadcrumb, StoryIntro, "La idea en una frase", secciones `##`, componente,
  Mini-chequeo, Resumen, Vocabulario, pie con Anterior/Siguiente) y la del
  cierre (las 8 secciones del estándar del repo).
- Nivel de entrada cero y enfoque project-facing: definir cada acrónimo en su
  primer uso (API, BD, stack...); sin jerga técnica de programación.
- Autoverificación con `node scripts/verificar-lotes.mjs` y escaneo js-yaml.

**Non-Goals**
- No tocar `astro.config.mjs` (sidebar) ni hacer build; lo gestiona el orquestador.
- No crear imágenes nuevas: solo texto, tablas, bloques `>` y diagramas ASCII.
- No usar Head First ni CONRAD: se usan los componentes del repo.
- No mencionar boletines (este repo no tiene).

## Decisions

### D1 — Estructura de archivos

El índice vive en `src/content/docs/apuntes-pi1/u2-poo.mdx` e importa con
`../../../components/` (3 niveles). Los 9 puntos viven en la subcarpeta
`src/content/docs/apuntes-pi1/u2-poo/` e importan con `../../../../components/`
(4 niveles), siempre con rutas absolutas de import. Todos los enlaces internos
usan la base `/ApuntesProyectoDAW/apuntes-pi1/u2-poo/...` (el verificador
`verificar-lotes.mjs` busca el patrón `.../{unit}/NN-` en el índice).

### D2 — División en 9 puntos

Distribución del contenido original:

- **01 Por qué diseñar antes de codificar**: el plano de la casa, las 4
  preguntas del diseño (partes/módulos, comunicación, responsabilidades,
  datos), diseñar primero para escribir después, Aclaracion "¿Y si mi proyecto
  es pequeño y no necesita tanta estructura?" (íntegro).
- **02 Divide y vencerás**: el principio (todo proyecto se divide; la clave es
  cómo), criterios para elegir el corte (motivo de cambio, responsabilidad
  única, tamaño manejable, reparto de trabajo), señales de una buena división,
  CasoPractico nuevo.
- **03 Arquitectura por capas**: diagrama ASCII del original
  (Interfaz → Lógica → Acceso a datos), definición de cada capa, regla de
  comunicación solo con la de al lado, Comparativa nueva sobre cambiar de BD.
- **04 Organización por funcionalidades**: árbol ASCII del original
  (Usuarios/Productos/Pedidos/Pagos), independencia entre funcionalidades,
  capas y funcionalidades como cortes que se cruzan, Aclaracion sobre
  dependencias entre funcionalidades.
- **05 Diagrama de arquitectura**: cajas y flechas, herramientas del original
  (Draw.io, Mermaid, lápiz y papel), diagrama ASCII original
  `[Navegador] → [Servidor web] → [API] → [Base de datos]` + servicio de
  correo, definición de API en primer uso, Aclaracion sobre herramientas.
- **06 Diagrama de componentes**: tabla del original ampliada (controlador,
  servicio, repositorio de usuarios), lectura de "Depende de", CasoPractico
  nuevo con la tabla de la app de recetas.
- **07 Decisiones técnicas con criterio**: las 3 reglas y las 3 preguntas del
  original, Comparativa original "¿Diseñar primero o sobre la marcha?".
- **08 Validar el diseño en equipo**: CasoPractico original "El equipo que no
  diseñó nada", checklist final del original (6 items), pasos para validar en
  equipo.
- **09 Cierre**: las 8 secciones de consolidación del estándar.

### D3 — Nivel de entrada cero

Cada punto parte de cero y define todo acrónimo en su primer uso (API, BD,
stack). Cada punto incluye al menos una analogía cotidiana (casa, restaurante,
armario, carpintero, mueble). El tono es project-facing: cómo afrontar el
proyecto, no cómo programar.

### D4 — Sin imágenes; diagramas ASCII

No se añaden imágenes (el estándar solo permite texto). Se usan tablas, bloques
`>` y diagramas ASCII entre ``` ```.

### D5 — Cierre y continuidad hacia U3

El punto 09-cierre incluye ⭐ Sé el Proyecto, 🔥 Dilema de equipo (Comparativa),
🕵️ ¿Quién Soy?, ⚡ Laboratorio de Tortura (SIEMPRE con fallo intencionado y
pistas escalonadas; aquí un diagrama de componentes con responsabilidades
mezcladas y dependencias circulares), 🧠 Atrévete a Pensar, 💬 Entrevista de
trabajo, 🤷 Preguntas Tontas y 🎬 Post-Créditos. El Post-Créditos enlaza con la
siguiente unidad mediante la línea exacta "PRÓXIMAMENTE EN U3: Organizar los
datos: entidades, relaciones y esquema. 🗄️", con enlace a
`/ApuntesProyectoDAW/apuntes-pi1/u3-diseno-bd`.

## Risks / Trade-offs

- **Repetición entre puntos**: los puntos 02, 03 y 04 comparten el tema de
  dividir. Se mitiga: el 02 presenta el principio y los criterios, el 03
  desarrolla el corte por capas y el 04 el corte por funcionalidades.
- **Longitud**: el objetivo de ~110-260 líneas por punto y ~220-260 en el
  cierre puede quedar corto si el contenido es escaso. Se mitiga ampliando con
  ejemplos, tablas y analogías sin inflar con relleno.
- **Términos técnicos del original**: la tabla original menciona
  "encriptar passwords" y "controlador/servicio/repositorio". Se mantienen
  explicados en lenguaje llano (qué significa encriptar, qué hace cada tipo de
  componente) en su primer uso.
- **Rutas frágiles**: si un slug o un título cambia, se rompe la navegación
  encadenada. Se mitiga con el escaneo de `verificar-lotes.mjs` y el escaneo
  YAML de los 10 archivos.