import React, { FC, ReactNode } from 'react';
import { PageHeaderProps } from 'antd';
import { S2DataConfig, S2Options, SpreadSheet } from '@antv/s2';
import { ExportCfgProps } from '../export';
import { AdvancedSortCfgProps } from '../advanced-sort';
import { SwitcherCfgProps } from '../switcher/header';
import './index.less';
export interface HeaderCfgProps extends PageHeaderProps {
    width?: React.CSSProperties['width'];
    description?: ReactNode;
    exportCfg?: ExportCfgProps;
    advancedSortCfg?: AdvancedSortCfgProps;
    switcherCfg?: SwitcherCfgProps;
}
export interface HeaderProps extends HeaderCfgProps {
    dataCfg?: S2DataConfig;
    options?: S2Options;
    sheet: SpreadSheet;
}
export declare const Header: FC<HeaderProps>;
