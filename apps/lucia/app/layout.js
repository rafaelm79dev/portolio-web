import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TranslationsProvider } from "@portfolio/ui";
import es from "./translations/es.js";
import en from "./translations/en.js";
import SiteMetadata from "./components/SiteMetadata";

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
    title: "Lucía Salvarrey | Salesforce Technical Architect",
    description:
        "Professional portfolio of Lucía Salvarrey, Salesforce Technical Architect, Developer, Consultant and DevOps.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body
                className={`${inter.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
            >
                <TranslationsProvider translations={{ es, en }} storageKey="lucia-language">
                    <SiteMetadata />
                    {children}
                </TranslationsProvider>
            </body>
        </html>
    );
}
