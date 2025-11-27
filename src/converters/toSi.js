import { siSymbol } from "../dictionaries/si.js";
import { splitNum, sliceTo3digitNum } from "../utils/helpers.js";

export const toSi = (num) => {
  const numArray = splitNum(num);
  if (numArray.integer.length > (siSymbol.length + 1) * 3) {
    throw new Error("Overflow");
  }
  if (numArray.integer.length <= 3) {
    return numArray.integer + "." + numArray.decimal;
  } else {
    let integerArray = sliceTo3digitNum(numArray.integer);
    if (integerArray.length == 2) {
      return (
        (Math.round(Number(integerArray[0] + integerArray[1] + "." + numArray.decimal)) / 1000).toString() + siSymbol[0]
      );
    } else {
      return (
        (Math.round(Number(integerArray[0] + integerArray[1] + "." + integerArray[2])) / 1000).toString() +
        siSymbol[integerArray.length - 2]
      );
    }
  }
};
