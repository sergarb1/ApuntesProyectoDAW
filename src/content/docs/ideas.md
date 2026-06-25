---
title: Ideas para Proyectos
description: Propuestas detalladas de proyectos con alcance, funcionalidades y complejidad técnica
---

## ¿Cómo elegir un proyecto?

Los proyectos son **propuestos por los alumnos**. No hay un catálogo cerrado. Cada estudiante identifica un problema real y propone una solución software.

Si no tienes una idea clara, aquí tienes propuestas detalladas con alcance concreto, funcionalidades clave, stack sugerido y nivel de complejidad.

---

## 1. Sistema de Gestión de Incidencias TI (Helpdesk)

Sistema completo de ticketing para departamentos de soporte técnico, similar a Jira Service Management o Zendesk, orientado a centros educativos o pequeñas empresas.

### Funcionalidades Clave

- **Portal de usuario**: registro de incidencias con formulario dinámico (categoría, prioridad, departamento, archivos adjuntos)
- **Panel de agente**: cola de tickets filtrable, asignación automática por carga de trabajo
- **SLA automático**: cálculo de tiempos de respuesta y resolución según prioridad, con alertas de incumplimiento
- **Base de conocimiento**: artículos vinculables a incidencias para resolución rápida
- **Dashboard con gráficos**: tickets por estado, tiempo medio de resolución, agentes más productivos
- **Notificaciones**: email y notificaciones in-app (WebSockets)
- **Historial completo**: auditoría de cada cambio en el ticket con timestamp y responsable

### Stack Sugerido

| Capa | Tecnología |
|---|---|
| Frontend | React + Vite + Tailwind |
| Backend | Node.js + Express o NestJS |
| BD | PostgreSQL |
| Tiempo real | Socket.io |
| Tests | Vitest + Playwright |
| Despliegue | Docker + Railway |

### Complejidad: Alta

Requiere lógica de asignación de incidencias, gestión de estados con máquina de estados, WebSockets para tiempo real y dashboard con datos agregados.

---

## 2. Plataforma de Reservas con Calendario Inteligente

Sistema de reservas multi-negocio con detección de conflictos, optimización de agenda y gestión de profesionales.

### Funcionalidades Clave

- **Registro multi-negocio**: cada negocio gestiona sus servicios, horarios y profesionales
- **Calendario interactivo**: vista diaria, semanal y mensual con drag & drop para reasignar citas
- **Detección de conflictos**: validación en tiempo real de solapamientos y restricciones (descansos, capacidad máxima)
- **Recordatorios automáticos**: email o SMS 24h antes (integración con Twilio o similar)
- **Autoreserva por cliente**: el cliente elige servicio, profesional y franja disponible sin registro
- **Gestión de ausencias**: vacaciones y bajas de profesionales con bloqueo automático de agenda
- **Informes**: ocupación por profesional, servicio más demandado, ingresos por período
- **Cancelaciones y no-shows**: política de cancelación, penalización, lista de espera

### Stack Sugerido

| Capa | Tecnología |
|---|---|
| Frontend | Vue 3 + Pinia + Tailwind |
| Backend | Laravel o Django REST |
| BD | PostgreSQL con consultas avanzadas de rangos |
| Calendar | FullCalendar.io o implementación propia |
| Despliegue | Docker + Vercel (front) + Railway (back) |

### Complejidad: Alta

Lógica compleja de solapamiento de rangos horarios, restricciones múltiples (descansos, capacidad, festivos) y cálculo de disponibilidad en tiempo real.

---

## 3. Plataforma de Cursos Online (LMS Ligero)

Sistema de gestión de aprendizaje moderno con creación de cursos, evaluaciones automáticas y seguimiento de progreso.

### Funcionalidades Clave

- **Roles**: administrador, profesor, alumno con permisos granularizados (RBAC)
- **Creación de cursos**: módulos, lecciones, contenido multimedia (vídeo embebido, PDF, quizzes)
- **Sistema de evaluaciones**: exámenes tipo test con corrección automática, preguntas abiertas con revisión manual
- **Seguimiento de progreso**: barra de avance por curso, tiempo dedicado, calificaciones parciales, ritmo de estudio
- **Foro por curso**: hilos de discusión con votos y respuestas anidadas
- **Entregas de tareas**: subida de archivos con control de fecha límite, detección de plagio básica
- **Generación de certificados**: PDF automático al completar curso con código de verificación QR
- **API REST**: para integrar con apps externas o futura app móvil

### Stack Sugerido

