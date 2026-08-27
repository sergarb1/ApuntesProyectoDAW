# Lote 3 — Build Fix (27 Aug 2026)

## Problema
Build fallaba con "Unexpected character after `<`" tras crear U5/U6/U7.

## Causas raíz (4 issues)
1. **`.bak` directories in `src/content/`** — Astro escanea TODOS los subdirectorios. `.bak` dentro de `src/content/docs/apuntes-pi1/` causaba que archivos MDX rotos se compilasen. Solución: mover `.bak` a la raíz del proyecto.
2. **`@mdx-js/mdx@3` en devDependencies** — rompía el árbol de dependencias de npm. Solución: `rm -rf node_modules && npm install` sin devDependencies.
3. **`<` en texto libre** — `<30`, `<576px`, `< 3` se interpretaban como JSX. Solución: escapar con `&lt;`.
4. **`## <Comparativa`** — componente JSX dentro de heading markdown. Solución: mover componente fuera del heading.

## Otros issues encontrados
- **BOM** en `u5-frontend-basico/09-cierre.mdx` — primer byte era `0xFEFF`. Solución: eliminar BOM.
- **Mojibake** en `u5-frontend-basico/09-cierre.mdx` — encoding UTF-8/Latin-1 mixto. Solución: reemplazar patrones `Ã³`→`ó`, `Ã­`→`í`, etc.

## Archivos clave
- `find-all-bad2.cjs` — scanner para encontrar `<` problemático en MDX (funcional, guardado)
- `scripts/verificar-lotes.mjs` — verificación YAML + navegación

## Regla importante
- **NUNCA** poner `.bak` dentro de `src/content/` — Astro escanea todo
- `<` seguido de número/letra en texto libre → escapar con `&lt;`
- Componentes JSX (`<Comparativa>`) NUNCA dentro de headings `##`
- BOM check: `content.charCodeAt(0) === 0xFEFF`

## Estado
- Build: ✅ 112 páginas
- Verificación: ✅ 0 errores
- Sidebar: U5, U6, U7 activos
