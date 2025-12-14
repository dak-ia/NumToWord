import { toEn } from "./toEn";

describe("toEn", () => {
  test("basic numerals", () => {
    expect(toEn("0")).toBe("Zero");
    expect(toEn("1")).toBe("One");
    expect(toEn("2")).toBe("Two");
    expect(toEn("3")).toBe("Three");
    expect(toEn("4")).toBe("Four");
    expect(toEn("5")).toBe("Five");
    expect(toEn("6")).toBe("Six");
    expect(toEn("7")).toBe("Seven");
    expect(toEn("8")).toBe("Eight");
    expect(toEn("9")).toBe("Nine");
    expect(toEn("10")).toBe("Ten");
    expect(toEn("11")).toBe("Eleven");
    expect(toEn("12")).toBe("Twelve");
    expect(toEn("13")).toBe("Thirteen");
    expect(toEn("14")).toBe("Fourteen");
    expect(toEn("15")).toBe("Fifteen");
    expect(toEn("16")).toBe("Sixteen");
    expect(toEn("17")).toBe("Seventeen");
    expect(toEn("18")).toBe("Eighteen");
    expect(toEn("19")).toBe("Nineteen");
  });

  test("simple tens", () => {
    expect(toEn("20")).toBe("Twenty");
    expect(toEn("30")).toBe("Thirty");
    expect(toEn("40")).toBe("Forty");
    expect(toEn("50")).toBe("Fifty");
    expect(toEn("60")).toBe("Sixty");
    expect(toEn("70")).toBe("Seventy");
    expect(toEn("80")).toBe("Eighty");
    expect(toEn("90")).toBe("Ninety");
  });

  test("complex tens", () => {
    expect(toEn("21")).toBe("Twenty-one");
    expect(toEn("22")).toBe("Twenty-two");
    expect(toEn("35")).toBe("Thirty-five");
    expect(toEn("47")).toBe("Forty-seven");
    expect(toEn("59")).toBe("Fifty-nine");
    expect(toEn("68")).toBe("Sixty-eight");
    expect(toEn("76")).toBe("Seventy-six");
    expect(toEn("84")).toBe("Eighty-four");
    expect(toEn("99")).toBe("Ninety-nine");
  });

  test("simple hundreds", () => {
    expect(toEn("100")).toBe("One hundred");
    expect(toEn("200")).toBe("Two hundred");
    expect(toEn("900")).toBe("Nine hundred");
  });

  test("complex hundreds", () => {
    expect(toEn("101")).toBe("One hundred one");
    expect(toEn("110")).toBe("One hundred ten");
    expect(toEn("111")).toBe("One hundred eleven");
    expect(toEn("119")).toBe("One hundred nineteen");
    expect(toEn("120")).toBe("One hundred twenty");
    expect(toEn("121")).toBe("One hundred twenty-one");
    expect(toEn("202")).toBe("Two hundred two");
    expect(toEn("220")).toBe("Two hundred twenty");
    expect(toEn("222")).toBe("Two hundred twenty-two");
    expect(toEn("123")).toBe("One hundred twenty-three");
    expect(toEn("999")).toBe("Nine hundred ninety-nine");
  });

  test("simple thousands", () => {
    expect(toEn("1000")).toBe("One thousand");
    expect(toEn("2000")).toBe("Two thousand");
    expect(toEn("9000")).toBe("Nine thousand");
  });

  test("complex thousands", () => {
    expect(toEn("1001")).toBe("One thousand one");
    expect(toEn("1010")).toBe("One thousand ten");
    expect(toEn("1011")).toBe("One thousand eleven");
    expect(toEn("1100")).toBe("One thousand one hundred");
    expect(toEn("1101")).toBe("One thousand one hundred one");
    expect(toEn("1110")).toBe("One thousand one hundred ten");
    expect(toEn("1111")).toBe("One thousand one hundred eleven");
    expect(toEn("1020")).toBe("One thousand twenty");
    expect(toEn("1021")).toBe("One thousand twenty-one");
    expect(toEn("1234")).toBe("One thousand two hundred thirty-four");
    expect(toEn("2002")).toBe("Two thousand two");
    expect(toEn("2020")).toBe("Two thousand twenty");
    expect(toEn("2022")).toBe("Two thousand twenty-two");
    expect(toEn("2200")).toBe("Two thousand two hundred");
    expect(toEn("2202")).toBe("Two thousand two hundred two");
    expect(toEn("2220")).toBe("Two thousand two hundred twenty");
    expect(toEn("2222")).toBe("Two thousand two hundred twenty-two");
    expect(toEn("9999")).toBe("Nine thousand nine hundred ninety-nine");
  });

  test("ten thousands", () => {
    expect(toEn("10000")).toBe("Ten thousand");
    expect(toEn("20000")).toBe("Twenty thousand");
    expect(toEn("11000")).toBe("Eleven thousand");
    expect(toEn("12345")).toBe("Twelve thousand three hundred forty-five");
    expect(toEn("99999")).toBe("Ninety-nine thousand nine hundred ninety-nine");
  });

  test("hundred thousands", () => {
    expect(toEn("100000")).toBe("One hundred thousand");
    expect(toEn("200000")).toBe("Two hundred thousand");
    expect(toEn("123456")).toBe("One hundred twenty-three thousand four hundred fifty-six");
    expect(toEn("999999")).toBe("Nine hundred ninety-nine thousand nine hundred ninety-nine");
  });

  test("millions", () => {
    expect(toEn("1000000")).toBe("One million");
    expect(toEn("2000000")).toBe("Two million");
    expect(toEn("10000000")).toBe("Ten million");
    expect(toEn("100000000")).toBe("One hundred million");
  });

  test("large numbers patterns", () => {
    expect(toEn("123456789")).toBe(
      "One hundred twenty-three million four hundred fifty-six thousand seven hundred eighty-nine"
    );
    expect(toEn("987654321")).toBe(
      "Nine hundred eighty-seven million six hundred fifty-four thousand three hundred twenty-one"
    );
    expect(toEn("1000000000")).toBe("One billion");
    expect(toEn("1000000001")).toBe("One billion one");
  });

  test("decimal numbers", () => {
    expect(toEn("0.1")).toBe("Zero point one");
    expect(toEn("0.5")).toBe("Zero point five");
    expect(toEn("1.1")).toBe("One point one");
    expect(toEn("1.5")).toBe("One point five");
    expect(toEn("1.23")).toBe("One point two three");
    expect(toEn("12.34")).toBe("Twelve point three four");
    expect(toEn("123.456")).toBe("One hundred twenty-three point four five six");
    expect(toEn("99.99")).toBe("Ninety-nine point nine nine");
  });

  test("numbers with zeros", () => {
    expect(toEn("0")).toBe("Zero");
    expect(toEn("00")).toBe("Zero");
    expect(toEn("0.0")).toBe("Zero point zero");
    expect(toEn("0.00")).toBe("Zero point zero zero");
    expect(toEn("00.0")).toBe("Zero point zero");
  });

  test("zeros in decimal part", () => {
    expect(toEn("1.0")).toBe("One point zero");
    expect(toEn("1.00")).toBe("One point zero zero");
    expect(toEn("10.01")).toBe("Ten point zero one");
    expect(toEn("1.0000")).toBe("One point zero zero zero zero");
    expect(toEn("0.0001")).toBe("Zero point zero zero zero one");
    expect(toEn("0.001")).toBe("Zero point zero zero one");
  });

  test("invalid input", () => {
    expect(() => toEn("1" + "0".repeat(309))).toThrow("Overflow");
    expect(() => toEn("abc")).toThrow("NaN");
    expect(() => toEn("")).toThrow("Invalid argument");
    // @ts-expect-error - Testing invalid input
    expect(() => toEn(null)).toThrow("Invalid argument");
    // @ts-expect-error - Testing invalid input
    expect(() => toEn(undefined)).toThrow("Invalid argument");
    expect(() => toEn("-1")).toThrow();
    expect(() => toEn("-123")).toThrow();
  });
});
