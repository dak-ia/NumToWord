import { toEn, toJp, toJpDaiji, toLocaleString, toSi } from "./converters";

declare const VERSION: string;

const version: string = VERSION;

export default {
  version,
  toEn,
  toJp,
  toJpDaiji,
  toSi,
  toLocaleString,
};
