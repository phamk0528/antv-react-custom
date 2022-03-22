import React from 'react';
import { SwitcherFields, SwitcherResult } from '../interface';
import './index.less';
export interface SwitcherContentRef {
    getResult: () => SwitcherResult;
}
export interface SwitcherContentProps extends SwitcherFields {
    contentTitleText?: string;
    resetText?: string;
    innerContentClassName?: string;
    onToggleVisible: () => void;
    onSubmit?: (result: SwitcherResult) => void;
}
export declare const SwitcherContent: React.FC<SwitcherContentProps>;
