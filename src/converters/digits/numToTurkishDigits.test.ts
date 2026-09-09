import { numToTurkishDigits } from "./numToTurkishDigits";

describe("numToTurkishDigits", () => {
  test("converts each digit", () => {
    expect(numToTurkishDigits("123")).toBe("Bir iki üç");
    expect(numToTurkishDigits(123)).toBe("Bir iki üç");
    expect(numToTurkishDigits("0")).toBe("Sıfır");
    expect(numToTurkishDigits("0123456789")).toBe("Sıfır bir iki üç dört beş altı yedi sekiz dokuz");
  });

  test("capitalizes the leading i as İ", () => {
    expect(numToTurkishDigits("2")).toBe("İki");
    expect(numToTurkishDigits("-2")).toBe("Eksi iki");
  });

  test("keeps trailing zeros in the decimal part", () => {
    expect(numToTurkishDigits("1.50")).toBe("Bir virgül beş sıfır");
  });

  test("converts negative numbers", () => {
    expect(numToTurkishDigits("-12")).toBe("Eksi bir iki");
    expect(numToTurkishDigits("-0")).toBe("Eksi sıfır");
  });

  test("converts infinity and negative infinity", () => {
    expect(numToTurkishDigits(Infinity)).toBe("Sonsuz");
    expect(numToTurkishDigits(-Infinity)).toBe("Eksi sonsuz");
  });

  test("changes letter case", () => {
    expect(numToTurkishDigits("12", "capitalize")).toBe("Bir iki");
    expect(numToTurkishDigits("12", "upper")).toBe("BİR İKİ");
    expect(numToTurkishDigits("12", "lower")).toBe("bir iki");
    expect(numToTurkishDigits(-Infinity, "upper")).toBe("EKSİ SONSUZ");
  });
});
