import { numToVietnameseDigits } from "./numToVietnameseDigits";

describe("numToVietnameseDigits", () => {
  test("converts each digit", () => {
    expect(numToVietnameseDigits("123")).toBe("Một hai ba");
    expect(numToVietnameseDigits(123)).toBe("Một hai ba");
    expect(numToVietnameseDigits("0")).toBe("Không");
    expect(numToVietnameseDigits("0123456789")).toBe("Không một hai ba bốn năm sáu bảy tám chín");
  });

  test("keeps trailing zeros in the decimal part", () => {
    expect(numToVietnameseDigits("1.50")).toBe("Một phẩy năm không");
  });

  test("converts negative numbers", () => {
    expect(numToVietnameseDigits("-12")).toBe("Âm một hai");
    expect(numToVietnameseDigits("-0")).toBe("Âm không");
  });

  test("converts infinity and negative infinity", () => {
    expect(numToVietnameseDigits(Infinity)).toBe("Vô cực");
    expect(numToVietnameseDigits(-Infinity)).toBe("Âm vô cực");
  });

  test("changes letter case", () => {
    expect(numToVietnameseDigits("12", "capitalize")).toBe("Một hai");
    expect(numToVietnameseDigits("12", "upper")).toBe("MỘT HAI");
    expect(numToVietnameseDigits("12", "lower")).toBe("một hai");
    expect(numToVietnameseDigits(-Infinity, "upper")).toBe("ÂM VÔ CỰC");
  });
});
