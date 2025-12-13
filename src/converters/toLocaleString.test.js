import { toLocaleString } from "./toLocaleString";

describe("toLocaleString", () => {
  test("routes to Si converter", () => {
    expect(toLocaleString("si", "1000")).toBe("1K");
    expect(toLocaleString("SI", "1000")).toBe("1K");
  });

  test("routes to En converter", () => {
    expect(toLocaleString("en", "123")).toBe("One hundred twenty-three");
    expect(toLocaleString("EN", "123")).toBe("One hundred twenty-three");
    expect(toLocaleString("english", "123")).toBe("One hundred twenty-three");
    expect(toLocaleString("ENGLISH", "123")).toBe("One hundred twenty-three");
  });

  test("routes to Jp converter", () => {
    expect(toLocaleString("jp", "123")).toBe("百二十三");
    expect(toLocaleString("JP", "123")).toBe("百二十三");
    expect(toLocaleString("japanese", "123")).toBe("百二十三");
    expect(toLocaleString("JAPANESE", "123")).toBe("百二十三");
  });

  test("routes to JpDaiji converter", () => {
    expect(toLocaleString("jpdaiji", "123")).toBe("壱陌弐拾参");
    expect(toLocaleString("JPDAIJI", "123")).toBe("壱陌弐拾参");
    expect(toLocaleString("daiji", "123")).toBe("壱陌弐拾参");
    expect(toLocaleString("DAIJI", "123")).toBe("壱陌弐拾参");
  });

  test("throws error for invalid locale", () => {
    expect(() => toLocaleString("invalid", "123")).toThrow("Invalid locale");
    expect(() => toLocaleString("fr", "123")).toThrow("Invalid locale");
    expect(() => toLocaleString("", "123")).toThrow("Invalid argument");
    expect(() => toLocaleString(null, "123")).toThrow("Invalid argument");
    expect(() => toLocaleString(undefined, "123")).toThrow("Invalid argument");
  });

  test("throws error for empty number", () => {
    expect(() => toLocaleString("en", "")).toThrow("Invalid argument");
    expect(() => toLocaleString("en", null)).toThrow("Invalid argument");
    expect(() => toLocaleString("en", undefined)).toThrow("Invalid argument");
  });
});
