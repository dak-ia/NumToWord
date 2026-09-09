// このファイルはnpm run generateからの自動生成のため手動編集禁止
import type { LetterCase } from "../../constants";
import { replaceDigits } from "../../utils";
import { trDigitWords } from "../../dictionaries";

/**
 * Converts a number to Turkish words digit by digit.
 * @param number - The number to convert
 * @param letterCase - Overrides the default letter case of the language
 * @returns Turkish words representing each digit
 * @example
 * numToTurkishDigits("0123") // "Sıfır bir iki üç"
 * numToTurkishDigits("1.500") // "Bir virgül beş sıfır sıfır"
 * numToTurkishDigits(Infinity) // "Sonsuz"
 */
export const numToTurkishDigits = (number: number | string, letterCase?: LetterCase): string =>
  replaceDigits(number, trDigitWords, letterCase);
