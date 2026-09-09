import type { DigitWords } from "../types";
import { LetterCase } from "../constants";

export const viDigitWords: DigitWords = {
  name: "Vietnamese",
  digits: ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"],
  join: " ",
  decimalPoint: " phẩy ",
  minus: "âm ",
  infinity: "vô cực",
  letterCase: LetterCase.capitalize,
};
