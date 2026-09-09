import { numToRussianDigits } from "./numToRussianDigits";

describe("numToRussianDigits", () => {
  test("converts each digit", () => {
    expect(numToRussianDigits("123")).toBe("Один два три");
    expect(numToRussianDigits(123)).toBe("Один два три");
    expect(numToRussianDigits("0")).toBe("Ноль");
    expect(numToRussianDigits("0123456789")).toBe("Ноль один два три четыре пять шесть семь восемь девять");
  });

  test("keeps trailing zeros in the decimal part", () => {
    expect(numToRussianDigits("1.50")).toBe("Один запятая пять ноль");
  });

  test("converts negative numbers", () => {
    expect(numToRussianDigits("-12")).toBe("Минус один два");
    expect(numToRussianDigits("-0")).toBe("Минус ноль");
  });

  test("converts infinity and negative infinity", () => {
    expect(numToRussianDigits(Infinity)).toBe("Бесконечность");
    expect(numToRussianDigits(-Infinity)).toBe("Минус бесконечность");
  });

  test("changes letter case", () => {
    expect(numToRussianDigits("12", "capitalize")).toBe("Один два");
    expect(numToRussianDigits("12", "upper")).toBe("ОДИН ДВА");
    expect(numToRussianDigits("12", "lower")).toBe("один два");
    expect(numToRussianDigits(-Infinity, "upper")).toBe("МИНУС БЕСКОНЕЧНОСТЬ");
  });
});
