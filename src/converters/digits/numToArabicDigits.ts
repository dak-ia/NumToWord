// このファイルはnpm run generateからの自動生成のため手動編集禁止
import { arDigitWords } from "../../dictionaries";
import { replaceDigits } from "../../utils";

/**
 * Converts a number to Arabic words digit by digit.
 * @param number - The number to convert
 * @returns Arabic words representing each digit
 * @example
 * numToArabicDigits("0123") // "صفر واحد اثنان ثلاثة"
 * numToArabicDigits("1.500") // "واحد فاصلة خمسة صفر صفر"
 * numToArabicDigits(Infinity) // "لانهاية"
 */
export const numToArabicDigits = (number: number | string): string => replaceDigits(number, arDigitWords);
