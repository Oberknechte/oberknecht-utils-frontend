export type jChooseOptions = {
    appendSelectors?: string | string[];
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
    allowDuplicates?: boolean;
    disallowedCharsRegExp?: RegExp;
    disallowedCharsReplacement?: string;
    addValidation?: Function;
};
export type jChooseOptionOption = {
    value: string;
    name?: string;
    optionElem?: HTMLOptionElement;
    withoutRemove?: boolean;
};
export type jChooseOptionsOptionArr = jChooseOptionOption & {
    elem: HTMLDivElement;
    optionElem: HTMLOptionElement;
};
