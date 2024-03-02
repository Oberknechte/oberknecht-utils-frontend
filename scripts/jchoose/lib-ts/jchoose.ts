import { defaultAppendClasses } from "./defaults";
import {
  jChooseOptionOption,
  jChooseOptions,
  jChooseOptionsOptionArr as jChooseOptionOptionArr,
} from "./types";
import { convertToArray } from "oberknecht-utils/lib-js/utils/arrayModifiers/convertToArray.js";
import { arrayModifiers } from "oberknecht-utils/lib-js/utils/arrayModifiers.js";
import { isNullUndefined } from "oberknecht-utils/lib-js/utils/isNullUndefined.js";
import { functions, elements } from "../../defaults/lib-ts/defaults";
let jChooseNum = 0;

let selectContainers = {};
export class jChoose {
  #sym = `jChoose-${jChooseNum++}`;
  get symbol() {
    return this.#sym;
  }
  #selectContainers: HTMLSelectElement[];
  #options: jChooseOptions;
  #chooseOptions: Record<string, jChooseOptionOptionArr[]> = {};
  get chooseOptions() {
    if (!this.#chooseOptions[this.symbol])
      this.#chooseOptions[this.symbol] = [];
    return this.#chooseOptions[this.symbol] ?? [];
  }

  constructor() {}

  choose = (options?: jChooseOptions) => {
    this.#sym = `jChoose-${jChooseNum++}`;
    this.#options = options ?? {};
    selectContainers[this.symbol] = [];
    (
      convertToArray(this.#options.appendSelectors, false, true) ??
      defaultAppendClasses.map((a) => `.${a}`)
    )
      .filter((a, i, arr) => !arr.slice(0, i).includes(a))
      .forEach((selector) => {
        // @ts-ignore
        selectContainers[this.symbol].push(
          ...(selector instanceof HTMLElement
            ? [selector]
            : document.querySelectorAll(selector))
        );
      });

    selectContainers[this.symbol].forEach((a) => this.createChoose(a));
  };

  createChoose = (originalSelect: HTMLSelectElement) => {
    let this_ = this;
    if (!(originalSelect instanceof HTMLSelectElement)) return;
    let chooseContainer = elements.createElement("div", {
      classes: ["jChoose-container"],
      id: originalSelect.id ? `jChoose-${originalSelect.id}` : this.symbol,
    });

    let chooseSelected = elements.createElement("div", {
      classes: ["jChoose-selected"],
    });

    let chooseInput = elements.createElement("input", {
      placeholder: this.#options.placeholder,
      classes: ["jChose-input"],
    });

    functions.appendChildren(chooseContainer, chooseSelected, chooseInput);

    // @ts-ignore
    [...originalSelect.querySelectorAll("option")].forEach(
      (optionElem: HTMLOptionElement) => {
        appendOption(
          {
            name: optionElem.innerText,
            value: optionElem.value,
            optionElem: optionElem,
          },
          true
        );
      }
    );

    function appendOption(
      optionOptions: jChooseOptionOption,
      fromBase?: boolean
    ) {
      if (
        optionOptions.value.length === 0 ||
        (this_.#options.minLength &&
          optionOptions.value.length < this_.#options.minLength) ||
        (this_.#options.maxLength &&
          optionOptions.value.length > this_.#options.maxLength) ||
        (!this_.#options.allowDuplicates &&
          this_.chooseOptions.some(
            (a: jChooseOptionOptionArr) => a.value === optionOptions.value
          ))
      )
        return;

      if (
        !fromBase &&
        this_.#options.addValidation &&
        !this_.#options.addValidation(optionOptions.value)
      )
        return;

      let chooseOptionContainer = elements.createElement("div", {
        classes: ["jChoose-select"],
      });

      let chooseOptionContainerInner = elements.createElement("div", {
        classes: ["jChoose-select-inner"],
      });

      let chooseOptionName = elements.createElement("h", {
        classes: ["jChoose-select-name"],
        innerText: optionOptions.name ?? optionOptions.value,
      });

      let chooseOptionDelete = elements.createElement("h", {
        classes: ["jChoose-select-delete"],
      });

      if (optionOptions.name)
        chooseOptionName.setAttribute("jChoose_name", optionOptions.name);
      chooseOptionName.setAttribute("jChoose_value", optionOptions.value);

      let chooseSelectOption = elements.createElement("option", {
        innerText: optionOptions.name ?? optionOptions.value,
        value: optionOptions.value,
      });

      let d = {
        ...optionOptions,
        elem: chooseOptionContainer,
        optionElem: optionOptions.optionElem ?? chooseSelectOption,
      };
      this_.#chooseOptions[this_.symbol].push(d);

      chooseOptionDelete.onclick = () => {
        removeOption(this_.chooseOptions.indexOf(d));
      };

      functions.appendChildren(
        chooseOptionContainerInner,
        chooseOptionName,
        chooseOptionDelete
      );

      functions.appendChildren(
        chooseOptionContainer,
        chooseOptionContainerInner
      );
      functions.appendChildren(chooseSelected, chooseOptionContainer);
      if (!optionOptions.optionElem)
        functions.appendChildren(originalSelect, chooseSelectOption);
    }

    function removeOption(index?: number) {
      if (this_.chooseOptions.length === 0) return;
      index = !isNullUndefined(index) ? index : this_.chooseOptions.length - 1;
      let optionOptions = this_.chooseOptions[index];

      this_.#chooseOptions[this_.symbol] = arrayModifiers.splice(
        this_.chooseOptions,
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
        if (this.#options.disallowedCharsRegExp)
          inputValue = inputValue.replace(
            this.#options.disallowedCharsRegExp,
            this.#options.disallowedCharsReplacement ?? ""
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

    originalSelect.parentNode.appendChild(chooseContainer);
    originalSelect.parentNode.insertBefore(originalSelect, chooseContainer);
    originalSelect.style.display = "none";
  };

  values = () => {
    return this.chooseOptions.map((a) => a.value);
  };
}
