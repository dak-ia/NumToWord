import { jpOnesPlace, jpTHT } from "../dictionaries";

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
