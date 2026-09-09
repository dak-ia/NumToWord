import type { DigitWords } from "../types";
import { LetterCase } from "../constants";

export const elDigitWords: DigitWords = {
  name: "Greek",
  digits: ["μηδέν", "ένα", "δύο", "τρία", "τέσσερα", "πέντε", "έξι", "επτά", "οκτώ", "εννέα"],
  join: " ",
  decimalPoint: " κόμμα ",
  minus: "μείον ",
  infinity: "άπειρο",
  letterCase: LetterCase.capitalize,
  // ギリシャ語は全大文字にするときアクセントを落とすが、先頭だけ大文字なら残す
  caseLocale: { upper: "el" },
};