| Capa | Tecnología |
|---|---|
| Frontend | React + Next.js (SSR) |
| Backend | Node.js + Express + Passport.js |
| BD | PostgreSQL |
| Archivos | AWS S3 o Cloudinary |
| PDF | Puppeteer o jsPDF |
| Despliegue | Docker + Vercel |

### Complejidad: Muy Alta

Gestión de roles compleja con permisos granulares, sistema de evaluaciones con corrección automática, generación dinámica de PDFs, subida de archivos y búsqueda full-text.

---

## 4. Gestor de Proyectos para Freelance

Plataforma integral para autónomos: desde el presupuesto hasta la facturación, pasando por seguimiento de horas, gastos e informes fiscales.

### Funcionalidades Clave

- **CRM de clientes**: fichas de cliente con historial, contratos, documentos asociados
- **Presupuestos**: generación con plantillas, impuestos automáticos, conversión a proyecto al aceptarse
- **Temporizador**: registro de horas por proyecto/tarea con inicio/parada manual y edición posterior
- **Diagrama de Gantt**: planificación visual con dependencias entre tareas, hitos y camino crítico
- **Gastos**: registro con foto del ticket, categorización, vinculación a proyecto
- **Facturación**: generación basada en horas/gastos, envío automático, recordatorio de impago
- **Informes fiscales**: resumen trimestral/anual de ingresos, gastos, IVA, IRPF
- **Exportación**: CSV, PDF, Sii (formato AEAT)

### Stack Sugerido

| Capa | Tecnología |
|---|---|
| Frontend | Svelte + SvelteKit |
| Backend | AdonisJS o Spring Boot |
| BD | PostgreSQL |
| PDF | Puppeteer |
| Tiempo real | WebSockets para temporizador |
| Despliegue | Docker + Railway |

### Complejidad: Muy Alta

Integración de múltiples módulos (CRM, presupuestos, facturación, informes), generación de documentos legales con formatos oficiales, cálculos fiscales y temporizador en tiempo real con WebSockets.

---

## 5. Marketplace de Segunda Mano para Centros Educativos

Plataforma de compra-venta de libros, apuntes y material entre alumnos con reputación, mensajería y geolocalización.

### Funcionalidades Clave

- **Catálogo con búsqueda**: filtros por curso, asignatura, precio, estado del artículo, ubicación
- **Subida de artículos**: fotos múltiples, descripción, precio, categoría, estado de conservación
- **Sistema de mensajería interna**: chat entre comprador y vendedor con notificaciones en tiempo real
- **Valoraciones**: puntuación y reseña tras la transacción, cálculo de reputación del usuario
- **Favoritos y alertas**: guardar artículos y recibir notificación cuando bajen de precio
- **Panel de administración**: moderación de anuncios, gestión de usuarios, estadísticas de uso
- **Pago simulado**: integración con pasarela de pago en modo test (Stripe) para simular transacciones
- **Geolocalización**: mapa interactivo con puntos de entrega dentro del centro educativo

### Stack Sugerido

| Capa | Tecnología |
|---|---|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| BD | PostgreSQL + Elasticsearch (búsqueda avanzada) |
| Chat | WebSockets |
| Mapas | Leaflet / Mapbox |
| Pago | Stripe modo test |
| Despliegue | Docker + Vercel |

### Complejidad: Alta

Chat en tiempo real, integración de pasarela de pago, búsqueda avanzada con filtros múltiples y geolocalización con mapa interactivo.

---

## 6. Analizador de Datos Deportivos

Plataforma para registrar y analizar rendimiento deportivo con visualización de datos, importación desde dispositivos y predicciones.

### Funcionalidades Clave

- **Registro de sesiones**: tipo de actividad, duración, distancia, repeticiones, peso, frecuencia cardíaca
- **Visualización avanzada**: gráficos interactivos (Chart.js / D3.js) de progreso por período, comparativas, heatmaps
- **Importación de datos**: subida y parseo de archivos CSV/GPX/TCX desde relojes deportivos (Garmin, Suunto, Coros)
- **Planes de entrenamiento**: creación de planes semanales con progresión de carga y periodización
- **Predicciones**: regresión lineal y modelos simples para predecir rendimiento futuro basado en histórico
- **Comunidad**: retos entre usuarios, rankings semanales, logros (gamificación con badges)
- **Compartir**: exportar gráficos como imagen PNG, compartir sesiones en redes sociales
- **API de terceros**: integración con Strava API para importar actividades automáticamente

