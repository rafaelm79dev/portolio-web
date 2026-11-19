"use client";

import { MetadataUpdater } from "@portfolio/ui";
import { routes, fallback } from "../site-config.js";

/** Lucía's titles and descriptions per language (client-side, follows the language switcher). */
export default function SiteMetadata() {
    return <MetadataUpdater routes={routes} fallback={fallback} />;
}
