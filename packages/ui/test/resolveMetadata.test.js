import { test } from "node:test";
import assert from "node:assert/strict";
import { resolveMetadata } from "../src/metadata/resolveMetadata.js";

const routes = [
    {
        prefix: "/servicios",
        title: { es: "Servicios", en: "Services" },
        description: { es: "Desc servicios", en: "Services desc" },
    },
];
const fallback = {
    title: { es: "Inicio", en: "Home" },
    description: { es: "Desc inicio", en: "Home desc" },
};
const resolve = (pathname, language = "es") =>
    resolveMetadata({ pathname, language, routes, fallback });

test("matches the exact route prefix", () => {
    assert.deepEqual(resolve("/servicios"), { title: "Servicios", description: "Desc servicios" });
});

test("matches subroutes of the prefix", () => {
    assert.equal(resolve("/servicios/x").title, "Servicios");
});

test("uses the fallback for other paths", () => {
    assert.deepEqual(resolve("/"), { title: "Inicio", description: "Desc inicio" });
});

test("uses the fallback when pathname is null or undefined", () => {
    assert.equal(resolve(null).title, "Inicio");
    assert.equal(resolve(undefined).title, "Inicio");
});

test("returns the English text when language is en", () => {
    assert.deepEqual(resolve("/servicios", "en"), { title: "Services", description: "Services desc" });
    assert.equal(resolve("/", "en").title, "Home");
});
