import { DataCell } from '@antv/s2';
/**
 * Cell for panelGroup area
 * -------------------------------------
 * | label                              |
 * | measureLabel  |  measure | measure |
 * | measureLabel  |  measure | measure |
 * --------------------------------------
 */
export declare class CustomCell extends DataCell {
    /**
     * Render cell main text
     */
    protected drawTextShape(): void;
}
