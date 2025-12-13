import { toEn } from "./toEn";
import { toJp } from "./toJp";
import { toJpDaiji } from "./toJpDaiji";
import { toSi } from "./toSi";

export const toLocaleString = (locale: string, num: number | string): string => {
  if (locale == null || locale == undefined || locale == "" || num == null || num == undefined || num == "") {
    throw new TypeError("Invalid argument: expected a number or string");
  }

  const localeLower: string = locale.toLowerCase();

  if (localeLower == "si") {
    return toSi(num);
  } else if (localeLower == "en" || localeLower == "english") {
    return toEn(num);
  } else if (localeLower == "jp" || localeLower == "japanese") {
    return toJp(num);
  } else if (localeLower == "jpdaiji" || localeLower == "daiji") {
    return toJpDaiji(num);
  } else {
    throw new Error("Invalid locale");
  }
};
