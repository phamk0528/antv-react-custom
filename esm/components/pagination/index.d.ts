import React from 'react';
import { Pagination } from '@antv/s2';
export interface S2PaginationProps {
    pagination: Pagination;
    current: number;
    total: number;
    pageSize?: number;
    setCurrent?: (current: number) => void;
    setPageSize?: (pageSize: number) => void;
    onShowSizeChange?: (pageSize: number) => void;
    onChange?: (current: number) => void;
}
export declare const S2Pagination: React.FC<S2PaginationProps>;
