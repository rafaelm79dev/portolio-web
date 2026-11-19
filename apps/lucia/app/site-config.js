// Single source of truth for Lucía's SEO data. Plain module (no "use client"),
// so both server metadata and the client MetadataUpdater can import it.

export const SITE_URL = "https://lucia.techspot365.com";

export const SAME_AS = [
    "https://www.linkedin.com/in/luciasalvarrey",
    "https://www.salesforce.com/trailblazer/lsalvarrey",
];

export const routes = [];

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

export const personJsonLd = {
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
    description: fallback.description.es,
    knowsAbout: [
        "Salesforce",
        "Lightning Web Components",
        "Apex",
        "Salesforce Flow",
        "Visualforce",
        "Agentforce",
        "DevOps",
    ],
    sameAs: SAME_AS,
};

/** Serializes JSON-LD safely for inline <script> (escapes "<"). */
export function jsonLdString(data) {
    return JSON.stringify(data).replace(/</g, "\\u003c");
}
