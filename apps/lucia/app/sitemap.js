import { SITE_URL, PATHS } from "./site-config.js";

// One entry per language version, each listing all versions (hreflang).
const languages = Object.fromEntries(
    Object.entries(PATHS).map(([lang, path]) => [lang, `${SITE_URL}${path === "/" ? "" : path}`])
);

export default function sitemap() {
    return Object.values(languages).map((url) => ({
        url,
        changeFrequency: "monthly",
        priority: url === languages.en ? 1 : 0.9,
        alternates: { languages },
    }));
}
