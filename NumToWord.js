"use strict";

class NumToWord {
    static version = "0.1.0";

    #siSymbol = ["K", "M", "G", "T", "P", "E", "Z", "Y", "R", "Q"];
    #enOnesPlace = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    #enTens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    #enTensPlace = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    #enHundredsPlace = ["hundred"];
    #enOthersPlace = { 0: "", 3: "Thousand", 6: "Million", 9: "Billion", 12: "Trillion", 15: "Quadrillion", 18: "Quintillion", 21: "Sextillion", 24: "Septillion", 27: "Octillion", 30: "Nonillion", 33: "Decillion", 36: "Undecillion", 39: "Duodecillion", 42: "Tredecillion", 45: "Quattuordecillion", 48: "Quindecillion", 51: "Sexdecillion", 54: "Septendecillion", 57: "Octodecillion", 60: "Novemdecillion", 63: "Vigintillion", 66: "Unvigintillion", 69: "Duovigintillion", 72: "Trevigintillion", 75: "Quattuorvigintillion", 78: "Quinvigintillion", 81: "Sexvigintillion", 84: "Septenvigintillion", 87: "Octovigintillion", 90: "Novemvigintillion", 93: "Trigintillion", 96: "Untrigintillion", 99: "Duotrigintillion", 100: "Googol", 102: "Tretrigintillion", 105: "Quattuortrigintillion", 108: "Quinquatrigintillion", 111: "Sextrigintillion", 114: "Septentrigintillion", 117: "Octotrigintillion", 120: "Novemtrigintillion", 123: "Quadragintillion", 126: "Unquadragintillion", 129: "Duoquadragintillion", 132: "Trequadragintillion", 135: "Quattuorquadragintillion", 138: "Quinquadragintillion", 141: "Sexquadragintillion", 144: "Septenquadragintillion", 147: "Octoquadragintillion", 150: "Novemquadragintillion", 153: "Quinquagintillion", 156: "Unquinquagintillion", 159: "Duoquinquagintillion", 162: "Trequinquagintillion", 165: "Quattuorquinquagintillion", 168: "Quinquinquagintillion", 171: "Sexquinquagintillion", 174: "Septenquinquagintillion", 177: "Octoquinquagintillion", 180: "Novemquinquagintillion", 183: "Sexagintillion", 186: "Unsexagintillion", 189: "Duosexagintillion", 192: "Tresexagintillion", 195: "Quattuorsexagintillion", 198: "Quinsexagintillion", 201: "Sexsexagintillion", 204: "Septensexagintillion", 207: "Octosexagintillion", 210: "Novemsexagintillion", 213: "Septuagintillion", 216: "Unseptuagintillion", 219: "Duoseptuagintillion", 222: "Treseptuagintillion", 225: "Quattuorseptuagintillion", 228: "Quinseptuagintillion", 231: "Sexseptuagintillion", 234: "Septenseptuagintillion", 237: "Octoseptuagintillion", 240: "Novemseptuagintillion", 243: "Octogintillion", 246: "Unoctogintillion", 249: "Duooctogintillion", 252: "Treoctogintillion", 255: "Quattuoroctogintillion", 258: "Quinoctogintillion", 261: "Sexoctogintillion", 264: "Septenoctogintillion", 267: "Octooctogintillion", 270: "Novemoctogintillion", 273: "Nonagintillion", 276: "Unnonagintillion", 279: "Duononagintillion", 282: "Trenonagintillion", 285: "Quattuornonagintillion", 288: "Quinnonagintillion", 291: "Sexnonagintillion", 294: "Septennonagintillion", 297: "Octononagintillion", 300: "Novemnonagintillion", 303: "Centillion", 306: "Uncentillion" };
    #jpOnesPlace = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    #jpTHT = ["", "十", "百", "千"];
    #jpOthersPlace = ["", "万", "億", "兆", "京", "垓", "𥝱", "穣", "溝", "澗", "正", "載", "極", "恒河沙", "阿僧祇", "那由他", "不可思議", "無量大数"];
    #jpDaijiBefore = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "百", "千", "万"];
    #jpDaijiAfter = ["零", "壱", "弐", "参", "肆", "伍", "陸", "漆", "捌", "玖", "拾", "陌", "阡", "萬"];

