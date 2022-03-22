import React from 'react';
import './html-icon.less';
export interface HtmlIconProps {
    name: string;
    style?: any;
    width?: number;
    height?: number;
    className?: string;
}
export declare class HtmlIcon extends React.PureComponent<HtmlIconProps> {
    render(): JSX.Element;
}
