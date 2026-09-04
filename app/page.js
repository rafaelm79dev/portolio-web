"use client";

import Link from "next/link";
import Header from "./components/Header";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";
import { useTranslations } from "./hooks/useTranslations";

export default function Home() {
    const { t, language } = useTranslations();

    const techinicalSkills = [
        "Power BI",
        "SQL Server",
        "SSRS",
        "SSIS",
        "SSAS",
        "C#",
        "ASP.NET",
        "MVC",
        "SharePoint",
        "Power Apps",
        "Power Automate",
        "MySQL",
        "Git",
        "Azure"
    ];
    // Obtener las competencias desde las traducciones
    const coreCompetencies = t("coreCompetenciesList") || [];

    // Data for work experiences
    const experiences = [
        {
            title: language === "en" ? "Freelance Consultant IT / Full Stack Developer" : "Consultor IT / Desarrollador Full Stack Freelance",
            company: language === "en" ? "Self Employee" : "Autónomo",
            period: language === "en" ? "2017 - Present" : "2017 - Presente",
            description: language === "en" ? "⁃\tDesigned and implemented data analytics dashboards in Power BI connected to SQL Server, MySQL, Web Services, and Excel, reducing report generation times and enhancing executive decision-making.\n⁃\tDeveloped SharePoint solutions (2013–Online), including intranet portals and public content platforms, which improved information accessibility and user engagement.\n⁃\tProvided consulting services to various clients, ensuring solutions aligned with business objectives and operational efficiency improvements.\n⁃\tManaged and executed data migration projects in SharePoint, integrating with third-party platforms and databases while ensuring data integrity.\n⁃\tSupported data warehouses and relational databases. Designed and executed ETL processes, optimizing performance and applying best practices that improved system reliability and response times." :
                "⁃\tDiseñé e implementé tableros de análisis de datos en Power BI conectados a SQL Server, MySQL, Web Services y Excel, lo que permitió reducir tiempos de generación de reportes y mejorar la toma de decisiones ejecutivas.\n⁃\tImplementé desarrollos de SharePoint (2013–Online), incluyendo portales de intranet y plataformas de contenido público, que aumentaron la accesibilidad a la información y el compromiso de los usuarios.\n⁃\tBrindé servicios de consultoría a diferentes clientes asegurando soluciones alineadas con objetivos de negocio y mejoras en la eficiencia operativa.\n⁃\tGestioné y ejecuté proyectos de migración de datos en SharePoint, integrando con otras plataformas y bases de datos de terceros, garantizando la integridad de la información.\n⁃\tRealicé tareas de soporte a data warehouses, bases de datos relacionales.  Realicé y diseñé procesos ETL, optimizando el rendimiento y aplicando buenas prácticas que mejoraron la confiabilidad y los tiempos de respuesta de los sistemas.",
            projects: [],
            technologies: ["C#", "Power BI", "SSIS", "SQL Server", "SharePoint"],
            image: "/company_logo/freelancer.png",
        },
        {
            title: language === "en" ? "Power BI & SharePoint Consultant" : "Consultor Power BI & SharePoint",
            company: "QBIC - Uruguay",
            period: language === "en" ? "Mar. 2026 - Present" : "Mar. 2026 - Presente",
            description: language === "en" ? "⁃\tDevelop executive reports and dashboards in Power BI, giving management real-time visibility into key metrics for faster decision-making.\n⁃\tConnect and integrate multiple data sources—including SQL Server and SharePoint—consolidating previously scattered business information into a single reliable view.\n⁃\tModel data and build DAX measures to enable deeper, more advanced analysis beyond standard reporting." :
                "⁃\tDesarrollo de reportes y tableros ejecutivos en Power BI, brindando a la gerencia visibilidad en tiempo real de métricas clave para una toma de decisiones más ágil.\n⁃\tConexión e integración de múltiples fuentes de datos —incluyendo SQL Server y SharePoint— consolidando información de negocio previamente dispersa en una única vista confiable.\n⁃\tModelado de datos y creación de medidas DAX para habilitar análisis más profundos y avanzados más allá de los reportes estándar.",
            projects: [],
            technologies: ["Power BI", "SQL Server", "SharePoint", "DAX"],
            image: "/company_logo/qbic.png",
        },
        {
            title: language === "en" ? "Power BI & SharePoint Consultant" : "Consultor Power BI & SharePoint",
            company: "Fibase - Uruguay",
            period: language === "en" ? "Jul. 2018 - Present" : "Jul. 2018 - Presente",
            description: language === "en" ? "⁃\tDevelop Power BI solutions that give leadership direct visibility into business performance for faster decision-making.\n⁃\tSupport Project Server (PWA), enabling more reliable project tracking and management.\n⁃\tSupport on-premises SharePoint portals and solutions, keeping critical internal systems running reliably.\n⁃\tAutomate processes with Power Automate and build applications with Power Apps, replacing manual workflows with faster, more consistent processes." :
                "⁃\tDesarrollo de soluciones en Power BI que brindan a la dirección visibilidad directa del desempeño del negocio para una toma de decisiones más ágil.\n⁃\tSoporte a Project Server (PWA), permitiendo un seguimiento y gestión de proyectos más confiable.\n⁃\tSoporte a portales y soluciones de SharePoint on-premises, manteniendo en funcionamiento sistemas internos críticos.\n⁃\tAutomatización de procesos con Power Automate y desarrollo de aplicaciones con Power Apps, reemplazando flujos de trabajo manuales por procesos más rápidos y consistentes.",
            projects: [],
            technologies: ["Power BI", "SharePoint", "Power Automate", "Power Apps"],
            image: "/company_logo/fibase.avif",
            logoBackground: "bg-foreground",
        },
        {
            title: language === "en" ? "SharePoint & Power Platform Consultant" : "Consultor SharePoint & Power Platform",
            company: "Arnaldo C. Castro - Uruguay",
            period: language === "en" ? "Aug. 2019 - Feb. 2026" : "Ago. 2019 - Feb. 2026",
            description: language === "en" ? "⁃\tLed the migration of SharePoint environments from on-premise to Online with zero disruption to ongoing operations.\n⁃\tAutomated business processes using Power Automate, reducing manual, repetitive work.\n⁃\tDeveloped internal management applications using Power Apps and Power Automate, replacing manual tracking for internal projects." :
                "⁃\tLideré la migración de entornos SharePoint de on-premise a Online sin interrupciones en la operación.\n⁃\tAutomatización de procesos de negocio con Power Automate, reduciendo trabajo manual y repetitivo.\n⁃\tDesarrollo de aplicaciones internas de gestión con Power Apps y Power Automate, reemplazando el seguimiento manual de proyectos internos.",
            projects: [],
            technologies: ["SharePoint", "Power Automate", "Power Apps"],
            image: "/company_logo/arnaldocastro.png",
        },
        {
            title: language === "en" ? "Backend Developer" : "Desarrollador Backend",
            company: "Ethofy - USA",
            period: "Nov. 2021 - Jun. 2025",
            description: language === "en" ? "⁃\tDeveloped APIs in .NET environments using C#, contributing to product scalability and stability.\n⁃\tMaintained and optimized Data Warehouses in SQL Server, improving access to critical data for decision-making and client-requested reports.\n⁃\tImplemented SQL Server solutions through stored procedures, functions, and views, enabling process automation and reducing operational errors.\n⁃\tDesigned and implemented ETL processes with SQL Server Integration Services (SSIS), achieving more reliable and agile data integration across systems, publishing them via Azure Data Factory.\n⁃\tCreated business reports using SQL Server Reporting Services (SSRS) and Power BI, supporting key performance indicator analysis and strategic reporting." :
                "⁃\tDesarrollé APIs en entornos .NET con C#, contribuyendo a la escalabidad y estabilidad del producto.\n⁃\tRealice mantenimiento y optimización de Data Warehouses en SQL Server, mejorando el rendimiento de consultas y la eficiencia en el procesamiento de datos.\n⁃\tDesarrollo avanzado en SQL: diseño y mantenimiento de procedimientos almacenados, funciones y vistas para soportar lógica de negocio y análisis complejos.\n⁃\tDiseño e implementación de procesos ETL con SQL Server Integration Services (SSIS), facilitando la integración eficiente de datos desde múltiples fuentes.  Administracion desde Azure Data Factory.\n⁃\tGeneración de informes empresariales mediante SQL Server Reporting Services (SSRS), brindando visualizaciones claras para la toma de decisiones.",
            projects: [],
            technologies: [
                "SQL Server",
                "Azure",
                "Azure Data Factory",
                "SSIS",
                "C#",
            ],
            image: "/company_logo/ethofy.png",
        },
        {
            title: language === "en" ? "Technical Specialist" : "Especialista Técnico",
            company: "Infocorp - Uruguay",
            period: language === "en" ? "2004 - 2018" : "2004 - 2018",
            description: language === "en" ? "⁃\tActed as technical lead across multiple projects in diverse areas and technologies, including BI implementations and SharePoint solutions.\n⁃\tParticipated in the full lifecycle of software projects ensuring scalable and functional solutions aligned with specific business needs." :
                "⁃\tActué como referente técnico en múltiples proyectos, en diversas áreas y tecnologías, incluyendo implementaciones de BI y soluciones SharePoint.\n⁃\tParticipé en todo el ciclo de vida de proyectos de software, asegurando soluciones escalables y funcionales alineadas con necesidades concretas del negocio.",
            projects: [],
            technologies: [
                "SQL Server",
                "C#",
                "SharePoint",
                "SSIS",
                "SSRS",
                "SSAS"
            ],
            image: "/company_logo/infocorp.png",
        }
    ];

    // Sample project data
    const projects = [
        {
            image: "/projects_logo/mispedidos.png",
            displayName: "Mis Pedidos",
            description: language === "en" ? "Internal web application (personal project) to manage a monthly employee purchase benefit with spending cap, approval control, and full traceability. Built in Blazor Server (.NET 10) on top of Microsoft Graph API and SharePoint Lists as backend, with custom authentication, a full admin panel, and an audit system. Developed with the assistance of Claude AI." :
                "Aplicación web interna (proyecto personal) para gestionar un beneficio de compra mensual a empleados con tope de gasto, control de aprobaciones y trazabilidad completa. Desarrollada en Blazor Server (.NET 10) sobre Microsoft Graph API y SharePoint Lists como backend, con autenticación propia, panel de administración completo y sistema de auditoría. Desarrollada con la asistencia de Claude AI.",
            technologies: ["Blazor Server", ".NET 10", "Microsoft Graph API", "SharePoint Lists", "Claude AI"]
        },
        {
            image: "/projects_logo/puntoDeOro.jpg",
            displayName: "Punto de Oro",
            description: language === "en" ? "Passionate about Padel, I'm developing a solution using AI that allows me to register and analyze individual game statistics. The goal is to help players visualize their evolution, identify performance patterns, and make informed decisions to improve their technique and strategy." :
                "Apasionado por el Pádel, estoy desarrollando una solución utilizando la IA que permita registrar y analizar estadísticas individuales de juego. El objetivo es ayudar a los jugadores a visualizar su evolución, identificar patrones de rendimiento y tomar decisiones informadas para mejorar su técnica y estrategia.",
            technologies: ["C#", "CursorAI", "MVC", "REST API", "PostgreSQL", "Docker", "Python"]
        }
        // {
        //     image: "/projects_logo/blockheadapp.png",
        //     domain: "https://taskmanager.goyocancio.es",
        // },
        // {
        //     image: "/projects_logo/blockheadapp.png",
        //     domain: "https://travelblog.goyocancio.es",
        // },
        // {
        //     image: "/projects_logo/blockheadapp.png",
        //     domain: "https://weatherapp.goyocancio.es",
        // },
        // {
        //     image: "/projects_logo/blockheadapp.png",
        //     domain: "https://portfolio.goyocancio.es",
        // },
    ];

    return (
        <div className="flex flex-col max-w-screen-md mx-auto">
            <Header />
            {/* Profile Section */}
            <section id="profile" className="px-4 md:px-6">
                <div className="container mx-auto py-10 md:py-14">
                    <p className="text-xl md:text-3xl font-bold text-balance leading-snug mb-5 md:mb-8">
                        {t("profile.tagline")}
                    </p>
                    <div className="border-l-4 border-accent bg-white/70 rounded-r-xl px-5 py-4 md:px-8 md:py-6 shadow-sm">
                        <p className="text-sm md:text-base lg:text-lg whitespace-pre-wrap text-justify leading-relaxed text-foreground/90">
                            {t("profile.description")}
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="px-4 md:px-6">
                <div className="container mx-auto py-8 md:py-3">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            {t("technicalSkills")}
                        </h2>
                    </div>
                    <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                        {techinicalSkills.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-accent text-foreground rounded-full px-4 md:px-6 py-2 text-sm md:text-base font-semibold shadow-md hover:shadow-lg transition-shadow"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Competencies Section */}
            <section id="competencies" className="px-4 md:px-6">
                <div className="container mx-auto py-8 md:py-12">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            {t("coreCompetencies")}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {Array.isArray(coreCompetencies) && coreCompetencies.map((competency, index) => (
                            <div
                                key={index}
                                className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                            >
                                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                                    {competency}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Work Experience Section*/}
            <section id="experience">
                <div className="container mx-auto pt-12 pb-2">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            {t("experience.works")}
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {experiences.map((experience, index) => (
                            <ExperienceItem
                                key={index}
                                experience={experience}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects">
                <div className="container mx-auto py-12 px-10">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            {t("personalProjects")}
                        </h2>
                    </div>

                    <p className="text-xs md:text-base mb-2 text-justify">
                        {t("personalProjectsDescription")}
                    </p>
                    <p className="text-xs md:text-base mb-8  text-justify">
                        {t("personalProjectsDetail")}
                    </p>

                    {/* Projects row */}
                    <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
                        {/* Restore the map */}
                        {projects.map((project, index) => {
                            if (!project || !project.image) {
                                return null; // Keep the check and null return
                            }
                            return (
                                <div key={index} className="">
                                    <ProjectItem project={project} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="px-4 md:px-6">
                <div className="container mx-auto py-12 md:py-16">
                    <div className="rounded-2xl bg-foreground text-background text-center px-6 py-10 md:px-12 md:py-14 shadow-xl">
                        <h2 className="text-2xl md:text-4xl font-bold mb-3 text-balance">
                            {t("contact.title")}
                        </h2>
                        <p className="text-sm md:text-lg text-background/80 max-w-xl mx-auto mb-8">
                            {t("contact.description")}
                        </p>
                        <Link
                            href="https://www.linkedin.com/in/rafaelm79"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-accent text-foreground rounded-full px-6 md:px-8 py-3 text-sm md:text-base font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                        >
                            {t("contact.cta")}
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="text-center text-xs md:text-sm text-gray-500">
                © {new Date().getFullYear()} Rafael Morales. {t("footer.rights")}
            </footer>
        </div>
    );
}
