import { siSymbol } from "../dictionaries/si.js";
import { splitNum, sliceTo3digitNum } from "../utils/helpers.js";

export const toSi = (num) => {
  const numArray = splitNum(num);
  if (numArray.integer.length > (siSymbol.length + 1) * 3) {
    throw new Error("Overflow");
  }
  numArray.integer = numArray.integer.replace(/^0+/, "") || "0";

  let integerPart, decimalPart, suffix;

  if (numArray.integer.length <= 3) {
    integerPart = numArray.integer;
    decimalPart = numArray.decimal;
    suffix = "";
  } else {
    let integerArray = sliceTo3digitNum(numArray.integer);
    integerPart = integerArray[0];
    const remainingDigits = integerArray.slice(1).join("");
    const symbolIndex = integerArray.length - 2;

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
