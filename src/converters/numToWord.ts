import { InvalidArgumentError, InvalidLocaleError } from "../errors";
import {
  numToArabicDigits,
  numToBengaliDigits,
  numToChineseDigits,
  numToDaijiDigits,
  numToDutchDigits,
  numToEnglishDigits,
  numToFrenchDigits,
  numToGermanDigits,
  numToGreekDigits,
  numToHindiDigits,
  numToIndonesianDigits,
  numToItalianDigits,
  numToJapaneseDigits,
  numToKoreanDigits,
  numToPolishDigits,
  numToPortugueseDigits,
  numToRomanDigits,
  numToRussianDigits,
  numToSpanishDigits,
  numToThaiDigits,
  numToTurkishDigits,
  numToVietnameseDigits,
} from "./digits";
import { LetterCase } from "../constants";
import { numToDaiji } from "./numToDaiji";
import { numToEnglish } from "./numToEnglish";
import { numToJapanese } from "./numToJapanese";
import { numToSi } from "./numToSi";

/**
 * Converts a number to words in the specified locale.
 * @param locale - Locale identifier ("en", "jp", "jpdaiji", "si"). Digit-by-digit conversion uses a "-digits" key such as "en-digits" or "de-digits" and covers more languages
 * @param number - The number to convert
 * @param letterCase - Overrides the default letter case of the language
 * @returns Word representation in the specified locale
 * @throws {InvalidArgumentError} If locale is not a string, number is neither a number nor a string, or letterCase is unsupported by the conversion
 * @throws {InvalidLocaleError} If unsupported locale
 * @example
 * numToWord("en", 123) // "One hundred twenty-three"
 * numToWord("jp", 123) // "百二十三"
 * numToWord("si", 1234) // "1.234K"
 */
export const numToWord = (locale: string, number: number | string, letterCase?: LetterCase): string => {
  if (typeof locale !== "string") {
    throw new InvalidArgumentError("Expected a string locale.");
  }

  const localeLower: string = locale.toLowerCase();
  const entry = localeMap.find((e) => e.keys.includes(localeLower));
  if (!entry) {
    throw new InvalidLocaleError();
  }
  if (entry.rejectsLetterCase && letterCase !== undefined) {
    throw new InvalidArgumentError("Letter case is not supported for this conversion.");
  }
  return entry.fn(number, letterCase);
};

type LocaleEntry = {
  keys: string[];
  fn: (_: number | string, _letterCase?: LetterCase) => string;
  rejectsLetterCase?: boolean;
};
export const localeMap: LocaleEntry[] = [
  { keys: ["si"], fn: numToSi, rejectsLetterCase: true },
  { keys: ["en", "english"], fn: numToEnglish, rejectsLetterCase: true },
  { keys: ["jp", "japanese", "kanji"], fn: numToJapanese, rejectsLetterCase: true },
  { keys: ["jpdaiji", "daiji"], fn: numToDaiji, rejectsLetterCase: true },
  { keys: ["en-digits", "english-digits"], fn: numToEnglishDigits },
  { keys: ["jp-digits", "japanese-digits", "kanji-digits"], fn: numToJapaneseDigits },
  { keys: ["jpdaiji-digits", "daiji-digits"], fn: numToDaijiDigits },
  { keys: ["ar-digits", "arabic-digits"], fn: numToArabicDigits },
  { keys: ["bn-digits", "bengali-digits"], fn: numToBengaliDigits },
  { keys: ["zh-digits", "chinese-digits"], fn: numToChineseDigits },
  { keys: ["nl-digits", "dutch-digits"], fn: numToDutchDigits },
  { keys: ["fr-digits", "french-digits"], fn: numToFrenchDigits },
  { keys: ["de-digits", "german-digits"], fn: numToGermanDigits },
  { keys: ["el-digits", "greek-digits"], fn: numToGreekDigits },
  { keys: ["hi-digits", "hindi-digits"], fn: numToHindiDigits },
  { keys: ["id-digits", "indonesian-digits"], fn: numToIndonesianDigits },
  { keys: ["it-digits", "italian-digits"], fn: numToItalianDigits },
  { keys: ["ko-digits", "korean-digits"], fn: numToKoreanDigits },
  { keys: ["pl-digits", "polish-digits"], fn: numToPolishDigits },
  { keys: ["pt-digits", "portuguese-digits"], fn: numToPortugueseDigits },
  { keys: ["ru-digits", "russian-digits"], fn: numToRussianDigits },
  { keys: ["es-digits", "spanish-digits"], fn: numToSpanishDigits },
  { keys: ["th-digits", "thai-digits"], fn: numToThaiDigits },
  { keys: ["tr-digits", "turkish-digits"], fn: numToTurkishDigits },
  { keys: ["vi-digits", "vietnamese-digits"], fn: numToVietnameseDigits },
  { keys: ["roman-digits"], fn: numToRomanDigits },
];
