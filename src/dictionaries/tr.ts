import type { DigitWords } from "../types";
import { LetterCase } from "../constants";

export const trDigitWords: DigitWords = {
  name: "Turkish",
  digits: ["sıfır", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"],
  join: " ",
  decimalPoint: " virgül ",
  minus: "eksi ",
  infinity: "sonsuz",
  letterCase: LetterCase.capitalize,
  // トルコ語のiの大文字は点が残るİで、既定の変換ではIになってしまう
  caseLocale: { capitalize: "tr", upper: "tr", lower: "tr" },
};
