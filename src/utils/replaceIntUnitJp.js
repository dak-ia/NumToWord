import { jpOnesPlace, jpTHT } from "../dictionaries/jp.js";

export const replaceIntUnitJp = (num) => {
  let numArray = num.split("").reverse();
  if (numArray.length > 4) {
    throw new Error("Overflow");
  }
  let result = "";
  for (let i = 0; i < numArray.length; i++) {
    if ((i > 0 && numArray[i] == "0") || (i == 0 && numArray.length > 1 && numArray[i] == "0")) {
    } else if (i > 0 && numArray[i] == "1") {
      result = jpTHT[i] + result;
    } else {
      result = jpOnesPlace[numArray[i]] + jpTHT[i] + result;
    }
  }
  return result;
};
