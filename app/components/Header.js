"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "../hooks/useTranslations";

/**
 * Header component for the portfolio website
 * Displays the developer's name, profile picture, and social media links
 */
export default function Header() {
    const { t } = useTranslations();
    // Developer information
    const developerName = "Rafael Morales";
    const jobTitle = "Software Developer";

    // Social media links
    const socialLinks = [
        {
            name: "LinkedIn",
            icon: "/social/linkedin.svg",
            url: "https://www.linkedin.com/in/rafaelm79",
            alt: "LinkedIn Profile",
        },
        {
            name: "GitHub",
            icon: "/social/github.svg",
            url: "https://github.com/rafaelm79",
            alt: "GitHub Profile",
        }
    ];

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-b from-[#fafafc] via-[#e2e2e2] to-[#cbd5e1] border-b border-accent-yellow py-4 px-2 md:px-6 backdrop-blur-sm bg-opacity-95">
            <div className="container mx-auto flex items-center justify-between">
                {/* Left section: Profile picture and name */}
                <div className="flex items-center gap-2 md:gap-8">
                    <div className="relative w-15 h-15 md:w-30 md:h-30 rounded-full overflow-hidden border border-white shadow-xl">
                        <Image
                            src="/profile.png"
                            alt="Profile picture"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-lg md:text-4xl font-bold leading-tight">
                            {developerName}
                        </h1>
                        <p className="text-sm md:text-xl text-foreground/70">
                            {jobTitle}
                        </p>
                    </div>
                </div>

                {/* Right section: Social media links */}
                <div className="flex items-center gap-3">
                    <LanguageSwitcher />
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
        </header>
    );
}
