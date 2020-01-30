/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
        return tslib_1.__spread(rows);
    /**
     * record the row ordering of results from prior sort operations (if applicable)
     * this is necessary to guarantee stable sorting behavior
     * @type {?}
     */
    var rowToIndexMap = new Map();
    rows.forEach((/**
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    function (row, index) { return rowToIndexMap.set(row, index); }));
    /** @type {?} */
    var temp = tslib_1.__spread(rows);
    /** @type {?} */
    var cols = columns.reduce((/**
     * @param {?} obj
     * @param {?} col
     * @return {?}
     */
    function (obj, col) {
        if (col.comparator && typeof col.comparator === 'function') {
            obj[col.prop] = col.comparator;
        }
        return obj;
    }), {});
    // cache valueGetter and compareFn so that they
    // do not need to be looked-up in the sort function body
    /** @type {?} */
    var cachedDirs = dirs.map((/**
     * @param {?} dir
     * @return {?}
     */
    function (dir) {
        /** @type {?} */
        var prop = dir.prop;
        return {
            prop: prop,
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
        var e_1, _a;
        try {
            for (var cachedDirs_1 = tslib_1.__values(cachedDirs), cachedDirs_1_1 = cachedDirs_1.next(); !cachedDirs_1_1.done; cachedDirs_1_1 = cachedDirs_1.next()) {
                var cachedDir = cachedDirs_1_1.value;
                // Get property and valuegetters for column to be sorted
                var prop = cachedDir.prop, valueGetter = cachedDir.valueGetter;
                // Get A and B cell values from rows based on properties of the columns
                /** @type {?} */
                var propA = valueGetter(rowA, prop);
                /** @type {?} */
                var propB = valueGetter(rowB, prop);
                // Compare function gets five parameters:
                // Two cell values to be compared as propA and propB
                // Two rows corresponding to the cells as rowA and rowB
                // Direction of the sort for this column as SortDirection
                // Compare can be a standard JS comparison function (a,b) => -1|0|1
                // as additional parameters are silently ignored. The whole row and sort
                // direction enable more complex sort logic.
                /** @type {?} */
                var comparison = cachedDir.dir !== SortDirection.desc
                    ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir)
                    : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir);
                // Don't return 0 yet in case of needing to sort by next property
                if (comparison !== 0)
                    return comparison;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (cachedDirs_1_1 && !cachedDirs_1_1.done && (_a = cachedDirs_1.return)) _a.call(cachedDirs_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB)))
            return 0;
        /**
         * all else being equal, preserve original order of the rows (stable sort)
         */
        return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL3NvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7OztBQUs3RCxNQUFNLFVBQVUsV0FBVyxDQUFDLFFBQWtCLEVBQUUsT0FBc0I7SUFDcEUsSUFBSSxRQUFRLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtRQUNoQyxJQUFJLE9BQU8sS0FBSyxhQUFhLENBQUMsR0FBRyxFQUFFO1lBQ2pDLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQztTQUMzQjthQUFNO1lBQ0wsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDO1NBQzFCO0tBQ0Y7U0FBTTtRQUNMLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUM7U0FDMUI7YUFBTSxJQUFJLE9BQU8sS0FBSyxhQUFhLENBQUMsR0FBRyxFQUFFO1lBQ3hDLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQztTQUMzQjthQUFNLElBQUksT0FBTyxLQUFLLGFBQWEsQ0FBQyxJQUFJLEVBQUU7WUFDekMsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxtREFBbUQ7UUFDbkQsT0FBTyxTQUFTLENBQUM7S0FDbEI7QUFDSCxDQUFDOzs7Ozs7OztBQU1ELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxDQUFNLEVBQUUsQ0FBTTtJQUM5QyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssV0FBVztRQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEQsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FB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QUFFO2dCQUEvQixJQUFNLFNBQVMsdUJBQUE7O2dCQUVWLElBQUEscUJBQUksRUFBRSxtQ0FBVzs7O29CQUVuQixLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7O29CQUMvQixLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7Ozs7Ozs7OztvQkFTL0IsVUFBVSxHQUNkLFNBQVMsQ0FBQyxHQUFHLEtBQUssYUFBYSxDQUFDLElBQUk7b0JBQ2xDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDO29CQUM5RCxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDO2dCQUVuRSxpRUFBaUU7Z0JBQ2pFLElBQUksVUFBVSxLQUFLLENBQUM7b0JBQUUsT0FBTyxVQUFVLENBQUM7YUFDekM7Ozs7Ozs7OztRQUVELElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXBFOztXQUVHO1FBQ0gsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0dGVyRm9yUHJvcCB9IGZyb20gJy4vY29sdW1uLXByb3AtZ2V0dGVycyc7XHJcbmltcG9ydCB7IFNvcnRUeXBlIH0gZnJvbSAnLi4vdHlwZXMvc29ydC50eXBlJztcclxuaW1wb3J0IHsgU29ydERpcmVjdGlvbiB9IGZyb20gJy4uL3R5cGVzL3NvcnQtZGlyZWN0aW9uLnR5cGUnO1xyXG5pbXBvcnQgeyBTb3J0UHJvcERpciB9IGZyb20gJy4uL3R5cGVzL3NvcnQtcHJvcC1kaXIudHlwZSc7XHJcbi8qKlxyXG4gKiBHZXRzIHRoZSBuZXh0IHNvcnQgZGlyZWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbmV4dFNvcnREaXIoc29ydFR5cGU6IFNvcnRUeXBlLCBjdXJyZW50OiBTb3J0RGlyZWN0aW9uKTogU29ydERpcmVjdGlvbiB8IHVuZGVmaW5lZCB7XHJcbiAgaWYgKHNvcnRUeXBlID09PSBTb3J0VHlwZS5zaW5nbGUpIHtcclxuICAgIGlmIChjdXJyZW50ID09PSBTb3J0RGlyZWN0aW9uLmFzYykge1xyXG4gICAgICByZXR1cm4gU29ydERpcmVjdGlvbi5kZXNjO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFNvcnREaXJlY3Rpb24uYXNjO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoIWN1cnJlbnQpIHtcclxuICAgICAgcmV0dXJuIFNvcnREaXJlY3Rpb24uYXNjO1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50ID09PSBTb3J0RGlyZWN0aW9uLmFzYykge1xyXG4gICAgICByZXR1cm4gU29ydERpcmVjdGlvbi5kZXNjO1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50ID09PSBTb3J0RGlyZWN0aW9uLmRlc2MpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8vIGF2b2lkIFRTNzAzMDogTm90IGFsbCBjb2RlIHBhdGhzIHJldHVybiBhIHZhbHVlLlxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGFwdGVkIGZyb20gZnVlbGQtdWkgb24gNi8yMTZcclxuICogaHR0cHM6Ly9naXRodWIuY29tL0Z1ZWxJbnRlcmFjdGl2ZS9mdWVsLXVpL3RyZWUvbWFzdGVyL3NyYy9waXBlcy9PcmRlckJ5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJCeUNvbXBhcmF0b3IoYTogYW55LCBiOiBhbnkpOiBudW1iZXIge1xyXG4gIGlmIChhID09PSBudWxsIHx8IHR5cGVvZiBhID09PSAndW5kZWZpbmVkJykgYSA9IDA7XHJcbiAgaWYgKGIgPT09IG51bGwgfHwgdHlwZW9mIGIgPT09ICd1bmRlZmluZWQnKSBiID0gMDtcclxuICBpZiAoYSBpbnN0YW5jZW9mIERhdGUgJiYgYiBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgIGlmIChhIDwgYikgcmV0dXJuIC0xO1xyXG4gICAgaWYgKGEgPiBiKSByZXR1cm4gMTtcclxuICB9IGVsc2UgaWYgKGlzTmFOKHBhcnNlRmxvYXQoYSkpIHx8ICFpc0Zpbml0ZShhKSB8fCAoaXNOYU4ocGFyc2VGbG9hdChiKSkgfHwgIWlzRmluaXRlKGIpKSkge1xyXG4gICAgLy8gQ29udmVydCB0byBzdHJpbmcgaW4gY2FzZSBvZiBhPTAgb3IgYj0wXHJcbiAgICBhID0gU3RyaW5nKGEpO1xyXG4gICAgYiA9IFN0cmluZyhiKTtcclxuICAgIC8vIElzbid0IGEgbnVtYmVyIHNvIGxvd2VyY2FzZSB0aGUgc3RyaW5nIHRvIHByb3Blcmx5IGNvbXBhcmVcclxuICAgIGlmIChhLnRvTG93ZXJDYXNlKCkgPCBiLnRvTG93ZXJDYXNlKCkpIHJldHVybiAtMTtcclxuICAgIGlmIChhLnRvTG93ZXJDYXNlKCkgPiBiLnRvTG93ZXJDYXNlKCkpIHJldHVybiAxO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBQYXJzZSBzdHJpbmdzIGFzIG51bWJlcnMgdG8gY29tcGFyZSBwcm9wZXJseVxyXG4gICAgaWYgKHBhcnNlRmxvYXQoYSkgPCBwYXJzZUZsb2F0KGIpKSByZXR1cm4gLTE7XHJcbiAgICBpZiAocGFyc2VGbG9hdChhKSA+IHBhcnNlRmxvYXQoYikpIHJldHVybiAxO1xyXG4gIH1cclxuXHJcbiAgLy8gZXF1YWwgZWFjaCBvdGhlclxyXG4gIHJldHVybiAwO1xyXG59XHJcblxyXG4vKipcclxuICogY3JlYXRlcyBhIHNoYWxsb3cgY29weSBvZiB0aGUgYHJvd3NgIGlucHV0IGFuZCByZXR1cm5zIHRoZSBzb3J0ZWQgY29weS4gdGhpcyBmdW5jdGlvblxyXG4gKiBkb2VzIG5vdCBzb3J0IHRoZSBgcm93c2AgYXJndW1lbnQgaW4gcGxhY2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0Um93cyhyb3dzOiBhbnlbXSwgY29sdW1uczogYW55W10sIGRpcnM6IFNvcnRQcm9wRGlyW10pOiBhbnlbXSB7XHJcbiAgaWYgKCFyb3dzKSByZXR1cm4gW107XHJcbiAgaWYgKCFkaXJzIHx8ICFkaXJzLmxlbmd0aCB8fCAhY29sdW1ucykgcmV0dXJuIFsuLi5yb3dzXTtcclxuXHJcbiAgLyoqXHJcbiAgICogcmVjb3JkIHRoZSByb3cgb3JkZXJpbmcgb2YgcmVzdWx0cyBmcm9tIHByaW9yIHNvcnQgb3BlcmF0aW9ucyAoaWYgYXBwbGljYWJsZSlcclxuICAgKiB0aGlzIGlzIG5lY2Vzc2FyeSB0byBndWFyYW50ZWUgc3RhYmxlIHNvcnRpbmcgYmVoYXZpb3JcclxuICAgKi9cclxuICBjb25zdCByb3dUb0luZGV4TWFwID0gbmV3IE1hcDxhbnksIG51bWJlcj4oKTtcclxuICByb3dzLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHJvd1RvSW5kZXhNYXAuc2V0KHJvdywgaW5kZXgpKTtcclxuXHJcbiAgY29uc3QgdGVtcCA9IFsuLi5yb3dzXTtcclxuICBjb25zdCBjb2xzID0gY29sdW1ucy5yZWR1Y2UoKG9iaiwgY29sKSA9PiB7XHJcbiAgICBpZiAoY29sLmNvbXBhcmF0b3IgJiYgdHlwZW9mIGNvbC5jb21wYXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIG9ialtjb2wucHJvcF0gPSBjb2wuY29tcGFyYXRvcjtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmo7XHJcbiAgfSwge30pO1xyXG5cclxuICAvLyBjYWNoZSB2YWx1ZUdldHRlciBhbmQgY29tcGFyZUZuIHNvIHRoYXQgdGhleVxyXG4gIC8vIGRvIG5vdCBuZWVkIHRvIGJlIGxvb2tlZC11cCBpbiB0aGUgc29ydCBmdW5jdGlvbiBib2R5XHJcbiAgY29uc3QgY2FjaGVkRGlycyA9IGRpcnMubWFwKGRpciA9PiB7XHJcbiAgICBjb25zdCBwcm9wID0gZGlyLnByb3A7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wLFxyXG4gICAgICBkaXI6IGRpci5kaXIsXHJcbiAgICAgIHZhbHVlR2V0dGVyOiBnZXR0ZXJGb3JQcm9wKHByb3ApLFxyXG4gICAgICBjb21wYXJlRm46IGNvbHNbcHJvcF0gfHwgb3JkZXJCeUNvbXBhcmF0b3JcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB0ZW1wLnNvcnQoZnVuY3Rpb24ocm93QTogYW55LCByb3dCOiBhbnkpIHtcclxuICAgIGZvciAoY29uc3QgY2FjaGVkRGlyIG9mIGNhY2hlZERpcnMpIHtcclxuICAgICAgLy8gR2V0IHByb3BlcnR5IGFuZCB2YWx1ZWdldHRlcnMgZm9yIGNvbHVtbiB0byBiZSBzb3J0ZWRcclxuICAgICAgY29uc3QgeyBwcm9wLCB2YWx1ZUdldHRlciB9ID0gY2FjaGVkRGlyO1xyXG4gICAgICAvLyBHZXQgQSBhbmQgQiBjZWxsIHZhbHVlcyBmcm9tIHJvd3MgYmFzZWQgb24gcHJvcGVydGllcyBvZiB0aGUgY29sdW1uc1xyXG4gICAgICBjb25zdCBwcm9wQSA9IHZhbHVlR2V0dGVyKHJvd0EsIHByb3ApO1xyXG4gICAgICBjb25zdCBwcm9wQiA9IHZhbHVlR2V0dGVyKHJvd0IsIHByb3ApO1xyXG5cclxuICAgICAgLy8gQ29tcGFyZSBmdW5jdGlvbiBnZXRzIGZpdmUgcGFyYW1ldGVyczpcclxuICAgICAgLy8gVHdvIGNlbGwgdmFsdWVzIHRvIGJlIGNvbXBhcmVkIGFzIHByb3BBIGFuZCBwcm9wQlxyXG4gICAgICAvLyBUd28gcm93cyBjb3JyZXNwb25kaW5nIHRvIHRoZSBjZWxscyBhcyByb3dBIGFuZCByb3dCXHJcbiAgICAgIC8vIERpcmVjdGlvbiBvZiB0aGUgc29ydCBmb3IgdGhpcyBjb2x1bW4gYXMgU29ydERpcmVjdGlvblxyXG4gICAgICAvLyBDb21wYXJlIGNhbiBiZSBhIHN0YW5kYXJkIEpTIGNvbXBhcmlzb24gZnVuY3Rpb24gKGEsYikgPT4gLTF8MHwxXHJcbiAgICAgIC8vIGFzIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBhcmUgc2lsZW50bHkgaWdub3JlZC4gVGhlIHdob2xlIHJvdyBhbmQgc29ydFxyXG4gICAgICAvLyBkaXJlY3Rpb24gZW5hYmxlIG1vcmUgY29tcGxleCBzb3J0IGxvZ2ljLlxyXG4gICAgICBjb25zdCBjb21wYXJpc29uID1cclxuICAgICAgICBjYWNoZWREaXIuZGlyICE9PSBTb3J0RGlyZWN0aW9uLmRlc2NcclxuICAgICAgICAgID8gY2FjaGVkRGlyLmNvbXBhcmVGbihwcm9wQSwgcHJvcEIsIHJvd0EsIHJvd0IsIGNhY2hlZERpci5kaXIpXHJcbiAgICAgICAgICA6IC1jYWNoZWREaXIuY29tcGFyZUZuKHByb3BBLCBwcm9wQiwgcm93QSwgcm93QiwgY2FjaGVkRGlyLmRpcik7XHJcblxyXG4gICAgICAvLyBEb24ndCByZXR1cm4gMCB5ZXQgaW4gY2FzZSBvZiBuZWVkaW5nIHRvIHNvcnQgYnkgbmV4dCBwcm9wZXJ0eVxyXG4gICAgICBpZiAoY29tcGFyaXNvbiAhPT0gMCkgcmV0dXJuIGNvbXBhcmlzb247XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCEocm93VG9JbmRleE1hcC5oYXMocm93QSkgJiYgcm93VG9JbmRleE1hcC5oYXMocm93QikpKSByZXR1cm4gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIGFsbCBlbHNlIGJlaW5nIGVxdWFsLCBwcmVzZXJ2ZSBvcmlnaW5hbCBvcmRlciBvZiB0aGUgcm93cyAoc3RhYmxlIHNvcnQpXHJcbiAgICAgKi9cclxuICAgIHJldHVybiByb3dUb0luZGV4TWFwLmdldChyb3dBKSA8IHJvd1RvSW5kZXhNYXAuZ2V0KHJvd0IpID8gLTEgOiAxO1xyXG4gIH0pO1xyXG59XHJcbiJdfQ==