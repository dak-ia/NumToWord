import { numToKoreanDigits } from "./numToKoreanDigits";

describe("numToKoreanDigits", () => {
  test("converts each digit", () => {
    expect(numToKoreanDigits("123")).toBe("일이삼");
    expect(numToKoreanDigits(123)).toBe("일이삼");
    expect(numToKoreanDigits("0")).toBe("영");
    expect(numToKoreanDigits("0123456789")).toBe("영일이삼사오육칠팔구");
  });

  test("keeps trailing zeros in the decimal part", () => {
    expect(numToKoreanDigits("1.50")).toBe("일점오영");
  });

  test("converts negative numbers", () => {
    expect(numToKoreanDigits("-12")).toBe("마이너스 일이");
    expect(numToKoreanDigits("-0")).toBe("마이너스 영");
  });

  test("converts infinity and negative infinity", () => {
    expect(numToKoreanDigits(Infinity)).toBe("무한");
    expect(numToKoreanDigits(-Infinity)).toBe("마이너스 무한");
  });
});