### Stack Sugerido

| Capa | Tecnología |
|---|---|
| Frontend | React + Recharts / D3.js |
| Backend | Python + FastAPI |
| BD | PostgreSQL + TimescaleDB (series temporales) |
| Procesamiento | Pandas + NumPy |
| Archivos | Multer + sharp (imágenes) |
| Despliegue | Docker + Railway |

### Complejidad: Muy Alta

Procesamiento de series temporales, importación y parseo de formatos deportivos (GPX/TCX), gráficos interactivos avanzados, modelos de predicción y lógica de gamificación.

---

## 7. Gestión de Comunidades de Vecinos

Plataforma para administradores de fincas y comunidades: incidencias, votaciones, cuotas y comunicados oficiales.

### Funcionalidades Clave

- **Registro de incidencias**: categoría (fontanería, electricidad, limpieza, seguridad), fotos, ubicación en plano interactivo del edificio
- **Sistema de votación**: los vecinos votan si la incidencia es prioritaria (democracia directa con quórum)
- **Presupuestos**: administradores suben presupuestos de reparación, vecinos votan cuál aceptar
- **Comunicados oficiales**: publicación con acuse de recibo y control de lectura
- **Cuotas y gastos**: registro de pagos de comunidad, deudas, generación de recibos PDF
- **Libro de reclamaciones**: módulo para registrar, gestionar y resolver reclamaciones formales
- **Notificaciones push**: para incidencias urgentes (avería grave, corte de suministro) mediante Firebase Cloud Messaging
- **Asambleas virtuales**: creación de convocatorias, orden del día, votaciones electrónicas

### Stack Sugerido

| Capa | Tecnología |
|---|---|
| Frontend | Angular standalone |
| Backend | Spring Boot |
| BD | PostgreSQL |
| Notificaciones | Firebase Cloud Messaging |
| PDF | JasperReports o Puppeteer |
| Despliegue | Docker + Railway |

### Complejidad: Alta

Gestión de roles (vecino, presidente, administrador) con permisos granulares, sistema de votación con verificación de quórum, subida de imágenes con preview, notificaciones push y generación de recibos.

---

## 8. Plataforma de Voluntariado Colaborativo

Conexión entre organizaciones sociales y voluntarios con geolocalización, registro de horas y certificados automáticos.

### Funcionalidades Clave

- **Perfiles duales**: organizaciones publican oportunidades, voluntarios se inscriben con CV y disponibilidad
- **Geolocalización**: mapa interactivo con oportunidades cercanas al voluntario (radio configurable)
- **Registro de horas**: check-in/check-out con geolocalización y código QR en el lugar de voluntariado
- **Certificados automáticos**: PDF firmado digitalmente con horas realizadas, descargable por el voluntario
- **Valoración mutua**: organización valora al voluntario y viceversa con sistema de estrellas y comentarios
- **Estadísticas e impacto**: horas totales por organización, voluntarios más activos, ONG con más participación
- **Foro por causa**: espacio de discusión para cada iniciativa o campaña activa
- **Calendario de eventos**: visualización de próximas actividades con confirmación de asistencia

### Stack Sugerido

| Capa | Tecnología |
|---|---|
| Frontend | React + Next.js |
| Backend | Django REST |
| BD | PostgreSQL + PostGIS (geolocalización) |
| Maps | Mapbox GL |
| QR | node-qrcode |
| PDF | WeasyPrint o Puppeteer |
| Despliegue | Docker + Railway |

### Complejidad: Muy Alta

Geolocalización avanzada con PostGIS (consultas espaciales de proximidad), generación dinámica de PDFs con firma, sistema de check-in con geoverificación y QR, valoraciones cruzadas con moderación.

---

## 9. Red Social para Intercambio de Idiomas

Plataforma que empareja personas para practicar idiomas mediante chat, videollamada y corrección colaborativa de textos.

### Funcionalidades Clave

- **Emparejamiento inteligente**: algoritmo que cruza idioma nativo / idioma objetivo, nivel y disponibilidad horaria
- **Chat en tiempo real**: con detección automática de idioma y sugerencias de corrección gramatical
- **Videollamada integrada**: WebRTC peer-to-peer con chat de texto simultáneo y control de calidad
- **Corrección de textos**: subida de redacciones, corrección colaborativa por hablantes nativos con anotaciones
- **Sistema de insignias**: logros por sesiones completadas, días consecutivos, correcciones realizadas, idiomas activos
- **Disponibilidad**: calendario con franjas horarias semanales de cada usuario, husos horarios
- **Reportes y moderación**: denuncia de comportamientos inapropiados con sistema de mediación y bloqueo
- **Recomendaciones**: sugerencia de contactos basada en intereses comunes y objetivos de aprendizaje

