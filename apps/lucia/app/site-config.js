// Single source of truth for Lucía's SEO data. Plain module (no "use client"),
// so both server metadata and the client MetadataUpdater can import it.

export const SITE_URL = "https://lucia.techspot365.com";

export const SAME_AS = ["https://www.linkedin.com/in/luciasalvarrey"];

export const routes = [];

export const fallback = {
    title: {
        en: "Lucía Salvarrey | Salesforce Technical Architect",
        es: "Lucía Salvarrey | Arquitecta Técnica Salesforce",
    },
    description: {
        en: "Professional portfolio of Lucía Salvarrey, Salesforce Technical Architect, Developer, Consultant and DevOps.",
        es: "Portfolio profesional de Lucía Salvarrey, Arquitecta Técnica, Desarrolladora, Consultora y DevOps en Salesforce.",
    },
};

export const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Lucía Salvarrey",
    url: SITE_URL,
    jobTitle: "Salesforce Technical Architect",
    description: fallback.description.es,
    knowsAbout: [
        "Salesforce",
        "Lightning Web Components",
        "Apex",
        "Salesforce Flow",
        "Visualforce",
        "DevOps",
    ],
    sameAs: SAME_AS,
};

/** Serializes JSON-LD safely for inline <script> (escapes "<"). */
export function jsonLdString(data) {
    return JSON.stringify(data).replace(/</g, "\\u003c");
}
