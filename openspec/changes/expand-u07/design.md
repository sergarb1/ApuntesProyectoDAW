# Design — Expandir U7 al estándar "índice + 9 puntos"

## Context

`u7-git.mdx` es el capítulo 7 del "libro" de 17 unidades de la sección Apuntes. Hoy es un archivo plano de 159 líneas con StoryIntro (Marta/Javi/Lucas), reglas básicas, flujo Git con diagrama ASCII, código limpio, code review, commits, CasoPractico, conflictos y checklist. El estándar `contenido-unidad` exige que cada unidad ampliada tenga un índice + subcarpeta con 9 puntos (8 de teoría + 1 cierre), con componentes del repo, navegación encadenada y cierre de consolidación.

Stack del sitio: Astro 7 + Starlight 0.41 + MDX, solo castellano, base `/ApuntesProyectoDAW/`. No hay backend ni build por parte del subagente.

## Goals / Non-Goals

**Goals**
- Conservar el 100% del contenido factual del archivo original, expandido y repartido en los puntos adecuados (nada se borra).
- Fijar la plantilla de punto de teoría (frontmatter, breadcrumb, StoryIntro, "La idea en una frase", secciones `##`, componente, Mini-chequeo, Resumen, Vocabulario, pie con Anterior/Siguiente) y la del cierre (las 8 secciones del estándar del repo).
- Nivel de entrada cero y enfoque project-facing: definir cada acrónimo (MVP, SMART, CRUD...) en su primer uso; sin jerga técnica de programación.
- Autoverificación con `node scripts/verificar-lotes.mjs` y escaneo js-yaml.

**Non-Goals**
- No tocar `astro.config.mjs` (sidebar) ni hacer build; lo gestiona el orquestador.
- No crear imágenes nuevas: solo texto, tablas, bloques `>` y diagramas ASCII.
- No usar Head First ni CONRAD: se usan los componentes del repo.
- No mencionar boletines (este repo no tiene).

## Decisions

### D1 — Estructura de archivos

El índice vive en `src/content/docs/apuntes-pi1/u7-git.mdx` e importa con `../../../components/` (3 niveles). Los 9 puntos viven en la subcarpeta `src/content/docs/apuntes-pi1/u7-git/` e importan con `../../../../components/` (4 niveles), siempre con rutas absolutas de import. Todos los enlaces internos usan la base `/ApuntesProyectoDAW/apuntes-pi1/u7-git/...` (el verificador `verificar-lotes.mjs` busca el patrón `.../{unit}/NN-` en el índice).

### D2 — División en 9 puntos

Distribución del contenido original:

- **01 El equipo empieza antes que el código**: reglas básicas del original (herramientas, reparto, reuniones, decisiones), analogía del "plano antes de la casa", StoryIntro de Marta/Javi/Lucas contextualizada.
- **02 Herramientas de comunicación y reuniones**: profundidad en herramientas (WhatsApp/Discord, tablero, repo), tipos de reuniones (daily, planning, retro), actas breves. CasoPractico nuevo: "El tablero que nadie miraba".
- **03 Reparto de tareas claro y equilibrado**: matriz RACI simplificada, evitar "cada uno a su bola", tareas técnicas vs no técnicas, equilibrio de carga. Aclaracion: "¿Y si alguien no sabe hacer lo que le toca?".
- **04 Flujo Git: main, dev, feature**: diagrama ASCII original, reglas de ramas, nomenclatura, merge strategy. Aclaracion original "¿Y si somos dos?" AQUÍ. Mini-chequeo con comandos.
- **05 Código limpio en equipo: estilo, lint, Prettier**: estilo común (tabs/spaces, punto y coma, comillas, naming), ESLint + Prettier, config compartida, Husky hooks. Comparativa: "Configurar al principio vs arreglar después".
- **06 Commits que se entienden**: mensajes convencionales (feat/fix/docs/refactor), estructura (tipo: descripción), ejemplos mal/bien, atomicidad. CasoPractico nuevo: "El commit que salvó la entrega".
- **07 Code review: aprender y detectar malentendidos**: propósito (no cazar errores), checklist de review, cómo dar feedback constructivo, PR template. Aclaracion: "¿Y si no sé revisar el código de mi compañero?".
- **08 Conflictos: de código y de personas**: resolución de conflictos Git (pasos originales), conflictos interpersonales (hablar en persona, acuerdo, mediador). Aclaracion original "¿Y si somos dos?" movida a 04. CasoPractico original "El equipo que aprendió a ser equipo" AQUÍ.
- **09 Cierre**: las 8 secciones de consolidación (⭐ Sé el Proyecto, 🔥 Dilema de equipo, 🕵️ ¿Quién Soy?, ⚡ Laboratorio de Tortura, 🧠 Atrévete a Pensar, 💬 Entrevista de trabajo, 🤷 Preguntas Tontas, 🎬 Post-Créditos). Post-Créditos enlaza con U8.

### D3 — Nivel de entrada cero

Cada punto parte de cero y define todo acrónimo en su primer uso. Cada punto incluye al menos una analogía cotidiana (casa, cocina, río, coche, equipo de fútbol). El tono es project-facing: cómo afrontar el proyecto en equipo, no cómo programar.

### D4 — Sin imágenes; diagramas ASCII

No se añaden imágenes. Se usan tablas, bloques `>` y diagramas ASCII entre ``` ```.

### D5 — Cierre y continuidad hacia U8

El punto 09-cierre incluye las 8 secciones estándar. El Post-Créditos enlaza con la siguiente unidad mediante la línea exacta "PRÓXIMAMENTE EN U8: Planificar y organizarse: Kanban, SCRUM, estimar y recuperar tiempo. 📋", con enlace a `/ApuntesProyectoDAW/apuntes-pi1/u8-planificacion` (o similar).

## Risks / Trade-offs

- **Repetición entre puntos**: 01 y 02 tocan comunicación. Se mitiga: 01 es visión general/reglas, 02 es herramientas y rituales concretos.
- **Longitud**: objetivo de ~110-260 líneas por punto y ~220-260 en el cierre. Se mitiga ampliando con ejemplos, tablas y analogías sin inflar.
- **Diagrama ASCII original**: se preserva íntegro en el punto 04.
- **Rutas frágiles**: si un slug o título cambia, se rompe la navegación encadenada. Se mitiga con el escaneo de `verificar-lotes.mjs` y el escaneo YAML de los 10 archivos.