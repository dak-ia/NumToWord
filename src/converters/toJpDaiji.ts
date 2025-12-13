import { jpDaijiAfter, jpDaijiBefore, jpOthersPlace } from "../dictionaries/jp";
import { toJp } from "./toJp";

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
