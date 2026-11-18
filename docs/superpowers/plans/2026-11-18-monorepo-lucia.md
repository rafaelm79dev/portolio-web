# Monorepo (pasos 1 y 2): mover a `apps/rafael` y extraer `packages/ui`

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Dejar el sitio de Rafael funcionando igual dentro de un monorepo npm, con los componentes reutilizables en `packages/ui` y sin datos personales hardcodeados en ellos.

**Architecture:** npm workspaces con `apps/rafael` (el sitio actual) y `packages/ui` (código fuente sin build propio, consumido con `transpilePackages`). Todo lo personal (nombre, links, fotos, traducciones, textos de SEO) queda en la app y llega a los componentes por props o por un provider de traducciones.

**Tech Stack:** Next.js 15.3.6, React 19, Tailwind v4, JavaScript, npm workspaces, `node --test` para la lógica pura.

**Spec:** `docs/superpowers/specs/2026-11-18-monorepo-lucia-design.md`

## Global Constraints

- Todo el trabajo va en la rama `feat/monorepo`, nunca en `main`. No hacer push ni tocar Vercel.
- El sitio de Rafael no puede cambiar de aspecto ni de comportamiento (anti-goal del spec).
- Nombres fijos: `apps/rafael`, `apps/lucia` (aún no se crea), `packages/ui`, paquete `@portfolio/ui`.
- Gestor: npm workspaces. Sin dependencias nuevas salvo las que ya usa el sitio.
- Los commits terminan con la línea `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`.
- Mover archivos con `git mv` para conservar el historial.
- El idioma por defecto es `es` y la clave de `localStorage` sigue siendo `portfolio-language` (no se cambia para Rafael).

## Review Focus

1. `t()` con una clave inexistente devuelve la propia clave (comportamiento actual `value || key`).
2. `t()` con claves que apuntan a arrays u objetos (`services.list`, `services.process.steps`) devuelve el valor tal cual.
3. `usePathname()` puede devolver `null`: la metadata cae en la ruta por defecto, sin romper.
4. Subrutas de `/servicios` (`/servicios/x`) usan la metadata de servicios.
5. Sin `navItems`, el Header no dibuja el toggle; con ellos, "CV" queda activo en `/` y "Servicios" en `/servicios`.
6. Las clases de Tailwind usadas solo dentro de `packages/ui` (`backdrop-blur-sm`, `motion-safe:animate-ping`) aparecen en el CSS generado.

---

## File Structure

- `package.json` (raíz): workspaces, scripts delegados.
- `apps/rafael/`: `app/`, `public/`, `package.json`, `next.config.mjs`, `jsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs` (movidos).
- `apps/rafael/app/components/SiteHeader.js`, `SiteMetadata.js` (nuevos): configuración de Rafael sobre los componentes de ui.
- `packages/ui/package.json`, `src/index.js`
- `packages/ui/src/i18n/translate.js`, `TranslationsProvider.js`
- `packages/ui/src/metadata/resolveMetadata.js`, `MetadataUpdater.js`
- `packages/ui/src/components/Header.js`, `SiteToggle.js`, `LanguageSwitcher.js`, `ExperienceItem.js`, `ProjectItem.js`
- `packages/ui/test/translate.test.js`, `resolveMetadata.test.js`

---

### Task 1: Mover el sitio a `apps/rafael` sin cambiarlo

**Files:**
- Create: `package.json` (raíz), `scripts/snapshot.sh`
- Move (`git mv`): `app/`, `public/`, `next.config.mjs`, `jsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`, `package.json` → `apps/rafael/`
- Modify: `.gitignore`, `package-lock.json` (regenerado)

**Interfaces:**
- Produces: `npm run build -w apps/rafael` y `npm run dev -w apps/rafael`; `scripts/snapshot.sh <dir>` que guarda en `<dir>` el HTML prerenderizado de `/` y `/servicios` normalizado (sin hashes de `_next/static`), para comparar antes/después.

- [ ] **Step 1: Crear la rama y guardar el estado actual del diseño**

