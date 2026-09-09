import type { DigitWords } from "../types";
import { LetterCase } from "../constants";

export const ruDigitWords: DigitWords = {
  name: "Russian",
  digits: ["ноль", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"],
  join: " ",
  decimalPoint: " запятая ",
  minus: "минус ",
  infinity: "бесконечность",
  letterCase: LetterCase.capitalize,
};
