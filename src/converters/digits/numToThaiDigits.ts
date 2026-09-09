// このファイルはnpm run generateからの自動生成のため手動編集禁止
import { replaceDigits } from "../../utils";
import { thDigitWords } from "../../dictionaries";

/**
 * Converts a number to Thai words digit by digit.
 * @param number - The number to convert
 * @returns Thai words representing each digit
 * @example
 * numToThaiDigits("0123") // "ศูนย์หนึ่งสองสาม"
 * numToThaiDigits("1.500") // "หนึ่งจุดห้าศูนย์ศูนย์"
 * numToThaiDigits(Infinity) // "อนันต์"
 */
export const numToThaiDigits = (number: number | string): string => replaceDigits(number, thDigitWords);
