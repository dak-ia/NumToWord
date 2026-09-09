// このファイルはnpm run generateからの自動生成のため手動編集禁止
import { bnDigitWords } from "../../dictionaries";
import { replaceDigits } from "../../utils";

/**
 * Converts a number to Bengali words digit by digit.
 * @param number - The number to convert
 * @returns Bengali words representing each digit
 * @example
 * numToBengaliDigits("0123") // "শূন্য এক দুই তিন"
 * numToBengaliDigits("1.500") // "এক দশমিক পাঁচ শূন্য শূন্য"
 * numToBengaliDigits(Infinity) // "অসীম"
 */
export const numToBengaliDigits = (number: number | string): string => replaceDigits(number, bnDigitWords);
