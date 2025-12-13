export const convertToStrNum = (num: number | string): string => {
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

export type NumArray = {
  integer: string;
  decimal: string;
};

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

export const sliceTo1digitNum = (num: string): string[] => {
  return num.split("");
};

export const sliceTo3digitNum = (num: string): string[] => {
  const result: string[] = [];
  const len: number = num.length;
  for (let i = 0; i < len; i = i + 3) {
    result.unshift(num.slice(-3));
    num = num.slice(0, -3);
  }
  return result;
};

export const sliceTo4digitNum = (num: string): string[] => {
  const result: string[] = [];
  const len: number = num.length;
  for (let i = 0; i < len; i = i + 4) {
    result.unshift(num.slice(-4));
    num = num.slice(0, -4);
  }
  return result;
};
