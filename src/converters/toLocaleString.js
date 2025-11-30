import { toEn } from "./toEn.js";
import { toJp } from "./toJp.js";
import { toJpDaiji } from "./toJpDaiji.js";
import { toSi } from "./toSi.js";

export const toLocaleString = (locale, num) => {
  if (locale == null || locale == undefined || locale == "" || num == null || num == undefined || num == "") {
    throw new TypeError("Invalid argument: expected a number or string");
  }

  const localeLower = locale.toLowerCase();

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
