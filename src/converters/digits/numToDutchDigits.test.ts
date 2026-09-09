import { numToDutchDigits } from "./numToDutchDigits";

describe("numToDutchDigits", () => {
  test("converts each digit", () => {
    expect(numToDutchDigits("123")).toBe("Een twee drie");
    expect(numToDutchDigits(123)).toBe("Een twee drie");
    expect(numToDutchDigits("0")).toBe("Nul");
    expect(numToDutchDigits("0123456789")).toBe("Nul een twee drie vier vijf zes zeven acht negen");
  });

  test("keeps trailing zeros in the decimal part", () => {
    expect(numToDutchDigits("1.50")).toBe("Een komma vijf nul");
  });

  test("converts negative numbers", () => {
    expect(numToDutchDigits("-12")).toBe("Min een twee");
    expect(numToDutchDigits("-0")).toBe("Min nul");
  });

  test("converts infinity and negative infinity", () => {
    expect(numToDutchDigits(Infinity)).toBe("Oneindig");
    expect(numToDutchDigits(-Infinity)).toBe("Min oneindig");
  });

  test("changes letter case", () => {
    expect(numToDutchDigits("12", "capitalize")).toBe("Een twee");
    expect(numToDutchDigits("12", "upper")).toBe("EEN TWEE");
    expect(numToDutchDigits("12", "lower")).toBe("een twee");
    expect(numToDutchDigits(-Infinity, "upper")).toBe("MIN ONEINDIG");
  });
});
