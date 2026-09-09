// このファイルはnpm run generateからの自動生成のため手動編集禁止
import type { LetterCase } from "../../constants";
import { deDigitWords } from "../../dictionaries";
import { replaceDigits } from "../../utils";

/**
 * Converts a number to German words digit by digit.
 * @param number - The number to convert
 * @param letterCase - Overrides the default letter case of the language
 * @returns German words representing each digit
 * @example
 * numToGermanDigits("0123") // "Null eins zwei drei"
 * numToGermanDigits("1.500") // "Eins Komma fünf null null"
 * numToGermanDigits(Infinity) // "Unendlich"
 */
export const numToGermanDigits = (number: number | string, letterCase?: LetterCase): string =>
  replaceDigits(number, deDigitWords, letterCase);
