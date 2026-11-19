"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher.js";
import SiteToggle from "./SiteToggle.js";

/**
 * Header component for the portfolio website
 * Displays the person's name, profile picture, badges and social media links.
 *
 * Props:
 * - name, jobTitle: strings
 * - photo: { src, alt }
 * - badges: [{ src, alt, rounded? }] small images next to the name (rounded = flag style)
 * - socialLinks: [{ name, icon, url, alt }]
 * - navItems: optional [{ href, label }]; without it the page toggle is not rendered
 * - languageHrefs: optional { en, es } paths; makes the flags links (one URL per language)
 */
export default function Header({
    name,
    jobTitle,
    photo,
    badges = [],
    socialLinks = [],
    navItems,
    languageHrefs,
}) {
    return (
        <header className="sticky top-0 z-50 bg-gradient-to-b from-header-from via-header-via to-header-to border-b border-accent-yellow py-4 px-2 md:px-6 backdrop-blur-sm bg-opacity-95">
            <div className="container mx-auto flex items-center justify-between">
                {/* Left section: Profile picture and name */}
                <div className="flex items-center gap-2 md:gap-8">
                    <div className="relative w-15 h-15 md:w-30 md:h-30 rounded-full overflow-hidden border border-white shadow-xl">
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <h1 className="text-lg md:text-4xl font-bold leading-tight">
                                {name}
                            </h1>
                            {badges.map((badge) =>
                                badge.rounded ? (
                                    <div
                                        key={badge.src}
                                        className="relative w-3 h-3 md:w-5 md:h-5 rounded-full overflow-hidden border border-gray-300 inline-block flex-shrink-0"
                                    >
                                        <Image
                                            src={badge.src}
                                            alt={badge.alt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div
                                        key={badge.src}
                                        className="relative w-3 h-3 md:w-5 md:h-5 inline-block flex-shrink-0"
                                    >
                                        <Image
                                            src={badge.src}
                                            alt={badge.alt}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                )
                            )}
                        </div>
                        <p className="text-[11px] md:text-sm text-foreground/70 leading-snug max-w-md">
                            {jobTitle}
                        </p>
                    </div>
                </div>

                {/* Right section: Social media links */}
                <div className="flex items-center gap-3">
                    <LanguageSwitcher hrefs={languageHrefs} />
                    {socialLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform hover:scale-110"
                            aria-label={link.alt}
                        >
                            <Image
                                src={link.icon}
                                alt={link.alt}
                                width={24}
                                height={24}
                                className="w-6 h-6 md:w-8 md:h-8"
                            />
                        </Link>
                    ))}
                </div>
            </div>
            {navItems && (
                <div className="container mx-auto flex justify-center pt-3">
                    <SiteToggle items={navItems} />
                </div>
            )}
        </header>
    );
}
