import { S2Options, SpreadSheet, Node, HeaderActionIcon, PartDrillDownDataCache, GEvent } from '@antv/s2';
import React from 'react';
import { PartDrillDownInfo, SheetComponentsProps } from "../components";
export interface DrillDownParams {
    rows: string[];
    drillFields: string[];
    spreadsheet: SpreadSheet;
    drillItemsNum?: number;
    fetchData?: (meta: Node, drillFields: string[]) => Promise<PartDrillDownInfo>;
}
export interface ActionIconParams {
    meta: Node;
    iconName: string;
    event?: GEvent;
    spreadsheet: SpreadSheet;
    callback: (spreadsheet: SpreadSheet, cacheDrillFields: string[], disabledFields: string[], event?: GEvent) => void;
}
/**
 * 获取下钻缓存
 * @param spreadsheet
 * @param meta
 */
export declare const getDrillDownCache: (spreadsheet: SpreadSheet, meta: Node) => {
    drillDownDataCache: PartDrillDownDataCache[];
    drillDownCurrentCache: PartDrillDownDataCache;
};
/**
 * 点击下钻Icon的响应
 * @param params
 */
export declare const handleActionIconClick: (params: ActionIconParams) => void;
export declare const handleDrillDownIcon: (props: SheetComponentsProps, spreadsheet: SpreadSheet, callback: (spreadsheet: SpreadSheet, cacheDownDrillFields: string[], disabledFields: string[], event?: GEvent) => void, drillDownIconRef: React.MutableRefObject<HeaderActionIcon>) => S2Options;
export declare const handleDrillDown: (params: DrillDownParams) => void;
