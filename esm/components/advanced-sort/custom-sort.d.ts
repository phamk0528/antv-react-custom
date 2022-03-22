import React from 'react';
export interface CustomSortProps {
    splitOrders: string[];
    setSplitOrders: (param: string[]) => void;
}
export declare const CustomSort: React.FC<CustomSortProps>;
