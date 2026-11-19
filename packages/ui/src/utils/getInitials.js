/**
 * Initials for a company name, used when it has no logo.
 * Drops a location suffix after " - ", then takes the first letters of the
 * first two words, or the first two letters of a single word.
 */
export function getInitials(name) {
    const base = (name ?? "").split(" - ")[0].trim();
    if (!base) return "";
    const words = base.split(/\s+/);
    const letters =
        words.length > 1 ? words[0][0] + words[1][0] : base.slice(0, 2);
    return letters.toUpperCase();
}
