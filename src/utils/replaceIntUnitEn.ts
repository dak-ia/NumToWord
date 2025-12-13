import { enHundredsPlace, enOnesPlace, enTens, enTensPlace } from "../dictionaries/en";

export const replaceIntUnitEn = (num: string): string => {
  const numArray: string[] = num.split("");
  if (numArray.length > 3) {
    throw new Error("Overflow");
  }
  let result: string = "";
  if (numArray.length == 1) {
    result = enOnesPlace[Number(numArray[0])];
  } else {
    if (numArray.length == 2) {
      numArray.unshift("0");
    }
    if (numArray[1] == "0") {
      result = enOnesPlace[Number(numArray[2])];
    } else if (numArray[1] == "1") {
      result = enTens[Number(numArray[2])];
    } else {
      if (numArray[2] == "0") {
        result = enTensPlace[Number(numArray[1])];
      } else {
        result = enTensPlace[Number(numArray[1])] + "-" + enOnesPlace[Number(numArray[2])];
      }
    }
    if (numArray[0] != "0") {
      if (result == enOnesPlace[0]) {
        result = "";
      }
      result = enOnesPlace[Number(numArray[0])] + " " + enHundredsPlace + " " + result;
    }
  }
  return result.trim();
};
