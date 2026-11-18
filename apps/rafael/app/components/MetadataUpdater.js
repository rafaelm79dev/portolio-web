"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "../contexts/LanguageContext";

export default function MetadataUpdater() {
    const { language } = useLanguage();
    const pathname = usePathname();
    const isServices = pathname?.startsWith("/servicios");

    useEffect(() => {
        // Actualizar título
        if (isServices) {
            document.title = language === "en"
                ? "Rafael Morales | Power BI & Data Consulting"
                : "Rafael Morales | Consultoría Power BI y Datos";
        } else {
            document.title = language === "en"
                ? "Rafael Morales Portfolio | Software Developer"
                : "Portfolio de Rafael Morales | Desarrollador de Software";
        }

        // Actualizar meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement("meta");
            metaDescription.name = "description";
            document.head.appendChild(metaDescription);
        }
        if (isServices) {
            metaDescription.content = language === "en"
                ? "Power BI and data consulting services by Rafael Morales: dashboards, data warehousing, ETL, SharePoint, and Power Platform."
                : "Servicios de consultoría en Power BI y datos de Rafael Morales: dashboards, data warehousing, ETL, SharePoint y Power Platform.";
        } else {
            metaDescription.content = language === "en"
                ? "Professional portfolio of Rafael Morales, software developer (SQL, C#, Web) with experience in Microsoft Technologies."
                : "Portfolio profesional de Rafael Morales, desarrollador (SQL, C#, Web) con experiencia en Tecnologias Microsoft.";
        }

        // Actualizar lang del html
        document.documentElement.lang = language;
    }, [language, isServices]);

    return null;
}