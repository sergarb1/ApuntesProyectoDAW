---
title: Sprint 5 - Despliegue
description: Contenerización con Docker y despliegue en la nube
---

## Objetivo

Preparar la aplicación para un despliegue profesional utilizando contenedores Docker y una plataforma cloud. Automatizar el proceso de integración y despliegue continuo (CI/CD).

## Entregables

### 1. Docker

- **Dockerfile** para frontend y backend
- **docker-compose.yml** para orquestación local
- Volúmenes para persistencia de datos
- Variables de entorno para configuración
- Redes Docker para separación de servicios

### 2. Despliegue Cloud

Publicar la aplicación en una plataforma cloud:

- **Frontend**: Vercel, Netlify, Cloudflare Pages
- **Backend / API**: Railway, Render, Fly.io
- **Base de datos**: Supabase, Railway, MongoDB Atlas

### 3. CI/CD

Pipeline automatizado con GitHub Actions:

- Tests automáticos en cada push
- Linting y verificación de código
- Build de la aplicación
- Despliegue automático en main

### 4. Dominio y HTTPS

- Configurar un dominio personalizado (opcional)
- Certificado SSL/TLS automático
- Redirección HTTP → HTTPS

### 5. Monitorización

- Logs de la aplicación accesibles
- Health check endpoint
- Alertas básicas de disponibilidad

## Criterios de Evaluación

- Docker compose funcional en local
- Aplicación desplegada y accesible públicamente
- Pipeline CI/CD operativa
- HTTPS configurado correctamente
- Documentación del despliegue completa
