---
title: Metodología
description: Metodologías de trabajo aplicadas en los proyectos intermodulares
---

import { CardGrid, Card } from '@astrojs/starlight/components';

## Enfoque General

La metodología del curso combina **Aprendizaje Basado en Proyectos (ABP)** con metodologías ágiles de desarrollo software, simulando un entorno profesional real.

## Aprendizaje Basado en Proyectos (ABP)

El ABP es el eje central del curso. En lugar de estudiar conceptos de forma aislada, los alumnos aprenden resolviendo un problema real mediante la construcción de un producto software.

### Principios del ABP

1. **Problema real**: el proyecto parte de una necesidad identificada por el alumno
2. **Autonomía**: el alumno toma decisiones sobre el diseño y la implementación
3. **Integración**: se aplican conocimientos de todos los módulos del ciclo
4. **Producto final**: el resultado es un software funcional y documentado
5. **Evaluación continua**: cada fase es evaluable con feedback inmediato

## Scrum

Aplicamos Scrum para la organización del trabajo en PI2:

### Roles

- **Product Owner**: el profesor, define qué construir y prioriza
- **Scrum Master**: el alumno rotativo, facilita el proceso
- **Development Team**: los alumnos, construyen el producto

### Eventos

- **Sprint Planning**: planificación del sprint (1h)
- **Daily Standup**: reunión diaria de 15 minutos
- **Sprint Review**: demo del incremento al final del sprint
- **Sprint Retrospective**: mejora continua del proceso

### Artefactos

- **Product Backlog**: lista priorizada de funcionalidades
- **Sprint Backlog**: tareas del sprint en curso
- **Increment**: resultado funcional de cada sprint

## Kanban

Utilizamos Kanban como complemento para la visualización del flujo de trabajo:

- Tablero con columnas: **To Do → In Progress → Review → Done**
- Límites de trabajo en progreso (WIP)
- Priorización visual de tareas
- Herramientas: Jira, Trello, GitHub Projects

## Git Flow

Gestión de versiones con Git siguiendo el modelo Git Flow:

```text
main        ──●────────────●──────────●──
              \            /          /
develop       ──●──●──●──●──●──●────●──
                \        /  \      /
feature/*       ●──●──●●    ●──●──●
                          \
hotfix/*                    ●──●
```

- **main**: versión en producción
- **develop**: integración de funcionalidades
- **feature/***: nuevas funcionalidades
- **hotfix/***: correcciones urgentes

## IA como Copiloto

La inteligencia artificial se utiliza como herramienta de apoyo, no como sustituto:

### Permitido
- Generar estructuras base de código
- Ayudar en la depuración de errores
- Mejorar la redacción de documentación
- Sugerir enfoques de diseño
- Explicar conceptos complejos

### Prohibido
- Generar soluciones completas sin comprenderlas
- Copiar código sin analizarlo ni adaptarlo
- Eludir el aprendizaje de conceptos fundamentales
- Superar límites de originalidad y esfuerzo personal

## Trabajo Colaborativo

El trabajo en equipo es fundamental:

- **Parejas o grupos pequeños** (2-3 personas) para fomentar la colaboración
- **Revisión entre pares** de código y documentación
- **Presentaciones grupales** en las defensas
- **Coevaluación** de la participación de los compañeros

<CardGrid>
  <Card title="Pair Programming">
    Dos desarrolladores trabajan juntos en la misma tarea: uno escribe, el otro revisa en tiempo real
  </Card>
  <Card title="Code Review">
    Todo el código debe ser revisado por al menos un compañero antes de integrarse
  </Card>
  <Card title="Documentación Colaborativa">
    La documentación se elabora y revisa de forma conjunta usando herramientas colaborativas
  </Card>
</CardGrid>
