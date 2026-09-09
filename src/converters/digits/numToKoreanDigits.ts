// このファイルはnpm run generateからの自動生成のため手動編集禁止
import { koDigitWords } from "../../dictionaries";
import { replaceDigits } from "../../utils";

/**
 * Converts a number to Korean words digit by digit.
 * @param number - The number to convert
 * @returns Korean words representing each digit
 * @example
 * numToKoreanDigits("0123") // "영일이삼"
 * numToKoreanDigits("1.500") // "일점오영영"
 * numToKoreanDigits(Infinity) // "무한"
 */
export const numToKoreanDigits = (number: number | string): string => replaceDigits(number, koDigitWords);
