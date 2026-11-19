"use client";

import { MetadataUpdater } from "@portfolio/ui";
import { routes, fallback } from "../site-config.js";

/** Rafael's titles and descriptions per route and language (client-side, follows the language switcher). */
export default function SiteMetadata() {
    return <MetadataUpdater routes={routes} fallback={fallback} />;
}
