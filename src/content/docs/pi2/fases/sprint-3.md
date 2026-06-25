---
title: Sprint 3 - Backend y APIs
description: Desarrollo del backend profesional con API REST documentada
---

## Objetivo

Reimplementar o refactorizar el backend del proyecto para ofrecer una API REST profesional, segura, documentada y escalable.

## Entregables

### 1. API RESTful

Implementar endpoints siguiendo buenas prácticas:

- Nombres de recursos en plural (`/api/usuarios`, `/api/productos`)
- Verbos HTTP correctos (GET, POST, PUT, PATCH, DELETE)
- Códigos de estado adecuados (200, 201, 400, 401, 403, 404, 500)
- Versionado de la API (`/api/v1/...`)
- Paginación, filtrado y ordenación en listados

### 2. Autenticación y Autorización

- Registro e inicio de sesión con JWT
- Passwords hasheados (bcrypt, argon2)
- Middleware de autenticación
- Roles de usuario (admin, usuario, invitado)
- Protección de rutas según rol

### 3. Documentación de la API

Documentar todos los endpoints con:

- **OpenAPI / Swagger**: especificación completa
- **Método, ruta, parámetros**: descripción detallada
- **Ejemplos**: request y response en JSON
- **Autenticación**: indicar qué endpoints requieren token

### 4. Validación y Seguridad

- Validación de datos de entrada (server-side)
- Sanitización de entradas para prevenir XSS
- Protección contra SQL injection (prepared statements / ORM)
- Rate limiting en endpoints críticos
- CORS configurado correctamente
- Helmet y otras cabeceras de seguridad

## Criterios de Evaluación

- API REST funcional con todos los endpoints necesarios
- Autenticación JWT operativa y segura
- Documentación OpenAPI completa y navegable
- Validación y seguridad implementadas correctamente
- Código limpio con separación de responsabilidades
