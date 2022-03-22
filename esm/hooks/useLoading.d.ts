import React from 'react';
import { SpreadSheet } from '@antv/s2';
export declare const useLoading: (s2: SpreadSheet, loadingFromProps?: boolean) => {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
