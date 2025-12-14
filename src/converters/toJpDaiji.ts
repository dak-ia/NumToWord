import { jpDaijiAfter, jpDaijiBefore, jpOthersPlace } from "../dictionaries";
import { toJp } from "./toJp";

/**
 * Converts a number to its Japanese word representation using formal daiji (大字) numerals.
 * Daiji are used in legal and financial documents to prevent fraud.
 * @param num - The number to convert (number or string)
 * @returns The Japanese daiji representation of the number
 * @throws {Error} If the number is too large (Overflow) or invalid (NaN)
 * @example
 * toJpDaiji(123) // "壱百弐拾参"
 * toJpDaiji("10000") // "壱萬"
 */
export const toJpDaiji = (num: number | string): string => {
  let result = toJp(num);
  // 大字では算用数字で1になるすべての単位の前に「壱」を明記する
  // 後年省略されるケースもあったが、ここでは明記する方式を採用
  result = result.replace(/(?<![一二三四五六七八九])(十|百|千)/gu, "一$1");
  const othersPattern: string = jpOthersPlace.filter((p) => p !== "").join("|");
  result = result.replace(new RegExp(`(?<![一二三四五六七八九十百千])(${othersPattern})`, "gu"), "一$1");
  // 通常の大字変換
  for (let i = 0; i <= 13; i++) {
    const reg = new RegExp(jpDaijiBefore[i], "g");
    result = result.replace(reg, jpDaijiAfter[i]);
  }
  return result;
};
