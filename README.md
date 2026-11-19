# Portfolio Web (monorepo)

Dos sitios de portfolio en un mismo repositorio, hechos con [Next.js](https://nextjs.org) y Tailwind CSS. Cada sitio tiene su propio contenido, colores y despliegue, y comparten los componentes.

Si estás viendo este repositorio lo vi en YouTube. Gracias a [just a dev](https://www.youtube.com/@goyo_is_a_dev), ¡bienvenido! El proyecto parte de una plantilla de su tutorial.

## 📁 Estructura

```
portfolio-web\
├── apps\
│   ├── rafael\    Sitio de Rafael Morales: CV y Servicios
│   └── lucia\     Sitio de Lucía Salvarrey: CV
├── packages\
│   └── ui\        @portfolio/ui: componentes compartidos
├── docs\          Diseño y plan del monorepo
├── scripts\       Utilidades para comparar el HTML generado
└── package.json   npm workspaces
```

Cada app tiene su README con lo que se edita en ella. Los componentes compartidos están documentados en [packages/ui](packages/ui/README.md).

## 🛠️ Tecnologías

-   **Frontend:** Next.js 15, React 19, Tailwind CSS 4
-   **Monorepo:** npm workspaces
-   **Idiomas:** Español e Inglés
-   **Despliegue:** Vercel (un proyecto por sitio)

## 🚀 Comenzando

Siempre desde la raíz del repositorio:

```bash
npm install
```

| Comando | Qué hace |
| --- | --- |
| `npm run dev:rafael` | Sitio de Rafael en http://localhost:3000 |
| `npm run dev:lucia` | Sitio de Lucía en http://localhost:3001 |
| `npm run build:rafael` | Build de producción del sitio de Rafael |
| `npm run build:lucia` | Build de producción del sitio de Lucía |
| `npm test -w packages/ui` | Tests de los componentes compartidos |

Los dos sitios pueden correr a la vez.

> **Importante:** `dev` y `build` de una misma app usan la misma carpeta `.next`. Si corres un build mientras el servidor de desarrollo de esa app está abierto, el servidor responde "Internal Server Error". Detenlo (Ctrl+C) y vuelve a lanzarlo.

### Abrir el servidor de desarrollo desde otra dirección

Si abres el sitio con una IP en lugar de `localhost`, Next muestra un aviso de "cross origin". Para permitir esa IP crea un archivo `.env.local` dentro de la app (git lo ignora):

```
ALLOWED_DEV_ORIGINS=169.254.170.76
```

Para varias direcciones, sepáralas con coma. Reinicia el servidor después de cambiarlo.

## 🌐 Despliegue en Vercel

Cada sitio es **un proyecto distinto de Vercel** conectado al mismo repositorio. Un proyecto solo admite un Root Directory.

| Proyecto | Root Directory |
| --- | --- |
| Sitio de Rafael | `apps/rafael` |
| Sitio de Lucía | `apps/lucia` |

En `Settings → General` de cada proyecto:

-   Activa **Include source files outside of the Root Directory in the Build Step**. Sin esto el build no encuentra `packages/ui`.
-   Vercel instala las dependencias desde la raíz gracias a los workspaces.

Cambiar el Root Directory de un proyecto que ya existe rompe los builds hasta que el código nuevo esté en la rama que despliega. Haz el cambio justo cuando se mergea esta estructura a `main`.

## 📚 Recursos Adicionales

-   [Documentación de Next.js](https://nextjs.org/docs)
-   [Aprende Next.js](https://nextjs.org/learn)
-   [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
-   [Monorepos en Vercel](https://vercel.com/docs/monorepos)

## 📝 Licencia

MIT - Puedes usar este proyecto libremente para tus proyectos personales o comerciales.
