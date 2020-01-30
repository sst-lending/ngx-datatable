/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * @record
 */
export function ISummaryColumn() { }
if (false) {
    /** @type {?|undefined} */
    ISummaryColumn.prototype.summaryFunc;
    /** @type {?|undefined} */
    ISummaryColumn.prototype.summaryTemplate;
    /** @type {?} */
    ISummaryColumn.prototype.prop;
    /** @type {?|undefined} */
    ISummaryColumn.prototype.pipe;
}
/**
 * @param {?} cells
 * @return {?}
 */
function defaultSumFunc(cells) {
    /** @type {?} */
    const cellsWithValues = cells.filter((/**
     * @param {?} cell
     * @return {?}
     */
    cell => !!cell));
    if (!cellsWithValues.length) {
        return null;
    }
    if (cellsWithValues.some((/**
     * @param {?} cell
     * @return {?}
     */
    cell => typeof cell !== 'number'))) {
        return null;
    }
    return cellsWithValues.reduce((/**
     * @param {?} res
     * @param {?} cell
     * @return {?}
     */
    (res, cell) => res + cell));
}
/**
 * @param {?} cells
 * @return {?}
 */
function noopSumFunc(cells) {
    return null;
}
export class DataTableSummaryRowComponent {
    constructor() {
        this.summaryRow = {};
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (!this.columns || !this.rows) {
            return;
        }
        this.updateInternalColumns();
        this.updateValues();
    }
    /**
     * @private
     * @return {?}
     */
    updateInternalColumns() {
        this._internalColumns = this.columns.map((/**
         * @param {?} col
         * @return {?}
         */
        col => (Object.assign({}, col, { cellTemplate: col.summaryTemplate }))));
    }
    /**
     * @private
     * @return {?}
     */
    updateValues() {
        this.summaryRow = {};
        this.columns
            .filter((/**
         * @param {?} col
         * @return {?}
         */
        col => !col.summaryTemplate))
            .forEach((/**
         * @param {?} col
         * @return {?}
         */
        col => {
            /** @type {?} */
            const cellsFromSingleColumn = this.rows.map((/**
             * @param {?} row
             * @return {?}
             */
            row => row[col.prop]));
            /** @type {?} */
            const sumFunc = this.getSummaryFunction(col);
            this.summaryRow[col.prop] = col.pipe
                ? col.pipe.transform(sumFunc(cellsFromSingleColumn))
                : sumFunc(cellsFromSingleColumn);
        }));
    }
    /**
     * @private
     * @param {?} column
     * @return {?}
     */
    getSummaryFunction(column) {
        if (column.summaryFunc === undefined) {
            return defaultSumFunc;
        }
        else if (column.summaryFunc === null) {
            return noopSumFunc;
        }
        else {
            return column.summaryFunc;
        }
    }
}
DataTableSummaryRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'datatable-summary-row',
                template: `
    <datatable-body-row
      *ngIf="summaryRow && _internalColumns"
      tabindex="-1"
      [innerWidth]="innerWidth"
      [offsetX]="offsetX"
      [columns]="_internalColumns"
      [rowHeight]="rowHeight"
      [row]="summaryRow"
      [rowIndex]="-1"
    >
    </datatable-body-row>
  `,
                host: {
                    class: 'datatable-summary-row'
                }
            }] }
];
DataTableSummaryRowComponent.propDecorators = {
    rows: [{ type: Input }],
    columns: [{ type: Input }],
    rowHeight: [{ type: Input }],
    offsetX: [{ type: Input }],
    innerWidth: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DataTableSummaryRowComponent.prototype.rows;
    /** @type {?} */
    DataTableSummaryRowComponent.prototype.columns;
    /** @type {?} */
    DataTableSummaryRowComponent.prototype.rowHeight;
    /** @type {?} */
    DataTableSummaryRowComponent.prototype.offsetX;
    /** @type {?} */
    DataTableSummaryRowComponent.prototype.innerWidth;
    /** @type {?} */
    DataTableSummaryRowComponent.prototype._internalColumns;
    /** @type {?} */
    DataTableSummaryRowComponent.prototype.summaryRow;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN3aW1sYW5lL25neC1kYXRhdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9ib2R5L3N1bW1hcnkvc3VtbWFyeS1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBeUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEYsb0NBTUM7OztJQUxDLHFDQUFvQzs7SUFDcEMseUNBQW1DOztJQUVuQyw4QkFBYTs7SUFDYiw4QkFBcUI7Ozs7OztBQUd2QixTQUFTLGNBQWMsQ0FBQyxLQUFZOztVQUM1QixlQUFlLEdBQUcsS0FBSyxDQUFDLE1BQU07Ozs7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUM7SUFFcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7UUFDM0IsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELElBQUksZUFBZSxDQUFDLElBQUk7Ozs7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBQyxFQUFFO1FBQzFELE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxPQUFPLGVBQWUsQ0FBQyxNQUFNOzs7OztJQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksRUFBQyxDQUFDO0FBQzNELENBQUM7Ozs7O0FBRUQsU0FBUyxXQUFXLENBQUMsS0FBWTtJQUMvQixPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFxQkQsTUFBTSxPQUFPLDRCQUE0QjtJQW5CekM7UUE0QkUsZUFBVSxHQUFRLEVBQUUsQ0FBQztJQXlDdkIsQ0FBQzs7OztJQXZDQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQy9CLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVPLHFCQUFxQjtRQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxtQkFDM0MsR0FBRyxJQUNOLFlBQVksRUFBRSxHQUFHLENBQUMsZUFBZSxJQUNqQyxFQUFDLENBQUM7SUFDTixDQUFDOzs7OztJQUVPLFlBQVk7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLE9BQU87YUFDVCxNQUFNOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUM7YUFDbkMsT0FBTzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFOztrQkFDUCxxQkFBcUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7WUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUM7O2tCQUMzRCxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQztZQUU1QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSTtnQkFDbEMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUNwRCxDQUFDLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxNQUFzQjtRQUMvQyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ3BDLE9BQU8sY0FBYyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxNQUFNLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUN0QyxPQUFPLFdBQVcsQ0FBQztTQUNwQjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7O1lBcEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztHQVlUO2dCQUNELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsdUJBQXVCO2lCQUMvQjthQUNGOzs7bUJBRUUsS0FBSztzQkFDTCxLQUFLO3dCQUVMLEtBQUs7c0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzs7O0lBTE4sNENBQXFCOztJQUNyQiwrQ0FBbUM7O0lBRW5DLGlEQUEyQjs7SUFDM0IsK0NBQXlCOztJQUN6QixrREFBNEI7O0lBRTVCLHdEQUFtQzs7SUFDbkMsa0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBQaXBlVHJhbnNmb3JtLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3VtbWFyeUNvbHVtbiB7XHJcbiAgc3VtbWFyeUZ1bmM/OiAoY2VsbHM6IGFueVtdKSA9PiBhbnk7XHJcbiAgc3VtbWFyeVRlbXBsYXRlPzogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgcHJvcDogc3RyaW5nO1xyXG4gIHBpcGU/OiBQaXBlVHJhbnNmb3JtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWZhdWx0U3VtRnVuYyhjZWxsczogYW55W10pOiBhbnkge1xyXG4gIGNvbnN0IGNlbGxzV2l0aFZhbHVlcyA9IGNlbGxzLmZpbHRlcihjZWxsID0+ICEhY2VsbCk7XHJcblxyXG4gIGlmICghY2VsbHNXaXRoVmFsdWVzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGlmIChjZWxsc1dpdGhWYWx1ZXMuc29tZShjZWxsID0+IHR5cGVvZiBjZWxsICE9PSAnbnVtYmVyJykpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNlbGxzV2l0aFZhbHVlcy5yZWR1Y2UoKHJlcywgY2VsbCkgPT4gcmVzICsgY2VsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vb3BTdW1GdW5jKGNlbGxzOiBhbnlbXSk6IHZvaWQge1xyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RhdGF0YWJsZS1zdW1tYXJ5LXJvdycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkYXRhdGFibGUtYm9keS1yb3dcclxuICAgICAgKm5nSWY9XCJzdW1tYXJ5Um93ICYmIF9pbnRlcm5hbENvbHVtbnNcIlxyXG4gICAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgW2lubmVyV2lkdGhdPVwiaW5uZXJXaWR0aFwiXHJcbiAgICAgIFtvZmZzZXRYXT1cIm9mZnNldFhcIlxyXG4gICAgICBbY29sdW1uc109XCJfaW50ZXJuYWxDb2x1bW5zXCJcclxuICAgICAgW3Jvd0hlaWdodF09XCJyb3dIZWlnaHRcIlxyXG4gICAgICBbcm93XT1cInN1bW1hcnlSb3dcIlxyXG4gICAgICBbcm93SW5kZXhdPVwiLTFcIlxyXG4gICAgPlxyXG4gICAgPC9kYXRhdGFibGUtYm9keS1yb3c+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2RhdGF0YWJsZS1zdW1tYXJ5LXJvdydcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVTdW1tYXJ5Um93Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSByb3dzOiBhbnlbXTtcclxuICBASW5wdXQoKSBjb2x1bW5zOiBJU3VtbWFyeUNvbHVtbltdO1xyXG5cclxuICBASW5wdXQoKSByb3dIZWlnaHQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBvZmZzZXRYOiBudW1iZXI7XHJcbiAgQElucHV0KCkgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG5cclxuICBfaW50ZXJuYWxDb2x1bW5zOiBJU3VtbWFyeUNvbHVtbltdO1xyXG4gIHN1bW1hcnlSb3c6IGFueSA9IHt9O1xyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICghdGhpcy5jb2x1bW5zIHx8ICF0aGlzLnJvd3MpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVJbnRlcm5hbENvbHVtbnMoKTtcclxuICAgIHRoaXMudXBkYXRlVmFsdWVzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUludGVybmFsQ29sdW1ucygpIHtcclxuICAgIHRoaXMuX2ludGVybmFsQ29sdW1ucyA9IHRoaXMuY29sdW1ucy5tYXAoY29sID0+ICh7XHJcbiAgICAgIC4uLmNvbCxcclxuICAgICAgY2VsbFRlbXBsYXRlOiBjb2wuc3VtbWFyeVRlbXBsYXRlXHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVZhbHVlcygpIHtcclxuICAgIHRoaXMuc3VtbWFyeVJvdyA9IHt9O1xyXG5cclxuICAgIHRoaXMuY29sdW1uc1xyXG4gICAgICAuZmlsdGVyKGNvbCA9PiAhY29sLnN1bW1hcnlUZW1wbGF0ZSlcclxuICAgICAgLmZvckVhY2goY29sID0+IHtcclxuICAgICAgICBjb25zdCBjZWxsc0Zyb21TaW5nbGVDb2x1bW4gPSB0aGlzLnJvd3MubWFwKHJvdyA9PiByb3dbY29sLnByb3BdKTtcclxuICAgICAgICBjb25zdCBzdW1GdW5jID0gdGhpcy5nZXRTdW1tYXJ5RnVuY3Rpb24oY29sKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdW1tYXJ5Um93W2NvbC5wcm9wXSA9IGNvbC5waXBlXHJcbiAgICAgICAgICA/IGNvbC5waXBlLnRyYW5zZm9ybShzdW1GdW5jKGNlbGxzRnJvbVNpbmdsZUNvbHVtbikpXHJcbiAgICAgICAgICA6IHN1bUZ1bmMoY2VsbHNGcm9tU2luZ2xlQ29sdW1uKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFN1bW1hcnlGdW5jdGlvbihjb2x1bW46IElTdW1tYXJ5Q29sdW1uKTogKGE6IGFueVtdKSA9PiBhbnkge1xyXG4gICAgaWYgKGNvbHVtbi5zdW1tYXJ5RnVuYyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBkZWZhdWx0U3VtRnVuYztcclxuICAgIH0gZWxzZSBpZiAoY29sdW1uLnN1bW1hcnlGdW5jID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBub29wU3VtRnVuYztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjb2x1bW4uc3VtbWFyeUZ1bmM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==