import { numToIndonesianDigits } from "./numToIndonesianDigits";

describe("numToIndonesianDigits", () => {
  test("converts each digit", () => {
    expect(numToIndonesianDigits("123")).toBe("Satu dua tiga");
    expect(numToIndonesianDigits(123)).toBe("Satu dua tiga");
    expect(numToIndonesianDigits("0")).toBe("Nol");
    expect(numToIndonesianDigits("0123456789")).toBe("Nol satu dua tiga empat lima enam tujuh delapan sembilan");
  });

  test("keeps trailing zeros in the decimal part", () => {
    expect(numToIndonesianDigits("1.50")).toBe("Satu koma lima nol");
  });

  test("converts negative numbers", () => {
    expect(numToIndonesianDigits("-12")).toBe("Minus satu dua");
    expect(numToIndonesianDigits("-0")).toBe("Minus nol");
  });

  test("converts infinity and negative infinity", () => {
    expect(numToIndonesianDigits(Infinity)).toBe("Tak hingga");
    expect(numToIndonesianDigits(-Infinity)).toBe("Minus tak hingga");
  });

  test("changes letter case", () => {
    expect(numToIndonesianDigits("12", "capitalize")).toBe("Satu dua");
    expect(numToIndonesianDigits("12", "upper")).toBe("SATU DUA");
    expect(numToIndonesianDigits("12", "lower")).toBe("satu dua");
    expect(numToIndonesianDigits(-Infinity, "upper")).toBe("MINUS TAK HINGGA");
  });
});
