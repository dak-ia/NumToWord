import { numToArabicDigits } from "./numToArabicDigits";

describe("numToArabicDigits", () => {
  test("converts each digit", () => {
    expect(numToArabicDigits("123")).toBe("واحد اثنان ثلاثة");
    expect(numToArabicDigits(123)).toBe("واحد اثنان ثلاثة");
    expect(numToArabicDigits("0")).toBe("صفر");
    expect(numToArabicDigits("0123456789")).toBe("صفر واحد اثنان ثلاثة أربعة خمسة ستة سبعة ثمانية تسعة");
  });

  test("keeps trailing zeros in the decimal part", () => {
    expect(numToArabicDigits("1.50")).toBe("واحد فاصلة خمسة صفر");
  });

  test("converts negative numbers", () => {
    expect(numToArabicDigits("-12")).toBe("سالب واحد اثنان");
    expect(numToArabicDigits("-0")).toBe("سالب صفر");
  });

  test("converts infinity and negative infinity", () => {
    expect(numToArabicDigits(Infinity)).toBe("لانهاية");
    expect(numToArabicDigits(-Infinity)).toBe("سالب لانهاية");
  });
});