### Stack Sugerido

| Capa | Tecnología |
|---|---|
| Frontend | React + Vite + Tailwind |
| Backend | Node.js + Express |
| Tiempo real | Socket.io |
| Videollamada | WebRTC (SimplePeer) |
| BD | PostgreSQL |
| Almacenamiento | Cloudinary (imágenes/audio) |
| Despliegue | Docker + Vercel |

### Complejidad: Muy Alta

WebRTC para videollamadas peer-to-peer con señalización, algoritmo de emparejamiento con múltiples criterios, detección y corrección de idioma, chat en tiempo real con estado de escritura.

---

## 10. Gestor de TFG / Proyectos Finales

Plataforma para centros educativos: asignación, tutorización, entregas y evaluación de Trabajos de Fin de Grado.

### Funcionalidades Clave

- **Propuesta de temas**: profesores proponen temas con descriptores, plazas y requisitos previos
- **Asignación algorítmica**: emparejamiento profesor-alumno basado en preferencias mutuas (algoritmo de Gale-Shapley)
- **Seguimiento de hitos**: checkpoints obligatorios con fechas límite, evaluación parcial y alertas de retraso
- **Entregas**: subida de documentos con control de versiones (cada entrega mantiene historial)
- **Rúbricas de evaluación**: configurables por el profesor, asignables a cada hito
- **Detección de plagio**: integración con servicios externos o implementación de comparación de similitud básica
- **Actas de tribunal**: generación automática de actas con calificaciones y firmas digitales
- **Repositorio público**: publicación automática de TFG aprobados (con autorización del alumno) en página web del centro

### Stack Sugerido

| Capa | Tecnología |
|---|---|
| Frontend | React + MUI o Shadcn |
| Backend | NestJS o Spring Boot |
| BD | PostgreSQL |
| PDF | Puppeteer |
| Control versiones | Integración con GitHub API |
| Despliegue | Docker + Railway |

### Complejidad: Muy Alta

Algoritmo de emparejamiento estable (Gale-Shapley), integración con GitHub API para repositorios, sistema de versionado de entregas, generación de actas PDF con firmas digitales y rúbricas configurables con cálculo automático de notas.

---

## 11. Sistema de Recomendación de Contenido Educativo

Plataforma que recomienda recursos educativos (artículos, vídeos, ejercicios) basándose en el perfil y progreso del estudiante.

### Funcionalidades Clave

- **Perfil de aprendizaje**: test inicial de estilo de aprendizaje, nivel de conocimiento, objetivos
- **Motor de recomendación**: sistema híbrido (filtrado colaborativo + basado en contenido) que sugiere recursos
- **Catálogo de recursos**: curado por profesores con metadatos (tema, dificultad, formato, duración)
- **Seguimiento de consumo**: tiempo dedicado a cada recurso, completitud, valoración del estudiante
- **Adaptación dinámica**: las recomendaciones se ajustan según el progreso y las valoraciones del usuario
- **Gamificación**: puntos por consumir recursos, rachas de estudio, insignias por temas completados
- **Analíticas para profesor**: visión global del progreso de la clase, recursos más consumidos, dificultades comunes

### Stack Sugerido

| Capa | Tecnología |
|---|---|
| Frontend | React + Vite |
| Backend | Python + FastAPI |
| Motor ML | scikit-learn / Surprise |
| BD | PostgreSQL + Redis (caché) |
| Despliegue | Docker + Railway |

### Complejidad: Muy Alta

Implementación de motor de recomendación híbrido (colaborativo + contenido), matriz de usuarios/recursos, cálculo de similitudes (coseno, Pearson), actualización dinámica de recomendaciones y analíticas en tiempo real.

## ¿Cómo validar tu idea?

Antes de empezar a desarrollar:

1. **Habla con usuarios potenciales**: pregúntales si el problema es real y si usarían tu solución
2. **Analiza la competencia**: busca aplicaciones similares y piensa qué las diferencia
3. **Simplifica al máximo**: identifica la funcionalidad mínima que hace útil tu producto
4. **Consulta con el profesorado**: ellos te ayudarán a ajustar alcance y viabilidad técnica
5. **Evalúa la complejidad**: las ideas aquí marcadas como "Muy Alta" requieren planificar bien los sprints
