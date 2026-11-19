import { SITE_URL } from "./site-config.js";

export default function sitemap() {
    return [{ url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 }];
}
