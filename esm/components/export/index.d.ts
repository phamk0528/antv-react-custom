import React from 'react';
import { SpreadSheet } from '@antv/s2';
export interface DataSet {
    icon?: React.ReactNode;
    name: string;
    value: string;
    type?: 'text' | 'location' | 'date';
    disabled?: boolean;
}
export interface ExportCfgProps {
    open: boolean;
    className?: string;
    icon?: React.ReactNode;
    copyOriginalText?: string;
    copyFormatText?: string;
    downloadOriginalText?: string;
    downloadFormatText?: string;
    successText?: string;
    errorText?: string;
    fileName?: string;
    syncCopy?: boolean;
}
export interface ExportProps extends ExportCfgProps {
    sheet: SpreadSheet;
}
export declare const Export: React.FC<ExportProps>;
