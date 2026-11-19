"use client";

import { MetadataUpdater } from "@portfolio/ui";

const routes = [];

const fallback = {
    title: {
        en: "Lucía Salvarrey | Salesforce Technical Architect",
        es: "Lucía Salvarrey | Arquitecta Técnica Salesforce",
    },
    description: {
        en: "Professional portfolio of Lucía Salvarrey, Salesforce Technical Architect, Developer, Consultant and DevOps.",
        es: "Portfolio profesional de Lucía Salvarrey, Arquitecta Técnica, Desarrolladora, Consultora y DevOps en Salesforce.",
    },
};

/** Lucía's titles and descriptions per language. */
export default function SiteMetadata() {
    return <MetadataUpdater routes={routes} fallback={fallback} />;
}
