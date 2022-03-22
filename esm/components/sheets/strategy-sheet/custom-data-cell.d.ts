import { DataCell } from '@antv/s2';
/**
 * Cell for panelGroup area
 * -------------------------------------
 * | measure1 measure2  measure3 |
 * | measure1 measure2  measure3 |
 * --------------------------------------
 */
export declare class CustomDataCell extends DataCell {
    /**
     * Render cell main text
     */
    protected drawTextShape(): void;
}
