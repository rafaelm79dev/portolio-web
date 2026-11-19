import { test } from "node:test";
import assert from "node:assert/strict";
import { getInitials } from "../src/utils/getInitials.js";

test("uses the first letter of the first two words", () => {
    assert.equal(getInitials("Travel Leaders Group"), "TL");
    assert.equal(getInitials("Collaborative Technology Solutions International"), "CT");
});

test("uses the first two letters of a single word", () => {
    assert.equal(getInitials("Roycon"), "RO");
});

test("ignores the location suffix after ' - '", () => {
    assert.equal(getInitials("Roycon - USA"), "RO");
    assert.equal(getInitials("Rockstar Coders - Uruguay"), "RC");
});

test("returns an uppercase string and an empty string for empty input", () => {
    assert.equal(getInitials("nimacloud"), "NI");
    assert.equal(getInitials(""), "");
    assert.equal(getInitials(undefined), "");
});
