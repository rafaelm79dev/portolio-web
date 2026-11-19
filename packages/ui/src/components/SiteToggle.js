"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * SiteToggle component
 * Pill switch between the site's main pages.
 * `items` is `[{ href, label }]`. The active item is the one whose href (other than "/")
 * prefixes the current path; if none matches, the item with href "/" is active.
 */
export default function SiteToggle({ items }) {
    const pathname = usePathname();
    const nested = items.find(
        (item) => item.href !== "/" && pathname?.startsWith(item.href)
    );
    const activeHref = nested ? nested.href : "/";

    return (
        <div className="flex items-center gap-1 bg-gray-200 p-1 rounded-full">
            {items.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold transition ${item.href === activeHref
                        ? "bg-accent text-foreground"
                        : "text-gray-600 hover:text-foreground"
                        }`}
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
}
