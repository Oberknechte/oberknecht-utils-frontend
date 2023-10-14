import { convertToArray } from "oberknecht-utils/lib-js/utils/arrayModifiers/convertToArray.js";
import { dissolveArray } from "oberknecht-utils/lib-js/utils/arrayModifiers/dissolveArray.js";
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
}
