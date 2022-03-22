import React from 'react';
import { SpreadSheet, SortParam, SortMethod } from '@antv/s2';
import './index.less';
export interface Dimension {
    field: string;
    name: string;
    list: string[];
}
export interface RuleOption {
    label: string;
    value: 'sortMethod' | 'sortBy' | 'sortByMeasure';
    children?: RuleOption[];
}
export interface RuleValue {
    field: string;
    name: string;
    sortMethod?: SortMethod;
    sortBy?: string[];
    sortByMeasure?: string;
}
export interface AdvancedSortCfgProps {
    open: boolean;
    className?: string;
    icon?: React.ReactNode;
    text?: string;
    ruleText?: string;
    dimensions?: Dimension[];
    ruleOptions?: RuleOption[];
    sortParams?: SortParam[];
    onSortOpen?: () => void;
    onSortConfirm?: (ruleValues: RuleValue[], sortParams: SortParam[]) => void;
}
export interface AdvancedSortProps extends AdvancedSortCfgProps {
    sheet: SpreadSheet;
}
export declare const AdvancedSort: React.FC<AdvancedSortProps>;
