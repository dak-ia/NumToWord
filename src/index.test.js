import NumToWord from "./index.js";

describe("index", () => {
  test("exports version", () => {
    expect(NumToWord.version).toBe("0.1.0-test");
  });

  test("exports toEn function", () => {
    expect(typeof NumToWord.toEn).toBe("function");
    expect(NumToWord.toEn("123")).toBe("One hundred twenty-three");
  });

  test("exports toJp function", () => {
    expect(typeof NumToWord.toJp).toBe("function");
    expect(NumToWord.toJp("123")).toBe("百二十三");
  });

  test("exports toJpDaiji function", () => {
    expect(typeof NumToWord.toJpDaiji).toBe("function");
    expect(NumToWord.toJpDaiji("123")).toBe("壱陌弐拾参");
  });

  test("exports toSi function", () => {
    expect(typeof NumToWord.toSi).toBe("function");
    expect(NumToWord.toSi("1000")).toBe("1K");
  });

  test("exports toLocaleString function", () => {
    expect(typeof NumToWord.toLocaleString).toBe("function");
    expect(NumToWord.toLocaleString("en", "123")).toBe("One hundred twenty-three");
  });
});
