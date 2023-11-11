import { regex } from "oberknecht-utils/lib-js/variables/regex.js";
import {
  isNullUndefined,
  convertToArray,
  concatJSON,
  extendedTypeof,
  getFullNumber,
  dissolveArray,
  returnErr,
} from "oberknecht-utils/lib-js/utils";
import {
  copyOptionsType,
  defaultCopyAnimationDuration,
  defaultExitIconURL,
  defaultNotificationAnimationDuration,
  defaultNotificationErrorAnimationDuration,
  elemType,
  elementOptions,
  functionsSettingsType,
  getElementType,
  jNotificationType,
  jPopoutType,
  notificationOptionsType,
  popoutOptionsType,
  version,
} from "./types";

export class functions {
  static url = new URL(document.baseURI);
  static version: version;
  static options: functionsSettingsType;

  static appendElementOptions = (
    element?: HTMLElement,
    options?: elementOptions
  ) => {
    if (!element || !options) return;
    Object.keys(options).forEach((optionName: string) => {
      switch (optionName) {
        case "classes": {
          convertToArray(options[optionName]).forEach((a) =>
            element.classList.add(a)
          );
          break;
        }

        case "childNodes": {
          convertToArray(options[optionName]).forEach((a) => {
            element.appendChild(a);
          });
          break;
        }

        case "style": {
          Object.keys(options[optionName]).forEach((a: string) => {
            // @ts-ignore
            element.style[a] = options[optionName][a];
          });
          break;
        }

        default: {
          // @ts-ignore
          if (options[optionName]) element[optionName] = options[optionName];
        }
      }
    });
  };

  static appendChildren = (elem: Node, ...children: Node[]) => {
    [...dissolveArray(...children)].forEach((a) => elem.appendChild(a));
  };

  static checkBrowser = () => {
    return typeof window !== "undefined";
  };

  static getParent = (elem: HTMLElement, number?: number) => {
    if (isNullUndefined(number) || number <= 1) return elem;
    return this.getParent(elem.parentElement, (number ?? 1) - 1);
  };

  static getElement = (elemOrQuery: elemType | string): HTMLElement => {
    if (!this.checkBrowser()) throw Error("Not in browser");
    if (typeof elemOrQuery !== "string") return elemOrQuery as HTMLElement;
    return document.querySelector(elemOrQuery);
  };

  static parseIconURL = (u: string, size?: string) => {
    let u_ = new URL(u.startsWith("/") ? this.url.origin + u : u);
    if (this.version) u_.searchParams.set("version", this.version.npm);
    if (!u_.searchParams.get("size") && size !== null)
      u_.searchParams.set("size", size ?? "48");
    return u_.toString();
  };

  static copy = async (elemOrData: any, copyOptions_?: copyOptionsType) => {
    let copyOptions = concatJSON([
      functions.options?.copyOptions ?? {},
      copyOptions_ ?? {},
    ]) as copyOptionsType;
    let withoutAnimation = copyOptions.withoutAnimation;
    let copyData;
    if (elemOrData instanceof HTMLElement) {
      copyData = copyOptions.customDataAttributeKey
        ? elemOrData.getAttribute(copyOptions.customDataAttributeKey)
        : // @ts-ignore
          elemOrData.value ?? elemOrData.innerText ?? "";
    } else {
      switch (extendedTypeof(elemOrData)) {
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
      let animationParent =
        functions.getParent(elemOrData, copyOptions.animationParentsNum ?? 0) ??
        elemOrData;

      let animationDuration =
        copyOptions.animationDuration ?? defaultCopyAnimationDuration;
      await elementModifiers.tempClass(
        animationParent,
        ["jcopied-enable"],
        300
      );

      await elementModifiers.tempClass(
        animationParent,
        ["jcopied"],
        animationDuration
      );

      await elementModifiers.tempClass(
        animationParent,
        ["jcopied-disable"],
        500
      );
    }
  };
}

export class elements {
  static createElement = <K extends keyof HTMLElementTagNameMap | string>(
    tagName: K | string,
    options?: elementOptions
  ): K extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[K]
    : HTMLElement => {
    let r = document.createElement(tagName);

    functions.appendElementOptions(r, options);

    // @ts-ignore
    return r;
  };

  static parseLinks = (
    elemOrQuery: getElementType,
    target?: string,
    useMarkdownLinks?: boolean
  ) => {
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
        if (!markdownMatch) return;

        let markdownText = markdownMatch.match(markdownMatchText)?.[0];
        let markdownLink = markdownMatch.match(markdownMatchLink)?.[0];

        text = text.replace(markdownMatch, markdownText);

        let linkElem = elements.createElement("a", {
          innerText: markdownText,
          href: markdownLink,
          target: target ?? "_blank",
        });

        elem.innerHTML = elem.innerHTML.replace(
          markdownMatch,
          linkElem.outerHTML
        );
      });

