"use client";

import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function MetadataUpdater() {
    const { language } = useLanguage();

    useEffect(() => {
        // Actualizar título
        document.title = language === "en"
            ? "Rafael Morales Portfolio | Software Developer"
            : "Portfolio de Rafael Morales | Desarrollador de Software";

        // Actualizar meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement("meta");
            metaDescription.name = "description";
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = language === "en"
            ? "Professional portfolio of Rafael Morales, software developer (SQL, C#, Web) with experience in Microsoft Technologies."
            : "Portfolio profesional de Rafael Morales, desarrollador (SQL, C#, Web) con experiencia en Tecnologias Microsoft.";

        // Actualizar lang del html
        document.documentElement.lang = language;
    }, [language]);

    return null;
}