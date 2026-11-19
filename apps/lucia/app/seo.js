import { buildLocalizedMetadata } from "@portfolio/ui";
import { SITE_URL, PATHS, DEFAULT_LANG, LOCALES, fallback } from "./site-config.js";

/** Next.js metadata for the page of one language. */
export function localizedMetadata(lang) {
    return buildLocalizedMetadata({
        siteUrl: SITE_URL,
        lang,
        paths: PATHS,
        defaultLang: DEFAULT_LANG,
        locales: LOCALES,
        siteName: "Lucía Salvarrey",
        title: fallback.title,
        description: fallback.description,
        images: [{ url: "/profile.png", alt: "Lucía Salvarrey" }],
    });
}
