import React from 'react';
import { SpreadSheet } from '@antv/s2';
import { BaseSheetComponentProps } from '../components';
export declare const usePagination: (s2: SpreadSheet, props: BaseSheetComponentProps) => {
    total: number;
    current: number;
    pageSize: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
    setCurrent: React.Dispatch<React.SetStateAction<number>>;
    setPageSize: React.Dispatch<React.SetStateAction<number>>;
};
