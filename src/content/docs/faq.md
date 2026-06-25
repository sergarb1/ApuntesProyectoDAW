---
title: Preguntas Frecuentes
description: Dudas comunes sobre la organización de PI1 y PI2
---

## Sobre el Proyecto en General

### ¿Los proyectos los propone el profesor o los alumnos?

Los proyectos los proponen los alumnos. No hay un catálogo cerrado. Cada estudiante identifica un problema real y propone una solución software. El profesorado valida que la idea sea viable y ajusta el alcance.

### ¿Puedo cambiar de proyecto entre PI1 y PI2?

No es recomendable. La filosofía del módulo es que el proyecto de PI2 evolucione del de PI1. Si cambias por completo, pierdes la ventaja de tener una base ya construida. Solo se permite con autorización expresa del profesorado.

### ¿Puedo hacer el proyecto en grupo?

El proyecto es individual en cuanto a entrega y evaluación. Pero se fomenta el trabajo colaborativo: revisión de código entre pares, discusión de diseños y ayuda mutua. En PI2 hay dinámicas grupales (retrospectivas, mesa redonda).

### ¿Qué pasa si no sé qué proyecto hacer?

Hay una sección de [Ideas para Proyectos](/ApuntesProyectoDAW/ideas) con sugerencias organizadas por categorías. También puedes hablar con el profesorado para orientarte.

## Sobre PI1

### ¿Qué nivel de acabado visual se exige en el MVP?

El MVP debe ser funcional, no bonito. Se valora más que el CRUD funcione, la base de datos esté bien diseñada y el código esté limpio. El diseño visual se trabaja en profundidad en PI2.

### ¿Tengo que implementar todas las funcionalidades documentadas?

No. Documenta todo el sistema pero prioriza las funcionalidades imprescindibles (MVP). Las secundarias pueden documentarse sin implementarse.

### ¿El Lean Canvas es para montar una empresa real?

No. Es una herramienta para estructurar tu idea con mentalidad emprendedora. No esperamos que montes un negocio, pero sí que analices tu proyecto como si fueras a hacerlo.

## Sobre PI2

### ¿Tengo que reescribir todo el código de PI1?

No. Debes refactorizar y mejorar la arquitectura, pero el código funcional se mantiene. Se evalúa la evolución: avances en calidad, arquitectura, testing y despliegue respecto a PI1.

### ¿Qué framework de frontend debo usar?

React, Vue, Angular o Svelte. La elección debe justificarse técnicamente. Se recomienda usar el stack visto en DWEC para recibir mejor soporte.

### ¿Es obligatorio desplegar en la nube?

Sí. El despliegue cloud (Vercel, Railway, Netlify, etc.) es obligatorio en PI2. La aplicación debe estar accesible públicamente desde internet.

### ¿Qué pasa si mi proyecto de PI1 no tiene backend?

En PI2 deberás añadirlo. El profesorado te guiará para planificar esos cambios.

## Sobre la Evaluación

### Si suspendí PI1, ¿puedo cursar PI2?

No. Para finalizar PI2 es necesario tener PI1 aprobado. Si lo tienes pendiente, no podrás aprobar PI2 hasta recuperarlo.

### ¿Qué pasa si no entrego un reto a tiempo?

Las entregas parciales tienen fechas recomendadas no obligatorias (salvo la entrega final). Pero acumular retrasos perjudica tu progresión: el feedback de cada entrega es clave para mejorar en la siguiente.

### ¿Cómo se calcula la nota final?

Media ponderada de todos los instrumentos, siempre que cada uno tenga al menos un 5. Ejemplo PI2: 10% (PI1) + 20% (documentación) + 40% (proyecto) + 20% (defensa) + 10% (participación). Si algún instrumento no llega a 5, la nota máxima es 4.9.

### ¿La participación se puede recuperar?

No hay recuperación específica. Se evalúa durante todo el curso y en la mesa redonda. Una participación activa en la mesa redonda puede compensar una participación más baja durante el curso.

## Sobre la Defensa

### ¿Qué pasa si me pongo nervioso al exponer?

Es normal. Se valora el contenido técnico y la honestidad, no la perfección oratoria. Practica varias veces y prepara respuestas para preguntas previsibles. El formato PechaKucha ayuda a estructurar el tiempo.

### ¿Puedo usar notas o leer durante la defensa?

No. La defensa debe ser oral y fluida. No está permitido leer. Puedes tener una chuleta con palabras clave, pero no leer párrafos completos.

### ¿Qué tipo de preguntas hace el tribunal?

Preguntas técnicas sobre tu proyecto: decisiones de diseño, elección de tecnologías, problemas encontrados, posibles mejoras. También conceptos transversales: seguridad, rendimiento, escalabilidad.

### ¿El vídeo demostrativo tiene que tener sonido?

No. El vídeo es mudo (4 minutos sin audio). Tú lo comentas en directo durante la exposición para demostrar tu dominio del proyecto.

## Sobre Herramientas y Metodología

### ¿Estoy obligado a usar Git?

Sí. El control de versiones con Git es obligatorio desde el primer reto de PI1. Se evalúa la calidad del historial: commits atómicos, mensajes descriptivos y estructura de ramas.

### ¿Puedo usar ChatGPT o Copilot?

Sí, como copiloto. Puedes usarlo para estructuras base, depurar errores o mejorar documentación. No está permitido usarlo para generar soluciones completas sin comprensión. El profesorado puede preguntarte sobre cualquier parte del código.

### ¿Qué hago si mi compañero no colabora?

En actividades colaborativas, la coevaluación permite reflejar la contribución de cada miembro. Si hay problemas persistentes, comunícalo al profesorado.

### ¿Qué IDE recomiendan?

Visual Studio Code por su versatilidad, soporte para Astro y tecnologías del ciclo, integración Git y ser gratuito.

### ¿Qué licencia debo usar?

Licencia libre: MIT, Apache 2.0 o GPL. Durante el desarrollo el repositorio será privado, pero el proyecto final debe tener licencia libre.

### ¿Es obligatorio Docker en PI2?

Sí. Debes proporcionar al menos un `docker-compose.yml` que permita levantar toda la aplicación localmente con un solo comando.

### ¿Qué base de datos recomiendan?

PostgreSQL por su robustez y soporte en plataformas cloud gratuitas. MySQL/MariaDB son alternativas válidas. SQLite vale para PI1 pero no para PI2.
