import { replaceIntUnitEn } from "./replaceIntUnitEn";

describe("replaceIntUnitEn", () => {
  test("basic numerals", () => {
    expect(replaceIntUnitEn("0")).toBe("zero");
    expect(replaceIntUnitEn("1")).toBe("one");
    expect(replaceIntUnitEn("5")).toBe("five");
    expect(replaceIntUnitEn("9")).toBe("nine");
  });

  test("tens (10-19)", () => {
    expect(replaceIntUnitEn("10")).toBe("ten");
    expect(replaceIntUnitEn("11")).toBe("eleven");
    expect(replaceIntUnitEn("12")).toBe("twelve");
    expect(replaceIntUnitEn("15")).toBe("fifteen");
    expect(replaceIntUnitEn("19")).toBe("nineteen");
  });

  test("tens (20-99)", () => {
    expect(replaceIntUnitEn("20")).toBe("twenty");
    expect(replaceIntUnitEn("21")).toBe("twenty-one");
    expect(replaceIntUnitEn("25")).toBe("twenty-five");
    expect(replaceIntUnitEn("30")).toBe("thirty");
    expect(replaceIntUnitEn("45")).toBe("forty-five");
    expect(replaceIntUnitEn("99")).toBe("ninety-nine");
  });

  test("hundreds", () => {
    expect(replaceIntUnitEn("100")).toBe("one hundred");
    expect(replaceIntUnitEn("101")).toBe("one hundred one");
    expect(replaceIntUnitEn("110")).toBe("one hundred ten");
    expect(replaceIntUnitEn("111")).toBe("one hundred eleven");
    expect(replaceIntUnitEn("120")).toBe("one hundred twenty");
    expect(replaceIntUnitEn("121")).toBe("one hundred twenty-one");
    expect(replaceIntUnitEn("200")).toBe("two hundred");
    expect(replaceIntUnitEn("250")).toBe("two hundred fifty");
    expect(replaceIntUnitEn("555")).toBe("five hundred fifty-five");
    expect(replaceIntUnitEn("999")).toBe("nine hundred ninety-nine");
  });

  test("leading zeros", () => {
    expect(replaceIntUnitEn("01")).toBe("one");
    expect(replaceIntUnitEn("001")).toBe("one");
    expect(replaceIntUnitEn("010")).toBe("ten");
    expect(replaceIntUnitEn("020")).toBe("twenty");
    expect(replaceIntUnitEn("021")).toBe("twenty-one");
  });

  test("overflow", () => {
    expect(() => replaceIntUnitEn("1000")).toThrow("Overflow");
    expect(() => replaceIntUnitEn("9999")).toThrow("Overflow");
  });
});
