/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/inherits/inherits_browser.js":
/*!*******************************************************!*\
  !*** ../../node_modules/inherits/inherits_browser.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("if (typeof Object.create === 'function') {\n  // implementation from standard node.js 'util' module\n  module.exports = function inherits(ctor, superCtor) {\n    ctor.super_ = superCtor\n    ctor.prototype = Object.create(superCtor.prototype, {\n      constructor: {\n        value: ctor,\n        enumerable: false,\n        writable: true,\n        configurable: true\n      }\n    });\n  };\n} else {\n  // old school shim for old browsers\n  module.exports = function inherits(ctor, superCtor) {\n    ctor.super_ = superCtor\n    var TempCtor = function () {}\n    TempCtor.prototype = superCtor.prototype\n    ctor.prototype = new TempCtor()\n    ctor.prototype.constructor = ctor\n  }\n}\n\n\n//# sourceURL=webpack:///../../node_modules/inherits/inherits_browser.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/types/regexEscape.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/types/regexEscape.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.escapingRegex = void 0;\nexports.escapingRegex = [\n    \"\\\\\",\n    \"/\",\n    \"(\",\n    \")\",\n    \"{\",\n    \"}\",\n    \"[\",\n    \"]\",\n    \"^\",\n    \"$\",\n    \".\",\n    \"*\",\n    \"?\",\n    \"+\",\n    \"|\",\n];\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/types/regexEscape.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.arrayModifiers = void 0;\nconst splice_1 = __webpack_require__(/*! ./arrayModifiers/splice */ \"../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/splice.js\");\nconst moveByIndex_1 = __webpack_require__(/*! ./arrayModifiers/moveByIndex */ \"../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/moveByIndex.js\");\nconst _1 = __webpack_require__(/*! . */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nclass arrayModifiers {\n    static splice = splice_1.splice;\n    static moveByIndex = moveByIndex_1.moveByIndex;\n    static removeDuplicates = _1.removeArrayDuplicates;\n}\nexports.arrayModifiers = arrayModifiers;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/arrayInsert.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/arrayInsert.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.arrayInsert = void 0;\nconst __1 = __webpack_require__(/*! .. */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nclass arrayInsert {\n    static insertBefore = (arr, beforeElement, elem) => {\n        let r = [];\n        if (!arr || (0, __1.extendedTypeof)(arr) !== \"array\")\n            return r;\n        if (!beforeElement || arr.indexOf(beforeElement) === -1)\n            return [...r, elem];\n        let beforeIndex = arr.indexOf(beforeElement);\n        return [...arr.slice(0, beforeIndex), elem, ...arr.slice(beforeIndex)];\n    };\n    static insertAfter = (arr, afterElement, elem) => {\n        let r = [];\n        if (!arr || (0, __1.extendedTypeof)(arr) !== \"array\")\n            return r;\n        if (!afterElement || arr.indexOf(afterElement) === -1)\n            return [...r, elem];\n        let afterIndex = arr.indexOf(afterElement);\n        return [\n            ...arr.slice(0, afterIndex + 1),\n            elem,\n            ...arr.slice(afterIndex + 1),\n        ];\n    };\n    static insertBeforeIndex = (arr, beforeIndex, elem) => {\n        let r = [];\n        if (!arr || (0, __1.extendedTypeof)(arr) !== \"array\")\n            return r;\n        return [...arr.slice(0, beforeIndex), elem, ...arr.slice(beforeIndex)];\n    };\n    static insertAfterIndex = (arr, afterIndex, elem) => {\n        let r = [];\n        if (!arr || (0, __1.extendedTypeof)(arr) !== \"array\")\n            return r;\n        return [\n            ...arr.slice(0, afterIndex + 1),\n            elem,\n            ...arr.slice(afterIndex + 1),\n        ];\n    };\n}\nexports.arrayInsert = arrayInsert;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/arrayInsert.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/chunkArray.js":
