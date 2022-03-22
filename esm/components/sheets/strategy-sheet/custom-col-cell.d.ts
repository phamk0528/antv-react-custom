import { ColCell, Node, SpreadSheet, ColHeaderConfig } from '@antv/s2';
/**
 * Cell for StrategySheet
 * -------------------------------------
 * |       root label      |
 * | label1 label2  label3 |
 * --------------------------------------
 */
export declare class CustomColCell extends ColCell {
    constructor(meta: Node, spreadsheet: SpreadSheet, headerConfig: ColHeaderConfig);
    protected drawTextShape(): void;
}
