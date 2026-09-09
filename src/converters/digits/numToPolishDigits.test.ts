import { numToPolishDigits } from "./numToPolishDigits";

describe("numToPolishDigits", () => {
  test("converts each digit", () => {
    expect(numToPolishDigits("123")).toBe("Jeden dwa trzy");
    expect(numToPolishDigits(123)).toBe("Jeden dwa trzy");
    expect(numToPolishDigits("0")).toBe("Zero");
    expect(numToPolishDigits("0123456789")).toBe("Zero jeden dwa trzy cztery pięć sześć siedem osiem dziewięć");
  });

  test("keeps trailing zeros in the decimal part", () => {
    expect(numToPolishDigits("1.50")).toBe("Jeden przecinek pięć zero");
  });

  test("converts negative numbers", () => {
    expect(numToPolishDigits("-12")).toBe("Minus jeden dwa");
    expect(numToPolishDigits("-0")).toBe("Minus zero");
  });

  test("converts infinity and negative infinity", () => {
    expect(numToPolishDigits(Infinity)).toBe("Nieskończoność");
    expect(numToPolishDigits(-Infinity)).toBe("Minus nieskończoność");
  });

  test("changes letter case", () => {
    expect(numToPolishDigits("12", "capitalize")).toBe("Jeden dwa");
    expect(numToPolishDigits("12", "upper")).toBe("JEDEN DWA");
    expect(numToPolishDigits("12", "lower")).toBe("jeden dwa");
    expect(numToPolishDigits(-Infinity, "upper")).toBe("MINUS NIESKOŃCZONOŚĆ");
  });
});
