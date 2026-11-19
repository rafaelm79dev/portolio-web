// Single source of truth for Lucía's SEO data. Plain module (no "use client"),
// so server layouts, the sitemap and client components can import it.

export const SITE_URL = "https://lucia.techspot365.com";

/** One URL per language. English is the main version (served at "/"). */
export const PATHS = { en: "/", es: "/es" };
export const DEFAULT_LANG = "en";
export const LOCALES = { en: "en_US", es: "es_UY" };

export const SAME_AS = [
    "https://www.linkedin.com/in/luciasalvarrey",
    "https://www.salesforce.com/trailblazer/lsalvarrey",
];

export const fallback = {
    title: {
        en: "Lucía Salvarrey | Salesforce Technical Architect & Senior Developer",
        es: "Lucía Salvarrey | Salesforce Technical Architect & Senior Developer",
    },
    description: {
        en: "Salesforce Technical Architect & Senior Developer since 2014: Lightning Web Components, Apex, Flows and integrations. Certified Application Architect.",
        es: "Salesforce Technical Architect & Senior Developer desde 2014: Lightning Web Components, Apex, Flows e integraciones. Certificada como Application Architect.",
    },
};

/** Person structured data in the language of the page. */
export function buildPersonJsonLd(lang) {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Lucía Salvarrey",
        url: SITE_URL,
        image: `${SITE_URL}/profile.png`,
        jobTitle: "Salesforce Technical Architect & Senior Developer",
        worksFor: {
            "@type": "Organization",
            name: "Collaborative Technology Solutions International",
        },
        description: fallback.description[lang],
        knowsAbout: [
            "Salesforce",
            "Lightning Web Components",
            "Apex",
            "Salesforce Flow",
            "Visualforce",
            "Agentforce",
            "DevOps",
        ],
        knowsLanguage: ["en", "es"],
        sameAs: SAME_AS,
    };
}

/** Serializes JSON-LD safely for inline <script> (escapes "<"). */
export function jsonLdString(data) {
    return JSON.stringify(data).replace(/</g, "\u003c");
}
