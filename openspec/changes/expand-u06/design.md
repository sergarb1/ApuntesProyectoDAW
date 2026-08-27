## Context

La U6 es la sexta unidad del curso y debe cumplir el estándar `contenido-unidad`. `docsLoader` resuelve slugs `u6-backend-basico` y `u6-backend-basico/NN-...`. El script EPUB usará helper `expandUnit`.

## Goals / Non-Goals

**Goals:**
- Completar U6 con índice + 9 puntos navegables, cada uno ≈110–260 líneas.
- Nivel de entrada cero: definir términos (iteración, esqueleto, refactor, debug, auth, CRUD, middleware, servicio, controlador, ruta, modelo, JWT, hash, bcrypt, ORM, SQL, NoSQL, API, REST, endpoint, request, response, status code, JSON, try/catch, async/await, Promise, stack trace, log, breakpoint, watch, console, debugger, lint, prettier, test, unitario, integración, E2E, mock, stub, spy, coverage, CI, CD, pipeline, staging, production, deploy, container, docker, compose, env, variable de entorno, config, secret, key, token, JWT, OAuth, CORS, CSP, helmet, rate limit, sanitize, validate, escape, XSS, CSRF, SQL injection, parameterized query, prepared statement, ORM, migration, seed, transaction, rollback, commit, ACID, isolation level, deadlock, index, query plan, EXPLAIN, slow query, cache, Redis, Memcached, CDN, load balancer, reverse proxy, nginx, apache, PM2, systemd, supervisor, logrotate, journald, syslog, rsyslog, fluentd, logstash, elasticsearch, kibana, grafana, prometheus, alertmanager, node exporter, blackbox exporter, pushgateway, alert rule, notification, email, slack, pagerduty, opsgenie, victorops, datadog, newrelic, appdynamics, dynatrace, splunk, sumologic, papertrail, loggly, logentries, logdna, honeybadger, rollbar, sentry, bugsnag, airbrake, raygun, exceptionless, trackjs, raygun4js, raven, rollbar-js, bugsnag-js, airbrake-js, honeybadger-js, sentry-js... en primer uso con analogías.
- Cierre con fallo intencionado (try/catch ausente en async).
- Tabla competencias (CG1, CE3) en índice con cobertura.
- Encadenado correcto anterior/siguiente y hacia U7.

**Non-Goals:**
- No ampliar otras unidades en este change.
- No rediseñar CSS/layout; no cambiar scripts (helper `expandUnit` se añade al final).

## Decisions

### D1: Estructura
- Índice: `u6-backend-basico.mdx`
- Puntos: `u6-backend-basico/NN-...mdx` (01-08 teoría + 09-cierre)
- **Razón:** mismo patrón U1-U5.

### D2: División 9 puntos
1. `01-el-arte-de-empezar` — priorizar por valor, no dificultad; esqueleto incremental
2. `02-esqueleto-incremental` — iteraciones mock → BD real → validación → auth
3. `03-estructura-de-carpetas` — routes/controllers/models/services/middleware/utils/config (tabla ASCII original)
4. `04-comentarios-que-ayudan` — porqué no qué; ejemplo IVA vs suma
5. `05-refactorizar-desde-el-principio` — extraer duplicación, dividir clases grandes
6. `06-manejo-de-atascos` — Aclaracion original "¿Qué hago si me atasco?" AQUÍ (divide, busca, pregunta, salta)
7. `07-priorizar-lo-critico` — auth y datos primero; CasoPractico "estudiante que programó lo difícil primero" AQUÍ
8. `08-checklist-implementacion` — 7 items original + priorizar, commits pequeños, probar
9. `09-cierre` — ⭐ Sé el Proyecto (registro usuarios), 🔥 Dilema refactor vs entrega, 🕵️ ¿Quién Soy? (checklist, atasco, carpetas, priorizar), ⚡ Laboratorio (fallo intencionado: try/catch ausente en bcrypt/BD, validación email, respuesta sin ID), 🧠 Atrévete, 💬 Entrevista, 🤷 Preguntas Tontas, 🎬 Post-Créditos "PRÓXIMAMENTE EN U7"

### D3: Nivel entrada cero
Plantilla U1: frase inicial, secciones `##`, tabla/analogía, "Resumen en 3 frases", vocabulario `>`, enlaces Anterior/Siguiente/Volver.

### D4: Diagramas
Solo ASCII. Sin assets nuevos.

### D5: Cierre y continuidad
- Post-Créditos: "PRÓXIMAMENTE EN U7: Trabajar en equipo: Git, comunicación, reparto y conflictos. 👥"
- Índice: tabla competencias CG1/CE3, enlaces 9 puntos slugs reales.

## Risks / Trade-offs
- [Puntos 01-08 generados por subagente] → verificación `verificar-lotes.mjs`.
- [Fallo intencionado try/catch] → estándar lo reclama; pistas escalonadas.