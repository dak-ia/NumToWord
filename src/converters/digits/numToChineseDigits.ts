// このファイルはnpm run generateからの自動生成のため手動編集禁止
import { replaceDigits } from "../../utils";
import { zhDigitWords } from "../../dictionaries";

/**
 * Converts a number to Chinese words digit by digit.
 * @param number - The number to convert
 * @returns Chinese words representing each digit
 * @example
 * numToChineseDigits("0123") // "零一二三"
 * numToChineseDigits("1.500") // "一点五零零"
 * numToChineseDigits(Infinity) // "无穷"
 */
export const numToChineseDigits = (number: number | string): string => replaceDigits(number, zhDigitWords);
