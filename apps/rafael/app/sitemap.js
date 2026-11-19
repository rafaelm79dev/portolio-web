import { SITE_URL } from "./site-config.js";

export default function sitemap() {
    return [
        { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
        { url: `${SITE_URL}/servicios`, changeFrequency: "monthly", priority: 0.8 },
    ];
}
