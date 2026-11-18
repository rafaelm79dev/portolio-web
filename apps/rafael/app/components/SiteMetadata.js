"use client";

import { MetadataUpdater } from "@portfolio/ui";

const routes = [
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

const fallback = {
    title: {
        en: "Rafael Morales Portfolio | Software Developer",
        es: "Portfolio de Rafael Morales | Desarrollador de Software",
    },
    description: {
        en: "Professional portfolio of Rafael Morales, software developer (SQL, C#, Web) with experience in Microsoft Technologies.",
        es: "Portfolio profesional de Rafael Morales, desarrollador (SQL, C#, Web) con experiencia en Tecnologias Microsoft.",
    },
};

/** Rafael's titles and descriptions per route and language. */
export default function SiteMetadata() {
    return <MetadataUpdater routes={routes} fallback={fallback} />;
}
