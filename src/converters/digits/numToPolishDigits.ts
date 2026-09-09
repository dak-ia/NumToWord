// このファイルはnpm run generateからの自動生成のため手動編集禁止
import type { LetterCase } from "../../constants";
import { plDigitWords } from "../../dictionaries";
import { replaceDigits } from "../../utils";

/**
 * Converts a number to Polish words digit by digit.
 * @param number - The number to convert
 * @param letterCase - Overrides the default letter case of the language
 * @returns Polish words representing each digit
 * @example
 * numToPolishDigits("0123") // "Zero jeden dwa trzy"
 * numToPolishDigits("1.500") // "Jeden przecinek pięć zero zero"
 * numToPolishDigits(Infinity) // "Nieskończoność"
 */
export const numToPolishDigits = (number: number | string, letterCase?: LetterCase): string =>
  replaceDigits(number, plDigitWords, letterCase);
