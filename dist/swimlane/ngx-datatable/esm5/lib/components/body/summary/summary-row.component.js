/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
    var cellsWithValues = cells.filter((/**
     * @param {?} cell
     * @return {?}
     */
    function (cell) { return !!cell; }));
    if (!cellsWithValues.length) {
        return null;
    }
    if (cellsWithValues.some((/**
     * @param {?} cell
     * @return {?}
     */
    function (cell) { return typeof cell !== 'number'; }))) {
        return null;
    }
    return cellsWithValues.reduce((/**
     * @param {?} res
     * @param {?} cell
     * @return {?}
     */
    function (res, cell) { return res + cell; }));
}
/**
 * @param {?} cells
 * @return {?}
 */
function noopSumFunc(cells) {
    return null;
}
var DataTableSummaryRowComponent = /** @class */ (function () {
    function DataTableSummaryRowComponent() {
        this.summaryRow = {};
    }
    /**
     * @return {?}
     */
    DataTableSummaryRowComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (!this.columns || !this.rows) {
            return;
        }
        this.updateInternalColumns();
        this.updateValues();
    };
    /**
     * @private
     * @return {?}
     */
    DataTableSummaryRowComponent.prototype.updateInternalColumns = /**
     * @private
     * @return {?}
     */
    function () {
        this._internalColumns = this.columns.map((/**
         * @param {?} col
         * @return {?}
         */
        function (col) { return (tslib_1.__assign({}, col, { cellTemplate: col.summaryTemplate })); }));
    };
    /**
     * @private
     * @return {?}
     */
    DataTableSummaryRowComponent.prototype.updateValues = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.summaryRow = {};
        this.columns
            .filter((/**
         * @param {?} col
         * @return {?}
         */
        function (col) { return !col.summaryTemplate; }))
            .forEach((/**
         * @param {?} col
         * @return {?}
         */
        function (col) {
            /** @type {?} */
            var cellsFromSingleColumn = _this.rows.map((/**
             * @param {?} row
             * @return {?}
             */
            function (row) { return row[col.prop]; }));
            /** @type {?} */
            var sumFunc = _this.getSummaryFunction(col);
            _this.summaryRow[col.prop] = col.pipe
                ? col.pipe.transform(sumFunc(cellsFromSingleColumn))
                : sumFunc(cellsFromSingleColumn);
        }));
    };
    /**
     * @private
     * @param {?} column
     * @return {?}
     */
    DataTableSummaryRowComponent.prototype.getSummaryFunction = /**
     * @private
     * @param {?} column
     * @return {?}
     */
    function (column) {
        if (column.summaryFunc === undefined) {
            return defaultSumFunc;
        }
        else if (column.summaryFunc === null) {
            return noopSumFunc;
        }
        else {
            return column.summaryFunc;
        }
    };
    DataTableSummaryRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'datatable-summary-row',
                    template: "\n    <datatable-body-row\n      *ngIf=\"summaryRow && _internalColumns\"\n      tabindex=\"-1\"\n      [innerWidth]=\"innerWidth\"\n      [offsetX]=\"offsetX\"\n      [columns]=\"_internalColumns\"\n      [rowHeight]=\"rowHeight\"\n      [row]=\"summaryRow\"\n      [rowIndex]=\"-1\"\n    >\n    </datatable-body-row>\n  ",
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
    return DataTableSummaryRowComponent;
}());
export { DataTableSummaryRowComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN3aW1sYW5lL25neC1kYXRhdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9ib2R5L3N1bW1hcnkvc3VtbWFyeS1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXlDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhGLG9DQU1DOzs7SUFMQyxxQ0FBb0M7O0lBQ3BDLHlDQUFtQzs7SUFFbkMsOEJBQWE7O0lBQ2IsOEJBQXFCOzs7Ozs7QUFHdkIsU0FBUyxjQUFjLENBQUMsS0FBWTs7UUFDNUIsZUFBZSxHQUFHLEtBQUssQ0FBQyxNQUFNOzs7O0lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sRUFBQztJQUVwRCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRTtRQUMzQixPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsSUFBSSxlQUFlLENBQUMsSUFBSTs7OztJQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxJQUFJLEtBQUssUUFBUSxFQUF4QixDQUF3QixFQUFDLEVBQUU7UUFDMUQsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELE9BQU8sZUFBZSxDQUFDLE1BQU07Ozs7O0lBQUMsVUFBQyxHQUFHLEVBQUUsSUFBSSxJQUFLLE9BQUEsR0FBRyxHQUFHLElBQUksRUFBVixDQUFVLEVBQUMsQ0FBQztBQUMzRCxDQUFDOzs7OztBQUVELFNBQVMsV0FBVyxDQUFDLEtBQVk7SUFDL0IsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQ7SUFBQTtRQTRCRSxlQUFVLEdBQVEsRUFBRSxDQUFDO0lBeUN2QixDQUFDOzs7O0lBdkNDLGtEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUMvQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFTyw0REFBcUI7Ozs7SUFBN0I7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxzQkFDM0MsR0FBRyxJQUNOLFlBQVksRUFBRSxHQUFHLENBQUMsZUFBZSxJQUNqQyxFQUg4QyxDQUc5QyxFQUFDLENBQUM7SUFDTixDQUFDOzs7OztJQUVPLG1EQUFZOzs7O0lBQXBCO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVyQixJQUFJLENBQUMsT0FBTzthQUNULE1BQU07Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBcEIsQ0FBb0IsRUFBQzthQUNuQyxPQUFPOzs7O1FBQUMsVUFBQSxHQUFHOztnQkFDSixxQkFBcUIsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWIsQ0FBYSxFQUFDOztnQkFDM0QsT0FBTyxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7WUFFNUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUk7Z0JBQ2xDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDcEQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7O0lBRU8seURBQWtCOzs7OztJQUExQixVQUEyQixNQUFzQjtRQUMvQyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ3BDLE9BQU8sY0FBYyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxNQUFNLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUN0QyxPQUFPLFdBQVcsQ0FBQztTQUNwQjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7Z0JBcEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsb1VBWVQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSx1QkFBdUI7cUJBQy9CO2lCQUNGOzs7dUJBRUUsS0FBSzswQkFDTCxLQUFLOzRCQUVMLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLOztJQTRDUixtQ0FBQztDQUFBLEFBckVELElBcUVDO1NBbERZLDRCQUE0Qjs7O0lBQ3ZDLDRDQUFxQjs7SUFDckIsK0NBQW1DOztJQUVuQyxpREFBMkI7O0lBQzNCLCtDQUF5Qjs7SUFDekIsa0RBQTRCOztJQUU1Qix3REFBbUM7O0lBQ25DLGtEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgUGlwZVRyYW5zZm9ybSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN1bW1hcnlDb2x1bW4ge1xyXG4gIHN1bW1hcnlGdW5jPzogKGNlbGxzOiBhbnlbXSkgPT4gYW55O1xyXG4gIHN1bW1hcnlUZW1wbGF0ZT86IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIHByb3A6IHN0cmluZztcclxuICBwaXBlPzogUGlwZVRyYW5zZm9ybTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVmYXVsdFN1bUZ1bmMoY2VsbHM6IGFueVtdKTogYW55IHtcclxuICBjb25zdCBjZWxsc1dpdGhWYWx1ZXMgPSBjZWxscy5maWx0ZXIoY2VsbCA9PiAhIWNlbGwpO1xyXG5cclxuICBpZiAoIWNlbGxzV2l0aFZhbHVlcy5sZW5ndGgpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBpZiAoY2VsbHNXaXRoVmFsdWVzLnNvbWUoY2VsbCA9PiB0eXBlb2YgY2VsbCAhPT0gJ251bWJlcicpKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiBjZWxsc1dpdGhWYWx1ZXMucmVkdWNlKChyZXMsIGNlbGwpID0+IHJlcyArIGNlbGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBub29wU3VtRnVuYyhjZWxsczogYW55W10pOiB2b2lkIHtcclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkYXRhdGFibGUtc3VtbWFyeS1yb3cnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGF0YXRhYmxlLWJvZHktcm93XHJcbiAgICAgICpuZ0lmPVwic3VtbWFyeVJvdyAmJiBfaW50ZXJuYWxDb2x1bW5zXCJcclxuICAgICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgIFtpbm5lcldpZHRoXT1cImlubmVyV2lkdGhcIlxyXG4gICAgICBbb2Zmc2V0WF09XCJvZmZzZXRYXCJcclxuICAgICAgW2NvbHVtbnNdPVwiX2ludGVybmFsQ29sdW1uc1wiXHJcbiAgICAgIFtyb3dIZWlnaHRdPVwicm93SGVpZ2h0XCJcclxuICAgICAgW3Jvd109XCJzdW1tYXJ5Um93XCJcclxuICAgICAgW3Jvd0luZGV4XT1cIi0xXCJcclxuICAgID5cclxuICAgIDwvZGF0YXRhYmxlLWJvZHktcm93PlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdkYXRhdGFibGUtc3VtbWFyeS1yb3cnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlU3VtbWFyeVJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgcm93czogYW55W107XHJcbiAgQElucHV0KCkgY29sdW1uczogSVN1bW1hcnlDb2x1bW5bXTtcclxuXHJcbiAgQElucHV0KCkgcm93SGVpZ2h0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgb2Zmc2V0WDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGlubmVyV2lkdGg6IG51bWJlcjtcclxuXHJcbiAgX2ludGVybmFsQ29sdW1uczogSVN1bW1hcnlDb2x1bW5bXTtcclxuICBzdW1tYXJ5Um93OiBhbnkgPSB7fTtcclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBpZiAoIXRoaXMuY29sdW1ucyB8fCAhdGhpcy5yb3dzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlSW50ZXJuYWxDb2x1bW5zKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVJbnRlcm5hbENvbHVtbnMoKSB7XHJcbiAgICB0aGlzLl9pbnRlcm5hbENvbHVtbnMgPSB0aGlzLmNvbHVtbnMubWFwKGNvbCA9PiAoe1xyXG4gICAgICAuLi5jb2wsXHJcbiAgICAgIGNlbGxUZW1wbGF0ZTogY29sLnN1bW1hcnlUZW1wbGF0ZVxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVWYWx1ZXMoKSB7XHJcbiAgICB0aGlzLnN1bW1hcnlSb3cgPSB7fTtcclxuXHJcbiAgICB0aGlzLmNvbHVtbnNcclxuICAgICAgLmZpbHRlcihjb2wgPT4gIWNvbC5zdW1tYXJ5VGVtcGxhdGUpXHJcbiAgICAgIC5mb3JFYWNoKGNvbCA9PiB7XHJcbiAgICAgICAgY29uc3QgY2VsbHNGcm9tU2luZ2xlQ29sdW1uID0gdGhpcy5yb3dzLm1hcChyb3cgPT4gcm93W2NvbC5wcm9wXSk7XHJcbiAgICAgICAgY29uc3Qgc3VtRnVuYyA9IHRoaXMuZ2V0U3VtbWFyeUZ1bmN0aW9uKGNvbCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3VtbWFyeVJvd1tjb2wucHJvcF0gPSBjb2wucGlwZVxyXG4gICAgICAgICAgPyBjb2wucGlwZS50cmFuc2Zvcm0oc3VtRnVuYyhjZWxsc0Zyb21TaW5nbGVDb2x1bW4pKVxyXG4gICAgICAgICAgOiBzdW1GdW5jKGNlbGxzRnJvbVNpbmdsZUNvbHVtbik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTdW1tYXJ5RnVuY3Rpb24oY29sdW1uOiBJU3VtbWFyeUNvbHVtbik6IChhOiBhbnlbXSkgPT4gYW55IHtcclxuICAgIGlmIChjb2x1bW4uc3VtbWFyeUZ1bmMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gZGVmYXVsdFN1bUZ1bmM7XHJcbiAgICB9IGVsc2UgaWYgKGNvbHVtbi5zdW1tYXJ5RnVuYyA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gbm9vcFN1bUZ1bmM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY29sdW1uLnN1bW1hcnlGdW5jO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=