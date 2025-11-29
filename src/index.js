import { toEn } from "./converters/toEn.js";
import { toJp } from "./converters/toJp.js";
import { toJpDaiji } from "./converters/toJpDaiji.js";
import { toSi } from "./converters/toSi.js";
import { toLocaleString } from "./converters/toLocaleString.js";

const version = VERSION;

export default {
  version,
  toEn,
  toJp,
  toJpDaiji,
  toSi,
  toLocaleString,
};
