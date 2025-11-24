"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSwitcher() {
    const { language, changeLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${language === "en"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
            >
                EN
            </button>
            <button
                onClick={() => changeLanguage("es")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${language === "es"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
            >
                ES
            </button>
        </div>
    );
}