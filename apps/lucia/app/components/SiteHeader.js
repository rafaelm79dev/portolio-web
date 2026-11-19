"use client";

import { Header, useTranslations } from "@portfolio/ui";
import { PATHS } from "../site-config.js";

const photo = { src: "/profile.png", alt: "Lucía Salvarrey" };

const badges = [{ src: "/uruguay-flag.svg", alt: "Uruguay flag", rounded: true }];

const socialLinks = [
    {
        name: "LinkedIn",
        icon: "/social/linkedin.svg",
        url: "https://www.linkedin.com/in/luciasalvarrey",
        alt: "LinkedIn Profile",
    },
];

/** Lucía's header: her data on top of the shared Header. */
export default function SiteHeader() {
    const { t } = useTranslations();

    return (
        <Header
            name="Lucía Salvarrey"
            jobTitle={t("header.jobTitle")}
            photo={photo}
            badges={badges}
            socialLinks={socialLinks}
            languageHrefs={PATHS}
        />
    );
}
