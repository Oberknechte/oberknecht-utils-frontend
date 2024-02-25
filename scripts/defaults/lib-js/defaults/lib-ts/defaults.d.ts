import { copyOptionsType, createSwitchOptions, elemType, elementOptions, functionsSettingsType, getElementType, jPopoutType, notificationOptionsType, popoutOptionsType, sortTableOptionsType, tableOptionsType, timeUnitInputOptionsType, version } from "./types";
import { jChoose } from "../../jchoose/lib-ts/jchoose";
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
    static getUnitName: (value: number) => {
        unit: any;
        unitName: any;
        value: number;
    };
    static getUnitNum: (unitName: string) => any;
    static getUnitByNum: (num: number) => (string | number)[];
    static getUnit: (unit: string) => any;
    static toNumber: (inp: string | number) => number;
    static convertUnitToTime: (unit_: string, value: string | number) => number;
    static undefinedOnEmptyString: (s: string) => string;
    static localStorage: {
        new (): {};
        key: string;
        init: () => void;
        initIfNonexistent: () => void;
        getStorage: () => any;
        setStorage: (newStorage: any) => void;
        getKey: (keypath: any) => any;
        setKey: (keypath: any, value: any) => void;
        deleteKey: (keypath: any) => void;
        emptyCache: () => void;
    };
}
export declare class elements {
    #private;
    static createElement: <K extends string>(tagName: string | K, options?: elementOptions | elementOptions[]) => K extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[K] : HTMLElement;
    static parseLinks: (elemOrQuery: getElementType, target?: string, useMarkdownLinks?: boolean) => void;
    static parseADHD: (elemOrQuery: HTMLElement | string, boldLength?: number, noIgnoreLinks?: boolean, ignoreCheck?: Function) => void;
    static parseJSONText: (s: string | Record<string, any>) => string;
    static convertToArray: (a: any | any[]) => any[];
    static get getPopoutCount(): number;
    static popout: (popoutOptions_?: popoutOptionsType) => jPopoutType;
    static notification: (dat: string | Error | any, notificationOptions_?: notificationOptionsType) => void;
    static closeNotification: (notificationContainerElem?: elemType) => Promise<void>;
    static closeNotificationsAll: () => void;
    static closeErrorNotification: () => void;
    static createTable: (tableOptions: tableOptionsType) => HTMLDivElement;
    static sortTable: (options: sortTableOptionsType) => void;
    static timeUnitInput: (options: timeUnitInputOptionsType) => HTMLDivElement;
    static createSwitch: (switchOptionsOrEnabled?: createSwitchOptions | boolean, changeCallback?: Function) => HTMLDivElement;
    static hasParentAny: (elem: HTMLElement | EventTarget, parentElem: HTMLElement) => boolean;
    static jChoose: typeof jChoose;
}
export declare class elementModifiers {
    static tempClass: (elem: getElementType | getElementType[], classNames: string | string[], duration?: number, neverResolveOnForever?: boolean) => Promise<void[]>;
    static tempErrorHighlight: (elems: elemType | elemType[], duration?: number) => void;
    static disable: (elems: elemType | elemType[]) => void;
    static enable: (elems: elemType | elemType[]) => void;
}
