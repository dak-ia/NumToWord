import { numToJapaneseDigits } from "./numToJapaneseDigits";

describe("numToJapaneseDigits", () => {
  test("converts each digit", () => {
    expect(numToJapaneseDigits("123")).toBe("一二三");
    expect(numToJapaneseDigits(123)).toBe("一二三");
    expect(numToJapaneseDigits("0")).toBe("〇");
    expect(numToJapaneseDigits("9876543210")).toBe("九八七六五四三二一〇");
  });

  test("keeps trailing zeros in the decimal part", () => {
    expect(numToJapaneseDigits("12.34")).toBe("一二・三四");
    expect(numToJapaneseDigits("1.500")).toBe("一・五〇〇");
    expect(numToJapaneseDigits("1.0")).toBe("一・〇");
  });

  test("converts negative numbers", () => {
    expect(numToJapaneseDigits("-12")).toBe("負の一二");
    expect(numToJapaneseDigits("-0")).toBe("負の〇");
    expect(numToJapaneseDigits("-0.50")).toBe("負の〇・五〇");
  });

  test("converts infinity and negative infinity", () => {
    expect(numToJapaneseDigits(Infinity)).toBe("無限");
    expect(numToJapaneseDigits(-Infinity)).toBe("負の無限");
    expect(numToJapaneseDigits("Infinity")).toBe("無限");
  });
});