/*!*************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/chunkArray.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.chunkArray = void 0;\nconst extendedTypeof_1 = __webpack_require__(/*! ../extendedTypeof */ \"../../node_modules/oberknecht-utils/lib-js/utils/extendedTypeof.js\");\n/** @see https://github.com/NuroC/moomoo-in-depth/tree/main/protocol#chunk-arrays */\nfunction chunkArray(arr, size) {\n    if ((0, extendedTypeof_1.extendedTypeof)(arr) !== \"array\")\n        return [];\n    size = size ?? 10;\n    let r = [];\n    for (let i = 0; i < arr.length; i += size)\n        r.push(arr.slice(i, i + size));\n    return r;\n}\nexports.chunkArray = chunkArray;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/chunkArray.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/convertToArray.js":
/*!*****************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/convertToArray.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.convertToArray = void 0;\nconst __1 = __webpack_require__(/*! .. */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nconst recreate_1 = __webpack_require__(/*! ../recreate */ \"../../node_modules/oberknecht-utils/lib-js/utils/recreate.js\");\n// export function convertToArray(arr: Array<any> | any, returnundefined?: boolean | any) {\nfunction convertToArray(arr, returnundefined) {\n    let arr_ = (0, recreate_1.recreate)(arr);\n    if ((0, __1.isNullUndefined)(arr_))\n        return returnundefined ? undefined : [];\n    return !Array.isArray(arr_) ? [arr_] : arr_;\n}\nexports.convertToArray = convertToArray;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/convertToArray.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/dissolveArray.js":
/*!****************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/dissolveArray.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.dissolveArray = void 0;\nconst convertToArray_1 = __webpack_require__(/*! ./convertToArray */ \"../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/convertToArray.js\");\nconst extendedTypeof_1 = __webpack_require__(/*! ../extendedTypeof */ \"../../node_modules/oberknecht-utils/lib-js/utils/extendedTypeof.js\");\nfunction dissolveArray(...arr) {\n    let arr_ = (0, convertToArray_1.convertToArray)(arr, false);\n    let r = [];\n    function actualDissolveArray(a) {\n        if ((0, extendedTypeof_1.extendedTypeof)(a) !== \"array\")\n            r.push(a);\n        else\n            a.forEach((b) => actualDissolveArray(b));\n    }\n    arr_.forEach(actualDissolveArray);\n    return r;\n}\nexports.dissolveArray = dissolveArray;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/dissolveArray.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/moveByIndex.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/moveByIndex.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.moveByIndex = void 0;\nconst __1 = __webpack_require__(/*! ../ */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nconst splice_1 = __webpack_require__(/*! ./splice */ \"../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/splice.js\");\nfunction moveByIndex(arr, indexFirst, indexEnd, moveNumber) {\n    if (!arr ||\n        (0, __1.isNullUndefined)(indexFirst) ||\n        ((0, __1.isNullUndefined)(indexEnd) && (0, __1.isNullUndefined)(moveNumber)))\n        return arr;\n    if ((0, __1.isNullUndefined)(indexEnd) && moveNumber)\n        indexEnd = indexFirst + moveNumber;\n    let isPositiveDirection = indexEnd > indexFirst;\n    let r = (0, __1.recreate)(arr);\n    let elem = arr[indexFirst];\n    let arr_ = (0, splice_1.splice)(r, indexFirst);\n    r = [\n        ...arr_.slice(0, isPositiveDirection ? indexFirst + 1 : indexEnd),\n        elem,\n        ...arr_.slice(indexEnd),\n    ];\n    return r;\n}\nexports.moveByIndex = moveByIndex;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/moveByIndex.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/removeArrayDuplicates.js":
/*!************************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/removeArrayDuplicates.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.removeArrayDuplicates = void 0;\nconst __1 = __webpack_require__(/*! .. */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nfunction removeArrayDuplicates(arr) {\n    let r = [];\n    (0, __1.convertToArray)(arr, false).forEach((a) => {\n        if (!r.includes(a))\n            r.push(a);\n    });\n    return r;\n}\nexports.removeArrayDuplicates = removeArrayDuplicates;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/removeArrayDuplicates.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/splice.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/splice.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.splice = void 0;\nconst __1 = __webpack_require__(/*! .. */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nfunction splice(arr, index, deleteCount) {\n    if (!arr || (0, __1.isNullUndefined)(index) || !arr[index])\n        return arr;\n    let arr_ = (0, __1.recreate)(arr);\n    arr_.splice(index, deleteCount ?? 1);\n    return arr_;\n}\nexports.splice = splice;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/splice.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/unchunkArray.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/unchunkArray.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.unchunkArray = void 0;\nconst extendedTypeof_1 = __webpack_require__(/*! ../extendedTypeof */ \"../../node_modules/oberknecht-utils/lib-js/utils/extendedTypeof.js\");\n/** @see https://github.com/NuroC/moomoo-in-depth/tree/main/protocol#unchunk-arrays */\nfunction unchunkArray(arr) {\n    if ((0, extendedTypeof_1.extendedTypeof)(arr) !== \"array\")\n        return [];\n    let r = [];\n    for (let i = 0; i < arr.length; i++)\n        r = r.concat(arr[i]);\n    return r;\n}\nexports.unchunkArray = unchunkArray;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/unchunkArray.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/ascii.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/ascii.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ascii = void 0;\nconst recreate_1 = __webpack_require__(/*! ./recreate */ \"../../node_modules/oberknecht-utils/lib-js/utils/recreate.js\");\nconst regexEscape_1 = __webpack_require__(/*! ./regexEscape */ \"../../node_modules/oberknecht-utils/lib-js/utils/regexEscape.js\");\nclass ascii {\n    static specialCharacters = {\n        \"33\": \"!\",\n        \"34\": '\"',\n        \"35\": \"#\",\n        \"36\": \"$\",\n        \"37\": \"%\",\n        \"38\": \"&\",\n        \"39\": \"'\",\n        \"40\": \"(\",\n        \"41\": \")\",\n        \"42\": \"*\",\n        \"43\": \"+\",\n        \"44\": \",\",\n        \"45\": \"-\",\n        \"46\": \".\",\n        \"47\": \"/\",\n        \"58\": \":\",\n        \"59\": \";\",\n        \"60\": \"<\",\n        \"61\": \"=\",\n        \"62\": \">\",\n        \"63\": \"?\",\n        \"64\": \"@\",\n        \"91\": \"[\",\n        \"92\": \"\\\\\",\n        \"93\": \"]\",\n        \"94\": \"^\",\n        \"95\": \"_\",\n        \"96\": \"`\",\n        \"123\": \"{\",\n        \"124\": \"|\",\n        \"125\": \"}\",\n        \"126\": \"~\",\n    };\n    static alphabetCharactersLower = {\n        \"97\": \"a\",\n        \"98\": \"b\",\n        \"99\": \"c\",\n        \"100\": \"d\",\n        \"101\": \"e\",\n        \"102\": \"f\",\n        \"103\": \"g\",\n        \"104\": \"h\",\n        \"105\": \"i\",\n        \"106\": \"j\",\n        \"107\": \"k\",\n        \"108\": \"l\",\n        \"109\": \"m\",\n        \"110\": \"n\",\n        \"111\": \"o\",\n        \"112\": \"p\",\n        \"113\": \"q\",\n        \"114\": \"r\",\n        \"115\": \"s\",\n        \"116\": \"t\",\n        \"117\": \"u\",\n        \"118\": \"v\",\n        \"119\": \"w\",\n        \"120\": \"x\",\n        \"121\": \"y\",\n        \"122\": \"z\",\n    };\n    static alphabetCharactersUpper = {\n        \"65\": \"A\",\n        \"66\": \"B\",\n        \"67\": \"C\",\n        \"68\": \"D\",\n        \"69\": \"E\",\n        \"70\": \"F\",\n        \"71\": \"G\",\n        \"72\": \"H\",\n        \"73\": \"I\",\n        \"74\": \"J\",\n        \"75\": \"K\",\n        \"76\": \"L\",\n        \"77\": \"M\",\n        \"78\": \"N\",\n        \"79\": \"O\",\n        \"80\": \"P\",\n        \"81\": \"Q\",\n        \"82\": \"R\",\n        \"83\": \"S\",\n        \"84\": \"T\",\n        \"85\": \"U\",\n        \"86\": \"V\",\n        \"87\": \"W\",\n        \"88\": \"X\",\n        \"89\": \"Y\",\n        \"90\": \"Z\",\n    };\n    static alphabetCharactersAll = {\n        ...this.alphabetCharactersLower,\n        ...this.alphabetCharactersUpper,\n    };\n    static numberCharacters = {\n        \"48\": \"0\",\n        \"49\": \"1\",\n        \"50\": \"2\",\n        \"51\": \"3\",\n        \"52\": \"4\",\n        \"53\": \"5\",\n        \"54\": \"6\",\n        \"55\": \"7\",\n        \"56\": \"8\",\n        \"57\": \"9\",\n    };\n    static allCharacters = {\n        ...this.specialCharacters,\n        ...this.alphabetCharactersAll,\n        ...this.numberCharacters,\n    };\n    static toChars = (s) => {\n        let r = (0, recreate_1.recreate)(s);\n        Object.keys(this.allCharacters).forEach((a) => {\n            r = r.replace(new RegExp(`%${a}`, \"gi\"), this.allCharacters[a]);\n        });\n        r = r.replace(/%32/g, \" \");\n        return r;\n    };\n    static toNumbers = (s, includeAlphabet, includeNumbers) => {\n        let r = (0, recreate_1.recreate)(s);\n        Object.values(this.specialCharacters).forEach((a, i) => {\n            r = r.replace(new RegExp(`(?<!\\\\u0001%)${(0, regexEscape_1.regexEscape)(a)}(?!\\\\u0001)`, \"gi\"), `\\u0001%${Object.keys(this.specialCharacters)[i]}\\u0001`);\n        });\n        if (includeNumbers) {\n            Object.values(this.numberCharacters).forEach((a, i) => {\n                r = r.replace(new RegExp(`(?<!\\\\u0001%)${a}(?!\\\\u0001)`, \"gi\"), `\\u0001%${Object.keys(this.alphabetCharactersAll)[i]}\\u0001`);\n            });\n        }\n        if (includeAlphabet) {\n            Object.values(this.alphabetCharactersAll).forEach((a, i) => {\n                r = r.replace(new RegExp(`(?<!\\\\u0001%)${a}(!?\\\\u0001)`, \"gi\"), `\\u0001%${Object.keys(this.alphabetCharactersAll)[i]}\\u0001`);\n            });\n        }\n        r = r.replace(/\\s/g, `\\u0001%32\\u0001`);\n        return r.replace(/\\u0001/g, \"\");\n    };\n}\nexports.ascii = ascii;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/ascii.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/cleanChannelName.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/cleanChannelName.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.cleanChannelName = void 0;\nconst recreate_1 = __webpack_require__(/*! ./recreate */ \"../../node_modules/oberknecht-utils/lib-js/utils/recreate.js\");\nfunction cleanChannelName(channel) {\n    if (!(channel ?? undefined))\n        return undefined;\n    return (0, recreate_1.recreate)(channel.toString()).trim().replace(/^#/g, \"\");\n}\nexports.cleanChannelName = cleanChannelName;\n;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/cleanChannelName.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/cleanTime.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/cleanTime.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.cleanTime = void 0;\nconst extendedTypeof_1 = __webpack_require__(/*! ./extendedTypeof */ \"../../node_modules/oberknecht-utils/lib-js/utils/extendedTypeof.js\");\nconst pad2_1 = __webpack_require__(/*! ./pad2 */ \"../../node_modules/oberknecht-utils/lib-js/utils/pad2.js\");\nconst recreate_1 = __webpack_require__(/*! ./recreate */ \"../../node_modules/oberknecht-utils/lib-js/utils/recreate.js\");\nfunction cleanTime(time /** time in ms */, timeopt, timedigits, noMS, noSpace) {\n    let timedigits_ = (0, recreate_1.recreate)(timedigits);\n    if (!(timedigits_ ?? undefined) ||\n        (typeof timedigits_ !== \"number\" && timedigits_ !== \"all\") ||\n        timedigits <= 0)\n        timedigits_ = \"auto\";\n    let r = { time: [], order: [], tag: \"\" };\n    let t = {\n        years: {\n            tag3: \"yr\",\n            tag2: \"yr\",\n            tag: \"year\",\n            conversion: 365 * 24 * 60 * 60 * 1000,\n            time: 0,\n        },\n        weeks: {\n            tag3: \"wk\",\n            tag2: \"wk\",\n            tag: \"week\",\n            conversion: 7 * 24 * 60 * 60 * 1000,\n            time: 0,\n        },\n        days: {\n            tag3: \"d\",\n            tag2: \"day\",\n            tag: \"day\",\n            conversion: 24 * 60 * 60 * 1000,\n            time: 0,\n        },\n        hours: {\n            tag3: \"h\",\n            tag2: \"hr\",\n            tag: \"hour\",\n            conversion: 60 * 60 * 1000,\n            time: 0,\n        },\n        minutes: {\n            tag3: \"m\",\n            tag2: \"min\",\n            tag: \"minute\",\n            conversion: 60 * 1000,\n            time: 0,\n        },\n        seconds: {\n            tag3: \"s\",\n            tag2: \"sec\",\n            tag: \"second\",\n            conversion: 1000,\n            time: 0,\n        },\n        milliseconds: {\n            tag3: \"ms\",\n            tag2: \"ms\",\n            tag: \"millisecond\",\n            conversion: 1,\n            time: 0,\n        },\n    };\n    t.milliseconds.time = time;\n    for (let i = 0; i < Object.keys(t).length - 1; i++) {\n        t[Object.keys(t)[i]].time = Math.floor(t.milliseconds.time / t[Object.keys(t)[i]].conversion);\n        t.milliseconds.time = t.milliseconds.time % t[Object.keys(t)[i]].conversion;\n    }\n    t.milliseconds.time = parseInt(t.milliseconds.time.toString().substring(0, 3));\n    let ctlast;\n    let u = 0;\n    let autonum = 2;\n    for (let i = 0; i < Object.keys(t).length; i++) {\n        let tc = Object.keys(t)[i];\n        let tco = t[tc];\n        let cte = tco.time;\n        if (((i !== Object.keys(t).length - 1 || !noMS) &&\n            [\"auto\"].includes(timedigits_) &&\n            u < autonum) ||\n            timedigits_ === \"all\" ||\n            timedigits_ > 0) {\n            if (cte > 0) {\n                if (!(ctlast ?? undefined))\n                    r[\"tag\"] = `${tco[\"tag\"]}${cte > 1 ? \"s\" : \"\"}`;\n                switch (timeopt) {\n                    case 1:\n                    case 2:\n                    case 3: {\n                        r[\"time\"].push((0, pad2_1.pad2)(cte));\n                        r[\"order\"].push(tc);\n                        break;\n                    }\n                    case 4:\n                    case 5:\n                    case 6: {\n                        if (cte > 0) {\n                            r[\"time\"].push(`${cte} ${tco[[\"tag\", \"tag2\", \"tag3\"][timeopt - 4]] !== \"ms\" &&\n                                timeopt - 4 !== 2\n                                ? tco[[\"tag\", \"tag2\", \"tag3\"][timeopt - 4]] +\n                                    (cte > 1 ? \"s\" : \"\")\n                                : tco[[\"tag\", \"tag2\", \"tag3\"][timeopt - 4]]}`);\n                            r[\"order\"].push(tc);\n                        }\n                        break;\n                    }\n                }\n                if ((0, extendedTypeof_1.extendedTypeof)(timedigits_) === \"number\")\n                    timedigits_--;\n                ctlast = cte;\n                u++;\n            }\n        }\n        else {\n            i = Object.keys(t).length;\n        }\n    }\n    if (r.time)\n        r.time = r.time.map((a) => (noSpace ? a.replace(/\\s/g, \"\") : a));\n    return r;\n}\nexports.cleanTime = cleanTime;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/cleanTime.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/correctChannelName.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/correctChannelName.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.correctChannelName = void 0;\nfunction correctChannelName(channel) {\n    if (!(channel ?? undefined))\n        return undefined;\n    return `#${channel.toLowerCase().trim().replace(/^#/g, \"\")}`;\n}\nexports.correctChannelName = correctChannelName;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/correctChannelName.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/correctMessage.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/correctMessage.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.correctMessage = void 0;\nfunction correctMessage(message) {\n    if (!(message ?? undefined))\n        return \"\";\n    return message.trim().replace(/\\s+/g, \" \");\n}\nexports.correctMessage = correctMessage;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/correctMessage.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/createID.js":
/*!********************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/createID.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createID = void 0;\nconst _1 = __webpack_require__(/*! . */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nconst defaultChars = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_\";\nlet chars = defaultChars;\nlet usedIDs = [];\nlet patternIDs = [];\nfunction createID(length, preventDuplicates, byPattern, patternID_, chars_, usedIDs_) {\n    let preventDuplicates_ = !(0, _1.isNullUndefined)(preventDuplicates)\n        ? preventDuplicates\n        : true;\n    let byPattern_ = !(0, _1.isNullUndefined)(byPattern) ? byPattern : false;\n    patternIDs = patternID_ ?? patternIDs;\n    chars = chars_ ?? defaultChars;\n    usedIDs = usedIDs_ ?? usedIDs;\n    let length_ = length ?? 5;\n    let r = \"\";\n    function actualCreateID() {\n        if (usedIDs.length > (chars.length ^ length_))\n            length_++;\n        let r2 = \"\";\n        for (let i = 0; i < length_; i++) {\n            r2 += chars.charAt(Math.floor(Math.random() * chars.length));\n        }\n        if (preventDuplicates_ && usedIDs.includes(r2))\n            return actualCreateID();\n        if (!usedIDs.includes(r2))\n            usedIDs.push(r2);\n        r = r2;\n    }\n    function getCharByNum(n) {\n        return chars[n];\n    }\n    function actualCreatePatternID() {\n        if (patternIDs.length === 0)\n            patternIDs = [...Array(length_)].map((a) => 0);\n        if (patternIDs.at(-1) >= chars.length) {\n            patternIDs[patternIDs.length - 1] = chars.length - 1;\n            let foundInPrevious;\n            for (let i = patternIDs.length; i > 0; i--) {\n                if (patternIDs[i] < chars.length - 1) {\n                    foundInPrevious = i;\n                    patternIDs[i]++;\n                    patternIDs\n                        .map((a, i2) => [a, i2])\n                        .slice(i + 1)\n                        .forEach((a) => (patternIDs[a[1]] = 0));\n                    break;\n                }\n            }\n            if (!foundInPrevious) {\n                patternIDs.push(0);\n                patternIDs.forEach((a, i) => (patternIDs[i] = 0));\n            }\n        }\n        patternIDs.forEach((a) => (r += getCharByNum(a)));\n        patternIDs[patternIDs.length - 1]++;\n    }\n    if (!byPattern_)\n        actualCreateID();\n    else\n        actualCreatePatternID();\n    return r;\n}\nexports.createID = createID;\nObject.defineProperties(createID, {\n    patternIDs: {\n        get() {\n            return patternIDs;\n        },\n    },\n    usedIDs: {\n        get() {\n            return usedIDs;\n        },\n    },\n    chars: {\n        get() {\n            return chars;\n        },\n    },\n});\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/createID.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/createPyramid.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/createPyramid.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createPyramid = void 0;\nconst _1 = __webpack_require__(/*! . */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nfunction createPyramid(n_, s) {\n    let r = [];\n    let n__ = n_ && _1.regex.numregex().test(n_.toString()) ? parseInt(n_.toString()) : n_;\n    let n = n__ ? ((0, _1.isEvan)(n__) ? n__ + 1 : n__) : 5;\n    let half = (0, _1.getFullNumber)(n / 2);\n    for (let i = 1; i < n + 1; i++) {\n        if (i < half) {\n            r.push(s.repeat(i));\n        }\n        else if (i === half) {\n            r.push(s.repeat(half));\n        }\n        else {\n            r.push(s.repeat(n + 1 - i));\n        }\n    }\n    return r;\n}\nexports.createPyramid = createPyramid;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/createPyramid.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/expectedEventName.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/expectedEventName.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.expectedEventName = void 0;\nfunction expectedEventName(eventName) {\n    if (!(eventName ?? undefined))\n        return undefined;\n    const expectedeventnames = {\n        ping: \"pong\",\n        join: \"353\",\n    };\n    let eventName_ = eventName.toLowerCase();\n    if (expectedeventnames[eventName_]) {\n        return expectedeventnames[eventName_].toUpperCase();\n    }\n    else if (Object.values(expectedeventnames).includes(eventName_)) {\n        return expectedeventnames[Object.values(expectedeventnames).indexOf(eventName_)].toUpperCase();\n    }\n    return eventName.toUpperCase();\n}\nexports.expectedEventName = expectedEventName;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/expectedEventName.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/extendedTypeof.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/extendedTypeof.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.extendedTypeof = void 0;\nconst regex_1 = __webpack_require__(/*! ../variables/regex */ \"../../node_modules/oberknecht-utils/lib-js/variables/regex.js\");\nfunction extendedTypeof(item) {\n    let type = typeof item;\n    switch (type) {\n        case \"object\": {\n            if (Array.isArray(item))\n                return \"array\";\n            try {\n                // try catch due to error when trying to convert circular structure in object to json\n                // (Converting circular structure to JSON)\n                if (regex_1.regex.jsonreg().test(JSON.stringify(item)))\n                    return \"json\";\n            }\n            catch (e) { }\n            if (item === null)\n                return \"null\";\n        }\n        default:\n            return type;\n    }\n}\nexports.extendedTypeof = extendedTypeof;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/extendedTypeof.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/firstCap.js":
/*!********************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/firstCap.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.firstCap = void 0;\nconst extendedTypeof_1 = __webpack_require__(/*! ./extendedTypeof */ \"../../node_modules/oberknecht-utils/lib-js/utils/extendedTypeof.js\");\nfunction firstCap(s) {\n    if (![\"string\", \"number\"].includes((0, extendedTypeof_1.extendedTypeof)(s)))\n        return undefined;\n    return s.length > 0\n        ? s.toString()?.[0].toUpperCase() + s.toString().slice(1)\n        : \"\";\n}\nexports.firstCap = firstCap;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/firstCap.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/getDateParsed.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/getDateParsed.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getDateParsed = void 0;\nfunction getDateParsed(date, displayMS) {\n    let date_ = date ??\n        new Date(new Date().setMinutes(new Date().getMinutes() - new Date().getTimezoneOffset()));\n    let r = new Date(date_);\n    return r\n        .toISOString()\n        .split(displayMS ? \"Z\" : \".\")[0]\n        .replace(\"T\", \" \");\n}\nexports.getDateParsed = getDateParsed;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/getDateParsed.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/getFullNumber.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/getFullNumber.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getFullNumber = void 0;\nfunction getFullNumber(n) {\n    if (!n || typeof n !== \"number\")\n        return -1;\n    if (Math.trunc(n) !== n)\n        return Math.trunc(n) + 1;\n    return n;\n}\nexports.getFullNumber = getFullNumber;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/getFullNumber.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/getFunctionArgumentNames.js":
/*!************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/getFunctionArgumentNames.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getFunctionArgumentNames = void 0;\nfunction getFunctionArgumentNames(func) {\n    return func\n        .toString()\n        .split(\"\\n\")[0]\n        .replace(/\\s+/g, \"\")\n        .replace(/^function\\w+/, \"\")\n        .replace(/^\\(/, \"\")\n        .split(\")\")[0]\n        .split(/,/);\n}\nexports.getFunctionArgumentNames = getFunctionArgumentNames;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/getFunctionArgumentNames.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/index.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./cleanChannelName */ \"../../node_modules/oberknecht-utils/lib-js/utils/cleanChannelName.js\"), exports);\n__exportStar(__webpack_require__(/*! ./correctChannelName */ \"../../node_modules/oberknecht-utils/lib-js/utils/correctChannelName.js\"), exports);\n__exportStar(__webpack_require__(/*! ./correctMessage */ \"../../node_modules/oberknecht-utils/lib-js/utils/correctMessage.js\"), exports);\n__exportStar(__webpack_require__(/*! ./arrayModifiers/convertToArray */ \"../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/convertToArray.js\"), exports);\n__exportStar(__webpack_require__(/*! ./expectedEventName */ \"../../node_modules/oberknecht-utils/lib-js/utils/expectedEventName.js\"), exports);\n__exportStar(__webpack_require__(/*! ./message.Badges */ \"../../node_modules/oberknecht-utils/lib-js/utils/message.Badges.js\"), exports);\n__exportStar(__webpack_require__(/*! ./message.Command */ \"../../node_modules/oberknecht-utils/lib-js/utils/message.Command.js\"), exports);\n__exportStar(__webpack_require__(/*! ./message.Content */ \"../../node_modules/oberknecht-utils/lib-js/utils/message.Content.js\"), exports);\n__exportStar(__webpack_require__(/*! ./message.Emotes */ \"../../node_modules/oberknecht-utils/lib-js/utils/message.Emotes.js\"), exports);\n__exportStar(__webpack_require__(/*! ./message.EmoteSets */ \"../../node_modules/oberknecht-utils/lib-js/utils/message.EmoteSets.js\"), exports);\n__exportStar(__webpack_require__(/*! ./message.Parameters */ \"../../node_modules/oberknecht-utils/lib-js/utils/message.Parameters.js\"), exports);\n__exportStar(__webpack_require__(/*! ./message.Prefix */ \"../../node_modules/oberknecht-utils/lib-js/utils/message.Prefix.js\"), exports);\n__exportStar(__webpack_require__(/*! ./message.User */ \"../../node_modules/oberknecht-utils/lib-js/utils/message.User.js\"), exports);\n__exportStar(__webpack_require__(/*! ./recreate */ \"../../node_modules/oberknecht-utils/lib-js/utils/recreate.js\"), exports);\n__exportStar(__webpack_require__(/*! ./numberspacer */ \"../../node_modules/oberknecht-utils/lib-js/utils/numberspacer.js\"), exports);\n__exportStar(__webpack_require__(/*! ./sleep */ \"../../node_modules/oberknecht-utils/lib-js/utils/sleep.js\"), exports);\n__exportStar(__webpack_require__(/*! ./firstCap */ \"../../node_modules/oberknecht-utils/lib-js/utils/firstCap.js\"), exports);\n__exportStar(__webpack_require__(/*! ./joinUrlQuery */ \"../../node_modules/oberknecht-utils/lib-js/utils/joinUrlQuery.js\"), exports);\n__exportStar(__webpack_require__(/*! ./arrayModifiers/chunkArray */ \"../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/chunkArray.js\"), exports);\n__exportStar(__webpack_require__(/*! ./arrayModifiers/unchunkArray */ \"../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/unchunkArray.js\"), exports);\n__exportStar(__webpack_require__(/*! ./regexEscape */ \"../../node_modules/oberknecht-utils/lib-js/utils/regexEscape.js\"), exports);\n__exportStar(__webpack_require__(/*! ./ascii */ \"../../node_modules/oberknecht-utils/lib-js/utils/ascii.js\"), exports);\n__exportStar(__webpack_require__(/*! ./isNaM */ \"../../node_modules/oberknecht-utils/lib-js/utils/isNaM.js\"), exports);\n__exportStar(__webpack_require__(/*! ./pad2 */ \"../../node_modules/oberknecht-utils/lib-js/utils/pad2.js\"), exports);\n__exportStar(__webpack_require__(/*! ./cleanTime */ \"../../node_modules/oberknecht-utils/lib-js/utils/cleanTime.js\"), exports);\n__exportStar(__webpack_require__(/*! ./randomNum */ \"../../node_modules/oberknecht-utils/lib-js/utils/randomNum.js\"), exports);\n__exportStar(__webpack_require__(/*! ./pickRandom */ \"../../node_modules/oberknecht-utils/lib-js/utils/pickRandom.js\"), exports);\n__exportStar(__webpack_require__(/*! ./returnOnNumber */ \"../../node_modules/oberknecht-utils/lib-js/utils/returnOnNumber.js\"), exports);\n__exportStar(__webpack_require__(/*! ./isNullUndefined */ \"../../node_modules/oberknecht-utils/lib-js/utils/isNullUndefined.js\"), exports);\n__exportStar(__webpack_require__(/*! ./mainPath */ \"../../node_modules/oberknecht-utils/lib-js/utils/mainPath.js\"), exports);\n__exportStar(__webpack_require__(/*! ./logWeb */ \"../../node_modules/oberknecht-utils/lib-js/utils/logWeb.js\"), exports);\n__exportStar(__webpack_require__(/*! ./log */ \"../../node_modules/oberknecht-utils/lib-js/utils/log.js\"), exports);\n__exportStar(__webpack_require__(/*! ./returnErr */ \"../../node_modules/oberknecht-utils/lib-js/utils/returnErr.js\"), exports);\n__exportStar(__webpack_require__(/*! ./extendedTypeof */ \"../../node_modules/oberknecht-utils/lib-js/utils/extendedTypeof.js\"), exports);\n__exportStar(__webpack_require__(/*! ./jsonModifiers/getAllObjectKeysTree */ \"../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/getAllObjectKeysTree.js\"), exports);\n__exportStar(__webpack_require__(/*! ./jsonModifiers/getByObjectFromTree */ \"../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/getByObjectFromTree.js\"), exports);\n__exportStar(__webpack_require__(/*! ./isConstructor */ \"../../node_modules/oberknecht-utils/lib-js/utils/isConstructor.js\"), exports);\n__exportStar(__webpack_require__(/*! ./createID */ \"../../node_modules/oberknecht-utils/lib-js/utils/createID.js\"), exports);\n__exportStar(__webpack_require__(/*! ./staticSpacer */ \"../../node_modules/oberknecht-utils/lib-js/utils/staticSpacer.js\"), exports);\n__exportStar(__webpack_require__(/*! ./stackName */ \"../../node_modules/oberknecht-utils/lib-js/utils/stackName.js\"), exports);\n__exportStar(__webpack_require__(/*! ./arrayModifiers/dissolveArray */ \"../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/dissolveArray.js\"), exports);\n__exportStar(__webpack_require__(/*! ./joinString */ \"../../node_modules/oberknecht-utils/lib-js/utils/joinString.js\"), exports);\n__exportStar(__webpack_require__(/*! ./isBracketValid */ \"../../node_modules/oberknecht-utils/lib-js/utils/isBracketValid.js\"), exports);\n__exportStar(__webpack_require__(/*! ./getFullNumber */ \"../../node_modules/oberknecht-utils/lib-js/utils/getFullNumber.js\"), exports);\n__exportStar(__webpack_require__(/*! ./parseProcessArgs */ \"../../node_modules/oberknecht-utils/lib-js/utils/parseProcessArgs.js\"), exports);\n__exportStar(__webpack_require__(/*! ./jsonModifiers/getKeyArraysFromObject */ \"../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/getKeyArraysFromObject.js\"), exports);\n__exportStar(__webpack_require__(/*! ./jsonModifiers/createObjectFromKeys */ \"../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/createObjectFromKeys.js\"), exports);\n__exportStar(__webpack_require__(/*! ./jsonModifiers/getKeyFromObject */ \"../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/getKeyFromObject.js\"), exports);\n__exportStar(__webpack_require__(/*! ./jsonModifiers/deleteKeyFromObject */ \"../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/deleteKeyFromObject.js\"), exports);\n__exportStar(__webpack_require__(/*! ./jsonModifiers/addKeysToObject */ \"../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/addKeysToObject.js\"), exports);\n__exportStar(__webpack_require__(/*! ./jsonModifiers/addAppendKeysToObject */ \"../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/addAppendKeysToObject.js\"), exports);\n__exportStar(__webpack_require__(/*! ./jsonModifiers/deleteKeysFromJSON */ \"../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/deleteKeysFromJSON.js\"), exports);\n__exportStar(__webpack_require__(/*! ./jsonModifiers/renameKey */ \"../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/renameKey.js\"), exports);\n__exportStar(__webpack_require__(/*! ./getFunctionArgumentNames */ \"../../node_modules/oberknecht-utils/lib-js/utils/getFunctionArgumentNames.js\"), exports);\n__exportStar(__webpack_require__(/*! ./getDateParsed */ \"../../node_modules/oberknecht-utils/lib-js/utils/getDateParsed.js\"), exports);\n__exportStar(__webpack_require__(/*! ./returnOnType */ \"../../node_modules/oberknecht-utils/lib-js/utils/returnOnType.js\"), exports);\n__exportStar(__webpack_require__(/*! ./splitPixelize */ \"../../node_modules/oberknecht-utils/lib-js/utils/splitPixelize.js\"), exports);\n__exportStar(__webpack_require__(/*! ./jsonModifiers/concatJSON */ \"../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/concatJSON.js\"), exports);\n__exportStar(__webpack_require__(/*! ./arrayModifiers/removeArrayDuplicates */ \"../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/removeArrayDuplicates.js\"), exports);\n__exportStar(__webpack_require__(/*! ./createPyramid */ \"../../node_modules/oberknecht-utils/lib-js/utils/createPyramid.js\"), exports);\n__exportStar(__webpack_require__(/*! ./isEvan */ \"../../node_modules/oberknecht-utils/lib-js/utils/isEvan.js\"), exports);\n__exportStar(__webpack_require__(/*! ./arrayModifiers/arrayInsert */ \"../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/arrayInsert.js\"), exports);\n__exportStar(__webpack_require__(/*! ./stringModifiers */ \"../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers.js\"), exports);\n__exportStar(__webpack_require__(/*! ./arrayModifiers */ \"../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers.js\"), exports);\n__exportStar(__webpack_require__(/*! ./jsonModifiers */ \"../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers.js\"), exports);\n__exportStar(__webpack_require__(/*! ../variables/regex */ \"../../node_modules/oberknecht-utils/lib-js/variables/regex.js\"), exports);\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/index.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/isBracketValid.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/isBracketValid.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isBracketValid = void 0;\nfunction isBracketValid(str) {\n    const brackets = [\n        [\"(\", \")\"],\n        [\"[\", \"]\"],\n        [\"{\", \"}\"],\n    ];\n    if (!str || typeof str !== \"string\")\n        return false;\n    let a = [];\n    let s = str.split(\"\");\n    for (let i = 0; i < s.length; i++) {\n        let b = s[i];\n        if (brackets.map((a) => a[0]).includes(b))\n            a.push(b);\n        else {\n            let vi = brackets.map((a) => a[1]).indexOf(b);\n            if (a.at(-1) !== brackets[vi][0])\n                return false;\n            a.pop();\n        }\n    }\n    return true;\n}\nexports.isBracketValid = isBracketValid;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/isBracketValid.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/isConstructor.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/isConstructor.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isConstructor = void 0;\nfunction isConstructor(f, errorMsgChecker) {\n    if (!f)\n        return false;\n    try {\n        new f();\n    }\n    catch (e) {\n        if (e.message &&\n            (errorMsgChecker\n                ? errorMsgChecker(e.message)\n                : e.message === \"response is undefined\"))\n            return true;\n        return false;\n    }\n    return true;\n}\nexports.isConstructor = isConstructor;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/isConstructor.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/isEvan.js":
/*!******************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/isEvan.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isEvan = void 0;\nconst isNullUndefined_1 = __webpack_require__(/*! ./isNullUndefined */ \"../../node_modules/oberknecht-utils/lib-js/utils/isNullUndefined.js\");\nfunction isEvan(n) {\n    if ((0, isNullUndefined_1.isNullUndefined)(n))\n        return NaN;\n    return Math.trunc(n / 2) === n / 2;\n}\nexports.isEvan = isEvan;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/isEvan.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/isNaM.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/isNaM.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isNaM = void 0;\nfunction isNaM(s) {\n    if (!(s ?? undefined))\n        return undefined;\n    return /\\W/gi.test(s);\n}\nexports.isNaM = isNaM;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/isNaM.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/isNullUndefined.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/isNullUndefined.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isNullUndefined = void 0;\nfunction isNullUndefined(searchParam) {\n    return [null, undefined].includes(searchParam);\n}\nexports.isNullUndefined = isNullUndefined;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/isNullUndefined.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/joinString.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/joinString.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.joinString = void 0;\nconst _1 = __webpack_require__(/*! . */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nfunction joinString(pathParts, joiner, noreplace, replaceStart, replaceEnd) {\n    if (!pathParts)\n        return \"\";\n    const joiner_ = joiner ?? \"\";\n    let r = \"\";\n    r = (0, _1.dissolveArray)(pathParts).join(joiner_);\n    (() => {\n        if (noreplace || joiner_.length === 0)\n            return;\n        const replaceReg = new RegExp(`${(0, _1.regexEscape)(joiner_)}+`, \"g\");\n        const replaceRegStart = new RegExp(`^${(0, _1.regexEscape)(joiner_)}+`);\n        const replaceRegEnd = new RegExp(`${(0, _1.regexEscape)(joiner_)}+$`);\n        r = r.replace(replaceReg, joiner_);\n        if (replaceStart)\n            r = r.replace(replaceRegStart, \"\");\n        if (replaceEnd)\n            r = r.replace(replaceRegEnd, \"\");\n    })();\n    return r;\n}\nexports.joinString = joinString;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/joinString.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/joinUrlQuery.js":
/*!************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/joinUrlQuery.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.joinUrlQuery = void 0;\nconst convertToArray_1 = __webpack_require__(/*! ./arrayModifiers/convertToArray */ \"../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/convertToArray.js\");\nfunction joinUrlQuery(queryname, queryparams, firstquery, appendifempty) {\n    let queryname_ = (0, convertToArray_1.convertToArray)(queryname, false);\n    let queryparams_ = (0, convertToArray_1.convertToArray)(queryparams, false);\n    let _join = (name, params) => (0, convertToArray_1.convertToArray)(params, false).length > 0 || appendifempty\n        ? `${name}=${(0, convertToArray_1.convertToArray)(params, false).join(`&${name}=`)}`\n        : undefined;\n    if (queryparams_.length == 0)\n        return \"\";\n    let r = `${firstquery ? \"?\" : \"&\"}`;\n    r +=\n        queryname_.length === 1\n            ? _join(queryname_[0], queryparams_)\n            : `${queryname_\n                .map((v, i) => _join(v, queryparams_[i]))\n                .filter((a) => a)\n                .join(\"&\")}`;\n    return r;\n}\nexports.joinUrlQuery = joinUrlQuery;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/joinUrlQuery.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.jsonModifiers = void 0;\nconst _1 = __webpack_require__(/*! . */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nconst deleteKeysFromJSON_1 = __webpack_require__(/*! ./jsonModifiers/deleteKeysFromJSON */ \"../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/deleteKeysFromJSON.js\");\nconst renameKey_1 = __webpack_require__(/*! ./jsonModifiers/renameKey */ \"../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/renameKey.js\");\nclass jsonModifiers {\n    static addAppendKeysToObject = _1.addAppendKeysToObject;\n    static addKeysToObject = _1.addKeysToObject;\n    static concatJSON = _1.concatJSON;\n    static createObjectFromKeys = _1.createObjectFromKeys;\n    static deleteKeyFromObject = _1.deleteKeyFromObject;\n    static getAllObjectKeysTree = _1.getAllObjectKeysTree;\n    static getByObjectFromTree = _1.getByObjectFromTree;\n    static getKeyFromObject = _1.getKeyFromObject;\n    static deleteKeysFromJSON = deleteKeysFromJSON_1.deleteKeysFromJSON;\n    static renameKey = renameKey_1.renameKey;\n}\nexports.jsonModifiers = jsonModifiers;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/addAppendKeysToObject.js":
/*!***********************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/addAppendKeysToObject.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addAppendKeysToObject = void 0;\nconst __1 = __webpack_require__(/*! .. */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nfunction addAppendKeysToObject(object, keys, value) {\n    let object_ = object;\n    let keys_ = (0, __1.convertToArray)(keys, false);\n    let oldvalue = (0, __1.getKeyFromObject)(object_, keys_);\n    let newvalue = oldvalue ?? value;\n    switch ((0, __1.extendedTypeof)(oldvalue)) {\n        case \"json\": {\n            let jsonpaths = (0, __1.getKeyArraysFromObject)(value);\n            jsonpaths.forEach((a) => {\n                (0, __1.addKeysToObject)(newvalue, a.path, a.value);\n            });\n            break;\n        }\n        case \"array\": {\n            newvalue.push(...(0, __1.convertToArray)(value, false));\n            break;\n        }\n        case \"string\":\n        case \"number\":\n        case \"bigint\": {\n            newvalue += value;\n            break;\n        }\n    }\n    (0, __1.addKeysToObject)(object_, keys_, newvalue);\n    return object_;\n}\nexports.addAppendKeysToObject = addAppendKeysToObject;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/addAppendKeysToObject.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/addKeysToObject.js":
/*!*****************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/addKeysToObject.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addKeysToObject = void 0;\nconst __1 = __webpack_require__(/*! .. */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nfunction addKeysToObject(object, keypath, value) {\n    let object_ = object;\n    let keypath_ = (0, __1.convertToArray)(keypath, false);\n    let parentObj = object_;\n    for (let i = 0; i < keypath_.length - 1; i++) {\n        let key = keypath_[i];\n        if (!(key in parentObj) || (0, __1.extendedTypeof)(parentObj[key]) !== \"json\")\n            parentObj[key] = {};\n        parentObj = parentObj[key];\n    }\n    parentObj[keypath_.at(-1)] = value;\n    return object_;\n}\nexports.addKeysToObject = addKeysToObject;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/addKeysToObject.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/concatJSON.js":
/*!************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/concatJSON.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.concatJSON = void 0;\nconst __1 = __webpack_require__(/*! .. */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nfunction concatJSON(arr) {\n    let arr_ = (0, __1.convertToArray)(arr);\n    let r = {};\n    arr_.forEach((a) => {\n        function appendObj(obj, obj2) {\n            Object.keys(obj2).forEach((b) => {\n                if (obj[b] &&\n                    (0, __1.extendedTypeof)(obj[b]) === \"json\" &&\n                    (0, __1.extendedTypeof)(obj2[b]) === \"json\")\n                    return appendObj(obj[b], obj2[b]);\n                obj[b] = obj2[b];\n            });\n        }\n        appendObj(r, a);\n    });\n    return r;\n}\nexports.concatJSON = concatJSON;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/concatJSON.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/createObjectFromKeys.js":
/*!**********************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/createObjectFromKeys.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createObjectFromKeys = void 0;\nconst __1 = __webpack_require__(/*! .. */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nfunction createObjectFromKeys(keys, value) {\n    let o = {};\n    let keys_ = (0, __1.convertToArray)(keys, false);\n    function actualAppend(i, o2) {\n        o2[keys_[i]] = {};\n        if (i < keys_.length - 1)\n            actualAppend(i + 1, o2[keys_[i]]);\n        else\n            o2[keys_[i]] = value;\n    }\n    actualAppend(0, o);\n    return o;\n}\nexports.createObjectFromKeys = createObjectFromKeys;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/createObjectFromKeys.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/deleteKeyFromObject.js":
/*!*********************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/deleteKeyFromObject.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteKeyFromObject = void 0;\nconst __1 = __webpack_require__(/*! .. */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nfunction deleteKeyFromObject(object, keys, throwErr) {\n    let object_ = (0, __1.recreate)(object);\n    let keys_ = (0, __1.convertToArray)(keys, false);\n    let parentObj = object_;\n    for (let i = 0; i < keys_.length - 1; i++) {\n        if (!(keys_[i] in parentObj)) {\n            let err = Error(`key ${keys_[i]} not in object`);\n            if (throwErr)\n                throw err;\n            return undefined;\n        }\n        else {\n            parentObj = parentObj[keys_[i]];\n        }\n    }\n    let delkey = keys_[keys_.length - 1];\n    delete parentObj[delkey];\n    return object_;\n}\nexports.deleteKeyFromObject = deleteKeyFromObject;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/deleteKeyFromObject.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/deleteKeysFromJSON.js":
/*!********************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/deleteKeysFromJSON.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteKeysFromJSON = void 0;\nconst convertToArray_1 = __webpack_require__(/*! ../arrayModifiers/convertToArray */ \"../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/convertToArray.js\");\nconst deleteKeyFromObject_1 = __webpack_require__(/*! ./deleteKeyFromObject */ \"../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/deleteKeyFromObject.js\");\nconst extendedTypeof_1 = __webpack_require__(/*! ../extendedTypeof */ \"../../node_modules/oberknecht-utils/lib-js/utils/extendedTypeof.js\");\nfunction deleteKeysFromJSON(o, keys) {\n    if ((0, extendedTypeof_1.extendedTypeof)(o) !== \"json\")\n        return o;\n    (0, convertToArray_1.convertToArray)(keys, false).forEach((a) => {\n        (0, deleteKeyFromObject_1.deleteKeyFromObject)(o, a);\n    });\n    return o;\n}\nexports.deleteKeysFromJSON = deleteKeysFromJSON;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/deleteKeysFromJSON.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/getAllObjectKeysTree.js":
/*!**********************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/getAllObjectKeysTree.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getAllObjectKeysTree = void 0;\nfunction getAllObjectKeysTree(obj, parentkeynames) {\n    if (!obj || typeof obj !== \"object\")\n        return [];\n    let keys = [];\n    let _getobj = (obj2) => {\n        Object.keys(obj2).forEach((o) => {\n            if (typeof obj2[o] === \"object\" && Object.keys(obj2[o])) {\n                if (parentkeynames)\n                    keys.push(o);\n                _getobj(obj2[o]);\n            }\n            else {\n                keys.push(o);\n            }\n        });\n    };\n    _getobj(obj);\n    return keys;\n}\nexports.getAllObjectKeysTree = getAllObjectKeysTree;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/getAllObjectKeysTree.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/getByObjectFromTree.js":
/*!*********************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/getByObjectFromTree.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getByObjectFromTree = void 0;\nfunction getByObjectFromTree(obj, key, searchmode, parentkeynames) {\n    if (!obj ||\n        typeof obj !== \"object\" ||\n        !Object.keys(obj) ||\n        !(key ?? undefined))\n        return undefined;\n    searchmode = searchmode ?? 0;\n    let matches = [];\n    let _getobj = (obj2) => {\n        Object.keys(obj2).forEach((o) => {\n            function search(m) {\n                switch (m) {\n                    case 0:\n                        return o === key;\n                    case 1:\n                        return o == key;\n                    case 2:\n                        return o.includes(key);\n                    case 3:\n                        return key.includes(o);\n                    case 10:\n                        return o.match(new RegExp(`${key}`));\n                    case 11:\n                        return o.match(new RegExp(`${key}`, \"i\"));\n                    case 15:\n                        return key.match(new RegExp(`${o}`));\n                    case 16:\n                        return key.match(new RegExp(`${o}`, \"i\"));\n                }\n            }\n            if ((obj2[o] ?? undefined) &&\n                typeof obj2[o] === \"object\" &&\n                Object.keys(obj2[o])) {\n                if (search(searchmode) && parentkeynames)\n                    matches.push([obj2[o], obj2]);\n                _getobj(obj2[o]);\n            }\n            else {\n                if (search(searchmode))\n                    matches.push([obj2[o], obj2]);\n            }\n        });\n    };\n    _getobj(obj);\n    return matches;\n}\nexports.getByObjectFromTree = getByObjectFromTree;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/getByObjectFromTree.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/getKeyArraysFromObject.js":
/*!************************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/getKeyArraysFromObject.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getKeyArraysFromObject = void 0;\nconst __1 = __webpack_require__(/*! .. */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nfunction getKeyArraysFromObject(object) {\n    let r = [];\n    function go(o2, arr) {\n        Object.keys(o2).forEach((a) => {\n            if ((0, __1.extendedTypeof)(o2[a]) === \"json\" &&\n                (Object.keys(o2[a]).length ?? 0) > 0) {\n                go(o2[a], [...arr, a]);\n            }\n            else {\n                r.push({\n                    path: [...arr, a],\n                    value: o2[a],\n                });\n            }\n        });\n    }\n    go(object, []);\n    return r;\n}\nexports.getKeyArraysFromObject = getKeyArraysFromObject;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/getKeyArraysFromObject.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/getKeyFromObject.js":
/*!******************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/getKeyFromObject.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getKeyFromObject = void 0;\nconst __1 = __webpack_require__(/*! .. */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nfunction getKeyFromObject(object, keys, throwErr) {\n    let keys_ = (0, __1.convertToArray)(keys, false);\n    let value = object;\n    for (let i = 0; i < keys_.length; i++) {\n        if (value.hasOwnProperty(keys_[i])) {\n            value = value[keys_[i]];\n        }\n        else {\n            let err = Error(`key ${keys_[i]} not in value`);\n            if (throwErr)\n                throw err;\n            return undefined;\n        }\n    }\n    return value;\n}\nexports.getKeyFromObject = getKeyFromObject;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/getKeyFromObject.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/renameKey.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/renameKey.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renameKey = void 0;\nfunction renameKey(o, oldName, newName) {\n    if (!o || !oldName || !newName)\n        return undefined;\n    o[newName] = o[oldName];\n    delete o[oldName];\n    return o;\n}\nexports.renameKey = renameKey;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/jsonModifiers/renameKey.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/log.js":
/*!***************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/log.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.log = void 0;\nconst _1 = __webpack_require__(/*! . */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nconst maxGlobalLogs = 100;\nconst casecolors = {\n    fg: { \"0\": \"\", \"1\": \"30\", \"2\": \"41\" },\n    bg: { \"0\": \"\", \"1\": \"43\", \"2\": \"41\" },\n};\nconst logOpts = [0, 1, 2];\nfunction log(logOpt, ...logMsg) {\n    if (!__webpack_require__.g.logs)\n        __webpack_require__.g.logs = {};\n    if (!__webpack_require__.g.logs[String(logOpt)])\n        __webpack_require__.g.logs[String(logOpt)] = {};\n    if (!__webpack_require__.g.logs.all)\n        __webpack_require__.g.logs.all = {};\n    let logOptOption = logOpt?.option ?? (logOpts.includes(logOpt) ? logOpt : 0);\n    let logOpt_ = {\n        option: logOptOption,\n        logColorFG: logOpt?.logColorFG ?? casecolors.fg[logOptOption] ?? \"0\",\n        logColorBG: logOpt?.logColorBG ?? casecolors.bg[logOptOption] ?? \"0\",\n        displayMS: logOpt?.displayMS ?? true,\n    };\n    let logMsg_ = [...logMsg];\n    if (((0, _1.extendedTypeof)(logOpt) !== \"json\" ||\n        (!logOpt.option && !logOpt.logColorFG && !logOpt.logColorBG)) &&\n        !logOpts.includes(logOpt))\n        logMsg_.unshift(logOpt);\n    [(__webpack_require__.g.logs[String(logOptOption)], __webpack_require__.g.logs.all)].forEach((a) => {\n        a = (0, _1.concatJSON)(Object.keys(a ?? {})\n            .slice(0, maxGlobalLogs)\n            .map((b) => {\n            return { [b]: a[b] };\n        }));\n    });\n    if (__webpack_require__.g.logs)\n        __webpack_require__.g.logs.all[Date.now()] = __webpack_require__.g.logs[String(logOpt)][Date.now()] = [\n            logOpt_,\n            logMsg_?.map((a) => {\n                if (typeof a === \"string\")\n                    return a?.replace(/\\x1b\\[[\\w;]+m/g, \"\");\n                return a;\n            }),\n            (0, _1.getDateParsed)(undefined, logOpt_.displayMS),\n        ];\n    const logcolorfg = `\\x1b[${logOpt_.logColorFG}m`;\n    const logcolorbg = `\\x1b[${logOpt_.logColorBG}m`;\n    const logm = [\n        `${logcolorbg}${logcolorfg} ${(0, _1.getDateParsed)(undefined, logOpt_.displayMS)} \\x1b[0m >`,\n        ...logMsg_,\n    ];\n    switch (logOptOption) {\n        default:\n        case 0:\n            return console.log(...logm);\n        case 1:\n            return console.info(...logm);\n        case 2:\n            return console.error(...logm);\n    }\n}\nexports.log = log;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/log.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/logWeb.js":
/*!******************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/logWeb.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.logWeb = void 0;\nconst convertToArray_1 = __webpack_require__(/*! ./arrayModifiers/convertToArray */ \"../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/convertToArray.js\");\nfunction logWeb(logopt, logmsg, logdecoration, logcolorfg, logcolorbg) {\n    if (logopt && !logmsg) {\n        logmsg = logopt;\n        logopt = 0;\n    }\n    let logmsg_ = (0, convertToArray_1.convertToArray)(logmsg);\n    let logcolorfg_ = (0, convertToArray_1.convertToArray)(logcolorfg);\n    let logcolorbg_ = (0, convertToArray_1.convertToArray)(logcolorbg);\n    let logdecoration_ = (0, convertToArray_1.convertToArray)(logdecoration);\n    let parsedlog = [];\n    let logcolors = [];\n    let unformattedlogs = [];\n    const defaults = {\n        0: {\n            fg: null,\n            bg: null,\n            dec: null,\n        },\n        1: {\n            fg: \"#000\",\n            bg: \"#fafa52\",\n            dec: null,\n        },\n        2: {\n            fg: \"#FFF\",\n            bg: \"#ff4747\",\n            dec: null,\n        },\n    };\n    for (let i = 0; i < logmsg_.length; i++) {\n        let add;\n        let addfg = logcolorfg_[i] ?? defaults[String(logopt)]?.fg ?? undefined;\n        let addbg = logcolorbg_[i] ?? defaults[String(logopt)]?.bg ?? undefined;\n        let adddec = logdecoration_[i] ?? defaults[String(logopt)]?.dec ?? undefined;\n        if (addfg)\n            add = (add ?? \"\") + `color: ${addfg}`;\n        if (addbg)\n            add = (add ?? \"\") + (addfg ? \"; \" : \"\") + `background: ${addbg}`;\n        if (adddec)\n            add = (add ?? \"\") + (addfg || addbg ? \"; \" : \"\") + adddec;\n        let logoptions = {\n            raw: {\n                reg: /^@@raw/g,\n                matched: Boolean(),\n            },\n            c: {\n                reg: /%%c/g,\n                replace: \"%c\",\n                matched: Boolean(),\n            },\n        };\n        Object.keys(logoptions).forEach((a) => {\n            let b = logoptions[a];\n            b.matched = b.reg.test(logmsg_[i]);\n            if (b.matched)\n                logmsg_[i] = logmsg_[i].replace(b.reg, b.replace ?? \"\");\n        });\n        if (add && typeof logmsg_[i] === \"string\" && !logoptions.raw.matched) {\n            parsedlog.push((add && !logmsg_.includes(\"%c\") && !logoptions.c.matched ? \"%c\" : \"\") +\n                logmsg_[i] +\n                (add ? \"\" : \"\"));\n            logcolors.push(...(add ?? undefined ? [add] : []));\n        }\n        else {\n            unformattedlogs.push(logmsg_[i]);\n        }\n    }\n    let logopt_ = [\"log\", \"info\", \"error\", \"debug\"][[0, 1, 2, 3].at(parseInt(String(logopt)))];\n    let nicedate = () => {\n        return new Date(new Date().setMinutes(new Date().getMinutes() - new Date().getTimezoneOffset()))\n            .toISOString()\n            .split(\".\")[0]\n            .replace(\"T\", \" \");\n    };\n    console[logopt_](`%c [Ju] %c [${nicedate()}]` +\n        (parsedlog[0] ? \"\\n\" : \"\") +\n        parsedlog.join(\"\"), \"color: #000; background: #00FFFF; font-weight: bold\", \"color: #9c9789; font-size: 8px\", ...logcolors, ...[\n        ...(typeof unformattedlogs[0] === \"string\"\n            ? [\"\\n\" + (unformattedlogs[0] ?? \"\")]\n            : [unformattedlogs[0] ?? \"\"]),\n        ...(unformattedlogs.slice(1) ?? []),\n    ]);\n}\nexports.logWeb = logWeb;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/logWeb.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/mainPath.js":
/*!********************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/mainPath.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("/* provided dependency */ var process = __webpack_require__(/*! process/browser */ \"../../node_modules/process/browser.js\");\n\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.mainPath = void 0;\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"../../node_modules/path/path.js\"));\nfunction mainPath(dir) {\n    return path_1.default.resolve(process.cwd(), dir ?? \"\");\n}\nexports.mainPath = mainPath;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/mainPath.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/message.Badges.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/message.Badges.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.messageBadges = void 0;\nfunction messageBadges(badges) {\n    let r = {};\n    badges?.split(\",\")?.forEach((a) => (r[a.split(\"/\")[0]] = a.split(\"/\")[1]));\n    return r;\n}\nexports.messageBadges = messageBadges;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/message.Badges.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/message.Command.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/message.Command.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.messageCommand = void 0;\nfunction messageCommand(rawMessage) {\n    if (!(rawMessage ?? undefined))\n        return \"\";\n    let r = rawMessage.split(\" \").filter((a) => {\n        return /^[A-Z]+$/g.test(a);\n    })[0];\n    if (!r)\n        r = rawMessage.split(\" \").filter((a) => {\n            return /^[0-9]{3}$/g.test(a);\n        })[0];\n    return r;\n}\nexports.messageCommand = messageCommand;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/message.Command.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/message.Content.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/message.Content.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.messageContent = void 0;\nfunction messageContent(rawMessage) {\n    return (rawMessage\n        ?.split(\" \")\n        ?.slice(4)\n        ?.join(\" \")\n        ?.replace(/(^:|^\\s|\\s$)/g, \"\")\n        ?.replace(/[\\s]{2,}/g, \" \") ?? \"\");\n}\nexports.messageContent = messageContent;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/message.Content.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/message.EmoteSets.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/message.EmoteSets.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.messageEmoteSets = void 0;\nfunction messageEmoteSets(rawEmoteSets) {\n    return rawEmoteSets?.split(\",\") ?? [];\n}\nexports.messageEmoteSets = messageEmoteSets;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/message.EmoteSets.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/message.Emotes.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/message.Emotes.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.messageEmotes = void 0;\nfunction messageEmotes(rawEmotes) {\n    if (!(rawEmotes ?? undefined))\n        return [];\n    let r = [];\n    rawEmotes?.split(\"/\")?.forEach((a) => {\n        let b = a.split(\":\");\n        let c = b[0];\n        let d = b[1];\n        d.split(\",\").map((e) => {\n            let f = e.split(\"-\");\n            r.push({\n                id: c,\n                start: parseInt(f[0]),\n                end: parseInt(f[1]),\n            });\n        });\n    });\n    return r;\n}\nexports.messageEmotes = messageEmotes;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/message.Emotes.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/message.Parameters.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/message.Parameters.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.messageParameters = void 0;\nfunction messageParameters(rawMessage) {\n    let parameters = {};\n    if ((rawMessage ?? undefined) && rawMessage.startsWith(\"@\"))\n        rawMessage\n            .split(\" \")[0]\n            .substring(1)\n            .split(\";\")\n            .forEach((a) => {\n            return (parameters[a.split(\"=\")[0]] = a.split(\"=\")[1]);\n        });\n    return parameters;\n}\nexports.messageParameters = messageParameters;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/message.Parameters.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/message.Prefix.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/message.Prefix.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.messagePrefix = void 0;\nfunction messagePrefix(rawMessage) {\n    if (!(rawMessage ?? undefined))\n        return \"\";\n    return (rawMessage.split(\" \").filter((v, i) => {\n        return i <= 2 && /^:+(\\w+\\!\\w+@\\w+\\.)*tmi\\.twitch\\.tv/g.test(v);\n    })[0] ?? \"\");\n}\nexports.messagePrefix = messagePrefix;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/message.Prefix.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/message.User.js":
/*!************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/message.User.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.messageUser = void 0;\nfunction messageUser(rawMessage) {\n    let match = rawMessage?.match(/(?<=^:)\\w+(?=!)/g);\n    if (!(rawMessage ?? undefined) || !(match ?? undefined))\n        return undefined;\n    return match?.[0];\n}\nexports.messageUser = messageUser;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/message.User.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/numberspacer.js":
/*!************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/numberspacer.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.numberspacer = void 0;\nfunction numberspacer(n, replacer) {\n    if (!(n ?? undefined)?.toString() || ![\"number\", \"string\"].includes(typeof n))\n        return undefined;\n    return n.toString()?.replace(/\\B(?=(\\d{3})+(?!\\d))/g, replacer || \" \");\n}\nexports.numberspacer = numberspacer;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/numberspacer.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/pad2.js":
/*!****************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/pad2.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.pad2 = void 0;\nfunction pad2(n) {\n    return `${parseInt(`${n}`) <= 9 ? \"0\" : \"\"}${n}`;\n}\nexports.pad2 = pad2;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/pad2.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/parseProcessArgs.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/parseProcessArgs.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.parseProcessArgs = void 0;\nconst _1 = __webpack_require__(/*! . */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nfunction parseProcessArgs(args, processArgs) {\n    let processArgs_ = (0, _1.recreate)(processArgs ?? {});\n    let lastCommand;\n    args.slice(2).map((a) => {\n        if (/^\\-+\\w+$/g.test(a)) {\n            const b = a.replace(/^\\-+/, \"\");\n            const c = Object.keys(processArgs_).filter((a) => processArgs_[a].keys.includes(b))?.[0];\n            if (!c)\n                return (lastCommand = undefined);\n            let d = processArgs_[c];\n            d.args = [];\n            lastCommand = d;\n        }\n        else if (lastCommand &&\n            lastCommand.allowArgs &&\n            (!lastCommand.allowArgs ||\n                !lastCommand.argsLength ||\n                lastCommand.args.length < lastCommand.argsLength)) {\n            lastCommand.args.push(a);\n        }\n    });\n    return processArgs_;\n}\nexports.parseProcessArgs = parseProcessArgs;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/parseProcessArgs.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/pickRandom.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/pickRandom.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.pickRandom = void 0;\nfunction pickRandom(items, n) {\n    return [...Array(n ?? 1)].map(() => {\n        return items[Math.floor(Math.random() * items.length)];\n    });\n}\nexports.pickRandom = pickRandom;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/pickRandom.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/randomNum.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/randomNum.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.randomNum = void 0;\nfunction randomNum(min, max, add) {\n    min = min ?? 0;\n    max = max ?? 10;\n    add = add ?? 1;\n    let s = [min, max].sort((a, b) => {\n        return a - b;\n    });\n    return add + s[0] + Math.floor(Math.random() * (s[1] - s[0]));\n}\nexports.randomNum = randomNum;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/randomNum.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/recreate.js":
/*!********************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/recreate.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.recreate = void 0;\nconst regex_1 = __webpack_require__(/*! ../variables/regex */ \"../../node_modules/oberknecht-utils/lib-js/variables/regex.js\");\nfunction recreate(inp) {\n    switch (typeof inp) {\n        case \"boolean\":\n            return inp === true;\n        case \"number\":\n            return parseInt(`${inp}`);\n        case \"object\": {\n            if (Array.isArray(inp))\n                return [...inp];\n            try {\n                if (inp instanceof HTMLElement)\n                    return inp.cloneNode(true);\n            }\n            catch (nothin) { }\n            if (regex_1.regex.jsonreg().test(JSON.stringify(inp)))\n                return { ...inp };\n            return Object.assign({}, inp);\n        }\n        case \"string\":\n            return `${inp}`;\n        case \"undefined\":\n            return undefined;\n    }\n}\nexports.recreate = recreate;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/recreate.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/regexEscape.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/regexEscape.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.regexEscape = void 0;\nconst recreate_1 = __webpack_require__(/*! ./recreate */ \"../../node_modules/oberknecht-utils/lib-js/utils/recreate.js\");\nconst regexEscape_1 = __webpack_require__(/*! ../types/regexEscape */ \"../../node_modules/oberknecht-utils/lib-js/types/regexEscape.js\");\nfunction regexEscape(s) {\n    let r = (0, recreate_1.recreate)(s);\n    regexEscape_1.escapingRegex.forEach((a) => (r = r.replaceAll(a, (b) => `\\\\${b}`)));\n    return r;\n}\nexports.regexEscape = regexEscape;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/regexEscape.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/returnErr.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/returnErr.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.returnErr = void 0;\nconst log_1 = __webpack_require__(/*! ./log */ \"../../node_modules/oberknecht-utils/lib-js/utils/log.js\");\nfunction returnErr(e, logerr, fullstack) {\n    if (!e)\n        return \"\";\n    // @ts-ignore\n    let r2 = e?.error ?? e;\n    let r = \"\";\n    let rfull = \"\";\n    if (r2.stack) {\n        let appendStack = (e2) => {\n            r += (r.length > 0 ? \" (caused by:) \" : \"\") + (e2?.message ?? e2);\n            rfull += (rfull.length > 0 ? \"\\nCause: \" : \"\") + (e2?.stack ?? e2);\n            if (e2?.cause)\n                return appendStack(e2.cause);\n            return;\n        };\n        appendStack(r2);\n    }\n    if (logerr)\n        (0, log_1.log)(2, r);\n    return fullstack ? rfull : r;\n}\nexports.returnErr = returnErr;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/returnErr.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/returnOnNumber.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/returnOnNumber.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.returnOnNumber = void 0;\nconst convertToArray_1 = __webpack_require__(/*! ./arrayModifiers/convertToArray */ \"../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/convertToArray.js\");\nconst extendedTypeof_1 = __webpack_require__(/*! ./extendedTypeof */ \"../../node_modules/oberknecht-utils/lib-js/utils/extendedTypeof.js\");\nconst isNullUndefined_1 = __webpack_require__(/*! ./isNullUndefined */ \"../../node_modules/oberknecht-utils/lib-js/utils/isNullUndefined.js\");\nfunction returnOnNumber(input, targetNumber, returnOnGreater, returnOnGreaterEquals, returnOnSmaller, returnOnSmallerEquals, returnDefault) {\n    if ([\"null\", \"undefined\"].includes((0, extendedTypeof_1.extendedTypeof)(input)))\n        return undefined;\n    targetNumber = (0, isNullUndefined_1.isNullUndefined)((0, extendedTypeof_1.extendedTypeof)(targetNumber))\n        ? 2\n        : targetNumber;\n    let parsedSearchNumber;\n    switch ((0, extendedTypeof_1.extendedTypeof)(input)) {\n        case \"string\":\n        case \"array\":\n            parsedSearchNumber = (0, convertToArray_1.convertToArray)(input).length;\n            break;\n        case \"json\":\n            parsedSearchNumber = Object.keys(input).length;\n            break;\n        case \"number\":\n        case \"bigint\":\n            parsedSearchNumber = input;\n            break;\n        default:\n            return undefined;\n    }\n    if (!(0, isNullUndefined_1.isNullUndefined)(returnOnGreater) && parsedSearchNumber > targetNumber)\n        return returnOnGreater;\n    if (!(0, isNullUndefined_1.isNullUndefined)(returnOnGreaterEquals) &&\n        parsedSearchNumber >= targetNumber)\n        return returnOnGreaterEquals;\n    if (!(0, isNullUndefined_1.isNullUndefined)(returnOnSmaller) && parsedSearchNumber < targetNumber)\n        return returnOnSmaller;\n    if (!(0, isNullUndefined_1.isNullUndefined)(returnOnSmallerEquals) &&\n        parsedSearchNumber <= targetNumber)\n        return returnOnSmallerEquals;\n    return !(0, isNullUndefined_1.isNullUndefined)(returnDefault) ? returnDefault : \"\";\n}\nexports.returnOnNumber = returnOnNumber;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/returnOnNumber.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/returnOnType.js":
/*!************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/returnOnType.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.returnOnType = void 0;\nconst extendedTypeof_1 = __webpack_require__(/*! ./extendedTypeof */ \"../../node_modules/oberknecht-utils/lib-js/utils/extendedTypeof.js\");\nconst convertToArray_1 = __webpack_require__(/*! ./arrayModifiers/convertToArray */ \"../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/convertToArray.js\");\nfunction returnOnType(input, types_, returnIfType, returnElse) {\n    let types = (0, convertToArray_1.convertToArray)(types_, false);\n    if (types.includes((0, extendedTypeof_1.extendedTypeof)(input)))\n        return returnIfType;\n    else\n        return returnElse;\n}\nexports.returnOnType = returnOnType;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/returnOnType.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/sleep.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/sleep.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.sleep = void 0;\nasync function sleep(time) {\n    return new Promise((resolve) => setTimeout(resolve, time ?? 1000));\n}\nexports.sleep = sleep;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/sleep.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/splitPixelize.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/splitPixelize.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.splitPixelize = void 0;\nconst _1 = __webpack_require__(/*! . */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nfunction splitPixelize(str, pixelIndex, pixelChar) {\n    if (!str)\n        return undefined;\n    let str_ = str.split(\"\");\n    let pixelIndex_ = pixelIndex ?? (0, _1.getFullNumber)(str_.length / 2);\n    let pixelChar_ = pixelChar ?? \"󠀀\";\n    return (str_.slice(0, pixelIndex_).join(\"\") +\n        pixelChar_ +\n        str_.slice(pixelIndex_).join(\"\"));\n}\nexports.splitPixelize = splitPixelize;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/splitPixelize.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/stackName.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/stackName.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.stackName = void 0;\nconst _1 = __webpack_require__(/*! . */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nfunction stackName() {\n    let opt = [...arguments][0];\n    let staticSpacerWidth = (0, _1.extendedTypeof)([...arguments][1]) === \"number\" ? [...arguments][1] : 2;\n    let args = [...arguments];\n    if ((opt ?? undefined) && !isNaN(opt))\n        args.shift();\n    if (staticSpacerWidth === [...arguments][1])\n        args.shift();\n    let stackret = args.map((a) => {\n        if (typeof a === \"string\") {\n            return `[${a.toUpperCase()}]`;\n        }\n        else {\n            return `nameerr`;\n        }\n    });\n    let stackcolor = stackret.some((s2) => {\n        return s2 == \"[ERROR]\";\n    })\n        ? \"\\x1b[4;31m\"\n        : \"\\x1b[4;1;36m\";\n    switch (opt) {\n        default: {\n            return [\n                stackret.join(\" \"),\n                stackret,\n                stackret.map((s) => {\n                    return (0, _1.staticSpacer)(staticSpacerWidth, s, stackcolor);\n                }),\n                stackret\n                    .map((s) => {\n                    return (0, _1.staticSpacer)(staticSpacerWidth, s, stackcolor);\n                })\n                    .join(\" \"),\n            ];\n        }\n        case 1: {\n            return [\n                stackret.join(\" \"),\n                stackret,\n                stackret.map((s) => {\n                    return (0, _1.staticSpacer)(staticSpacerWidth, s);\n                }),\n                stackret\n                    .map((s) => {\n                    return (0, _1.staticSpacer)(staticSpacerWidth, s);\n                })\n                    .join(\" \"),\n            ];\n        }\n    }\n}\nexports.stackName = stackName;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/stackName.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/staticSpacer.js":
/*!************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/staticSpacer.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.staticSpacer = void 0;\nfunction staticSpacer(spacerWidth, spacerContent, spacerColor) {\n    let color = () => {\n        if (!spacerColor)\n            return \"\";\n        if (typeof spacerColor === \"string\")\n            return spacerColor;\n        if (spacerContent == \"[ERROR]\")\n            return \"\\x1b[4;1;31m\";\n        return \"\\x1b[4;1;36m\";\n    };\n    let spacerContent_ = spacerContent.toString();\n    let sw = spacerWidth * 8;\n    let s = sw - spacerContent_.length;\n    if (s <= 0)\n        return spacerContent_;\n    let st = s >= 8 ? ` `.repeat(8).repeat(Math.floor(s / 8)) : \"\";\n    let ss = \" \".repeat(s % 8);\n    return `${color()}${spacerContent_}\\x1b[0m${ss}${st}`;\n}\nexports.staticSpacer = staticSpacer;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/staticSpacer.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.stringModifiers = void 0;\nconst secondCase_1 = __webpack_require__(/*! ./stringModifiers/secondCase */ \"../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/secondCase.js\");\nconst reverse_1 = __webpack_require__(/*! ./stringModifiers/reverse */ \"../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/reverse.js\");\nconst reverseWords_1 = __webpack_require__(/*! ./stringModifiers/reverseWords */ \"../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/reverseWords.js\");\nconst reverseInWords_1 = __webpack_require__(/*! ./stringModifiers/reverseInWords */ \"../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/reverseInWords.js\");\nconst toFancyText_1 = __webpack_require__(/*! ./stringModifiers/toFancyText */ \"../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/toFancyText.js\");\nclass stringModifiers {\n    static secondCase = secondCase_1.secondCase;\n    static reverse = reverse_1.reverse;\n    static reverseWords = reverseWords_1.reverseWords;\n    static reverseInWords = reverseInWords_1.reverseInWords;\n    static toFancyText = toFancyText_1.toFancyText;\n}\nexports.stringModifiers = stringModifiers;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/reverse.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/reverse.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.reverse = void 0;\nfunction reverse(s) {\n    return s?.split(\"\")?.reverse()?.join(\"\");\n}\nexports.reverse = reverse;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/reverse.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/reverseInWords.js":
/*!******************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/reverseInWords.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.reverseInWords = void 0;\nconst reverse_1 = __webpack_require__(/*! ./reverse */ \"../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/reverse.js\");\nfunction reverseInWords(s) {\n    return s\n        ?.split(\" \")\n        ?.map((a) => (0, reverse_1.reverse)(a))\n        ?.join(\" \");\n}\nexports.reverseInWords = reverseInWords;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/reverseInWords.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/reverseWords.js":
/*!****************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/reverseWords.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.reverseWords = void 0;\nfunction reverseWords(s) {\n    return s?.split(\" \")?.reverse()?.join(\" \");\n}\nexports.reverseWords = reverseWords;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/reverseWords.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/secondCase.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/secondCase.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.secondCase = void 0;\nfunction secondCase(s) {\n    let r = \"\";\n    s?.split(\"\")?.forEach((a, i) => (r += i % 2 === 0 ? a : a.toUpperCase()));\n    return r;\n}\nexports.secondCase = secondCase;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/secondCase.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/toFancyText.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/toFancyText.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.toFancyText = void 0;\nconst __1 = __webpack_require__(/*! ../ */ \"../../node_modules/oberknecht-utils/lib-js/utils/index.js\");\nconst fancyTexts = [\n    {\n        ignore: true,\n        name: \"0\",\n        chars: \"abcdefghijklmnopqrstuvwxqz\",\n        nums: \"0123456789\",\n        tags: [],\n    },\n    {\n        name: \"1\",\n        chars: \"𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔮𝔷\",\n        nums: \"0123456789\",\n        tags: [],\n    },\n    {\n        name: \"2\",\n        chars: \"𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖖𝖟\",\n        nums: \"0123456789\",\n        tags: [],\n    },\n    {\n        name: \"3\",\n        chars: \"𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝓺𝔃\",\n        nums: \"0123456789\",\n        tags: [\"cursive\"],\n    },\n    {\n        name: \"4\",\n        chars: \"𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓆𝓏\",\n        nums: \"𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫\",\n        tags: [\"cursive\"],\n    },\n    {\n        name: \"5\",\n        chars: \"𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕢𝕫\",\n        nums: \"𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡\",\n        tags: [\"double\"],\n    },\n    {\n        name: \"6\",\n        chars: \"ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｑｚ\",\n        nums: \"０１２３４５６７８９\",\n        tags: [\"wide\"],\n    },\n    {\n        name: \"7\",\n        chars: \"​🇦​​🇧​​🇨​​🇩​​🇪​​🇫​​🇬​​🇭​​🇮​​🇯​​🇰​​🇱​​🇲​​🇳​​🇴​​🇵​​🇶​​🇷​​🇸​​🇹​​🇺​​🇻​​🇼​​🇽​​🇶​​🇿​\",\n        nums: \"0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣\",\n        tags: [],\n    },\n    {\n        name: \"8\",\n        chars: \"🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅀🅉\",\n        nums: \"0123456789\",\n        tags: [],\n    },\n    {\n        name: \"9\",\n        chars: \"🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆀🆉\",\n        nums: \"0123456789\",\n        tags: [],\n    },\n    {\n        name: \"10\",\n        chars: \"ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓠⓩ\",\n        nums: \"⓪①②③④⑤⑥⑦⑧⑨\",\n        tags: [],\n    },\n    {\n        name: \"11\",\n        chars: \"𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐪𝐳\",\n        nums: \"𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗\",\n        tags: [\"bold\"],\n    },\n    {\n        name: \"12\",\n        chars: \"𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝗾𝘇\",\n        nums: \"𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵\",\n        tags: [\"bold\"],\n    },\n    {\n        name: \"13\",\n        chars: \"𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘲𝘻\",\n        nums: \"0123456789\",\n        tags: [\"cursive\"],\n    },\n    {\n        name: \"14\",\n        chars: \"𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙦𝙯\",\n        nums: \"0123456789\",\n        tags: [\"bold\", \"cursive\"],\n    },\n    {\n        name: \"15\",\n        chars: \"𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚚𝚣\",\n        nums: \"𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿\",\n        tags: [],\n    },\n];\nfunction toFancyText(s, name) {\n    let r = (0, __1.recreate)(s ?? \"\");\n    const randomNameNum = (0, __1.randomNum)(1, fancyTexts.length - 1);\n    const name_ = name?.toString() ?? fancyTexts[randomNameNum].name;\n    const defaultChars = fancyTexts[0];\n    const selectedChars = fancyTexts.filter((a) => a.name === name_)[0] ?? fancyTexts[randomNameNum];\n    const defaultCharsAll = [...defaultChars.chars, ...defaultChars.nums];\n    const selectedCharsAll = [...selectedChars.chars, ...selectedChars.nums];\n    defaultCharsAll.forEach((char, i) => {\n        r = r.replace(new RegExp(`${char}`, \"g\"), selectedCharsAll[i]);\n    });\n    return r;\n}\nexports.toFancyText = toFancyText;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/utils/stringModifiers/toFancyText.js?");

/***/ }),

/***/ "../../node_modules/oberknecht-utils/lib-js/variables/regex.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/oberknecht-utils/lib-js/variables/regex.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.regex = void 0;\nclass regex {\n    static numregex = () => {\n        return /^\\-*[\\d]{1,}$/;\n    };\n    static tokenreg = () => {\n        return /^\\b\\w{30}\\b$/;\n    };\n    static jsonreg = () => {\n        return /^\\{.*\\}$/;\n        // /\\{.*\\:\\{.*\\:.*\\}\\}/\n    };\n    static urlreg = () => {\n        return /^(https?:\\/\\/)*(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$/;\n    };\n    static urlreg_ = () => {\n        return /(https?:\\/\\/)*(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)/g;\n    };\n    static extraSpaceRegex = () => {\n        return /(^\\s|\\s$|\\s{2,})/g;\n    };\n    static twitch = class {\n        static message = class {\n            static action = () => {\n                return /^\\u0001ACTION (.*)\\u0001$/;\n            };\n        };\n        static usernamereg = () => {\n            return /^\\w{1,32}$/;\n        };\n        static tokenreg = () => {\n            return /^\\w{30}$/;\n        };\n    };\n}\nexports.regex = regex;\n\n\n//# sourceURL=webpack:///../../node_modules/oberknecht-utils/lib-js/variables/regex.js?");

/***/ }),

/***/ "../../node_modules/path/path.js":
/*!***************************************!*\
  !*** ../../node_modules/path/path.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/* provided dependency */ var process = __webpack_require__(/*! process/browser */ \"../../node_modules/process/browser.js\");\n// Copyright Joyent, Inc. and other Node contributors.\r\n//\r\n// Permission is hereby granted, free of charge, to any person obtaining a\r\n// copy of this software and associated documentation files (the\r\n// \"Software\"), to deal in the Software without restriction, including\r\n// without limitation the rights to use, copy, modify, merge, publish,\r\n// distribute, sublicense, and/or sell copies of the Software, and to permit\r\n// persons to whom the Software is furnished to do so, subject to the\r\n// following conditions:\r\n//\r\n// The above copyright notice and this permission notice shall be included\r\n// in all copies or substantial portions of the Software.\r\n//\r\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\r\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\r\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\r\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\r\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\r\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\r\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\r\n\r\n\r\n\r\n\r\nvar isWindows = process.platform === 'win32';\r\nvar util = __webpack_require__(/*! util */ \"../../node_modules/util/util.js\");\r\n\r\n\r\n// resolves . and .. elements in a path array with directory names there\r\n// must be no slashes or device names (c:\\) in the array\r\n// (so also no leading and trailing slashes - it does not distinguish\r\n// relative and absolute paths)\r\nfunction normalizeArray(parts, allowAboveRoot) {\r\n  var res = [];\r\n  for (var i = 0; i < parts.length; i++) {\r\n    var p = parts[i];\r\n\r\n    // ignore empty parts\r\n    if (!p || p === '.')\r\n      continue;\r\n\r\n    if (p === '..') {\r\n      if (res.length && res[res.length - 1] !== '..') {\r\n        res.pop();\r\n      } else if (allowAboveRoot) {\r\n        res.push('..');\r\n      }\r\n    } else {\r\n      res.push(p);\r\n    }\r\n  }\r\n\r\n  return res;\r\n}\r\n\r\n// returns an array with empty elements removed from either end of the input\r\n// array or the original array if no elements need to be removed\r\nfunction trimArray(arr) {\r\n  var lastIndex = arr.length - 1;\r\n  var start = 0;\r\n  for (; start <= lastIndex; start++) {\r\n    if (arr[start])\r\n      break;\r\n  }\r\n\r\n  var end = lastIndex;\r\n  for (; end >= 0; end--) {\r\n    if (arr[end])\r\n      break;\r\n  }\r\n\r\n  if (start === 0 && end === lastIndex)\r\n    return arr;\r\n  if (start > end)\r\n    return [];\r\n  return arr.slice(start, end + 1);\r\n}\r\n\r\n// Regex to split a windows path into three parts: [*, device, slash,\r\n// tail] windows-only\r\nvar splitDeviceRe =\r\n    /^([a-zA-Z]:|[\\\\\\/]{2}[^\\\\\\/]+[\\\\\\/]+[^\\\\\\/]+)?([\\\\\\/])?([\\s\\S]*?)$/;\r\n\r\n// Regex to split the tail part of the above into [*, dir, basename, ext]\r\nvar splitTailRe =\r\n    /^([\\s\\S]*?)((?:\\.{1,2}|[^\\\\\\/]+?|)(\\.[^.\\/\\\\]*|))(?:[\\\\\\/]*)$/;\r\n\r\nvar win32 = {};\r\n\r\n// Function to split a filename into [root, dir, basename, ext]\r\nfunction win32SplitPath(filename) {\r\n  // Separate device+slash from tail\r\n  var result = splitDeviceRe.exec(filename),\r\n      device = (result[1] || '') + (result[2] || ''),\r\n      tail = result[3] || '';\r\n  // Split the tail into dir, basename and extension\r\n  var result2 = splitTailRe.exec(tail),\r\n      dir = result2[1],\r\n      basename = result2[2],\r\n      ext = result2[3];\r\n  return [device, dir, basename, ext];\r\n}\r\n\r\nfunction win32StatPath(path) {\r\n  var result = splitDeviceRe.exec(path),\r\n      device = result[1] || '',\r\n      isUnc = !!device && device[1] !== ':';\r\n  return {\r\n    device: device,\r\n    isUnc: isUnc,\r\n    isAbsolute: isUnc || !!result[2], // UNC paths are always absolute\r\n    tail: result[3]\r\n  };\r\n}\r\n\r\nfunction normalizeUNCRoot(device) {\r\n  return '\\\\\\\\' + device.replace(/^[\\\\\\/]+/, '').replace(/[\\\\\\/]+/g, '\\\\');\r\n}\r\n\r\n// path.resolve([from ...], to)\r\nwin32.resolve = function() {\r\n  var resolvedDevice = '',\r\n      resolvedTail = '',\r\n      resolvedAbsolute = false;\r\n\r\n  for (var i = arguments.length - 1; i >= -1; i--) {\r\n    var path;\r\n    if (i >= 0) {\r\n      path = arguments[i];\r\n    } else if (!resolvedDevice) {\r\n      path = process.cwd();\r\n    } else {\r\n      // Windows has the concept of drive-specific current working\r\n      // directories. If we've resolved a drive letter but not yet an\r\n      // absolute path, get cwd for that drive. We're sure the device is not\r\n      // an unc path at this points, because unc paths are always absolute.\r\n      path = process.env['=' + resolvedDevice];\r\n      // Verify that a drive-local cwd was found and that it actually points\r\n      // to our drive. If not, default to the drive's root.\r\n      if (!path || path.substr(0, 3).toLowerCase() !==\r\n          resolvedDevice.toLowerCase() + '\\\\') {\r\n        path = resolvedDevice + '\\\\';\r\n      }\r\n    }\r\n\r\n    // Skip empty and invalid entries\r\n    if (!util.isString(path)) {\r\n      throw new TypeError('Arguments to path.resolve must be strings');\r\n    } else if (!path) {\r\n      continue;\r\n    }\r\n\r\n    var result = win32StatPath(path),\r\n        device = result.device,\r\n        isUnc = result.isUnc,\r\n        isAbsolute = result.isAbsolute,\r\n        tail = result.tail;\r\n\r\n    if (device &&\r\n        resolvedDevice &&\r\n        device.toLowerCase() !== resolvedDevice.toLowerCase()) {\r\n      // This path points to another device so it is not applicable\r\n      continue;\r\n    }\r\n\r\n    if (!resolvedDevice) {\r\n      resolvedDevice = device;\r\n    }\r\n    if (!resolvedAbsolute) {\r\n      resolvedTail = tail + '\\\\' + resolvedTail;\r\n      resolvedAbsolute = isAbsolute;\r\n    }\r\n\r\n    if (resolvedDevice && resolvedAbsolute) {\r\n      break;\r\n    }\r\n  }\r\n\r\n  // Convert slashes to backslashes when `resolvedDevice` points to an UNC\r\n  // root. Also squash multiple slashes into a single one where appropriate.\r\n  if (isUnc) {\r\n    resolvedDevice = normalizeUNCRoot(resolvedDevice);\r\n  }\r\n\r\n  // At this point the path should be resolved to a full absolute path,\r\n  // but handle relative paths to be safe (might happen when process.cwd()\r\n  // fails)\r\n\r\n  // Normalize the tail path\r\n  resolvedTail = normalizeArray(resolvedTail.split(/[\\\\\\/]+/),\r\n                                !resolvedAbsolute).join('\\\\');\r\n\r\n  return (resolvedDevice + (resolvedAbsolute ? '\\\\' : '') + resolvedTail) ||\r\n         '.';\r\n};\r\n\r\n\r\nwin32.normalize = function(path) {\r\n  var result = win32StatPath(path),\r\n      device = result.device,\r\n      isUnc = result.isUnc,\r\n      isAbsolute = result.isAbsolute,\r\n      tail = result.tail,\r\n      trailingSlash = /[\\\\\\/]$/.test(tail);\r\n\r\n  // Normalize the tail path\r\n  tail = normalizeArray(tail.split(/[\\\\\\/]+/), !isAbsolute).join('\\\\');\r\n\r\n  if (!tail && !isAbsolute) {\r\n    tail = '.';\r\n  }\r\n  if (tail && trailingSlash) {\r\n    tail += '\\\\';\r\n  }\r\n\r\n  // Convert slashes to backslashes when `device` points to an UNC root.\r\n  // Also squash multiple slashes into a single one where appropriate.\r\n  if (isUnc) {\r\n    device = normalizeUNCRoot(device);\r\n  }\r\n\r\n  return device + (isAbsolute ? '\\\\' : '') + tail;\r\n};\r\n\r\n\r\nwin32.isAbsolute = function(path) {\r\n  return win32StatPath(path).isAbsolute;\r\n};\r\n\r\nwin32.join = function() {\r\n  var paths = [];\r\n  for (var i = 0; i < arguments.length; i++) {\r\n    var arg = arguments[i];\r\n    if (!util.isString(arg)) {\r\n      throw new TypeError('Arguments to path.join must be strings');\r\n    }\r\n    if (arg) {\r\n      paths.push(arg);\r\n    }\r\n  }\r\n\r\n  var joined = paths.join('\\\\');\r\n\r\n  // Make sure that the joined path doesn't start with two slashes, because\r\n  // normalize() will mistake it for an UNC path then.\r\n  //\r\n  // This step is skipped when it is very clear that the user actually\r\n  // intended to point at an UNC path. This is assumed when the first\r\n  // non-empty string arguments starts with exactly two slashes followed by\r\n  // at least one more non-slash character.\r\n  //\r\n  // Note that for normalize() to treat a path as an UNC path it needs to\r\n  // have at least 2 components, so we don't filter for that here.\r\n  // This means that the user can use join to construct UNC paths from\r\n  // a server name and a share name; for example:\r\n  //   path.join('//server', 'share') -> '\\\\\\\\server\\\\share\\')\r\n  if (!/^[\\\\\\/]{2}[^\\\\\\/]/.test(paths[0])) {\r\n    joined = joined.replace(/^[\\\\\\/]{2,}/, '\\\\');\r\n  }\r\n\r\n  return win32.normalize(joined);\r\n};\r\n\r\n\r\n// path.relative(from, to)\r\n// it will solve the relative path from 'from' to 'to', for instance:\r\n// from = 'C:\\\\orandea\\\\test\\\\aaa'\r\n// to = 'C:\\\\orandea\\\\impl\\\\bbb'\r\n// The output of the function should be: '..\\\\..\\\\impl\\\\bbb'\r\nwin32.relative = function(from, to) {\r\n  from = win32.resolve(from);\r\n  to = win32.resolve(to);\r\n\r\n  // windows is not case sensitive\r\n  var lowerFrom = from.toLowerCase();\r\n  var lowerTo = to.toLowerCase();\r\n\r\n  var toParts = trimArray(to.split('\\\\'));\r\n\r\n  var lowerFromParts = trimArray(lowerFrom.split('\\\\'));\r\n  var lowerToParts = trimArray(lowerTo.split('\\\\'));\r\n\r\n  var length = Math.min(lowerFromParts.length, lowerToParts.length);\r\n  var samePartsLength = length;\r\n  for (var i = 0; i < length; i++) {\r\n    if (lowerFromParts[i] !== lowerToParts[i]) {\r\n      samePartsLength = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  if (samePartsLength == 0) {\r\n    return to;\r\n  }\r\n\r\n  var outputParts = [];\r\n  for (var i = samePartsLength; i < lowerFromParts.length; i++) {\r\n    outputParts.push('..');\r\n  }\r\n\r\n  outputParts = outputParts.concat(toParts.slice(samePartsLength));\r\n\r\n  return outputParts.join('\\\\');\r\n};\r\n\r\n\r\nwin32._makeLong = function(path) {\r\n  // Note: this will *probably* throw somewhere.\r\n  if (!util.isString(path))\r\n    return path;\r\n\r\n  if (!path) {\r\n    return '';\r\n  }\r\n\r\n  var resolvedPath = win32.resolve(path);\r\n\r\n  if (/^[a-zA-Z]\\:\\\\/.test(resolvedPath)) {\r\n    // path is local filesystem path, which needs to be converted\r\n    // to long UNC path.\r\n    return '\\\\\\\\?\\\\' + resolvedPath;\r\n  } else if (/^\\\\\\\\[^?.]/.test(resolvedPath)) {\r\n    // path is network UNC path, which needs to be converted\r\n    // to long UNC path.\r\n    return '\\\\\\\\?\\\\UNC\\\\' + resolvedPath.substring(2);\r\n  }\r\n\r\n  return path;\r\n};\r\n\r\n\r\nwin32.dirname = function(path) {\r\n  var result = win32SplitPath(path),\r\n      root = result[0],\r\n      dir = result[1];\r\n\r\n  if (!root && !dir) {\r\n    // No dirname whatsoever\r\n    return '.';\r\n  }\r\n\r\n  if (dir) {\r\n    // It has a dirname, strip trailing slash\r\n    dir = dir.substr(0, dir.length - 1);\r\n  }\r\n\r\n  return root + dir;\r\n};\r\n\r\n\r\nwin32.basename = function(path, ext) {\r\n  var f = win32SplitPath(path)[2];\r\n  // TODO: make this comparison case-insensitive on windows?\r\n  if (ext && f.substr(-1 * ext.length) === ext) {\r\n    f = f.substr(0, f.length - ext.length);\r\n  }\r\n  return f;\r\n};\r\n\r\n\r\nwin32.extname = function(path) {\r\n  return win32SplitPath(path)[3];\r\n};\r\n\r\n\r\nwin32.format = function(pathObject) {\r\n  if (!util.isObject(pathObject)) {\r\n    throw new TypeError(\r\n        \"Parameter 'pathObject' must be an object, not \" + typeof pathObject\r\n    );\r\n  }\r\n\r\n  var root = pathObject.root || '';\r\n\r\n  if (!util.isString(root)) {\r\n    throw new TypeError(\r\n        \"'pathObject.root' must be a string or undefined, not \" +\r\n        typeof pathObject.root\r\n    );\r\n  }\r\n\r\n  var dir = pathObject.dir;\r\n  var base = pathObject.base || '';\r\n  if (!dir) {\r\n    return base;\r\n  }\r\n  if (dir[dir.length - 1] === win32.sep) {\r\n    return dir + base;\r\n  }\r\n  return dir + win32.sep + base;\r\n};\r\n\r\n\r\nwin32.parse = function(pathString) {\r\n  if (!util.isString(pathString)) {\r\n    throw new TypeError(\r\n        \"Parameter 'pathString' must be a string, not \" + typeof pathString\r\n    );\r\n  }\r\n  var allParts = win32SplitPath(pathString);\r\n  if (!allParts || allParts.length !== 4) {\r\n    throw new TypeError(\"Invalid path '\" + pathString + \"'\");\r\n  }\r\n  return {\r\n    root: allParts[0],\r\n    dir: allParts[0] + allParts[1].slice(0, -1),\r\n    base: allParts[2],\r\n    ext: allParts[3],\r\n    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)\r\n  };\r\n};\r\n\r\n\r\nwin32.sep = '\\\\';\r\nwin32.delimiter = ';';\r\n\r\n\r\n// Split a filename into [root, dir, basename, ext], unix version\r\n// 'root' is just a slash, or nothing.\r\nvar splitPathRe =\r\n    /^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/;\r\nvar posix = {};\r\n\r\n\r\nfunction posixSplitPath(filename) {\r\n  return splitPathRe.exec(filename).slice(1);\r\n}\r\n\r\n\r\n// path.resolve([from ...], to)\r\n// posix version\r\nposix.resolve = function() {\r\n  var resolvedPath = '',\r\n      resolvedAbsolute = false;\r\n\r\n  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {\r\n    var path = (i >= 0) ? arguments[i] : process.cwd();\r\n\r\n    // Skip empty and invalid entries\r\n    if (!util.isString(path)) {\r\n      throw new TypeError('Arguments to path.resolve must be strings');\r\n    } else if (!path) {\r\n      continue;\r\n    }\r\n\r\n    resolvedPath = path + '/' + resolvedPath;\r\n    resolvedAbsolute = path[0] === '/';\r\n  }\r\n\r\n  // At this point the path should be resolved to a full absolute path, but\r\n  // handle relative paths to be safe (might happen when process.cwd() fails)\r\n\r\n  // Normalize the path\r\n  resolvedPath = normalizeArray(resolvedPath.split('/'),\r\n                                !resolvedAbsolute).join('/');\r\n\r\n  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';\r\n};\r\n\r\n// path.normalize(path)\r\n// posix version\r\nposix.normalize = function(path) {\r\n  var isAbsolute = posix.isAbsolute(path),\r\n      trailingSlash = path && path[path.length - 1] === '/';\r\n\r\n  // Normalize the path\r\n  path = normalizeArray(path.split('/'), !isAbsolute).join('/');\r\n\r\n  if (!path && !isAbsolute) {\r\n    path = '.';\r\n  }\r\n  if (path && trailingSlash) {\r\n    path += '/';\r\n  }\r\n\r\n  return (isAbsolute ? '/' : '') + path;\r\n};\r\n\r\n// posix version\r\nposix.isAbsolute = function(path) {\r\n  return path.charAt(0) === '/';\r\n};\r\n\r\n// posix version\r\nposix.join = function() {\r\n  var path = '';\r\n  for (var i = 0; i < arguments.length; i++) {\r\n    var segment = arguments[i];\r\n    if (!util.isString(segment)) {\r\n      throw new TypeError('Arguments to path.join must be strings');\r\n    }\r\n    if (segment) {\r\n      if (!path) {\r\n        path += segment;\r\n      } else {\r\n        path += '/' + segment;\r\n      }\r\n    }\r\n  }\r\n  return posix.normalize(path);\r\n};\r\n\r\n\r\n// path.relative(from, to)\r\n// posix version\r\nposix.relative = function(from, to) {\r\n  from = posix.resolve(from).substr(1);\r\n  to = posix.resolve(to).substr(1);\r\n\r\n  var fromParts = trimArray(from.split('/'));\r\n  var toParts = trimArray(to.split('/'));\r\n\r\n  var length = Math.min(fromParts.length, toParts.length);\r\n  var samePartsLength = length;\r\n  for (var i = 0; i < length; i++) {\r\n    if (fromParts[i] !== toParts[i]) {\r\n      samePartsLength = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  var outputParts = [];\r\n  for (var i = samePartsLength; i < fromParts.length; i++) {\r\n    outputParts.push('..');\r\n  }\r\n\r\n  outputParts = outputParts.concat(toParts.slice(samePartsLength));\r\n\r\n  return outputParts.join('/');\r\n};\r\n\r\n\r\nposix._makeLong = function(path) {\r\n  return path;\r\n};\r\n\r\n\r\nposix.dirname = function(path) {\r\n  var result = posixSplitPath(path),\r\n      root = result[0],\r\n      dir = result[1];\r\n\r\n  if (!root && !dir) {\r\n    // No dirname whatsoever\r\n    return '.';\r\n  }\r\n\r\n  if (dir) {\r\n    // It has a dirname, strip trailing slash\r\n    dir = dir.substr(0, dir.length - 1);\r\n  }\r\n\r\n  return root + dir;\r\n};\r\n\r\n\r\nposix.basename = function(path, ext) {\r\n  var f = posixSplitPath(path)[2];\r\n  // TODO: make this comparison case-insensitive on windows?\r\n  if (ext && f.substr(-1 * ext.length) === ext) {\r\n    f = f.substr(0, f.length - ext.length);\r\n  }\r\n  return f;\r\n};\r\n\r\n\r\nposix.extname = function(path) {\r\n  return posixSplitPath(path)[3];\r\n};\r\n\r\n\r\nposix.format = function(pathObject) {\r\n  if (!util.isObject(pathObject)) {\r\n    throw new TypeError(\r\n        \"Parameter 'pathObject' must be an object, not \" + typeof pathObject\r\n    );\r\n  }\r\n\r\n  var root = pathObject.root || '';\r\n\r\n  if (!util.isString(root)) {\r\n    throw new TypeError(\r\n        \"'pathObject.root' must be a string or undefined, not \" +\r\n        typeof pathObject.root\r\n    );\r\n  }\r\n\r\n  var dir = pathObject.dir ? pathObject.dir + posix.sep : '';\r\n  var base = pathObject.base || '';\r\n  return dir + base;\r\n};\r\n\r\n\r\nposix.parse = function(pathString) {\r\n  if (!util.isString(pathString)) {\r\n    throw new TypeError(\r\n        \"Parameter 'pathString' must be a string, not \" + typeof pathString\r\n    );\r\n  }\r\n  var allParts = posixSplitPath(pathString);\r\n  if (!allParts || allParts.length !== 4) {\r\n    throw new TypeError(\"Invalid path '\" + pathString + \"'\");\r\n  }\r\n  allParts[1] = allParts[1] || '';\r\n  allParts[2] = allParts[2] || '';\r\n  allParts[3] = allParts[3] || '';\r\n\r\n  return {\r\n    root: allParts[0],\r\n    dir: allParts[0] + allParts[1].slice(0, -1),\r\n    base: allParts[2],\r\n    ext: allParts[3],\r\n    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)\r\n  };\r\n};\r\n\r\n\r\nposix.sep = '/';\r\nposix.delimiter = ':';\r\n\r\n\r\nif (isWindows)\r\n  module.exports = win32;\r\nelse /* posix */\r\n  module.exports = posix;\r\n\r\nmodule.exports.posix = posix;\r\nmodule.exports.win32 = win32;\r\n\n\n//# sourceURL=webpack:///../../node_modules/path/path.js?");

/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!*********************************************!*\
  !*** ../../node_modules/process/browser.js ***!
  \*********************************************/
/***/ ((module) => {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///../../node_modules/process/browser.js?");

/***/ }),

/***/ "./lib-ts/defaults.browser.ts":
/*!************************************!*\
  !*** ./lib-ts/defaults.browser.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst defaults_1 = __webpack_require__(/*! ./defaults */ \"./lib-ts/defaults.ts\");\n// @ts-ignore\n__webpack_require__.g.functions = defaults_1.functions;\n// @ts-ignore\n__webpack_require__.g.elements = defaults_1.elements;\n\n\n//# sourceURL=webpack:///./lib-ts/defaults.browser.ts?");

/***/ }),

/***/ "./lib-ts/defaults.ts":
/*!****************************!*\
  !*** ./lib-ts/defaults.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.elementModifiers = exports.elements = exports.functions = void 0;\nconst convertToArray_js_1 = __webpack_require__(/*! oberknecht-utils/lib-js/utils/arrayModifiers/convertToArray.js */ \"../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/convertToArray.js\");\nconst dissolveArray_js_1 = __webpack_require__(/*! oberknecht-utils/lib-js/utils/arrayModifiers/dissolveArray.js */ \"../../node_modules/oberknecht-utils/lib-js/utils/arrayModifiers/dissolveArray.js\");\nconst getFullNumber_js_1 = __webpack_require__(/*! oberknecht-utils/lib-js/utils/getFullNumber.js */ \"../../node_modules/oberknecht-utils/lib-js/utils/getFullNumber.js\");\nconst regex_js_1 = __webpack_require__(/*! oberknecht-utils/lib-js/variables/regex.js */ \"../../node_modules/oberknecht-utils/lib-js/variables/regex.js\");\nclass functions {\n    static url = new URL(document.baseURI);\n    static version;\n    static settings;\n    static appendElementOptions = (element, options) => {\n        if (!element || !options)\n            return;\n        Object.keys(options).forEach((optionName) => {\n            switch (optionName) {\n                case \"classes\": {\n                    (0, convertToArray_js_1.convertToArray)(options[optionName]).forEach((a) => element.classList.add(a));\n                    break;\n                }\n                case \"childNodes\": {\n                    (0, convertToArray_js_1.convertToArray)(options[optionName]).forEach((a) => {\n                        element.appendChild(a);\n                    });\n                    break;\n                }\n                case \"style\": {\n                    Object.keys(options[optionName]).forEach((a) => {\n                        // @ts-ignore\n                        element.style[a] = options[optionName][a];\n                    });\n                    break;\n                }\n                default: {\n                    // @ts-ignore\n                    if (options[optionName])\n                        element[optionName] = options[optionName];\n                }\n            }\n        });\n    };\n    static appendChildren = (elem, ...children) => {\n        [...(0, dissolveArray_js_1.dissolveArray)(...children)].forEach((a) => elem.appendChild(a));\n    };\n    static checkBrowser = () => {\n        return typeof window !== \"undefined\";\n    };\n    static getElement = (elemOrQuery) => {\n        if (!this.checkBrowser())\n            throw Error(\"Not in browser\");\n        if (typeof elemOrQuery !== \"string\")\n            return elemOrQuery;\n        return document.querySelector(elemOrQuery);\n    };\n    static parseIconURL = (u, size) => {\n        let u_ = new URL(u.startsWith(\"/\") ? this.url.origin + u : u);\n        if (this.version)\n            u_.searchParams.set(\"version\", this.version.npm);\n        if (!u_.searchParams.get(\"size\") && size !== null)\n            u_.searchParams.set(\"size\", size ?? \"48\");\n        return u_.toString();\n    };\n}\nexports.functions = functions;\nclass elements {\n    static createElement = (tagName, options) => {\n        let r = document.createElement(tagName);\n        functions.appendElementOptions(r, options);\n        // @ts-ignore\n        return r;\n    };\n    static parseLinks = (elemOrQuery, target, useMarkdownLinks) => {\n        let elem = functions.getElement(elemOrQuery);\n        let text = elem.innerText;\n        const markdownReg = /\\[[^\\]]+\\]\\([^\\)]+\\)/g;\n        const markdownMatchText = /(?<=\\[)[^\\]]+(?=\\])/;\n        const markdownMatchLink = /(?<=\\()[^\\)]+(?=\\))/;\n        let markdownMatches = text.match(markdownReg) ?? [];\n        let markdownSplits = text.split(markdownReg);\n        markdownSplits.forEach((markdownSplit, i) => {\n            let markdownMatch = markdownMatches[i];\n            if (!markdownMatch)\n                return;\n            let markdownText = markdownMatch.match(markdownMatchText)?.[0];\n            let markdownLink = markdownMatch.match(markdownMatchLink)?.[0];\n            text = text.replace(markdownMatch, markdownText);\n            let linkElem = elements.createElement(\"a\", {\n                innerText: markdownText,\n                href: markdownLink,\n                target: target ?? \"_blank\",\n            });\n            elem.innerHTML = elem.innerHTML.replace(markdownMatch, linkElem.outerHTML);\n        });\n        text = text.replace(regex_js_1.regex.extraSpaceRegex(), \"\");\n        let links = text.match(regex_js_1.regex.urlreg_()) ?? [];\n        links.forEach((link) => {\n            let linkElem = elements.createElement(\"a\", {\n                href: link,\n                innerText: link,\n                target: target ?? \"_blank\",\n            });\n            elem.innerHTML = elem.innerHTML.replace(link, linkElem.outerHTML);\n        });\n    };\n    static parseADHD = (elemOrQuery, boldLength, noIgnoreLinks, ignoreCheck) => {\n        let elem = functions.getElement(elemOrQuery);\n        let text = elem.innerText;\n        let textSplits = text.split(\" \");\n        elem.innerHTML = \"\";\n        textSplits.forEach((textSplit) => {\n            let boldLength_ = typeof boldLength === \"number\"\n                ? boldLength\n                : (0, getFullNumber_js_1.getFullNumber)(textSplit.length / 2);\n            if (!noIgnoreLinks && regex_js_1.regex.urlreg().test(textSplit))\n                boldLength_ = 0;\n            let boldElem = elements.createElement(\"h\", {\n                classes: [\"jADHD_bold\"],\n                innerText: textSplit.slice(0, boldLength_),\n                style: {\n                    fontWeight: \"bold\",\n                },\n            });\n            let normalElem = elements.createElement(\"h\", {\n                innerText: textSplit.slice(boldLength_) + \" \",\n            });\n            [boldElem, normalElem]\n                .filter((a) => a.innerText.length > 0)\n                .forEach((a) => elem.appendChild(a));\n        });\n    };\n    static parseJSONText = (s) => {\n        if (![\"string\", \"object\"].includes(typeof s))\n            throw Error(\"s is not typeof string/object\");\n        let o = s;\n        if (typeof s === \"string\")\n            o = JSON.parse(s);\n        return JSON.stringify(o, null, 2);\n    };\n    static popout = (title, innerElems, parentElem) => {\n        let parentElem_ = parentElem ?? document.querySelector(\"body\");\n        if (!parentElem_.querySelector(\"jpopout\"))\n            parentElem_.appendChild(elements.createElement(\"jpopout\", {\n                classes: [\"dp-none\"],\n            }));\n        if (!parentElem_.querySelector(\"jpopoutbg\"))\n            parentElem_.appendChild(elements.createElement(\"jpopoutbg\", {\n                classes: [\"dp-none\"],\n            }));\n        let popoutWindow = parentElem_.querySelector(\"jpopout\");\n        let popoutWindowBackground = parentElem_.querySelector(\"jpopoutbg\");\n        popoutWindow.classList.remove(\"dp-none\");\n        popoutWindowBackground.classList.remove(\"dp-none\");\n        (async () => {\n            elementModifiers.tempClass(popoutWindow, \"jpopout-enable\", 250);\n            await elementModifiers.tempClass(popoutWindowBackground, \"jpopoutbg-enable\", 250);\n            popoutWindow.classList.remove(\"jpopout-enable\");\n            popoutWindowBackground.classList.remove(\"jpopoutbg-enable\");\n        })();\n        popoutWindow.innerHTML = \"\";\n        function closePopout() {\n            (async () => {\n                elementModifiers.tempClass(popoutWindow, \"jpopout-disable\", 250);\n                await elementModifiers.tempClass(popoutWindowBackground, \"jpopoutbg-disable\", 250);\n                popoutWindow.classList.remove(\"jpopout-disable\");\n                popoutWindow.classList.add(\"dp-none\");\n                popoutWindowBackground.classList.remove(\"jpopoutbg-disable\");\n                popoutWindowBackground.classList.add(\"dp-none\");\n            })();\n        }\n        let innerElems_ = Array.isArray(innerElems) ? innerElems : [innerElems];\n        let popoutTop = elements.createElement(\"jpopout-top\");\n        (() => {\n            let popoutTitle = elements.createElement(\"jtitle\", {\n                innerText: title ?? \"\",\n            });\n            let popoutClose = elements.createElement(\"img\", {\n                classes: [\"jpopout-close\", \"cursor-pointer\"],\n                src: functions.parseIconURL(\"/img/x-red.png\"),\n            });\n            [\n                ...innerElems_,\n                ...(!popoutWindow.closePopout ? [popoutWindow] : []),\n            ].forEach((a) => {\n                Object.defineProperty(a, \"closePopout\", {\n                    get() {\n                        return closePopout;\n                    },\n                });\n            });\n            popoutClose.onclick = () => {\n                closePopout();\n            };\n            [popoutTitle, popoutClose].forEach((a) => popoutTop.appendChild(a));\n        })();\n        let popoutBottom = elements.createElement(\"jpopout-bottom\");\n        (() => {\n            innerElems_.forEach((a) => popoutBottom.appendChild(a));\n        })();\n        [popoutTop, popoutBottom].forEach((a) => popoutWindow.appendChild(a));\n        return popoutWindow;\n    };\n}\nexports.elements = elements;\nclass elementModifiers {\n    static tempClass = (elem, classNames, duration) => {\n        return new Promise((resolve) => {\n            let elem_ = functions.getElement(elem);\n            let classNames_ = (0, convertToArray_js_1.convertToArray)(classNames, false);\n            classNames_ = classNames_.filter((a) => !elem_.classList.contains(a));\n            if (classNames_.length === 0)\n                return;\n            elem_.classList.add(...classNames_);\n            setTimeout(() => {\n                elem_.classList.remove(...classNames_);\n                resolve();\n            }, duration ?? 5000);\n        });\n    };\n    static tempErrorHighlight = (elem, duration) => {\n        this.tempClass(elem, [\"error-highlight\"], duration);\n    };\n    static disable = (elem) => {\n        elem.setAttribute(\"disabled\", \"\");\n    };\n    static enable = (elem) => {\n        elem.removeAttribute(\"disabled\");\n    };\n}\nexports.elementModifiers = elementModifiers;\n\n\n//# sourceURL=webpack:///./lib-ts/defaults.ts?");

/***/ }),

/***/ "../../node_modules/util/support/isBufferBrowser.js":
/*!**********************************************************!*\
  !*** ../../node_modules/util/support/isBufferBrowser.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("module.exports = function isBuffer(arg) {\n  return arg && typeof arg === 'object'\n    && typeof arg.copy === 'function'\n    && typeof arg.fill === 'function'\n    && typeof arg.readUInt8 === 'function';\n}\n\n//# sourceURL=webpack:///../../node_modules/util/support/isBufferBrowser.js?");

/***/ }),

/***/ "../../node_modules/util/util.js":
/*!***************************************!*\
  !*** ../../node_modules/util/util.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/* provided dependency */ var process = __webpack_require__(/*! process/browser */ \"../../node_modules/process/browser.js\");\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nvar formatRegExp = /%[sdj%]/g;\nexports.format = function(f) {\n  if (!isString(f)) {\n    var objects = [];\n    for (var i = 0; i < arguments.length; i++) {\n      objects.push(inspect(arguments[i]));\n    }\n    return objects.join(' ');\n  }\n\n  var i = 1;\n  var args = arguments;\n  var len = args.length;\n  var str = String(f).replace(formatRegExp, function(x) {\n    if (x === '%%') return '%';\n    if (i >= len) return x;\n    switch (x) {\n      case '%s': return String(args[i++]);\n      case '%d': return Number(args[i++]);\n      case '%j':\n        try {\n          return JSON.stringify(args[i++]);\n        } catch (_) {\n          return '[Circular]';\n        }\n      default:\n        return x;\n    }\n  });\n  for (var x = args[i]; i < len; x = args[++i]) {\n    if (isNull(x) || !isObject(x)) {\n      str += ' ' + x;\n    } else {\n      str += ' ' + inspect(x);\n    }\n  }\n  return str;\n};\n\n\n// Mark that a method should not be used.\n// Returns a modified function which warns once by default.\n// If --no-deprecation is set, then it is a no-op.\nexports.deprecate = function(fn, msg) {\n  // Allow for deprecating things in the process of starting up.\n  if (isUndefined(__webpack_require__.g.process)) {\n    return function() {\n      return exports.deprecate(fn, msg).apply(this, arguments);\n    };\n  }\n\n  if (process.noDeprecation === true) {\n    return fn;\n  }\n\n  var warned = false;\n  function deprecated() {\n    if (!warned) {\n      if (process.throwDeprecation) {\n        throw new Error(msg);\n      } else if (process.traceDeprecation) {\n        console.trace(msg);\n      } else {\n        console.error(msg);\n      }\n      warned = true;\n    }\n    return fn.apply(this, arguments);\n  }\n\n  return deprecated;\n};\n\n\nvar debugs = {};\nvar debugEnviron;\nexports.debuglog = function(set) {\n  if (isUndefined(debugEnviron))\n    debugEnviron = process.env.NODE_DEBUG || '';\n  set = set.toUpperCase();\n  if (!debugs[set]) {\n    if (new RegExp('\\\\b' + set + '\\\\b', 'i').test(debugEnviron)) {\n      var pid = process.pid;\n      debugs[set] = function() {\n        var msg = exports.format.apply(exports, arguments);\n        console.error('%s %d: %s', set, pid, msg);\n      };\n    } else {\n      debugs[set] = function() {};\n    }\n  }\n  return debugs[set];\n};\n\n\n/**\n * Echos the value of a value. Trys to print the value out\n * in the best way possible given the different types.\n *\n * @param {Object} obj The object to print out.\n * @param {Object} opts Optional options object that alters the output.\n */\n/* legacy: obj, showHidden, depth, colors*/\nfunction inspect(obj, opts) {\n  // default options\n  var ctx = {\n    seen: [],\n    stylize: stylizeNoColor\n  };\n  // legacy...\n  if (arguments.length >= 3) ctx.depth = arguments[2];\n  if (arguments.length >= 4) ctx.colors = arguments[3];\n  if (isBoolean(opts)) {\n    // legacy...\n    ctx.showHidden = opts;\n  } else if (opts) {\n    // got an \"options\" object\n    exports._extend(ctx, opts);\n  }\n  // set default options\n  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;\n  if (isUndefined(ctx.depth)) ctx.depth = 2;\n  if (isUndefined(ctx.colors)) ctx.colors = false;\n  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;\n  if (ctx.colors) ctx.stylize = stylizeWithColor;\n  return formatValue(ctx, obj, ctx.depth);\n}\nexports.inspect = inspect;\n\n\n// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics\ninspect.colors = {\n  'bold' : [1, 22],\n  'italic' : [3, 23],\n  'underline' : [4, 24],\n  'inverse' : [7, 27],\n  'white' : [37, 39],\n  'grey' : [90, 39],\n  'black' : [30, 39],\n  'blue' : [34, 39],\n  'cyan' : [36, 39],\n  'green' : [32, 39],\n  'magenta' : [35, 39],\n  'red' : [31, 39],\n  'yellow' : [33, 39]\n};\n\n// Don't use 'blue' not visible on cmd.exe\ninspect.styles = {\n  'special': 'cyan',\n  'number': 'yellow',\n  'boolean': 'yellow',\n  'undefined': 'grey',\n  'null': 'bold',\n  'string': 'green',\n  'date': 'magenta',\n  // \"name\": intentionally not styling\n  'regexp': 'red'\n};\n\n\nfunction stylizeWithColor(str, styleType) {\n  var style = inspect.styles[styleType];\n\n  if (style) {\n    return '\\u001b[' + inspect.colors[style][0] + 'm' + str +\n           '\\u001b[' + inspect.colors[style][1] + 'm';\n  } else {\n    return str;\n  }\n}\n\n\nfunction stylizeNoColor(str, styleType) {\n  return str;\n}\n\n\nfunction arrayToHash(array) {\n  var hash = {};\n\n  array.forEach(function(val, idx) {\n    hash[val] = true;\n  });\n\n  return hash;\n}\n\n\nfunction formatValue(ctx, value, recurseTimes) {\n  // Provide a hook for user-specified inspect functions.\n  // Check that value is an object with an inspect function on it\n  if (ctx.customInspect &&\n      value &&\n      isFunction(value.inspect) &&\n      // Filter out the util module, it's inspect function is special\n      value.inspect !== exports.inspect &&\n      // Also filter out any prototype objects using the circular check.\n      !(value.constructor && value.constructor.prototype === value)) {\n    var ret = value.inspect(recurseTimes, ctx);\n    if (!isString(ret)) {\n      ret = formatValue(ctx, ret, recurseTimes);\n    }\n    return ret;\n  }\n\n  // Primitive types cannot have properties\n  var primitive = formatPrimitive(ctx, value);\n  if (primitive) {\n    return primitive;\n  }\n\n  // Look up the keys of the object.\n  var keys = Object.keys(value);\n  var visibleKeys = arrayToHash(keys);\n\n  if (ctx.showHidden) {\n    keys = Object.getOwnPropertyNames(value);\n  }\n\n  // IE doesn't make error fields non-enumerable\n  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx\n  if (isError(value)\n      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {\n    return formatError(value);\n  }\n\n  // Some type of object without properties can be shortcutted.\n  if (keys.length === 0) {\n    if (isFunction(value)) {\n      var name = value.name ? ': ' + value.name : '';\n      return ctx.stylize('[Function' + name + ']', 'special');\n    }\n    if (isRegExp(value)) {\n      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');\n    }\n    if (isDate(value)) {\n      return ctx.stylize(Date.prototype.toString.call(value), 'date');\n    }\n    if (isError(value)) {\n      return formatError(value);\n    }\n  }\n\n  var base = '', array = false, braces = ['{', '}'];\n\n  // Make Array say that they are Array\n  if (isArray(value)) {\n    array = true;\n    braces = ['[', ']'];\n  }\n\n  // Make functions say that they are functions\n  if (isFunction(value)) {\n    var n = value.name ? ': ' + value.name : '';\n    base = ' [Function' + n + ']';\n  }\n\n  // Make RegExps say that they are RegExps\n  if (isRegExp(value)) {\n    base = ' ' + RegExp.prototype.toString.call(value);\n  }\n\n  // Make dates with properties first say the date\n  if (isDate(value)) {\n    base = ' ' + Date.prototype.toUTCString.call(value);\n  }\n\n  // Make error with message first say the error\n  if (isError(value)) {\n    base = ' ' + formatError(value);\n  }\n\n  if (keys.length === 0 && (!array || value.length == 0)) {\n    return braces[0] + base + braces[1];\n  }\n\n  if (recurseTimes < 0) {\n    if (isRegExp(value)) {\n      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');\n    } else {\n      return ctx.stylize('[Object]', 'special');\n    }\n  }\n\n  ctx.seen.push(value);\n\n  var output;\n  if (array) {\n    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);\n  } else {\n    output = keys.map(function(key) {\n      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);\n    });\n  }\n\n  ctx.seen.pop();\n\n  return reduceToSingleString(output, base, braces);\n}\n\n\nfunction formatPrimitive(ctx, value) {\n  if (isUndefined(value))\n    return ctx.stylize('undefined', 'undefined');\n  if (isString(value)) {\n    var simple = '\\'' + JSON.stringify(value).replace(/^\"|\"$/g, '')\n                                             .replace(/'/g, \"\\\\'\")\n                                             .replace(/\\\\\"/g, '\"') + '\\'';\n    return ctx.stylize(simple, 'string');\n  }\n  if (isNumber(value))\n    return ctx.stylize('' + value, 'number');\n  if (isBoolean(value))\n    return ctx.stylize('' + value, 'boolean');\n  // For some reason typeof null is \"object\", so special case here.\n  if (isNull(value))\n    return ctx.stylize('null', 'null');\n}\n\n\nfunction formatError(value) {\n  return '[' + Error.prototype.toString.call(value) + ']';\n}\n\n\nfunction formatArray(ctx, value, recurseTimes, visibleKeys, keys) {\n  var output = [];\n  for (var i = 0, l = value.length; i < l; ++i) {\n    if (hasOwnProperty(value, String(i))) {\n      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,\n          String(i), true));\n    } else {\n      output.push('');\n    }\n  }\n  keys.forEach(function(key) {\n    if (!key.match(/^\\d+$/)) {\n      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,\n          key, true));\n    }\n  });\n  return output;\n}\n\n\nfunction formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {\n  var name, str, desc;\n  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };\n  if (desc.get) {\n    if (desc.set) {\n      str = ctx.stylize('[Getter/Setter]', 'special');\n    } else {\n      str = ctx.stylize('[Getter]', 'special');\n    }\n  } else {\n    if (desc.set) {\n      str = ctx.stylize('[Setter]', 'special');\n    }\n  }\n  if (!hasOwnProperty(visibleKeys, key)) {\n    name = '[' + key + ']';\n  }\n  if (!str) {\n    if (ctx.seen.indexOf(desc.value) < 0) {\n      if (isNull(recurseTimes)) {\n        str = formatValue(ctx, desc.value, null);\n      } else {\n        str = formatValue(ctx, desc.value, recurseTimes - 1);\n      }\n      if (str.indexOf('\\n') > -1) {\n        if (array) {\n          str = str.split('\\n').map(function(line) {\n            return '  ' + line;\n          }).join('\\n').substr(2);\n        } else {\n          str = '\\n' + str.split('\\n').map(function(line) {\n            return '   ' + line;\n          }).join('\\n');\n        }\n      }\n    } else {\n      str = ctx.stylize('[Circular]', 'special');\n    }\n  }\n  if (isUndefined(name)) {\n    if (array && key.match(/^\\d+$/)) {\n      return str;\n    }\n    name = JSON.stringify('' + key);\n    if (name.match(/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)) {\n      name = name.substr(1, name.length - 2);\n      name = ctx.stylize(name, 'name');\n    } else {\n      name = name.replace(/'/g, \"\\\\'\")\n                 .replace(/\\\\\"/g, '\"')\n                 .replace(/(^\"|\"$)/g, \"'\");\n      name = ctx.stylize(name, 'string');\n    }\n  }\n\n  return name + ': ' + str;\n}\n\n\nfunction reduceToSingleString(output, base, braces) {\n  var numLinesEst = 0;\n  var length = output.reduce(function(prev, cur) {\n    numLinesEst++;\n    if (cur.indexOf('\\n') >= 0) numLinesEst++;\n    return prev + cur.replace(/\\u001b\\[\\d\\d?m/g, '').length + 1;\n  }, 0);\n\n  if (length > 60) {\n    return braces[0] +\n           (base === '' ? '' : base + '\\n ') +\n           ' ' +\n           output.join(',\\n  ') +\n           ' ' +\n           braces[1];\n  }\n\n  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];\n}\n\n\n// NOTE: These type checking functions intentionally don't use `instanceof`\n// because it is fragile and can be easily faked with `Object.create()`.\nfunction isArray(ar) {\n  return Array.isArray(ar);\n}\nexports.isArray = isArray;\n\nfunction isBoolean(arg) {\n  return typeof arg === 'boolean';\n}\nexports.isBoolean = isBoolean;\n\nfunction isNull(arg) {\n  return arg === null;\n}\nexports.isNull = isNull;\n\nfunction isNullOrUndefined(arg) {\n  return arg == null;\n}\nexports.isNullOrUndefined = isNullOrUndefined;\n\nfunction isNumber(arg) {\n  return typeof arg === 'number';\n}\nexports.isNumber = isNumber;\n\nfunction isString(arg) {\n  return typeof arg === 'string';\n}\nexports.isString = isString;\n\nfunction isSymbol(arg) {\n  return typeof arg === 'symbol';\n}\nexports.isSymbol = isSymbol;\n\nfunction isUndefined(arg) {\n  return arg === void 0;\n}\nexports.isUndefined = isUndefined;\n\nfunction isRegExp(re) {\n  return isObject(re) && objectToString(re) === '[object RegExp]';\n}\nexports.isRegExp = isRegExp;\n\nfunction isObject(arg) {\n  return typeof arg === 'object' && arg !== null;\n}\nexports.isObject = isObject;\n\nfunction isDate(d) {\n  return isObject(d) && objectToString(d) === '[object Date]';\n}\nexports.isDate = isDate;\n\nfunction isError(e) {\n  return isObject(e) &&\n      (objectToString(e) === '[object Error]' || e instanceof Error);\n}\nexports.isError = isError;\n\nfunction isFunction(arg) {\n  return typeof arg === 'function';\n}\nexports.isFunction = isFunction;\n\nfunction isPrimitive(arg) {\n  return arg === null ||\n         typeof arg === 'boolean' ||\n         typeof arg === 'number' ||\n         typeof arg === 'string' ||\n         typeof arg === 'symbol' ||  // ES6 symbol\n         typeof arg === 'undefined';\n}\nexports.isPrimitive = isPrimitive;\n\nexports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ \"../../node_modules/util/support/isBufferBrowser.js\");\n\nfunction objectToString(o) {\n  return Object.prototype.toString.call(o);\n}\n\n\nfunction pad(n) {\n  return n < 10 ? '0' + n.toString(10) : n.toString(10);\n}\n\n\nvar months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',\n              'Oct', 'Nov', 'Dec'];\n\n// 26 Feb 16:19:34\nfunction timestamp() {\n  var d = new Date();\n  var time = [pad(d.getHours()),\n              pad(d.getMinutes()),\n              pad(d.getSeconds())].join(':');\n  return [d.getDate(), months[d.getMonth()], time].join(' ');\n}\n\n\n// log is just a thin wrapper to console.log that prepends a timestamp\nexports.log = function() {\n  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));\n};\n\n\n/**\n * Inherit the prototype methods from one constructor into another.\n *\n * The Function.prototype.inherits from lang.js rewritten as a standalone\n * function (not on Function.prototype). NOTE: If this file is to be loaded\n * during bootstrapping this function needs to be rewritten using some native\n * functions as prototype setup using normal JavaScript does not work as\n * expected during bootstrapping (see mirror.js in r114903).\n *\n * @param {function} ctor Constructor function which needs to inherit the\n *     prototype.\n * @param {function} superCtor Constructor function to inherit prototype from.\n */\nexports.inherits = __webpack_require__(/*! inherits */ \"../../node_modules/inherits/inherits_browser.js\");\n\nexports._extend = function(origin, add) {\n  // Don't do anything if add isn't an object\n  if (!add || !isObject(add)) return origin;\n\n  var keys = Object.keys(add);\n  var i = keys.length;\n  while (i--) {\n    origin[keys[i]] = add[keys[i]];\n  }\n  return origin;\n};\n\nfunction hasOwnProperty(obj, prop) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n}\n\n\n//# sourceURL=webpack:///../../node_modules/util/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./lib-ts/defaults.browser.ts");
/******/ 	
/******/ })()
;