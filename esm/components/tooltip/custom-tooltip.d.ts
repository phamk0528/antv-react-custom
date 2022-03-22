import { BaseTooltip, SpreadSheet } from '@antv/s2';
export declare class CustomTooltip extends BaseTooltip {
    constructor(spreadsheet: SpreadSheet);
    renderContent(): void;
    destroy(): void;
}
