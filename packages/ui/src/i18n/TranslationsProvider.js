"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translate } from "./translate.js";

const TranslationsContext = createContext(null);

/**
 * Holds the current language and the app's dictionaries.
 * `translations` is `{ es: {...}, en: {...} }`.
 *
 * - Without `language` (client-side switching): the language is state, persisted
 *   in localStorage under `storageKey`. Only saved values that exist in
 *   `translations` are accepted.
 * - With `language` (one URL per language): the route decides the language, so
 *   nothing is read from or written to localStorage and `changeLanguage` is a no-op.
 */
export function TranslationsProvider({
    translations,
    language: fixedLanguage,
    defaultLanguage = "es",
    storageKey = "portfolio-language",
    children,
}) {
    const [language, setLanguage] = useState(defaultLanguage);

    useEffect(() => {
        if (fixedLanguage) return;
        const saved = localStorage.getItem(storageKey);
        if (saved && translations[saved]) {
            setLanguage(saved);
        }
    }, [fixedLanguage, storageKey, translations]);

    const changeLanguage = (lang) => {
        if (fixedLanguage) return;
        setLanguage(lang);
        localStorage.setItem(storageKey, lang);
    };

    return (
        <TranslationsContext.Provider
            value={{ language: fixedLanguage ?? language, changeLanguage, translations }}
        >
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
