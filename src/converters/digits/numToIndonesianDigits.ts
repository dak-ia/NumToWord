// このファイルはnpm run generateからの自動生成のため手動編集禁止
import type { LetterCase } from "../../constants";
import { idDigitWords } from "../../dictionaries";
import { replaceDigits } from "../../utils";

/**
 * Converts a number to Indonesian words digit by digit.
 * @param number - The number to convert
 * @param letterCase - Overrides the default letter case of the language
 * @returns Indonesian words representing each digit
 * @example
 * numToIndonesianDigits("0123") // "Nol satu dua tiga"
 * numToIndonesianDigits("1.500") // "Satu koma lima nol nol"
 * numToIndonesianDigits(Infinity) // "Tak hingga"
 */
export const numToIndonesianDigits = (number: number | string, letterCase?: LetterCase): string =>
  replaceDigits(number, idDigitWords, letterCase);
