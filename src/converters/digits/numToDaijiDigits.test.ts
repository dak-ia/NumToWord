import { numToDaijiDigits } from "./numToDaijiDigits";

describe("numToDaijiDigits", () => {
  test("converts each digit", () => {
    expect(numToDaijiDigits("123")).toBe("壱弐参");
    expect(numToDaijiDigits(123)).toBe("壱弐参");
    expect(numToDaijiDigits("0")).toBe("零");
    expect(numToDaijiDigits("9876543210")).toBe("玖捌漆陸伍肆参弐壱零");
  });

  test("keeps trailing zeros in the decimal part", () => {
    expect(numToDaijiDigits("12.34")).toBe("壱弐・参肆");
    expect(numToDaijiDigits("1.500")).toBe("壱・伍零零");
    expect(numToDaijiDigits("1.0")).toBe("壱・零");
  });

  test("converts negative numbers", () => {
    expect(numToDaijiDigits("-12")).toBe("負の壱弐");
    expect(numToDaijiDigits("-0")).toBe("負の零");
  });

  test("converts infinity and negative infinity", () => {
    expect(numToDaijiDigits(Infinity)).toBe("無限");
    expect(numToDaijiDigits(-Infinity)).toBe("負の無限");
  });
});
