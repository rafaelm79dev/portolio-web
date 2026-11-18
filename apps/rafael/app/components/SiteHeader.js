"use client";

import { Header, useTranslations } from "@portfolio/ui";

const photo = { src: "/profile.png", alt: "Profile picture" };

const badges = [
    { src: "/uruguay-flag.svg", alt: "Uruguay flag", rounded: true },
    { src: "/mate.png", alt: "Mate" },
];

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
        url: "https://github.com/rafaelm79dev",
        alt: "GitHub Profile",
    },
];

/** Rafael's header: his data on top of the shared Header. */
export default function SiteHeader() {
    const { t } = useTranslations();

    return (
        <Header
            name="Rafael Morales"
            jobTitle={t("header.jobTitle")}
            photo={photo}
            badges={badges}
            socialLinks={socialLinks}
            navItems={[
                { href: "/", label: t("nav.cv") },
                { href: "/servicios", label: t("nav.services") },
            ]}
        />
    );
}
