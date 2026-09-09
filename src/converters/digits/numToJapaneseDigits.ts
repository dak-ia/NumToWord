// このファイルはnpm run generateからの自動生成のため手動編集禁止
import { jpDigitWords } from "../../dictionaries";
import { replaceDigits } from "../../utils";

/**
 * Converts a number to Japanese kanji digit by digit.
 * @param number - The number to convert
 * @returns Japanese kanji representing each digit
 * @example
 * numToJapaneseDigits("0123") // "〇一二三"
 * numToJapaneseDigits("1.500") // "一・五〇〇"
 * numToJapaneseDigits(Infinity) // "無限"
 */
export const numToJapaneseDigits = (number: number | string): string => replaceDigits(number, jpDigitWords);
