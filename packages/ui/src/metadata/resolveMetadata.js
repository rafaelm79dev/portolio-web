/**
 * Picks the title and description for the current path and language.
 * The first route whose `prefix` matches the pathname wins; otherwise `fallback`.
 * `pathname` may be null/undefined (usePathname can return null).
 */
export function resolveMetadata({ pathname, language, routes, fallback }) {
    const match =
        routes.find((route) => pathname?.startsWith(route.prefix)) ?? fallback;
    return {
        title: match.title[language],
        description: match.description[language],
    };
}
