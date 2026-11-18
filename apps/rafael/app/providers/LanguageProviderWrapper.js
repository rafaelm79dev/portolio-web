"use client";

import { LanguageProvider } from "../contexts/LanguageContext";

export default function LanguageProviderWrapper({ children }) {
    return <LanguageProvider>{children}</LanguageProvider>;
}