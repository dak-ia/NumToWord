import { toSi } from "./toSi.js";

describe("toSi", () => {
  test("numbers less than 1000", () => {
    expect(toSi("0")).toBe("0");
    expect(toSi("1")).toBe("1");
    expect(toSi("9")).toBe("9");
    expect(toSi("10")).toBe("10");
    expect(toSi("99")).toBe("99");
    expect(toSi("100")).toBe("100");
    expect(toSi("999")).toBe("999");
  });

  test("thousands (K)", () => {
    expect(toSi("1000")).toBe("1K");
    expect(toSi("1500")).toBe("1.5K");
    expect(toSi("2000")).toBe("2K");
    expect(toSi("9999")).toBe("9.999K");
    expect(toSi("10000")).toBe("10K");
    expect(toSi("99999")).toBe("99.999K");
    expect(toSi("100000")).toBe("100K");
    expect(toSi("999999")).toBe("999.999K");
  });

  test("quetta bytes (Q)", () => {
    expect(toSi("1000000000000000000000000000000")).toBe("1Q");
    expect(toSi("1500000000000000000000000000000")).toBe("1.5Q");
    expect(toSi("2000000000000000000000000000000")).toBe("2Q");
    expect(toSi("123456789012345678901234567890123")).toBe("123.456789012345678901234567890123Q");
    expect(toSi("987654321098765432109876543210987")).toBe("987.654321098765432109876543210987Q");
  });

  test("decimal inputs", () => {
    expect(toSi("1.5")).toBe("1.5");
    expect(toSi("999.999")).toBe("999.999");
    expect(toSi("1500.5")).toBe("1.5005K");
    expect(toSi("0.00")).toBe("0");
    expect(toSi("00.00")).toBe("0");
    expect(toSi("1.0000")).toBe("1");
    expect(toSi("0.0001")).toBe("0.0001");
    expect(toSi("0.00010")).toBe("0.0001");
  });

  test("invalid input", () => {
    expect(() => toSi("1" + "0".repeat(33))).toThrow("Overflow");
    expect(() => toSi("abc")).toThrow("NaN");
    expect(() => toSi("")).toThrow("Invalid argument");
    expect(() => toSi(null)).toThrow("Invalid argument");
    expect(() => toSi(undefined)).toThrow("Invalid argument");
    expect(() => toSi("-1")).toThrow();
    expect(() => toSi("-123")).toThrow();
  });
});
