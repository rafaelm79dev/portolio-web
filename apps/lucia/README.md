# Sitio de Lucía Salvarrey

CV de Lucía, Salesforce Technical Architect. Solo CV por ahora: no tiene página de Servicios ni toggle.

```bash
npm run dev:lucia     # desde la raíz del repo, http://localhost:3001
```

## Qué se edita

| Qué | Dónde |
| --- | --- |
| Textos del CV, certificaciones, conocimientos, experiencia, educación y contacto | `app/translations/es.js` y `app/translations/en.js` (mantener las dos en sincronía) |
| Foto de perfil | `public/profile.png` |
| Logos de empresas | `public/company_logo/` y el campo `image` de cada trabajo en las traducciones. Sin `image` se muestran las iniciales |
| Colores | `@theme` en `app/globals.css` (provisorios) |
| Favicon | `app/icon.svg` |
| Título y descripción de la pestaña | `app/components/SiteMetadata.js` y `metadata` en `app/layout.js` |
| Datos del header y redes | `app/components/SiteHeader.js` |

## Notas

-   Las certificaciones listadas son las que figuran como vigentes en Trailhead. Si cambian, se actualizan en la clave `certifications`.
-   El contacto es solo su LinkedIn, sin email.
-   El idioma elegido se guarda con la clave `lucia-language`, distinta de la del otro sitio.
-   Despliegue: proyecto de Vercel propio con Root Directory `apps/lucia`.
-   Los componentes vienen de [`@portfolio/ui`](../../packages/ui/README.md).
