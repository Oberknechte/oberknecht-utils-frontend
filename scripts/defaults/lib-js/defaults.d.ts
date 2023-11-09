import { elemType, elementOptions, functionsSettingsType, getElementType, jPopoutType, version } from "./types";
export declare class functions {
    static url: URL;
    static version: version;
    static settings: functionsSettingsType;
    static appendElementOptions: (element?: HTMLElement, options?: elementOptions) => void;
    static appendChildren: (elem: Node, ...children: Node[]) => void;
    static checkBrowser: () => boolean;
    static getElement: (elemOrQuery: elemType | string) => HTMLElement;
    static parseIconURL: (u: string, size?: string) => string;
}
export declare class elements {
    static createElement: <K extends string>(tagName: string | K, options?: elementOptions) => K extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[K] : HTMLElement;
    static parseLinks: (elemOrQuery: getElementType, target?: string, useMarkdownLinks?: boolean) => void;
    static parseADHD: (elemOrQuery: HTMLElement | string, boldLength?: number, noIgnoreLinks?: boolean, ignoreCheck?: Function) => void;
    static parseJSONText: (s: string | Record<string, any>) => string;
    static popout: (title: string, innerElems: elemType | elemType[], parentElem?: HTMLElement) => jPopoutType;
}
export declare class elementModifiers {
    static tempClass: (elem: getElementType, classNames: string | string[], duration?: number) => Promise<void>;
    static tempErrorHighlight: (elem: any, duration: any) => void;
    static disable: (elem: any) => void;
    static enable: (elem: any) => void;
}
