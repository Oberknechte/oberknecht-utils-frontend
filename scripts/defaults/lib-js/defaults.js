"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elements = exports.functions = void 0;
const convertToArray_js_1 = require("oberknecht-utils/lib-js/utils/arrayModifiers/convertToArray.js");
const dissolveArray_js_1 = require("oberknecht-utils/lib-js/utils/arrayModifiers/dissolveArray.js");
const getFullNumber_js_1 = require("oberknecht-utils/lib-js/utils/getFullNumber.js");
const regex_js_1 = require("oberknecht-utils/lib-js/variables/regex.js");
class functions {
    static appendElementOptions = (element, options) => {
        if (!element || !options)
            return;
        Object.keys(options).forEach((optionName) => {
            switch (optionName) {
                case "classes": {
                    (0, convertToArray_js_1.convertToArray)(options[optionName]).forEach((a) => element.classList.add(a));
                    break;
                }
                case "childNodes": {
                    (0, convertToArray_js_1.convertToArray)(options[optionName]).forEach((a) => {
                        element.appendChild(a);
                    });
                    break;
                }
                case "style": {
                    Object.keys(options[optionName]).forEach((a) => {
                        // @ts-ignore
                        element.style[a] = options[optionName][a];
                    });
                    break;
                }
                default: {
                    // @ts-ignore
                    if (options[optionName])
                        element[optionName] = options[optionName];
                }
            }
        });
    };
    static appendChildren = (elem, ...children) => {
        [...(0, dissolveArray_js_1.dissolveArray)(...children)].forEach((a) => elem.appendChild(a));
    };
    static checkBrowser = () => {
        return typeof window !== "undefined";
    };
    static selectElem = (elemOrQuery) => {
        if (!this.checkBrowser())
            throw Error("Not in browser");
        if (elemOrQuery instanceof HTMLElement)
            return elemOrQuery;
        return document.querySelector(elemOrQuery);
    };
}
exports.functions = functions;
class elements {
    static createElement = (tagName, options) => {
        let r = document.createElement(tagName);
        functions.appendElementOptions(r, options);
        // @ts-ignore
        return r;
    };
    static parseLinks = (elemOrQuery, target, useMarkdownLinks) => {
        let elem = functions.selectElem(elemOrQuery);
        let text = elem.innerText;
        const markdownReg = /\[[^\]]+\]\([^\)]+\)/g;
        const markdownMatchText = /(?<=\[)[^\]]+(?=\])/;
        const markdownMatchLink = /(?<=\()[^\)]+(?=\))/;
        let markdownMatches = text.match(markdownReg) ?? [];
        let markdownSplits = text.split(markdownReg);
        markdownSplits.forEach((markdownSplit, i) => {
            let markdownMatch = markdownMatches[i];
            if (!markdownMatch)
                return;
            let markdownText = markdownMatch.match(markdownMatchText)?.[0];
            let markdownLink = markdownMatch.match(markdownMatchLink)?.[0];
            text = text.replace(markdownMatch, markdownText);
            let linkElem = elements.createElement("a", {
                innerText: markdownText,
                href: markdownLink,
                target: target ?? "_blank",
            });
            elem.innerHTML = elem.innerHTML.replace(markdownMatch, linkElem.outerHTML);
        });
        text = text.replace(regex_js_1.regex.extraSpaceRegex(), "");
        let links = text.match(regex_js_1.regex.urlreg_()) ?? [];
        links.forEach((link) => {
            let linkElem = elements.createElement("a", {
                href: link,
                innerText: link,
                target: target ?? "_blank",
            });
            elem.innerHTML = elem.innerHTML.replace(link, linkElem.outerHTML);
        });
    };
    static parseADHD = (elemOrQuery, boldLength, noIgnoreLinks, ignoreCheck) => {
        let elem = functions.selectElem(elemOrQuery);
        let text = elem.innerText;
        let textSplits = text.split(" ");
        elem.innerHTML = "";
        textSplits.forEach((textSplit) => {
            let boldLength_ = typeof boldLength === "number"
                ? boldLength
                : (0, getFullNumber_js_1.getFullNumber)(textSplit.length / 2);
            if (!noIgnoreLinks && regex_js_1.regex.urlreg().test(textSplit))
                boldLength_ = 0;
            let boldElem = elements.createElement("h", {
                classes: ["jADHD_bold"],
                innerText: textSplit.slice(0, boldLength_),
                style: {
                    fontWeight: "bold",
                },
            });
            let normalElem = elements.createElement("h", {
                innerText: textSplit.slice(boldLength_) + " ",
            });
            [boldElem, normalElem]
                .filter((a) => a.innerText.length > 0)
                .forEach((a) => elem.appendChild(a));
        });
    };
    static parseJSONText = (s) => {
        if (!["string", "object"].includes(typeof s))
            throw Error("s is not typeof string/object");
        let o = s;
        if (typeof s === "string")
            o = JSON.parse(s);
        return JSON.stringify(o, null, 2);
    };
}
exports.elements = elements;