Run: `git switch -c feat/monorepo` y `git add docs && git commit -m "docs: design and plan for monorepo"`
Expected: rama creada, docs commiteados.

- [ ] **Step 2: Escribir `scripts/snapshot.sh`**

Recibe un directorio de salida; toma `.next/server/app/index.html` y `.next/server/app/servicios.html` de la app (ruta pasada por variable `APP_DIR`, por defecto `.`), reemplaza con `sed` los segmentos `/_next/static/<hash>/...` y los nombres de chunk con hash por un marcador fijo, y los copia a `<dir>/index.html` y `<dir>/servicios.html`.

- [ ] **Step 3: Capturar la línea base antes de mover nada**

Run: `npm install && npm run build && bash scripts/snapshot.sh ../baseline` (la carpeta `baseline` fuera del repo, en el scratchpad).
Expected: build OK y dos archivos HTML en la carpeta de baseline.

- [ ] **Step 4: Mover los archivos**

`git mv` de `app`, `public`, `next.config.mjs`, `jsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs` y `package.json` a `apps/rafael/`. Borrar `node_modules` y `.next` de la raíz.

- [ ] **Step 5: Armar la raíz**

`package.json` de la raíz: `"private": true`, `"workspaces": ["apps/*", "packages/*"]`, scripts `dev:rafael` y `build:rafael` que llaman a `npm run dev|build -w apps/rafael`. En `apps/rafael/package.json` poner `"name": "@portfolio/rafael"`. En `.gitignore` cambiar las reglas ancladas (`/node_modules`, `/.next/`, `/out/`, `/coverage`) por versiones sin barra inicial para que apliquen en subcarpetas.

- [ ] **Step 6: Instalar y construir desde la raíz**

Run: `npm install && npm run build:rafael`
Expected: build OK. Si Next avisa del root de Turbopack o de varios lockfiles, fijar `turbopack: { root: <raíz del repo> }` y `outputFileTracingRoot` en `apps/rafael/next.config.mjs`.

- [ ] **Step 7: Comparar con la línea base**

Run: `APP_DIR=apps/rafael bash scripts/snapshot.sh ../after && diff -r ../baseline ../after`
Expected: sin diferencias.

- [ ] **Step 8: Commit**

`git add -A && git commit -m "refactor: move site to apps/rafael with npm workspaces"`

---

### Task 2: Lógica pura de i18n y metadata (con tests)

**Files:**
- Create: `packages/ui/package.json` (`"name": "@portfolio/ui"`, `"type": "module"`, `"private": true`, script `"test": "node --test test/"`), `packages/ui/src/i18n/translate.js`, `packages/ui/src/metadata/resolveMetadata.js`
- Test: `packages/ui/test/translate.test.js`, `packages/ui/test/resolveMetadata.test.js`

**Interfaces:**
- Produces: `translate(translations: Record<string, object>, language: string, key: string): any` (clave con puntos; devuelve la clave si el valor no existe o es falsy, igual que hoy).
- Produces: `resolveMetadata({ pathname, language, routes, fallback }): { title: string, description: string }` con `routes: Array<{ prefix: string, title: {es, en}, description: {es, en} }>` y `fallback: { title: {es, en}, description: {es, en} }`. `pathname` puede ser `null`/`undefined` (usa `fallback`); gana la primera ruta cuyo `prefix` coincide con `pathname.startsWith(prefix)`.

- [ ] **Step 1: Escribir los tests que fallan**

`translate.test.js`: `translate({es:{a:{b:"x"}}}, "es", "a.b") === "x"`; clave inexistente `"a.zzz"` devuelve `"a.zzz"`; un array en `list` se devuelve con `deepEqual`; con idioma `en` lee el diccionario `en`.
`resolveMetadata.test.js`: `/servicios` y `/servicios/x` devuelven los textos de servicios; `/` devuelve el fallback; `null` devuelve el fallback; con `language: "en"` devuelve el texto en inglés.

- [ ] **Step 2: Verlos fallar**

Run: `npm test -w packages/ui`
Expected: FAIL (módulos no existen).

