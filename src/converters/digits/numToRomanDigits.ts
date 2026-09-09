// このファイルはnpm run generateからの自動生成のため手動編集禁止
import type { LetterCase } from "../../constants";
import { replaceDigits } from "../../utils";
import { romanDigitWords } from "../../dictionaries";

/**
 * Converts a number to Roman numerals digit by digit.
 * @param number - The number to convert
 * @param letterCase - Overrides the default letter case of the language
 * @returns Roman numerals representing each digit
 * @example
 * numToRomanDigits("0123") // "N I II III"
 * numToRomanDigits("1.500") // "I . V N N"
 * numToRomanDigits(Infinity) // "∞"
 */
export const numToRomanDigits = (number: number | string, letterCase?: LetterCase): string =>
  replaceDigits(number, romanDigitWords, letterCase);
