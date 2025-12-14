import { jpOnesPlace, jpOthersPlace } from "../dictionaries";
import { replaceIntUnitJp, sliceTo1digitNum, sliceTo4digitNum, splitNum } from "../utils";

/**
 * Converts a number to its Japanese word representation using standard kanji.
 * @param num - The number to convert (number or string)
 * @returns The Japanese word representation of the number
 * @throws {Error} If the number is too large (Overflow) or invalid (NaN)
 * @example
 * toJp(123) // "百二十三"
 * toJp("1234.56") // "千二百三十四点五六"
 */
export const toJp = (num: number | string): string => {
  const numArray = splitNum(num);
  if (numArray.integer.length > jpOthersPlace.length * 4) {
    throw new Error("Overflow");
  }
  // ゼロの特別処理（小数部がない場合のみ）
  if (numArray.integer == "0" && numArray.decimal == "") {
    return jpOnesPlace[0];
  }
  // 連続ゼロを単一の0として扱う
  if (/^0+$/.test(numArray.integer) && numArray.decimal == "") {
    return jpOnesPlace[0];
  }
  let integerArray = sliceTo4digitNum(numArray.integer);
  let decimalArray = sliceTo1digitNum(numArray.decimal);
  integerArray = integerArray
    .reverse()
    .map((num, i) => {
      if (num != "0" && num != "00" && num != "000" && num != "0000") {
        return replaceIntUnitJp(num) + jpOthersPlace[i];
      }
      return undefined;
    })
    .reverse()
    .filter((item): item is string => item !== undefined);
  decimalArray = decimalArray.map((num) => {
    return jpOnesPlace[Number(num)];
  });

  let integerPart = integerArray.join("");
  // 整数部が空（すべて0）で小数部がある場合は〇を表示
  if (integerPart === "" && decimalArray.length > 0) {
    integerPart = jpOnesPlace[0];
  }

  if (decimalArray.length > 0) {
    return integerPart + "・" + decimalArray.join("");
  } else {
    return integerPart;
  }
};
