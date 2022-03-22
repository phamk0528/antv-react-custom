import { FC } from 'react';
import { FieldType } from '../constant';
import { SwitcherField, SwitcherItem } from '../interface';
import './index.less';
export interface DimensionCommonProps extends Pick<SwitcherField, 'selectable' | 'expandable'> {
    fieldType: FieldType;
    draggingItemId?: string;
    onVisibleItemChange: (fieldType: FieldType, checked: boolean, id: string, parentId?: string) => void;
}
export declare type DimensionItemProps = DimensionCommonProps & {
    index: number;
    item: SwitcherItem;
    expandChildren: boolean;
    isDragDisabled: boolean;
};
export declare const DimensionItem: FC<DimensionItemProps>;
