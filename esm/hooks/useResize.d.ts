import type { SpreadSheet } from '@antv/s2';
import { Adaptive } from "../components";
export interface UseResizeEffectParams {
    container: HTMLDivElement;
    wrapper: HTMLDivElement;
    s2: SpreadSheet;
    adaptive: Adaptive;
    optionWidth: number;
    optionHeight: number;
}
export declare const useResize: (params: UseResizeEffectParams) => void;
