import { toJpDaiji } from "./toJpDaiji";

describe("toJpDaiji", () => {
  test("basic numerals", () => {
    expect(toJpDaiji("0")).toBe("零");
    expect(toJpDaiji("1")).toBe("壱");
    expect(toJpDaiji("2")).toBe("弐");
    expect(toJpDaiji("3")).toBe("参");
    expect(toJpDaiji("4")).toBe("肆");
    expect(toJpDaiji("5")).toBe("伍");
    expect(toJpDaiji("6")).toBe("陸");
    expect(toJpDaiji("7")).toBe("漆");
    expect(toJpDaiji("8")).toBe("捌");
    expect(toJpDaiji("9")).toBe("玖");
    expect(toJpDaiji("10")).toBe("壱拾");
    expect(toJpDaiji("11")).toBe("壱拾壱");
    expect(toJpDaiji("20")).toBe("弐拾");
    expect(toJpDaiji("30")).toBe("参拾");
    expect(toJpDaiji("40")).toBe("肆拾");
    expect(toJpDaiji("99")).toBe("玖拾玖");
  });

  test("simple hundreds", () => {
    expect(toJpDaiji("100")).toBe("壱陌");
    expect(toJpDaiji("200")).toBe("弐陌");
    expect(toJpDaiji("900")).toBe("玖陌");
  });

  test("complex hundreds", () => {
    expect(toJpDaiji("101")).toBe("壱陌壱");
    expect(toJpDaiji("110")).toBe("壱陌壱拾");
    expect(toJpDaiji("111")).toBe("壱陌壱拾壱");
    expect(toJpDaiji("202")).toBe("弐陌弐");
    expect(toJpDaiji("220")).toBe("弐陌弐拾");
    expect(toJpDaiji("222")).toBe("弐陌弐拾弐");
    expect(toJpDaiji("123")).toBe("壱陌弐拾参");
    expect(toJpDaiji("999")).toBe("玖陌玖拾玖");
  });

  test("simple thousands", () => {
    expect(toJpDaiji("1000")).toBe("壱阡");
    expect(toJpDaiji("2000")).toBe("弐阡");
    expect(toJpDaiji("9000")).toBe("玖阡");
  });

  test("complex thousands", () => {
    expect(toJpDaiji("1001")).toBe("壱阡壱");
    expect(toJpDaiji("1010")).toBe("壱阡壱拾");
    expect(toJpDaiji("1011")).toBe("壱阡壱拾壱");
    expect(toJpDaiji("1100")).toBe("壱阡壱陌");
    expect(toJpDaiji("1101")).toBe("壱阡壱陌壱");
    expect(toJpDaiji("1110")).toBe("壱阡壱陌壱拾");
    expect(toJpDaiji("1111")).toBe("壱阡壱陌壱拾壱");
    expect(toJpDaiji("2002")).toBe("弐阡弐");
    expect(toJpDaiji("2020")).toBe("弐阡弐拾");
    expect(toJpDaiji("2022")).toBe("弐阡弐拾弐");
    expect(toJpDaiji("2200")).toBe("弐阡弐陌");
    expect(toJpDaiji("2201")).toBe("弐阡弐陌壱");
    expect(toJpDaiji("2220")).toBe("弐阡弐陌弐拾");
    expect(toJpDaiji("2222")).toBe("弐阡弐陌弐拾弐");
    expect(toJpDaiji("1234")).toBe("壱阡弐陌参拾肆");
    expect(toJpDaiji("9999")).toBe("玖阡玖陌玖拾玖");
  });

  test("simple ten thousands", () => {
    expect(toJpDaiji("10000")).toBe("壱萬");
    expect(toJpDaiji("20000")).toBe("弐萬");
    expect(toJpDaiji("90000")).toBe("玖萬");
  });

  test("complex ten thousands", () => {
    expect(toJpDaiji("10001")).toBe("壱萬壱");
    expect(toJpDaiji("10010")).toBe("壱萬壱拾");
    expect(toJpDaiji("10011")).toBe("壱萬壱拾壱");
    expect(toJpDaiji("10100")).toBe("壱萬壱陌");
    expect(toJpDaiji("10101")).toBe("壱萬壱陌壱");
    expect(toJpDaiji("10110")).toBe("壱萬壱陌壱拾");
    expect(toJpDaiji("10111")).toBe("壱萬壱陌壱拾壱");
    expect(toJpDaiji("11000")).toBe("壱萬壱阡");
    expect(toJpDaiji("11001")).toBe("壱萬壱阡壱");
    expect(toJpDaiji("11010")).toBe("壱萬壱阡壱拾");
    expect(toJpDaiji("11011")).toBe("壱萬壱阡壱拾壱");
    expect(toJpDaiji("11100")).toBe("壱萬壱阡壱陌");
    expect(toJpDaiji("11101")).toBe("壱萬壱阡壱陌壱");
    expect(toJpDaiji("11110")).toBe("壱萬壱阡壱陌壱拾");
    expect(toJpDaiji("11111")).toBe("壱萬壱阡壱陌壱拾壱");
    expect(toJpDaiji("20002")).toBe("弐萬弐");
    expect(toJpDaiji("20020")).toBe("弐萬弐拾");
    expect(toJpDaiji("20022")).toBe("弐萬弐拾弐");
    expect(toJpDaiji("20200")).toBe("弐萬弐陌");
    expect(toJpDaiji("20202")).toBe("弐萬弐陌弐");
    expect(toJpDaiji("20220")).toBe("弐萬弐陌弐拾");
    expect(toJpDaiji("20222")).toBe("弐萬弐陌弐拾弐");
    expect(toJpDaiji("22000")).toBe("弐萬弐阡");
    expect(toJpDaiji("22002")).toBe("弐萬弐阡弐");
    expect(toJpDaiji("22020")).toBe("弐萬弐阡弐拾");
    expect(toJpDaiji("22022")).toBe("弐萬弐阡弐拾弐");
    expect(toJpDaiji("22200")).toBe("弐萬弐阡弐陌");
    expect(toJpDaiji("22202")).toBe("弐萬弐阡弐陌弐");
    expect(toJpDaiji("22220")).toBe("弐萬弐阡弐陌弐拾");
    expect(toJpDaiji("22222")).toBe("弐萬弐阡弐陌弐拾弐");
    expect(toJpDaiji("12345")).toBe("壱萬弐阡参陌肆拾伍");
    expect(toJpDaiji("99999")).toBe("玖萬玖阡玖陌玖拾玖");
  });

  test("large numbers patterns", () => {
    expect(toJpDaiji("100000")).toBe("壱拾萬");
    expect(toJpDaiji("1000000")).toBe("壱陌萬");
    expect(toJpDaiji("100000000")).toBe("壱億");
    expect(toJpDaiji("20000")).toBe("弐萬");
    expect(toJpDaiji("200000")).toBe("弐拾萬");
    expect(toJpDaiji("2000000")).toBe("弐陌萬");
    expect(toJpDaiji("200000000")).toBe("弐億");
    expect(toJpDaiji("100001")).toBe("壱拾萬壱");
    expect(toJpDaiji("123456")).toBe("壱拾弐萬参阡肆陌伍拾陸");
    expect(toJpDaiji("123456789")).toBe("壱億弐阡参陌肆拾伍萬陸阡漆陌捌拾玖");
    expect(toJpDaiji("987654321")).toBe("玖億捌阡漆陌陸拾伍萬肆阡参陌弐拾壱");
  });

  test("decimal numbers", () => {
    expect(toJpDaiji("1.1")).toBe("壱・壱");
    expect(toJpDaiji("1.11")).toBe("壱・壱壱");
    expect(toJpDaiji("1.111")).toBe("壱・壱壱壱");
    expect(toJpDaiji("1.5")).toBe("壱・伍");
    expect(toJpDaiji("12.34")).toBe("壱拾弐・参肆");
    expect(toJpDaiji("123.456")).toBe("壱陌弐拾参・肆伍陸");
    expect(toJpDaiji("0.1")).toBe("零・壱");
    expect(toJpDaiji("1.23")).toBe("壱・弐参");
    expect(toJpDaiji("99.99")).toBe("玖拾玖・玖玖");
  });

  test("numbers with zeros", () => {
    expect(toJpDaiji("0")).toBe("零");
    expect(toJpDaiji("00")).toBe("零");
    expect(toJpDaiji("0.0")).toBe("零・零");
    expect(toJpDaiji("0.00")).toBe("零・零零");
    expect(toJpDaiji("00.0")).toBe("零・零");
  });

  test("zeros in decimal part", () => {
    expect(toJpDaiji("1.0")).toBe("壱・零");
    expect(toJpDaiji("1.00")).toBe("壱・零零");
    expect(toJpDaiji("10.01")).toBe("壱拾・零壱");
    expect(toJpDaiji("1.0000")).toBe("壱・零零零零");
    expect(toJpDaiji("0.0001")).toBe("零・零零零壱");
    expect(toJpDaiji("0.001")).toBe("零・零零壱");
  });

  test("invalid input", () => {
    expect(() => toJpDaiji("1" + "0".repeat(73))).toThrow("Overflow");
    expect(() => toJpDaiji("abc")).toThrow("NaN");
    expect(() => toJpDaiji("")).toThrow("Invalid argument");
    expect(() => toJpDaiji(null)).toThrow("Invalid argument");
    expect(() => toJpDaiji(undefined)).toThrow("Invalid argument");
    expect(() => toJpDaiji("-1")).toThrow();
    expect(() => toJpDaiji("-123")).toThrow();
  });
});
