import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TranslationsProvider } from "@portfolio/ui";
import es from "./translations/es.js";
import en from "./translations/en.js";
import SiteMetadata from "./components/SiteMetadata";
import { SITE_URL, fallback, personJsonLd, jsonLdString } from "./site-config.js";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: fallback.title.es,
    description: fallback.description.es,
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        url: SITE_URL,
        siteName: "Lucía Salvarrey",
        locale: "es_UY",
        title: fallback.title.es,
        description: fallback.description.es,
        images: [{ url: "/profile.png", alt: "Lucía Salvarrey" }],
    },
    twitter: {
        card: "summary",
        title: fallback.title.es,
        description: fallback.description.es,
        images: ["/profile.png"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body
                className={`${inter.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: jsonLdString(personJsonLd) }}
                />
                <div aria-hidden="true" className="h-1 bg-linear-to-r from-brand-blue to-accent" />
                <TranslationsProvider translations={{ es, en }} storageKey="lucia-language">
                    <SiteMetadata />
                    {children}
                </TranslationsProvider>
            </body>
        </html>
    );
}