- [ ] **Step 3: Implementar `translate` y `resolveMetadata`**

ESM puro, sin JSX ni dependencias.

- [ ] **Step 4: Verlos pasar**

Run: `npm test -w packages/ui`
Expected: PASS, todos los tests.

- [ ] **Step 5: Commit**

`git add packages && git commit -m "feat(ui): add translate and resolveMetadata with tests"`

---

### Task 3: Provider de traducciones y componentes sin datos personales

**Files:**
- Create: `packages/ui/src/i18n/TranslationsProvider.js`, `packages/ui/src/components/{LanguageSwitcher,ExperienceItem,ProjectItem}.js`, `packages/ui/src/index.js`
- Modify: `apps/rafael/package.json` (dependencia `"@portfolio/ui": "*"`), `apps/rafael/next.config.mjs` (`transpilePackages: ["@portfolio/ui"]`), `apps/rafael/app/globals.css` (`@source "../../../packages/ui/src";`), `apps/rafael/app/layout.js`, `apps/rafael/app/page.js`
- Delete: `apps/rafael/app/contexts/`, `hooks/`, `providers/`, y `components/{LanguageSwitcher,ExperienceItem,ProjectItem}.js` de Rafael

**Interfaces:**
- Consumes: `translate` (Task 2).
- Produces (todo exportado desde `@portfolio/ui`):
  - `TranslationsProvider({ translations, defaultLanguage = "es", storageKey = "portfolio-language", children })` (client).
  - `useLanguage(): { language, changeLanguage(lang) }` y `useTranslations(): { t(key), language }`, misma API que hoy.
  - `LanguageSwitcher()`, `ExperienceItem({ experience })`, `ProjectItem({ project })`: mismas props y mismo marcado que hoy. `LanguageSwitcher` sigue leyendo `/usa-flag.svg` y `/spain-flag.svg` de la carpeta `public` de la app que lo use.

- [ ] **Step 1: Mover componentes y contexto a `packages/ui/src`**

`git mv` de `LanguageSwitcher`, `ExperienceItem`, `ProjectItem` y de `LanguageContext.js`. Fusionar `LanguageContext`, `LanguageProviderWrapper` y `useTranslations` en `TranslationsProvider.js`; `useTranslations` usa `translate(translations, language, key)` con el diccionario que recibió el provider. Ajustar los imports relativos. Crear `src/index.js` que reexporta todo.

- [ ] **Step 2: Conectar la app**

`layout.js` envuelve con `<TranslationsProvider translations={{ es, en }}>` importando `app/translations/{es,en}.js`; `page.js` y `servicios/page.js` importan `useTranslations`, `ExperienceItem` y `ProjectItem` desde `@portfolio/ui`. `MetadataUpdater`, `Header` y `SiteToggle` siguen locales por ahora, pero importan `useLanguage` y `useTranslations` desde `@portfolio/ui`.

- [ ] **Step 3: Instalar y construir**

Run: `npm install && npm run build:rafael`
Expected: build OK.

- [ ] **Step 4: Verificar que las clases de ui llegan al CSS**

Run: `grep -l "animate-ping" apps/rafael/.next/static/css/*.css`
Expected: al menos un archivo. Si no aparece, el `@source` de `globals.css` está mal.

- [ ] **Step 5: Comparar con la línea base**

Run: `APP_DIR=apps/rafael bash scripts/snapshot.sh ../after && diff -r ../baseline ../after`
Expected: sin diferencias de contenido. Una diferencia por serialización del provider (texto del payload RSC) es aceptable solo si el HTML visible es idéntico; anotarla en el commit.

- [ ] **Step 6: Commit**

`git add -A && git commit -m "refactor: extract i18n provider and content components to @portfolio/ui"`

---

### Task 4: Header, toggle y metadata parametrizados

