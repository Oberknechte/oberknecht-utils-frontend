import { elementOptions } from "./types";
export declare class functions {
    static appendElementOptions: (element?: HTMLElement, options?: elementOptions) => void;
    static appendChildren: (elem: Node, ...children: Node[]) => void;
    static checkBrowser: () => boolean;
    static selectElem: (elemOrQuery: HTMLElement | string) => HTMLElement;
}
export declare class elements {
    static createElement: <K extends string>(tagName: string | K, options?: elementOptions) => K extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[K] : HTMLElement;
    static parseLinks: (elemOrQuery: HTMLElement | string, target?: string, useMarkdownLinks?: boolean) => void;
    static parseADHD: (elemOrQuery: HTMLElement | string, boldLength?: number, noIgnoreLinks?: boolean, ignoreCheck?: Function) => void;
    static parseJSONText: (s: string | Record<string, any>) => string;
}
