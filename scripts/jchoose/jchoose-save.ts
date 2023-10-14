import { defaultAppendClasses } from "./defaults";
import {
  jChooseOptionOption,
  jChooseOptions,
  jChooseOptionsOptionArr as jChooseOptionOptionArr,
} from "./types";
import { convertToArray } from "oberknecht-utils/lib-js/utils/arrayModifiers/convertToArray.js";
import { arrayModifiers } from "oberknecht-utils/lib-js/utils/arrayModifiers.js";
import { isNullUndefined } from "oberknecht-utils/lib-js/utils/isNullUndefined.js";
import { functions, elements } from "../defaults/defaults";

export class jChoose {
  // #options: jChooseOptions;
  static choose = (options?: jChooseOptions) => {
    options = options ?? {};
    let selectContainers: HTMLSelectElement[] = [];
    [
      ...convertToArray(options.appendSelectors, false),
      ...defaultAppendClasses.map((a) => `.${a}`),
    ].forEach((selector) => {
      // @ts-ignore
      selectContainers.push(...document.querySelectorAll(selector));
    });

    selectContainers.forEach((a) => createChoose(a));
    function createChoose(originalSelect: HTMLSelectElement) {
      let chooseOptionsSelected: jChooseOptionOptionArr[] = [];

      if (!(originalSelect instanceof HTMLSelectElement)) return;
      let chooseContainer = elements.createElement("div", {
        classes: ["jChoose-container"],
      });

      let chooseSelected = elements.createElement("div", {
        classes: ["jChose-selected"],
      });

      let chooseInput = elements.createElement("input", {
        placeholder: options.placeholder,
        classes: ["jChose-input"],
      });

      functions.appendChildren(chooseContainer, chooseSelected, chooseInput);

      // @ts-ignore
      [...originalSelect.querySelectorAll("option")].forEach(
        (optionElem: HTMLOptionElement) => {
          appendOption({
            name: optionElem.innerText,
            value: optionElem.value,
            optionElem: optionElem,
          });
        }
      );

      function appendOption(optionOptions: jChooseOptionOption) {
        if (
          optionOptions.value.length === 0 ||
          (options.minLength &&
            optionOptions.value.length < options.minLength) ||
          (options.maxLength &&
            optionOptions.value.length > options.maxLength) ||
          (!options.allowDuplicates &&
            chooseOptionsSelected.some((a) => a.value === optionOptions.value))
        )
          return;
        console.log("appendOption", optionOptions);
        let chooseOptionContainer = elements.createElement("div");

        let chooseOptionName = elements.createElement("h", {
          innerText: optionOptions.name ?? optionOptions.value,
        });

        if (optionOptions.name)
          chooseOptionName.setAttribute("jChoose_name", optionOptions.name);
        chooseOptionName.setAttribute("jChoose_value", optionOptions.value);

        let chooseSelectOption = elements.createElement("option", {
          innerText: optionOptions.name ?? optionOptions.value,
          value: optionOptions.value,
        });

        chooseOptionsSelected.push({
          ...optionOptions,
          elem: chooseOptionContainer,
          optionElem: optionOptions.optionElem ?? chooseSelectOption,
        });

        functions.appendChildren(chooseOptionContainer, chooseOptionName);

        functions.appendChildren(chooseSelected, chooseOptionContainer);
        if (!optionOptions.optionElem)
          functions.appendChildren(originalSelect, chooseSelectOption);
      }

      function removeOption(index?: number) {
        if (chooseOptionsSelected.length === 0) return;
        index = !isNullUndefined(index)
          ? index
          : chooseOptionsSelected.length - 1;
        let optionOptions = chooseOptionsSelected[index];

        chooseOptionsSelected = arrayModifiers.splice(
          chooseOptionsSelected,
          index,
          1
        );
        optionOptions.elem.remove();
        optionOptions.optionElem.remove();
        // arrayModifiers.splice(chooseOptionsSelected, index);
      }

      (() => {
        let inputValue = "";

        chooseInput.onkeydown = (ev) => {
          inputValue = chooseInput.value;
          if (options.disallowedCharsRegExp)
            inputValue = inputValue.replace(
              options.disallowedCharsRegExp,
              options.disallowedCharsReplacement ?? ""
            );

          switch (ev.key) {
            case "Enter": {
              appendOption({
                value: inputValue,
              });

              chooseInput.value = "";

              break;
            }

            case "Backspace": {
              if (inputValue.length === 0) removeOption();

              break;
            }
          }
        };
      })();

      originalSelect.parentElement.appendChild(chooseContainer);
      originalSelect.parentElement.insertBefore(
        originalSelect,
        chooseContainer
      );
    }
  };
}
