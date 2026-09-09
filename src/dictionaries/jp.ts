import type { DigitWords } from "../types";

export const jpOnesPlace = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"] as const;

export const jpBasicUnits: readonly string[] = ["", "十", "百", "千"];

export const jpLargeUnits: readonly string[] = [
  "",
  "万",
  "億",
  "兆",
  "京",
  "垓",
  "𥝱",
  "穣",
  "溝",
  "澗",
  "正",
  "載",
  "極",
  "恒河沙",
  "阿僧祇",
  "那由他",
  "不可思議",
  "無量大数",
];

export const jpDaijiBefore: readonly string[] = [...jpOnesPlace, "十", "百", "千", "万"];

const jpDaijiOnesPlace = ["零", "壱", "弐", "参", "肆", "伍", "陸", "漆", "捌", "玖"] as const;

export const jpDaijiAfter: readonly string[] = [...jpDaijiOnesPlace, "拾", "陌", "阡", "萬"];

export const jpDigitWords: DigitWords = {
  name: "Japanese",
  label: "Japanese kanji",
  digits: jpOnesPlace,
  join: "",
  decimalPoint: "・",
  minus: "負の",
  infinity: "無限",
};

export const jpDaijiDigitWords: DigitWords = {
  ...jpDigitWords,
  name: "Daiji",
  label: "Japanese daiji (大字) numerals",
  digits: jpDaijiOnesPlace,
};
