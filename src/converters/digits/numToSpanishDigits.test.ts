import { numToSpanishDigits } from "./numToSpanishDigits";

describe("numToSpanishDigits", () => {
  test("converts each digit", () => {
    expect(numToSpanishDigits("123")).toBe("Uno dos tres");
    expect(numToSpanishDigits(123)).toBe("Uno dos tres");
    expect(numToSpanishDigits("0")).toBe("Cero");
    expect(numToSpanishDigits("0123456789")).toBe("Cero uno dos tres cuatro cinco seis siete ocho nueve");
  });

  test("keeps trailing zeros in the decimal part", () => {
    expect(numToSpanishDigits("1.50")).toBe("Uno coma cinco cero");
  });

  test("converts negative numbers", () => {
    expect(numToSpanishDigits("-12")).toBe("Menos uno dos");
    expect(numToSpanishDigits("-0")).toBe("Menos cero");
  });

  test("converts infinity and negative infinity", () => {
    expect(numToSpanishDigits(Infinity)).toBe("Infinito");
    expect(numToSpanishDigits(-Infinity)).toBe("Menos infinito");
  });

  test("changes letter case", () => {
    expect(numToSpanishDigits("12", "capitalize")).toBe("Uno dos");
    expect(numToSpanishDigits("12", "upper")).toBe("UNO DOS");
    expect(numToSpanishDigits("12", "lower")).toBe("uno dos");
    expect(numToSpanishDigits(-Infinity, "upper")).toBe("MENOS INFINITO");
  });
});
