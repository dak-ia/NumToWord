import { numToPortugueseDigits } from "./numToPortugueseDigits";

describe("numToPortugueseDigits", () => {
  test("converts each digit", () => {
    expect(numToPortugueseDigits("123")).toBe("Um dois três");
    expect(numToPortugueseDigits(123)).toBe("Um dois três");
    expect(numToPortugueseDigits("0")).toBe("Zero");
    expect(numToPortugueseDigits("0123456789")).toBe("Zero um dois três quatro cinco seis sete oito nove");
  });

  test("keeps trailing zeros in the decimal part", () => {
    expect(numToPortugueseDigits("1.50")).toBe("Um vírgula cinco zero");
  });

  test("converts negative numbers", () => {
    expect(numToPortugueseDigits("-12")).toBe("Menos um dois");
    expect(numToPortugueseDigits("-0")).toBe("Menos zero");
  });

  test("converts infinity and negative infinity", () => {
    expect(numToPortugueseDigits(Infinity)).toBe("Infinito");
    expect(numToPortugueseDigits(-Infinity)).toBe("Menos infinito");
  });

  test("changes letter case", () => {
    expect(numToPortugueseDigits("12", "capitalize")).toBe("Um dois");
    expect(numToPortugueseDigits("12", "upper")).toBe("UM DOIS");
    expect(numToPortugueseDigits("12", "lower")).toBe("um dois");
    expect(numToPortugueseDigits(-Infinity, "upper")).toBe("MENOS INFINITO");
  });
});
