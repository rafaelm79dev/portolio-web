"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * ProjectItem component
 * Displays a project image, optional domain/display name, and optional description.
 */
export default function ProjectItem({ project }) {
    const { image, domain, displayName, description, technologies, onlineLabel } = project;

    // Extract just the domain name part from the full URL for display (if domain exists)
    const finalDisplayName = displayName || (domain ? domain.replace(/^https?:\/\//, "").split("/")[0] : null);

    // Si hay domain, envolver en Link, si no, solo mostrar la imagen
    const imageContent = (
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-white mb-2 border border-gray-200">
            <Image
                src={image}
                alt={finalDisplayName || "Project image"}
                fill
                className="object-contain p-2"
            />
        </div>
    );

    return (
        <div className="flex flex-col items-center text-center max-w-md">
            {/* Wrap Image container with Link only if domain exists */}
            {domain ? (
                <Link
                    href={domain}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition hover:-translate-y-2 rounded-lg"
                >
                    {imageContent}
                </Link>
            ) : (
                <div className="block transition rounded-lg">
                    {imageContent}
                </div>
            )}

            {/* Display name if available */}
            {finalDisplayName && (
                <p className="text-xs md:text-sm font-semibold text-gray-700 mb-2">
                    {finalDisplayName}
                </p>
            )}

            {/* Visible URL when the project has both a display name and a link */}
            {domain && displayName && (
                <div className="flex flex-wrap items-center justify-center gap-2 -mt-1 mb-2">
                    <Link
                        href={domain}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs md:text-sm text-accent-text underline hover:opacity-80"
                    >
                        {domain.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </Link>
                    {onlineLabel && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 text-green-800 px-2 py-0.5 text-[10px] md:text-xs font-semibold">
                            <span className="relative flex h-2 w-2" aria-hidden="true">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 motion-safe:animate-ping" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                            </span>
                            {onlineLabel}
                        </span>
                    )}
                </div>
            )}

            {/* Description if available */}
            {description && (
                <p className="text-xs md:text-sm text-gray-600 text-left px-2">
                    {description}
                </p>
            )}

            {/* Technologies/Skills if available */}
            {technologies && technologies.length > 0 && (
                technologies.some((tech) => typeof tech === "object") ? (
                    // Technologies with a short note on what each one was used for
                    <dl className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-2 text-left w-full px-2 mt-3 pt-3 border-t border-gray-200">
                        {technologies.map((tech, index) => (
                            <Fragment key={index}>
                                <dt className="justify-self-start border border-brand-blue/30 bg-brand-blue/10 text-foreground rounded-md font-mono font-medium px-3 py-1 text-[10px] md:text-xs whitespace-nowrap">
                                    {tech.name}
                                </dt>
                                <dd className="text-xs md:text-sm text-gray-600 leading-snug">
                                    {tech.description}
                                </dd>
                            </Fragment>
                        ))}
                    </dl>
                ) : (
                    <div className="flex flex-wrap gap-2 justify-center px-2 mt-2">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="border border-brand-blue/30 bg-brand-blue/10 text-foreground rounded-md font-mono font-medium px-3 py-1 text-[10px] md:text-xs"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )
            )}
        </div>
    );
}
