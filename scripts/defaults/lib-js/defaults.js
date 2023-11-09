"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementModifiers = exports.elements = exports.functions = void 0;
const convertToArray_js_1 = require("oberknecht-utils/lib-js/utils/arrayModifiers/convertToArray.js");
const dissolveArray_js_1 = require("oberknecht-utils/lib-js/utils/arrayModifiers/dissolveArray.js");
const getFullNumber_js_1 = require("oberknecht-utils/lib-js/utils/getFullNumber.js");
const regex_js_1 = require("oberknecht-utils/lib-js/variables/regex.js");
class functions {
    static url = new URL(document.baseURI);
    static version;
    static settings;
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
    static getElement = (elemOrQuery) => {
        if (!this.checkBrowser())
            throw Error("Not in browser");
        if (typeof elemOrQuery !== "string")
            return elemOrQuery;
        return document.querySelector(elemOrQuery);
    };
    static parseIconURL = (u, size) => {
        let u_ = new URL(u.startsWith("/") ? this.url.origin + u : u);
        if (this.version)
            u_.searchParams.set("version", this.version.npm);
        if (!u_.searchParams.get("size") && size !== null)
            u_.searchParams.set("size", size ?? "48");
        return u_.toString();
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
        let elem = functions.getElement(elemOrQuery);
        let text = elem.innerText;
        const markdownReg = /\[[^\]]+\]\([^\)]+\)/g;
        const markdownMatchText = /(?<=\[)[^\]]+(?=\])/;
        const markdownMatchLink = /(?<=\()[^\)]+(?=\))/;
        let markdownMatches = text.match(markdownReg) ?? [];
        let markdownSplits = text.split(markdownReg);
        if (useMarkdownLinks)
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
        let elem = functions.getElement(elemOrQuery);
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
    static popout = (popoutOptions) => {
        if (!popoutOptions)
            popoutOptions = {};
        let parentElem_ = popoutOptions.parentElem ?? document.querySelector("body");
        if (!parentElem_.querySelector("jpopout"))
            parentElem_.appendChild(elements.createElement("jpopout", {
                classes: ["dp-none"],
            }));
        if (!parentElem_.querySelector("jpopoutbg"))
            parentElem_.appendChild(elements.createElement("jpopoutbg", {
                classes: ["dp-none"],
            }));
        if (popoutOptions.parentOptions)
            functions.appendElementOptions(parentElem_, popoutOptions.parentOptions);
        parentElem_.classList.add("jpopout-parent");
        let popoutWindow = parentElem_.querySelector("jpopout");
        let popoutWindowBackground = parentElem_.querySelector("jpopoutbg");
        popoutWindow.classList.remove("dp-none");
        popoutWindowBackground.classList.remove("dp-none");
        (async () => {
            elementModifiers.tempClass(popoutWindow, "jpopout-enable", 250);
            await elementModifiers.tempClass(popoutWindowBackground, "jpopoutbg-enable", 250);
            popoutWindow.classList.remove("jpopout-enable");
            popoutWindowBackground.classList.remove("jpopoutbg-enable");
        })();
        popoutWindow.innerHTML = "";
        function closePopout() {
            (async () => {
                elementModifiers.tempClass(popoutWindow, "jpopout-disable", 250);
                await elementModifiers.tempClass(popoutWindowBackground, "jpopoutbg-disable", 250);
                popoutWindow.classList.remove("jpopout-disable");
                popoutWindow.classList.add("dp-none");
                popoutWindowBackground.classList.remove("jpopoutbg-disable");
                popoutWindowBackground.classList.add("dp-none");
                parentElem_.classList.remove("jpopout-parent");
            })();
        }
        let innerElems_ = (0, convertToArray_js_1.convertToArray)(popoutOptions.innerElems, false, true);
        let popoutTop = elements.createElement("jpopout-top");
        (() => {
            let popoutTitle = elements.createElement("jtitle", {
                innerText: popoutOptions.title ?? "",
            });
            let popoutClose = elements.createElement("img", {
                classes: ["jpopout-close", "cursor-pointer"],
                src: popoutOptions.exitIconURL ?? functions?.settings?.popout?.closeIconURL
                    ? functions.parseIconURL(popoutOptions.exitIconURL ??
                        functions?.settings?.popout?.closeIconURL)
                    : "https://raw.githubusercontent.com/Oberknechte/oberknecht-utils-frontend/main/img/x-red-48x48.png",
                width: functions?.settings?.iconSize ?? 48,
                height: functions?.settings?.iconSize ?? 48,
            });
            [
                ...innerElems_,
                ...(!popoutWindow.closePopout ? [popoutWindow] : []),
            ].forEach((a) => {
                Object.defineProperty(a, "closePopout", {
                    get() {
                        return closePopout;
                    },
                });
            });
            popoutClose.onclick = () => {
                closePopout();
            };
            [popoutTitle, popoutClose].forEach((a) => popoutTop.appendChild(a));
        })();
        let popoutBottom = elements.createElement("jpopout-bottom");
        (() => {
            innerElems_.forEach((a) => popoutBottom.appendChild(a));
        })();
        [popoutTop, popoutBottom].forEach((a) => popoutWindow.appendChild(a));
        return popoutWindow;
    };
}
exports.elements = elements;
class elementModifiers {
    static tempClass = (elem, classNames, duration) => {
        return new Promise((resolve) => {
            let elem_ = functions.getElement(elem);
            let classNames_ = (0, convertToArray_js_1.convertToArray)(classNames, false);
            classNames_ = classNames_.filter((a) => !elem_.classList.contains(a));
            if (classNames_.length === 0)
                return;
            elem_.classList.add(...classNames_);
            setTimeout(() => {
                elem_.classList.remove(...classNames_);
                resolve();
            }, duration ?? 5000);
        });
    };
    static tempErrorHighlight = (elem, duration) => {
        this.tempClass(elem, ["error-highlight"], duration);
    };
    static disable = (elem) => {
        elem.setAttribute("disabled", "");
    };
    static enable = (elem) => {
        elem.removeAttribute("disabled");
    };
}
exports.elementModifiers = elementModifiers;
