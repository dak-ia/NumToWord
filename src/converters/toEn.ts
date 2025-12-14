import { enOnesPlace, enOthersPlace } from "../dictionaries";
import { replaceIntUnitEn, sliceTo1digitNum, sliceTo3digitNum, splitNum } from "../utils";

/**
 * Converts a number to its English word representation.
 * @param num - The number to convert (number or string)
 * @returns The English word representation of the number
 * @throws {Error} If the number is too large (Overflow) or invalid (NaN)
 * @example
 * toEn(123) // "One Hundred Twenty Three"
 * toEn("1234.56") // "One Thousand Two Hundred Thirty Four Point Five Six"
 */
export const toEn = (num: number | string): string => {
  const numArray = splitNum(num);
  if (numArray.integer.length > (Object.values(enOthersPlace).length - 1) * 3) {
    throw new Error("Overflow");
  }
  // 連続ゼロを単一の0として扱う（小数部がない場合のみ）
  if (/^0+$/.test(numArray.integer) && numArray.decimal == "") {
    return "Zero";
  }
  let integerArray = sliceTo3digitNum(numArray.integer);
  let decimalArray = sliceTo1digitNum(numArray.decimal);
  integerArray = integerArray
    .reverse()
    .map((num, i) => {
      return replaceIntUnitEn(num) + " " + enOthersPlace[i * 3].toLowerCase();
    })
    .reverse();
  if (integerArray.length > 1) {
    integerArray = integerArray.map((num) => {
      if (RegExp(enOnesPlace[0]).test(num)) {
        return "";
      }
      return num;
    });
  }
  integerArray = integerArray.filter((num) => num != "");
  decimalArray = decimalArray.map((num) => {
    return enOnesPlace[Number(num)];
  });
  if (decimalArray.length > 0) {
    const result = (integerArray.join(" ").trim() + " point " + decimalArray.join(" ").trim()).trim();
    return result.slice(0, 1).toUpperCase() + result.slice(1);
  } else {
    const result = integerArray.join(" ").trim();
    return result.slice(0, 1).toUpperCase() + result.slice(1);
  }
};
