/**
 * NumToWord - Convert numbers to words in multiple languages
 */
declare class NumToWord {
  /**
   * Library version
   */
  static readonly version: string;

  /**
   * Convert a number to words using the specified locale
   * @param locale - The locale to use: "si", "en"/"english", "jp"/"japanese", "jpdaiji"/"daiji"
   * @param num - The number to convert (number or string)
   * @returns The number converted to words
   * @throws {TypeError} If arguments are invalid
   * @throws {Error} If locale is invalid or number overflows
   * @example
   * NumToWord.toLocaleString("en", 123); // "One hundred twenty-three"
   * NumToWord.toLocaleString("jp", 123); // "百二十三"
   */
  static toLocaleString(locale: string, num: number | string): string;

  /**
   * Convert a number to SI prefix notation (K, M, G, etc.)
   * @param num - The number to convert (number or string)
   * @returns The number in SI prefix format
   * @throws {TypeError} If argument is invalid
   * @throws {Error} If number is NaN or overflows
   * @example
   * NumToWord.toSi(1234567); // "1.235M"
   */
  static toSi(num: number | string): string;

  /**
   * Convert a number to English words
   * @param num - The number to convert (number or string)
   * @returns The number converted to English words
   * @throws {TypeError} If argument is invalid
   * @throws {Error} If number is NaN or overflows
   * @example
   * NumToWord.toEn(123); // "One hundred twenty-three"
   * NumToWord.toEn(123.45); // "One hundred twenty-three point four five"
   */
  static toEn(num: number | string): string;

  /**
   * Convert a number to Japanese words
   * @param num - The number to convert (number or string)
   * @returns The number converted to Japanese words
   * @throws {TypeError} If argument is invalid
   * @throws {Error} If number is NaN or overflows
   * @example
   * NumToWord.toJp(123); // "百二十三"
   * NumToWord.toJp(123.45); // "百二十三・四五"
   */
  static toJp(num: number | string): string;

  /**
   * Convert a number to Japanese Daiji (formal) notation
   * @param num - The number to convert (number or string)
   * @returns The number converted to Japanese Daiji
   * @throws {TypeError} If argument is invalid
   * @throws {Error} If number is NaN or overflows
   * @example
   * NumToWord.toJpDaiji(123); // "壱陌弐拾参"
   */
  static toJpDaiji(num: number | string): string;
}

export = NumToWord;
