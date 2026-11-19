/**
 * Next.js `metadata` object for one language version of a page.
 *
 * Every language lives at its own path (`paths`, e.g. { en: "/", es: "/es" }).
 * Each page declares itself as canonical and lists all versions in
 * `alternates.languages` (hreflang), with `x-default` pointing to `defaultLang`.
 * Paths are relative: they resolve against `metadataBase` (siteUrl).
 */
export function buildLocalizedMetadata({
    siteUrl,
    lang,
    paths,
    defaultLang,
    locales,
    siteName,
    title,
    description,
    images = [],
}) {
    const languages = { ...paths, "x-default": paths[defaultLang] };
    const alternateLocale = Object.keys(locales)
        .filter((l) => l !== lang)
        .map((l) => locales[l]);

    return {
        metadataBase: new URL(siteUrl),
        title: title[lang],
        description: description[lang],
        alternates: { canonical: paths[lang], languages },
        openGraph: {
            type: "website",
            url: paths[lang],
            siteName,
            locale: locales[lang],
            alternateLocale,
            title: title[lang],
            description: description[lang],
            images,
        },
        twitter: {
            card: "summary",
            title: title[lang],
            description: description[lang],
            images: images.map((image) => image.url),
        },
    };
}
