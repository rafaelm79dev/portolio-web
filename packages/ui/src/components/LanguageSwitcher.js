"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../i18n/TranslationsProvider.js";

const LANGUAGES = [
    { code: "en", label: "English", flag: "/usa-flag.svg" },
    { code: "es", label: "Español", flag: "/spain-flag.svg" },
];

const base = "relative w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden border-2 transition";
const active = "border-accent scale-105";
const inactive = "border-gray-300 opacity-60 hover:opacity-100";

/**
 * Language flags.
 * - Without `hrefs`: buttons that switch the language on the client.
 * - With `hrefs` ({ en: "/", es: "/es" }): links to the page of each language,
 *   so every language has its own URL that search engines can index.
 */
export default function LanguageSwitcher({ hrefs }) {
    const { language, changeLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2">
            {LANGUAGES.map(({ code, label, flag }) => {
                const className = `${base} ${language === code ? active : inactive}`;
                const image = <Image src={flag} alt={label} fill className="object-cover" />;
                return hrefs ? (
                    <Link
                        key={code}
                        href={hrefs[code]}
                        hrefLang={code}
                        lang={code}
                        aria-label={label}
                        aria-current={language === code ? "page" : undefined}
                        className={className}
                    >
                        {image}
                    </Link>
                ) : (
                    <button
                        key={code}
                        onClick={() => changeLanguage(code)}
                        aria-label={label}
                        aria-pressed={language === code}
                        className={className}
                    >
                        {image}
                    </button>
                );
            })}
        </div>
    );
}
