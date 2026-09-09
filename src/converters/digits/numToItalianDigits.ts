// このファイルはnpm run generateからの自動生成のため手動編集禁止
import type { LetterCase } from "../../constants";
import { itDigitWords } from "../../dictionaries";
import { replaceDigits } from "../../utils";

/**
 * Converts a number to Italian words digit by digit.
 * @param number - The number to convert
 * @param letterCase - Overrides the default letter case of the language
 * @returns Italian words representing each digit
 * @example
 * numToItalianDigits("0123") // "Zero uno due tre"
 * numToItalianDigits("1.500") // "Uno virgola cinque zero zero"
 * numToItalianDigits(Infinity) // "Infinito"
 */
export const numToItalianDigits = (number: number | string, letterCase?: LetterCase): string =>
  replaceDigits(number, itDigitWords, letterCase);
