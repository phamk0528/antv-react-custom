import { S2DataConfig, SpreadSheet, Fields, Meta } from '@antv/s2';
import { SwitcherFields, SwitcherResult } from './interface';
export declare const generateSwitcherFields: (sheet: SpreadSheet, { fields, meta }?: Pick<S2DataConfig, "meta" | "fields">, hiddenColumnFields?: string[]) => SwitcherFields;
export declare const generateSheetConfig: (sheet: SpreadSheet, result: SwitcherResult) => {
    fields: Fields;
    hiddenColumnFields: string[];
};
export declare const getSwitcherFields: (result: SwitcherResult) => {
    fields: Fields;
    hiddenFields: string[];
};
export declare const generateSwitcherFieldsCfgFromResult: (sheet: SpreadSheet, result: SwitcherResult, meta?: Meta[], hiddenColumnFields?: string[]) => SwitcherFields;
