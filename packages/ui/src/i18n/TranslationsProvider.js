"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translate } from "./translate.js";

const TranslationsContext = createContext(null);

/**
 * Holds the current language and the app's dictionaries.
 * `translations` is `{ es: {...}, en: {...} }`; the language is persisted in localStorage.
 */
export function TranslationsProvider({
    translations,
    defaultLanguage = "es",
    storageKey = "portfolio-language",
    children,
}) {
    const [language, setLanguage] = useState(defaultLanguage);

    useEffect(() => {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            setLanguage(saved);
        }
    }, [storageKey]);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem(storageKey, lang);
    };

    return (
        <TranslationsContext.Provider value={{ language, changeLanguage, translations }}>
            {children}
        </TranslationsContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(TranslationsContext);
    if (!context) {
        throw new Error("useLanguage must be used within TranslationsProvider");
    }
    return { language: context.language, changeLanguage: context.changeLanguage };
}

export function useTranslations() {
    const { language, translations } = useContext(TranslationsContext) ?? {};
    if (!translations) {
        throw new Error("useTranslations must be used within TranslationsProvider");
    }
    const t = (key) => translate(translations, language, key);
    return { t, language };
}
