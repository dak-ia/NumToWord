import type { DigitWords } from "../types";
import { LetterCase } from "../constants";

export const idDigitWords: DigitWords = {
  name: "Indonesian",
  digits: ["nol", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"],
  join: " ",
  decimalPoint: " koma ",
  minus: "minus ",
  infinity: "tak hingga",
  letterCase: LetterCase.capitalize,
};
