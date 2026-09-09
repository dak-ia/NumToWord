// このファイルはnpm run generateからの自動生成のため手動編集禁止
import type { LetterCase } from "../../constants";
import { enDigitWords } from "../../dictionaries";
import { replaceDigits } from "../../utils";

/**
 * Converts a number to English words digit by digit.
 * @param number - The number to convert
 * @param letterCase - Overrides the default letter case of the language
 * @returns English words representing each digit
 * @example
 * numToEnglishDigits("0123") // "Zero one two three"
 * numToEnglishDigits("1.500") // "One point five zero zero"
 * numToEnglishDigits(Infinity) // "Infinity"
 */
export const numToEnglishDigits = (number: number | string, letterCase?: LetterCase): string =>
  replaceDigits(number, enDigitWords, letterCase);
