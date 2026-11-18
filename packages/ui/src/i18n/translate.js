/**
 * Looks up a dotted key ("a.b.c") in the dictionary of the given language.
 * Returns the key itself when the value is missing or falsy.
 */
export function translate(translations, language, key) {
    let value = translations[language];
    for (const k of key.split(".")) {
        value = value?.[k];
    }
    return value || key;
}
