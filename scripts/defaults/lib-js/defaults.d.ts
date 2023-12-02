import { copyOptionsType, elemType, elementOptions, functionsSettingsType, getElementType, jPopoutType, notificationOptionsType, popoutOptionsType, sortTableOptionsType, tableOptionsType, version } from "./types";
export declare class functions {
    static url: URL;
    static version: version;
    static options: functionsSettingsType;
    static appendElementOptions: (element?: HTMLElement, options?: elementOptions) => void;
    static appendChildren: (elem: Node, ...children: Node[]) => void;
    static checkBrowser: () => boolean;
    static getParent: (elem: HTMLElement, number?: number) => any;
    static getElement: (elemOrQuery: elemType | string) => HTMLElement;
    static getElements: (elemsOrQuerys: (elemType | string) | (elemType | string)[]) => HTMLElement[];
    static parseIconURL: (u: string, size?: string) => string;
    static copy: (elemOrData: any, copyOptions_?: copyOptionsType) => Promise<void>;
    static isHTMLElement: (elem: any) => boolean;
}
export declare class elements {
    #private;
    static createElement: <K extends string>(tagName: string | K, options?: elementOptions) => K extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[K] : HTMLElement;
    static parseLinks: (elemOrQuery: getElementType, target?: string, useMarkdownLinks?: boolean) => void;
    static parseADHD: (elemOrQuery: HTMLElement | string, boldLength?: number, noIgnoreLinks?: boolean, ignoreCheck?: Function) => void;
    static parseJSONText: (s: string | Record<string, any>) => string;
    static convertToArray: (a: any | any[]) => any[];
    static get getPopoutCount(): number;
    static popout: (popoutOptions_?: popoutOptionsType) => jPopoutType;
    static notification: (dat: string | Error | any, notificationOptions_?: notificationOptionsType) => void;
    static createTable: (tableOptions: tableOptionsType) => HTMLTableElement;
    static sortTable: (options: sortTableOptionsType) => void;
}
export declare class elementModifiers {
    static tempClass: (elem: getElementType | getElementType[], classNames: string | string[], duration?: number, neverResolveOnForever?: boolean) => Promise<void[]>;
    static tempErrorHighlight: (elems: elemType | elemType[], duration?: number) => void;
    static disable: (elems: elemType | elemType[]) => void;
    static enable: (elems: elemType | elemType[]) => void;
}
