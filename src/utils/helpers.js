export const convertToStrNum = (num) => {
  num = num
    .toString()
    .replace(/[０-９]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    })
    .replace(/．/g, ".")
    .replace(/，/g, "")
    .replace(/\,/g, "")
    .replace(/\s/g, "")
    .trim();
  // 小数点のみの入力をチェック
  if (/^\.+$/.test(num)) {
    throw new Error("NaN");
  }
  if (!RegExp(/[^0-9\.]/).test(num) && (num.match(/\./g) || []).length <= 1) {
    if (num.slice(0, 1) == ".") {
      num = "0" + num;
    }
    if (num.slice(-1) == ".") {
      num = num + "0";
    }
    return num;
  } else {
    throw new Error("NaN");
  }
};

export const splitNum = (num) => {
  if (num == null || num == undefined || num == "") {
    throw new TypeError("Invalid argument: expected a number or string");
  }
  num = convertToStrNum(num);
  let numArray = { integer: "", decimal: "" };
  numArray.integer = num.split(".")[0];
  numArray.decimal = num.split(".")[1] || "";
  return numArray;
};

export const sliceTo1digitNum = (num) => {
  return num.split("");
};

export const sliceTo3digitNum = (num) => {
  let result = [];
  let len = num.length;
  for (let i = 0; i < len; i = i + 3) {
    result.unshift(num.slice(-3));
    num = num.slice(0, -3);
  }
  return result;
};

export const sliceTo4digitNum = (num) => {
  let result = [];
  let len = num.length;
  for (let i = 0; i < len; i = i + 4) {
    result.unshift(num.slice(-4));
    num = num.slice(0, -4);
  }
  return result;
};
