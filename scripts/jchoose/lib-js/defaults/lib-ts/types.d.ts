export declare const defaultExitIconURL: "https://raw.githubusercontent.com/Oberknechte/oberknecht-utils-frontend/main/img/x-red-48x48.png";
export declare const defaultCopyAnimationDuration: 5000;
export declare const defaultNotificationAnimationDuration: 5000;
export declare const defaultNotificationErrorAnimationDuration: -1;
export declare type elementOptionsExtra = {
    classes?: string | string[];
    childNodes?: string | string[];
};
export declare type elementOptions = elementOptionsExtra & Record<string, any>;
export declare type version = {
    npm: string;
};
export declare type jPopoutType = HTMLElement & {
    closePopout: () => {};
};
export declare type elemType = HTMLElement | Element;
export declare type getElementType = elemType | string;
export declare type functionsSettingsType = {
    iconSize?: number | 48;
    popoutOptions?: popoutOptionsType;
    copyOptions?: copyOptionsType;
    notificationOptions?: notificationOptionsType;
};
export declare type popoutOptionsType = {
    title?: string;
    innerElems?: elemType | elemType[];
    parentElem?: HTMLElement;
    parentElemOptions?: elementOptions;
    popoutElemOptions?: elementOptions;
    popoutBGElemOptions?: elementOptions;
    exitIconURL?: string;
    parentOptions?: elementOptions;
    reuseOpenedPopout?: boolean;
    zIndex?: number;
    noRemoveAfterClose?: boolean;
    onClose?: Function;
    onClosed?: Function;
    noAppendParentClass?: boolean;
};
export declare type copyOptionsType = {
    withoutAnimation?: boolean;
    customDataAttributeKey?: string;
    animationParentsNum?: number;
    animationDuration?: number | typeof defaultCopyAnimationDuration;
};
export declare type jNotificationType = jPopoutType;
export declare type notificationOptionsType = {
    exitIconURL?: string;
    isError?: boolean;
    parentElem?: elemType;
    zIndex?: number;
    reuseOpenedNotification?: boolean;
    animationDuration?: number | typeof defaultNotificationAnimationDuration;
    animationDurationError?: number | typeof defaultNotificationErrorAnimationDuration;
    notificationButtons?: HTMLElement | HTMLElement[];
    noRemoveAfterClose?: boolean;
    noRemoveContainerAfterClose?: boolean;
    elementOptions?: elementOptions;
};
export declare type tableOptionsType = {
    names: string[];
    keys: string[];
    tableName?: string;
    noClearTable?: boolean;
    parentElem?: getElementType;
    pe?: getElementType;
    noSort?: boolean;
    noSortAfter?: boolean;
    noCopy?: boolean;
    sortOptions?: sortTableOptionsType;
    nameClasses?: string[];
    search?: boolean;
};
export declare type sortTableOptionsType = {
    table: HTMLTableElement;
    tdNum?: number;
    sortMode?: number | 1 | 2;
    reverseIfSame?: boolean;
    sortAttributeNames?: string;
};
export declare type timeUnitInputOptionsType = {
    value: number;
    changeCallback: Function;
    minValue?: number;
};
