/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { columnsByPin, columnsTotalWidth } from './column';
/**
 * Calculates the Total Flex Grow
 * @param {?} columns
 * @return {?}
 */
export function getTotalFlexGrow(columns) {
    /** @type {?} */
    let totalFlexGrow = 0;
    for (const c of columns) {
        totalFlexGrow += c.flexGrow || 0;
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
    const columnsWidth = columnsTotalWidth(allColumns);
    /** @type {?} */
    const totalFlexGrow = getTotalFlexGrow(allColumns);
    /** @type {?} */
    const colsByGroup = columnsByPin(allColumns);
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
    // calculate total width and flexgrow points for coulumns that can be resized
    for (const attr in colsByGroup) {
        for (const column of colsByGroup[attr]) {
            if (!column.canAutoResize) {
                maxWidth -= column.width;
                totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
            }
            else {
                column.width = 0;
            }
        }
    }
    /** @type {?} */
    const hasMinWidth = {};
    /** @type {?} */
    let remainingWidth = maxWidth;
    // resize columns until no width is left to be distributed
    do {
        /** @type {?} */
        const widthPerFlexPoint = remainingWidth / totalFlexGrow;
        remainingWidth = 0;
        for (const attr in colsByGroup) {
            for (const column of colsByGroup[attr]) {
                // if the column can be resize and it hasn't reached its minimum width yet
                if (column.canAutoResize && !hasMinWidth[column.prop]) {
                    /** @type {?} */
                    const newWidth = column.width + column.flexGrow * widthPerFlexPoint;
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
export function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed, defaultColWidth = 300) {
    /** @type {?} */
    const columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter((/**
     * @param {?} c
     * @return {?}
     */
    c => {
        return c.canAutoResize !== false;
    }));
    for (const column of columnsToResize) {
        if (!column.$$oldWidth) {
            column.$$oldWidth = column.width;
        }
    }
    /** @type {?} */
    let additionWidthPerColumn = 0;
    /** @type {?} */
    let exceedsWindow = false;
    /** @type {?} */
    let contentWidth = getContentWidth(allColumns, defaultColWidth);
    /** @type {?} */
    let remainingWidth = expectedWidth - contentWidth;
    /** @type {?} */
    const columnsProcessed = [];
    /** @type {?} */
    const remainingWidthLimit = 1;
    // This loop takes care of the
    do {
        additionWidthPerColumn = remainingWidth / columnsToResize.length;
        exceedsWindow = contentWidth >= expectedWidth;
        for (const column of columnsToResize) {
            if (exceedsWindow && allowBleed) {
                column.width = column.$$oldWidth || column.width || defaultColWidth;
            }
            else {
                /** @type {?} */
                const newSize = (column.width || defaultColWidth) + additionWidthPerColumn;
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
    for (const column of columnsProcessed) {
        /** @type {?} */
        const index = columnsToResize.indexOf(column);
        columnsToResize.splice(index, 1);
    }
}
/**
 * Gets the width of the columns
 * @param {?} allColumns
 * @param {?=} defaultColWidth
 * @return {?}
 */
function getContentWidth(allColumns, defaultColWidth = 300) {
    /** @type {?} */
    let contentWidth = 0;
    for (const column of allColumns) {
        contentWidth += column.width || defaultColWidth;
    }
    return contentWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL21hdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7OztBQUszRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsT0FBYzs7UUFDekMsYUFBYSxHQUFHLENBQUM7SUFFckIsS0FBSyxNQUFNLENBQUMsSUFBSSxPQUFPLEVBQUU7UUFDdkIsYUFBYSxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO0tBQ2xDO0lBRUQsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQzs7Ozs7Ozs7QUFNRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsVUFBZSxFQUFFLGFBQWtCOztVQUM5RCxZQUFZLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDOztVQUM1QyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDOztVQUM1QyxXQUFXLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQztJQUU1QyxJQUFJLFlBQVksS0FBSyxhQUFhLEVBQUU7UUFDbEMsWUFBWSxDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7S0FDekQ7QUFDSCxDQUFDOzs7Ozs7OztBQUtELFNBQVMsWUFBWSxDQUFDLFdBQWdCLEVBQUUsUUFBYSxFQUFFLGFBQWtCO0lBQ3ZFLDZFQUE2RTtJQUM3RSxLQUFLLE1BQU0sSUFBSSxJQUFJLFdBQVcsRUFBRTtRQUM5QixLQUFLLE1BQU0sTUFBTSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtnQkFDekIsUUFBUSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ3pCLGFBQWEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FB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QUksZUFBZSxDQUFDO0tBQ2pEO0lBRUQsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbHVtbnNCeVBpbiwgY29sdW1uc1RvdGFsV2lkdGggfSBmcm9tICcuL2NvbHVtbic7XHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgVG90YWwgRmxleCBHcm93XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG90YWxGbGV4R3Jvdyhjb2x1bW5zOiBhbnlbXSkge1xyXG4gIGxldCB0b3RhbEZsZXhHcm93ID0gMDtcclxuXHJcbiAgZm9yIChjb25zdCBjIG9mIGNvbHVtbnMpIHtcclxuICAgIHRvdGFsRmxleEdyb3cgKz0gYy5mbGV4R3JvdyB8fCAwO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRvdGFsRmxleEdyb3c7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGp1c3RzIHRoZSBjb2x1bW4gd2lkdGhzLlxyXG4gKiBJbnNwaXJlZCBieTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZpeGVkLWRhdGEtdGFibGUvYmxvYi9tYXN0ZXIvc3JjL0ZpeGVkRGF0YVRhYmxlV2lkdGhIZWxwZXIuanNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3RDb2x1bW5XaWR0aHMoYWxsQ29sdW1uczogYW55LCBleHBlY3RlZFdpZHRoOiBhbnkpIHtcclxuICBjb25zdCBjb2x1bW5zV2lkdGggPSBjb2x1bW5zVG90YWxXaWR0aChhbGxDb2x1bW5zKTtcclxuICBjb25zdCB0b3RhbEZsZXhHcm93ID0gZ2V0VG90YWxGbGV4R3JvdyhhbGxDb2x1bW5zKTtcclxuICBjb25zdCBjb2xzQnlHcm91cCA9IGNvbHVtbnNCeVBpbihhbGxDb2x1bW5zKTtcclxuXHJcbiAgaWYgKGNvbHVtbnNXaWR0aCAhPT0gZXhwZWN0ZWRXaWR0aCkge1xyXG4gICAgc2NhbGVDb2x1bW5zKGNvbHNCeUdyb3VwLCBleHBlY3RlZFdpZHRoLCB0b3RhbEZsZXhHcm93KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXNpemVzIGNvbHVtbnMgYmFzZWQgb24gdGhlIGZsZXhHcm93IHByb3BlcnR5LCB3aGlsZSByZXNwZWN0aW5nIG1hbnVhbGx5IHNldCB3aWR0aHNcclxuICovXHJcbmZ1bmN0aW9uIHNjYWxlQ29sdW1ucyhjb2xzQnlHcm91cDogYW55LCBtYXhXaWR0aDogYW55LCB0b3RhbEZsZXhHcm93OiBhbnkpIHtcclxuICAvLyBjYWxjdWxhdGUgdG90YWwgd2lkdGggYW5kIGZsZXhncm93IHBvaW50cyBmb3IgY291bHVtbnMgdGhhdCBjYW4gYmUgcmVzaXplZFxyXG4gIGZvciAoY29uc3QgYXR0ciBpbiBjb2xzQnlHcm91cCkge1xyXG4gICAgZm9yIChjb25zdCBjb2x1bW4gb2YgY29sc0J5R3JvdXBbYXR0cl0pIHtcclxuICAgICAgaWYgKCFjb2x1bW4uY2FuQXV0b1Jlc2l6ZSkge1xyXG4gICAgICAgIG1heFdpZHRoIC09IGNvbHVtbi53aWR0aDtcclxuICAgICAgICB0b3RhbEZsZXhHcm93IC09IGNvbHVtbi5mbGV4R3JvdyA/IGNvbHVtbi5mbGV4R3JvdyA6IDA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29sdW1uLndpZHRoID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFzTWluV2lkdGggPSB7fTtcclxuICBsZXQgcmVtYWluaW5nV2lkdGggPSBtYXhXaWR0aDtcclxuXHJcbiAgLy8gcmVzaXplIGNvbHVtbnMgdW50aWwgbm8gd2lkdGggaXMgbGVmdCB0byBiZSBkaXN0cmlidXRlZFxyXG4gIGRvIHtcclxuICAgIGNvbnN0IHdpZHRoUGVyRmxleFBvaW50ID0gcmVtYWluaW5nV2lkdGggLyB0b3RhbEZsZXhHcm93O1xyXG4gICAgcmVtYWluaW5nV2lkdGggPSAwO1xyXG5cclxuICAgIGZvciAoY29uc3QgYXR0ciBpbiBjb2xzQnlHcm91cCkge1xyXG4gICAgICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2xzQnlHcm91cFthdHRyXSkge1xyXG4gICAgICAgIC8vIGlmIHRoZSBjb2x1bW4gY2FuIGJlIHJlc2l6ZSBhbmQgaXQgaGFzbid0IHJlYWNoZWQgaXRzIG1pbmltdW0gd2lkdGggeWV0XHJcbiAgICAgICAgaWYgKGNvbHVtbi5jYW5BdXRvUmVzaXplICYmICFoYXNNaW5XaWR0aFtjb2x1bW4ucHJvcF0pIHtcclxuICAgICAgICAgIGNvbnN0IG5ld1dpZHRoID0gY29sdW1uLndpZHRoICsgY29sdW1uLmZsZXhHcm93ICogd2lkdGhQZXJGbGV4UG9pbnQ7XHJcbiAgICAgICAgICBpZiAoY29sdW1uLm1pbldpZHRoICE9PSB1bmRlZmluZWQgJiYgbmV3V2lkdGggPCBjb2x1bW4ubWluV2lkdGgpIHtcclxuICAgICAgICAgICAgcmVtYWluaW5nV2lkdGggKz0gbmV3V2lkdGggLSBjb2x1bW4ubWluV2lkdGg7XHJcbiAgICAgICAgICAgIGNvbHVtbi53aWR0aCA9IGNvbHVtbi5taW5XaWR0aDtcclxuICAgICAgICAgICAgaGFzTWluV2lkdGhbY29sdW1uLnByb3BdID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbHVtbi53aWR0aCA9IG5ld1dpZHRoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gd2hpbGUgKHJlbWFpbmluZ1dpZHRoICE9PSAwKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZvcmNlcyB0aGUgd2lkdGggb2YgdGhlIGNvbHVtbnMgdG9cclxuICogZGlzdHJpYnV0ZSBlcXVhbGx5IGJ1dCBvdmVyZmxvd2luZyB3aGVuIG5lY2Vzc2FyeVxyXG4gKlxyXG4gKiBSdWxlczpcclxuICpcclxuICogIC0gSWYgY29tYmluZWQgd2l0aHMgYXJlIGxlc3MgdGhhbiB0aGUgdG90YWwgd2lkdGggb2YgdGhlIGdyaWQsXHJcbiAqICAgIHByb3BvcnRpb24gdGhlIHdpZHRocyBnaXZlbiB0aGUgbWluIC8gbWF4IC8gbm9ybWFsIHdpZHRocyB0byBmaWxsIHRoZSB3aWR0aC5cclxuICpcclxuICogIC0gSWYgdGhlIGNvbWJpbmVkIHdpZHRocywgZXhjZWVkIHRoZSB0b3RhbCB3aWR0aCBvZiB0aGUgZ3JpZCxcclxuICogICAgdXNlIHRoZSBzdGFuZGFyZCB3aWR0aHMuXHJcbiAqXHJcbiAqICAtIElmIGEgY29sdW1uIGlzIHJlc2l6ZWQsIGl0IHNob3VsZCBhbHdheXMgdXNlIHRoYXQgd2lkdGhcclxuICpcclxuICogIC0gVGhlIHByb3BvcnRpb25hbCB3aWR0aHMgc2hvdWxkIG5ldmVyIGZhbGwgYmVsb3cgbWluIHNpemUgaWYgc3BlY2lmaWVkLlxyXG4gKlxyXG4gKiAgLSBJZiB0aGUgZ3JpZCBzdGFydHMgb2ZmIHNtYWxsIGJ1dCB0aGVuIGJlY29tZXMgZ3JlYXRlciB0aGFuIHRoZSBzaXplICggKyAvIC0gKVxyXG4gKiAgICB0aGUgd2lkdGggc2hvdWxkIHVzZSB0aGUgb3JpZ2luYWwgd2lkdGg7IG5vdCB0aGUgbmV3bHkgcHJvcG9ydGlvbmVkIHdpZHRocy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JjZUZpbGxDb2x1bW5XaWR0aHMoXHJcbiAgYWxsQ29sdW1uczogYW55W10sXHJcbiAgZXhwZWN0ZWRXaWR0aDogbnVtYmVyLFxyXG4gIHN0YXJ0SWR4OiBudW1iZXIsXHJcbiAgYWxsb3dCbGVlZDogYm9vbGVhbixcclxuICBkZWZhdWx0Q29sV2lkdGg6IG51bWJlciA9IDMwMFxyXG4pIHtcclxuICBjb25zdCBjb2x1bW5zVG9SZXNpemUgPSBhbGxDb2x1bW5zLnNsaWNlKHN0YXJ0SWR4ICsgMSwgYWxsQ29sdW1ucy5sZW5ndGgpLmZpbHRlcihjID0+IHtcclxuICAgIHJldHVybiBjLmNhbkF1dG9SZXNpemUgIT09IGZhbHNlO1xyXG4gIH0pO1xyXG5cclxuICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2x1bW5zVG9SZXNpemUpIHtcclxuICAgIGlmICghY29sdW1uLiQkb2xkV2lkdGgpIHtcclxuICAgICAgY29sdW1uLiQkb2xkV2lkdGggPSBjb2x1bW4ud2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgYWRkaXRpb25XaWR0aFBlckNvbHVtbiA9IDA7XHJcbiAgbGV0IGV4Y2VlZHNXaW5kb3cgPSBmYWxzZTtcclxuICBsZXQgY29udGVudFdpZHRoID0gZ2V0Q29udGVudFdpZHRoKGFsbENvbHVtbnMsIGRlZmF1bHRDb2xXaWR0aCk7XHJcbiAgbGV0IHJlbWFpbmluZ1dpZHRoID0gZXhwZWN0ZWRXaWR0aCAtIGNvbnRlbnRXaWR0aDtcclxuICBjb25zdCBjb2x1bW5zUHJvY2Vzc2VkOiBhbnlbXSA9IFtdO1xyXG4gIGNvbnN0IHJlbWFpbmluZ1dpZHRoTGltaXQgPSAxOyAvLyB3aGVuIHRvIHN0b3BcclxuXHJcbiAgLy8gVGhpcyBsb29wIHRha2VzIGNhcmUgb2YgdGhlXHJcbiAgZG8ge1xyXG4gICAgYWRkaXRpb25XaWR0aFBlckNvbHVtbiA9IHJlbWFpbmluZ1dpZHRoIC8gY29sdW1uc1RvUmVzaXplLmxlbmd0aDtcclxuICAgIGV4Y2VlZHNXaW5kb3cgPSBjb250ZW50V2lkdGggPj0gZXhwZWN0ZWRXaWR0aDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2x1bW5zVG9SZXNpemUpIHtcclxuICAgICAgaWYgKGV4Y2VlZHNXaW5kb3cgJiYgYWxsb3dCbGVlZCkge1xyXG4gICAgICAgIGNvbHVtbi53aWR0aCA9IGNvbHVtbi4kJG9sZFdpZHRoIHx8IGNvbHVtbi53aWR0aCB8fCBkZWZhdWx0Q29sV2lkdGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbmV3U2l6ZSA9IChjb2x1bW4ud2lkdGggfHwgZGVmYXVsdENvbFdpZHRoKSArIGFkZGl0aW9uV2lkdGhQZXJDb2x1bW47XHJcblxyXG4gICAgICAgIGlmIChjb2x1bW4ubWluV2lkdGggJiYgbmV3U2l6ZSA8IGNvbHVtbi5taW5XaWR0aCkge1xyXG4gICAgICAgICAgY29sdW1uLndpZHRoID0gY29sdW1uLm1pbldpZHRoO1xyXG4gICAgICAgICAgY29sdW1uc1Byb2Nlc3NlZC5wdXNoKGNvbHVtbik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4ubWF4V2lkdGggJiYgbmV3U2l6ZSA+IGNvbHVtbi5tYXhXaWR0aCkge1xyXG4gICAgICAgICAgY29sdW1uLndpZHRoID0gY29sdW1uLm1heFdpZHRoO1xyXG4gICAgICAgICAgY29sdW1uc1Byb2Nlc3NlZC5wdXNoKGNvbHVtbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbHVtbi53aWR0aCA9IG5ld1NpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb2x1bW4ud2lkdGggPSBNYXRoLm1heCgwLCBjb2x1bW4ud2lkdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRlbnRXaWR0aCA9IGdldENvbnRlbnRXaWR0aChhbGxDb2x1bW5zKTtcclxuICAgIHJlbWFpbmluZ1dpZHRoID0gZXhwZWN0ZWRXaWR0aCAtIGNvbnRlbnRXaWR0aDtcclxuICAgIHJlbW92ZVByb2Nlc3NlZENvbHVtbnMoY29sdW1uc1RvUmVzaXplLCBjb2x1bW5zUHJvY2Vzc2VkKTtcclxuICB9IHdoaWxlIChyZW1haW5pbmdXaWR0aCA+IHJlbWFpbmluZ1dpZHRoTGltaXQgJiYgY29sdW1uc1RvUmVzaXplLmxlbmd0aCAhPT0gMCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIHByb2Nlc3NlZCBjb2x1bW5zIGZyb20gdGhlIGN1cnJlbnQgYWN0aXZlIGNvbHVtbnMuXHJcbiAqL1xyXG5mdW5jdGlvbiByZW1vdmVQcm9jZXNzZWRDb2x1bW5zKGNvbHVtbnNUb1Jlc2l6ZTogYW55W10sIGNvbHVtbnNQcm9jZXNzZWQ6IGFueVtdKSB7XHJcbiAgZm9yIChjb25zdCBjb2x1bW4gb2YgY29sdW1uc1Byb2Nlc3NlZCkge1xyXG4gICAgY29uc3QgaW5kZXggPSBjb2x1bW5zVG9SZXNpemUuaW5kZXhPZihjb2x1bW4pO1xyXG4gICAgY29sdW1uc1RvUmVzaXplLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0cyB0aGUgd2lkdGggb2YgdGhlIGNvbHVtbnNcclxuICovXHJcbmZ1bmN0aW9uIGdldENvbnRlbnRXaWR0aChhbGxDb2x1bW5zOiBhbnksIGRlZmF1bHRDb2xXaWR0aDogbnVtYmVyID0gMzAwKTogbnVtYmVyIHtcclxuICBsZXQgY29udGVudFdpZHRoID0gMDtcclxuXHJcbiAgZm9yIChjb25zdCBjb2x1bW4gb2YgYWxsQ29sdW1ucykge1xyXG4gICAgY29udGVudFdpZHRoICs9IGNvbHVtbi53aWR0aCB8fCBkZWZhdWx0Q29sV2lkdGg7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29udGVudFdpZHRoO1xyXG59XHJcbiJdfQ==