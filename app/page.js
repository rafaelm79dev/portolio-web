"use client";

import Header from "./components/Header";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";
import { useTranslations } from "./hooks/useTranslations";

export default function Home() {
    const { t, language } = useTranslations();

    const techinicalSkills = [
        "SQL Server",
        "Power BI",
        "SSIS / SSRS",
        "Azure",
        "Python",
        "C#",
        "SharePoint",
        "Power Apps",
        "Power Automate",
        "MySQL",
        "Git"
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
            title: language === "en" ? "Backend Developer" : "Desarrollador Backend",
            company: "Ethofy - USA",
            period: "Nov. 2025 - Jun. 2025",
            description: language === "en" ? "⁃\tDesigned and implemented data analytics dashboards in Power BI connected to SQL Server, MySQL, Web Services, and Excel, reducing report generation times and enhancing executive decision-making.\n⁃\tDeveloped SharePoint solutions (2013–Online), including intranet portals and public content platforms, which improved information accessibility and user engagement.\n⁃\tProvided consulting services to various clients, ensuring solutions aligned with business objectives and operational efficiency improvements.\n⁃\tManaged and executed data migration projects in SharePoint, integrating with third-party platforms and databases while ensuring data integrity.\n⁃\tSupported data warehouses and relational databases. Designed and executed ETL processes, optimizing performance and applying best practices that improved system reliability and response times." :
                "\t⁃Desarrolle projectos en .NET utilizando C#, contribuyendo a la escalabidad y estabilidad del producto.\n\t⁃Mantuve y optimicé el Data Warehouses en SQL Server, mejorando la eficiencia en el acceso a datos críticos para la toma de decisiones e informes solicitados por Cliente.\n\t⁃Implementé desarrollos en SQL Server mediante procedimientos almacenados, funciones y vistas, lo que permitió automatizar procesos y reducir errores operativos.\n\t⁃Diseñé e implementé procesos ETL con SQL Server Integration Services (SSIS), logrando una integración de datos más confiable y ágil entre sistemas publicandolos en Azure Data Factory.\n\t⁃Elaboré informes con SQL Server Reporting Services (SSRS) y Power BI, facilitando el análisis de indicadores clave y la generación de reportes estratégicos.",
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
            title: language === "en" ? "Backend Developer" : "Desarrollador Backend",
            company: "Finanzas365 - Uruguay",
            period: language === "en" ? "Jan. 2018 - Dec. 2024" : "Ene. 2018 - Dic. 2024",
            description: language === "en" ? "⁃\tCo-founded and led the technical development of an analytics and control platform for SMEs, driving operational efficiency and strategic management.\n⁃\tOversaw platform architecture, infrastructure decisions, and continuous integration of user feedback, ensuring scalability and ongoing improvement.\n⁃\tCollaborated closely with clients to design customized dashboards and reports that strengthened financial decision-making and management control." :
                "⁃\tCofundé y lideré el desarrollo técnico de una plataforma de análisis y control orientada a PYMEs, impulsando la eficiencia operativa y la gestión estratégica.\n⁃\tSupervisé la arquitectura de la plataforma, las decisiones de infraestructura y la integración continua del feedback de usuarios, garantizando escalabilidad y mejora constante.\n⁃\tColaboré estrechamente con clientes para diseñar tableros e informes personalizados que fortalecieron la toma de decisiones financieras y el control de gestión.",
            projects: [],
            technologies: [
                "MySQL",
                "C#",
                "Power BI"
            ],
            image: "/company_logo/finanzas365.png",
        }
        ,
        {
            title: language === "en" ? "Technical Specialist" : "Especialista Técnico",
            company: "Infocorp - Uruguay",
            period: language === "en" ? "May. 2004 - Apr. 2017" : "May. 2004 - Abr. 2017",
            description: language === "en" ? "⁃\tActué como referente técnico en diferentes proyectos. Proyectos en diferentes areas y tecnologias.  Implementaciones de Poryectos BI y soluciones SharePoint.\n⁃\tParticipé en todo el ciclo de vida de proyectos de software, desde la arquitectura y el desarrollo hasta la entrega al cliente, asegurando soluciones escalables y funcionales que respondieran a necesidades concretas." :
                "⁃\tActed as technical lead across multiple projects in diverse areas and technologies, including BI implementations and SharePoint solutions.\n⁃\t- Participated in the full lifecycle of software projects—from architecture and development to client delivery—ensuring scalable and functional solutions aligned with specific business needs.",
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
                <div className="container mx-auto py-8 md:py-3">
                    <p className="text-sm md:text-base lg:text-lg whitespace-pre-wrap text-justify leading-relaxed">
                        {t("profile.description")}
                    </p>
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
                                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full px-4 md:px-6 py-2 text-sm md:text-base font-semibold shadow-md hover:shadow-lg transition-shadow"
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
                <div className="container mx-auto py-12">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Experiencia Laboral
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

            <footer className="text-center text-xs md:text-sm text-gray-500">
                © {new Date().getFullYear()} Rafael Morales. Todos los derechos
                reservados.
            </footer>
        </div>
    );
}
