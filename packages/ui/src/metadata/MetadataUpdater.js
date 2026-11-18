"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "../i18n/TranslationsProvider.js";
import { resolveMetadata } from "./resolveMetadata.js";

/**
 * Keeps document title, meta description and <html lang> in sync with the
 * current route and language. See resolveMetadata for the shape of `routes` and `fallback`.
 */
export default function MetadataUpdater({ routes, fallback }) {
    const { language } = useLanguage();
    const pathname = usePathname();

    useEffect(() => {
        const { title, description } = resolveMetadata({ pathname, language, routes, fallback });

        document.title = title;

        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement("meta");
            metaDescription.name = "description";
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = description;

        document.documentElement.lang = language;
    }, [language, pathname, routes, fallback]);

    return null;
}
