import reverseString from "./reverseString.js";

test("reverse the characters of a string", () =>{
	expect(reverseString("hello")).toBe("olleh");
});

test("preserve capitalization when reversing", () => {
	expect(reverseString("JavaScript")).toBe("tpircSavaJ");
});

test("handles string containing spaces", () => {
	expect(reverseString("hello world")).toBe("dlrow olleh");
})

test("handles strings containing numbers", () => {
	expect(reverseString("12345")).toBe("54321");
});

test("handles punctuation", () => {
	expect(reverseString("hello!")).toBe("!olleh");
});

test("handles a single character", () => {
	expect(reverseString("a")).toBe("a");
});

test("handles an empty string", () => {
	expect(reverseString("")).toBe("");
});