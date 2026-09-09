// このファイルはnpm run generateからの自動生成のため手動編集禁止
import { hiDigitWords } from "../../dictionaries";
import { replaceDigits } from "../../utils";

/**
 * Converts a number to Hindi words digit by digit.
 * @param number - The number to convert
 * @returns Hindi words representing each digit
 * @example
 * numToHindiDigits("0123") // "शून्य एक दो तीन"
 * numToHindiDigits("1.500") // "एक दशमलव पाँच शून्य शून्य"
 * numToHindiDigits(Infinity) // "अनंत"
 */
export const numToHindiDigits = (number: number | string): string => replaceDigits(number, hiDigitWords);
