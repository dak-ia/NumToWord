import { convertToStrNum, sliceTo1digitNum, sliceTo3digitNum, sliceTo4digitNum, splitNum } from "./helpers";

describe("convertToStrNum", () => {
  test("basic numbers", () => {
    expect(convertToStrNum("123")).toBe("123");
    expect(convertToStrNum("0")).toBe("0");
    expect(convertToStrNum("999")).toBe("999");
  });

  test("full-width to half-width", () => {
    expect(convertToStrNum("１２３")).toBe("123");
    expect(convertToStrNum("０")).toBe("0");
    expect(convertToStrNum("９９９")).toBe("999");
  });

  test("decimal numbers", () => {
    expect(convertToStrNum("123.456")).toBe("123.456");
    expect(convertToStrNum("0.5")).toBe("0.5");
    expect(convertToStrNum(".5")).toBe("0.5");
    expect(convertToStrNum("5.")).toBe("5.0");
    expect(convertToStrNum("１２３．４５６")).toBe("123.456");
  });

  test("comma removal", () => {
    expect(convertToStrNum("1,234")).toBe("1234");
    expect(convertToStrNum("1,234,567")).toBe("1234567");
    expect(convertToStrNum("１，２３４")).toBe("1234");
  });

  test("whitespace removal", () => {
    expect(convertToStrNum(" 123 ")).toBe("123");
    expect(convertToStrNum("1 2 3")).toBe("123");
  });

  test("number input", () => {
    expect(convertToStrNum(123)).toBe("123");
    expect(convertToStrNum(123.456)).toBe("123.456");
  });

  test("invalid input", () => {
    expect(() => convertToStrNum("abc")).toThrow("NaN");
    expect(() => convertToStrNum("12a34")).toThrow("NaN");
    expect(() => convertToStrNum("1.2.3")).toThrow("NaN");
    expect(() => convertToStrNum(".")).toThrow("NaN");
    expect(() => convertToStrNum("..")).toThrow("NaN");
  });
});

describe("splitNum", () => {
  test("integer only", () => {
    expect(splitNum("123")).toEqual({ integer: "123", decimal: "" });
    expect(splitNum("0")).toEqual({ integer: "0", decimal: "" });
    expect(splitNum("999")).toEqual({ integer: "999", decimal: "" });
  });

  test("with decimal", () => {
    expect(splitNum("123.456")).toEqual({ integer: "123", decimal: "456" });
    expect(splitNum("0.5")).toEqual({ integer: "0", decimal: "5" });
    expect(splitNum("999.999")).toEqual({ integer: "999", decimal: "999" });
  });

  test("edge cases", () => {
    expect(splitNum(".5")).toEqual({ integer: "0", decimal: "5" });
    expect(splitNum("5.")).toEqual({ integer: "5", decimal: "0" });
  });

  test("invalid input", () => {
    expect(() => splitNum("")).toThrow("Invalid argument: expected a number or string");
    expect(() => splitNum(null)).toThrow("Invalid argument: expected a number or string");
    expect(() => splitNum(undefined)).toThrow("Invalid argument: expected a number or string");
    expect(() => splitNum("abc")).toThrow("NaN");
  });
});

describe("sliceTo1digitNum", () => {
  test("basic slicing", () => {
    expect(sliceTo1digitNum("123")).toEqual(["1", "2", "3"]);
    expect(sliceTo1digitNum("0")).toEqual(["0"]);
    expect(sliceTo1digitNum("999")).toEqual(["9", "9", "9"]);
    expect(sliceTo1digitNum("12345")).toEqual(["1", "2", "3", "4", "5"]);
  });
});

describe("sliceTo3digitNum", () => {
  test("basic slicing", () => {
    expect(sliceTo3digitNum("123")).toEqual(["123"]);
    expect(sliceTo3digitNum("1234")).toEqual(["1", "234"]);
    expect(sliceTo3digitNum("123456")).toEqual(["123", "456"]);
    expect(sliceTo3digitNum("1234567")).toEqual(["1", "234", "567"]);
    expect(sliceTo3digitNum("12345678")).toEqual(["12", "345", "678"]);
  });

  test("short numbers", () => {
    expect(sliceTo3digitNum("1")).toEqual(["1"]);
    expect(sliceTo3digitNum("12")).toEqual(["12"]);
  });
});

describe("sliceTo4digitNum", () => {
  test("basic slicing", () => {
    expect(sliceTo4digitNum("1234")).toEqual(["1234"]);
    expect(sliceTo4digitNum("12345")).toEqual(["1", "2345"]);
    expect(sliceTo4digitNum("12345678")).toEqual(["1234", "5678"]);
    expect(sliceTo4digitNum("123456789")).toEqual(["1", "2345", "6789"]);
  });

  test("short numbers", () => {
    expect(sliceTo4digitNum("1")).toEqual(["1"]);
    expect(sliceTo4digitNum("123")).toEqual(["123"]);
  });
});
