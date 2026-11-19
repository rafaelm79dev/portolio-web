import { Inter, Geist_Mono } from "next/font/google";
import "../globals.css";
import { TranslationsProvider } from "@portfolio/ui";
import es from "../translations/es.js";
import en from "../translations/en.js";
import { buildPersonJsonLd, jsonLdString } from "../site-config.js";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const dictionaries = { es, en };

/** <html>/<body> shell of one language version. Each language has its own root layout. */
export default function LocaleRoot({ lang, children }) {
    return (
        <html lang={lang}>
            <body
                className={`${inter.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: jsonLdString(buildPersonJsonLd(lang)) }}
                />
                <div aria-hidden="true" className="h-1 bg-linear-to-r from-brand-blue to-accent" />
                <TranslationsProvider translations={{ [lang]: dictionaries[lang] }} language={lang}>
                    {children}
                </TranslationsProvider>
            </body>
        </html>
    );
}
