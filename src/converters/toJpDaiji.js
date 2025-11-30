import { jpDaijiAfter, jpDaijiBefore, jpOthersPlace } from "../dictionaries/jp.js";
import { toJp } from "./toJp.js";

export const toJpDaiji = (num) => {
  num = toJp(num);
  // 大字では算用数字で1になるすべての単位の前に「壱」を明記する
  // 後年省略されるケースもあったが、ここでは明記する方式を採用
  num = num.replace(/(?<![一二三四五六七八九])(十|百|千)/gu, "一$1");
  const othersPattern = jpOthersPlace.filter((p) => p !== "").join("|");
  num = num.replace(new RegExp(`(?<![一二三四五六七八九十百千])(${othersPattern})`, "gu"), "一$1");
  // 通常の大字変換
  for (let i = 0; i <= 13; i++) {
    const reg = new RegExp(jpDaijiBefore[i], "g");
    num = num.replace(reg, jpDaijiAfter[i]);
  }
  return num;
};
