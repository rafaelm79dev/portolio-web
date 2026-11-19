import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BrandBar, TranslationsProvider } from "@portfolio/ui";
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
        siteName: "Rafael Morales",
        locale: "es_UY",
        title: fallback.title.es,
        description: fallback.description.es,
        images: [{ url: "/profile.png", alt: "Rafael Morales" }],
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
                <BrandBar />
                <TranslationsProvider translations={{ es, en }}>
                    <SiteMetadata />
                    {children}
                </TranslationsProvider>
            </body>
        </html>
    );
}
