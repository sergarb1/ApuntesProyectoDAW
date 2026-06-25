---
title: Reto 3 - Diseño
description: Modelado UML, diseño de base de datos y prototipado de la interfaz
---

## Objetivo

Crear los planos del sistema antes de escribir código. Se modela la arquitectura, los datos y la interfaz de usuario.

## Entregables

### 1. Diagramas UML

- **Diagrama de clases**: entidades del dominio con atributos, métodos y relaciones
- **Diagrama de secuencia**: flujo de interacción para los casos de uso principales
- **Diagrama de actividades**: lógica de procesos complejos

### 2. Modelo Entidad-Relación (E/R)

Diseño completo de la base de datos:

- Entidades con atributos y tipos de datos
- Relaciones con cardinalidad (1:N, N:M, 1:1)
- Claves primarias y foráneas
- Normalización hasta 3FN (tercera forma normal)

Incluir el script SQL de creación de tablas con:

- `CREATE TABLE` con restricciones (`NOT NULL`, `UNIQUE`, `CHECK`)
- `ALTER TABLE` para claves foráneas
- `INSERT` con datos de prueba representativos

### 3. Wireframes

Prototipos de la interfaz de usuario:

- Pantalla de inicio / landing page
- Registro e inicio de sesión
- Panel principal (dashboard)
- Pantallas de gestión de datos (CRUD)
- Vista de detalle de elementos

Los wireframes pueden entregarse en:

- Dibujos a mano escaneados (fase inicial)
- Herramientas digitales: Figma, Draw.io, Balsamiq
- Navegables (opcional): enlazar pantallas para simular flujo

## Criterios de Evaluación

- Diagrama de clases completo y correcto
- Modelo E/R normalizado y coherente con el dominio
- Script SQL ejecutable sin errores
- Wireframes que cubren todas las funcionalidades principales
- Coherencia entre el diseño visual y el modelo de datos
