import { SITE_URL } from "./site-config.js";

// Search engines and AI crawlers are explicitly allowed so the site can be
// found and cited by Google, Bing, ChatGPT, Claude, Perplexity and Gemini.
const AI_BOTS = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-SearchBot",
    "Claude-User",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
];

export default function robots() {
    return {
        rules: [
            { userAgent: "*", allow: "/" },
            { userAgent: AI_BOTS, allow: "/" },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
