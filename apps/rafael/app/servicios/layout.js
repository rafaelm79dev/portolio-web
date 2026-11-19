import { SITE_URL, routes, serviceJsonLd, jsonLdString } from "../site-config.js";

const { title, description } = routes[0];

export const metadata = {
    title: title.es,
    description: description.es,
    alternates: { canonical: "/servicios" },
    openGraph: {
        type: "website",
        url: `${SITE_URL}/servicios`,
        siteName: "Rafael Morales",
        locale: "es_UY",
        title: title.es,
        description: description.es,
        images: [{ url: "/profile.png", alt: "Rafael Morales" }],
    },
    twitter: {
        card: "summary",
        title: title.es,
        description: description.es,
        images: ["/profile.png"],
    },
};

export default function ServiciosLayout({ children }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLdString(serviceJsonLd) }}
            />
            {children}
        </>
    );
}
