"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * ProjectItem component
 * Displays a project image, optional domain/display name, and optional description.
 */
export default function ProjectItem({ project }) {
    const { image, domain, displayName, description, technologies } = project;

    // Extract just the domain name part from the full URL for display (if domain exists)
    const finalDisplayName = displayName || (domain ? domain.replace(/^https?:\/\//, "").split("/")[0] : null);

    // Si hay domain, envolver en Link, si no, solo mostrar la imagen
    const imageContent = (
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shadow-lg mb-2 border border-gray-200">
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

            {/* Description if available */}
            {description && (
                <p className="text-xs md:text-sm text-gray-600 text-justify px-2">
                    {description}
                </p>
            )}

            {/* Technologies/Skills if available */}
            {technologies && technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center px-2 mt-2">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full px-3 py-1 text-[10px] md:text-xs font-semibold shadow-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}
