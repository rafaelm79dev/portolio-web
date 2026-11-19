"use client";

import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import { ExperienceItem, useTranslations } from "@portfolio/ui";

export default function Home() {
    const { t } = useTranslations();

    const certifications = t("certifications");
    const skillCategories = t("skills");
    const experiences = t("experience.list");
    const education = t("education");

    return (
        <div className="flex flex-col max-w-screen-md mx-auto">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold"
            >
                {t("skipToContent")}
            </a>
            <SiteHeader />
            <main id="main-content">
                {/* Profile Section */}
                <section id="profile" className="px-4 md:px-6 scroll-mt-24">
                    <div className="container mx-auto pt-8 md:pt-12 pb-3 md:pb-4">
                        <p className="text-sm md:text-base lg:text-lg whitespace-pre-wrap leading-relaxed">
                            {t("profile.description")}
                        </p>
                        <p className="text-xs md:text-sm text-foreground/60 mt-3">
                            {t("profile.languages")}
                        </p>
                    </div>
                </section>

                {/* Certifications Section */}
                <section id="certifications" className="px-4 md:px-6 scroll-mt-24">
                    <div className="container mx-auto pt-8 pb-3 md:pb-4">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl md:text-4xl font-bold">
                                {t("sections.certifications")}
                            </h2>
                        </div>
                        <ul className="flex flex-wrap gap-2 md:gap-3">
                            {certifications.map((certification) => (
                                <li
                                    key={certification}
                                    className="border border-accent/40 bg-accent/10 text-foreground rounded-md px-3 py-1.5 text-xs md:text-sm font-medium font-mono"
                                >
                                    {certification}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="px-4 md:px-6 scroll-mt-24">
                    <div className="container mx-auto pt-8 pb-8 md:pb-12">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl md:text-4xl font-bold">
                                {t("sections.skills")}
                            </h2>
                        </div>
                        <div className="space-y-5 md:space-y-6">
                            {skillCategories.map((category) => (
                                <div key={category.title}>
                                    <h3 className="text-sm md:text-base font-semibold text-accent-text mb-2 md:mb-3">
                                        {category.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        {category.items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="border border-border bg-muted text-foreground rounded-md px-3 py-1.5 text-xs md:text-sm font-medium font-mono"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Work Experience Section */}
                <section id="experience" className="scroll-mt-24">
                    <div className="container mx-auto pt-12 pb-2">
                        <div className="text-center">
                            <h2 className="text-2xl md:text-4xl font-bold">
                                {t("sections.experience")}
                            </h2>
                        </div>
                        <div className="space-y-8">
                            {experiences.map((experience) => (
                                <ExperienceItem
                                    key={`${experience.company}-${experience.period}`}
                                    experience={experience}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section id="education" className="px-4 md:px-6 scroll-mt-24">
                    <div className="container mx-auto pt-12 pb-4">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl md:text-4xl font-bold">
                                {t("sections.education")}
                            </h2>
                        </div>
                        <ul className="space-y-4">
                            {education.map((item) => (
                                <li key={`${item.institution}-${item.title}`}>
                                    <p className="text-sm md:text-base font-bold text-accent-text">{item.institution}</p>
                                    <p className="text-xs md:text-base">{item.title}</p>
                                    <p className="text-xs md:text-sm text-foreground/60">{item.period}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="px-4 md:px-6 scroll-mt-24">
                    <div className="container mx-auto py-12 md:py-16">
                        <div className="rounded-xl border border-border bg-muted text-center px-6 py-10 md:px-12 md:py-14">
                            <h2 className="text-2xl md:text-4xl font-bold mb-3 text-balance">
                                {t("contact.title")}
                            </h2>
                            <p className="text-sm md:text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                                {t("contact.description")}
                            </p>
                            <Link
                                href="https://www.linkedin.com/in/luciasalvarrey"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-accent text-white rounded-md px-6 md:px-8 py-3 text-sm md:text-base font-medium hover:opacity-90 transition"
                            >
                                {t("contact.cta")}
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="text-center text-xs md:text-sm text-gray-500">
                © {new Date().getFullYear()} Lucía Salvarrey. {t("footer.rights")}
            </footer>
        </div>
    );
}
