// このファイルはnpm run generateからの自動生成のため手動編集禁止
import type { LetterCase } from "../../constants";
import { replaceDigits } from "../../utils";
import { ruDigitWords } from "../../dictionaries";

/**
 * Converts a number to Russian words digit by digit.
 * @param number - The number to convert
 * @param letterCase - Overrides the default letter case of the language
 * @returns Russian words representing each digit
 * @example
 * numToRussianDigits("0123") // "Ноль один два три"
 * numToRussianDigits("1.500") // "Один запятая пять ноль ноль"
 * numToRussianDigits(Infinity) // "Бесконечность"
 */
export const numToRussianDigits = (number: number | string, letterCase?: LetterCase): string =>
  replaceDigits(number, ruDigitWords, letterCase);
