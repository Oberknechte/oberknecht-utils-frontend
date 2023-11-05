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
    popout?: {
        closeIconURL?: string;
    };
};
