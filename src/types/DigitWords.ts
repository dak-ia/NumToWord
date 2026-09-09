import type { LetterCase } from "../constants";

export type DigitWords = {
  /** numTo{name}Digitsという関数名になる */
  name: string;
  // 空白や括弧が入る表示名は関数名に使えないので分けている
  label?: string;
  // 個数を型で固定しないと、辞書に未定義な桁を落としてしまう
  digits: readonly [string, string, string, string, string, string, string, string, string, string];
  join: string;
  decimalPoint: string;
  minus: string;
  infinity: string;
  letterCase?: LetterCase;
  /** BCP 47の言語タグ */
  caseLocale?: Partial<Record<LetterCase, string>>;
};
