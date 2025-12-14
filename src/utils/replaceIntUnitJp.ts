import { jpOnesPlace, jpTHT } from "../dictionaries";

/**
 * Converts a 1-4 digit number string to Japanese kanji representation.
 * Internal utility for toJp converter. Handles 十, 百, 千 units.
 * @param num - A number string with 1-4 digits
 * @returns The Japanese kanji representation
 * @throws {Error} If the number has more than 4 digits (Overflow)
 * @example
 * replaceIntUnitJp("123") // "百二十三"
 * replaceIntUnitJp("1000") // "千"
 */
export const replaceIntUnitJp = (num: string): string => {
  const numArray: string[] = num.split("").reverse();
  if (numArray.length > 4) {
    throw new Error("Overflow");
  }
  let result: string = "";
  for (let i = 0; i < numArray.length; i++) {
    if ((i > 0 && numArray[i] == "0") || (i == 0 && numArray.length > 1 && numArray[i] == "0")) {
      continue;
    } else if (i > 0 && numArray[i] == "1") {
      result = jpTHT[i] + result;
    } else {
      result = jpOnesPlace[Number(numArray[i])] + jpTHT[i] + result;
    }
  }
  return result;
};
