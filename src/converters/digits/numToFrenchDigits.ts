// このファイルはnpm run generateからの自動生成のため手動編集禁止
import type { LetterCase } from "../../constants";
import { frDigitWords } from "../../dictionaries";
import { replaceDigits } from "../../utils";

/**
 * Converts a number to French words digit by digit.
 * @param number - The number to convert
 * @param letterCase - Overrides the default letter case of the language
 * @returns French words representing each digit
 * @example
 * numToFrenchDigits("0123") // "Zéro un deux trois"
 * numToFrenchDigits("1.500") // "Un virgule cinq zéro zéro"
 * numToFrenchDigits(Infinity) // "Infini"
 */
export const numToFrenchDigits = (number: number | string, letterCase?: LetterCase): string =>
  replaceDigits(number, frDigitWords, letterCase);
