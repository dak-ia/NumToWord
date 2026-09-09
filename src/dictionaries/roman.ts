import type { DigitWords } from "../types";
import { LetterCase } from "../constants";

export const romanDigitWords: DigitWords = {
  name: "Roman",
  label: "Roman numerals",
  // ローマ数字にゼロはないため、中世の計算書で使われたN（nulla）を当てる
  digits: ["n", "i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
  // 区切りがないとIIとIIIが繋がってIIIIIになり、元の桁を読み取れない
  join: " ",
  decimalPoint: " . ",
  minus: "-",
  infinity: "∞",
  letterCase: LetterCase.upper,
};
