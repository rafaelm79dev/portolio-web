"use client";

import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

/*
 * PÁGINA DE DEMOSTRACIÓN (descartable): alternativas del header.
 * Sigue el tema del sistema: cambia entre claro y oscuro en Windows para ver ambos.
 */

const JOB = "Salesforce Technical Architect & Senior Developer";

function Round({ src, alt, size, ring }) {
    return (
        <div className={`relative ${size} rounded-full overflow-hidden ${ring} shrink-0`}>
            <Image src={src} alt={alt} fill className="object-cover" />
        </div>
    );
}

function HeaderContent({ nameClass, jobClass, photoRing, flagRing, whiteIcon }) {
    return (
        <div className="mx-auto max-w-screen-md px-4 py-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 md:gap-6">
                <Round src="/profile.png" alt="Lucía Salvarrey" size="w-16 h-16 md:w-24 md:h-24" ring={photoRing} />
                <div>
                    <div className="flex items-center gap-2">
                        <h2 className={`text-lg md:text-3xl font-semibold tracking-tight ${nameClass}`}>Lucía Salvarrey</h2>
                        <Round src="/uruguay-flag.svg" alt="Uruguay" size="w-4 h-4 md:w-5 md:h-5" ring="border border-gray-300" />
                    </div>
                    <p className={`text-[11px] md:text-sm ${jobClass}`}>{JOB}</p>
                </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
                <Round src="/usa-flag.svg" alt="English" size="w-7 h-7 md:w-9 md:h-9" ring={flagRing} />
                <Round src="/spain-flag.svg" alt="Español" size="w-7 h-7 md:w-9 md:h-9" ring={flagRing} />
                <Link href="https://www.linkedin.com/in/luciasalvarrey" aria-label="LinkedIn">
                    <Image
                        src="/social/linkedin.svg"
                        alt="LinkedIn"
                        width={32}
                        height={32}
                        className={`w-6 h-6 md:w-8 md:h-8 ${whiteIcon ? "brightness-0 invert" : ""}`}
                    />
                </Link>
            </div>
        </div>
    );
}

function Option({ letter, title, description, children }) {
    return (
        <section className="mb-10">
            <div className="mx-auto max-w-screen-md px-4 mb-2">
                <h1 className="text-base md:text-lg font-semibold text-accent-text">
                    {letter}. {title}
                </h1>
                <p className="text-xs md:text-sm text-muted-foreground">{description}</p>
            </div>
            {children}
        </section>
    );
}

export default function HeaderDemo() {
    return (
        <div className="py-6">
            <Option letter="Actual" title="Tarjeta gris" description="Lo que tiene hoy el sitio, como referencia.">
                <div className="mx-auto max-w-screen-md">
                    <SiteHeader />
                </div>
            </Option>

            <Option
                letter="A"
                title="Plano, como APITool"
                description="Sin fondo propio: se funde con la página y solo lleva una línea fina debajo. Es lo más sobrio y deja el protagonismo al contenido."
            >
                <div className="border-b border-border">
                    <HeaderContent
                        nameClass="text-foreground"
                        jobClass="text-accent-text"
                        photoRing="border border-border"
                        flagRing="border border-border"
                    />
                </div>
            </Option>

            <Option
                letter="B"
                title="Tinte violeta suave"
                description="Fondo violeta muy claro con una línea violeta debajo. Da identidad de marca sin cargar la pantalla."
            >
                <div className="bg-accent/10 dark:bg-accent/25 border-b-2 border-accent">
                    <HeaderContent
                        nameClass="text-foreground"
                        jobClass="text-accent-text"
                        photoRing="border-2 border-accent"
                        flagRing="border border-accent/50"
                    />
                </div>
            </Option>

            <Option
                letter="C"
                title="Violeta sólido"
                description="Barra violeta de la marca con texto blanco. Es la más llamativa y se parece más a la franja violeta de APITool."
            >
                <div className="bg-accent text-white">
                    <HeaderContent
                        nameClass="text-white"
                        jobClass="text-[#ecd9f7]"
                        photoRing="border-2 border-white"
                        flagRing="border-2 border-white/70"
                        whiteIcon
                    />
                </div>
            </Option>
        </div>
    );
}
