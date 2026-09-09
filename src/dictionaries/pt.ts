import type { DigitWords } from "../types";
import { LetterCase } from "../constants";

export const ptDigitWords: DigitWords = {
  name: "Portuguese",
  digits: ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"],
  join: " ",
  decimalPoint: " vírgula ",
  minus: "menos ",
  infinity: "infinito",
  letterCase: LetterCase.capitalize,
};
