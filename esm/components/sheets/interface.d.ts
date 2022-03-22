import { S2DataConfig, S2Options, CellScrollPosition, TargetCellInfo, ResizeParams, S2Constructor, Node, SpreadSheet, ThemeCfg, ViewMeta, LayoutResult, SortParams, DataCell, Data, GEvent, HiddenColumnsInfo, CollapsedRowsType, DataType, ResizeInfo } from '@antv/s2';
import React from 'react';
import { DrillDownProps } from "../drill-down";
import { HeaderCfgProps } from "../header";
export declare type SheetType = 'pivot' | 'table' | 'gridAnalysis' | 'strategy';
export interface SheetComponentsProps extends BaseSheetComponentProps {
    sheetType?: SheetType;
}
export interface BaseSheetProps extends SheetComponentsProps {
    s2Ref?: React.MutableRefObject<SpreadSheet>;
    containerRef?: React.MutableRefObject<HTMLDivElement>;
    pagination?: {
        total: number;
        current: number;
        pageSize: number;
        setTotal: (value: number) => void;
        setCurrent: (value: number) => void;
        setPageSize: (value: number) => void;
    };
}
export interface PartDrillDownInfo {
    drillData: Record<string, string | number>[];
    drillField: string;
}
export interface PartDrillDown {
    drillConfig: DrillDownProps;
    drillItemsNum?: number;
    fetchData: (meta: Node, drillFields: string[]) => Promise<PartDrillDownInfo>;
    clearDrillDown?: {
        rowId: string;
    };
    displayCondition?: (meta: Node) => boolean;
}
export declare type Adaptive = boolean | {
    width?: boolean;
    height?: boolean;
    getContainer?: () => HTMLElement;
};
export interface BaseSheetComponentProps {
    spreadsheet?: (...args: S2Constructor) => SpreadSheet;
    dataCfg: S2DataConfig;
    options: S2Options;
    loading?: boolean;
    partDrillDown?: PartDrillDown;
    adaptive?: Adaptive;
    showPagination?: boolean | {
        onShowSizeChange?: (pageSize: number) => void;
        onChange?: (current: number) => void;
    };
    themeCfg?: ThemeCfg;
    header?: HeaderCfgProps;
    getSpreadSheet?: (spreadsheet: SpreadSheet) => void;
    onRowCellHover?: (data: TargetCellInfo) => void;
    onRowCellClick?: (data: TargetCellInfo) => void;
    onRowCellDoubleClick?: (data: TargetCellInfo) => void;
    onRowCellMouseDown?: (data: TargetCellInfo) => void;
    onRowCellMouseUp?: (data: TargetCellInfo) => void;
    onRowCellMouseMove?: (data: TargetCellInfo) => void;
    onRowCellCollapseTreeRows?: (params: {
        id: number;
        isCollapsed: boolean;
        node: Node;
    }) => void;
    onColCellHover?: (data: TargetCellInfo) => void;
    onColCellClick?: (data: TargetCellInfo) => void;
    onColCellDoubleClick?: (data: TargetCellInfo) => void;
    onColCellMouseDown?: (data: TargetCellInfo) => void;
    onColCellMouseUp?: (data: TargetCellInfo) => void;
    onColCellMouseMove?: (data: TargetCellInfo) => void;
    onDataCellHover?: (data: TargetCellInfo) => void;
    onDataCellClick?: (data: TargetCellInfo) => void;
    onDataCellDoubleClick?: (data: TargetCellInfo) => void;
    onDataCellMouseDown?: (data: TargetCellInfo) => void;
    onDataCellMouseUp?: (data: TargetCellInfo) => void;
    onDataCellMouseMove?: (data: TargetCellInfo) => void;
    onDataCellTrendIconClick?: (meta: ViewMeta) => void;
    onDataCellBrushSelection?: (brushRangeDataCells: DataCell[]) => void;
    onCornerCellHover?: (data: TargetCellInfo) => void;
    onCornerCellClick?: (data: TargetCellInfo) => void;
    onCornerCellDoubleClick?: (data: TargetCellInfo) => void;
    onCornerCellMouseDown?: (data: TargetCellInfo) => void;
    onCornerCellMouseUp?: (data: TargetCellInfo) => void;
    onCornerCellMouseMove?: (data: TargetCellInfo) => void;
    onMergedCellsHoverer?: (data: TargetCellInfo) => void;
    onMergedCellClick?: (data: TargetCellInfo) => void;
    onMergedCellsDoubleClick?: (data: TargetCellInfo) => void;
    onMergedCellsMouseDown?: (data: TargetCellInfo) => void;
    onMergedCellsMouseUp?: (data: TargetCellInfo) => void;
    onMergedCellsMouseMove?: (data: TargetCellInfo) => void;
    onRangeSort?: (params: SortParams) => void;
    onRangeSorted?: (event: GEvent) => void;
    onRangeFilter?: (data: {
        filterKey: string;
        filteredValues: string[];
    }) => void;
    onRangeFiltered?: (data: DataType[]) => void;
    onLayoutAfterHeaderLayout?: (layoutResult: LayoutResult) => void;
    onLayoutPagination?: (data: {
        pageSize: number;
        pageCount: number;
        total: number;
        current: number;
    }) => void;
    onLayoutCellScroll?: (position: CellScrollPosition) => void;
    onLayoutAfterCollapseRows?: (data: CollapsedRowsType) => void;
    onCollapseRowsAll?: (hierarchyCollapse: boolean) => void;
    onLayoutColsExpanded?: (node: Node) => void;
    onLayoutColsHidden?: (data: {
        currentHiddenColumnsInfo: HiddenColumnsInfo;
        hiddenColumnsDetail: HiddenColumnsInfo[];
    }) => void;
    onBeforeRender?: () => void;
    onAfterRender?: () => void;
    onDestroy?: () => void;
    onLayoutResize?: (params: ResizeParams) => void;
    onLayoutResizeSeriesWidth?: (params: ResizeParams) => void;
    onLayoutResizeRowWidth?: (params: ResizeParams) => void;
    onLayoutResizeRowHeight?: (params: ResizeParams) => void;
    onLayoutResizeColWidth?: (params: ResizeParams) => void;
    onLayoutResizeColHeight?: (params: ResizeParams) => void;
    onLayoutResizeTreeWidth?: (params: ResizeParams) => void;
    onLayoutResizeMouseDown?: (data: {
        event: Partial<MouseEvent>;
        resizeInfo?: ResizeInfo;
    }) => void;
    onLayoutResizeMouseUp?: (data: {
        event: Partial<MouseEvent>;
        resizeInfo?: ResizeInfo;
    }) => void;
    onLayoutResizeMouseMove?: (data: {
        event: Partial<MouseEvent>;
        resizeInfo?: ResizeInfo;
    }) => void;
    onKeyBoardDown?: (event: KeyboardEvent) => void;
    onKeyBoardUp?: (event: KeyboardEvent) => void;
    onCopied?: (copyData: string) => void;
    onActionIconHover?: (event: GEvent) => void;
    onActionIconClick?: (event: GEvent) => void;
    onContextMenu?: (event: GEvent) => void;
    onMouseHover?: (event: GEvent) => void;
    onMouseUp?: (event: MouseEvent) => void;
    onSelected?: (cells: DataCell[]) => void;
    onReset?: (event: KeyboardEvent) => void;
    onLinkFieldJump?: (data: {
        key: string;
        record: Data;
    }) => void;
}
