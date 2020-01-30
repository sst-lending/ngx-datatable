/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { camelCase, deCamelCase } from './camel-case';
import { id } from './id';
import { getterForProp } from './column-prop-getters';
/**
 * Sets the column defaults
 * @param {?} columns
 * @return {?}
 */
export function setColumnDefaults(columns) {
    if (!columns)
        return;
    // Only one column should hold the tree view
    // Thus if multiple columns are provided with
    // isTreeColumn as true we take only the first one
    /** @type {?} */
    let treeColumnFound = false;
    for (const column of columns) {
        if (!column.$$id) {
            column.$$id = id();
        }
        // prop can be numeric; zero is valid not a missing prop
        // translate name => prop
        if (isNullOrUndefined(column.prop) && column.name) {
            column.prop = camelCase(column.name);
        }
        if (!column.$$valueGetter) {
            column.$$valueGetter = getterForProp(column.prop);
        }
        // format props if no name passed
        if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = deCamelCase(String(column.prop));
        }
        if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = ''; // Fixes IE and Edge displaying `null`
        }
        if (!column.hasOwnProperty('resizeable')) {
            column.resizeable = true;
        }
        if (!column.hasOwnProperty('sortable')) {
            column.sortable = true;
        }
        if (!column.hasOwnProperty('draggable')) {
            column.draggable = true;
        }
        if (!column.hasOwnProperty('canAutoResize')) {
            column.canAutoResize = true;
        }
        if (!column.hasOwnProperty('width')) {
            column.width = 150;
        }
        if (!column.hasOwnProperty('isTreeColumn')) {
            column.isTreeColumn = false;
        }
        else {
            if (column.isTreeColumn && !treeColumnFound) {
                // If the first column with isTreeColumn is true found
                // we mark that treeCoulmn is found
                treeColumnFound = true;
            }
            else {
                // After that isTreeColumn property for any other column
                // will be set as false
                column.isTreeColumn = false;
            }
        }
    }
}
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
export function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
/**
 * Translates templates definitions to objects
 * @param {?} templates
 * @return {?}
 */
