import { toEn } from "./converters/toEn";
import { toJp } from "./converters/toJp";
import { toJpDaiji } from "./converters/toJpDaiji";
import { toLocaleString } from "./converters/toLocaleString";
import { toSi } from "./converters/toSi";

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
