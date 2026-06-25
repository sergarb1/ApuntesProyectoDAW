---
title: Reto 2 - Análisis de Requisitos
description: Define las funcionalidades del sistema mediante historias de usuario y casos de uso
---

## Objetivo

Documentar de forma estructurada qué debe hacer el sistema. Se identifican los actores, las funcionalidades y las interacciones esperadas.

## Entregables

### 1. Historias de Usuario

Cada historia de usuario debe seguir el formato estándar:

> **Como** [rol de usuario]  
> **Quiero** [acción o funcionalidad]  
> **Para** [beneficio o motivo]

Cada historia debe incluir:

- Identificador único (HU-001, HU-002, ...)
- Prioridad (Alta, Media, Baja)
- Esfuerzo estimado (puntos de historia)
- Criterios de aceptación (al menos 3 por historia)

### Ejemplo

> **HU-001**: Como usuario registrado, quiero iniciar sesión con mi correo y contraseña para acceder a mis datos personales.  
> **Prioridad**: Alta  
> **Esfuerzo**: 3 puntos  
> **Criterios de aceptación**:
> - El formulario valida que el correo tenga formato válido
> - La contraseña debe tener al menos 8 caracteres
> - Tras 3 intentos fallidos, la cuenta se bloquea durante 15 minutos

### 2. Diagrama de Casos de Uso

Representación visual con UML de:

- Actores del sistema (usuario, administrador, etc.)
- Casos de uso (funcionalidades)
- Relaciones entre actores y casos de uso

### 3. Especificación de Casos de Uso

Para cada caso de uso significativo, documentar:

- Nombre y código
- Actores participantes
- Precondiciones y postcondiciones
- Flujo normal (pasos numerados)
- Flujos alternativos (errores, excepciones)

## Criterios de Evaluación

- Cobertura completa de funcionalidades esenciales
- Historias de usuario correctamente formuladas
- Criterios de aceptación verificables
- Diagrama de casos de uso correcto y completo
- Trazabilidad entre requisitos y funcionalidades
