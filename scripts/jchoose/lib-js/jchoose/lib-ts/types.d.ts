export declare type jChooseOptions = {
    appendSelectors?: string | string[];
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
    allowDuplicates?: boolean;
    disallowedCharsRegExp?: RegExp;
    disallowedCharsReplacement?: string;
    addValidation?: Function;
};
export declare type jChooseOptionOption = {
    value: string;
    name?: string;
    optionElem?: HTMLOptionElement;
    withoutRemove?: boolean;
};
export declare type jChooseOptionsOptionArr = jChooseOptionOption & {
    elem: HTMLDivElement;
    optionElem: HTMLOptionElement;
};
