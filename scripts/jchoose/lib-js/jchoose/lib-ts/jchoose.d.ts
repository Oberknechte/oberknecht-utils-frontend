import { jChooseOptions } from "./types";
export declare class jChoose {
    #private;
    get symbol(): string;
    constructor();
    choose: (options?: jChooseOptions) => void;
    createChoose: (originalSelect: HTMLSelectElement) => void;
    values: () => string[];
}
