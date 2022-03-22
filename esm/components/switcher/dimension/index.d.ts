import { FC } from 'react';
import { DroppableType } from '../constant';
import { SwitcherField } from '../interface';
import { DimensionCommonProps } from '../item';
import './index.less';
declare type DimensionProps = SwitcherField & DimensionCommonProps & {
    droppableType: DroppableType;
    crossRows?: boolean;
};
export declare const Dimension: FC<DimensionProps>;
export {};
