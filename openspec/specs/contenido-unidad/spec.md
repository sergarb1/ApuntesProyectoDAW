# contenido-unidad — Estándar de calidad de las unidades didácticas

> Barra de calidad "libro de verdad" que toda unidad (U1-U8 de PI1 y U1-U9 de PI2) debe cumplir tras su ampliación. Prioridad: utilidad real para alumnos que afrontan el Proyecto Intermodular desde cero.

## ADDED Requirements

### Requirement: Nivel de entrada cero

Cada punto de teoría debe ser comprensible para un alumno sin conocimientos previos del tema, con enfoque project-facing (cómo afrontar el proyecto), no técnico.

#### Scenario: Definición de términos en el primer uso
- **WHEN** un lector sin conocimientos previos lee cualquier punto de la unidad
- **THEN** cada concepto o acrónimo (MVP, CRUD, commit, framework, hash, CI/CD...) se define con lenguaje llano en su primer uso y no se asume jerga previa

#### Scenario: Analogía cotidiana
- **WHEN** se explica un concepto abstracto del proyecto
- **THEN** el texto incluye al menos una analogía de la vida diaria (casa, oficina, cocina, mudanza...) que aterrice el concepto

### Requirement: Tamaño de capítulo de libro

Cada punto debe tratarse en profundidad, no como resumen.

#### Scenario: Punto de teoría ampliado
- **WHEN** un revisor abre un punto de teoría de la unidad
- **THEN** el punto contiene contexto introductorio, explicación del concepto en varios párrafos, al menos una tabla o comparativa, un ejemplo concreto resuelto y, cuando aporte, un diagrama ASCII o bloque; resultado objetivo ≈110-260 líneas por punto

#### Scenario: Detalle mínimo por sección temática
- **WHEN** el punto trata una sección temática (capas, entidades, tipos de test, conflictos git...)
- **THEN** cada elemento de esa sección tiene su propia explicación desarrollada y no una mera enumeración

### Requirement: Estilo MDX del repo

El contenido usa los componentes propios del proyecto, no Markdown plano.

#### Scenario: Componentes en el cuerpo del texto
- **WHEN** se abre la unidad o cualquiera de sus puntos
- **THEN** se usan `StoryIntro` (apertura narrativa), `Aclaracion` (dudas colapsables), `Comparativa` (dilemas de equipo), `CasoPractico` (casos de estudio con solo `titulo`) y `import` relativo correcto según la profundidad

#### Scenario: Rutas e imágenes coherentes
- **WHEN** se enlaza a otras páginas del sitio
- **THEN** las rutas usan la base `/ApuntesProyectoDAW/` y los archivos `.mdx` llevan frontmatter `title`/`description` válido

### Requirement: Cierre de unidad obligatorio

La unidad conserva las secciones de consolidación del proyecto, adaptadas (sin Head First ni CONRAD).

#### Scenario: Secciones de consolidación presentes
- **WHEN** termina la lectura de la unidad (punto 09-cierre)
- **THEN** existen apartados con: ⭐ Sé el Proyecto, 🔥 Dilema de equipo (con Comparativa), 🕵️ ¿Quién Soy?, ⚡ Laboratorio de Tortura, 🧠 Atrévete a Pensar, 💬 Entrevista de trabajo, 🤷 Preguntas Tontas y 🎬 Post-Créditos

#### Scenario: Laboratorio con fallo intencionado
- **WHEN** se ejecuta el laboratorio de la unidad
- **THEN** incluye SIEMPRE un fallo intencionado que el alumno debe diagnosticar, con pistas escalonadas y solución en `<details>`

### Requirement: Todo ejercicio con solución

No hay preguntas abiertas sin solución disponible sin spoilear.

#### Scenario: Soluciones ocultas
- **WHEN** el punto incluye ejercicios o adivinanzas
- **THEN** las soluciones se presentan dentro de bloque `<details><summary>…</summary>…</details>`

### Requirement: Coherencia factual y de estilo

El contenido es consistente con el resto del curso y con la unidad original.

#### Scenario: Preservación del contenido factual
- **WHEN** se amplía una unidad
- **THEN** todo el contenido factual del archivo original (definiciones, tablas, checklist, ejemplos) se conserva y se expande, no se elimina

#### Scenario: Post-Créditos con continuidad
- **WHEN** se cierra la unidad
- **THEN** la escena de Post-Créditos enlaza de forma coherente con la siguiente unidad ("PRÓXIMAMENTE EN UXX") salvo en la última del curso (U9 de PI2), que cierra con 🏁 Fin del viaje sin próximamente

### Requirement: Cobertura de competencias

Cada unidad declara qué competencias cubre del plan docente.

#### Scenario: Tabla de competencias en el índice de unidad
- **WHEN** un revisor consulta la página índice de la unidad
- **THEN** existe una tabla de competencias (CG/CE de pi1/competencias.mdx o pi2/competencias.mdx) con su estado de cobertura (✅/apartado) y dónde se cubre

### Requirement: Flujo de lectura encadenado

Cuando la unidad se amplía a varios archivos, el flujo de lectura entre puntos debe ser natural y navegable.

#### Scenario: Navegación entre puntos
- **WHEN** un usuario termina un punto de la unidad
- **THEN** puede continuar con el siguiente punto de forma obvia (enlace "Siguiente", "Anterior" y "Volver al índice de la unidad") sin saltos bruscos de lógica

#### Scenario: Referencias cruzadas
- **WHEN** un punto menciona contenido de otra unidad o de otro punto
- **THEN** hay un enlace cruzado al punto correspondiente o una indicación clara ("se verá en UXX")
