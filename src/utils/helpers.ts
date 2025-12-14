import type { NumArray } from "../types/index";

/**
 * Normalizes number input to a standard string format.
 * Converts full-width characters to half-width, removes commas and whitespace.
 * @internal
 * @param num - The number to normalize (number or string)
 * @returns The normalized number string
 * @throws {Error} If the input is not a valid number (NaN)
 */
const convertToStrNum = (num: number | string): string => {
  let result = num
    .toString()
    .replace(/[０-９]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    })
    .replace(/．/g, ".")
    .replace(/，/g, "")
    .replace(/,/g, "")
    .replace(/\s/g, "")
    .trim();
  // 小数点のみの入力をチェック
  if (/^\.+$/.test(result)) {
    throw new Error("NaN");
  }
  if (!RegExp(/[^0-9.]/).test(result) && (result.match(/\./g) || []).length <= 1) {
    if (result.slice(0, 1) == ".") {
      result = "0" + result;
    }
    if (result.slice(-1) == ".") {
      result = result + "0";
    }
    return result;
  } else {
    throw new Error("NaN");
  }
};

/**
 * Splits a number into integer and decimal parts.
 * Handles full-width characters, commas, and whitespace normalization.
 * @param num - The number to split (number or string)
 * @returns An object with integer and decimal string properties
 * @throws {TypeError} If num is null, undefined, or empty string
 * @throws {Error} If the input is not a valid number (NaN)
 * @example
 * splitNum(123.456) // { integer: "123", decimal: "456" }
 * splitNum("１，２３４") // { integer: "1234", decimal: "" }
 */
export const splitNum = (num: number | string): NumArray => {
  if (num == null || num == undefined || num == "") {
    throw new TypeError("Invalid argument: expected a number or string");
  }
  const strNum = convertToStrNum(num);
  const numArray: NumArray = { integer: "", decimal: "" };
  numArray.integer = strNum.split(".")[0];
  numArray.decimal = strNum.split(".")[1] || "";
  return numArray;
};

/**
 * Splits a number string into an array of single-digit strings.
 * @param num - The number string to split
 * @returns An array of single-digit strings
 * @example
 * sliceTo1digitNum("123") // ["1", "2", "3"]
 */
export const sliceTo1digitNum = (num: string): string[] => {
  return num.split("");
};

/**
 * Splits a number string into chunks of 3 digits from right to left.
 * @param num - The number string to split
 * @returns An array of 3-digit strings (or less for the leftmost chunk)
 * @example
 * sliceTo3digitNum("1234567") // ["1", "234", "567"]
 */
export const sliceTo3digitNum = (num: string): string[] => {
  const result: string[] = [];
  const len: number = num.length;
  for (let i = 0; i < len; i = i + 3) {
    result.unshift(num.slice(-3));
    num = num.slice(0, -3);
  }
  return result;
};

/**
 * Splits a number string into chunks of 4 digits from right to left.
 * @param num - The number string to split
 * @returns An array of 4-digit strings (or less for the leftmost chunk)
 * @example
 * sliceTo4digitNum("12345678") // ["1234", "5678"]
 */
export const sliceTo4digitNum = (num: string): string[] => {
  const result: string[] = [];
  const len: number = num.length;
  for (let i = 0; i < len; i = i + 4) {
    result.unshift(num.slice(-4));
    num = num.slice(0, -4);
  }
  return result;
};
