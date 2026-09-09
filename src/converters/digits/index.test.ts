import * as digits from "./index";
import * as pkg from "../../index";
import { localeMap } from "../numToWord";

// 変換関数は辞書から生成されるが、公開とロケール解決は手書きなので追随を忘れやすい
describe("digits", () => {
  test("every generated converter is exported from the package", () => {
    const missing = Object.entries(digits)
      .filter(([name, fn]) => (pkg as Record<string, unknown>)[name] !== fn)
      .map(([name]) => name);
    expect(missing).toEqual([]);
  });

  test("every generated converter answers to a locale of numToWord", () => {
    const mapped = new Set<unknown>(localeMap.map((entry) => entry.fn));
    const missing = Object.entries(digits)
      .filter(([, fn]) => !mapped.has(fn))
      .map(([name]) => name);
    expect(missing).toEqual([]);
  });
});
