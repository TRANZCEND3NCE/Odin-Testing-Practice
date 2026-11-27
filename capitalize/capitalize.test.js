import capitalize from "./capitalize.js";

test("capitalizes the first character of a string", () => {
	expect(capitalize("hello")).toBe("Hello");
});

test("preserves the remaining characters", () => {
	expect(capitalize("hELLO")).toBe("HELLO")
});

test("handles an already capitalized string", () => {
	expect(capitalize("Hello")).toBe("Hello");
});

test("handles a single character", () => {
	expect(capitalize("a")).toBe("A");
});

test("handles an empty string", () => {
	expect(capitalize("")).toBe("");
});