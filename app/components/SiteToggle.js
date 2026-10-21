"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "../hooks/useTranslations";

/**
 * SiteToggle component
 * Lets visitors switch between the CV page ("/") and the Services page ("/servicios")
 */
export default function SiteToggle() {
    const { t } = useTranslations();
    const pathname = usePathname();
    const isServices = pathname?.startsWith("/servicios");

    return (
        <div className="flex items-center gap-1 bg-gray-200 p-1 rounded-full">
            <Link
                href="/"
                className={`px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold transition ${!isServices
                    ? "bg-accent text-foreground"
                    : "text-gray-600 hover:text-foreground"
                    }`}
            >
                {t("nav.cv")}
            </Link>
            <Link
                href="/servicios"
                className={`px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold transition ${isServices
                    ? "bg-accent text-foreground"
                    : "text-gray-600 hover:text-foreground"
                    }`}
            >
                {t("nav.services")}
            </Link>
        </div>
    );
}
