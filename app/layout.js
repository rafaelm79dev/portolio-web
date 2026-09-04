import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageProviderWrapper from "./providers/LanguageProviderWrapper";
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
                <LanguageProviderWrapper>
                    <MetadataUpdater />
                    {children}
                </LanguageProviderWrapper>
            </body>
        </html>
    );
}
