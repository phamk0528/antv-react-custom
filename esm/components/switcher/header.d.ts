import { FC } from 'react';
import { S2DataConfig, S2Options, SpreadSheet } from '@antv/s2';
import { SwitcherProps } from '.';
import './index.less';
declare type SwitcherBasicCfg = Pick<SwitcherProps, 'title' | 'resetText' | 'innerContentClassName' | 'contentTitleText' | 'popover'>;
export interface SwitcherCfgProps extends SwitcherBasicCfg {
    open: boolean;
}
export interface SwitcherHeaderProps extends SwitcherBasicCfg {
    sheet: SpreadSheet;
    dataCfg: S2DataConfig;
    options: S2Options;
}
export declare const SwitcherHeader: FC<SwitcherHeaderProps>;
export {};
