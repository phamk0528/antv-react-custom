import { S2Options, SpreadSheet } from '@antv/s2';
import React from 'react';
import type { BaseSheetComponentProps, SheetType } from '../components';
export interface UseSpreadSheetConfig {
    s2Options?: S2Options;
    sheetType: SheetType;
}
export declare function useSpreadSheet(props: BaseSheetComponentProps, config: UseSpreadSheetConfig): {
    s2Ref: React.MutableRefObject<SpreadSheet>;
    containerRef: React.MutableRefObject<HTMLDivElement>;
    wrapRef: React.MutableRefObject<HTMLDivElement>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    pagination: {
        total: number;
        current: number;
        pageSize: number;
        setTotal: React.Dispatch<React.SetStateAction<number>>;
        setCurrent: React.Dispatch<React.SetStateAction<number>>;
        setPageSize: React.Dispatch<React.SetStateAction<number>>;
    };
};
