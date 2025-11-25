import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageProviderWrapper from "./providers/LanguageProviderWrapper";

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
    title: "Portfolio de Rafael Morales | Desarrollador de Software",
    description:
        "Portfolio profesional de Rafael Morales, desarrollador (SQL, C#, Web) con experiencia en Tecnologias Microsoft.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body
                className={`${inter.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-[#fafafc] via-[#e2e2e2] to-[#cbd5e1]`}
            >
                <LanguageProviderWrapper>
                    {children}
                </LanguageProviderWrapper>
            </body>
        </html>
    );
}
