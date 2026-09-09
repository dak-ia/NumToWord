import { numToItalianDigits } from "./numToItalianDigits";

describe("numToItalianDigits", () => {
  test("converts each digit", () => {
    expect(numToItalianDigits("123")).toBe("Uno due tre");
    expect(numToItalianDigits(123)).toBe("Uno due tre");
    expect(numToItalianDigits("0")).toBe("Zero");
    expect(numToItalianDigits("0123456789")).toBe("Zero uno due tre quattro cinque sei sette otto nove");
  });

  test("keeps trailing zeros in the decimal part", () => {
    expect(numToItalianDigits("1.50")).toBe("Uno virgola cinque zero");
  });

  test("converts negative numbers", () => {
    expect(numToItalianDigits("-12")).toBe("Meno uno due");
    expect(numToItalianDigits("-0")).toBe("Meno zero");
  });

  test("converts infinity and negative infinity", () => {
    expect(numToItalianDigits(Infinity)).toBe("Infinito");
    expect(numToItalianDigits(-Infinity)).toBe("Meno infinito");
  });

  test("changes letter case", () => {
    expect(numToItalianDigits("12", "capitalize")).toBe("Uno due");
    expect(numToItalianDigits("12", "upper")).toBe("UNO DUE");
    expect(numToItalianDigits("12", "lower")).toBe("uno due");
    expect(numToItalianDigits(-Infinity, "upper")).toBe("MENO INFINITO");
  });
});
