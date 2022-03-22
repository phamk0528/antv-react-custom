import { MenuProps } from 'antd';
import { TooltipOperatorOptions, S2CellType } from '@antv/s2';
import './index.less';
interface TooltipOperatorProps extends TooltipOperatorOptions {
    onlyMenu: boolean;
    onClick: MenuProps['onClick'];
    cell: S2CellType;
}
/**
 * tooltip menu
 *  - UI
 *  - actions
 *    delay 300ms show
 */
export declare const TooltipOperator: (props: TooltipOperatorProps) => JSX.Element;
export {};
