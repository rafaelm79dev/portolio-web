"use client";

import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSwitcher() {
    const { language, changeLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => changeLanguage("en")}
                aria-label="English"
                aria-pressed={language === "en"}
                className={`relative w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden border-2 transition-all ${language === "en"
                    ? "border-accent scale-105"
                    : "border-gray-300 opacity-60 hover:opacity-100"
                    }`}
            >
                <Image
                    src="/usa-flag.svg"
                    alt="English"
                    fill
                    className="object-cover"
                />
            </button>
            <button
                onClick={() => changeLanguage("es")}
                aria-label="Español"
                aria-pressed={language === "es"}
                className={`relative w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden border-2 transition-all ${language === "es"
                    ? "border-accent scale-105"
                    : "border-gray-300 opacity-60 hover:opacity-100"
                    }`}
            >
                <Image
                    src="/spain-flag.svg"
                    alt="Español"
                    fill
                    className="object-cover"
                />
            </button>
        </div>
    );
}
