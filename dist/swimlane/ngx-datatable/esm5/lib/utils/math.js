/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { columnsByPin, columnsTotalWidth } from './column';
/**
 * Calculates the Total Flex Grow
 * @param {?} columns
 * @return {?}
 */
export function getTotalFlexGrow(columns) {
    var e_1, _a;
    /** @type {?} */
    var totalFlexGrow = 0;
    try {
        for (var columns_1 = tslib_1.__values(columns), columns_1_1 = columns_1.next(); !columns_1_1.done; columns_1_1 = columns_1.next()) {
            var c = columns_1_1.value;
            totalFlexGrow += c.flexGrow || 0;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (columns_1_1 && !columns_1_1.done && (_a = columns_1.return)) _a.call(columns_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return totalFlexGrow;
}
/**
 * Adjusts the column widths.
 * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
 * @param {?} allColumns
 * @param {?} expectedWidth
 * @return {?}
 */
export function adjustColumnWidths(allColumns, expectedWidth) {
    /** @type {?} */
    var columnsWidth = columnsTotalWidth(allColumns);
    /** @type {?} */
    var totalFlexGrow = getTotalFlexGrow(allColumns);
    /** @type {?} */
    var colsByGroup = columnsByPin(allColumns);
    if (columnsWidth !== expectedWidth) {
        scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
    }
}
/**
 * Resizes columns based on the flexGrow property, while respecting manually set widths
 * @param {?} colsByGroup
 * @param {?} maxWidth
 * @param {?} totalFlexGrow
 * @return {?}
 */
function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
    var e_2, _a, e_3, _b;
    // calculate total width and flexgrow points for coulumns that can be resized
    for (var attr in colsByGroup) {
        try {
            for (var _c = (e_2 = void 0, tslib_1.__values(colsByGroup[attr])), _d = _c.next(); !_d.done; _d = _c.next()) {
                var column = _d.value;
                if (!column.canAutoResize) {
                    maxWidth -= column.width;
                    totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
                }
                else {
                    column.width = 0;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    /** @type {?} */
    var hasMinWidth = {};
    /** @type {?} */
    var remainingWidth = maxWidth;
    // resize columns until no width is left to be distributed
    do {
        /** @type {?} */
        var widthPerFlexPoint = remainingWidth / totalFlexGrow;
        remainingWidth = 0;
        for (var attr in colsByGroup) {
            try {
                for (var _e = (e_3 = void 0, tslib_1.__values(colsByGroup[attr])), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var column = _f.value;
                    // if the column can be resize and it hasn't reached its minimum width yet
                    if (column.canAutoResize && !hasMinWidth[column.prop]) {
                        /** @type {?} */
                        var newWidth = column.width + column.flexGrow * widthPerFlexPoint;
                        if (column.minWidth !== undefined && newWidth < column.minWidth) {
                            remainingWidth += newWidth - column.minWidth;
                            column.width = column.minWidth;
                            hasMinWidth[column.prop] = true;
                        }
                        else {
                            column.width = newWidth;
                        }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
    } while (remainingWidth !== 0);
}
/**
 * Forces the width of the columns to
 * distribute equally but overflowing when necessary
 *
 * Rules:
 *
 *  - If combined withs are less than the total width of the grid,
 *    proportion the widths given the min / max / normal widths to fill the width.
 *
 *  - If the combined widths, exceed the total width of the grid,
 *    use the standard widths.
 *
 *  - If a column is resized, it should always use that width
 *
 *  - The proportional widths should never fall below min size if specified.
 *
 *  - If the grid starts off small but then becomes greater than the size ( + / - )
 *    the width should use the original width; not the newly proportioned widths.
 * @param {?} allColumns
 * @param {?} expectedWidth
 * @param {?} startIdx
 * @param {?} allowBleed
 * @param {?=} defaultColWidth
 * @return {?}
 */
export function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed, defaultColWidth) {
    var e_4, _a, e_5, _b;
    if (defaultColWidth === void 0) { defaultColWidth = 300; }
    /** @type {?} */
    var columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter((/**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return c.canAutoResize !== false;
    }));
    try {
        for (var columnsToResize_1 = tslib_1.__values(columnsToResize), columnsToResize_1_1 = columnsToResize_1.next(); !columnsToResize_1_1.done; columnsToResize_1_1 = columnsToResize_1.next()) {
            var column = columnsToResize_1_1.value;
            if (!column.$$oldWidth) {
                column.$$oldWidth = column.width;
            }
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (columnsToResize_1_1 && !columnsToResize_1_1.done && (_a = columnsToResize_1.return)) _a.call(columnsToResize_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    /** @type {?} */
    var additionWidthPerColumn = 0;
    /** @type {?} */
    var exceedsWindow = false;
    /** @type {?} */
    var contentWidth = getContentWidth(allColumns, defaultColWidth);
    /** @type {?} */
    var remainingWidth = expectedWidth - contentWidth;
    /** @type {?} */
    var columnsProcessed = [];
    /** @type {?} */
    var remainingWidthLimit = 1;
    // This loop takes care of the
    do {
        additionWidthPerColumn = remainingWidth / columnsToResize.length;
        exceedsWindow = contentWidth >= expectedWidth;
        try {
            for (var columnsToResize_2 = (e_5 = void 0, tslib_1.__values(columnsToResize)), columnsToResize_2_1 = columnsToResize_2.next(); !columnsToResize_2_1.done; columnsToResize_2_1 = columnsToResize_2.next()) {
                var column = columnsToResize_2_1.value;
                if (exceedsWindow && allowBleed) {
                    column.width = column.$$oldWidth || column.width || defaultColWidth;
                }
                else {
                    /** @type {?} */
                    var newSize = (column.width || defaultColWidth) + additionWidthPerColumn;
                    if (column.minWidth && newSize < column.minWidth) {
                        column.width = column.minWidth;
                        columnsProcessed.push(column);
                    }
                    else if (column.maxWidth && newSize > column.maxWidth) {
                        column.width = column.maxWidth;
                        columnsProcessed.push(column);
                    }
                    else {
                        column.width = newSize;
                    }
                }
                column.width = Math.max(0, column.width);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (columnsToResize_2_1 && !columnsToResize_2_1.done && (_b = columnsToResize_2.return)) _b.call(columnsToResize_2);
            }
            finally { if (e_5) throw e_5.error; }
        }
        contentWidth = getContentWidth(allColumns);
        remainingWidth = expectedWidth - contentWidth;
        removeProcessedColumns(columnsToResize, columnsProcessed);
    } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
}
/**
 * Remove the processed columns from the current active columns.
 * @param {?} columnsToResize
 * @param {?} columnsProcessed
 * @return {?}
 */
function removeProcessedColumns(columnsToResize, columnsProcessed) {
    var e_6, _a;
    try {
        for (var columnsProcessed_1 = tslib_1.__values(columnsProcessed), columnsProcessed_1_1 = columnsProcessed_1.next(); !columnsProcessed_1_1.done; columnsProcessed_1_1 = columnsProcessed_1.next()) {
            var column = columnsProcessed_1_1.value;
            /** @type {?} */
            var index = columnsToResize.indexOf(column);
            columnsToResize.splice(index, 1);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (columnsProcessed_1_1 && !columnsProcessed_1_1.done && (_a = columnsProcessed_1.return)) _a.call(columnsProcessed_1);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
/**
 * Gets the width of the columns
 * @param {?} allColumns
 * @param {?=} defaultColWidth
 * @return {?}
 */
function getContentWidth(allColumns, defaultColWidth) {
    var e_7, _a;
    if (defaultColWidth === void 0) { defaultColWidth = 300; }
    /** @type {?} */
    var contentWidth = 0;
    try {
        for (var allColumns_1 = tslib_1.__values(allColumns), allColumns_1_1 = allColumns_1.next(); !allColumns_1_1.done; allColumns_1_1 = allColumns_1.next()) {
            var column = allColumns_1_1.value;
            contentWidth += column.width || defaultColWidth;
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (allColumns_1_1 && !allColumns_1_1.done && (_a = allColumns_1.return)) _a.call(allColumns_1);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return contentWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL21hdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sVUFBVSxDQUFDOzs7Ozs7QUFLM0QsTUFBTSxVQUFVLGdCQUFnQixDQUFDLE9BQWM7OztRQUN6QyxhQUFhLEdBQUcsQ0FBQzs7UUFFckIsS0FBZ0IsSUFBQSxZQUFBLGlCQUFBLE9BQU8sQ0FBQSxnQ0FBQSxxREFBRTtZQUFwQixJQUFNLENBQUMsb0JBQUE7WUFDVixhQUFhLElBQUksQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7U0FDbEM7Ozs7Ozs7OztJQUVELE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUM7Ozs7Ozs7O0FBTUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLFVBQWUsRUFBRSxhQUFrQjs7UUFDOUQsWUFBWSxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQzs7UUFDNUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLFVBQVUsQ0FBQzs7UUFDNUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUM7SUFFNUMsSUFBSSxZQUFZLEtBQUssYUFBYSxFQUFFO1FBQ2xDLFlBQVksQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0tBQ3pEO0FBQ0gsQ0FBQzs7Ozs7Ozs7QUFLRCxTQUFTLFlBQVksQ0FBQyxXQUFnQixFQUFFLFFBQWEsRUFBRSxhQUFrQjs7SUFDdkUsNkVBQTZFO0lBQzdFLEtBQUssSUFBTSxJQUFJLElBQUksV0FBVyxFQUFFOztZQUM5QixLQUFxQixJQUFBLG9CQUFBLGlCQUFBLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFBLGdCQUFBLDRCQUFFO2dCQUFuQyxJQUFNLE1BQU0sV0FBQTtnQkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLGFB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LGlCQUFBLGdCQUFnQixDQUFBLGtEQUFBLGdGQUFFO1lBQWxDLElBQU0sTUFBTSw2QkFBQTs7Z0JBQ1QsS0FBSyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzdDLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xDOzs7Ozs7Ozs7QUFDSCxDQUFDOzs7Ozs7O0FBS0QsU0FBUyxlQUFlLENBQUMsVUFBZSxFQUFFLGVBQTZCOztJQUE3QixnQ0FBQSxFQUFBLHFCQUE2Qjs7UUFDakUsWUFBWSxHQUFHLENBQUM7O1FBRXBCLEtBQXFCLElBQUEsZUFBQSxpQkFBQSxVQUFVLENBQUEsc0NBQUEsOERBQUU7WUFBNUIsSUFBTSxNQUFNLHVCQUFBO1lBQ2YsWUFBWSxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksZUFBZSxDQUFDO1NBQ2pEOzs7Ozs7Ozs7SUFFRCxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29sdW1uc0J5UGluLCBjb2x1bW5zVG90YWxXaWR0aCB9IGZyb20gJy4vY29sdW1uJztcclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBUb3RhbCBGbGV4IEdyb3dcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3RhbEZsZXhHcm93KGNvbHVtbnM6IGFueVtdKSB7XHJcbiAgbGV0IHRvdGFsRmxleEdyb3cgPSAwO1xyXG5cclxuICBmb3IgKGNvbnN0IGMgb2YgY29sdW1ucykge1xyXG4gICAgdG90YWxGbGV4R3JvdyArPSBjLmZsZXhHcm93IHx8IDA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdG90YWxGbGV4R3JvdztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkanVzdHMgdGhlIGNvbHVtbiB3aWR0aHMuXHJcbiAqIEluc3BpcmVkIGJ5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZml4ZWQtZGF0YS10YWJsZS9ibG9iL21hc3Rlci9zcmMvRml4ZWREYXRhVGFibGVXaWR0aEhlbHBlci5qc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkanVzdENvbHVtbldpZHRocyhhbGxDb2x1bW5zOiBhbnksIGV4cGVjdGVkV2lkdGg6IGFueSkge1xyXG4gIGNvbnN0IGNvbHVtbnNXaWR0aCA9IGNvbHVtbnNUb3RhbFdpZHRoKGFsbENvbHVtbnMpO1xyXG4gIGNvbnN0IHRvdGFsRmxleEdyb3cgPSBnZXRUb3RhbEZsZXhHcm93KGFsbENvbHVtbnMpO1xyXG4gIGNvbnN0IGNvbHNCeUdyb3VwID0gY29sdW1uc0J5UGluKGFsbENvbHVtbnMpO1xyXG5cclxuICBpZiAoY29sdW1uc1dpZHRoICE9PSBleHBlY3RlZFdpZHRoKSB7XHJcbiAgICBzY2FsZUNvbHVtbnMoY29sc0J5R3JvdXAsIGV4cGVjdGVkV2lkdGgsIHRvdGFsRmxleEdyb3cpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlc2l6ZXMgY29sdW1ucyBiYXNlZCBvbiB0aGUgZmxleEdyb3cgcHJvcGVydHksIHdoaWxlIHJlc3BlY3RpbmcgbWFudWFsbHkgc2V0IHdpZHRoc1xyXG4gKi9cclxuZnVuY3Rpb24gc2NhbGVDb2x1bW5zKGNvbHNCeUdyb3VwOiBhbnksIG1heFdpZHRoOiBhbnksIHRvdGFsRmxleEdyb3c6IGFueSkge1xyXG4gIC8vIGNhbGN1bGF0ZSB0b3RhbCB3aWR0aCBhbmQgZmxleGdyb3cgcG9pbnRzIGZvciBjb3VsdW1ucyB0aGF0IGNhbiBiZSByZXNpemVkXHJcbiAgZm9yIChjb25zdCBhdHRyIGluIGNvbHNCeUdyb3VwKSB7XHJcbiAgICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2xzQnlHcm91cFthdHRyXSkge1xyXG4gICAgICBpZiAoIWNvbHVtbi5jYW5BdXRvUmVzaXplKSB7XHJcbiAgICAgICAgbWF4V2lkdGggLT0gY29sdW1uLndpZHRoO1xyXG4gICAgICAgIHRvdGFsRmxleEdyb3cgLT0gY29sdW1uLmZsZXhHcm93ID8gY29sdW1uLmZsZXhHcm93IDogMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb2x1bW4ud2lkdGggPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYXNNaW5XaWR0aCA9IHt9O1xyXG4gIGxldCByZW1haW5pbmdXaWR0aCA9IG1heFdpZHRoO1xyXG5cclxuICAvLyByZXNpemUgY29sdW1ucyB1bnRpbCBubyB3aWR0aCBpcyBsZWZ0IHRvIGJlIGRpc3RyaWJ1dGVkXHJcbiAgZG8ge1xyXG4gICAgY29uc3Qgd2lkdGhQZXJGbGV4UG9pbnQgPSByZW1haW5pbmdXaWR0aCAvIHRvdGFsRmxleEdyb3c7XHJcbiAgICByZW1haW5pbmdXaWR0aCA9IDA7XHJcblxyXG4gICAgZm9yIChjb25zdCBhdHRyIGluIGNvbHNCeUdyb3VwKSB7XHJcbiAgICAgIGZvciAoY29uc3QgY29sdW1uIG9mIGNvbHNCeUdyb3VwW2F0dHJdKSB7XHJcbiAgICAgICAgLy8gaWYgdGhlIGNvbHVtbiBjYW4gYmUgcmVzaXplIGFuZCBpdCBoYXNuJ3QgcmVhY2hlZCBpdHMgbWluaW11bSB3aWR0aCB5ZXRcclxuICAgICAgICBpZiAoY29sdW1uLmNhbkF1dG9SZXNpemUgJiYgIWhhc01pbldpZHRoW2NvbHVtbi5wcm9wXSkge1xyXG4gICAgICAgICAgY29uc3QgbmV3V2lkdGggPSBjb2x1bW4ud2lkdGggKyBjb2x1bW4uZmxleEdyb3cgKiB3aWR0aFBlckZsZXhQb2ludDtcclxuICAgICAgICAgIGlmIChjb2x1bW4ubWluV2lkdGggIT09IHVuZGVmaW5lZCAmJiBuZXdXaWR0aCA8IGNvbHVtbi5taW5XaWR0aCkge1xyXG4gICAgICAgICAgICByZW1haW5pbmdXaWR0aCArPSBuZXdXaWR0aCAtIGNvbHVtbi5taW5XaWR0aDtcclxuICAgICAgICAgICAgY29sdW1uLndpZHRoID0gY29sdW1uLm1pbldpZHRoO1xyXG4gICAgICAgICAgICBoYXNNaW5XaWR0aFtjb2x1bW4ucHJvcF0gPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sdW1uLndpZHRoID0gbmV3V2lkdGg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSB3aGlsZSAocmVtYWluaW5nV2lkdGggIT09IDApO1xyXG59XHJcblxyXG4vKipcclxuICogRm9yY2VzIHRoZSB3aWR0aCBvZiB0aGUgY29sdW1ucyB0b1xyXG4gKiBkaXN0cmlidXRlIGVxdWFsbHkgYnV0IG92ZXJmbG93aW5nIHdoZW4gbmVjZXNzYXJ5XHJcbiAqXHJcbiAqIFJ1bGVzOlxyXG4gKlxyXG4gKiAgLSBJZiBjb21iaW5lZCB3aXRocyBhcmUgbGVzcyB0aGFuIHRoZSB0b3RhbCB3aWR0aCBvZiB0aGUgZ3JpZCxcclxuICogICAgcHJvcG9ydGlvbiB0aGUgd2lkdGhzIGdpdmVuIHRoZSBtaW4gLyBtYXggLyBub3JtYWwgd2lkdGhzIHRvIGZpbGwgdGhlIHdpZHRoLlxyXG4gKlxyXG4gKiAgLSBJZiB0aGUgY29tYmluZWQgd2lkdGhzLCBleGNlZWQgdGhlIHRvdGFsIHdpZHRoIG9mIHRoZSBncmlkLFxyXG4gKiAgICB1c2UgdGhlIHN0YW5kYXJkIHdpZHRocy5cclxuICpcclxuICogIC0gSWYgYSBjb2x1bW4gaXMgcmVzaXplZCwgaXQgc2hvdWxkIGFsd2F5cyB1c2UgdGhhdCB3aWR0aFxyXG4gKlxyXG4gKiAgLSBUaGUgcHJvcG9ydGlvbmFsIHdpZHRocyBzaG91bGQgbmV2ZXIgZmFsbCBiZWxvdyBtaW4gc2l6ZSBpZiBzcGVjaWZpZWQuXHJcbiAqXHJcbiAqICAtIElmIHRoZSBncmlkIHN0YXJ0cyBvZmYgc21hbGwgYnV0IHRoZW4gYmVjb21lcyBncmVhdGVyIHRoYW4gdGhlIHNpemUgKCArIC8gLSApXHJcbiAqICAgIHRoZSB3aWR0aCBzaG91bGQgdXNlIHRoZSBvcmlnaW5hbCB3aWR0aDsgbm90IHRoZSBuZXdseSBwcm9wb3J0aW9uZWQgd2lkdGhzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcmNlRmlsbENvbHVtbldpZHRocyhcclxuICBhbGxDb2x1bW5zOiBhbnlbXSxcclxuICBleHBlY3RlZFdpZHRoOiBudW1iZXIsXHJcbiAgc3RhcnRJZHg6IG51bWJlcixcclxuICBhbGxvd0JsZWVkOiBib29sZWFuLFxyXG4gIGRlZmF1bHRDb2xXaWR0aDogbnVtYmVyID0gMzAwXHJcbikge1xyXG4gIGNvbnN0IGNvbHVtbnNUb1Jlc2l6ZSA9IGFsbENvbHVtbnMuc2xpY2Uoc3RhcnRJZHggKyAxLCBhbGxDb2x1bW5zLmxlbmd0aCkuZmlsdGVyKGMgPT4ge1xyXG4gICAgcmV0dXJuIGMuY2FuQXV0b1Jlc2l6ZSAhPT0gZmFsc2U7XHJcbiAgfSk7XHJcblxyXG4gIGZvciAoY29uc3QgY29sdW1uIG9mIGNvbHVtbnNUb1Jlc2l6ZSkge1xyXG4gICAgaWYgKCFjb2x1bW4uJCRvbGRXaWR0aCkge1xyXG4gICAgICBjb2x1bW4uJCRvbGRXaWR0aCA9IGNvbHVtbi53aWR0aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBhZGRpdGlvbldpZHRoUGVyQ29sdW1uID0gMDtcclxuICBsZXQgZXhjZWVkc1dpbmRvdyA9IGZhbHNlO1xyXG4gIGxldCBjb250ZW50V2lkdGggPSBnZXRDb250ZW50V2lkdGgoYWxsQ29sdW1ucywgZGVmYXVsdENvbFdpZHRoKTtcclxuICBsZXQgcmVtYWluaW5nV2lkdGggPSBleHBlY3RlZFdpZHRoIC0gY29udGVudFdpZHRoO1xyXG4gIGNvbnN0IGNvbHVtbnNQcm9jZXNzZWQ6IGFueVtdID0gW107XHJcbiAgY29uc3QgcmVtYWluaW5nV2lkdGhMaW1pdCA9IDE7IC8vIHdoZW4gdG8gc3RvcFxyXG5cclxuICAvLyBUaGlzIGxvb3AgdGFrZXMgY2FyZSBvZiB0aGVcclxuICBkbyB7XHJcbiAgICBhZGRpdGlvbldpZHRoUGVyQ29sdW1uID0gcmVtYWluaW5nV2lkdGggLyBjb2x1bW5zVG9SZXNpemUubGVuZ3RoO1xyXG4gICAgZXhjZWVkc1dpbmRvdyA9IGNvbnRlbnRXaWR0aCA+PSBleHBlY3RlZFdpZHRoO1xyXG5cclxuICAgIGZvciAoY29uc3QgY29sdW1uIG9mIGNvbHVtbnNUb1Jlc2l6ZSkge1xyXG4gICAgICBpZiAoZXhjZWVkc1dpbmRvdyAmJiBhbGxvd0JsZWVkKSB7XHJcbiAgICAgICAgY29sdW1uLndpZHRoID0gY29sdW1uLiQkb2xkV2lkdGggfHwgY29sdW1uLndpZHRoIHx8IGRlZmF1bHRDb2xXaWR0aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBuZXdTaXplID0gKGNvbHVtbi53aWR0aCB8fCBkZWZhdWx0Q29sV2lkdGgpICsgYWRkaXRpb25XaWR0aFBlckNvbHVtbjtcclxuXHJcbiAgICAgICAgaWYgKGNvbHVtbi5taW5XaWR0aCAmJiBuZXdTaXplIDwgY29sdW1uLm1pbldpZHRoKSB7XHJcbiAgICAgICAgICBjb2x1bW4ud2lkdGggPSBjb2x1bW4ubWluV2lkdGg7XHJcbiAgICAgICAgICBjb2x1bW5zUHJvY2Vzc2VkLnB1c2goY29sdW1uKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbi5tYXhXaWR0aCAmJiBuZXdTaXplID4gY29sdW1uLm1heFdpZHRoKSB7XHJcbiAgICAgICAgICBjb2x1bW4ud2lkdGggPSBjb2x1bW4ubWF4V2lkdGg7XHJcbiAgICAgICAgICBjb2x1bW5zUHJvY2Vzc2VkLnB1c2goY29sdW1uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29sdW1uLndpZHRoID0gbmV3U2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbHVtbi53aWR0aCA9IE1hdGgubWF4KDAsIGNvbHVtbi53aWR0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGVudFdpZHRoID0gZ2V0Q29udGVudFdpZHRoKGFsbENvbHVtbnMpO1xyXG4gICAgcmVtYWluaW5nV2lkdGggPSBleHBlY3RlZFdpZHRoIC0gY29udGVudFdpZHRoO1xyXG4gICAgcmVtb3ZlUHJvY2Vzc2VkQ29sdW1ucyhjb2x1bW5zVG9SZXNpemUsIGNvbHVtbnNQcm9jZXNzZWQpO1xyXG4gIH0gd2hpbGUgKHJlbWFpbmluZ1dpZHRoID4gcmVtYWluaW5nV2lkdGhMaW1pdCAmJiBjb2x1bW5zVG9SZXNpemUubGVuZ3RoICE9PSAwKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgcHJvY2Vzc2VkIGNvbHVtbnMgZnJvbSB0aGUgY3VycmVudCBhY3RpdmUgY29sdW1ucy5cclxuICovXHJcbmZ1bmN0aW9uIHJlbW92ZVByb2Nlc3NlZENvbHVtbnMoY29sdW1uc1RvUmVzaXplOiBhbnlbXSwgY29sdW1uc1Byb2Nlc3NlZDogYW55W10pIHtcclxuICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2x1bW5zUHJvY2Vzc2VkKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGNvbHVtbnNUb1Jlc2l6ZS5pbmRleE9mKGNvbHVtbik7XHJcbiAgICBjb2x1bW5zVG9SZXNpemUuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXRzIHRoZSB3aWR0aCBvZiB0aGUgY29sdW1uc1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Q29udGVudFdpZHRoKGFsbENvbHVtbnM6IGFueSwgZGVmYXVsdENvbFdpZHRoOiBudW1iZXIgPSAzMDApOiBudW1iZXIge1xyXG4gIGxldCBjb250ZW50V2lkdGggPSAwO1xyXG5cclxuICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBhbGxDb2x1bW5zKSB7XHJcbiAgICBjb250ZW50V2lkdGggKz0gY29sdW1uLndpZHRoIHx8IGRlZmF1bHRDb2xXaWR0aDtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb250ZW50V2lkdGg7XHJcbn1cclxuIl19