    #convertToStrNum(num) {
        num = num.toString().replace(/[０-９]/g, function (s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
        }).replace(/．/g, ".").replace(/，/g, "").replace(/\,/g, "").replace(/\s/g, "").trim();
        // 小数点のみの入力をチェック
        if (/^\.+$/.test(num)) {
            throw new Error("NaN");
        }
        if (!RegExp(/[^0-9\.]/g, "").test(num) && (num.match(/\./g) || []).length <= 1) {
            if (num.substr(0, 1) == ".") {
                num = "0" + num;
            }
            if (num.substr(-1) == ".") {
                num = num + "0";
            }
            return num;
        } else {
            throw new Error("NaN");
        }
    }
    #splitNum(num) {
        if (num == null || num == undefined || num == "") {
            throw new TypeError("Cannot read property 'argument' of undefined");
        }
        num = this.#convertToStrNum(num);
        try {
            let numArray = { "integer": "", "decimal": "" };
            numArray.integer = num.split(".")[0] || "";
            numArray.decimal = num.split(".")[1] || "";
            return numArray;
        } catch (e) {
            if (e instanceof TypeError) {
                throw new TypeError("Invalid argument: Expected a string");
            } else {
                throw new Error("Unknown error");
            }
        }
    }
    #sliceTo1digitNum(num) {
        return num.split("");
    }
    #sliceTo3digitNum(num) {
        let result = [];
        let len = num.length;
        for (let i = 0; i < len; i = i + 3) {
            result.unshift(num.substr(-3, 3));
            num = num.slice(0, -3)
        }
        return result;
    }
    #sliceTo4digitNum(num) {
        let result = [];
        let len = num.length;
        for (let i = 0; i < len; i = i + 4) {
            result.unshift(num.substr(-4, 4));
            num = num.slice(0, -4)
        }
        return result;
    }
    #replaceIntUnitEn(num) {
        let numArray = num.split("");
        if (numArray.length > 3) {
            throw new Error("Overflow");
        }
        let result = "";
        if (numArray.length == 1) {
            result = this.#enOnesPlace[numArray[0]];
        } else {
            if (numArray.length == 2) {
                numArray.unshift("0");
            }
            if (numArray[1] == "0") {
                result = this.#enOnesPlace[numArray[2]];
            } else if (numArray[1] == "1") {
                result = this.#enTens[numArray[2]];
            } else {
                if (numArray[2] == "0") {
                    result = this.#enTensPlace[numArray[1]];
                } else {
                    result = this.#enTensPlace[numArray[1]] + "-" + this.#enOnesPlace[numArray[2]];
                }
            }
            if (numArray[0] != "0") {
                if (result == this.#enOnesPlace[0]) {
                    result = "";
                }
                result = this.#enOnesPlace[numArray[0]] + " " + this.#enHundredsPlace + " " + result;
            }
        }
        return result.trim();
    }
    #replaceIntUnitJp(num) {
        let numArray = num.split("").reverse();
        if (numArray.length > 4) {
            throw new Error("Overflow");
        }
        let result = "";
        for (let i = 0; i < numArray.length; i++) {
            if ((i > 0 && numArray[i] == "0") || (i == 0 && numArray.length > 1 && numArray[i] == "0")) {
            } else if (i > 0 && numArray[i] == "1") {
                result = this.#jpTHT[i] + result;
            } else {
                result = this.#jpOnesPlace[numArray[i]] + this.#jpTHT[i] + result;
            }
        }
        return result;
    }

    static toLocaleString(locale, num) {
        if (locale == null || locale == undefined || locale == "" || num == null || num == undefined || num == "") {
            throw new TypeError("Cannot read property 'argument' of undefined");
        }

        const localeLower = locale.toLowerCase();

        if (localeLower == "si") {
            return NumToWord.toSi(num);
        } else if (localeLower == "en" || localeLower == "english") {
            return NumToWord.toEn(num);
        } else if (localeLower == "jp" || localeLower == "japanese") {
            return NumToWord.toJp(num);
        } else if (localeLower == "jpdaiji" || localeLower == "daiji") {
            return NumToWord.toJpDaiji(num);
        } else {
            throw new Error("Invalid locale");
        }
    }

    static toSi(num) {
        const numToWord = new NumToWord();
        const numArray = numToWord.#splitNum(num);
        if (numArray.integer.length > (numToWord.#siSymbol.length + 1) * 3) {
            throw new Error("Overflow");
        }
        if (numArray.integer.length <= 3) {
            return numArray.integer + "." + numArray.decimal;
        } else {
            let integerArray = numToWord.#sliceTo3digitNum(numArray.integer);
            if (integerArray.length == 2) {
                return ((Math.round(Number(integerArray[0] + integerArray[1] + "." + numArray.decimal))) / 1000).toString() + numToWord.#siSymbol[0];
            } else {
                return ((Math.round(Number(integerArray[0] + integerArray[1] + "." + integerArray[2]))) / 1000).toString() + numToWord.#siSymbol[integerArray.length - 2];
            }
        }
    }

    static toEn(num) {
        const numToWord = new NumToWord();
        const numArray = numToWord.#splitNum(num);
        if (numArray.integer.length > (Object.values(numToWord.#enOthersPlace).length - 1) * 3) {
            throw new Error("Overflow");
        }
        // 連続ゼロを単一の0として扱う（小数部がない場合のみ）
        if (/^0+$/.test(numArray.integer) && numArray.decimal == "") {
            return "Zero";
        }
        let integerArray = numToWord.#sliceTo3digitNum(numArray.integer);
        let decimalArray = numToWord.#sliceTo1digitNum(numArray.decimal);
        integerArray = integerArray.reverse().map((num, i) => {
            return numToWord.#replaceIntUnitEn(num) + " " + numToWord.#enOthersPlace[i * 3].toLowerCase();
        }).reverse();
        if (integerArray.length > 1) {
            integerArray = integerArray.map((num) => {
                if (RegExp(numToWord.#enOnesPlace[0]).test(num)) {
                    return "";
                }
                return num;
            });
        }
        integerArray = integerArray.filter(num => num != "");
        decimalArray = decimalArray.map(num => {
            return numToWord.#enOnesPlace[num];
        });
        if (decimalArray.length > 0) {
            const result = (integerArray.join(" ").trim() + " point " + decimalArray.join(" ").trim()).trim();
            return result.slice(0, 1).toUpperCase() + result.slice(1);
        } else {
            const result = integerArray.join(" ").trim();
            return result.slice(0, 1).toUpperCase() + result.slice(1);
        }
    }

    static toJp(num) {
        const numToWord = new NumToWord();
        const numArray = numToWord.#splitNum(num);
        if (numArray.integer.length > numToWord.#jpOthersPlace.length * 4) {
            throw new Error("Overflow");
        }
        // ゼロの特別処理（小数部がない場合のみ）
        if (numArray.integer == "0" && numArray.decimal == "") {
            return numToWord.#jpOnesPlace[0];
        }
        // 連続ゼロを単一の0として扱う
        if (/^0+$/.test(numArray.integer) && numArray.decimal == "") {
            return numToWord.#jpOnesPlace[0];
        }
        let integerArray = numToWord.#sliceTo4digitNum(numArray.integer);
        let decimalArray = numToWord.#sliceTo1digitNum(numArray.decimal);
        integerArray = integerArray.reverse().map((num, i) => {
            if (num != "0" && num != "00" && num != "000" && num != "0000") {
                return numToWord.#replaceIntUnitJp(num) + numToWord.#jpOthersPlace[i];
            }
        }).reverse();
        decimalArray = decimalArray.map(num => {
            return numToWord.#jpOnesPlace[num];
        });

        let integerPart = integerArray.join("");
        // 整数部が空（すべて0）で小数部がある場合は〇を表示
        if (integerPart === "" && decimalArray.length > 0) {
            integerPart = numToWord.#jpOnesPlace[0];
        }

        if (decimalArray.length > 0) {
            return integerPart + "・" + decimalArray.join("");
        } else {
            return integerPart;
        }
    }

    static toJpDaiji(num) {
        const numToWord = new NumToWord;
        num = NumToWord.toJp(num);
        // 大字では百・千の前に「壱」を明記する（例: 百→壱百、千→壱千）
        num = num.replace(/(万|億|兆|京|垓|𥝱|穣|溝|澗|正|載|極|恒河沙|阿僧祇|那由他|不可思議|無量大数|^)(百|千)/gu, '$1一$2');
        // 通常の大字変換
        for (let i = 0; i <= 13; i++) {
            let reg = new RegExp(numToWord.#jpDaijiBefore[i], "g");
            num = num.replace(reg, numToWord.#jpDaijiAfter[i]);
        }
        return num;
    }
}
