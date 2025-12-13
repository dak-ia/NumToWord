import { replaceIntUnitJp } from "./replaceIntUnitJp";

describe("replaceIntUnitJp", () => {
  test("basic numerals", () => {
    expect(replaceIntUnitJp("0")).toBe("〇");
    expect(replaceIntUnitJp("1")).toBe("一");
    expect(replaceIntUnitJp("5")).toBe("五");
    expect(replaceIntUnitJp("9")).toBe("九");
  });

  test("tens", () => {
    expect(replaceIntUnitJp("10")).toBe("十");
    expect(replaceIntUnitJp("11")).toBe("十一");
    expect(replaceIntUnitJp("20")).toBe("二十");
    expect(replaceIntUnitJp("25")).toBe("二十五");
    expect(replaceIntUnitJp("99")).toBe("九十九");
  });

  test("hundreds", () => {
    expect(replaceIntUnitJp("100")).toBe("百");
    expect(replaceIntUnitJp("101")).toBe("百一");
    expect(replaceIntUnitJp("110")).toBe("百十");
    expect(replaceIntUnitJp("111")).toBe("百十一");
    expect(replaceIntUnitJp("200")).toBe("二百");
    expect(replaceIntUnitJp("250")).toBe("二百五十");
    expect(replaceIntUnitJp("999")).toBe("九百九十九");
  });

  test("thousands", () => {
    expect(replaceIntUnitJp("1000")).toBe("千");
    expect(replaceIntUnitJp("1001")).toBe("千一");
    expect(replaceIntUnitJp("1010")).toBe("千十");
    expect(replaceIntUnitJp("1100")).toBe("千百");
    expect(replaceIntUnitJp("1111")).toBe("千百十一");
    expect(replaceIntUnitJp("2000")).toBe("二千");
    expect(replaceIntUnitJp("2500")).toBe("二千五百");
    expect(replaceIntUnitJp("9999")).toBe("九千九百九十九");
  });

  test("zeros in middle", () => {
    expect(replaceIntUnitJp("1001")).toBe("千一");
    expect(replaceIntUnitJp("1010")).toBe("千十");
    expect(replaceIntUnitJp("1100")).toBe("千百");
    expect(replaceIntUnitJp("2002")).toBe("二千二");
    expect(replaceIntUnitJp("3030")).toBe("三千三十");
    expect(replaceIntUnitJp("5005")).toBe("五千五");
  });

  test("leading zeros", () => {
    expect(replaceIntUnitJp("01")).toBe("一");
    expect(replaceIntUnitJp("001")).toBe("一");
    expect(replaceIntUnitJp("0001")).toBe("一");
    expect(replaceIntUnitJp("0010")).toBe("十");
    expect(replaceIntUnitJp("0100")).toBe("百");
  });

  test("overflow", () => {
    expect(() => replaceIntUnitJp("10000")).toThrow("Overflow");
    expect(() => replaceIntUnitJp("99999")).toThrow("Overflow");
  });
});
