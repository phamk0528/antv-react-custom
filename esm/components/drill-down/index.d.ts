import React, { ReactNode } from 'react';
import './index.less';
export interface DataSet {
    icon?: React.ReactNode;
    name: string;
    value: string;
    type?: 'text' | 'location' | 'date';
    disabled?: boolean;
}
export interface DrillDownProps {
    className?: string;
    titleText?: string;
    searchText?: string;
    clearButtonText?: string;
    extra?: ReactNode;
    dataSet: DataSet[];
    drillFields?: string[];
    disabledFields?: string[];
    getDrillFields?: (drillFields: string[]) => void;
    setDrillFields?: (drillFields: string[]) => void;
}
export declare const DrillDown: React.FC<DrillDownProps>;