    text = text.replace(regex.extraSpaceRegex(), "");

    let links = text.match(regex.urlreg_()) ?? [];
    links.forEach((link) => {
      let linkElem = elements.createElement("a", {
        href: link,
        innerText: link,
        target: target ?? "_blank",
      });

      elem.innerHTML = elem.innerHTML.replace(link, linkElem.outerHTML);
    });
  };

  static parseADHD = (
    elemOrQuery: HTMLElement | string,
    boldLength?: number,
    noIgnoreLinks?: boolean,
    ignoreCheck?: Function
  ) => {
    let elem = functions.getElement(elemOrQuery);
    let text = elem.innerText;

    let textSplits = text.split(" ");
    elem.innerHTML = "";

    textSplits.forEach((textSplit) => {
      let boldLength_ =
        typeof boldLength === "number"
          ? boldLength
          : getFullNumber(textSplit.length / 2);

      if (!noIgnoreLinks && regex.urlreg().test(textSplit)) boldLength_ = 0;

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

  static parseJSONText = (s: string | Record<string, any>) => {
    if (!["string", "object"].includes(typeof s))
      throw Error("s is not typeof string/object");
    let o = s;
    if (typeof s === "string") o = JSON.parse(s);

    return JSON.stringify(o, null, 2);
  };

  static convertToArray = (a: any | any[]) => {
    if (Array.isArray(a)) return a;
    return [a];
  };

  static #popoutCount = 0;
  static get getPopoutCount() {
    return this.#popoutCount;
  }
  static popout = (popoutOptions_?: popoutOptionsType): jPopoutType => {
    this.#popoutCount++;
    let popoutOptions = concatJSON([
      functions.options?.popoutOptions ?? {},
      popoutOptions_ ?? {},
    ]) as popoutOptionsType;

    let popoutWindow: jPopoutType;
    let popoutWindowBackground: HTMLElement;
    let parentElem_ =
      popoutOptions.parentElem ?? document.querySelector("body");
    if (
      !parentElem_.querySelector("jpopout") ||
      !popoutOptions.reuseOpenedPopout
    ) {
      popoutWindow = elements.createElement("jpopout", {
        classes: ["dp-none"],
      }) as jPopoutType;

      parentElem_.appendChild(popoutWindow);
    }
    if (
      !parentElem_.querySelector("jpopoutbg") ||
      !popoutOptions.reuseOpenedPopout
    ) {
      popoutWindowBackground = elements.createElement("jpopoutbg", {
        classes: ["dp-none"],
      });

      parentElem_.appendChild(popoutWindowBackground);
    }

    if (popoutOptions.parentOptions)
      functions.appendElementOptions(parentElem_, popoutOptions.parentOptions);

    parentElem_.classList.add("jpopout-parent");

    popoutWindow = popoutWindow ?? parentElem_.querySelector("jpopout");
    popoutWindowBackground =
      popoutWindowBackground ?? parentElem_.querySelector("jpopoutbg");

    if (popoutOptions.zIndex) {
      popoutWindow.style.zIndex = popoutOptions.zIndex.toString();
      popoutWindowBackground.style.zIndex = (
        popoutOptions.zIndex - 1
      ).toString();
    }
    popoutWindow.classList.remove("dp-none");
    popoutWindowBackground.classList.remove("dp-none");
    (async () => {
      await elementModifiers.tempClass(popoutWindow, "jpopout-enable", 250);
      await elementModifiers.tempClass(
        popoutWindowBackground,
        "jpopoutbg-enable",
        250
      );
      popoutWindow.classList.remove("jpopout-enable");
      popoutWindowBackground.classList.remove("jpopoutbg-enable");
    })();
    popoutWindow.innerHTML = "";

    let this_ = this;
    function closePopout() {
      popoutOptions.onClose?.();
      (async () => {
        elementModifiers.tempClass(popoutWindow, "jpopout-disable", 250);
        await elementModifiers.tempClass(
          popoutWindowBackground,
          "jpopoutbg-disable",
          250
        );
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

    let innerElems_ = convertToArray(popoutOptions.innerElems, false, true);

    let popoutTop = elements.createElement("jpopout-top");
    (() => {
      let popoutTitle = elements.createElement("jtitle", {
        innerText: popoutOptions.title ?? "",
      });

      let popoutClose = elements.createElement("img", {
        classes: ["jpopout-close", "cursor-pointer"],
        src: popoutOptions.exitIconURL ?? defaultExitIconURL,
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

  static notification = (
    dat: string | Error | any,
    notificationOptions_?: notificationOptionsType
  ) => {
    let notificationOptions = concatJSON([
      functions.options?.notificationOptions ?? {},
      notificationOptions_ ?? {},
    ]) as notificationOptionsType;
    let isErr =
      notificationOptions.isError ||
      (dat?.data?.error ?? dat?.error ?? dat) instanceof Error;

    let animationDuration = isErr
      ? notificationOptions.animationDurationError ??
        defaultNotificationErrorAnimationDuration
      : notificationOptions.animationDuration ??
        defaultNotificationAnimationDuration;

    let notificationsParentElem: HTMLElement = functions.getElement(
      notificationOptions.parentElem ?? "body"
    );
    let notificationsContainerElem: HTMLElement = notificationsParentElem.querySelector(
      "jnotifications"
    );
    if (!notificationsContainerElem) {
      notificationsContainerElem = elements.createElement("jnotifications");
      notificationsParentElem.appendChild(notificationsContainerElem);
    }

    let notificationElem: jNotificationType = notificationsContainerElem.querySelector(
      "jnotification"
    );

    if (!notificationElem || !notificationOptions.reuseOpenedNotification) {
      notificationElem = elements.createElement(
        "jnotification"
      ) as jNotificationType;
      notificationsContainerElem.appendChild(notificationElem);
    }

    function getNotificationsCount() {
      return [...notificationsContainerElem.querySelectorAll("jnotification")]
        .length;
    }

    notificationsParentElem.classList.add("jnotification-parent");

    notificationElem.innerHTML = "";

    (() => {
      let notificationTextElem = elements.createElement("jh", {
        classes: ["jnotification-text"],
        innerText: isErr ? "Error: " + returnErr(dat) : dat,
      });

      let notificationButtonContainer = elements.createElement("div", {
        classes: ["jnotification-buttoncontainer"],
      });
      let notificationCloseButton = elements.createElement("button", {
        classes: ["jnotification-button-close"],
      });

      [
        notificationCloseButton,
        ...convertToArray(notificationOptions.notificationButtons, false),
      ].forEach((a) => {
        a.classList.add("jnotification-button");
        notificationButtonContainer.appendChild(a);
      });

      (() => {
        let notificationCloseButtonImg = elements.createElement("img", {
          src: notificationOptions.exitIconURL ?? defaultExitIconURL,
          style: {
            userSelect: "none",
          },
        });

        notificationCloseButton.appendChild(notificationCloseButtonImg);

        notificationCloseButton.onclick = () => {
          closeNotification();
        };
      })();

      [notificationTextElem, notificationButtonContainer].forEach((a) =>
        notificationElem.appendChild(a)
      );
    })();

    if (notificationOptions.zIndex)
      notificationElem.style.zIndex = notificationOptions.zIndex.toString();

    notificationElem.classList.remove("dp-none");

    (async () => {
      notificationElem.classList.add(
        isErr ? "jnotification-red" : "jnotification-green"
      );
      if (notificationOptions.elementOptions)
        functions.appendElementOptions(
          notificationElem,
          notificationOptions.elementOptions
        );
      await elementModifiers.tempClass(
        notificationElem,
        ["jnotification-enable"],
        // 1500
        500
      );
      await elementModifiers.tempClass(
        notificationElem,
        ["jnotification"],
        animationDuration,
        true
      );
      await closeNotification();
    })();

    async function closeNotification() {
      notificationElem.classList.remove("jnotification");
      await elementModifiers.tempClass(
        notificationElem,
        ["jnotification-disable"],
        250
      );
      notificationElem.classList.add("dp-none");
      let notificationCount = getNotificationsCount() - 1;
      if (!notificationOptions.noRemoveAfterClose) notificationElem.remove();
      if (
        notificationCount === 0 &&
        !notificationOptions.noRemoveContainerAfterClose
      ) {
        notificationsContainerElem.remove();
        notificationsParentElem.classList.remove("jnotification-parent");
      }
    }

    [
      notificationElem,
      notificationsContainerElem,
      notificationsParentElem,
      ...[...notificationElem.childNodes],
    ].forEach((a) => {
      // @ts-ignore
      if (a.closeNotification) return;
      Object.defineProperty(a, "closeNotification", {
        get() {
          return closeNotification;
        },
      });
    });
  };
}

export class elementModifiers {
  static tempClass = (
    elem: getElementType,
    classNames: string | string[],
    duration?: number,
    neverResolveOnForever?: boolean
  ) => {
    return new Promise<void>((resolve) => {
      let elem_ = functions.getElement(elem);
      let classNames_ = convertToArray(classNames, false);
      classNames_ = classNames_.filter((a) => !elem_.classList.contains(a));

      if (classNames_.length === 0) return;
      elem_.classList.add(...classNames_);
      if (duration <= 0 || duration >= 2147483647) {
        if (!neverResolveOnForever) return resolve();
        return;
      }
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
