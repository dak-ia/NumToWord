import { numToGreekDigits } from "./numToGreekDigits";

describe("numToGreekDigits", () => {
  test("converts each digit", () => {
    expect(numToGreekDigits("123")).toBe("Ένα δύο τρία");
    expect(numToGreekDigits(123)).toBe("Ένα δύο τρία");
    expect(numToGreekDigits("0")).toBe("Μηδέν");
    expect(numToGreekDigits("0123456789")).toBe("Μηδέν ένα δύο τρία τέσσερα πέντε έξι επτά οκτώ εννέα");
  });

  test("keeps trailing zeros in the decimal part", () => {
    expect(numToGreekDigits("1.50")).toBe("Ένα κόμμα πέντε μηδέν");
  });

  test("converts negative numbers", () => {
    expect(numToGreekDigits("-12")).toBe("Μείον ένα δύο");
    expect(numToGreekDigits("-0")).toBe("Μείον μηδέν");
  });

  test("converts infinity and negative infinity", () => {
    expect(numToGreekDigits(Infinity)).toBe("Άπειρο");
    expect(numToGreekDigits(-Infinity)).toBe("Μείον άπειρο");
  });

  test("drops accents in upper case", () => {
    expect(numToGreekDigits("1", "capitalize")).toBe("Ένα");
    expect(numToGreekDigits("1", "upper")).toBe("ΕΝΑ");
  });

  test("changes letter case", () => {
    expect(numToGreekDigits("12", "capitalize")).toBe("Ένα δύο");
    expect(numToGreekDigits("12", "upper")).toBe("ΕΝΑ ΔΥΟ");
    expect(numToGreekDigits("12", "lower")).toBe("ένα δύο");
    expect(numToGreekDigits(-Infinity, "upper")).toBe("ΜΕΙΟΝ ΑΠΕΙΡΟ");
  });
});
