# Monorepo: sitio de Rafael + sitio de Lucía

## Intención
Rafael quiere una página para Lucía con el mismo estilo y estructura que su portfolio, dentro del mismo repo. Cada sitio tiene su propio dominio, su identidad visual y su deploy; el código común se arregla una sola vez.

## Goals
- Dos apps Next.js independientes en un repo: `apps/rafael` y `apps/lucia`.
- Componentes compartidos en `packages/ui`.
- Dos proyectos de Vercel apuntando al mismo repo, cada uno con su Root Directory.
- Contenido, colores, fotos y metadatos de cada persona viven dentro de su app.

## Non-goals
- Rediseñar el sitio de Rafael.
- Escribir el contenido real de Lucía (arranca con texto de ejemplo que ella reemplaza).
- Extraer un paquete publicado en npm.

## Anti-goals
- Que el sitio de Rafael cambie de aspecto o quede caído durante la migración.
- Que algo de Rafael (nombre, links, bandera, mate, SEO) aparezca en el sitio de Lucía.

## Constraints
- Stack actual: Next.js 15.3.6, React 19, Tailwind v4, JavaScript, sin tests.
- Los componentes actuales tienen datos de Rafael hardcodeados (`Header.js`, `MetadataUpdater.js`, `page.js`) y `useTranslations` importa `app/translations` directo. Para compartirlos hay que pasar esos datos por props o por un provider.
- Tailwind v4 solo genera clases de archivos que escanea: la app debe declarar `@source` hacia `packages/ui`. Next necesita `transpilePackages`.
- El deploy actual de Rafael en Vercel usa la raíz del repo. Hay que cambiar su Root Directory a `apps/rafael`.

## Approaches
1. **Monorepo con workspaces (elegida por Rafael):** dos apps + paquete ui. Dominios y deploys separados, componentes compartidos. Costo: mover el sitio actual y parametrizar componentes.
2. **Una app con rutas (`/lucia`):** sin migración, pero comparten dominio, tema y layout. Descartada porque Lucía necesita identidad propia.
3. **Repo separado:** el más simple, pero duplica los componentes. Rafael prefirió un solo repo.

## Estructura
```
portfolio-web\
├── apps\
│   ├── rafael\   app\, public\, translations, next.config.mjs, package.json
│   └── lucia\    ídem, con su contenido
├── packages\
│   └── ui\       Header, ExperienceItem, ProjectItem, SiteToggle,
│                 LanguageSwitcher, contexts, hook de traducciones
├── package.json  (npm workspaces)
└── docs\
```

## Orden de trabajo (cada paso se verifica con `next build` antes del siguiente)
1. **Mover sin cambiar nada:** el sitio actual pasa a `apps/rafael` y se arma la raíz con workspaces. Build verde y sitio idéntico.
2. **Extraer `packages/ui`:** componentes parametrizados (nombre, foto, redes sociales, banderas, textos) y traducciones inyectadas por cada app. `apps/rafael` pasa a consumirlos y se confirma que no cambia nada visualmente.
3. **Crear `apps/lucia`:** misma estructura, con nombre, foto, colores y textos de ejemplo.
4. **Vercel:** cambiar Root Directory de Rafael, crear el proyecto de Lucía y probar con preview deploys antes de tocar producción.

Todo se hace en una rama, nunca directo en `main`.

## Decidido por Rafael
- Un solo repo, opción A (monorepo).
- El sitio se llama Lucía.

## Calls míos (corregibles)
- Gestor: npm workspaces (ya usan npm, `package-lock.json`).
- Nombres de carpetas: `apps/rafael`, `apps/lucia`, `packages/ui`.
- El paquete ui se consume como código fuente (sin build propio).

## Queda para el builder
- La API exacta de props/provider de los componentes.
- Dónde viven `eslint.config.mjs` y `jsconfig.json` (raíz o por app).

## Abierto (lo decide Rafael)
- ¿A qué se dedica Lucía y qué busca (clientes, empleo, ambos)? Define si lleva el toggle CV/Servicios.
- Colores y foto de Lucía.
- Dominio de cada sitio.
