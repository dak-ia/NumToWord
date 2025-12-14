import { enHundredsPlace, enOnesPlace, enTens, enTensPlace } from "../dictionaries";

/**
 * Converts a 1-3 digit number string to English words.
 * Internal utility for toEn converter.
 * @param num - A number string with 1-3 digits
 * @returns The English word representation
 * @throws {Error} If the number has more than 3 digits (Overflow)
 * @example
 * replaceIntUnitEn("123") // "One Hundred Twenty Three"
 * replaceIntUnitEn("45") // "Forty Five"
 */
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
