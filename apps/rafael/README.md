# Sitio de Rafael Morales

Portfolio con dos páginas: CV (`/`) y Servicios (`/servicios`).

```bash
npm run dev:rafael    # desde la raíz del repo, http://localhost:3000
```

## Qué se edita

| Qué | Dónde |
| --- | --- |
| Textos generales, perfil, servicios y contacto | `app/translations/es.js` y `app/translations/en.js` (mantener las dos en sincronía) |
| Experiencia, conocimientos y proyectos | `app/page.js` |
| Página de Servicios | `app/servicios/page.js` |
| Colores | `@theme` en `app/globals.css` |
| Datos del header y redes | `app/components/SiteHeader.js` |
| Título y descripción de la pestaña | `app/layout.js` y `app/components/SiteMetadata.js` |
| Imágenes, logos y banderas | `public/` |

## Notas

-   Despliegue: proyecto de Vercel propio con Root Directory `apps/rafael`.
-   Los componentes vienen de [`@portfolio/ui`](../../packages/ui/README.md).
