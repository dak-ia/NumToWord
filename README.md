# num-to-word

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![Coverage](https://img.shields.io/badge/dynamic/json?url=https://gist.githubusercontent.com/dak-ia/1bf4a4df60ed549dfd9a42b24c72045e/raw/num-to-word-coverage.json&label=coverage&query=$.coverage&suffix=%25&color=brightgreen)](https://github.com/dak-ia/num-to-word/actions/workflows/jest-check.yml)

数字を各言語の単語に変換します（英語、日本語、SI 接頭語）。

Convert numbers to words in multiple languages (English, Japanese, SI prefixes).

---

## 📖 目次 / Table of Contents

- [📦 インストール / Installation](#インストール--installation)
- [🚀 クイックスタート / Quick Start](#クイックスタート--quick-start)
- [📚 API リファレンス / API Reference](#apiリファレンス--api-reference)
- [📝 入力形式 / Input Format](#入力形式--input-format)
- [💻 TypeScript サポート / TypeScript Support](#typescript-サポート--typescript-support)
- [🛠️ 開発 / Development](#開発--development)

---

## 📦 インストール / Installation

最新リリースは [Releases ページ](https://github.com/dak-ia/num-to-word/releases) からダウンロードできます。

Download the latest release from the [Releases page](https://github.com/dak-ia/num-to-word/releases).

<!-- **npm (公開準備中 / coming soon)**

```bash
# 公開後に利用可能になります / Will be available after publication
npm install num-to-word
``` -->

## 🚀 クイックスタート / Quick Start

**Node.js (CommonJS)**

```javascript
const NumToWord = require("num-to-word");

console.log(NumToWord.toEn(123456.789));
// → "One hundred twenty-three thousand four hundred fifty-six point seven eight nine"
```

**Node.js (ESM)**

```javascript
import NumToWord from "num-to-word";

console.log(NumToWord.toEn(123456.789));
// → "One hundred twenty-three thousand four hundred fifty-six point seven eight nine"
```

## 📚 APIリファレンス / API Reference

### `NumToWord.toEn(num)`

数字を英語の単語に変換します。

Convert a number to English words.

- **引数 / Parameters**: `num` (number | string) - 変換する数字 / The number to convert
- **戻り値 / Returns**: string - 英語表現 / English word representation
- **範囲 / Range**: 10^306 (Uncentillion) まで / Up to 10^306 (Uncentillion)
- **例 / Example**:
  ```javascript
  NumToWord.toEn(123); // "One hundred twenty-three"
  NumToWord.toEn(123.45); // "One hundred twenty-three point four five"
  NumToWord.toEn("1234567"); // "One million two hundred thirty-four thousand five hundred sixty-seven"
  ```

### `NumToWord.toJp(num)`

数字を日本語の漢数字に変換します。

Convert a number to Japanese Kanji numerals.

- **引数 / Parameters**: `num` (number | string) - 変換する数字 / The number to convert
- **戻り値 / Returns**: string - 日本語（漢数字）表現 / Japanese Kanji representation
- **範囲 / Range**: 10^68 (無量大数) まで / Up to 10^68 (無量大数)
- **例 / Example**:
  ```javascript
  NumToWord.toJp(123); // "百二十三"
  NumToWord.toJp(123.45); // "百二十三・四五"
  NumToWord.toJp("1234567"); // "百二十三万四千五百六十七"
  ```

### `NumToWord.toJpDaiji(num)`

数字を日本語の大字に変換します。

Convert a number to Japanese Daiji (formal) numerals.

- **引数 / Parameters**: `num` (number | string) - 変換する数字 / The number to convert
- **戻り値 / Returns**: string - 日本語（大字）表現 / Japanese Daiji representation
- **範囲 / Range**: 10^68 まで対応、大字変換は萬 (10,000) まで / Up to 10^68, Daiji conversion up to 萬 (10,000)
- **例 / Example**:
  ```javascript
  NumToWord.toJpDaiji(123); // "壱陌弐拾参"
  NumToWord.toJpDaiji("1234567"); // "壱陌弐拾参萬肆阡伍陌陸拾漆"
  ```

### `NumToWord.toSi(num)`

数字を SI 接頭語表記に変換します。

Convert a number to SI prefix notation.

- **引数 / Parameters**: `num` (number | string) - 変換する数字 / The number to convert
- **戻り値 / Returns**: string - SI 接頭語表現 / SI prefix representation
- **範囲 / Range**: 10^30 (Q - Quetta) まで / Up to 10^30 (Q - Quetta)
- **接頭語 / Prefixes**: K, M, G, T, P, E, Z, Y, R, Q
- **例 / Example**:
  ```javascript
  NumToWord.toSi(1234); // "1.234K"
  NumToWord.toSi(1234567); // "1.235M"
  NumToWord.toSi("1234567890"); // "1.235G"
  ```

### `NumToWord.toLocaleString(locale, num)`

指定したロケールで数字を変換します。

Convert a number using the specified locale.

- **引数 / Parameters**:
  - `locale` (string) - ロケール識別子 / Locale identifier: `"si"`, `"en"`, `"english"`, `"jp"`, `"japanese"`, `"jpdaiji"`, `"daiji"`
  - `num` (number | string) - 変換する数字 / The number to convert
- **戻り値 / Returns**: string - ロケール対応表現 / Localized representation
- **例 / Example**:
  ```javascript
  NumToWord.toLocaleString("en", 123); // "One hundred twenty-three"
  NumToWord.toLocaleString("jp", 123); // "百二十三"
  NumToWord.toLocaleString("si", 123456); // "123.456K"
  ```

## 📝 入力形式 / Input Format

### サポートされている入力タイプ / Supported Input Types

- **number 型 / Number type**: `NumToWord.toEn(123)`
- **string 型（推奨）/ String type (recommended)**: `NumToWord.toEn("123")`
- **全角数字 / Full-width numbers**: `NumToWord.toEn("123")` （自動変換 / converted automatically）
- **カンマ区切り / With commas**: `NumToWord.toEn("123,456,789")` （自動的に削除 / commas removed automatically）

## 💻 TypeScript サポート / TypeScript Support

TypeScript 型定義が含まれています。

TypeScript definitions are included.

```typescript
import NumToWord from "num-to-word";

const result: string = NumToWord.toEn(123);
```

## 🛠️ 開発 / Development

### ビルド / Build

```bash
npm run build         # ビルドを実行 / Build the project
```

### テストの実行 / Running Tests

```bash
npm test              # 全テストを実行 / Run all tests
npm run test:watch    # ウォッチモードでテストを実行 / Run tests in watch mode
npm run test:coverage # カバレッジレポート付きでテストを実行 / Run tests with coverage report
```

---

## ライセンス / License

MIT License

## 作者 / Author

[dak-ia](https://github.com/dak-ia)

## リポジトリ / Repository

https://github.com/dak-ia/num-to-word
