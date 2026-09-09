import { InvalidArgumentError, InvalidInputError } from "../errors";
import type { DigitWords } from "../types";
import { LetterCase } from "../constants";
import { replaceDigits } from "./replaceDigits";

const plain: DigitWords = {
  name: "Plain",
  digits: ["ze", "on", "tw", "th", "fo", "fi", "si", "se", "ei", "ni"] as const,
  join: "-",
  decimalPoint: " dot ",
  minus: "neg ",
  infinity: "inf",
};

const cased: DigitWords = { ...plain, name: "Cased", letterCase: LetterCase.capitalize };

// 既定がlowerの辞書は元が大文字でないと変化が見えない
const shouty = ["ZE", "ON", "TW", "TH", "FO", "FI", "SI", "SE", "EI", "NI"] as const;

// BMP外にも大文字小文字を持つ文字があるので、デゼレット文字を1に当てる
const astral: DigitWords = {
  ...cased,
  name: "Astral",
  digits: ["ze", "\u{10428}\u{10428}", "tw", "th", "fo", "fi", "si", "se", "ei", "ni"],
};

// 大小を持たない文字がBMP外にあると、先頭を探す間の位置がずれやすい
const astralMinus: DigitWords = { ...cased, name: "AstralMinus", minus: "\u{1F600}" };

// ローマ数字のように符号が記号で、語中に大文字がある辞書
const symbolMinus: DigitWords = {
  ...plain,
  name: "SymbolMinus",
  minus: "-",
  decimalPoint: " Dot ",
  letterCase: LetterCase.capitalize,
};

// トルコ語のように、大文字にも小文字にもロケールが要る辞書
const dottedI: DigitWords = {
  ...plain,
  name: "DottedI",
  digits: ["iki", "IKI", "tw", "th", "fo", "fi", "si", "se", "ei", "ni"] as const,
  letterCase: LetterCase.capitalize,
  caseLocale: { capitalize: "tr", upper: "tr", lower: "tr" },
};

// ギリシャ語のように、全大文字のときだけロケールが要る辞書
const accented: DigitWords = {
  ...plain,
  name: "Accented",
  digits: ["ένα", "on", "tw", "th", "fo", "fi", "si", "se", "ei", "ni"] as const,
  letterCase: LetterCase.capitalize,
  caseLocale: { upper: "el" },
};

