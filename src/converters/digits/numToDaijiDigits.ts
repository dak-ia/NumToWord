// このファイルはnpm run generateからの自動生成のため手動編集禁止
import { jpDaijiDigitWords } from "../../dictionaries";
import { replaceDigits } from "../../utils";

/**
 * Converts a number to Japanese daiji (大字) numerals digit by digit.
 * @param number - The number to convert
 * @returns Japanese daiji (大字) numerals representing each digit
 * @example
 * numToDaijiDigits("0123") // "零壱弐参"
 * numToDaijiDigits("1.500") // "壱・伍零零"
 * numToDaijiDigits(Infinity) // "無限"
 */
export const numToDaijiDigits = (number: number | string): string => replaceDigits(number, jpDaijiDigitWords);
