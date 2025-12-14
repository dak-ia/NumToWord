import { toEn } from "./toEn";
import { toJp } from "./toJp";
import { toJpDaiji } from "./toJpDaiji";
import { toSi } from "./toSi";

/**
 * Converts a number to its word representation based on the specified locale.
 * @param locale - The locale identifier ("en"/"english", "jp"/"japanese", "jpdaiji"/"daiji", "si")
 * @param num - The number to convert (number or string)
 * @returns The word representation of the number in the specified locale
 * @throws {TypeError} If locale or num is invalid
 * @throws {Error} If the locale is not supported or the number is invalid
 * @example
 * toLocaleString("en", 123) // "One Hundred Twenty Three"
 * toLocaleString("jp", 123) // "百二十三"
 * toLocaleString("si", 1234) // "1.234K"
 */
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
