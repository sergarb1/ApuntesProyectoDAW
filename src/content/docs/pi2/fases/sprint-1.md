---
title: Sprint 1 - Arquitectura
description: Rediseño de la arquitectura del proyecto con patrones profesionales
---

## Objetivo

Rediseñar la arquitectura del proyecto para soportar un desarrollo profesional. Se definen las capas, los patrones de diseño y la estructura del código que se mantendrá durante todo el proyecto.

## Entregables

### 1. Diagrama de Arquitectura

Representación de la arquitectura del sistema incluyendo:

- **Capas**: presentación, lógica de negocio, acceso a datos, infraestructura
- **Componentes**: servicios, repositorios, controladores, modelos
- **Comunicación**: flujo de datos entre capas y sistemas externos
- **Tecnologías**: frameworks, librerías, bases de datos, servicios cloud

### 2. Patrones de Diseño

Documentar los patrones aplicados:

- **MVC / MVVM**: separación de la capa de presentación
- **Repository / DAO**: abstracción del acceso a datos
- **DTO / VO**: objetos de transferencia entre capas
- **Service Layer**: lógica de negocio desacoplada
- **Dependency Injection**: inversión de control

### 3. Estructura del Proyecto

Definición de la estructura de directorios:

```
proyecto/
├── frontend/          # Aplicación cliente
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
├── backend/           # API y lógica de negocio
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── repositories/
│   │   ├── services/
│   │   └── middleware/
├── database/          # Scripts SQL y migraciones
├── docker/            # Configuración Docker
├── docs/              # Documentación técnica
└── tests/             # Tests automatizados
```

### 4. Refactorización del Código Base

Aplicar la nueva arquitectura al código existente de PI1:

- Separar el frontend del backend
- Crear servicios y repositorios
- Eliminar código duplicado
- Aplicar estándares de codificación

## Criterios de Evaluación

- Diagrama de arquitectura claro y completo
- Patrones de diseño correctamente aplicados
- Estructura del proyecto coherente y profesional
- Código refactorizado sin perder funcionalidad
- La aplicación sigue funcionando tras la refactorización
