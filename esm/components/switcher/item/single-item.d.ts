import { FC } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
import { SwitcherField, SwitcherItem } from '../interface';
import { DimensionCommonProps } from "./";
declare type SingleItemProps = Omit<SwitcherItem, 'children'> & Pick<SwitcherField, 'selectable'> & DimensionCommonProps & {
    parentId?: string;
    disabled?: boolean;
    className: string;
    dragHandleProps?: DraggableProvided['dragHandleProps'];
};
export declare const SingleItem: FC<SingleItemProps>;
export {};
