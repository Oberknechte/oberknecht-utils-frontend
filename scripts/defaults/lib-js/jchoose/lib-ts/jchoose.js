"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jChoose = void 0;
const defaults_1 = require("./defaults");
const convertToArray_js_1 = require("oberknecht-utils/lib-js/utils/arrayModifiers/convertToArray.js");
const arrayModifiers_js_1 = require("oberknecht-utils/lib-js/utils/arrayModifiers.js");
const isNullUndefined_js_1 = require("oberknecht-utils/lib-js/utils/isNullUndefined.js");
const defaults_2 = require("../../defaults/lib-ts/defaults");
let jChooseNum = 0;
let selectContainers = {};
class jChoose {
    #sym = `jChoose-${jChooseNum++}`;
    get symbol() {
        return this.#sym;
    }
    #selectContainers;
    #options = {};
    get options() {
        return this.#options[this.#sym];
    }
    #chooseOptions = {};
    get chooseOptions() {
        if (!this.#chooseOptions[this.symbol])
            this.#chooseOptions[this.symbol] = [];
        return this.#chooseOptions[this.symbol] ?? [];
    }
    constructor() { }
    choose = (options) => {
        this.#sym = `jChoose-${jChooseNum++}`;
        this.#options[this.#sym] = options ?? {};
        selectContainers[this.symbol] = [];
        ((0, convertToArray_js_1.convertToArray)(this.#options[this.#sym].appendSelectors, false, true) ??
            defaults_1.defaultAppendClasses.map((a) => `.${a}`))
            .filter((a, i, arr) => !arr.slice(0, i).includes(a))
            .forEach((selector) => {
            // @ts-ignore
            selectContainers[this.symbol].push(...(selector instanceof HTMLElement
                ? [selector]
                : document.querySelectorAll(selector)));
        });
        selectContainers[this.symbol].forEach((a) => this.createChoose(a));
    };
    createChoose = (originalSelect) => {
        let this_ = this;
        if (!(originalSelect instanceof HTMLSelectElement))
            return;
        let chooseContainer = defaults_2.elements.createElement("div", {
            classes: ["jChoose-container"],
            id: originalSelect.id ? `jChoose-${originalSelect.id}` : this.symbol,
        });
        let chooseSelected = defaults_2.elements.createElement("div", {
            classes: ["jChoose-selected"],
        });
        let chooseInput = defaults_2.elements.createElement("input", {
            placeholder: this.#options.placeholder,
            classes: ["jChose-input"],
        });
        defaults_2.functions.appendChildren(chooseContainer, chooseSelected, chooseInput);
        // @ts-ignore
        [...originalSelect.querySelectorAll("option")].forEach((optionElem) => {
            appendOption({
                name: optionElem.innerText,
                value: optionElem.value,
                optionElem: optionElem,
            }, true);
        });
        function appendOption(optionOptions, fromBase) {
            if (optionOptions.value.length === 0 ||
                (this_.#options[this_.#sym].minLength &&
                    optionOptions.value.length < this_.#options[this_.#sym].minLength) ||
                (this_.#options[this_.#sym].maxLength &&
                    optionOptions.value.length > this_.#options[this_.#sym].maxLength) ||
                (!this_.#options[this_.#sym].allowDuplicates &&
                    this_.chooseOptions.some((a) => a.value === optionOptions.value)))
                return;
            if (!fromBase &&
                this_.#options[this_.#sym].addValidation &&
                !this_.#options[this_.#sym].addValidation(optionOptions.value, this_.values()))
                return;
            let chooseOptionContainer = defaults_2.elements.createElement("div", {
                classes: ["jChoose-select"],
            });
            let chooseOptionContainerInner = defaults_2.elements.createElement("div", {
                classes: ["jChoose-select-inner"],
            });
            let chooseOptionName = defaults_2.elements.createElement("h", {
                classes: ["jChoose-select-name"],
                innerText: optionOptions.name ?? optionOptions.value,
            });
            let chooseOptionDelete = defaults_2.elements.createElement("h", {
                classes: ["jChoose-select-delete"],
            });
            if (optionOptions.name)
                chooseOptionName.setAttribute("jChoose_name", optionOptions.name);
            chooseOptionName.setAttribute("jChoose_value", optionOptions.value);
            let chooseSelectOption = defaults_2.elements.createElement("option", {
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
            defaults_2.functions.appendChildren(chooseOptionContainerInner, chooseOptionName, chooseOptionDelete);
            defaults_2.functions.appendChildren(chooseOptionContainer, chooseOptionContainerInner);
            defaults_2.functions.appendChildren(chooseSelected, chooseOptionContainer);
            if (!optionOptions.optionElem)
                defaults_2.functions.appendChildren(originalSelect, chooseSelectOption);
            if (!fromBase)
                this_.options.changeCb?.();
        }
        function removeOption(index) {
            if (this_.chooseOptions.length === 0)
                return;
            index = !(0, isNullUndefined_js_1.isNullUndefined)(index) ? index : this_.chooseOptions.length - 1;
            let optionOptions = this_.chooseOptions[index];
            this_.#chooseOptions[this_.symbol] = arrayModifiers_js_1.arrayModifiers.splice(this_.chooseOptions, index, 1);
            optionOptions.elem.remove();
            optionOptions.optionElem.remove();
            // arrayModifiers.splice(chooseOptionsSelected, index);
            this_.options.changeCb?.();
        }
        (() => {
            let inputValue = "";
            chooseInput.onkeydown = (ev) => {
                inputValue = chooseInput.value;
                if (this.#options[this.#sym].disallowedCharsRegExp)
                    inputValue = inputValue.replace(this.#options[this.#sym].disallowedCharsRegExp, this.#options[this.#sym].disallowedCharsReplacement ?? "");
                switch (ev.key) {
                    case "Enter": {
                        appendOption({
                            value: inputValue,
                        });
                        chooseInput.value = "";
                        break;
                    }
                    case "Backspace": {
                        if (inputValue.length === 0)
                            removeOption();
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
exports.jChoose = jChoose;
