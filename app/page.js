"use client";

import Link from "next/link";
import Header from "./components/Header";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";
import { useTranslations } from "./hooks/useTranslations";

export default function Home() {
    const { t, language } = useTranslations();

    const skillCategories = [
        {
            title: language === "en" ? "Business Intelligence" : "Business Intelligence",
            skills: ["Power BI", "DAX", "Power Query", "SQL Server", "T-SQL", "SSIS", "SSRS", "SSAS", "Azure Data Factory", "Power BI Service", "Dataflows", "On-premises Data Gateway", "Row-Level Security (RLS)"],
        },
        {
            title: language === "en" ? "Data" : "Datos",
            skills: ["Data Modeling (Star Schema)", "Data Warehousing", "ETL", "Stored Procedures", "Azure SQL Database", "MySQL", "Oracle Fusion"],
        },
        {
            title: language === "en" ? "Development" : "Desarrollo",
            skills: ["C#", ".NET", "ASP.NET", "MVC", "REST API", "Python"],
        },
        {
            title: "SharePoint & Power Platform",
            skills: ["SharePoint (On-premises & Online)", "SPFx", "React", "Power Apps", "Power Automate", "Project Server"],
        },
        {
            title: language === "en" ? "Tools & Cloud" : "Herramientas & Cloud",
            skills: ["Git", "Azure"],
        },
        {
            title: language === "en" ? "Methodologies" : "Metodologías",
            skills: ["Agile / Scrum"],
        },
    ];

    // Data for work experiences
    const experiences = [
        {
            title: language === "en" ? "Power BI Developer" : "Desarrollador Power BI",
            company: "QBIC - Uruguay",
            period: language === "en" ? "Mar. 2026 - Present" : "Mar. 2026 - Presente",
            description: language === "en" ? [
                "Build Power BI reports for a client: operations, purchasing, and planning.",
                "Integrate data from SQL Server and SharePoint into one star-schema data model.",
                "Create DAX measures for production and purchasing KPIs for management.",
            ] : [
                "Desarrollo reportes de Power BI para un cliente: operaciones, compras y planificación.",
                "Integro datos de SQL Server y SharePoint en un modelo de datos en esquema estrella.",
                "Creo medidas DAX para KPIs de producción y compras para la gerencia.",
            ],
            projects: [],
            technologies: ["Power BI", "DAX", "SQL Server", "SharePoint"],
            image: "/company_logo/qbic.png",
        },
        {
            title: language === "en" ? "BI & SharePoint Consultant" : "Consultor BI & SharePoint",
            company: "Fibase - Uruguay",
            period: language === "en" ? "Jul. 2018 - Present" : "Jul. 2018 - Presente",
            description: language === "en" ? [
                "Maintain and improve Power BI reports for purchasing, sales, and costs.",
                "Maintain a MySQL data warehouse that is the data source for the Power BI reports, and develop integrations with the client's ERP/billing system for costs and stock.",
                "Built Power Apps forms and Power Automate flows for vehicle tracking, and Power BI reports to analyze the results.",
                "Developed and supported an on-premises SharePoint portal for document management and company news.",
                "Support a client with Project Server (PWA) and SharePoint customizations.",
            ] : [
                "Mantengo y mejoro reportes de Power BI para compras, ventas y costos.",
                "Mantengo un data warehouse en MySQL que es la fuente de datos de los reportes de Power BI, y desarrollo integraciones con el sistema ERP/facturación del cliente para costos y stock.",
                "Desarrollé formularios en Power Apps y flujos en Power Automate para seguimiento de vehículos, y reportes de Power BI para analizar los resultados.",
                "Desarrollé y di soporte a un portal de SharePoint on-premises para gestión documental y noticias de la empresa.",
                "Doy soporte a un cliente con Project Server (PWA) y personalizaciones de SharePoint.",
            ],
            projects: [],
            technologies: ["Power BI", "MySQL", "SharePoint", "Power Apps", "Power Automate"],
            image: "/company_logo/fibase.avif",
            logoBackground: "bg-foreground",
        },
        {
            title: language === "en" ? "SharePoint & Power Platform Developer" : "Desarrollador SharePoint & Power Platform",
            company: "Arnaldo C. Castro - Uruguay",
            period: language === "en" ? "Aug. 2019 - Feb. 2026" : "Ago. 2019 - Feb. 2026",
            description: language === "en" ? [
                "Supported on-premises SharePoint environments.",
                "Developed custom components for the company's SharePoint extranet.",
                "Built a SharePoint Online knowledge base with managed metadata and SharePoint Search, so users can find documents easily.",
                "Migrated and exported SharePoint on-premises content to files.",
                "Built internal apps with Power Apps and automated processes with Power Automate.",
            ] : [
                "Di soporte a entornos SharePoint on-premises.",
                "Desarrollé componentes personalizados para la extranet de SharePoint de la empresa.",
                "Construí una base de conocimiento en SharePoint Online con metadatos administrados y SharePoint Search, para que los usuarios encuentren documentos fácilmente.",
                "Migré y exporté contenido de SharePoint on-premises a archivos.",
                "Desarrollé aplicaciones internas con Power Apps y automaticé procesos con Power Automate.",
            ],
            projects: [],
            technologies: ["SharePoint", "Power Apps", "Power Automate"],
            image: "/company_logo/arnaldocastro.png",
        },
        {
            title: language === "en" ? "Backend Developer" : "Desarrollador Backend",
            company: "Ethofy - USA",
            period: "Nov. 2021 - Jun. 2025",
            description: language === "en" ? [
                "Maintained a data warehouse in Azure SQL Database for client reports.",
                "Built and maintained ETL processes with SSIS packages in Azure Data Factory.",
                "Developed stored procedures, functions, and views in T-SQL for the reports.",
                "Created client reports with SSRS and Power BI.",
                "Developed APIs in C#/.NET to connect the web application with the data warehouse, using stored procedures and views.",
            ] : [
                "Mantuve un data warehouse en Azure SQL Database para los reportes del cliente.",
                "Desarrollé y mantuve procesos ETL con paquetes SSIS en Azure Data Factory.",
                "Desarrollé procedimientos almacenados, funciones y vistas en T-SQL para los reportes.",
                "Creé reportes para el cliente con SSRS y Power BI.",
                "Desarrollé APIs en C#/.NET para conectar la aplicación web con el data warehouse, usando procedimientos almacenados y vistas.",
            ],
            projects: [],
            technologies: ["Azure SQL Database", "SSIS", "Azure Data Factory", "T-SQL", "C#"],
            image: "/company_logo/ethofy.png",
        },
        {
            title: language === "en" ? "Data & BI Consultant" : "Consultor de Datos & BI",
            company: language === "en" ? "Other clients - Uruguay & International" : "Otros clientes - Uruguay e Internacional",
            period: language === "en" ? "2017 - Present" : "2017 - Presente",
            description: language === "en" ? [
                "Supported a SQL Server data warehouse in Azure, with ETL processes in SSIS and Azure Data Factory.",
                "Developed Python scripts to read data from Oracle Fusion and load it into a local SQL Server database for Power BI reports (international client, work in English).",
                "Supported on-premises SharePoint environments.",
            ] : [
                "Di soporte a un data warehouse en SQL Server en Azure, con procesos ETL en SSIS y Azure Data Factory.",
                "Desarrollé scripts en Python para leer datos de Oracle Fusion y cargarlos en una base SQL Server local para reportes de Power BI (cliente internacional, trabajo en inglés).",
                "Di soporte a entornos SharePoint on-premises.",
            ],
            projects: [],
            technologies: ["SQL Server", "SSIS", "Azure Data Factory", "Python", "Oracle Fusion"],
            image: "/company_logo/freelancer.png",
        },
        {
            title: language === "en" ? "Technical Specialist" : "Especialista Técnico",
            company: "Infocorp - Uruguay",
            period: language === "en" ? "May. 2004 - May. 2018" : "May. 2004 - May. 2018",
            description: language === "en" ? [
                "Started in application support, then moved to development and technical lead roles.",
                "Built BI solutions for different clients, with ETL processes in SSIS and reports in SSRS.",
                "Developed SharePoint portals and intranets, and applications in C#/.NET.",
                "Worked in all phases of software projects: requirements gathering, analysis, development, testing, and deployment to production.",
                "In my last years, worked as technical lead in several projects (teams of 2 or 3 people), making the technical decisions and solving the problems in each project.",
            ] : [
                "Comencé en soporte de aplicaciones, y luego pasé a roles de desarrollo y liderazgo técnico.",
                "Desarrollé soluciones de BI para distintos clientes, con procesos ETL en SSIS y reportes en SSRS.",
                "Desarrollé portales e intranets en SharePoint, y aplicaciones en C#/.NET.",
                "Participé en todas las fases de los proyectos de software: relevamiento de requerimientos, análisis, desarrollo, testing y despliegue a producción.",
                "En mis últimos años, trabajé como líder técnico en varios proyectos (equipos de 2 o 3 personas), tomando las decisiones técnicas y resolviendo los problemas de cada proyecto.",
            ],
            projects: [],
            technologies: ["SQL Server", "C#", "SharePoint", "SSIS", "SSRS", "SSAS"],
            image: "/company_logo/infocorp.png",
        }
    ];

    // Sample project data
    const projects = [
        {
            image: "/projects_logo/mispedidos.png",
            displayName: "Mis Pedidos",
            description: language === "en" ? "Internal web app (personal project) to manage a monthly employee purchase benefit, with a spending limit, approval control, and full traceability. Built with Blazor Server (.NET 10), using Microsoft Graph API and SharePoint Lists as the backend, with custom authentication, a full admin panel, and an audit system. Built with the help of Claude AI." :
                "Aplicación web interna (proyecto personal) para gestionar un beneficio de compra mensual a empleados con tope de gasto, control de aprobaciones y trazabilidad completa. Desarrollada en Blazor Server (.NET 10) sobre Microsoft Graph API y SharePoint Lists como backend, con autenticación propia, panel de administración completo y sistema de auditoría. Desarrollada con la asistencia de Claude AI.",
            technologies: ["Blazor Server", ".NET 10", "Microsoft Graph API", "SharePoint Lists", "Claude AI"]
        },
        {
            image: "/projects_logo/puntoDeOro.jpg",
            displayName: "Punto de Oro",
            description: language === "en" ? "I love playing Padel, so I'm building a solution with AI that lets me record and analyze game statistics. The goal is to help players see their progress, find patterns in their performance, and make better decisions to improve their technique and strategy." :
                "Apasionado por el Pádel, estoy desarrollando una solución utilizando la IA que permita registrar y analizar estadísticas individuales de juego. El objetivo es ayudar a los jugadores a visualizar su evolución, identificar patrones de rendimiento y tomar decisiones informadas para mejorar su técnica y estrategia.",
            technologies: ["C#", "CursorAI", "MVC", "REST API", "PostgreSQL", "Docker", "Python"]
        }
    ];

    return (
        <div className="flex flex-col max-w-screen-md mx-auto">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-accent focus:text-foreground focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold"
            >
                {language === "en" ? "Skip to main content" : "Saltar al contenido principal"}
            </a>
            <Header />
            <main id="main-content">
            {/* Profile Section */}
            <section id="profile" className="px-4 md:px-6 scroll-mt-24">
                <div className="container mx-auto py-8 md:py-12">
                    <p className="text-sm md:text-base lg:text-lg whitespace-pre-wrap leading-relaxed">
                        {t("profile.description")}
                    </p>
                    <p className="text-xs md:text-sm text-foreground/60 mt-3">
                        {t("profile.languages")}
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="px-4 md:px-6 scroll-mt-24">
                <div className="container mx-auto py-8 md:py-12">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            {t("technicalSkills")}
                        </h2>
                    </div>
                    <div className="space-y-5 md:space-y-6">
                        {skillCategories.map((category, catIndex) => (
                            <div key={catIndex}>
                                <h3 className="text-sm md:text-base font-semibold text-foreground mb-2 md:mb-3">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    {category.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="bg-accent text-foreground rounded-full px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
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

            {/* Work Experience Section*/}
            <section id="experience" className="scroll-mt-24">
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
            <section id="projects" className="scroll-mt-24">
                <div className="container mx-auto py-12 px-10">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            {t("personalProjects")}
                        </h2>
                    </div>

                    <p className="text-xs md:text-base mb-2">
                        {t("personalProjectsDescription")}
                    </p>
                    <p className="text-xs md:text-base mb-8">
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
            <section id="contact" className="px-4 md:px-6 scroll-mt-24">
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
                            className="inline-flex items-center gap-2 bg-accent text-foreground rounded-full px-6 md:px-8 py-3 text-sm md:text-base font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
                        >
                            {t("contact.cta")}
                        </Link>
                    </div>
                </div>
            </section>
            </main>

            <footer className="text-center text-xs md:text-sm text-gray-500">
                © {new Date().getFullYear()} Rafael Morales. {t("footer.rights")}
            </footer>
        </div>
    );
}
