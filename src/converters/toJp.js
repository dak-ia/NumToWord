import { jpOnesPlace, jpOthersPlace } from "../dictionaries/jp.js";
import { sliceTo1digitNum, sliceTo4digitNum, splitNum } from "../utils/helpers.js";
import { replaceIntUnitJp } from "../utils/replaceIntUnitJp.js";

export const toJp = (num) => {
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
    })
    .reverse();
  decimalArray = decimalArray.map((num) => {
    return jpOnesPlace[num];
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
