import { numToEnglishDigits } from "./numToEnglishDigits";

describe("numToEnglishDigits", () => {
  test("converts each digit", () => {
    expect(numToEnglishDigits("123")).toBe("One two three");
    expect(numToEnglishDigits(123)).toBe("One two three");
    expect(numToEnglishDigits("0")).toBe("Zero");
    expect(numToEnglishDigits("9876543210")).toBe("Nine eight seven six five four three two one zero");
  });

  test("keeps trailing zeros in the decimal part", () => {
    expect(numToEnglishDigits("12.34")).toBe("One two point three four");
    expect(numToEnglishDigits("1.500")).toBe("One point five zero zero");
    expect(numToEnglishDigits("1.0")).toBe("One point zero");
  });

  test("converts negative numbers", () => {
    expect(numToEnglishDigits("-12")).toBe("Minus one two");
    expect(numToEnglishDigits("-0")).toBe("Minus zero");
    expect(numToEnglishDigits("-0.50")).toBe("Minus zero point five zero");
  });

  test("converts infinity and negative infinity", () => {
    expect(numToEnglishDigits(Infinity)).toBe("Infinity");
    expect(numToEnglishDigits(-Infinity)).toBe("Minus infinity");
    expect(numToEnglishDigits("Infinity")).toBe("Infinity");
  });

  test("changes letter case", () => {
    expect(numToEnglishDigits("12", "capitalize")).toBe("One two");
    expect(numToEnglishDigits("12", "upper")).toBe("ONE TWO");
    expect(numToEnglishDigits("12", "lower")).toBe("one two");
    expect(numToEnglishDigits(-Infinity, "upper")).toBe("MINUS INFINITY");
  });
});
