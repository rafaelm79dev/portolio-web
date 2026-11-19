# @portfolio/ui

Componentes compartidos por los sitios del monorepo. Es código fuente sin build propio: cada app lo consume con `transpilePackages`.

Los componentes **no contienen datos personales**. Nombre, foto, links, textos y colores los pone cada app.

## Configuración que necesita cada app

1. **Dependencia** en el `package.json` de la app: `"@portfolio/ui": "*"`.
2. **Next:** en `next.config.mjs`, `transpilePackages: ["@portfolio/ui"]`.
3. **Tailwind:** en `app/globals.css`, que escanee las clases del paquete:
   ```css
   @import "tailwindcss";
   @source "../../../packages/ui/src";
   ```
4. **Colores de tema** definidos en `@theme` de `globals.css`: `background`, `foreground`, `accent`, `muted-foreground`, `muted`, `header-from`, `header-via`, `header-to`, `card-from`, `card-via`, `card-to` (cada uno como `--color-<nombre>`).
5. **Archivos públicos:** `LanguageSwitcher` usa `/usa-flag.svg` y `/spain-flag.svg` de la carpeta `public` de la app.

## Traducciones

```jsx
import { TranslationsProvider } from "@portfolio/ui";
import es from "./translations/es.js";
import en from "./translations/en.js";

<TranslationsProvider translations={{ es, en }} storageKey="mi-sitio-language">
  {children}
</TranslationsProvider>
```

-   `TranslationsProvider({ translations, defaultLanguage = "es", storageKey = "portfolio-language", children })`. Usa una `storageKey` propia en cada sitio.
-   `useTranslations()` devuelve `{ t, language }`. `t("a.b.c")` busca la clave con puntos; si no existe devuelve la propia clave. Puede devolver arrays y objetos.
-   `useLanguage()` devuelve `{ language, changeLanguage }`.
-   Solo se admiten los idiomas `es` y `en`.

## Componentes

| Componente | Props |
| --- | --- |
| `Header` | `name`, `jobTitle`, `photo: { src, alt }`, `badges: [{ src, alt, rounded? }]`, `socialLinks: [{ name, icon, url, alt }]`, `navItems?: [{ href, label }]`. Sin `navItems` no se dibuja el toggle de páginas. |
| `SiteToggle` | `items: [{ href, label }]`. Queda activo el ítem cuyo `href` (distinto de `/`) es prefijo de la ruta; si ninguno coincide, el de `/`. |
| `MetadataUpdater` | `routes`, `fallback`. Actualiza título, meta description y `<html lang>` según ruta e idioma. Pasa constantes definidas fuera del componente. |
| `ExperienceItem` | `experience: { title, company, period, description[], projects[], technologies[], image?, logoBackground? }`. Sin `image` muestra las iniciales de la empresa. Si hay `projects`, necesita la clave `experience.projects` en las traducciones. |
| `ProjectItem` | `project: { image, domain?, displayName?, description?, technologies?, onlineLabel? }` |
| `LanguageSwitcher` | sin props |

Forma de `routes` y `fallback` para `MetadataUpdater`:

```js
const routes = [
  {
    prefix: "/servicios",
    title: { es: "…", en: "…" },
    description: { es: "…", en: "…" },
  },
];
const fallback = { title: { es: "…", en: "…" }, description: { es: "…", en: "…" } };
```

Funciones puras, también exportadas: `translate(translations, language, key)` y `resolveMetadata({ pathname, language, routes, fallback })`.

## Tests

```bash
npm test -w packages/ui
```

Usan el runner de Node (`node --test`), sin dependencias extra. Cubren `translate`, `resolveMetadata` y `getInitials`.
