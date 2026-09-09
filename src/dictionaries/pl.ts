import type { DigitWords } from "../types";
import { LetterCase } from "../constants";

export const plDigitWords: DigitWords = {
  name: "Polish",
  digits: ["zero", "jeden", "dwa", "trzy", "cztery", "pięć", "sześć", "siedem", "osiem", "dziewięć"],
  join: " ",
  decimalPoint: " przecinek ",
  minus: "minus ",
  infinity: "nieskończoność",
  letterCase: LetterCase.capitalize,
};