describe("replaceDigits", () => {
  test("converts each digit to the word of the dictionary", () => {
    expect(replaceDigits("0123456789", plain)).toBe("ze-on-tw-th-fo-fi-si-se-ei-ni");
  });

  test("joins with nothing when the dictionary has no separator", () => {
    expect(replaceDigits("123", { ...plain, join: "" })).toBe("ontwth");
  });

  test("keeps leading zeros", () => {
    expect(replaceDigits("0012", plain)).toBe("ze-ze-on-tw");
  });

  test("keeps trailing zeros in the decimal part", () => {
    expect(replaceDigits("1.500", plain)).toBe("on dot fi-ze-ze");
  });

  test("inserts the decimal point word only when there is a decimal part", () => {
    expect(replaceDigits("12", plain)).toBe("on-tw");
    expect(replaceDigits("1.2", plain)).toBe("on dot tw");
  });

  test("prefixes the minus word for negatives", () => {
    expect(replaceDigits("-12", plain)).toBe("neg on-tw");
    expect(replaceDigits(-1.2, plain)).toBe("neg on dot tw");
  });

  test("keeps the minus of negative zero", () => {
    expect(replaceDigits("-0", plain)).toBe("neg ze");
  });

  test("returns the infinity word", () => {
    expect(replaceDigits(Infinity, plain)).toBe("inf");
    expect(replaceDigits(-Infinity, plain)).toBe("neg inf");
  });

  test("expands exponential notation first", () => {
    expect(replaceDigits("1.2e3", plain)).toBe("on-tw-ze-ze");
  });

  test("normalizes full-width digits and separators", () => {
    expect(replaceDigits("１２３", plain)).toBe("on-tw-th");
    expect(replaceDigits("1,234", plain)).toBe("on-tw-th-fo");
  });

  test("has no digit limit", () => {
    expect(replaceDigits("1" + "0".repeat(400), plain)).toBe("on" + "-ze".repeat(400));
  });

  test("applies the default letter case of the dictionary in every mode", () => {
    expect(replaceDigits("12", cased)).toBe("On-tw");
    expect(replaceDigits(-Infinity, cased)).toBe("Neg inf");
    expect(replaceDigits("12", { ...plain, letterCase: LetterCase.upper })).toBe("ON-TW");
    expect(replaceDigits("12", { ...plain, digits: shouty, letterCase: LetterCase.lower })).toBe("on-tw");
  });

  test("uses the declared locale when falling back to the default letter case", () => {
    expect(replaceDigits("0", { ...dottedI, letterCase: LetterCase.upper })).toBe("İKİ");
  });

  test("applies the letter case to the minus word as well", () => {
    expect(replaceDigits("-12", cased)).toBe("Neg on-tw");
    expect(replaceDigits("-1.2", cased, LetterCase.upper)).toBe("NEG ON DOT TW");
  });

  test("capitalizes the first cased character, not the first character", () => {
    expect(replaceDigits("-12", symbolMinus)).toBe("-On-tw");
    expect(replaceDigits("12", symbolMinus)).toBe("On-tw");
    expect(replaceDigits("-12", astralMinus)).toBe("\u{1F600}On-tw");
  });

  test("returns the value as is when it has no cased character", () => {
    expect(replaceDigits(-Infinity, { ...symbolMinus, infinity: "∞" })).toBe("-∞");
  });

  test("leaves the rest of the value untouched when capitalizing", () => {
    expect(replaceDigits("1.2", symbolMinus)).toBe("On Dot tw");
  });

  test("capitalizes a character outside the basic multilingual plane", () => {
    expect(replaceDigits("1", astral)).toBe("\u{10400}\u{10428}");
  });

  test("leaves the words untouched when the dictionary has no letter case", () => {
    expect(replaceDigits("12", { ...plain, digits: shouty })).toBe("ON-TW");
  });

  test("overrides the default letter case", () => {
    expect(replaceDigits("12", cased, LetterCase.capitalize)).toBe("On-tw");
    expect(replaceDigits("12", cased, LetterCase.upper)).toBe("ON-TW");
    expect(replaceDigits("12", cased, LetterCase.lower)).toBe("on-tw");
    expect(replaceDigits(-Infinity, cased, LetterCase.upper)).toBe("NEG INF");
  });

  test("uses the locale the dictionary declares for that letter case", () => {
    expect(replaceDigits("0", dottedI, LetterCase.capitalize)).toBe("İki");
    expect(replaceDigits("0", dottedI, LetterCase.upper)).toBe("İKİ");
  });

  test("uses the declared locale when lowering as well", () => {
    expect(replaceDigits("1", dottedI, LetterCase.lower)).toBe("ıkı");
    expect(replaceDigits("1", { ...dottedI, caseLocale: undefined }, LetterCase.lower)).toBe("iki");
  });

  test("uses the default conversion for letter cases without a locale", () => {
    expect(replaceDigits("0", accented, LetterCase.capitalize)).toBe("Ένα");
    expect(replaceDigits("0", accented, LetterCase.upper)).toBe("ΕΝΑ");
  });

  test("throws when a letter case is given but the dictionary has none", () => {
    expect(() => replaceDigits("12", plain, LetterCase.upper)).toThrow(InvalidArgumentError);
    expect(() => replaceDigits("12", plain, LetterCase.upper)).toThrow(
      "Letter case is not supported for this conversion."
    );
  });

  test("throws for an unsupported letter case value", () => {
    // @ts-expect-error - Testing invalid input
    expect(() => replaceDigits("12", cased, "UPPER")).toThrow(InvalidArgumentError);
    // @ts-expect-error - Testing invalid input
    expect(() => replaceDigits("12", cased, "UPPER")).toThrow(
      "Expected one of capitalize, upper, lower for the letter case."
    );
    // @ts-expect-error - Testing invalid input
    expect(() => replaceDigits("12", cased, null)).toThrow(InvalidArgumentError);
  });

  test("throws the unsupported letter case error even when the dictionary has no letter case", () => {
    // @ts-expect-error - Testing invalid input
    expect(() => replaceDigits("12", plain, "UPPER")).toThrow(
      "Expected one of capitalize, upper, lower for the letter case."
    );
  });

  test("throws for an empty or non-numeric string", () => {
    expect(() => replaceDigits("abc", plain)).toThrow(InvalidInputError);
    expect(() => replaceDigits("", plain)).toThrow(InvalidInputError);
  });

  test("throws for a value that is neither a number nor a string", () => {
    // @ts-expect-error - Testing invalid input
    expect(() => replaceDigits(null, plain)).toThrow(InvalidArgumentError);
    // @ts-expect-error - Testing invalid input
    expect(() => replaceDigits([1], plain)).toThrow(InvalidArgumentError);
  });
});
