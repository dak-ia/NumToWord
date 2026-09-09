import type { DigitWords } from "../types";
import { LetterCase } from "../constants";

export const deDigitWords: DigitWords = {
  name: "German",
  digits: ["null", "eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun"],
  join: " ",
  decimalPoint: " Komma ",
  minus: "minus ",
  infinity: "unendlich",
  letterCase: LetterCase.capitalize,
};
