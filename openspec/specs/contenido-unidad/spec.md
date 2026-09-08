# contenido-unidad — Estándar de calidad de las unidades didácticas

> Barra de calidad "libro de verdad" que toda unidad (U1-U7 de PI1 y U1-U10 de PI2 en `guia-didactica/`) debe cumplir tras su ampliación. Prioridad: utilidad real para alumnos que afrontan el Proyecto Intermodular desde cero.

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
- **THEN** se usan `StoryIntro` (apertura narrativa), `Aclaracion` (dudas colapsables), `Comparativa` (dilemas de equipo), `CasoPractico` (casos de estudio) y `import` con alias `@components/` (nunca rutas relativas `../../components/`)

#### Scenario: Rutas e imágenes coherentes
- **WHEN** se enlaza a otras páginas del sitio
- **THEN** las rutas usan la base `/ApuntesProyectoDAW/` y los archivos `.mdx` llevan frontmatter `title`/`description` válido

### Requirement: Cierre de unidad obligatorio

La unidad termina con un cierre que consolida lo aprendido y prepara para lo siguiente.

#### Scenario: Cierre con mini-chequeo y resumen
- **WHEN** termina la lectura de la unidad (punto 09-cierre, o 13 en UD 2.7)
- **THEN** existen apartados con: Mini-chequeo (preguntas con `<details>` y solución), tabla resumen de la unidad, vocabulario rápido y "Resumen en 3 frases"
- **AND** el cierre enlaza con la siguiente unidad en los cuadros `.nav-unidad` ("Siguiente →" hacia `../../uX-Y-nombre`), salvo la última UD de cada proyecto

#### Scenario: Laboratorio o ejercicios con solución
- **WHEN** el cierre incluye ejercicios prácticos
- **THEN** cada uno tiene solución en `<details>` (o instrucciones claras de ejecución) y las referencias a puntos usan la numeración real de la sección

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

#### Scenario: Conexión con la siguiente unidad
- **WHEN** se cierra la unidad
- **THEN** los cuadros `.nav-unidad` del cierre enlazan "Siguiente →" hacia la siguiente unidad (`../../uX-Y-nombre`), salvo la última UD del proyecto (u1-7 o u2-10), cuyo cierre apunta a Material didáctico

### Requirement: Cobertura de competencias

Cada unidad declara qué competencias cubre del plan docente.

#### Scenario: Tabla de competencias en el índice de unidad
- **WHEN** un revisor consulta la página índice de la unidad
- **THEN** existe una tabla de competencias (CG/CE de guia-didactica/proyecto-1/competencias.mdx o guia-didactica/proyecto-2/competencias.mdx) con su estado de cobertura (✅/apartado) y dónde se cubre

### Requirement: Flujo de lectura encadenado

Cuando la unidad se amplía a varios archivos, el flujo de lectura entre puntos debe ser natural y navegable.

#### Scenario: Navegación entre puntos
- **WHEN** un usuario termina un punto de la unidad
- **THEN** puede continuar con el siguiente punto de forma obvia (cuadros `.nav-unidad` con "Anterior"/"Siguiente" y "Volver al índice de la unidad") sin saltos bruscos de lógica
- **AND** la landing (`uX-Y-nombre.mdx`) termina con un bloque `.nav-unidad` con cuadro "Siguiente →" que lleva a la sección 01 (`./01-…`)
- **AND** la sección 01 termina con `.nav-unidad` con cuadro "← Anterior" que lleva al índice (`../`) y cuadro "Siguiente →" a la sección 02 (`../02-…`)

#### Scenario: Referencias cruzadas
- **WHEN** un punto menciona contenido de otra unidad o de otro punto
- **THEN** hay un enlace cruzado al punto correspondiente o una indicación clara ("se verá en UXX")
