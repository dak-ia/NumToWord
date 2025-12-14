import { sliceTo3digitNum, splitNum } from "../utils";
import { siSymbol } from "../dictionaries";

/**
 * Converts a number to its SI (International System of Units) prefix notation.
 * @param num - The number to convert (number or string)
 * @returns The number in SI prefix notation
 * @throws {Error} If the number is too large (Overflow) or invalid (NaN)
 * @example
 * toSi(1234) // "1.234K"
 * toSi(1234567) // "1.234567M"
 */
export const toSi = (num: number | string): string => {
  const numArray = splitNum(num);
  if (numArray.integer.length > (siSymbol.length + 1) * 3) {
    throw new Error("Overflow");
  }
  numArray.integer = numArray.integer.replace(/^0+/, "") || "0";

  let integerPart: string, decimalPart: string, suffix: string;

  if (numArray.integer.length <= 3) {
    integerPart = numArray.integer;
    decimalPart = numArray.decimal;
    suffix = "";
  } else {
    const integerArray: string[] = sliceTo3digitNum(numArray.integer);
    integerPart = integerArray[0];
    const remainingDigits: string = integerArray.slice(1).join("");
    const symbolIndex: number = integerArray.length - 2;

    // 小数点以下を結合
    decimalPart = remainingDigits;
    if (numArray.decimal !== "") {
      decimalPart = remainingDigits + numArray.decimal;
    }
    suffix = siSymbol[symbolIndex];
  }

  // 小数から末尾の0を削除
  if (decimalPart !== "") {
    decimalPart = decimalPart.replace(/0+$/, "");
  }

  if (decimalPart !== "") {
    return integerPart + "." + decimalPart + suffix;
  } else {
    return integerPart + suffix;
  }
};
