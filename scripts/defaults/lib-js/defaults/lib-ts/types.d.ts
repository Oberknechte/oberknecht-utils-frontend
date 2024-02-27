export declare const defaultExitIconURL: "https://raw.githubusercontent.com/Oberknechte/oberknecht-utils-frontend/main/img/x-red-48x48.png";
export declare const defaultCopyAnimationDuration: 5000;
export declare const defaultNotificationAnimationDuration: 5000;
export declare const defaultNotificationErrorAnimationDuration: -1;
export declare type elementOptionsExtra = {
    classes?: string | string[];
    childNodes?: HTMLElement | HTMLElement[];
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
    onclose?: (byUser?: boolean) => {};
};
export declare type tableOptionsType = {
    names: string[];
    keys: any[];
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
    searchOptions?: tableSearchOptionsType;
    dropdownSort?: boolean;
    dropdownSortOptions?: tableOptionsDropdownSortOptionEntry[];
    filters?: boolean;
    filtersOptions?: {
        entries?: tableOptionsFiltersEntry[];
        showDropdownByDefault?: boolean;
        buttonOptions?: elementOptions;
    };
    entriesDisplay?: boolean;
};
export declare type tableOptionsDropdownSortOptionEntry = {
    name: string;
    tdNum: number;
    sortMode: 1 | 2 | number;
    attributeName?: string;
    default?: boolean;
};
export declare type tableOptionsFiltersEntry = {
    name: string;
    attributeName: string;
    value?: string;
    enabledDefault?: boolean;
    method?: "includes";
    splitter?: string;
    tdNums?: number | number[];
    entryOptions?: elementOptions;
};
export declare type tableOptionsFilterEntryInternal = {
    attributeName: string;
    value?: string;
    enabled?: boolean;
    tdNums?: number | number[];
    method?: "includes";
    splitter?: string;
};
declare type tableSearchCallbackFunctionResolveType = {
    keys: any[];
};
declare type tableSearchCallbackFunctionPromiseType = Promise<tableSearchCallbackFunctionResolveType>;
declare type tableSearchCallbackFunctionType = (callbackSearchData: {
    query: string;
    queryRegex: typeof RegExp;
}) => tableSearchCallbackFunctionPromiseType;
export declare type tableSearchOptionsType = {
    callback?: tableSearchCallbackFunctionType;
    inputPlaceholder?: string;
    searchStopDelay?: number;
    searchAttributeNames?: string[][];
    tdNums?: number | number[];
    tdAttributes?: string[];
    allowRegexQuery?: boolean;
};
export declare type sortTableOptionsType = {
    table?: HTMLTableElement;
    tdNum?: number;
    sortMode?: number | 1 | 2;
    reverseIfSame?: boolean;
    sortAttributeNames?: string | string[];
};
export declare type timeUnitInputOptionsType = {
    value: number;
    changeCallback: Function;
    minValue?: number;
};
export declare type createSwitchOptions = {
    enabled?: boolean;
    changeCallback?: Function;
    stateOnReject?: boolean;
};
export {};
