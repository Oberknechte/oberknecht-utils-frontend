import { convertToArray } from "oberknecht-utils/lib-js/utils/arrayModifiers/convertToArray.js";
import { dissolveArray } from "oberknecht-utils/lib-js/utils/arrayModifiers/dissolveArray.js";
import { getFullNumber } from "oberknecht-utils/lib-js/utils/getFullNumber.js";
import { regex } from "oberknecht-utils/lib-js/variables/regex.js";
import { elementOptions } from "./types";

export class functions {
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

  static selectElem = (elemOrQuery: HTMLElement | string): HTMLElement => {
    if (!this.checkBrowser()) throw Error("Not in browser");
    if (elemOrQuery instanceof HTMLElement) return elemOrQuery;
    return document.querySelector(elemOrQuery);
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
    elemOrQuery: HTMLElement | string,
    target?: string,
    useMarkdownLinks?: boolean
  ) => {
    let elem = functions.selectElem(elemOrQuery);
    let text = elem.innerText;

    const markdownReg = /\[[^\]]+\]\([^\)]+\)/g;
    const markdownMatchText = /(?<=\[)[^\]]+(?=\])/;
    const markdownMatchLink = /(?<=\()[^\)]+(?=\))/;
    let markdownMatches = text.match(markdownReg) ?? [];
    let markdownSplits = text.split(markdownReg);

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
    let elem = functions.selectElem(elemOrQuery);
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
}
