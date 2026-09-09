import type { DigitWords } from "../types";
import { LetterCase } from "../constants";

export const nlDigitWords: DigitWords = {
  name: "Dutch",
  digits: ["nul", "een", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen"],
  join: " ",
  decimalPoint: " komma ",
  minus: "min ",
  infinity: "oneindig",
  letterCase: LetterCase.capitalize,
};
