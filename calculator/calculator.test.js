import calculator from "./calculator.js";

test("adds two numbers", () => {
	expect(calculator.add(5, 3)).toBe(8);
});

test("subtract two numbers", () => {
	expect(calculator.subtract(5, 3)).toBe(2);
});

test("multiplies two numbers", () => {
	expect(calculator.multiply(5, 3)).toBe(15);
});

test("divides two numbers", () => {
	expect(calculator.divide(6, 3)).toBe(2);
});

test("adds a negative and positive number", () => {
	expect(calculator.add(-5, 3)).toBe(-2);
});

test("subtracts a larger number from a smaller number", () => {
	expect(calculator.subtract(3, 5)).toBe(-2);
});

test("multiplies a number by zero", () => {
	expect(calculator.multiply(5, 0)).toBe(0);
});

test("returns a decimal when dividing", () => {
	expect(calculator.divide(5, 2)).toBe(2.5);
});

test("adds decimal numbers", () => {
	expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("returns Infinity when dividing a positive number by zero", () => {
	expect(calculator.divide(5, 0)).toBe(Infinity);
});

test("returns negative Infinity when dividing a negative number by zero", () => {
	expect(calculator.divide(-5, 0)).toBe(-Infinity);
});

test("returns NaN when dividing zero by zero", () => {
	expect(calculator.divide(0, 0)).toBeNaN();
});