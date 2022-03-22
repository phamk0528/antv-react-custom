import { PopoverProps } from 'antd';
import { FC, ReactNode } from 'react';
import { SwitcherContentProps } from './content';
import './index.less';
export interface SwitcherProps extends Omit<SwitcherContentProps, 'onToggleVisible'> {
    title?: ReactNode;
    popover?: PopoverProps;
}
export declare const Switcher: FC<SwitcherProps>;
