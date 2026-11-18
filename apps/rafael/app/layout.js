import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TranslationsProvider } from "@portfolio/ui";
import es from "./translations/es.js";
import en from "./translations/en.js";
import MetadataUpdater from "./components/MetadataUpdater";

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
    title: "Rafael Morales Portfolio | Software Developer",
    description:
        "Professional portfolio of Rafael Morales, software developer (SQL, C#, Web) with experience in Microsoft Technologies.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body
                className={`${inter.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
            >
                <TranslationsProvider translations={{ es, en }}>
                    <MetadataUpdater />
                    {children}
                </TranslationsProvider>
            </body>
        </html>
    );
}
