"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementModifiers = exports.elements = exports.functions = void 0;
const regex_js_1 = require("oberknecht-utils/lib-js/variables/regex.js");
const utils_1 = require("oberknecht-utils/lib-js/utils");
const types_1 = require("./types");
const jchoose_1 = require("../../jchoose/lib-ts/jchoose");
const timeUnits = [
    ["s", "second", 1000],
    ["m", "minute", 60 * 1000],
    ["h", "hour", 60 * 60 * 1000],
    ["d", "day", 24 * 60 * 60 * 1000],
];
class functions {
    static url = new URL(document.baseURI);
    static version;
    static options;
    static appendElementOptions = (element, options) => {
        if (!element || !options)
            return;
        Object.keys(options).forEach((optionName) => {
            switch (optionName) {
                case "classes": {
                    (0, utils_1.convertToArray)(options[optionName]).forEach((a) => element.classList.add(a));
                    break;
                }
                case "childNodes": {
                    (0, utils_1.convertToArray)(options[optionName]).forEach((a) => {
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
                case "parentElem":
                case "pe": {
                    functions.getElement(options[optionName]).appendChild(element);
                    break;
                }
                case "attributes": {
                    Object.keys(options[optionName]).forEach((attributeName) => {
                        element.setAttribute(attributeName, options[optionName][attributeName]);
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
        [...(0, utils_1.dissolveArray)(...children)].forEach((a) => elem.appendChild(a));
    };
    static checkBrowser = () => {
        return typeof window !== "undefined";
    };
    static getParent = (elem, number) => {
        if ((0, utils_1.isNullUndefined)(number) || number <= 1)
            return elem;
        return this.getParent(elem.parentElement, (number ?? 1) - 1);
    };
    static getElement = (elemOrQuery) => {
        if (!this.checkBrowser())
            throw Error("Not in browser");
        if (typeof elemOrQuery !== "string")
            return elemOrQuery;
        return document.querySelector(elemOrQuery);
    };
    static getElements = (elemsOrQuerys) => {
        if (!this.checkBrowser())
            throw Error("Not in browser");
        return (0, utils_1.convertToArray)(elemsOrQuerys, false, true).map((a) => this.getElement(a));
    };
    static parseIconURL = (u, size) => {
        let u_ = new URL(u.startsWith("/") ? this.url.origin + u : u);
        if (this.version)
            u_.searchParams.set("version", this.version.npm);
        if (!u_.searchParams.get("size") && size !== null)
            u_.searchParams.set("size", size ?? "48");
        return u_.toString();
    };
    static copy = async (elemOrData, copyOptions_) => {
        let copyOptions = (0, utils_1.concatJSON)([
            functions.options?.copyOptions ?? {},
            copyOptions_ ?? {},
        ]);
        let withoutAnimation = copyOptions.withoutAnimation;
        let copyData;
        if (elemOrData instanceof HTMLElement) {
            copyData = copyOptions.customDataAttributeKey
                ? elemOrData.getAttribute(copyOptions.customDataAttributeKey)
                : // @ts-ignore
                    elemOrData.value ?? elemOrData.innerText ?? "";
        }
        else {
            switch ((0, utils_1.extendedTypeof)(elemOrData)) {
                case "json":
                case "object": {
                    copyData = JSON.stringify(elemOrData);
                    break;
                }
                default: {
                    copyData = elemOrData?.toString();
                    break;
                }
            }
        }
        navigator.clipboard.writeText(copyData);
        if (!withoutAnimation && elemOrData instanceof HTMLElement) {
            let animationParent = functions.getParent(elemOrData, copyOptions.animationParentsNum ?? 0) ??
                elemOrData;
            let animationDuration = copyOptions.animationDuration ?? types_1.defaultCopyAnimationDuration;
            await elementModifiers.tempClass(animationParent, ["jcopied-enable"], 300);
            await elementModifiers.tempClass(animationParent, ["jcopied"], animationDuration);
            await elementModifiers.tempClass(animationParent, ["jcopied-disable"], 500);
        }
    };
    static isHTMLElement = (elem) => {
        return elem instanceof HTMLElement;
    };
    static getUnitName = (value) => {
        let selectedUnit;
        (0, utils_1.recreate)(timeUnits)
            .reverse()
            .forEach((a) => {
            let n2 = value / a[2];
            if (n2 > 0 && n2.toString().length < 4)
                selectedUnit = a;
        });
        selectedUnit = selectedUnit ?? timeUnits[0];
        return {
            unit: selectedUnit,
            unitName: selectedUnit[0],
            value: value / selectedUnit[2],
        };
    };
    static getUnitNum = (unitName) => {
        return timeUnits
            .map((a, i) => [a, i])
            .filter((a) => a[0][0] == this.getUnit(unitName)[0])[0]?.[1];
    };
    static getUnitByNum = (num) => {
        return timeUnits[num];
    };
    static getUnit = (unit) => {
        switch (typeof unit) {
            case "number": {
                return this.getUnitByNum(unit);
            }
            case "string": {
                return this.getUnitByNum(this.getUnitNum(unit));
            }
        }
        return unit;
    };
    static toNumber = (inp) => {
        if (typeof inp === "string")
            return parseInt(inp);
        return inp;
    };
    static convertUnitToTime = (unit_, value) => {
        let unit = this.getUnit(unit_);
        return this.toNumber(value) * unit[2];
    };
    static undefinedOnEmptyString = (s) => {
        if (s.length === 0)
            return undefined;
        return s;
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
                : (0, utils_1.getFullNumber)(textSplit.length / 2);
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
    static convertToArray = (a) => {
        if (Array.isArray(a))
            return a;
        return [a];
    };
    static #popoutCount = 0;
    static get getPopoutCount() {
        return this.#popoutCount;
    }
    static popout = (popoutOptions_) => {
        this.#popoutCount++;
        let popoutOptions = (0, utils_1.concatJSON)([
            functions.options?.popoutOptions ?? {},
            popoutOptions_ ?? {},
        ]);
        let popoutWindow;
        let popoutWindowBackground;
        let parentElem_ = popoutOptions.parentElem ?? document.querySelector("body");
        if (!parentElem_.querySelector("jpopout") ||
            !popoutOptions.reuseOpenedPopout) {
            popoutWindow = elements.createElement("jpopout", {
                classes: ["dp-none"],
            });
            parentElem_.appendChild(popoutWindow);
        }
        if (popoutOptions.parentElemOptions)
            functions.appendElementOptions(parentElem_, popoutOptions.parentElemOptions);
        if (!parentElem_.querySelector("jpopoutbg") ||
            !popoutOptions.reuseOpenedPopout) {
            popoutWindowBackground = elements.createElement("jpopoutbg", {
                classes: ["dp-none"],
            });
            parentElem_.appendChild(popoutWindowBackground);
        }
        if (popoutOptions.parentOptions)
            functions.appendElementOptions(parentElem_, popoutOptions.parentOptions);
        if (popoutOptions.popoutElemOptions)
            functions.appendElementOptions(popoutWindow, popoutOptions.popoutElemOptions);
        if (popoutOptions.popoutBGElemOptions)
            functions.appendElementOptions(popoutWindowBackground, popoutOptions.popoutBGElemOptions);
        if (!(popoutOptions.noAppendParentClass ??
            functions?.options?.popoutOptions?.noAppendParentClass))
            parentElem_.classList.add("jpopout-parent");
        popoutWindow = popoutWindow ?? parentElem_.querySelector("jpopout");
        popoutWindowBackground =
            popoutWindowBackground ?? parentElem_.querySelector("jpopoutbg");
        if (popoutOptions.zIndex) {
            popoutWindow.style.zIndex = popoutOptions.zIndex.toString();
            popoutWindowBackground.style.zIndex = (popoutOptions.zIndex - 1).toString();
        }
        popoutWindow.classList.remove("dp-none");
        popoutWindowBackground.classList.remove("dp-none");
        (async () => {
            await elementModifiers.tempClass(popoutWindow, "jpopout-enable", 250);
            await elementModifiers.tempClass(popoutWindowBackground, "jpopoutbg-enable", 250);
            popoutWindow.classList.remove("jpopout-enable");
            popoutWindowBackground.classList.remove("jpopoutbg-enable");
        })();
        popoutWindow.innerHTML = "";
        let this_ = this;
        function closePopout() {
            popoutOptions.onClose?.();
            (async () => {
                elementModifiers.tempClass(popoutWindow, "jpopout-disable", 250);
                await elementModifiers.tempClass(popoutWindowBackground, "jpopoutbg-disable", 250);
                popoutWindow.classList.remove("jpopout-disable");
                popoutWindow.classList.add("dp-none");
                popoutWindowBackground.classList.remove("jpopoutbg-disable");
                popoutWindowBackground.classList.add("dp-none");
                if (this_.getPopoutCount === 1)
                    parentElem_.classList.remove("jpopout-parent");
                this_.#popoutCount--;
                popoutOptions.onClosed?.();
                if (!popoutOptions.noRemoveAfterClose) {
                    popoutWindow.remove();
                    popoutWindowBackground.remove();
                }
            })();
        }
        let innerElems_ = (0, utils_1.convertToArray)(popoutOptions.innerElems, false, true);
        let popoutTop = elements.createElement("jpopout-top");
        (() => {
            let popoutTitle = elements.createElement("jtitle", {
                innerText: popoutOptions.title ?? "",
            });
            let popoutClose = elements.createElement("img", {
                classes: ["jpopout-close", "cursor-pointer"],
                src: popoutOptions.exitIconURL ?? types_1.defaultExitIconURL,
                width: functions?.options?.iconSize ?? 48,
                height: functions?.options?.iconSize ?? 48,
            });
            [
                ...innerElems_,
                ...(!popoutWindow.closePopout ? [popoutWindow] : []),
            ].forEach((a) => {
                if (!a.closePopout)
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
    static #notificationOpened = false;
    static #notificationClosing = false;
    static #isErrorNotification = false;
    static #notificationChangingTimeout;
    static notification = (dat, notificationOptions_) => {
        let notificationOptions = (0, utils_1.concatJSON)([
            functions.options?.notificationOptions ?? {},
            notificationOptions_ ?? {},
        ]);
        let isErr = notificationOptions.isError ||
            (dat?.data?.error ?? dat?.error ?? dat) instanceof Error;
        let animationDuration = isErr
            ? notificationOptions.animationDurationError ??
                types_1.defaultNotificationErrorAnimationDuration
            : notificationOptions.animationDuration ??
                types_1.defaultNotificationAnimationDuration;
        let notificationsParentElem = functions.getElement(notificationOptions.parentElem ?? "body");
        let notificationsContainerElem = notificationsParentElem.querySelector("jnotifications");
        if (!notificationsContainerElem) {
            notificationsContainerElem = elements.createElement("jnotifications");
            notificationsParentElem.appendChild(notificationsContainerElem);
        }
        let notificationElem = notificationsContainerElem.querySelector("jnotification");
        if (!notificationElem || !notificationOptions.reuseOpenedNotification) {
            notificationElem = elements.createElement("jnotification");
            notificationsContainerElem.appendChild(notificationElem);
        }
        notificationElem.setAttribute("reuseopenednotification", notificationOptions.reuseOpenedNotification ? "1" : "0");
        function getNotificationsCount() {
            return [...notificationsContainerElem.querySelectorAll("jnotification")]
                .length;
        }
        notificationsParentElem.classList.add("jnotification-parent");
        notificationElem.innerHTML = "";
        (() => {
            let notificationTextElem = elements.createElement("jh", {
                classes: ["jnotification-text"],
                innerText: isErr ? "Error: " + (0, utils_1.returnErr)(dat) : dat,
            });
            let notificationButtonContainer = elements.createElement("div", {
                classes: ["jnotification-buttoncontainer"],
            });
            let notificationCloseButton = elements.createElement("button", {
                classes: ["jnotification-button-close"],
                onclick: () => {
                    notificationOptions.onclose?.(true);
                },
            });
            [
                notificationCloseButton,
                ...(0, utils_1.convertToArray)(notificationOptions.notificationButtons, false),
            ].forEach((a) => {
                a.classList.add("jnotification-button");
                notificationButtonContainer.appendChild(a);
            });
            (() => {
                let notificationCloseButtonImg = elements.createElement("img", {
                    src: notificationOptions.exitIconURL ?? types_1.defaultExitIconURL,
                    style: {
                        userSelect: "none",
                    },
                });
                notificationCloseButton.appendChild(notificationCloseButtonImg);
                notificationCloseButton.onclick = () => {
                    closeNotification(true);
                };
            })();
            [notificationTextElem, notificationButtonContainer].forEach((a) => notificationElem.appendChild(a));
        })();
        if (notificationOptions.zIndex)
            notificationElem.style.zIndex = notificationOptions.zIndex.toString();
        notificationElem.classList.remove("dp-none");
        (async () => {
            notificationElem.classList.add(isErr ? "jnotification-red" : "jnotification-green");
            if (notificationOptions.elementOptions)
                functions.appendElementOptions(notificationElem, notificationOptions.elementOptions);
            await elementModifiers.tempClass(notificationElem, ["jnotification-enable"], 
            // 1500
            500);
            await elementModifiers.tempClass(notificationElem, ["jnotification"], animationDuration, true);
            await closeNotification(false);
        })();
        async function closeNotification(byUser) {
            notificationElem.classList.remove("jnotification");
            await elementModifiers.tempClass(notificationElem, ["jnotification-disable"], 250);
            notificationElem.classList.add("dp-none");
            let notificationCount = getNotificationsCount() - 1;
            if (!notificationOptions.noRemoveAfterClose)
                notificationElem.remove();
            if (notificationCount === 0 &&
                !notificationOptions.noRemoveContainerAfterClose) {
                notificationsContainerElem.remove();
                notificationsParentElem.classList.remove("jnotification-parent");
            }
            notificationOptions.onclose?.(byUser);
        }
        [
            notificationElem,
            notificationsContainerElem,
            notificationsParentElem,
            ...[...notificationElem.childNodes],
        ].forEach((a) => {
            // @ts-ignore
            if (a.closeNotification)
                return;
            Object.defineProperty(a, "closeNotification", {
                get() {
                    return () => {
                        closeNotification(true);
                    };
                },
            });
        });
    };
    static closeNotification = async (notificationContainerElem) => {
        let notificationContainer = notificationContainerElem
            ? functions.getElement(notificationContainerElem)
            : document.querySelector("jnotification");
        let notification = notificationContainer;
        let reuseOpenedNotification = notificationContainer.getAttribute("reuseopenednotification") === "1";
        if (reuseOpenedNotification) {
            if (!this.#notificationOpened)
                return;
            this.#notificationClosing = true;
            if (this.#notificationChangingTimeout)
                clearTimeout(this.#notificationChangingTimeout);
        }
        notificationContainer.classList.remove("jNotificationOpen");
        notificationContainer.classList.add("jNotificationClose");
        await elementModifiers.tempClass(notification, ["jnotification-disable"], 250);
        notification.classList.add("dp-none");
        notificationContainer.classList.add("bg-transparent");
        notificationContainer.classList.remove("notification-error");
        if (!reuseOpenedNotification)
            return;
        this.#notificationOpened = false;
        this.#notificationClosing = false;
    };
    static closeNotificationsAll = () => {
        document
            .querySelectorAll("jnotification")
            .forEach((a) => this.closeNotification(a));
    };
    static closeErrorNotification = () => {
        if (!this.#notificationOpened || !this.#isErrorNotification)
            return;
        this.closeNotification();
    };
    static createTable = (tableOptions) => {
        if (!tableOptions)
            tableOptions = {};
        tableOptions.names = tableOptions.names ?? [];
        tableOptions.keys = tableOptions.keys ?? [];
        tableOptions.tableName = tableOptions.tableName ?? "jTable";
        tableOptions.pe = tableOptions.parentElem ?? tableOptions.pe ?? undefined;
        tableOptions.nameClasses = tableOptions.nameClasses ?? [];
        tableOptions.sortOptions =
            tableOptions.sortOptions ?? {};
        if (!tableOptions.searchOptions)
            tableOptions.searchOptions = {};
        if (!tableOptions.searchOptions.searchStopDelay)
            tableOptions.searchOptions.searchStopDelay = 1000;
        tableOptions.keys = tableOptions.keys
            .filter((a, i, arr) => i === 0 || a !== "\n" || (a === "\n" && arr.at(i - 1) !== "\n"))
            .filter((a, i, arr) => i < arr.length - 1 || a !== "\n");
        let tableOptionsOriginal = (0, utils_1.recreate)(tableOptions);
        let tableID = tableOptions.tableName;
        let nameClasses_ = [tableID, ...(0, utils_1.convertToArray)(tableOptions.nameClasses)];
        let tableExists = (document.getElementById(tableID) ?? undefined) !== undefined;
        let tableContainer = document.getElementById(`${tableID}-container`) ??
            elements.createElement("div", {
                ...(tableOptions.pe ? { pe: tableOptions.pe } : {}),
                id: `${tableID}-container`,
                classes: ["jTable-container"],
            });
        let tablezTopContainerElem = tableContainer.querySelector(`#${tableID}-ztop-container`) ??
            elements.createElement("div", {
                pe: tableContainer,
                classes: [
                    `jTable-ztop-container`,
                    `${tableID}-ztop-container`,
                    "jTable-ztop-container-hidden",
                    `${tableID}-ztop-container-hidden`,
                ],
            });
        let tableSearchContainerElem = !tableOptions.search
            ? undefined
            : tableContainer.querySelector(`#${tableID}-search`) ??
                elements.createElement("div", {
                    pe: tableContainer,
                    classes: ["jTable-search-container", `${tableID}-search-container`],
                });
        let searchID = 0;
        let searchData = {
            query: "",
            queryRegex: undefined,
            lastInputTime: -1,
            pendingSearchIDs: [],
            searchTimeout: undefined,
            currentSearchID: searchID,
        };
        let tableSearchInputElem = !tableOptions.search
            ? undefined
            : tableContainer.querySelector(`#${tableID}-search-input`) ??
                elements.createElement("input", {
                    id: `${tableID}-search-input`,
                    pe: tableSearchContainerElem,
                    placeholder: tableOptions.searchOptions?.inputPlaceholder ?? "Search Query",
                    classes: ["jTable-search-input", `${tableID}-search-input`],
                });
        (() => {
            // Search
            if (!tableOptions.search)
                return;
            tableSearchInputElem.oninput = () => {
                searchData.lastInputTime = Date.now();
                searchData.query = tableSearchInputElem.value;
                let queryRegex_ = searchData.query.replace(/^\/|\/$/g, "");
                let isQueryRegex = (() => {
                    return /^\/.+\/$/;
                })().test(searchData.query);
                searchData.queryRegex = isQueryRegex
                    ? new RegExp(queryRegex_)
                    : new RegExp((0, utils_1.regexEscape)(searchData.query));
                clearSearchTimeout();
                if (searchData.query.length === 0)
                    return resetTable();
                if (!tableOptions.searchOptions?.callback)
                    return search();
                searchData.searchTimeout = setTimeout(() => {
                    search();
                }, tableOptions.searchOptions.searchStopDelay);
            };
            tableSearchInputElem.onkeydown = (ev) => {
                if (searchData.query.length === 0)
                    return resetTable();
                if (ev.keyCode === 13 || ev.key === "Enter") {
                    clearSearchTimeout();
                    search();
                }
            };
            function clearSearchTimeout() {
                if (searchData.searchTimeout)
                    clearTimeout(searchData.searchTimeout);
            }
            function search() {
                let currentSearchID = (searchData.currentSearchID = searchID++);
                if (tableOptions.searchOptions.callback)
                    searchCallback(currentSearchID);
                else
                    searchTable(currentSearchID);
            }
            function appendNoResults() {
                if (tableOptions.keys.length > 0)
                    return;
                tableOptions.keys = [["@fw", "No Results found"]];
            }
            function searchTable(pendingSearchID) {
                tableOptions.keys = [];
                let tableKeysOriginalLines = [[]];
                tableOptionsOriginal.keys.forEach((a) => {
                    if (a === "\n")
                        return tableKeysOriginalLines.push([]);
                    tableKeysOriginalLines.at(-1).push(a);
                });
                tableKeysOriginalLines
                    .filter((a, i) => {
                    return a.some((b, i2) => {
                        let tdNum = i2;
                        let tdAllowed = !tableOptions.searchOptions.tdNums ||
                            (0, utils_1.convertToArray)(tableOptions.searchOptions.tdNums).includes(tdNum);
                        return (tdAllowed &&
                            searchData.queryRegex.test(b instanceof HTMLElement
                                ? tableOptions.searchOptions.tdAttributes?.[tdNum]
                                    ? b.getAttribute(tableOptions.searchOptions.tdAttributes?.[tdNum])
                                    : // @ts-ignore
                                        b.value ?? b.innerText
                                : b));
                    });
                })
                    .forEach((a) => {
                    tableOptions.keys.push(...a, "\n");
                });
                appendNoResults();
                actualCreateTable();
            }
            function searchCallback(pendingSearchID) {
                if (tableOptions.searchOptions.callback) {
                    tableOptions.keys = [];
                    tablezTopContainerElem.innerHTML = "";
                    tablezTopContainerElem.classList.remove("jTable-ztop-container-hidden", `${tableID}-ztop-container-hidden`);
                    elements.createElement("h", {
                        innerText: `Searching "${searchData.query}"`,
                        classes: ["jTable-ztop-container-loading"],
                        pe: tablezTopContainerElem,
                    });
                    actualCreateTable();
                    tableOptions.searchOptions
                        .callback?.({
                        query: searchData.query,
                        queryRegex: searchData.queryRegex,
                    })
                        .then((val) => {
                        if (searchData.currentSearchID !== pendingSearchID)
                            return;
                        tableOptions.keys = val.keys;
                        appendNoResults();
                        actualCreateTable();
                    })
                        .finally(() => {
                        utils_1.arrayModifiers.remove(searchData.pendingSearchIDs, pendingSearchID);
                        if (searchData.currentSearchID !== pendingSearchID)
                            return;
                        tablezTopContainerElem.classList.add("jTable-ztop-container-hidden", `${tableID}-ztop-container-hidden`);
                        tablezTopContainerElem
                            .querySelector(".jTable-ztop-container-loading")
                            ?.remove?.();
                    });
                }
            }
            function resetTable() {
                tableOptions.keys = tableOptionsOriginal.keys;
                actualCreateTable();
            }
        })();
        let tableElem = tableContainer.querySelector(`#${tableID}`) ??
            elements.createElement("table", {
                id: tableID,
                pe: tableContainer,
                classes: ["jTable", tableID],
            });
        if (!tableExists) {
            let thtr = elements.createElement("tr");
            let tableSortOptions = {
                lastSortIndex: undefined,
                sortMode: undefined,
            };
            tableOptions.names.forEach((name, i) => {
                let th = elements.createElement("th");
                th.classList.add("jTable-th", `${tableID}-th`, `${tableID}-th_${i}`);
                th.innerText = name;
                if (name.toString().length === 0)
                    th.classList.add("jTable-empty");
                if (!tableOptions.noSort || name.toString().length === 0) {
                    th.classList.add("cursor-sort");
                    th.onclick = () => {
                        let lastSortIndex = tableSortOptions.lastSortIndex;
                        let lastSortMode = tableSortOptions.sortMode;
                        let lastSortMode_ = (0, utils_1.isNullUndefined)(lastSortIndex) || lastSortIndex !== i
                            ? 0
                            : lastSortMode;
                        let sortMode = [2, 2, 1].at(lastSortMode_);
                        this.sortTable({
                            table: tableElem,
                            tdNum: i,
                            sortMode: sortMode,
                            reverseIfSame: true,
                            ...getValuesFromObject(tableOptions.sortOptions, [
                                "sortAttributeNames",
                            ]),
                        });
                        function getValuesFromObject(o, keys) {
                            let r = {};
                            keys.forEach((a) => (r[a] = o[a]));
                            return r;
                        }
                        tableSortOptions.lastSortIndex = i;
                        tableSortOptions.sortMode = sortMode;
                    };
                }
                thtr.appendChild(th);
            });
            if (tableOptions.names.length > 0)
                tableElem.appendChild(thtr);
        }
        function actualCreateTable() {
            if (tableExists && !tableOptions.noClearTable)
                [...tableElem.childNodes]
                    ?.filter((a) => 
                // @ts-ignore
                a.tagName === "TR" &&
                    (![...a.childNodes]?.[0] ||
                        // @ts-ignore
                        [...a.childNodes]?.[0]?.tagName !== "TH"))
                    .map((a) => a.remove());
            let currentTR;
            let currentTRNum = 0;
            newTR();
            function newTR() {
                if (currentTR)
                    tableElem.appendChild(currentTR);
                currentTR = elements.createElement("tr", {
                    classes: [
                        "jTable-tr",
                        `jTable-tr_${currentTRNum}`,
                        ...nameClasses_.map((a) => `${a}-tr`),
                        ...nameClasses_.map((a) => `${a}-tr_${currentTRNum}`),
                    ],
                });
                currentTRNum++;
            }
            let tdBefore = [];
            tableOptions.keys.map((key, i) => {
                tdBefore.push(i);
                let tdNum = tdBefore.length - 1;
                let key_ = functions.isHTMLElement(key) ? [key] : (0, utils_1.convertToArray)(key);
                let skipKey = false;
                let td = elements.createElement("td");
                td.classList.add("jTable-td", `jTable-td_${tdNum}`, ...nameClasses_.map((a) => `${a}-td`), ...nameClasses_.map((a) => `${a}-td_${tdNum}`), `jTable-tr_${currentTRNum}`, `jTable-tr_${currentTRNum}-td_${tdNum}`, ...nameClasses_.map((a) => `${a}-tr_${currentTRNum}-td_${tdNum}`));
                switch (key_[0]) {
                    case "@th": {
                        td.classList.add("jTable-th", ...nameClasses_.map((a) => `${a}-th`));
                        key_.splice(0, 1);
                        td.innerText = key_?.join(" ");
                        break;
                    }
                    case "@fw": {
                        td.colSpan = tableOptions.names.length + 1;
                        td.classList.add("jTable-td-search_notfound");
                        key_.splice(0, 1);
                        td.innerText = key_?.join(" ");
                        break;
                    }
                    case "\n": {
                        newTR();
                        skipKey = true;
                        break;
                    }
                    default: {
                        key_.forEach((a) => {
                            if (functions.isHTMLElement(a)) {
                                appendTD();
                                return td.appendChild(a);
                            }
                            td.innerText = key_?.join(" ");
                            if (!tableOptions.noCopy) {
                                td.classList.add("jcopy");
                                td.onclick = () => {
                                    functions.copy(td);
                                };
                            }
                        });
                        break;
                    }
                }
                function appendTD() {
                    currentTR.appendChild(td);
                }
                if (key_.length === 0)
                    td.classList.add("jTable-empty", ...nameClasses_.map((a) => `${a}-empty`));
                if (skipKey)
                    return (tdBefore = []);
                appendTD();
            });
            // if (tableOptions.keys[currentTRNum + 1] !== "\n")
            if (!currentTR.parentNode)
                tableElem.appendChild(currentTR);
            if (!tableOptions.noSortAfter)
                elements.sortTable({
                    table: tableElem,
                    ...tableOptions.sortOptions,
                });
            tableExists = true;
        }
        actualCreateTable();
        return tableContainer;
    };
    static sortTable = (options) => {
        if (!options?.table)
            return;
        let tdNum = options.tdNum ?? 0;
        let sortMode = options.sortMode ?? 1;
        let sortAttributeNames = options.sortAttributeNames;
        let trs = [...options.table.querySelectorAll("tr")];
        const trs_ = [...trs];
        let trsLast = [];
        trs.forEach((a) => a.remove());
        let allNumbers = true;
        let trSorted = trs
            .map((a, i) => {
            // @ts-ignore
            if (!a.childNodes[tdNum]?.innerText) {
                trsLast.push([undefined, a]);
                return;
            }
            let sortAttributeName = sortAttributeNames?.[tdNum];
            let val = sortAttributeName
                ? // @ts-ignore
                    a.childNodes[tdNum].firstChild.getAttribute(sortAttributeName)
                : // @ts-ignore
                    a.childNodes[tdNum].innerText.replace(/\t|\s|\n/g, "");
            let isNum = regex_js_1.regex.numregex().test(val);
            if (!isNum)
                allNumbers = false;
            return [isNum ? parseInt(val) : val.toLowerCase(), a];
        })
            .filter((a) => a);
        if (allNumbers)
            trSorted.sort((a, b) => a[0] - b[0]);
        else
            trSorted.sort();
        const trSorted_ = [...trSorted];
        trSorted = [...trSorted, ...trsLast];
        if (sortMode === 2 ||
            (trSorted_.map((a) => a[1]) === trs_ && options.reverseIfSame))
            trSorted = trSorted.reverse();
        trSorted.forEach((a) => options.table.appendChild(a[1]));
    };
    static timeUnitInput = (options) => {
        if (!options)
            return;
        let { unit, value } = functions.getUnitName(options.value);
        let selectedUnit = {
            unit: unit,
            value: value ?? 0,
        };
        let isMulti = (value ?? 1) === 1;
        let timeUnitInputContainer = elements.createElement("div", {
            classes: ["timeUnitInputContainer"],
        });
        let timeUnitInputNumber = elements.createElement("input", {
            type: "number",
            classes: ["timeUnitInputNumber"],
            value: (value ?? 1).toString(),
            min: (options.minValue ?? 0).toString(),
        });
        (() => {
            timeUnitInputNumber.onchange = () => {
                selectedUnit.value = parseInt(timeUnitInputNumber.value);
                triggerCB();
            };
            if (value)
                timeUnitInputNumber.value = value.toString();
        })();
        let timeUnitInputUnitSelect = elements.createElement("select", {
            classes: ["timeUnitInputUnit"],
        });
        (() => {
            updateUnits();
            timeUnitInputUnitSelect.onchange = () => {
                selectedUnit.unit = timeUnits[parseInt(timeUnitInputUnitSelect.value)];
                triggerCB();
            };
            if (unit)
                timeUnitInputUnitSelect.value = functions.getUnitNum(unit).toString();
            triggerCB();
        })();
        function triggerCB() {
            updateUnits();
            if (!options.changeCallback)
                return;
            options.changeCallback(functions.convertUnitToTime(selectedUnit.unit, selectedUnit.value));
        }
        function appendTimeUnits(multi) {
            let lastSelectedUnit = (functions.undefinedOnEmptyString(timeUnitInputUnitSelect.value) ??
                unit ??
                undefined).toString();
            timeUnitInputUnitSelect.innerHTML = "";
            timeUnits.forEach((timeUnit, i) => {
                let timeUnitElem = elements.createElement("option", {
                    innerText: timeUnit[1] + (multi ? "s" : ""),
                    value: i.toString(),
                });
                timeUnitInputUnitSelect.appendChild(timeUnitElem);
            });
            if (lastSelectedUnit)
                timeUnitInputUnitSelect.value = lastSelectedUnit;
        }
        function updateUnits() {
            if (parseInt(timeUnitInputNumber.value) === 1) {
                if (isMulti === false)
                    return;
                isMulti = false;
                appendTimeUnits(false);
            }
            else {
                if (isMulti === true)
                    return;
                isMulti = true;
                appendTimeUnits(true);
            }
        }
        [timeUnitInputNumber, timeUnitInputUnitSelect].forEach((a) => timeUnitInputContainer.appendChild(a));
        return timeUnitInputContainer;
    };
    static createSwitch = (switchOptionsOrEnabled, changeCallback) => {
        let switchOptions = switchOptionsOrEnabled && typeof switchOptionsOrEnabled === "object"
            ? switchOptionsOrEnabled
            : {};
        if ((0, utils_1.isNullUndefined)(switchOptions.enabled))
            switchOptions.enabled =
                typeof switchOptionsOrEnabled === "boolean"
                    ? switchOptionsOrEnabled
                    : false;
        if ((0, utils_1.isNullUndefined)(switchOptions.changeCallback) && changeCallback)
            switchOptions.changeCallback = changeCallback;
        let switchChanging = false;
        let switchState = undefined;
        let switchContainer = elements.createElement("div", {
            classes: ["jSwitchContainer"],
        });
        let switchInner = elements.createElement("div", {
            classes: ["jSwitchInner"],
            pe: switchContainer,
        });
        switchContainer.onclick = () => {
            if (switchChanging)
                return;
            changeSwitch(!switchState);
        };
        function changeSwitch(changeState, skipChangeCallback) {
            switchChanging = true;
            let switchStateOld = switchState;
            switchState = changeState ?? !switchState;
            if (switchStateOld !== switchState) {
                (async () => {
                    let changeCallbackReturn = !skipChangeCallback
                        ? switchOptions.changeCallback?.(switchState)
                        : undefined;
                    switchContainer.classList.remove("jSwitchContainer-disabled", "jSwitchContainer-enabled");
                    switchInner.classList.remove("jSwitchInner-disabled", "jSwitchInner-enabled");
                    if (!skipChangeCallback)
                        if (changeCallbackReturn instanceof Promise)
                            switchContainer.classList.add("jSwitchContainer-pending"),
                                switchInner.classList.add("jSwitchInner-pending"),
                                switchInner.classList.add("jSwitchInner-pending-animation"),
                                await changeCallbackReturn
                                    .then((r) => {
                                    switchState = r ?? true;
                                })
                                    .catch(() => {
                                    switchState = switchOptions.stateOnReject ?? false;
                                });
                        else
                            switchState = changeCallbackReturn ?? switchState;
                    switchContainer.classList.remove("jSwitchContainer-pending");
                    switchInner.classList.remove("jSwitchInner-pending", "jSwitchInner-pending-animation");
                    if (switchState)
                        switchContainer.classList.add("jSwitchContainer-enabled"),
                            switchInner.classList.add("jSwitchInner-enabled");
                    else
                        switchContainer.classList.add("jSwitchContainer-disabled"),
                            switchInner.classList.add("jSwitchInner-disabled");
                    switchChanging = false;
                })();
            }
        }
        changeSwitch(switchOptions.enabled ?? false, true);
        return switchContainer;
    };
    static jChoose = jchoose_1.jChoose;
}
exports.elements = elements;
class elementModifiers {
    static tempClass = (elem, classNames, duration, neverResolveOnForever) => {
        let elems_ = functions.getElements(elem);
        let classNames_ = (0, utils_1.convertToArray)(classNames, false);
        return Promise.all(elems_.map((elem_) => {
            return new Promise((resolve) => {
                classNames_ = classNames_.filter((a) => !elem_.classList.contains(a));
                if (classNames_.length === 0)
                    return;
                elem_.classList.add(...classNames_);
                if (duration <= 0 || duration >= 2147483647) {
                    if (!neverResolveOnForever)
                        return resolve();
                    return;
                }
                setTimeout(() => {
                    elem_.classList.remove(...classNames_);
                    resolve();
                }, duration ?? 5000);
            });
        }));
    };
    static tempErrorHighlight = (elems, duration) => {
        (0, utils_1.convertToArray)(elems, false, true).forEach((elem) => {
            this.tempClass(elem, ["error-highlight"], duration ?? 5000);
        });
    };
    static disable = (elems) => {
        (0, utils_1.convertToArray)(elems, false, true).forEach((elem) => {
            elem.setAttribute("disabled", "");
        });
    };
    static enable = (elems) => {
        (0, utils_1.convertToArray)(elems, false, true).forEach((elem) => {
            elem.removeAttribute("disabled");
        });
    };
}
exports.elementModifiers = elementModifiers;
