import { toJp } from "./toJp";

describe("toJp", () => {
  test("basic numerals", () => {
    expect(toJp("0")).toBe("〇");
    expect(toJp("1")).toBe("一");
    expect(toJp("2")).toBe("二");
    expect(toJp("3")).toBe("三");
    expect(toJp("4")).toBe("四");
    expect(toJp("5")).toBe("五");
    expect(toJp("6")).toBe("六");
    expect(toJp("7")).toBe("七");
    expect(toJp("8")).toBe("八");
    expect(toJp("9")).toBe("九");
    expect(toJp("10")).toBe("十");
    expect(toJp("11")).toBe("十一");
    expect(toJp("20")).toBe("二十");
    expect(toJp("30")).toBe("三十");
    expect(toJp("40")).toBe("四十");
    expect(toJp("99")).toBe("九十九");
  });

  test("simple hundreds", () => {
    expect(toJp("100")).toBe("百");
    expect(toJp("200")).toBe("二百");
    expect(toJp("900")).toBe("九百");
  });

  test("complex hundreds", () => {
    expect(toJp("101")).toBe("百一");
    expect(toJp("110")).toBe("百十");
    expect(toJp("111")).toBe("百十一");
    expect(toJp("202")).toBe("二百二");
    expect(toJp("220")).toBe("二百二十");
    expect(toJp("222")).toBe("二百二十二");
    expect(toJp("123")).toBe("百二十三");
    expect(toJp("999")).toBe("九百九十九");
  });

  test("simple thousands", () => {
    expect(toJp("1000")).toBe("千");
    expect(toJp("2000")).toBe("二千");
    expect(toJp("9000")).toBe("九千");
  });

  test("complex thousands", () => {
    expect(toJp("1001")).toBe("千一");
    expect(toJp("1010")).toBe("千十");
    expect(toJp("1011")).toBe("千十一");
    expect(toJp("1100")).toBe("千百");
    expect(toJp("1101")).toBe("千百一");
    expect(toJp("1110")).toBe("千百十");
    expect(toJp("1111")).toBe("千百十一");
    expect(toJp("2002")).toBe("二千二");
    expect(toJp("2020")).toBe("二千二十");
    expect(toJp("2022")).toBe("二千二十二");
    expect(toJp("2200")).toBe("二千二百");
    expect(toJp("2201")).toBe("二千二百一");
    expect(toJp("2220")).toBe("二千二百二十");
    expect(toJp("2222")).toBe("二千二百二十二");
    expect(toJp("1234")).toBe("千二百三十四");
    expect(toJp("9999")).toBe("九千九百九十九");
  });

  test("simple ten thousands", () => {
    expect(toJp("10000")).toBe("一万");
    expect(toJp("20000")).toBe("二万");
    expect(toJp("90000")).toBe("九万");
  });

  test("complex ten thousands", () => {
    expect(toJp("10001")).toBe("一万一");
    expect(toJp("10010")).toBe("一万十");
    expect(toJp("10011")).toBe("一万十一");
    expect(toJp("10100")).toBe("一万百");
    expect(toJp("10101")).toBe("一万百一");
    expect(toJp("10110")).toBe("一万百十");
    expect(toJp("10111")).toBe("一万百十一");
    expect(toJp("11000")).toBe("一万千");
    expect(toJp("11001")).toBe("一万千一");
    expect(toJp("11010")).toBe("一万千十");
    expect(toJp("11011")).toBe("一万千十一");
    expect(toJp("11100")).toBe("一万千百");
    expect(toJp("11101")).toBe("一万千百一");
    expect(toJp("11110")).toBe("一万千百十");
    expect(toJp("11111")).toBe("一万千百十一");
    expect(toJp("20002")).toBe("二万二");
    expect(toJp("20020")).toBe("二万二十");
    expect(toJp("20022")).toBe("二万二十二");
    expect(toJp("20200")).toBe("二万二百");
    expect(toJp("20202")).toBe("二万二百二");
    expect(toJp("20220")).toBe("二万二百二十");
    expect(toJp("20222")).toBe("二万二百二十二");
    expect(toJp("22000")).toBe("二万二千");
    expect(toJp("22002")).toBe("二万二千二");
    expect(toJp("22020")).toBe("二万二千二十");
    expect(toJp("22022")).toBe("二万二千二十二");
    expect(toJp("22200")).toBe("二万二千二百");
    expect(toJp("22202")).toBe("二万二千二百二");
    expect(toJp("22220")).toBe("二万二千二百二十");
    expect(toJp("22222")).toBe("二万二千二百二十二");
    expect(toJp("12345")).toBe("一万二千三百四十五");
    expect(toJp("99999")).toBe("九万九千九百九十九");
  });

  test("large numbers patterns", () => {
    expect(toJp("100000")).toBe("十万");
    expect(toJp("1000000")).toBe("百万");
    expect(toJp("100000000")).toBe("一億");
    expect(toJp("20000")).toBe("二万");
    expect(toJp("200000")).toBe("二十万");
    expect(toJp("2000000")).toBe("二百万");
    expect(toJp("200000000")).toBe("二億");
    expect(toJp("100001")).toBe("十万一");
    expect(toJp("123456")).toBe("十二万三千四百五十六");
    expect(toJp("123456789")).toBe("一億二千三百四十五万六千七百八十九");
    expect(toJp("987654321")).toBe("九億八千七百六十五万四千三百二十一");
  });

  test("decimal numbers", () => {
    expect(toJp("1.1")).toBe("一・一");
    expect(toJp("1.11")).toBe("一・一一");
    expect(toJp("1.111")).toBe("一・一一一");
    expect(toJp("1.5")).toBe("一・五");
    expect(toJp("12.34")).toBe("十二・三四");
    expect(toJp("123.456")).toBe("百二十三・四五六");
    expect(toJp("0.1")).toBe("〇・一");
    expect(toJp("1.23")).toBe("一・二三");
    expect(toJp("99.99")).toBe("九十九・九九");
  });

  test("numbers with zeros", () => {
    expect(toJp("0")).toBe("〇");
    expect(toJp("00")).toBe("〇");
    expect(toJp("0.0")).toBe("〇・〇");
    expect(toJp("0.00")).toBe("〇・〇〇");
    expect(toJp("00.0")).toBe("〇・〇");
  });

  test("zeros in decimal part", () => {
    expect(toJp("1.0")).toBe("一・〇");
    expect(toJp("1.00")).toBe("一・〇〇");
    expect(toJp("10.01")).toBe("十・〇一");
    expect(toJp("1.0000")).toBe("一・〇〇〇〇");
    expect(toJp("0.0001")).toBe("〇・〇〇〇一");
    expect(toJp("0.001")).toBe("〇・〇〇一");
  });

  test("invalid input", () => {
    expect(() => toJp("1" + "0".repeat(73))).toThrow("Overflow");
    expect(() => toJp("abc")).toThrow("NaN");
    expect(() => toJp("")).toThrow("Invalid argument");
    expect(() => toJp(null)).toThrow("Invalid argument");
    expect(() => toJp(undefined)).toThrow("Invalid argument");
    expect(() => toJp("-1")).toThrow();
    expect(() => toJp("-123")).toThrow();
  });
});
