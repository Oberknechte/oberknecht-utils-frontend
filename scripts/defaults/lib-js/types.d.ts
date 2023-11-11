export type elementOptionsExtra = {
    classes?: string | string[];
    childNodes?: string | string[];
};
export type elementOptions = elementOptionsExtra & Record<string, any>;
export type version = {
    npm: string;
};
export type jPopoutType = HTMLElement & {
    closePopout: () => {};
};
export type elemType = HTMLElement | Element;
export type getElementType = elemType | string;
export type functionsSettingsType = {
    iconSize?: number | 48;
    popoutOptions: popoutOptionsType;
    copyOptions: copyOptionsType;
};
export type popoutOptionsType = {
    title?: string;
    innerElems?: elemType | elemType[];
    parentElem?: HTMLElement;
    exitIconURL?: string;
    parentOptions?: elementOptions;
    reuseOpenedPopout?: boolean;
    zIndex?: number;
    noRemoveAfterClose?: boolean;
    onClose?: Function;
    onClosed?: Function;
};
export type copyOptionsType = {
    withoutAnimation?: boolean;
    customDataAttributeKey?: string;
    animationParentsNum?: number;
    animationDuration?: number | 3000;
};
