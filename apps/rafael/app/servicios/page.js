"use client";

import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import { useTranslations } from "@portfolio/ui";

export default function Servicios() {
    const { t } = useTranslations();

    const stats = t("services.stats") || [];
    const serviceList = t("services.list") || [];
    const processSteps = t("services.process.steps") || [];

    return (
        <div className="flex flex-col max-w-screen-md mx-auto">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold"
            >
                Saltar al contenido principal
            </a>
            <SiteHeader />
            <main id="main-content">
                {/* Hero Section */}
                <section className="px-4 md:px-6 scroll-mt-24">
                    <div className="container mx-auto py-10 md:py-14 text-center">
                        <p className="text-xs md:text-sm font-semibold uppercase tracking-wide text-accent-text mb-3">
                            {t("services.eyebrow")}
                        </p>
                        <h1 className="text-3xl md:text-5xl font-bold text-balance mb-4">
                            {t("services.title")}
                        </h1>
                        <p className="text-sm md:text-lg text-foreground/70 max-w-xl mx-auto leading-relaxed">
                            {t("services.description")}
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                            <Link
                                href="https://www.linkedin.com/in/rafaelm79"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-accent text-white rounded-md px-6 py-3 text-sm md:text-base font-medium hover:opacity-90 transition"
                            >
                                {t("contact.cta")}
                            </Link>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 border border-border text-foreground rounded-md px-6 py-3 text-sm md:text-base font-medium hover:border-accent transition"
                            >
                                {t("services.ctaSecondary")}
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="px-4 md:px-6">
                    <div className="container mx-auto py-6 md:py-8 border-y border-border">
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                                    <p className="text-xs md:text-sm text-foreground/60">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Grid Section */}
                <section className="px-4 md:px-6">
                    <div className="container mx-auto py-10 md:py-14">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-4xl font-bold">
                                {t("services.gridTitle")}
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {serviceList.map((service, index) => (
                                <div
                                    key={index}
                                    className="p-5 md:p-6 rounded-xl bg-card border border-border"
                                >
                                    <h3 className="text-base md:text-lg font-bold mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-foreground/70 leading-relaxed">
                                        {service.description}
                                    </p>
                                    {service.links && (
                                        <p className="text-sm mt-3">
                                            <span className="text-foreground/60">{service.linksLabel}: </span>
                                            {service.links.map((link, i) => (
                                                <span key={link.url}>
                                                    {i > 0 && <span className="text-foreground/30"> · </span>}
                                                    <Link
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="font-semibold text-accent-text underline decoration-accent-text/40 underline-offset-4 hover:decoration-accent-text"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                </span>
                                            ))}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="px-4 md:px-6">
                    <div className="container mx-auto py-10 md:py-14">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-4xl font-bold">
                                {t("services.process.title")}
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            {processSteps.map((step, index) => (
                                <div key={index}>
                                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold mb-3 tabular-nums">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-sm md:text-base font-bold mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-foreground/70 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="px-4 md:px-6 scroll-mt-24">
                    <div className="container mx-auto py-12 md:py-16">
                        <div className="rounded-xl border border-border bg-muted text-center px-6 py-10 md:px-12 md:py-14">
                            <h2 className="text-2xl md:text-4xl font-bold mb-3 text-balance">
                                {t("contact.title")}
                            </h2>
                            <p className="text-sm md:text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                                {t("contact.description")}
                            </p>
                            <Link
                                href="https://www.linkedin.com/in/rafaelm79"
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

            <footer className="text-center text-xs md:text-sm text-gray-500 pb-8">
                © {new Date().getFullYear()} Rafael Morales. {t("footer.rights")}
            </footer>
        </div>
    );
}
