// このファイルはnpm run generateからの自動生成のため手動編集禁止
import type { LetterCase } from "../../constants";
import { nlDigitWords } from "../../dictionaries";
import { replaceDigits } from "../../utils";

/**
 * Converts a number to Dutch words digit by digit.
 * @param number - The number to convert
 * @param letterCase - Overrides the default letter case of the language
 * @returns Dutch words representing each digit
 * @example
 * numToDutchDigits("0123") // "Nul een twee drie"
 * numToDutchDigits("1.500") // "Een komma vijf nul nul"
 * numToDutchDigits(Infinity) // "Oneindig"
 */
export const numToDutchDigits = (number: number | string, letterCase?: LetterCase): string =>
  replaceDigits(number, nlDigitWords, letterCase);
