import { enOnesPlace, enTens, enTensPlace, enHundredsPlace } from "../dictionaries/en.js";

export const replaceIntUnitEn = (num) => {
  let numArray = num.split("");
  if (numArray.length > 3) {
    throw new Error("Overflow");
  }
  let result = "";
  if (numArray.length == 1) {
    result = enOnesPlace[numArray[0]];
  } else {
    if (numArray.length == 2) {
      numArray.unshift("0");
    }
    if (numArray[1] == "0") {
      result = enOnesPlace[numArray[2]];
    } else if (numArray[1] == "1") {
      result = enTens[numArray[2]];
    } else {
      if (numArray[2] == "0") {
        result = enTensPlace[numArray[1]];
      } else {
        result = enTensPlace[numArray[1]] + "-" + enOnesPlace[numArray[2]];
      }
    }
    if (numArray[0] != "0") {
      if (result == enOnesPlace[0]) {
        result = "";
      }
      result = enOnesPlace[numArray[0]] + " " + enHundredsPlace + " " + result;
    }
  }
  return result.trim();
};
