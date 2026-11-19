import { test } from "node:test";
import assert from "node:assert/strict";
import { translate } from "../src/i18n/translate.js";

const dict = {
    es: { a: { b: "x" }, list: [{ title: "uno" }], steps: { items: ["a", "b"] } },
    en: { a: { b: "y" } },
};

test("reads a nested key", () => {
    assert.equal(translate(dict, "es", "a.b"), "x");
});

test("reads the dictionary of the given language", () => {
    assert.equal(translate(dict, "en", "a.b"), "y");
});

test("returns the key itself when the value does not exist", () => {
    assert.equal(translate(dict, "es", "a.zzz"), "a.zzz");
});

test("returns arrays and objects untouched", () => {
    assert.deepEqual(translate(dict, "es", "list"), [{ title: "uno" }]);
    assert.deepEqual(translate(dict, "es", "steps.items"), ["a", "b"]);
});
