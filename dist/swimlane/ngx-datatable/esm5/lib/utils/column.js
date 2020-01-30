/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * Returns the columns by pin.
 * @param {?} cols
 * @return {?}
 */
export function columnsByPin(cols) {
    var e_1, _a;
    /** @type {?} */
    var ret = {
        left: [],
        center: [],
        right: []
    };
    if (cols) {
        try {
            for (var cols_1 = tslib_1.__values(cols), cols_1_1 = cols_1.next(); !cols_1_1.done; cols_1_1 = cols_1.next()) {
                var col = cols_1_1.value;
                if (col.frozenLeft) {
                    ret.left.push(col);
                }
                else if (col.frozenRight) {
                    ret.right.push(col);
                }
                else {
                    ret.center.push(col);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (cols_1_1 && !cols_1_1.done && (_a = cols_1.return)) _a.call(cols_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return ret;
}
/**
 * Returns the widths of all group sets of a column
 * @param {?} groups
 * @param {?} all
 * @return {?}
 */
export function columnGroupWidths(groups, all) {
    return {
        left: columnTotalWidth(groups.left),
        center: columnTotalWidth(groups.center),
        right: columnTotalWidth(groups.right),
        total: Math.floor(columnTotalWidth(all))
    };
}
/**
 * Calculates the total width of all columns and their groups
 * @param {?} columns
 * @param {?=} prop
 * @return {?}
 */
export function columnTotalWidth(columns, prop) {
    var e_2, _a;
    /** @type {?} */
    var totalWidth = 0;
    if (columns) {
        try {
            for (var columns_1 = tslib_1.__values(columns), columns_1_1 = columns_1.next(); !columns_1_1.done; columns_1_1 = columns_1.next()) {
                var c = columns_1_1.value;
                /** @type {?} */
                var has = prop && c[prop];
                /** @type {?} */
                var width = has ? c[prop] : c.width;
                totalWidth = totalWidth + parseFloat(width);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (columns_1_1 && !columns_1_1.done && (_a = columns_1.return)) _a.call(columns_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    return totalWidth;
}
/**
 * Calculates the total width of all columns and their groups
 * @param {?} columns
 * @param {?=} prop
 * @return {?}
 */
export function columnsTotalWidth(columns, prop) {
    var e_3, _a;
    /** @type {?} */
    var totalWidth = 0;
    try {
        for (var columns_2 = tslib_1.__values(columns), columns_2_1 = columns_2.next(); !columns_2_1.done; columns_2_1 = columns_2.next()) {
            var column = columns_2_1.value;
            /** @type {?} */
            var has = prop && column[prop];
            totalWidth = totalWidth + (has ? column[prop] : column.width);
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (columns_2_1 && !columns_2_1.done && (_a = columns_2.return)) _a.call(columns_2);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return totalWidth;
}
/**
 * @param {?} val
 * @return {?}
 */
export function columnsByPinArr(val) {
    /** @type {?} */
    var colsByPinArr = [];
    /** @type {?} */
    var colsByPin = columnsByPin(val);
    colsByPinArr.push({ type: 'left', columns: colsByPin['left'] });
    colsByPinArr.push({ type: 'center', columns: colsByPin['center'] });
    colsByPinArr.push({ type: 'right', columns: colsByPin['right'] });
    return colsByPinArr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN3aW1sYW5lL25neC1kYXRhdGFibGUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvY29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxNQUFNLFVBQVUsWUFBWSxDQUFDLElBQVc7OztRQUNoQyxHQUFHLEdBQTJDO1FBQ2xELElBQUksRUFBRSxFQUFFO1FBQ1IsTUFBTSxFQUFFLEVBQUU7UUFDVixLQUFLLEVBQUUsRUFBRTtLQUNWO0lBRUQsSUFBSSxJQUFJLEVBQUU7O1lBQ1IsS0FBa0IsSUFBQSxTQUFBLGlCQUFBLElBQUksQ0FBQSwwQkFBQSw0Q0FBRTtnQkFBbkIsSUFBTSxHQUFHLGlCQUFBO2dCQUNaLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRTtvQkFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3BCO3FCQUFNLElBQUksR0FBRyxDQUFDLFdBQVcsRUFBRTtvQkFDMUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3JCO3FCQUFNO29CQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN0QjthQUNGOzs7Ozs7Ozs7S0FDRjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQzs7Ozs7OztBQUtELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxNQUFXLEVBQUUsR0FBUTtJQUNyRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDbkMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDdkMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDckMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDekMsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7QUFLRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsT0FBYyxFQUFFLElBQWE7OztRQUN4RCxVQUFVLEdBQUcsQ0FBQztJQUVsQixJQUFJLE9BQU8sRUFBRTs7WUFDWCxLQUFnQixJQUFBLFlBQUEsaUJBQUEsT0FBTyxDQUFBLGdDQUFBLHFEQUFFO2dCQUFwQixJQUFNLENBQUMsb0JBQUE7O29CQUNKLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzs7b0JBQ3JCLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7Z0JBQ3JDLFVBQVUsR0FBRyxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdDOzs7Ozs7Ozs7S0FDRjtJQUVELE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUM7Ozs7Ozs7QUFLRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsT0FBWSxFQUFFLElBQVU7OztRQUNwRCxVQUFVLEdBQUcsQ0FBQzs7UUFFbEIsS0FBcUIsSUFBQSxZQUFBLGlCQUFBLE9BQU8sQ0FBQSxnQ0FBQSxxREFBRTtZQUF6QixJQUFNLE1BQU0sb0JBQUE7O2dCQUNULEdBQUcsR0FBRyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQyxVQUFVLEdBQUcsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvRDs7Ozs7Ozs7O0lBRUQsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLEdBQVE7O1FBQ2hDLFlBQVksR0FBRyxFQUFFOztRQUNqQixTQUFTLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQztJQUVuQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoRSxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwRSxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVsRSxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFJldHVybnMgdGhlIGNvbHVtbnMgYnkgcGluLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbHVtbnNCeVBpbihjb2xzOiBhbnlbXSkge1xyXG4gIGNvbnN0IHJldDogeyBsZWZ0OiBhbnk7IGNlbnRlcjogYW55OyByaWdodDogYW55IH0gPSB7XHJcbiAgICBsZWZ0OiBbXSxcclxuICAgIGNlbnRlcjogW10sXHJcbiAgICByaWdodDogW11cclxuICB9O1xyXG5cclxuICBpZiAoY29scykge1xyXG4gICAgZm9yIChjb25zdCBjb2wgb2YgY29scykge1xyXG4gICAgICBpZiAoY29sLmZyb3plbkxlZnQpIHtcclxuICAgICAgICByZXQubGVmdC5wdXNoKGNvbCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY29sLmZyb3plblJpZ2h0KSB7XHJcbiAgICAgICAgcmV0LnJpZ2h0LnB1c2goY29sKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXQuY2VudGVyLnB1c2goY29sKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJldDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHdpZHRocyBvZiBhbGwgZ3JvdXAgc2V0cyBvZiBhIGNvbHVtblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbHVtbkdyb3VwV2lkdGhzKGdyb3VwczogYW55LCBhbGw6IGFueSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBsZWZ0OiBjb2x1bW5Ub3RhbFdpZHRoKGdyb3Vwcy5sZWZ0KSxcclxuICAgIGNlbnRlcjogY29sdW1uVG90YWxXaWR0aChncm91cHMuY2VudGVyKSxcclxuICAgIHJpZ2h0OiBjb2x1bW5Ub3RhbFdpZHRoKGdyb3Vwcy5yaWdodCksXHJcbiAgICB0b3RhbDogTWF0aC5mbG9vcihjb2x1bW5Ub3RhbFdpZHRoKGFsbCkpXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIHRvdGFsIHdpZHRoIG9mIGFsbCBjb2x1bW5zIGFuZCB0aGVpciBncm91cHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2x1bW5Ub3RhbFdpZHRoKGNvbHVtbnM6IGFueVtdLCBwcm9wPzogc3RyaW5nKSB7XHJcbiAgbGV0IHRvdGFsV2lkdGggPSAwO1xyXG5cclxuICBpZiAoY29sdW1ucykge1xyXG4gICAgZm9yIChjb25zdCBjIG9mIGNvbHVtbnMpIHtcclxuICAgICAgY29uc3QgaGFzID0gcHJvcCAmJiBjW3Byb3BdO1xyXG4gICAgICBjb25zdCB3aWR0aCA9IGhhcyA/IGNbcHJvcF0gOiBjLndpZHRoO1xyXG4gICAgICB0b3RhbFdpZHRoID0gdG90YWxXaWR0aCArIHBhcnNlRmxvYXQod2lkdGgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRvdGFsV2lkdGg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSB0b3RhbCB3aWR0aCBvZiBhbGwgY29sdW1ucyBhbmQgdGhlaXIgZ3JvdXBzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29sdW1uc1RvdGFsV2lkdGgoY29sdW1uczogYW55LCBwcm9wPzogYW55KSB7XHJcbiAgbGV0IHRvdGFsV2lkdGggPSAwO1xyXG5cclxuICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2x1bW5zKSB7XHJcbiAgICBjb25zdCBoYXMgPSBwcm9wICYmIGNvbHVtbltwcm9wXTtcclxuICAgIHRvdGFsV2lkdGggPSB0b3RhbFdpZHRoICsgKGhhcyA/IGNvbHVtbltwcm9wXSA6IGNvbHVtbi53aWR0aCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdG90YWxXaWR0aDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbHVtbnNCeVBpbkFycih2YWw6IGFueSkge1xyXG4gIGNvbnN0IGNvbHNCeVBpbkFyciA9IFtdO1xyXG4gIGNvbnN0IGNvbHNCeVBpbiA9IGNvbHVtbnNCeVBpbih2YWwpO1xyXG5cclxuICBjb2xzQnlQaW5BcnIucHVzaCh7IHR5cGU6ICdsZWZ0JywgY29sdW1uczogY29sc0J5UGluWydsZWZ0J10gfSk7XHJcbiAgY29sc0J5UGluQXJyLnB1c2goeyB0eXBlOiAnY2VudGVyJywgY29sdW1uczogY29sc0J5UGluWydjZW50ZXInXSB9KTtcclxuICBjb2xzQnlQaW5BcnIucHVzaCh7IHR5cGU6ICdyaWdodCcsIGNvbHVtbnM6IGNvbHNCeVBpblsncmlnaHQnXSB9KTtcclxuXHJcbiAgcmV0dXJuIGNvbHNCeVBpbkFycjtcclxufVxyXG4iXX0=