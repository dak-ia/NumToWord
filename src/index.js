import { toEn } from "./converters/toEn.js";
import { toJp } from "./converters/toJp.js";
import { toJpDaiji } from "./converters/toJpDaiji.js";
import { toLocaleString } from "./converters/toLocaleString.js";
import { toSi } from "./converters/toSi.js";

const version = VERSION;

export default {
  version,
  toEn,
  toJp,
  toJpDaiji,
  toSi,
  toLocaleString,
};