**Files:**
- Create: `packages/ui/src/components/{Header,SiteToggle}.js`, `packages/ui/src/metadata/MetadataUpdater.js`, `apps/rafael/app/components/SiteHeader.js`, `apps/rafael/app/components/SiteMetadata.js`
- Modify: `packages/ui/src/index.js`, `apps/rafael/app/layout.js`, `apps/rafael/app/page.js`, `apps/rafael/app/servicios/page.js`
- Delete: `apps/rafael/app/components/{Header,SiteToggle,MetadataUpdater}.js` originales

**Interfaces:**
- Consumes: `useTranslations`, `useLanguage`, `LanguageSwitcher`, `resolveMetadata`.
- Produces:
  - `Header({ name, jobTitle, photo: { src, alt }, badges = [], socialLinks = [], navItems })` donde `badges: Array<{ src, alt }>`, `socialLinks: Array<{ name, icon, url, alt }>`, `navItems?: Array<{ href, label }>`. Sin `navItems` no se dibuja el toggle. Todo el marcado y las clases siguen iguales a las del Header actual.
  - `SiteToggle({ items })`: activo es el ítem cuyo `href` (distinto de `/`) es prefijo del `pathname`; si ninguno coincide, el activo es el de `href="/"`.
  - `MetadataUpdater({ routes, fallback })`: usa `resolveMetadata` con `usePathname()` y `useLanguage()`, y aplica `document.title`, la meta description y `document.documentElement.lang` como hoy.
- Produces (app): `SiteHeader()` (client) que arma el Header con los datos de Rafael ("Rafael Morales", `/profile.png`, bandera de Uruguay y mate, LinkedIn y GitHub, ítems CV `/` y Servicios `/servicios` con `t("nav.cv")` y `t("nav.services")`, `jobTitle` con `t("header.jobTitle")`); `SiteMetadata()` (client) con las rutas y textos actuales de `MetadataUpdater`, copiados sin cambios.

- [ ] **Step 1: Mover y parametrizar los tres componentes**

`git mv` a `packages/ui/src`. En `Header` reemplazar `developerName`, `/profile.png`, las dos banderas y `socialLinks` por las props; los textos fijos de `alt` pasan a las props. `SiteToggle` recibe `items`. `MetadataUpdater` delega en `resolveMetadata`.

- [ ] **Step 2: Crear `SiteHeader` y `SiteMetadata` en la app**

Contienen los datos de Rafael que hoy estaban dentro de los componentes. Pegar los títulos y descripciones exactos del `MetadataUpdater` original (los 4 pares es/en).

- [ ] **Step 3: Reemplazar los usos**

`layout.js` usa `<SiteMetadata />`; `page.js` y `servicios/page.js` usan `<SiteHeader />` en lugar de `<Header />`.

- [ ] **Step 4: Construir y comparar**

Run: `npm run build:rafael && APP_DIR=apps/rafael bash scripts/snapshot.sh ../after && diff -r ../baseline ../after`
Expected: build OK y HTML igual a la línea base.

- [ ] **Step 5: Revisar a mano en el navegador**

Run: `npm run dev:rafael` y abrir `/` y `/servicios`.
Expected: header idéntico, toggle CV/Servicios con el activo correcto, cambio de idioma (ES/EN) y título de la pestaña cambian, sin errores en consola.

- [ ] **Step 6: Buscar restos de datos personales en ui**

Run: `grep -rniE "rafael|linkedin|github|uruguay|mate" packages/ui/src`
Expected: sin resultados.

- [ ] **Step 7: Commit**

`git add -A && git commit -m "refactor: parametrize Header, SiteToggle and MetadataUpdater in @portfolio/ui"`

---

## Self-review

- **Spec coverage:** pasos 1 y 2 del spec cubiertos por las tareas 1 a 4. Los pasos 3 (app de Lucía) y 4 (Vercel) quedan fuera a propósito.
- **Consistencia de nombres:** `translate`, `resolveMetadata`, `TranslationsProvider`, `Header`, `SiteToggle`, `MetadataUpdater`, `SiteHeader`, `SiteMetadata` iguales en todas las tareas.
- **Riesgo conocido:** `LanguageSwitcher` depende de `/usa-flag.svg` y `/spain-flag.svg` en `public/` de cada app. Lucía tendrá que incluirlos.
