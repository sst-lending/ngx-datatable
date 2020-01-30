/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getterForProp } from './column-prop-getters';
import { SortType } from '../types/sort.type';
import { SortDirection } from '../types/sort-direction.type';
/**
 * Gets the next sort direction
 * @param {?} sortType
 * @param {?} current
 * @return {?}
 */
export function nextSortDir(sortType, current) {
    if (sortType === SortType.single) {
        if (current === SortDirection.asc) {
            return SortDirection.desc;
        }
        else {
            return SortDirection.asc;
        }
    }
    else {
        if (!current) {
            return SortDirection.asc;
        }
        else if (current === SortDirection.asc) {
            return SortDirection.desc;
        }
        else if (current === SortDirection.desc) {
            return undefined;
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
}
/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
export function orderByComparator(a, b) {
    if (a === null || typeof a === 'undefined')
        a = 0;
    if (b === null || typeof b === 'undefined')
        b = 0;
    if (a instanceof Date && b instanceof Date) {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
    }
    else if (isNaN(parseFloat(a)) || !isFinite(a) || (isNaN(parseFloat(b)) || !isFinite(b))) {
        // Convert to string in case of a=0 or b=0
        a = String(a);
        b = String(b);
        // Isn't a number so lowercase the string to properly compare
        if (a.toLowerCase() < b.toLowerCase())
            return -1;
        if (a.toLowerCase() > b.toLowerCase())
            return 1;
    }
    else {
        // Parse strings as numbers to compare properly
        if (parseFloat(a) < parseFloat(b))
            return -1;
        if (parseFloat(a) > parseFloat(b))
            return 1;
    }
    // equal each other
    return 0;
}
/**
 * creates a shallow copy of the `rows` input and returns the sorted copy. this function
 * does not sort the `rows` argument in place
 * @param {?} rows
 * @param {?} columns
 * @param {?} dirs
 * @return {?}
 */
export function sortRows(rows, columns, dirs) {
    if (!rows)
        return [];
    if (!dirs || !dirs.length || !columns)
        return [...rows];
    /**
     * record the row ordering of results from prior sort operations (if applicable)
     * this is necessary to guarantee stable sorting behavior
     * @type {?}
     */
    const rowToIndexMap = new Map();
    rows.forEach((/**
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    (row, index) => rowToIndexMap.set(row, index)));
    /** @type {?} */
    const temp = [...rows];
    /** @type {?} */
    const cols = columns.reduce((/**
     * @param {?} obj
     * @param {?} col
     * @return {?}
     */
    (obj, col) => {
        if (col.comparator && typeof col.comparator === 'function') {
            obj[col.prop] = col.comparator;
        }
        return obj;
    }), {});
    // cache valueGetter and compareFn so that they
    // do not need to be looked-up in the sort function body
    /** @type {?} */
    const cachedDirs = dirs.map((/**
     * @param {?} dir
     * @return {?}
     */
    dir => {
        /** @type {?} */
        const prop = dir.prop;
        return {
            prop,
            dir: dir.dir,
            valueGetter: getterForProp(prop),
            compareFn: cols[prop] || orderByComparator
        };
    }));
    return temp.sort((/**
     * @param {?} rowA
     * @param {?} rowB
     * @return {?}
     */
    function (rowA, rowB) {
        for (const cachedDir of cachedDirs) {
            // Get property and valuegetters for column to be sorted
            const { prop, valueGetter } = cachedDir;
            // Get A and B cell values from rows based on properties of the columns
            /** @type {?} */
            const propA = valueGetter(rowA, prop);
            /** @type {?} */
            const propB = valueGetter(rowB, prop);
            // Compare function gets five parameters:
            // Two cell values to be compared as propA and propB
            // Two rows corresponding to the cells as rowA and rowB
            // Direction of the sort for this column as SortDirection
            // Compare can be a standard JS comparison function (a,b) => -1|0|1
            // as additional parameters are silently ignored. The whole row and sort
            // direction enable more complex sort logic.
            /** @type {?} */
            const comparison = cachedDir.dir !== SortDirection.desc
                ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir)
                : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir);
            // Don't return 0 yet in case of needing to sort by next property
            if (comparison !== 0)
                return comparison;
        }
        if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB)))
            return 0;
        /**
         * all else being equal, preserve original order of the rows (stable sort)
         */
        return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL3NvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7O0FBSzdELE1BQU0sVUFBVSxXQUFXLENBQUMsUUFBa0IsRUFBRSxPQUFzQjtJQUNwRSxJQUFJLFFBQVEsS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO1FBQ2hDLElBQUksT0FBTyxLQUFLLGFBQWEsQ0FBQyxHQUFHLEVBQUU7WUFDakMsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDO1NBQzNCO2FBQU07WUFDTCxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUM7U0FDMUI7S0FDRjtTQUFNO1FBQ0wsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQztTQUMxQjthQUFNLElBQUksT0FBTyxLQUFLLGFBQWEsQ0FBQyxHQUFHLEVBQUU7WUFDeEMsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDO1NBQzNCO2FBQU0sSUFBSSxPQUFPLEtBQUssYUFBYSxDQUFDLElBQUksRUFBRTtZQUN6QyxPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELG1EQUFtRDtRQUNuRCxPQUFPLFNBQVMsQ0FBQztLQUNsQjtBQUNILENBQUM7Ozs7Ozs7O0FBTUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLENBQU0sRUFBRSxDQUFNO0lBQzlDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxXQUFXO1FBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRCxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksT0FBTyxDQUFD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QUksVUFBVSxFQUFFOztrQkFFNUIsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEdBQUcsU0FBUzs7O2tCQUVqQyxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7O2tCQUMvQixLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7Ozs7Ozs7OztrQkFTL0IsVUFBVSxHQUNkLFNBQVMsQ0FBQyxHQUFHLEtBQUssYUFBYSxDQUFDLElBQUk7Z0JBQ2xDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDO2dCQUM5RCxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDO1lBRW5FLGlFQUFpRTtZQUNqRSxJQUFJLFVBQVUsS0FBSyxDQUFDO2dCQUFFLE9BQU8sVUFBVSxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFFcEU7O1dBRUc7UUFDSCxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXR0ZXJGb3JQcm9wIH0gZnJvbSAnLi9jb2x1bW4tcHJvcC1nZXR0ZXJzJztcclxuaW1wb3J0IHsgU29ydFR5cGUgfSBmcm9tICcuLi90eXBlcy9zb3J0LnR5cGUnO1xyXG5pbXBvcnQgeyBTb3J0RGlyZWN0aW9uIH0gZnJvbSAnLi4vdHlwZXMvc29ydC1kaXJlY3Rpb24udHlwZSc7XHJcbmltcG9ydCB7IFNvcnRQcm9wRGlyIH0gZnJvbSAnLi4vdHlwZXMvc29ydC1wcm9wLWRpci50eXBlJztcclxuLyoqXHJcbiAqIEdldHMgdGhlIG5leHQgc29ydCBkaXJlY3Rpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXh0U29ydERpcihzb3J0VHlwZTogU29ydFR5cGUsIGN1cnJlbnQ6IFNvcnREaXJlY3Rpb24pOiBTb3J0RGlyZWN0aW9uIHwgdW5kZWZpbmVkIHtcclxuICBpZiAoc29ydFR5cGUgPT09IFNvcnRUeXBlLnNpbmdsZSkge1xyXG4gICAgaWYgKGN1cnJlbnQgPT09IFNvcnREaXJlY3Rpb24uYXNjKSB7XHJcbiAgICAgIHJldHVybiBTb3J0RGlyZWN0aW9uLmRlc2M7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gU29ydERpcmVjdGlvbi5hc2M7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICghY3VycmVudCkge1xyXG4gICAgICByZXR1cm4gU29ydERpcmVjdGlvbi5hc2M7XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQgPT09IFNvcnREaXJlY3Rpb24uYXNjKSB7XHJcbiAgICAgIHJldHVybiBTb3J0RGlyZWN0aW9uLmRlc2M7XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQgPT09IFNvcnREaXJlY3Rpb24uZGVzYykge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLy8gYXZvaWQgVFM3MDMwOiBOb3QgYWxsIGNvZGUgcGF0aHMgcmV0dXJuIGEgdmFsdWUuXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkYXB0ZWQgZnJvbSBmdWVsZC11aSBvbiA2LzIxNlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vRnVlbEludGVyYWN0aXZlL2Z1ZWwtdWkvdHJlZS9tYXN0ZXIvc3JjL3BpcGVzL09yZGVyQnlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvcmRlckJ5Q29tcGFyYXRvcihhOiBhbnksIGI6IGFueSk6IG51bWJlciB7XHJcbiAgaWYgKGEgPT09IG51bGwgfHwgdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnKSBhID0gMDtcclxuICBpZiAoYiA9PT0gbnVsbCB8fCB0eXBlb2YgYiA9PT0gJ3VuZGVmaW5lZCcpIGIgPSAwO1xyXG4gIGlmIChhIGluc3RhbmNlb2YgRGF0ZSAmJiBiIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgaWYgKGEgPCBiKSByZXR1cm4gLTE7XHJcbiAgICBpZiAoYSA+IGIpIHJldHVybiAxO1xyXG4gIH0gZWxzZSBpZiAoaXNOYU4ocGFyc2VGbG9hdChhKSkgfHwgIWlzRmluaXRlKGEpIHx8IChpc05hTihwYXJzZUZsb2F0KGIpKSB8fCAhaXNGaW5pdGUoYikpKSB7XHJcbiAgICAvLyBDb252ZXJ0IHRvIHN0cmluZyBpbiBjYXNlIG9mIGE9MCBvciBiPTBcclxuICAgIGEgPSBTdHJpbmcoYSk7XHJcbiAgICBiID0gU3RyaW5nKGIpO1xyXG4gICAgLy8gSXNuJ3QgYSBudW1iZXIgc28gbG93ZXJjYXNlIHRoZSBzdHJpbmcgdG8gcHJvcGVybHkgY29tcGFyZVxyXG4gICAgaWYgKGEudG9Mb3dlckNhc2UoKSA8IGIudG9Mb3dlckNhc2UoKSkgcmV0dXJuIC0xO1xyXG4gICAgaWYgKGEudG9Mb3dlckNhc2UoKSA+IGIudG9Mb3dlckNhc2UoKSkgcmV0dXJuIDE7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIFBhcnNlIHN0cmluZ3MgYXMgbnVtYmVycyB0byBjb21wYXJlIHByb3Blcmx5XHJcbiAgICBpZiAocGFyc2VGbG9hdChhKSA8IHBhcnNlRmxvYXQoYikpIHJldHVybiAtMTtcclxuICAgIGlmIChwYXJzZUZsb2F0KGEpID4gcGFyc2VGbG9hdChiKSkgcmV0dXJuIDE7XHJcbiAgfVxyXG5cclxuICAvLyBlcXVhbCBlYWNoIG90aGVyXHJcbiAgcmV0dXJuIDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBjcmVhdGVzIGEgc2hhbGxvdyBjb3B5IG9mIHRoZSBgcm93c2AgaW5wdXQgYW5kIHJldHVybnMgdGhlIHNvcnRlZCBjb3B5LiB0aGlzIGZ1bmN0aW9uXHJcbiAqIGRvZXMgbm90IHNvcnQgdGhlIGByb3dzYCBhcmd1bWVudCBpbiBwbGFjZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRSb3dzKHJvd3M6IGFueVtdLCBjb2x1bW5zOiBhbnlbXSwgZGlyczogU29ydFByb3BEaXJbXSk6IGFueVtdIHtcclxuICBpZiAoIXJvd3MpIHJldHVybiBbXTtcclxuICBpZiAoIWRpcnMgfHwgIWRpcnMubGVuZ3RoIHx8ICFjb2x1bW5zKSByZXR1cm4gWy4uLnJvd3NdO1xyXG5cclxuICAvKipcclxuICAgKiByZWNvcmQgdGhlIHJvdyBvcmRlcmluZyBvZiByZXN1bHRzIGZyb20gcHJpb3Igc29ydCBvcGVyYXRpb25zIChpZiBhcHBsaWNhYmxlKVxyXG4gICAqIHRoaXMgaXMgbmVjZXNzYXJ5IHRvIGd1YXJhbnRlZSBzdGFibGUgc29ydGluZyBiZWhhdmlvclxyXG4gICAqL1xyXG4gIGNvbnN0IHJvd1RvSW5kZXhNYXAgPSBuZXcgTWFwPGFueSwgbnVtYmVyPigpO1xyXG4gIHJvd3MuZm9yRWFjaCgocm93LCBpbmRleCkgPT4gcm93VG9JbmRleE1hcC5zZXQocm93LCBpbmRleCkpO1xyXG5cclxuICBjb25zdCB0ZW1wID0gWy4uLnJvd3NdO1xyXG4gIGNvbnN0IGNvbHMgPSBjb2x1bW5zLnJlZHVjZSgob2JqLCBjb2wpID0+IHtcclxuICAgIGlmIChjb2wuY29tcGFyYXRvciAmJiB0eXBlb2YgY29sLmNvbXBhcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgb2JqW2NvbC5wcm9wXSA9IGNvbC5jb21wYXJhdG9yO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iajtcclxuICB9LCB7fSk7XHJcblxyXG4gIC8vIGNhY2hlIHZhbHVlR2V0dGVyIGFuZCBjb21wYXJlRm4gc28gdGhhdCB0aGV5XHJcbiAgLy8gZG8gbm90IG5lZWQgdG8gYmUgbG9va2VkLXVwIGluIHRoZSBzb3J0IGZ1bmN0aW9uIGJvZHlcclxuICBjb25zdCBjYWNoZWREaXJzID0gZGlycy5tYXAoZGlyID0+IHtcclxuICAgIGNvbnN0IHByb3AgPSBkaXIucHJvcDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3AsXHJcbiAgICAgIGRpcjogZGlyLmRpcixcclxuICAgICAgdmFsdWVHZXR0ZXI6IGdldHRlckZvclByb3AocHJvcCksXHJcbiAgICAgIGNvbXBhcmVGbjogY29sc1twcm9wXSB8fCBvcmRlckJ5Q29tcGFyYXRvclxyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHRlbXAuc29ydChmdW5jdGlvbihyb3dBOiBhbnksIHJvd0I6IGFueSkge1xyXG4gICAgZm9yIChjb25zdCBjYWNoZWREaXIgb2YgY2FjaGVkRGlycykge1xyXG4gICAgICAvLyBHZXQgcHJvcGVydHkgYW5kIHZhbHVlZ2V0dGVycyBmb3IgY29sdW1uIHRvIGJlIHNvcnRlZFxyXG4gICAgICBjb25zdCB7IHByb3AsIHZhbHVlR2V0dGVyIH0gPSBjYWNoZWREaXI7XHJcbiAgICAgIC8vIEdldCBBIGFuZCBCIGNlbGwgdmFsdWVzIGZyb20gcm93cyBiYXNlZCBvbiBwcm9wZXJ0aWVzIG9mIHRoZSBjb2x1bW5zXHJcbiAgICAgIGNvbnN0IHByb3BBID0gdmFsdWVHZXR0ZXIocm93QSwgcHJvcCk7XHJcbiAgICAgIGNvbnN0IHByb3BCID0gdmFsdWVHZXR0ZXIocm93QiwgcHJvcCk7XHJcblxyXG4gICAgICAvLyBDb21wYXJlIGZ1bmN0aW9uIGdldHMgZml2ZSBwYXJhbWV0ZXJzOlxyXG4gICAgICAvLyBUd28gY2VsbCB2YWx1ZXMgdG8gYmUgY29tcGFyZWQgYXMgcHJvcEEgYW5kIHByb3BCXHJcbiAgICAgIC8vIFR3byByb3dzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGNlbGxzIGFzIHJvd0EgYW5kIHJvd0JcclxuICAgICAgLy8gRGlyZWN0aW9uIG9mIHRoZSBzb3J0IGZvciB0aGlzIGNvbHVtbiBhcyBTb3J0RGlyZWN0aW9uXHJcbiAgICAgIC8vIENvbXBhcmUgY2FuIGJlIGEgc3RhbmRhcmQgSlMgY29tcGFyaXNvbiBmdW5jdGlvbiAoYSxiKSA9PiAtMXwwfDFcclxuICAgICAgLy8gYXMgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGFyZSBzaWxlbnRseSBpZ25vcmVkLiBUaGUgd2hvbGUgcm93IGFuZCBzb3J0XHJcbiAgICAgIC8vIGRpcmVjdGlvbiBlbmFibGUgbW9yZSBjb21wbGV4IHNvcnQgbG9naWMuXHJcbiAgICAgIGNvbnN0IGNvbXBhcmlzb24gPVxyXG4gICAgICAgIGNhY2hlZERpci5kaXIgIT09IFNvcnREaXJlY3Rpb24uZGVzY1xyXG4gICAgICAgICAgPyBjYWNoZWREaXIuY29tcGFyZUZuKHByb3BBLCBwcm9wQiwgcm93QSwgcm93QiwgY2FjaGVkRGlyLmRpcilcclxuICAgICAgICAgIDogLWNhY2hlZERpci5jb21wYXJlRm4ocHJvcEEsIHByb3BCLCByb3dBLCByb3dCLCBjYWNoZWREaXIuZGlyKTtcclxuXHJcbiAgICAgIC8vIERvbid0IHJldHVybiAwIHlldCBpbiBjYXNlIG9mIG5lZWRpbmcgdG8gc29ydCBieSBuZXh0IHByb3BlcnR5XHJcbiAgICAgIGlmIChjb21wYXJpc29uICE9PSAwKSByZXR1cm4gY29tcGFyaXNvbjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIShyb3dUb0luZGV4TWFwLmhhcyhyb3dBKSAmJiByb3dUb0luZGV4TWFwLmhhcyhyb3dCKSkpIHJldHVybiAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWxsIGVsc2UgYmVpbmcgZXF1YWwsIHByZXNlcnZlIG9yaWdpbmFsIG9yZGVyIG9mIHRoZSByb3dzIChzdGFibGUgc29ydClcclxuICAgICAqL1xyXG4gICAgcmV0dXJuIHJvd1RvSW5kZXhNYXAuZ2V0KHJvd0EpIDwgcm93VG9JbmRleE1hcC5nZXQocm93QikgPyAtMSA6IDE7XHJcbiAgfSk7XHJcbn1cclxuIl19