export function translateTemplates(templates) {
    /** @type {?} */
    const result = [];
    for (const temp of templates) {
        /** @type {?} */
        const col = {};
        /** @type {?} */
        const props = Object.getOwnPropertyNames(temp);
        for (const prop of props) {
            col[prop] = temp[prop];
        }
        if (temp.headerTemplate) {
            col.headerTemplate = temp.headerTemplate;
        }
        if (temp.cellTemplate) {
            col.cellTemplate = temp.cellTemplate;
        }
        if (temp.summaryFunc) {
            col.summaryFunc = temp.summaryFunc;
        }
        if (temp.summaryTemplate) {
            col.summaryTemplate = temp.summaryTemplate;
        }
        result.push(col);
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2NvbHVtbi1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3RELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFPdEQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE9BQXNCO0lBQ3RELElBQUksQ0FBQyxPQUFPO1FBQUUsT0FBTzs7Ozs7UUFLakIsZUFBZSxHQUFZLEtBQUs7SUFFcEMsS0FBSyxNQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUU7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDaEIsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsQ0FBQztTQUNwQjtRQUVELHdEQUF3RDtRQUN4RCx5QkFBeUI7UUFDekIsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtZQUNqRCxNQUFNLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtZQUN6QixNQUFNLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkQ7UUFFRCxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckUsTUFBTSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsc0NBQXNDO1NBQ3pEO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDeEMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDMUI7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN4QjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDM0MsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDN0I7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztTQUNwQjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLE1BQU0sQ0FBQyxZQUFZLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQzNDLHNEQUFzRDtnQkFDdEQsbUNBQW1DO2dCQUNuQyxlQUFlLEdBQUcsSUFBSSxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLHdEQUF3RDtnQkFDeEQsdUJBQXVCO2dCQUN2QixNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUM3QjtTQUNGO0tBQ0Y7QUFDSCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQUksS0FBMkI7SUFDOUQsT0FBTyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLENBQUM7QUFDL0MsQ0FBQzs7Ozs7O0FBS0QsTUFBTSxVQUFVLGtCQUFrQixDQUFDLFNBQXFDOztVQUNoRSxNQUFNLEdBQVUsRUFBRTtJQUN4QixLQUFLLE1BQU0sSUFBSSxJQUFJLFNBQVMsRUFBRTs7Y0FDdEIsR0FBRyxHQUFRLEVBQUU7O2NBRWIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7UUFDOUMsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtRQUVELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDMUM7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3RDO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUNwQztRQUVELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDNUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2xCO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbWVsQ2FzZSwgZGVDYW1lbENhc2UgfSBmcm9tICcuL2NhbWVsLWNhc2UnO1xyXG5pbXBvcnQgeyBpZCB9IGZyb20gJy4vaWQnO1xyXG5pbXBvcnQgeyBnZXR0ZXJGb3JQcm9wIH0gZnJvbSAnLi9jb2x1bW4tcHJvcC1nZXR0ZXJzJztcclxuaW1wb3J0IHsgVGFibGVDb2x1bW4gfSBmcm9tICcuLi90eXBlcy90YWJsZS1jb2x1bW4udHlwZSc7XHJcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29sdW1ucy9jb2x1bW4uZGlyZWN0aXZlJztcclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBjb2x1bW4gZGVmYXVsdHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDb2x1bW5EZWZhdWx0cyhjb2x1bW5zOiBUYWJsZUNvbHVtbltdKSB7XHJcbiAgaWYgKCFjb2x1bW5zKSByZXR1cm47XHJcblxyXG4gIC8vIE9ubHkgb25lIGNvbHVtbiBzaG91bGQgaG9sZCB0aGUgdHJlZSB2aWV3XHJcbiAgLy8gVGh1cyBpZiBtdWx0aXBsZSBjb2x1bW5zIGFyZSBwcm92aWRlZCB3aXRoXHJcbiAgLy8gaXNUcmVlQ29sdW1uIGFzIHRydWUgd2UgdGFrZSBvbmx5IHRoZSBmaXJzdCBvbmVcclxuICBsZXQgdHJlZUNvbHVtbkZvdW5kOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGZvciAoY29uc3QgY29sdW1uIG9mIGNvbHVtbnMpIHtcclxuICAgIGlmICghY29sdW1uLiQkaWQpIHtcclxuICAgICAgY29sdW1uLiQkaWQgPSBpZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByb3AgY2FuIGJlIG51bWVyaWM7IHplcm8gaXMgdmFsaWQgbm90IGEgbWlzc2luZyBwcm9wXHJcbiAgICAvLyB0cmFuc2xhdGUgbmFtZSA9PiBwcm9wXHJcbiAgICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoY29sdW1uLnByb3ApICYmIGNvbHVtbi5uYW1lKSB7XHJcbiAgICAgIGNvbHVtbi5wcm9wID0gY2FtZWxDYXNlKGNvbHVtbi5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNvbHVtbi4kJHZhbHVlR2V0dGVyKSB7XHJcbiAgICAgIGNvbHVtbi4kJHZhbHVlR2V0dGVyID0gZ2V0dGVyRm9yUHJvcChjb2x1bW4ucHJvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZm9ybWF0IHByb3BzIGlmIG5vIG5hbWUgcGFzc2VkXHJcbiAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKGNvbHVtbi5wcm9wKSAmJiBpc051bGxPclVuZGVmaW5lZChjb2x1bW4ubmFtZSkpIHtcclxuICAgICAgY29sdW1uLm5hbWUgPSBkZUNhbWVsQ2FzZShTdHJpbmcoY29sdW1uLnByb3ApKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoY29sdW1uLnByb3ApICYmIGlzTnVsbE9yVW5kZWZpbmVkKGNvbHVtbi5uYW1lKSkge1xyXG4gICAgICBjb2x1bW4ubmFtZSA9ICcnOyAvLyBGaXhlcyBJRSBhbmQgRWRnZSBkaXNwbGF5aW5nIGBudWxsYFxyXG4gICAgfVxyXG5cclxuICAgIGlmICghY29sdW1uLmhhc093blByb3BlcnR5KCdyZXNpemVhYmxlJykpIHtcclxuICAgICAgY29sdW1uLnJlc2l6ZWFibGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY29sdW1uLmhhc093blByb3BlcnR5KCdzb3J0YWJsZScpKSB7XHJcbiAgICAgIGNvbHVtbi5zb3J0YWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjb2x1bW4uaGFzT3duUHJvcGVydHkoJ2RyYWdnYWJsZScpKSB7XHJcbiAgICAgIGNvbHVtbi5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY29sdW1uLmhhc093blByb3BlcnR5KCdjYW5BdXRvUmVzaXplJykpIHtcclxuICAgICAgY29sdW1uLmNhbkF1dG9SZXNpemUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY29sdW1uLmhhc093blByb3BlcnR5KCd3aWR0aCcpKSB7XHJcbiAgICAgIGNvbHVtbi53aWR0aCA9IDE1MDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNvbHVtbi5oYXNPd25Qcm9wZXJ0eSgnaXNUcmVlQ29sdW1uJykpIHtcclxuICAgICAgY29sdW1uLmlzVHJlZUNvbHVtbiA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGNvbHVtbi5pc1RyZWVDb2x1bW4gJiYgIXRyZWVDb2x1bW5Gb3VuZCkge1xyXG4gICAgICAgIC8vIElmIHRoZSBmaXJzdCBjb2x1bW4gd2l0aCBpc1RyZWVDb2x1bW4gaXMgdHJ1ZSBmb3VuZFxyXG4gICAgICAgIC8vIHdlIG1hcmsgdGhhdCB0cmVlQ291bG1uIGlzIGZvdW5kXHJcbiAgICAgICAgdHJlZUNvbHVtbkZvdW5kID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBBZnRlciB0aGF0IGlzVHJlZUNvbHVtbiBwcm9wZXJ0eSBmb3IgYW55IG90aGVyIGNvbHVtblxyXG4gICAgICAgIC8vIHdpbGwgYmUgc2V0IGFzIGZhbHNlXHJcbiAgICAgICAgY29sdW1uLmlzVHJlZUNvbHVtbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQ8VD4odmFsdWU6IFQgfCBudWxsIHwgdW5kZWZpbmVkKTogdmFsdWUgaXMgbnVsbCB8IHVuZGVmaW5lZCB7XHJcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmFuc2xhdGVzIHRlbXBsYXRlcyBkZWZpbml0aW9ucyB0byBvYmplY3RzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlVGVtcGxhdGVzKHRlbXBsYXRlczogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlW10pOiBhbnlbXSB7XHJcbiAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xyXG4gIGZvciAoY29uc3QgdGVtcCBvZiB0ZW1wbGF0ZXMpIHtcclxuICAgIGNvbnN0IGNvbDogYW55ID0ge307XHJcblxyXG4gICAgY29uc3QgcHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZW1wKTtcclxuICAgIGZvciAoY29uc3QgcHJvcCBvZiBwcm9wcykge1xyXG4gICAgICBjb2xbcHJvcF0gPSB0ZW1wW3Byb3BdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0ZW1wLmhlYWRlclRlbXBsYXRlKSB7XHJcbiAgICAgIGNvbC5oZWFkZXJUZW1wbGF0ZSA9IHRlbXAuaGVhZGVyVGVtcGxhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRlbXAuY2VsbFRlbXBsYXRlKSB7XHJcbiAgICAgIGNvbC5jZWxsVGVtcGxhdGUgPSB0ZW1wLmNlbGxUZW1wbGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGVtcC5zdW1tYXJ5RnVuYykge1xyXG4gICAgICBjb2wuc3VtbWFyeUZ1bmMgPSB0ZW1wLnN1bW1hcnlGdW5jO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0ZW1wLnN1bW1hcnlUZW1wbGF0ZSkge1xyXG4gICAgICBjb2wuc3VtbWFyeVRlbXBsYXRlID0gdGVtcC5zdW1tYXJ5VGVtcGxhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdWx0LnB1c2goY29sKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIl19