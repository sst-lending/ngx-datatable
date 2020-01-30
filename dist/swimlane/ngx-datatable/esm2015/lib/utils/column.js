/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the columns by pin.
 * @param {?} cols
 * @return {?}
 */
export function columnsByPin(cols) {
    /** @type {?} */
    const ret = {
        left: [],
        center: [],
        right: []
    };
    if (cols) {
        for (const col of cols) {
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
    /** @type {?} */
    let totalWidth = 0;
    if (columns) {
        for (const c of columns) {
            /** @type {?} */
            const has = prop && c[prop];
            /** @type {?} */
            const width = has ? c[prop] : c.width;
            totalWidth = totalWidth + parseFloat(width);
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
    /** @type {?} */
    let totalWidth = 0;
    for (const column of columns) {
        /** @type {?} */
        const has = prop && column[prop];
        totalWidth = totalWidth + (has ? column[prop] : column.width);
    }
    return totalWidth;
}
/**
 * @param {?} val
 * @return {?}
 */
export function columnsByPinArr(val) {
    /** @type {?} */
    const colsByPinArr = [];
    /** @type {?} */
    const colsByPin = columnsByPin(val);
    colsByPinArr.push({ type: 'left', columns: colsByPin['left'] });
    colsByPinArr.push({ type: 'center', columns: colsByPin['center'] });
    colsByPinArr.push({ type: 'right', columns: colsByPin['right'] });
    return colsByPinArr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN3aW1sYW5lL25neC1kYXRhdGFibGUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvY29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdBLE1BQU0sVUFBVSxZQUFZLENBQUMsSUFBVzs7VUFDaEMsR0FBRyxHQUEyQztRQUNsRCxJQUFJLEVBQUUsRUFBRTtRQUNSLE1BQU0sRUFBRSxFQUFFO1FBQ1YsS0FBSyxFQUFFLEVBQUU7S0FDVjtJQUVELElBQUksSUFBSSxFQUFFO1FBQ1IsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDdEIsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFO2dCQUNsQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNwQjtpQkFBTSxJQUFJLEdBQUcsQ0FBQyxXQUFXLEVBQUU7Z0JBQzFCLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3RCO1NBQ0Y7S0FDRjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQzs7Ozs7OztBQUtELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxNQUFXLEVBQUUsR0FBUTtJQUNyRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDbkMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDdkMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDckMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDekMsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7QUFLRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsT0FBYyxFQUFFLElBQWE7O1FBQ3hELFVBQVUsR0FBRyxDQUFDO0lBRWxCLElBQUksT0FBTyxFQUFFO1FBQ1gsS0FBSyxNQUFNLENBQUMsSUFBSSxPQUFPLEVBQUU7O2tCQUNqQixHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7O2tCQUNyQixLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ3JDLFVBQVUsR0FBRyxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdDO0tBQ0Y7SUFFRCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDOzs7Ozs7O0FBS0QsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE9BQVksRUFBRSxJQUFVOztRQUNwRCxVQUFVLEdBQUcsQ0FBQztJQUVsQixLQUFLLE1BQU0sTUFBTSxJQUFJLE9BQU8sRUFBRTs7Y0FDdEIsR0FBRyxHQUFHLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hDLFVBQVUsR0FBRyxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9EO0lBRUQsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLEdBQVE7O1VBQ2hDLFlBQVksR0FBRyxFQUFFOztVQUNqQixTQUFTLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQztJQUVuQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoRSxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwRSxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVsRSxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFJldHVybnMgdGhlIGNvbHVtbnMgYnkgcGluLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbHVtbnNCeVBpbihjb2xzOiBhbnlbXSkge1xyXG4gIGNvbnN0IHJldDogeyBsZWZ0OiBhbnk7IGNlbnRlcjogYW55OyByaWdodDogYW55IH0gPSB7XHJcbiAgICBsZWZ0OiBbXSxcclxuICAgIGNlbnRlcjogW10sXHJcbiAgICByaWdodDogW11cclxuICB9O1xyXG5cclxuICBpZiAoY29scykge1xyXG4gICAgZm9yIChjb25zdCBjb2wgb2YgY29scykge1xyXG4gICAgICBpZiAoY29sLmZyb3plbkxlZnQpIHtcclxuICAgICAgICByZXQubGVmdC5wdXNoKGNvbCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY29sLmZyb3plblJpZ2h0KSB7XHJcbiAgICAgICAgcmV0LnJpZ2h0LnB1c2goY29sKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXQuY2VudGVyLnB1c2goY29sKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJldDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHdpZHRocyBvZiBhbGwgZ3JvdXAgc2V0cyBvZiBhIGNvbHVtblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbHVtbkdyb3VwV2lkdGhzKGdyb3VwczogYW55LCBhbGw6IGFueSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBsZWZ0OiBjb2x1bW5Ub3RhbFdpZHRoKGdyb3Vwcy5sZWZ0KSxcclxuICAgIGNlbnRlcjogY29sdW1uVG90YWxXaWR0aChncm91cHMuY2VudGVyKSxcclxuICAgIHJpZ2h0OiBjb2x1bW5Ub3RhbFdpZHRoKGdyb3Vwcy5yaWdodCksXHJcbiAgICB0b3RhbDogTWF0aC5mbG9vcihjb2x1bW5Ub3RhbFdpZHRoKGFsbCkpXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIHRvdGFsIHdpZHRoIG9mIGFsbCBjb2x1bW5zIGFuZCB0aGVpciBncm91cHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2x1bW5Ub3RhbFdpZHRoKGNvbHVtbnM6IGFueVtdLCBwcm9wPzogc3RyaW5nKSB7XHJcbiAgbGV0IHRvdGFsV2lkdGggPSAwO1xyXG5cclxuICBpZiAoY29sdW1ucykge1xyXG4gICAgZm9yIChjb25zdCBjIG9mIGNvbHVtbnMpIHtcclxuICAgICAgY29uc3QgaGFzID0gcHJvcCAmJiBjW3Byb3BdO1xyXG4gICAgICBjb25zdCB3aWR0aCA9IGhhcyA/IGNbcHJvcF0gOiBjLndpZHRoO1xyXG4gICAgICB0b3RhbFdpZHRoID0gdG90YWxXaWR0aCArIHBhcnNlRmxvYXQod2lkdGgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRvdGFsV2lkdGg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSB0b3RhbCB3aWR0aCBvZiBhbGwgY29sdW1ucyBhbmQgdGhlaXIgZ3JvdXBzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29sdW1uc1RvdGFsV2lkdGgoY29sdW1uczogYW55LCBwcm9wPzogYW55KSB7XHJcbiAgbGV0IHRvdGFsV2lkdGggPSAwO1xyXG5cclxuICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2x1bW5zKSB7XHJcbiAgICBjb25zdCBoYXMgPSBwcm9wICYmIGNvbHVtbltwcm9wXTtcclxuICAgIHRvdGFsV2lkdGggPSB0b3RhbFdpZHRoICsgKGhhcyA/IGNvbHVtbltwcm9wXSA6IGNvbHVtbi53aWR0aCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdG90YWxXaWR0aDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbHVtbnNCeVBpbkFycih2YWw6IGFueSkge1xyXG4gIGNvbnN0IGNvbHNCeVBpbkFyciA9IFtdO1xyXG4gIGNvbnN0IGNvbHNCeVBpbiA9IGNvbHVtbnNCeVBpbih2YWwpO1xyXG5cclxuICBjb2xzQnlQaW5BcnIucHVzaCh7IHR5cGU6ICdsZWZ0JywgY29sdW1uczogY29sc0J5UGluWydsZWZ0J10gfSk7XHJcbiAgY29sc0J5UGluQXJyLnB1c2goeyB0eXBlOiAnY2VudGVyJywgY29sdW1uczogY29sc0J5UGluWydjZW50ZXInXSB9KTtcclxuICBjb2xzQnlQaW5BcnIucHVzaCh7IHR5cGU6ICdyaWdodCcsIGNvbHVtbnM6IGNvbHNCeVBpblsncmlnaHQnXSB9KTtcclxuXHJcbiAgcmV0dXJuIGNvbHNCeVBpbkFycjtcclxufVxyXG4iXX0=