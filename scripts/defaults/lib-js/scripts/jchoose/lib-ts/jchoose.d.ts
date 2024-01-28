import { jChooseOptions, jChooseOptionsOptionArr as jChooseOptionOptionArr } from "./types";
export declare class jChoose {
    #private;
    get symbol(): string;
    get chooseOptions(): jChooseOptionOptionArr[];
    constructor();
    choose: (options?: jChooseOptions) => void;
    createChoose: (originalSelect: HTMLSelectElement) => void;
    values: () => string[];
}
