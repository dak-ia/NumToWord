const NumToWord = require('./NumToWord.js');

describe('NumToWord', () => {
  describe('toEn - English Conversion', () => {
    test('converts single digit numbers', () => {
      expect(NumToWord.toEn('0')).toBe('Zero');
      expect(NumToWord.toEn('1')).toBe('One');
      expect(NumToWord.toEn('2')).toBe('Two');
      expect(NumToWord.toEn('3')).toBe('Three');
      expect(NumToWord.toEn('4')).toBe('Four');
      expect(NumToWord.toEn('5')).toBe('Five');
      expect(NumToWord.toEn('6')).toBe('Six');
      expect(NumToWord.toEn('7')).toBe('Seven');
      expect(NumToWord.toEn('8')).toBe('Eight');
      expect(NumToWord.toEn('9')).toBe('Nine');
    });

    test('converts teen numbers', () => {
      expect(NumToWord.toEn('10')).toBe('Ten');
      expect(NumToWord.toEn('11')).toBe('Eleven');
      expect(NumToWord.toEn('12')).toBe('Twelve');
      expect(NumToWord.toEn('13')).toBe('Thirteen');
      expect(NumToWord.toEn('14')).toBe('Fourteen');
      expect(NumToWord.toEn('15')).toBe('Fifteen');
      expect(NumToWord.toEn('16')).toBe('Sixteen');
      expect(NumToWord.toEn('17')).toBe('Seventeen');
      expect(NumToWord.toEn('18')).toBe('Eighteen');
      expect(NumToWord.toEn('19')).toBe('Nineteen');
    });

    test('converts tens numbers', () => {
      expect(NumToWord.toEn('20')).toBe('Twenty');
      expect(NumToWord.toEn('30')).toBe('Thirty');
      expect(NumToWord.toEn('40')).toBe('Forty');
      expect(NumToWord.toEn('50')).toBe('Fifty');
      expect(NumToWord.toEn('60')).toBe('Sixty');
      expect(NumToWord.toEn('70')).toBe('Seventy');
      expect(NumToWord.toEn('80')).toBe('Eighty');
      expect(NumToWord.toEn('90')).toBe('Ninety');
    });

    test('converts compound numbers', () => {
      expect(NumToWord.toEn('21')).toBe('Twenty-one');
      expect(NumToWord.toEn('25')).toBe('Twenty-five');
      expect(NumToWord.toEn('37')).toBe('Thirty-seven');
      expect(NumToWord.toEn('48')).toBe('Forty-eight');
      expect(NumToWord.toEn('56')).toBe('Fifty-six');
      expect(NumToWord.toEn('64')).toBe('Sixty-four');
      expect(NumToWord.toEn('72')).toBe('Seventy-two');
      expect(NumToWord.toEn('83')).toBe('Eighty-three');
      expect(NumToWord.toEn('91')).toBe('Ninety-one');
      expect(NumToWord.toEn('99')).toBe('Ninety-nine');
      expect(NumToWord.toEn('123')).toBe('One hundred twenty-three');
    });

    test('converts hundreds', () => {
      expect(NumToWord.toEn('100')).toBe('One hundred');
      expect(NumToWord.toEn('101')).toBe('One hundred one');
      expect(NumToWord.toEn('200')).toBe('Two hundred');
      expect(NumToWord.toEn('305')).toBe('Three hundred five');
      expect(NumToWord.toEn('410')).toBe('Four hundred ten');
      expect(NumToWord.toEn('500')).toBe('Five hundred');
      expect(NumToWord.toEn('520')).toBe('Five hundred twenty');
      expect(NumToWord.toEn('999')).toBe('Nine hundred ninety-nine');
    });

    test('converts thousands', () => {
      expect(NumToWord.toEn('1000')).toBe('One thousand');
      expect(NumToWord.toEn('1001')).toBe('One thousand one');
      expect(NumToWord.toEn('1010')).toBe('One thousand ten');
      expect(NumToWord.toEn('1100')).toBe('One thousand one hundred');
      expect(NumToWord.toEn('1234')).toBe('One thousand two hundred thirty-four');
      expect(NumToWord.toEn('2345')).toBe('Two thousand three hundred forty-five');
      expect(NumToWord.toEn('9999')).toBe('Nine thousand nine hundred ninety-nine');
      expect(NumToWord.toEn('10000')).toBe('Ten thousand');
      expect(NumToWord.toEn('123456')).toBe('One hundred twenty-three thousand four hundred fifty-six');
    });

    test('converts millions', () => {
      expect(NumToWord.toEn('1000000')).toBe('One million');
      expect(NumToWord.toEn('1234567')).toBe('One million two hundred thirty-four thousand five hundred sixty-seven');
    });

    test('converts billions and trillions', () => {
      expect(NumToWord.toEn('1000000000')).toBe('One billion');
      expect(NumToWord.toEn('1000000000000')).toBe('One trillion');
      expect(NumToWord.toEn('123456789012')).toBe('One hundred twenty-three billion four hundred fifty-six million seven hundred eighty-nine thousand twelve');
      expect(NumToWord.toEn('999999999999')).toBe('Nine hundred ninety-nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine');
    });

    test('converts decimals', () => {
      expect(NumToWord.toEn('0.1')).toBe('Zero point one');
      expect(NumToWord.toEn('0.99')).toBe('Zero point nine nine');
      expect(NumToWord.toEn('0.123456789')).toBe('Zero point one two three four five six seven eight nine');
      expect(NumToWord.toEn('0.789')).toBe('Zero point seven eight nine');
      expect(NumToWord.toEn('1.5')).toBe('One point five');
      expect(NumToWord.toEn('99.99')).toBe('Ninety-nine point nine nine');
      expect(NumToWord.toEn('123.456')).toBe('One hundred twenty-three point four five six');
      expect(NumToWord.toEn('0.789')).toBe('Zero point seven eight nine');
    });

    test('handles decimals with leading dot', () => {
      expect(NumToWord.toEn('.5')).toBe('Zero point five');
    });

    test('handles decimals with trailing dot', () => {
      expect(NumToWord.toEn('5.')).toBe('Five point zero');
    });

    test('handles full-width numbers', () => {
      expect(NumToWord.toEn('１２３')).toBe('One hundred twenty-three');
    });

    test('handles numbers with commas', () => {
      expect(NumToWord.toEn('1,234,567')).toBe('One million two hundred thirty-four thousand five hundred sixty-seven');
      expect(NumToWord.toEn('1，234，567')).toBe('One million two hundred thirty-four thousand five hundred sixty-seven');
    });

    test('handles numbers with whitespace', () => {
      expect(NumToWord.toEn(' 123 ')).toBe('One hundred twenty-three');
      expect(NumToWord.toEn('  456  ')).toBe('Four hundred fifty-six');
      expect(NumToWord.toEn(' 1 2 3 ')).toBe('One hundred twenty-three');
      expect(NumToWord.toEn('1 234')).toBe('One thousand two hundred thirty-four');
    });

    test('handles full-width numbers', () => {
      expect(NumToWord.toEn('１')).toBe('One');
      expect(NumToWord.toEn('５０')).toBe('Fifty');
      expect(NumToWord.toEn('９９９')).toBe('Nine hundred ninety-nine');
      expect(NumToWord.toEn('１2３')).toBe('One hundred twenty-three');
    });

    test('throws error for invalid input', () => {
      expect(() => NumToWord.toEn('abc')).toThrow('NaN');
      expect(() => NumToWord.toEn('12a34')).toThrow('NaN');
      expect(() => NumToWord.toEn('12a')).toThrow('NaN');
      expect(() => NumToWord.toEn('a12')).toThrow('NaN');
      expect(() => NumToWord.toEn('1.2.3.4')).toThrow('NaN');
      expect(() => NumToWord.toEn('...')).toThrow('NaN');
    });

    test('throws error for empty input', () => {
      expect(() => NumToWord.toEn('')).toThrow('Invalid argument: expected a number or string');
      expect(() => NumToWord.toEn(null)).toThrow('Invalid argument: expected a number or string');
      expect(() => NumToWord.toEn(undefined)).toThrow('Invalid argument: expected a number or string');
    });

    test('throws error for multiple decimal points', () => {
      expect(() => NumToWord.toEn('1.2.3')).toThrow('NaN');
    });

    test('throws error for overflow', () => {
      const bigNumber = '1' + '0'.repeat(310);
      expect(() => NumToWord.toEn(bigNumber)).toThrow('Overflow');
    });

    test('handles numbers with repeated digits', () => {
      expect(NumToWord.toEn('111')).toBe('One hundred eleven');
      expect(NumToWord.toEn('222')).toBe('Two hundred twenty-two');
      expect(NumToWord.toEn('333')).toBe('Three hundred thirty-three');
      expect(NumToWord.toEn('444')).toBe('Four hundred forty-four');
      expect(NumToWord.toEn('555')).toBe('Five hundred fifty-five');
      expect(NumToWord.toEn('666')).toBe('Six hundred sixty-six');
      expect(NumToWord.toEn('777')).toBe('Seven hundred seventy-seven');
      expect(NumToWord.toEn('888')).toBe('Eight hundred eighty-eight');
    });

    test('handles alternating patterns', () => {
      expect(NumToWord.toEn('121')).toBe('One hundred twenty-one');
      expect(NumToWord.toEn('212')).toBe('Two hundred twelve');
      expect(NumToWord.toEn('313')).toBe('Three hundred thirteen');
      expect(NumToWord.toEn('414')).toBe('Four hundred fourteen');
      expect(NumToWord.toEn('515')).toBe('Five hundred fifteen');
    });

    test('handles round thousands correctly', () => {
      expect(NumToWord.toEn('2000')).toBe('Two thousand');
      expect(NumToWord.toEn('3000')).toBe('Three thousand');
      expect(NumToWord.toEn('9000')).toBe('Nine thousand');
    });

    test('handles round millions correctly', () => {
      expect(NumToWord.toEn('2000000')).toBe('Two million');
      expect(NumToWord.toEn('5000000')).toBe('Five million');
      expect(NumToWord.toEn('9000000')).toBe('Nine million');
    });

    test('handles round billions correctly', () => {
      expect(NumToWord.toEn('2000000000')).toBe('Two billion');
      expect(NumToWord.toEn('5000000000')).toBe('Five billion');
    });

    test('handles numbers with only high and low units', () => {
      expect(NumToWord.toEn('1000001')).toBe('One million one');
      expect(NumToWord.toEn('1000010')).toBe('One million ten');
      expect(NumToWord.toEn('1000100')).toBe('One million one hundred');
    });

    test('handles tab characters', () => {
      expect(NumToWord.toEn('\t123\t')).toBe('One hundred twenty-three');
    });

    test('handles newline characters', () => {
      expect(NumToWord.toEn('123\n456')).toBe('One hundred twenty-three thousand four hundred fifty-six');
    });

    test('handles unicode spaces (全角スペース)', () => {
      expect(NumToWord.toEn('123\u3000456')).toBe('One hundred twenty-three thousand four hundred fifty-six');
    });

    test('handles multiple types of whitespace', () => {
      expect(NumToWord.toEn('  \t 123 \n 456  ')).toBe('One hundred twenty-three thousand four hundred fifty-six');
    });

    test('rejects scientific notation', () => {
      expect(() => NumToWord.toEn('1e3')).toThrow('NaN');
      expect(() => NumToWord.toEn('1E3')).toThrow('NaN');
      expect(() => NumToWord.toEn('1.23e10')).toThrow('NaN');
    });

    test('rejects Infinity', () => {
      expect(() => NumToWord.toEn('Infinity')).toThrow('NaN');
      expect(() => NumToWord.toEn('-Infinity')).toThrow('NaN');
    });

    test('rejects NaN string', () => {
      expect(() => NumToWord.toEn('NaN')).toThrow('NaN');
    });

    test('rejects hexadecimal notation', () => {
      expect(() => NumToWord.toEn('0x10')).toThrow('NaN');
      expect(() => NumToWord.toEn('0xFF')).toThrow('NaN');
    });

    test('rejects octal notation', () => {
      expect(() => NumToWord.toEn('0o10')).toThrow('NaN');
    });

    test('rejects binary notation', () => {
      expect(() => NumToWord.toEn('0b101')).toThrow('NaN');
    });

    test('rejects plus sign', () => {
      expect(() => NumToWord.toEn('+123')).toThrow();
    });

    test('rejects parentheses', () => {
      expect(() => NumToWord.toEn('(123)')).toThrow('NaN');
    });

    test('rejects special symbols', () => {
      expect(() => NumToWord.toEn('123#')).toThrow('NaN');
      expect(() => NumToWord.toEn('123$')).toThrow('NaN');
      expect(() => NumToWord.toEn('123%')).toThrow('NaN');
      expect(() => NumToWord.toEn('123&')).toThrow('NaN');
    });

    test('handles negative numbers', () => {
      expect(() => NumToWord.toEn('-1')).toThrow();
      expect(() => NumToWord.toEn('-123')).toThrow();
      expect(() => NumToWord.toEn('-0.5')).toThrow();
    });

    test('handles ascending digits', () => {
      expect(NumToWord.toEn('123456789')).toBe('One hundred twenty-three million four hundred fifty-six thousand seven hundred eighty-nine');
    });

    test('handles descending digits', () => {
      expect(NumToWord.toEn('987654321')).toBe('Nine hundred eighty-seven million six hundred fifty-four thousand three hundred twenty-one');
    });

    test('handles palindromic numbers', () => {
      expect(NumToWord.toEn('11')).toBe('Eleven');
      expect(NumToWord.toEn('101')).toBe('One hundred one');
      expect(NumToWord.toEn('121')).toBe('One hundred twenty-one');
      expect(NumToWord.toEn('12321')).toBe('Twelve thousand three hundred twenty-one');
    });

    test('handles number type input (not string)', () => {
      expect(() => NumToWord.toEn(123)).not.toThrow();
      expect(NumToWord.toEn(123)).toBe('One hundred twenty-three');
    });

    test('handles numbers just below and above thousand boundary', () => {
      expect(NumToWord.toEn('999')).toBe('Nine hundred ninety-nine');
      expect(NumToWord.toEn('1000')).toBe('One thousand');
      expect(NumToWord.toEn('1001')).toBe('One thousand one');
    });

    test('handles numbers just below and above million boundary', () => {
      expect(NumToWord.toEn('999999')).toBe('Nine hundred ninety-nine thousand nine hundred ninety-nine');
      expect(NumToWord.toEn('1000000')).toBe('One million');
      expect(NumToWord.toEn('1000001')).toBe('One million one');
    });
  });

  describe('toJp - Japanese Conversion', () => {
    test('converts single digit numbers', () => {
      expect(NumToWord.toJp('0')).toBe('〇');
      expect(NumToWord.toJp('1')).toBe('一');
      expect(NumToWord.toJp('2')).toBe('二');
      expect(NumToWord.toJp('3')).toBe('三');
      expect(NumToWord.toJp('4')).toBe('四');
      expect(NumToWord.toJp('5')).toBe('五');
      expect(NumToWord.toJp('6')).toBe('六');
      expect(NumToWord.toJp('7')).toBe('七');
      expect(NumToWord.toJp('8')).toBe('八');
      expect(NumToWord.toJp('9')).toBe('九');
    });

    test('converts tens', () => {
      expect(NumToWord.toJp('10')).toBe('十');
      expect(NumToWord.toJp('11')).toBe('十一');
      expect(NumToWord.toJp('19')).toBe('十九');
      expect(NumToWord.toJp('20')).toBe('二十');
      expect(NumToWord.toJp('21')).toBe('二十一');
      expect(NumToWord.toJp('30')).toBe('三十');
      expect(NumToWord.toJp('55')).toBe('五十五');
      expect(NumToWord.toJp('88')).toBe('八十八');
      expect(NumToWord.toJp('99')).toBe('九十九');
    });

    test('converts hundreds', () => {
      expect(NumToWord.toJp('100')).toBe('百');
      expect(NumToWord.toJp('101')).toBe('百一');
      expect(NumToWord.toJp('110')).toBe('百十');
      expect(NumToWord.toJp('111')).toBe('百十一');
      expect(NumToWord.toJp('200')).toBe('二百');
      expect(NumToWord.toJp('300')).toBe('三百');
      expect(NumToWord.toJp('555')).toBe('五百五十五');
      expect(NumToWord.toJp('777')).toBe('七百七十七');
      expect(NumToWord.toJp('999')).toBe('九百九十九');
    });

    test('converts thousands', () => {
      expect(NumToWord.toJp('1000')).toBe('千');
      expect(NumToWord.toJp('1001')).toBe('千一');
      expect(NumToWord.toJp('1010')).toBe('千十');
      expect(NumToWord.toJp('1100')).toBe('千百');
      expect(NumToWord.toJp('1111')).toBe('千百十一');
      expect(NumToWord.toJp('2000')).toBe('二千');
      expect(NumToWord.toJp('2222')).toBe('二千二百二十二');
      expect(NumToWord.toJp('3333')).toBe('三千三百三十三');
      expect(NumToWord.toJp('5678')).toBe('五千六百七十八');
      expect(NumToWord.toJp('9999')).toBe('九千九百九十九');
    });

    test('converts man (10,000)', () => {
      expect(NumToWord.toJp('10000')).toBe('一万');
      expect(NumToWord.toJp('10001')).toBe('一万一');
      expect(NumToWord.toJp('11111')).toBe('一万千百十一');
      expect(NumToWord.toJp('12345')).toBe('一万二千三百四十五');
      expect(NumToWord.toJp('20000')).toBe('二万');
      expect(NumToWord.toJp('50000')).toBe('五万');
      expect(NumToWord.toJp('99999')).toBe('九万九千九百九十九');
      expect(NumToWord.toJp('99999999')).toBe('九千九百九十九万九千九百九十九');
    });

    test('converts oku (100,000,000)', () => {
      expect(NumToWord.toJp('100000000')).toBe('一億');
      expect(NumToWord.toJp('100000001')).toBe('一億一');
      expect(NumToWord.toJp('123456789')).toBe('一億二千三百四十五万六千七百八十九');
      expect(NumToWord.toJp('200000000')).toBe('二億');
      expect(NumToWord.toJp('987654321')).toBe('九億八千七百六十五万四千三百二十一');
    });

    test('converts cho (1,000,000,000,000) and larger', () => {
      expect(NumToWord.toJp('1000000000000')).toBe('一兆');
      expect(NumToWord.toJp('10000000000000000')).toBe('一京');
    });

    test('converts decimals', () => {
      expect(NumToWord.toJp('0.5')).toBe('〇・五');
      expect(NumToWord.toJp('0.123')).toBe('〇・一二三');
      expect(NumToWord.toJp('1.5')).toBe('一・五');
      expect(NumToWord.toJp('99.999')).toBe('九十九・九九九');
      expect(NumToWord.toJp('123.456')).toBe('百二十三・四五六');
    });

    test('handles zero in various positions', () => {
      expect(NumToWord.toJp('100')).toBe('百');
      expect(NumToWord.toJp('1000')).toBe('千');
      expect(NumToWord.toJp('10000')).toBe('一万');
      expect(NumToWord.toJp('100000')).toBe('十万');
      expect(NumToWord.toJp('1000000')).toBe('百万');
      expect(NumToWord.toJp('10000000')).toBe('千万');
    });

    test('handles numbers with mixed zeros', () => {
      expect(NumToWord.toJp('10203')).toBe('一万二百三');
      expect(NumToWord.toJp('100203')).toBe('十万二百三');
      expect(NumToWord.toJp('1002003')).toBe('百万二千三');
    });

    test('handles full-width numbers', () => {
      expect(NumToWord.toJp('１２３')).toBe('百二十三');
    });

    test('handles numbers with commas', () => {
      expect(NumToWord.toJp('12,345')).toBe('一万二千三百四十五');
      expect(NumToWord.toJp('１，２３４')).toBe('千二百三十四');
    });

    test('handles full-width decimal point', () => {
      expect(NumToWord.toJp('１２３．４５６')).toBe('百二十三・四五六');
    });

    test('throws error for invalid input', () => {
      expect(() => NumToWord.toJp('abc')).toThrow('NaN');
      expect(() => NumToWord.toJp('12a')).toThrow('NaN');
      expect(() => NumToWord.toJp('1.2.3')).toThrow('NaN');
    });

    test('throws error for empty input', () => {
      expect(() => NumToWord.toJp('')).toThrow('Invalid argument: expected a number or string');
    });

    test('throws error for overflow', () => {
      const bigNumber = '1' + '0'.repeat(73);
      expect(() => NumToWord.toJp(bigNumber)).toThrow('Overflow');
    });

    test('handles numbers with repeated digits', () => {
      expect(NumToWord.toJp('111')).toBe('百十一');
      expect(NumToWord.toJp('222')).toBe('二百二十二');
      expect(NumToWord.toJp('444')).toBe('四百四十四');
      expect(NumToWord.toJp('666')).toBe('六百六十六');
      expect(NumToWord.toJp('888')).toBe('八百八十八');
    });

    test('handles alternating patterns', () => {
      expect(NumToWord.toJp('121')).toBe('百二十一');
      expect(NumToWord.toJp('212')).toBe('二百十二');
      expect(NumToWord.toJp('313')).toBe('三百十三');
      expect(NumToWord.toJp('515')).toBe('五百十五');
    });

    test('handles zeros in man unit positions', () => {
      expect(NumToWord.toJp('10001')).toBe('一万一');
      expect(NumToWord.toJp('10010')).toBe('一万十');
      expect(NumToWord.toJp('10100')).toBe('一万百');
      expect(NumToWord.toJp('11000')).toBe('一万千');
      expect(NumToWord.toJp('100001')).toBe('十万一');
    });

    test('handles zeros in oku unit positions', () => {
      expect(NumToWord.toJp('100000001')).toBe('一億一');
      expect(NumToWord.toJp('100000010')).toBe('一億十');
      expect(NumToWord.toJp('100000100')).toBe('一億百');
      expect(NumToWord.toJp('100001000')).toBe('一億千');
      expect(NumToWord.toJp('100010000')).toBe('一億一万');
    });

    test('handles complex zero patterns across units', () => {
      expect(NumToWord.toJp('10020030')).toBe('千二万三十');
      expect(NumToWord.toJp('100200300')).toBe('一億二十万三百');
      expect(NumToWord.toJp('10002000300')).toBe('百億二百万三百');
    });

    test('handles single digit in large unit positions', () => {
      expect(NumToWord.toJp('20000')).toBe('二万');
      expect(NumToWord.toJp('30000')).toBe('三万');
      expect(NumToWord.toJp('200000000')).toBe('二億');
      expect(NumToWord.toJp('300000000')).toBe('三億');
    });

    test('correctly omits 一 before 十百千', () => {
      expect(NumToWord.toJp('10')).toBe('十');
      expect(NumToWord.toJp('100')).toBe('百');
      expect(NumToWord.toJp('1000')).toBe('千');
    });

    test('includes 一 for 一万 and above', () => {
      expect(NumToWord.toJp('10000')).toBe('一万');
      expect(NumToWord.toJp('100000000')).toBe('一億');
      expect(NumToWord.toJp('1000000000000')).toBe('一兆');
    });

    test('correctly handles 一 in compound numbers', () => {
      expect(NumToWord.toJp('11')).toBe('十一');
      expect(NumToWord.toJp('101')).toBe('百一');
      expect(NumToWord.toJp('1001')).toBe('千一');
      expect(NumToWord.toJp('10001')).toBe('一万一');
    });

    test('handles zero in tens position', () => {
      expect(NumToWord.toJp('101')).toBe('百一');
      expect(NumToWord.toJp('201')).toBe('二百一');
      expect(NumToWord.toJp('301')).toBe('三百一');
    });

    test('handles zero in hundreds position', () => {
      expect(NumToWord.toJp('1001')).toBe('千一');
      expect(NumToWord.toJp('2001')).toBe('二千一');
      expect(NumToWord.toJp('3001')).toBe('三千一');
    });

    test('handles multiple zeros in different positions', () => {
      expect(NumToWord.toJp('10001')).toBe('一万一');
      expect(NumToWord.toJp('100001')).toBe('十万一');
      expect(NumToWord.toJp('1000001')).toBe('百万一');
    });

    test('handles exact ten-thousand multiples', () => {
      expect(NumToWord.toJp('10000')).toBe('一万');
      expect(NumToWord.toJp('20000')).toBe('二万');
      expect(NumToWord.toJp('100000')).toBe('十万');
      expect(NumToWord.toJp('200000')).toBe('二十万');
      expect(NumToWord.toJp('1000000')).toBe('百万');
      expect(NumToWord.toJp('10000000')).toBe('千万');
    });

    test('handles exact oku multiples', () => {
      expect(NumToWord.toJp('100000000')).toBe('一億');
      expect(NumToWord.toJp('200000000')).toBe('二億');
      expect(NumToWord.toJp('1000000000')).toBe('十億');
      expect(NumToWord.toJp('10000000000')).toBe('百億');
      expect(NumToWord.toJp('100000000000')).toBe('千億');
    });

    test('handles exact cho multiples', () => {
      expect(NumToWord.toJp('1000000000000')).toBe('一兆');
      expect(NumToWord.toJp('10000000000000')).toBe('十兆');
      expect(NumToWord.toJp('100000000000000')).toBe('百兆');
      expect(NumToWord.toJp('1000000000000000')).toBe('千兆');
    });

    test('handles ascending digits', () => {
      expect(NumToWord.toJp('12345678')).toBe('千二百三十四万五千六百七十八');
    });

    test('handles descending digits', () => {
      expect(NumToWord.toJp('98765432')).toBe('九千八百七十六万五千四百三十二');
    });

    test('handles palindromic numbers', () => {
      expect(NumToWord.toJp('11')).toBe('十一');
      expect(NumToWord.toJp('101')).toBe('百一');
      expect(NumToWord.toJp('121')).toBe('百二十一');
      expect(NumToWord.toJp('12321')).toBe('一万二千三百二十一');
    });

    test('handles number type input (not string)', () => {
      expect(NumToWord.toJp(456)).toBe('四百五十六');
    });

    test('handles numbers just below and above man boundary', () => {
      expect(NumToWord.toJp('9999')).toBe('九千九百九十九');
      expect(NumToWord.toJp('10000')).toBe('一万');
      expect(NumToWord.toJp('10001')).toBe('一万一');
    });

    test('handles numbers just below and above oku boundary', () => {
      expect(NumToWord.toJp('99999999')).toBe('九千九百九十九万九千九百九十九');
      expect(NumToWord.toJp('100000000')).toBe('一億');
      expect(NumToWord.toJp('100000001')).toBe('一億一');
    });

    test('handles tab characters', () => {
      expect(NumToWord.toJp('\t456\t')).toBe('四百五十六');
    });

    test('handles newline characters', () => {
      expect(NumToWord.toJp('123\n456')).toBe('十二万三千四百五十六');
    });

    test('handles unicode spaces (全角スペース)', () => {
      expect(NumToWord.toJp('123\u3000456')).toBe('十二万三千四百五十六');
    });

    test('handles negative numbers', () => {
      expect(() => NumToWord.toJp('-1')).toThrow();
      expect(() => NumToWord.toJp('-123')).toThrow();
      expect(() => NumToWord.toJp('-0.5')).toThrow();
    });
  });

  describe('toJpDaiji - Japanese Daiji Conversion', () => {
    test('converts to daiji numerals', () => {
      expect(NumToWord.toJpDaiji('0')).toBe('零');
      expect(NumToWord.toJpDaiji('1')).toBe('壱');
      expect(NumToWord.toJpDaiji('2')).toBe('弐');
      expect(NumToWord.toJpDaiji('3')).toBe('参');
      expect(NumToWord.toJpDaiji('4')).toBe('肆');
      expect(NumToWord.toJpDaiji('5')).toBe('伍');
      expect(NumToWord.toJpDaiji('6')).toBe('陸');
      expect(NumToWord.toJpDaiji('7')).toBe('漆');
      expect(NumToWord.toJpDaiji('8')).toBe('捌');
      expect(NumToWord.toJpDaiji('9')).toBe('玖');
      expect(NumToWord.toJpDaiji('10')).toBe('拾');
      expect(NumToWord.toJpDaiji('20')).toBe('弐拾');
      expect(NumToWord.toJpDaiji('99')).toBe('玖拾玖');
    });

    test('converts hundreds to daiji', () => {
      expect(NumToWord.toJpDaiji('100')).toBe('壱陌');
      expect(NumToWord.toJpDaiji('200')).toBe('弐陌');
      expect(NumToWord.toJpDaiji('999')).toBe('玖陌玖拾玖');
    });

    test('converts thousands to daiji', () => {
      expect(NumToWord.toJpDaiji('1000')).toBe('壱阡');
      expect(NumToWord.toJpDaiji('2000')).toBe('弐阡');
      expect(NumToWord.toJpDaiji('9999')).toBe('玖阡玖陌玖拾玖');
    });

    test('converts compound numbers to daiji', () => {
      expect(NumToWord.toJpDaiji('123')).toBe('壱陌弐拾参');
      expect(NumToWord.toJpDaiji('1234')).toBe('壱阡弐陌参拾肆');
    });

    test('converts with man unit', () => {
      expect(NumToWord.toJpDaiji('10000')).toBe('壱萬');
      expect(NumToWord.toJpDaiji('12345')).toBe('壱萬弐阡参陌肆拾伍');
      expect(NumToWord.toJpDaiji('123456789')).toBe('壱億弐阡参陌肆拾伍萬陸阡漆陌捌拾玖');
    });

    test('converts decimals to daiji', () => {
      expect(NumToWord.toJpDaiji('1.5')).toBe('壱・伍');
      expect(NumToWord.toJpDaiji('12.34')).toBe('拾弐・参肆');
      expect(NumToWord.toJpDaiji('123.456')).toBe('壱陌弐拾参・肆伍陸');
    });

    test('throws error for invalid input', () => {
      expect(() => NumToWord.toJpDaiji('abc')).toThrow('NaN');
    });

    test('converts complex patterns to daiji', () => {
      expect(NumToWord.toJpDaiji('111')).toBe('壱陌拾壱');
      expect(NumToWord.toJpDaiji('222')).toBe('弐陌弐拾弐');
      expect(NumToWord.toJpDaiji('555')).toBe('伍陌伍拾伍');
      expect(NumToWord.toJpDaiji('888')).toBe('捌陌捌拾捌');
    });

    test('converts numbers with zeros to daiji', () => {
      expect(NumToWord.toJpDaiji('101')).toBe('壱陌壱');
      expect(NumToWord.toJpDaiji('1001')).toBe('壱阡壱');
      expect(NumToWord.toJpDaiji('10001')).toBe('壱萬壱');
      expect(NumToWord.toJpDaiji('100001')).toBe('拾萬壱');
      expect(NumToWord.toJpDaiji('1010')).toBe('壱阡拾');
    });

    test('converts large numbers to daiji', () => {
      expect(NumToWord.toJpDaiji('99999')).toBe('玖萬玖阡玖陌玖拾玖');
      expect(NumToWord.toJpDaiji('123456')).toBe('拾弐萬参阡肆陌伍拾陸');
      expect(NumToWord.toJpDaiji('1000000')).toBe('壱陌萬');
    });

    test('converts decimals with various patterns to daiji', () => {
      expect(NumToWord.toJpDaiji('0.1')).toBe('零・壱');
      expect(NumToWord.toJpDaiji('1.23')).toBe('壱・弐参');
      expect(NumToWord.toJpDaiji('99.99')).toBe('玖拾玖・玖玖');
    });

    test('uses 零 for zero', () => {
      expect(NumToWord.toJpDaiji('0')).toBe('零');
      expect(NumToWord.toJpDaiji('0.0')).toBe('零・零');
    });

    test('handles zeros in decimal part', () => {
      expect(NumToWord.toJpDaiji('1.0')).toBe('壱・零');
      expect(NumToWord.toJpDaiji('1.00')).toBe('壱・零零');
      expect(NumToWord.toJpDaiji('10.01')).toBe('拾・零壱');
      expect(NumToWord.toJpDaiji('1.0000')).toBe('壱・零零零零');
      expect(NumToWord.toJpDaiji('0.0001')).toBe('零・零零零壱');
      expect(NumToWord.toJpDaiji('0.001')).toBe('零・零零壱');
    });

    test('explicitly uses 壱 before 百千', () => {
      expect(NumToWord.toJpDaiji('10')).toBe('拾');
      expect(NumToWord.toJpDaiji('100')).toBe('壱陌');
      expect(NumToWord.toJpDaiji('1000')).toBe('壱阡');
      expect(NumToWord.toJpDaiji('10000')).toBe('壱萬');
    });

    test('handles exact unit multiples', () => {
      expect(NumToWord.toJpDaiji('10000')).toBe('壱萬');
      expect(NumToWord.toJpDaiji('100000')).toBe('拾萬');
      expect(NumToWord.toJpDaiji('1000000')).toBe('壱陌萬');
      expect(NumToWord.toJpDaiji('100000000')).toBe('壱億');
    });

    test('handles negative numbers', () => {
      expect(() => NumToWord.toJpDaiji('-1')).toThrow();
      expect(() => NumToWord.toJpDaiji('-123')).toThrow();
    });
  });

  describe('toSi - SI Prefix Conversion', () => {
    test('returns number as-is for values less than 1000', () => {
      expect(NumToWord.toSi('0')).toBe('0.');
      expect(NumToWord.toSi('1')).toBe('1.');
      expect(NumToWord.toSi('999')).toBe('999.');
      expect(NumToWord.toSi('0.5')).toBe('0.5');
      expect(NumToWord.toSi('0.999')).toBe('0.999');
      expect(NumToWord.toSi('100.5')).toBe('100.5');
    });

    test('handles edge of K boundary', () => {
      expect(NumToWord.toSi('999')).toBe('999.');
      expect(NumToWord.toSi('1000')).toBe('1K');
      expect(NumToWord.toSi('1001')).toBe('1.001K');
    });

    test('converts to K (thousands)', () => {
      expect(NumToWord.toSi('1000')).toBe('1K');
      expect(NumToWord.toSi('1500')).toBe('1.5K');
      expect(NumToWord.toSi('2000')).toBe('2K');
      expect(NumToWord.toSi('2500')).toBe('2.5K');
      expect(NumToWord.toSi('10000')).toBe('10K');
      expect(NumToWord.toSi('100000')).toBe('100K');
      expect(NumToWord.toSi('999000')).toBe('999K');
      expect(NumToWord.toSi('999999')).toBe('999.999K');
    });

    test('converts to M (millions)', () => {
      expect(NumToWord.toSi('1000000')).toBe('1M');
      expect(NumToWord.toSi('1500000')).toBe('1.5M');
      expect(NumToWord.toSi('2000000')).toBe('2M');
      expect(NumToWord.toSi('10000000')).toBe('10M');
      expect(NumToWord.toSi('100000000')).toBe('100M');
      expect(NumToWord.toSi('123456789')).toBe('123.457M');
    });

    test('converts to G (billions)', () => {
      expect(NumToWord.toSi('1000000000')).toBe('1G');
      expect(NumToWord.toSi('1500000000')).toBe('1.5G');
      expect(NumToWord.toSi('999000000000')).toBe('999G');
    });

    test('converts to T (trillions)', () => {
      expect(NumToWord.toSi('1000000000000')).toBe('1T');
      expect(NumToWord.toSi('1500000000000')).toBe('1.5T');
    });

    test('converts to P (petabytes)', () => {
      expect(NumToWord.toSi('1000000000000000')).toBe('1P');
      expect(NumToWord.toSi('1500000000000000')).toBe('1.5P');
    });

    test('converts to E (exabytes)', () => {
      expect(NumToWord.toSi('1000000000000000000')).toBe('1E');
    });

    test('handles decimals in input', () => {
      expect(NumToWord.toSi('1234.567')).toBe('1.235K');
      expect(NumToWord.toSi('1234567.89')).toBe('1.235M');
    });

    test('throws error for overflow', () => {
      const bigNumber = '1' + '0'.repeat(35);
      expect(() => NumToWord.toSi(bigNumber)).toThrow('Overflow');
    });

    test('throws error for invalid input', () => {
      expect(() => NumToWord.toSi('abc')).toThrow('NaN');
      expect(() => NumToWord.toSi('12x34')).toThrow('NaN');
      expect(() => NumToWord.toSi('123xyz')).toThrow('NaN');
    });

    test('throws error for empty input', () => {
      expect(() => NumToWord.toSi('')).toThrow('Invalid argument: expected a number or string');
      expect(() => NumToWord.toSi(undefined)).toThrow('Invalid argument: expected a number or string');
    });

    test('handles precise K values', () => {
      expect(NumToWord.toSi('1234')).toBe('1.234K');
      expect(NumToWord.toSi('9876')).toBe('9.876K');
      expect(NumToWord.toSi('12345')).toBe('12.345K');
    });

    test('handles precise M values', () => {
      expect(NumToWord.toSi('1234567')).toBe('1.235M');
      expect(NumToWord.toSi('9876543')).toBe('9.877M');
      expect(NumToWord.toSi('12345678')).toBe('12.346M');
    });

    test('handles precise G values', () => {
      expect(NumToWord.toSi('1234567890')).toBe('1.235G');
      expect(NumToWord.toSi('9876543210')).toBe('9.877G');
    });

    test('handles values at exact boundaries', () => {
      expect(NumToWord.toSi('1000')).toBe('1K');
      expect(NumToWord.toSi('1000000')).toBe('1M');
      expect(NumToWord.toSi('1000000000')).toBe('1G');
      expect(NumToWord.toSi('1000000000000')).toBe('1T');
      expect(NumToWord.toSi('1000.0')).toBe('1K');
      expect(NumToWord.toSi('1000.00')).toBe('1K');
    });

    test('handles values just below 1K boundary with decimals', () => {
      expect(NumToWord.toSi('999.9999')).toBe('999.9999');
      expect(NumToWord.toSi('999.999')).toBe('999.999');
      expect(NumToWord.toSi('999.9')).toBe('999.9');
      expect(NumToWord.toSi('999.99')).toBe('999.99');
    });

    test('handles values just above 1K boundary with decimals', () => {
      expect(NumToWord.toSi('1000.0001')).toBe('1K');
      expect(NumToWord.toSi('1000.1')).toBe('1K');
    });

    test('handles K to M transition precision', () => {
      expect(NumToWord.toSi('999500')).toBe('999.5K');
      expect(NumToWord.toSi('999999')).toBe('999.999K');
      expect(NumToWord.toSi('999999.9')).toBe('1000K');
    });

    test('handles M to G transition precision', () => {
      expect(NumToWord.toSi('999999999')).toBe('1000M');
      expect(NumToWord.toSi('999500000')).toBe('999.5M');
    });

    test('handles rounding at various scales', () => {
      expect(NumToWord.toSi('1234.5')).toBe('1.235K');
      expect(NumToWord.toSi('1234567.8')).toBe('1.235M');
      expect(NumToWord.toSi('1234567890.1')).toBe('1.235G');
    });

    test('handles precise boundary transitions', () => {
      expect(NumToWord.toSi('999999.999')).toBe('1000K');
      expect(NumToWord.toSi('999999999.999')).toBe('1000M');
    });

    test('handles powers of 10', () => {
      expect(NumToWord.toSi('1000')).toBe('1K');
      expect(NumToWord.toSi('10000')).toBe('10K');
      expect(NumToWord.toSi('100000')).toBe('100K');
      expect(NumToWord.toSi('1000000')).toBe('1M');
      expect(NumToWord.toSi('10000000')).toBe('10M');
      expect(NumToWord.toSi('100000000')).toBe('100M');
      expect(NumToWord.toSi('1000000000')).toBe('1G');
    });

    test('handles very large numbers up to limit', () => {
      expect(NumToWord.toSi('1000000000000000')).toBe('1P');
      expect(NumToWord.toSi('1000000000000000000')).toBe('1E');
      expect(NumToWord.toSi('1000000000000000000000')).toBe('1Z');
      expect(NumToWord.toSi('1000000000000000000000000')).toBe('1Y');
    });

    test('handles negative numbers', () => {
      expect(() => NumToWord.toSi('-1')).toThrow();
      expect(() => NumToWord.toSi('-1000')).toThrow();
    });
  });

  describe('toLocaleString - Locale-based Conversion', () => {
    test('routes to Si converter with case variations', () => {
      expect(NumToWord.toLocaleString('si', '1000')).toBe('1K');
      expect(NumToWord.toLocaleString('Si', '1000')).toBe('1K');
      expect(NumToWord.toLocaleString('SI', '1000')).toBe('1K');
      expect(NumToWord.toLocaleString('sI', '1000')).toBe('1K');
    });

    test('routes to En converter with case variations', () => {
      expect(NumToWord.toLocaleString('en', '123')).toBe('One hundred twenty-three');
      expect(NumToWord.toLocaleString('En', '123')).toBe('One hundred twenty-three');
      expect(NumToWord.toLocaleString('eN', '123')).toBe('One hundred twenty-three');
      expect(NumToWord.toLocaleString('EN', '123')).toBe('One hundred twenty-three');
      expect(NumToWord.toLocaleString('english', '123')).toBe('One hundred twenty-three');
      expect(NumToWord.toLocaleString('English', '123')).toBe('One hundred twenty-three');
      expect(NumToWord.toLocaleString('ENGLISH', '123')).toBe('One hundred twenty-three');
      expect(NumToWord.toLocaleString('eNgLiSh', '123')).toBe('One hundred twenty-three');
    });

    test('routes to Jp converter with case variations', () => {
      expect(NumToWord.toLocaleString('jp', '123')).toBe('百二十三');
      expect(NumToWord.toLocaleString('Jp', '123')).toBe('百二十三');
      expect(NumToWord.toLocaleString('jP', '123')).toBe('百二十三');
      expect(NumToWord.toLocaleString('JP', '123')).toBe('百二十三');
      expect(NumToWord.toLocaleString('japanese', '123')).toBe('百二十三');
      expect(NumToWord.toLocaleString('Japanese', '123')).toBe('百二十三');
      expect(NumToWord.toLocaleString('JAPANESE', '123')).toBe('百二十三');
      expect(NumToWord.toLocaleString('jApAnEsE', '123')).toBe('百二十三');
    });

    test('routes to JpDaiji converter with case variations', () => {
      expect(NumToWord.toLocaleString('jpDaiji', '123')).toBe('壱陌弐拾参');
      expect(NumToWord.toLocaleString('JpDaiji', '123')).toBe('壱陌弐拾参');
      expect(NumToWord.toLocaleString('JPDaiji', '123')).toBe('壱陌弐拾参');
      expect(NumToWord.toLocaleString('jpDAIJI', '123')).toBe('壱陌弐拾参');
      expect(NumToWord.toLocaleString('JPDAIJI', '123')).toBe('壱陌弐拾参');
      expect(NumToWord.toLocaleString('daiji', '123')).toBe('壱陌弐拾参');
      expect(NumToWord.toLocaleString('Daiji', '123')).toBe('壱陌弐拾参');
      expect(NumToWord.toLocaleString('DAIJI', '123')).toBe('壱陌弐拾参');
      expect(NumToWord.toLocaleString('DaIjI', '123')).toBe('壱陌弐拾参');
      expect(NumToWord.toLocaleString('dAiJi', '123')).toBe('壱陌弐拾参');
    });

    test('throws error for invalid locale', () => {
      expect(() => NumToWord.toLocaleString('invalid', '123')).toThrow('Invalid locale');
      expect(() => NumToWord.toLocaleString('fr', '123')).toThrow('Invalid locale');
    });

    test('throws error for empty locale', () => {
      expect(() => NumToWord.toLocaleString('', '123')).toThrow('Invalid argument: expected a number or string');
      expect(() => NumToWord.toLocaleString(null, '123')).toThrow('Invalid argument: expected a number or string');
    });

    test('throws error for empty number', () => {
      expect(() => NumToWord.toLocaleString('en', '')).toThrow('Invalid argument: expected a number or string');
      expect(() => NumToWord.toLocaleString('en', null)).toThrow('Invalid argument: expected a number or string');
    });

    test('produces same results as direct methods', () => {
      expect(NumToWord.toLocaleString('en', '12345')).toBe(NumToWord.toEn('12345'));
      expect(NumToWord.toLocaleString('jp', '12345')).toBe(NumToWord.toJp('12345'));
      expect(NumToWord.toLocaleString('daiji', '12345')).toBe(NumToWord.toJpDaiji('12345'));
      expect(NumToWord.toLocaleString('si', '12345')).toBe(NumToWord.toSi('12345'));
    });

    test('all methods handle same edge cases consistently', () => {
      const testValue = '0';
      expect(NumToWord.toEn(testValue)).toBe('Zero');
      expect(NumToWord.toJp(testValue)).toBe('〇');
      expect(NumToWord.toJpDaiji(testValue)).toBe('零');
      expect(NumToWord.toSi(testValue)).toBe('0.');
    });

    test('all methods handle decimals consistently', () => {
      expect(NumToWord.toEn('0.5')).toContain('point');
      expect(NumToWord.toJp('0.5')).toContain('・');
      expect(NumToWord.toJpDaiji('0.5')).toContain('・');
    });

    test('same decimal produces consistent format across methods', () => {
      const testNum = '123.456';
      expect(NumToWord.toEn(testNum)).toContain('point');
      expect(NumToWord.toJp(testNum)).toContain('・');
      expect(NumToWord.toJpDaiji(testNum)).toContain('・');
    });
  });

  describe('Version', () => {
    test('has version property with correct format', () => {
      expect(NumToWord.version).toBeDefined();
      expect(typeof NumToWord.version).toBe('string');
      expect(NumToWord.version).toMatch(/^\d+\.\d+\.\d+$/);
    });
  });
});
