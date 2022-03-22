import { S2Event, SpreadSheet, TargetCellInfo } from '@antv/s2';
import { BaseSheetComponentProps } from "../components";
export declare const useCellEvent: (eventName: S2Event, handler: (data: TargetCellInfo) => void, s2: SpreadSheet) => void;
export declare const useS2Event: (eventName: S2Event, handler: (args: unknown) => void, s2: SpreadSheet) => void;
export declare function useEvents(props: BaseSheetComponentProps, s2: SpreadSheet): void;
