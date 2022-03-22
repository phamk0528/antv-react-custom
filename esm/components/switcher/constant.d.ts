/// <reference types="react" />
export declare const SWITCHER_PREFIX_CLS = "switcher";
export declare enum FieldType {
    Rows = "rows",
    Cols = "columns",
    Values = "values"
}
export declare enum DroppableType {
    Dimension = "dimension",
    Measure = "measure"
}
export declare const SWITCHER_FIELDS: FieldType[];
export declare const SWITCHER_CONFIG: {
    readonly rows: {
        readonly text: any;
        readonly icon: import("react").FC<{}>;
        readonly droppableType: DroppableType.Dimension;
    };
    readonly columns: {
        readonly text: any;
        readonly icon: import("react").FC<{}>;
        readonly droppableType: DroppableType.Dimension;
    };
    readonly values: {
        readonly text: any;
        readonly icon: import("react").FC<{}>;
        readonly droppableType: DroppableType.Measure;
    };
};
export declare const MAX_DIMENSION_COUNT = 3;
