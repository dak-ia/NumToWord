# NumToWord.js

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D12.0.0-brightgreen.svg)](https://nodejs.org/)

数字を各言語の単語に変換します（英語、日本語、SI 接頭語）。

Convert numbers to words in multiple languages (English, Japanese, SI prefixes).

---

## 📖 目次 / Table of Contents

- [日本語](#日本語)
  - [インストール](#インストール)
  - [クイックスタート](#クイックスタート)
  - [API リファレンス](#apiリファレンス)
  - [入力形式](#入力形式)
  - [エラーハンドリング](#エラーハンドリング)
- [English](#english)
  - [Installation](#installation)
  - [Quick Start](#quick-start)
  - [API Reference](#api-reference)
  - [Input Format](#input-format)
  - [Error Handling](#error-handling)

---

## 日本語

### インストール

最新リリースは [Releases ページ](https://github.com/dak-ia/NumToWord.js/releases) からダウンロードできます。

<!-- **npm (公開準備中)**

```bash
# 公開後に利用可能になります
npm install num-to-word
``` -->

### クイックスタート

**Node.js (CommonJS)**

```javascript
const NumToWord = require("num-to-word");

console.log(NumToWord.toEn(123456.789));
// → "One hundred twenty-three thousand four hundred fifty-six point seven eight nine"
```

**Node.js (ESM)**

```javascript
import NumToWord from "num-to-word";

// 英語
console.log(NumToWord.toEn(123456.789));
// → "One hundred twenty-three thousand four hundred fifty-six point seven eight nine"

// 日本語
console.log(NumToWord.toJp(123456.789));
// → "十二万三千四百五十六・七八九"

// SI接頭語
console.log(NumToWord.toSi(123456.789));
// → "123.457K"

// ロケール指定
console.log(NumToWord.toLocaleString("jp", 123456));
// → "十二万三千四百五十六"
```

**ブラウザ (HTML)**

```html
<script src="./NumToWord.js"></script>
<script>
  document.getElementById("result").textContent = NumToWord.toJp(12345);
</script>
```

### API リファレンス

#### `NumToWord.toEn(num)`

数字を英語の単語に変換します。

- **引数**: `num` (number | string) - 変換する数字
- **戻り値**: string - 英語表現
- **範囲**: 10^306 (Uncentillion) まで
- **例**:
  ```javascript
  NumToWord.toEn(123); // "One hundred twenty-three"
  NumToWord.toEn(123.45); // "One hundred twenty-three point four five"
  NumToWord.toEn("1234567"); // "One million two hundred thirty-four thousand five hundred sixty-seven"
  ```

#### `NumToWord.toJp(num)`

数字を日本語の漢数字に変換します。

- **引数**: `num` (number | string) - 変換する数字
- **戻り値**: string - 日本語（漢数字）表現
- **範囲**: 10^68 (無量大数) まで
- **例**:
  ```javascript
  NumToWord.toJp(123); // "百二十三"
  NumToWord.toJp(123.45); // "百二十三・四五"
  NumToWord.toJp("1234567"); // "百二十三万四千五百六十七"
  ```

#### `NumToWord.toJpDaiji(num)`

数字を日本語の大字に変換します。

- **引数**: `num` (number | string) - 変換する数字
- **戻り値**: string - 日本語（大字）表現
- **範囲**: 10^68 まで対応、大字変換は萬 (10,000) まで
- **例**:
  ```javascript
  NumToWord.toJpDaiji(123); // "壱陌弐拾参"
  NumToWord.toJpDaiji("1234567"); // "壱陌弐拾参萬肆阡伍陌陸拾漆"
  ```

#### `NumToWord.toSi(num)`

数字を SI 接頭語表記に変換します（四捨五入）。

- **引数**: `num` (number | string) - 変換する数字
- **戻り値**: string - SI 接頭語表現
- **範囲**: 10^30 (Q - Quetta) まで
- **接頭語**: K, M, G, T, P, E, Z, Y, R, Q
- **例**:
  ```javascript
  NumToWord.toSi(1234); // "1.234K"
  NumToWord.toSi(1234567); // "1.235M"
  NumToWord.toSi("1234567890"); // "1.235G"
  ```

#### `NumToWord.toLocaleString(locale, num)`

指定したロケールで数字を変換します。

- **引数**:
  - `locale` (string) - ロケール識別子: `"si"`, `"en"`, `"english"`, `"jp"`, `"japanese"`, `"jpdaiji"`, `"daiji"`
  - `num` (number | string) - 変換する数字
- **戻り値**: string - ロケール対応表現
- **例**:
  ```javascript
  NumToWord.toLocaleString("en", 123); // "One hundred twenty-three"
  NumToWord.toLocaleString("jp", 123); // "百二十三"
  NumToWord.toLocaleString("si", 123456); // "123.456K"
  ```

#### `NumToWord.version`

ライブラリのバージョン文字列。

```javascript
console.log(NumToWord.version); // "0.1.0"
```

### 入力形式

#### サポートされている入力タイプ

- **number 型**: `NumToWord.toEn(123)`
- **string 型（推奨）**: `NumToWord.toEn("123")`
- **全角数字**: `NumToWord.toEn("123")` （自動変換）
- **カンマ区切り**: `NumToWord.toEn("123,456,789")` （自動的に削除）

#### 重要な注意事項

⚠️ **大きな数字には string 型を推奨** - JavaScript の number 型の精度制限を回避できます。

```javascript
// number型は大きな値で精度が失われる可能性があります
NumToWord.toEn(12345678901234567890); // 予期しない結果になる可能性

// string型は精度を維持します
NumToWord.toEn("12345678901234567890"); // 正確な変換
```

### エラーハンドリング

不正な入力に対してエラーをスローします:

```javascript
try {
  NumToWord.toEn("abc"); // Error("NaN") をスロー
} catch (e) {
  console.error(e.message);
}

// TypeError: Invalid argument
NumToWord.toEn(); // TypeError をスロー
NumToWord.toEn(null); // TypeError をスロー

// Error: Overflow
NumToWord.toEn("1e400"); // Error をスロー（最大範囲を超過）

// Error: Invalid locale
NumToWord.toLocaleString("fr", 123); // Error をスロー
```

### TypeScript サポート

TypeScript 型定義が含まれています:

```typescript
import NumToWord = require("num-to-word");

const result: string = NumToWord.toEn(123);
```

### 開発

#### テストの実行

```bash
npm test              # 全テストを実行
npm run test:watch    # ウォッチモードでテストを実行
npm run test:coverage # カバレッジレポート付きでテストを実行
```

### 制限事項と今後の予定

#### 現在の制限事項

- ❌ 指数表記未対応（例: `1e10`）
- ❌ 千の位の区切りはカンマのみ対応（ピリオドやスペースは未対応）
- ❌ 英語と日本語のみ対応
- ❌ 逆変換未対応（単語 → 数字）

#### 今後の予定

- [ ] 他言語対応
- [ ] ピリオド/スペースを千の位区切りとしてサポート
- [ ] 指数表記の入力対応
- [ ] 数学記号のサポート
- [ ] Short scale と Long scale の数値体系対応
- [ ] 逆変換（単語 → 数字）
- [ ] 現在の制限を超えた範囲の拡張

---

## English

## Installation

Download the latest release from the [Releases page](https://github.com/dak-ia/NumToWord.js/releases).

<!-- **npm (coming soon)**

```bash
# Will be available after publication
npm install num-to-word
``` -->

## Quick Start

**Node.js (CommonJS)**

```javascript
const NumToWord = require("num-to-word");

console.log(NumToWord.toEn(123456.789));
// → "One hundred twenty-three thousand four hundred fifty-six point seven eight nine"
```

**Node.js (ESM)**

```javascript
import NumToWord from "num-to-word";

// English
console.log(NumToWord.toEn(123456.789));
// → "One hundred twenty-three thousand four hundred fifty-six point seven eight nine"

// Japanese
console.log(NumToWord.toJp(123456.789));
// → "十二万三千四百五十六・七八九"

// SI prefix
console.log(NumToWord.toSi(123456.789));
// → "123.457K"

// Auto-select by locale
console.log(NumToWord.toLocaleString("en", 123456));
// → "One hundred twenty-three thousand four hundred fifty-six"
```

**Browser (HTML)**

```html
<script src="./NumToWord.js"></script>
<script>
  document.getElementById("result").textContent = NumToWord.toJp(12345);
</script>
```

## API Reference

### `NumToWord.toEn(num)`

Convert a number to English words.

- **Parameters**: `num` (number | string) - The number to convert
- **Returns**: string - English word representation
- **Range**: Up to 10^306 (Uncentillion)
- **Example**:
  ```javascript
  NumToWord.toEn(123); // "One hundred twenty-three"
  NumToWord.toEn(123.45); // "One hundred twenty-three point four five"
  NumToWord.toEn("1234567"); // "One million two hundred thirty-four thousand five hundred sixty-seven"
  ```

### `NumToWord.toJp(num)`

Convert a number to Japanese Kanji numerals.

- **Parameters**: `num` (number | string) - The number to convert
- **Returns**: string - Japanese Kanji representation
- **Range**: Up to 10^68 (無量大数)
- **Example**:
  ```javascript
  NumToWord.toJp(123); // "百二十三"
  NumToWord.toJp(123.45); // "百二十三・四五"
  NumToWord.toJp("1234567"); // "百二十三万四千五百六十七"
  ```

### `NumToWord.toJpDaiji(num)`

Convert a number to Japanese Daiji (formal) numerals.

- **Parameters**: `num` (number | string) - The number to convert
- **Returns**: string - Japanese Daiji representation
- **Range**: Up to 10^68, Daiji conversion up to 萬 (10,000)
- **Example**:
  ```javascript
  NumToWord.toJpDaiji(123); // "壱陌弐拾参"
  NumToWord.toJpDaiji("1234567"); // "壱陌弐拾参萬肆阡伍陌陸拾漆"
  ```

### `NumToWord.toSi(num)`

Convert a number to SI prefix notation with rounding.

- **Parameters**: `num` (number | string) - The number to convert
- **Returns**: string - SI prefix representation
- **Range**: Up to 10^30 (Q - Quetta)
- **Prefixes**: K, M, G, T, P, E, Z, Y, R, Q
- **Example**:
  ```javascript
  NumToWord.toSi(1234); // "1.234K"
  NumToWord.toSi(1234567); // "1.235M"
  NumToWord.toSi("1234567890"); // "1.235G"
  ```

### `NumToWord.toLocaleString(locale, num)`

Convert a number using the specified locale.

- **Parameters**:
  - `locale` (string) - Locale identifier: `"si"`, `"en"`, `"english"`, `"jp"`, `"japanese"`, `"jpdaiji"`, `"daiji"`
  - `num` (number | string) - The number to convert
- **Returns**: string - Localized representation
- **Example**:
  ```javascript
  NumToWord.toLocaleString("en", 123); // "One hundred twenty-three"
  NumToWord.toLocaleString("jp", 123); // "百二十三"
  NumToWord.toLocaleString("si", 123456); // "123.456K"
  ```

### `NumToWord.version`

Library version string.

```javascript
console.log(NumToWord.version); // "0.1.0"
```

## Input Format

### Supported Input Types

- **Number type**: `NumToWord.toEn(123)`
- **String type** (recommended): `NumToWord.toEn("123")`
- **Full-width numbers**: `NumToWord.toEn("123")` (converted automatically)
- **With commas**: `NumToWord.toEn("123,456,789")` (commas removed automatically)

### Important Notes

⚠️ **String type is recommended** for large numbers to avoid JavaScript's number precision limitations.

```javascript
// Number type may lose precision for large values
NumToWord.toEn(12345678901234567890); // May produce unexpected results

// String type maintains precision
NumToWord.toEn("12345678901234567890"); // Accurate conversion
```

## Error Handling

The library throws errors for invalid input:

```javascript
try {
  NumToWord.toEn("abc"); // Throws Error("NaN")
} catch (e) {
  console.error(e.message);
}

// TypeError: Invalid argument
NumToWord.toEn(); // Throws TypeError
NumToWord.toEn(null); // Throws TypeError

// Error: Overflow
NumToWord.toEn("1e400"); // Throws Error (exceeds maximum range)

// Error: Invalid locale
NumToWord.toLocaleString("fr", 123); // Throws Error
```

## TypeScript Support

TypeScript definitions are included:

```typescript
import NumToWord = require("num-to-word");

const result: string = NumToWord.toEn(123);
```

## Development

### Running Tests

```bash
npm test              # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

## Limitations & Future Plans

### Current Limitations

- ❌ Exponential notation not supported (e.g., `1e10`)
- ❌ Only supports commas as thousand separators (not periods or spaces)
- ❌ Only English and Japanese languages
- ❌ No reverse conversion (words to numbers)

### Planned Features

- [ ] Support for other languages
- [ ] Support for period/space as thousand separators
- [ ] Exponential notation input
- [ ] Mathematical symbols support
- [ ] Short scale vs Long scale number systems
- [ ] Reverse conversion (words → numbers)
- [ ] Extended range beyond current limits

---

## ライセンス / License

MIT License

## 作者 / Author

[dak-ia](https://github.com/dak-ia)

## リポジトリ / Repository

https://github.com/dak-ia/NumToWord.js

## バージョン履歴 / Version History

- **0.1.0** (2023-06-18) - 初回リリース / Initial release
  - 英語単語変換（10^306 まで）/ English word conversion (up to 10^306)
  - 日本語漢数字変換（10^68 まで）/ Japanese Kanji conversion (up to 10^68)
  - 日本語大字変換 / Japanese Daiji conversion
  - SI 接頭語表記（10^30 まで）/ SI prefix notation (up to 10^30)
  - ロケールベース変換 / Locale-based conversion
