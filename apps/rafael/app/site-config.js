// Single source of truth for Rafael's SEO data. Plain module (no "use client"),
// so both server metadata and the client MetadataUpdater can import it.

export const SITE_URL = "https://rafael.techspot365.com";

export const SAME_AS = [
    "https://www.linkedin.com/in/rafaelm79",
    "https://github.com/rafaelm79dev",
];

export const routes = [
    {
        prefix: "/servicios",
        title: {
            en: "Rafael Morales | Power BI & Data Consulting",
            es: "Rafael Morales | Consultoría Power BI y Datos",
        },
        description: {
            en: "Power BI and data consulting services by Rafael Morales: dashboards, data warehousing, ETL, SharePoint, and Power Platform.",
            es: "Servicios de consultoría en Power BI y datos de Rafael Morales: dashboards, data warehousing, ETL, SharePoint y Power Platform.",
        },
    },
];

export const fallback = {
    title: {
        en: "Rafael Morales | Power BI, SQL Server & .NET Developer",
        es: "Rafael Morales | Desarrollador Power BI, SQL Server y .NET",
    },
    description: {
        en: "Developer with 20+ years of experience in C#/.NET, SQL Server and Power BI. Independent consultant in data, reporting, ETL, SharePoint and Azure.",
        es: "Desarrollador con más de 20 años de experiencia en C#/.NET, SQL Server y Power BI. Consultor independiente en datos, reportes, ETL, SharePoint y Azure.",
    },
};

export const KNOWS_ABOUT = [
    "Power BI",
    "DAX",
    "SQL Server",
    "C#",
    ".NET",
    "Azure Data Factory",
    "SSIS",
    "SharePoint",
    "Power Platform",
    "Data Warehousing",
];

export const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Rafael Morales",
    url: SITE_URL,
    image: `${SITE_URL}/profile.png`,
    jobTitle: "Software Developer & Power BI Consultant",
    description: fallback.description.es,
    knowsAbout: KNOWS_ABOUT,
    sameAs: SAME_AS,
};

export const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/servicios#service`,
    name: "Rafael Morales | Power BI & Data Consulting",
    url: `${SITE_URL}/servicios`,
    description: routes[0].description.es,
    provider: { "@id": `${SITE_URL}/#person` },
    serviceType: [
        "Power BI dashboards and data modeling",
        "Data warehousing and ETL",
        "Custom web applications and APIs",
        "SharePoint and Power Platform",
    ],
};

/** Serializes JSON-LD safely for inline <script> (escapes "<"). */
export function jsonLdString(data) {
    return JSON.stringify(data).replace(/</g, "\\u003c");
}
