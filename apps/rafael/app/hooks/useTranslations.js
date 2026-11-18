"use client";

import { useLanguage } from "../contexts/LanguageContext";
import esTranslations from "../translations/es.js";
import enTranslations from "../translations/en.js";

const translations = {
    es: esTranslations,
    en: enTranslations,
};

export function useTranslations() {
    const { language } = useLanguage();

    const t = (key) => {
        const keys = key.split(".");
        let value = translations[language];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    };

    return { t, language };
}