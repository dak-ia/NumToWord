import { jpDaijiBefore, jpDaijiAfter } from "../dictionaries/jp.js";
import { toJp } from "./toJp.js";

export const toJpDaiji = (num) => {
  num = toJp(num);
  // 大字では百・千の前に「壱」を明記する（例: 百→壱百、千→壱千）
  num = num.replace(
    /(万|億|兆|京|垓|𥝱|穣|溝|澗|正|載|極|恒河沙|阿僧祇|那由他|不可思議|無量大数|^)(百|千)/gu,
    "$1一$2"
  );
  // 通常の大字変換
  for (let i = 0; i <= 13; i++) {
    let reg = new RegExp(jpDaijiBefore[i], "g");
    num = num.replace(reg, jpDaijiAfter[i]);
  }
  return num;
};
