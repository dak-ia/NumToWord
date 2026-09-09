// このファイルはnpm run generateからの自動生成のため手動編集禁止
import type { LetterCase } from "../../constants";
import { replaceDigits } from "../../utils";
import { viDigitWords } from "../../dictionaries";

/**
 * Converts a number to Vietnamese words digit by digit.
 * @param number - The number to convert
 * @param letterCase - Overrides the default letter case of the language
 * @returns Vietnamese words representing each digit
 * @example
 * numToVietnameseDigits("0123") // "Không một hai ba"
 * numToVietnameseDigits("1.500") // "Một phẩy năm không không"
 * numToVietnameseDigits(Infinity) // "Vô cực"
 */
export const numToVietnameseDigits = (number: number | string, letterCase?: LetterCase): string =>
  replaceDigits(number, viDigitWords, letterCase);
