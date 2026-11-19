import { test } from "node:test";
import assert from "node:assert/strict";
import { buildLocalizedMetadata } from "../src/metadata/buildLocalizedMetadata.js";

const base = {
    siteUrl: "https://example.com",
    paths: { en: "/", es: "/es" },
    defaultLang: "en",
    locales: { en: "en_US", es: "es_UY" },
    siteName: "Ana Perez",
    title: { en: "Ana | Architect", es: "Ana | Arquitecta" },
    description: { en: "English text", es: "Texto en español" },
    images: [{ url: "/profile.png", alt: "Ana" }],
};
const build = (lang, extra = {}) => buildLocalizedMetadata({ ...base, lang, ...extra });

test("uses the title and description of the requested language", () => {
    assert.equal(build("en").title, "Ana | Architect");
    assert.equal(build("es").title, "Ana | Arquitecta");
    assert.equal(build("es").description, "Texto en español");
});

test("canonical points to the page of the requested language", () => {
    assert.equal(build("en").alternates.canonical, "/");
    assert.equal(build("es").alternates.canonical, "/es");
});

test("declares every language plus x-default in alternates", () => {
    assert.deepEqual(build("es").alternates.languages, {
        en: "/",
        es: "/es",
        "x-default": "/",
    });
});

test("x-default follows defaultLang", () => {
    const m = build("en", { defaultLang: "es" });
    assert.equal(m.alternates.languages["x-default"], "/es");
});

test("open graph uses the right locale, alternate locales and url", () => {
    const og = build("es").openGraph;
    assert.equal(og.locale, "es_UY");
    assert.deepEqual(og.alternateLocale, ["en_US"]);
    assert.equal(og.url, "/es");
    assert.equal(og.title, "Ana | Arquitecta");
    assert.deepEqual(og.images, base.images);
});

test("twitter card carries the same title, description and images", () => {
    const tw = build("en").twitter;
    assert.equal(tw.title, "Ana | Architect");
    assert.equal(tw.description, "English text");
    assert.deepEqual(tw.images, ["/profile.png"]);
});

test("metadataBase is built from siteUrl", () => {
    assert.equal(build("en").metadataBase.href, "https://example.com/");
});
