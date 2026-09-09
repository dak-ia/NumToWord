import { numToRomanDigits } from "./numToRomanDigits";

describe("numToRomanDigits", () => {
  test("converts each digit", () => {
    expect(numToRomanDigits("123")).toBe("I II III");
    expect(numToRomanDigits(123)).toBe("I II III");
    expect(numToRomanDigits("0")).toBe("N");
    expect(numToRomanDigits("0123456789")).toBe("N I II III IV V VI VII VIII IX");
  });

  test("keeps trailing zeros in the decimal part", () => {
    expect(numToRomanDigits("1.50")).toBe("I . V N");
  });

  test("converts negative numbers", () => {
    expect(numToRomanDigits("-12")).toBe("-I II");
    expect(numToRomanDigits("-0")).toBe("-N");
  });

  test("converts infinity and negative infinity", () => {
    expect(numToRomanDigits(Infinity)).toBe("∞");
    expect(numToRomanDigits(-Infinity)).toBe("-∞");
  });

  test("changes letter case", () => {
    expect(numToRomanDigits("12", "capitalize")).toBe("I ii");
    expect(numToRomanDigits("12", "upper")).toBe("I II");
    expect(numToRomanDigits("12", "lower")).toBe("i ii");
  });

  test("capitalizes past the minus sign", () => {
    expect(numToRomanDigits("-12", "capitalize")).toBe("-I ii");
  });
});
