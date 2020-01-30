/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
if (typeof document !== 'undefined' && !document.elementsFromPoint) {
    document.elementsFromPoint = elementsFromPoint;
}
/*tslint:disable*/
/**
 * Polyfill for `elementsFromPoint`
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
 * https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380
 * https://gist.github.com/oslego/7265412
 * @param {?} x
 * @param {?} y
 * @return {?}
 */
export function elementsFromPoint(x, y) {
    /** @type {?} */
    const elements = [];
    /** @type {?} */
    const previousPointerEvents = [];
    /** @type {?} */
    let current;
    // TODO: window.getComputedStyle should be used with inferred type (Element)
    /** @type {?} */
    let i;
    /** @type {?} */
    let d;
    //if (document === undefined) return elements;
    // get all elements via elementFromPoint, and remove them from hit-testing in order
    while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current != null) {
        // push the element and its current style
        elements.push(current);
        previousPointerEvents.push({
            value: current.style.getPropertyValue('pointer-events'),
            priority: current.style.getPropertyPriority('pointer-events')
        });
        // add "pointer-events: none", to get to the underlying element
        current.style.setProperty('pointer-events', 'none', 'important');
    }
    // restore the previous pointer-events values
    for (i = previousPointerEvents.length; (d = previousPointerEvents[--i]);) {
        elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
    }
    // return our results
    return elements;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxtLWZyb20tcG9pbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9lbG0tZnJvbS1wb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUU7SUFDbEUsUUFBUSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0NBQ2hEOzs7Ozs7Ozs7Ozs7QUFVRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsQ0FBUyxFQUFFLENBQVM7O1VBQzlDLFFBQVEsR0FBRyxFQUFFOztVQUNiLHFCQUFxQixHQUFHLEVBQUU7O1FBQzVCLE9BQVk7OztRQUNaLENBQUM7O1FBQ0QsQ0FBQztJQUVMLDhDQUE4QztJQUU5QyxtRkFBbUY7SUFDbkYsT0FBTyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1FBQ3pHLHlDQUF5QztRQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLHFCQUFxQixDQUFDLElBQUksQ0FBQztZQUN6QixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztZQUN2RCxRQUFRLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQztTQUM5RCxDQUFDLENBQUM7UUFFSCwrREFBK0Q7UUFDL0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0tBQ2xFO0lBRUQsNkNBQTZDO0lBQzdDLEtBQUssQ0FBQyxHQUFHLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUk7UUFDekUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNyRjtJQUVELHFCQUFxQjtJQUNyQixPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIWRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KSB7XHJcbiAgZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQgPSBlbGVtZW50c0Zyb21Qb2ludDtcclxufVxyXG5cclxuLyp0c2xpbnQ6ZGlzYWJsZSovXHJcbi8qKlxyXG4gKiBQb2x5ZmlsbCBmb3IgYGVsZW1lbnRzRnJvbVBvaW50YFxyXG4gKlxyXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvZWxlbWVudHNGcm9tUG9pbnRcclxuICogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vaWRkYW4vNTRkNWQ5ZTU4MzExYjA0OTVhOTFiZjA2ZGU2NjEzODBcclxuICogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vb3NsZWdvLzcyNjU0MTJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50c0Zyb21Qb2ludCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gIGNvbnN0IGVsZW1lbnRzID0gW107XHJcbiAgY29uc3QgcHJldmlvdXNQb2ludGVyRXZlbnRzID0gW107XHJcbiAgbGV0IGN1cnJlbnQ6IGFueTsgLy8gVE9ETzogd2luZG93LmdldENvbXB1dGVkU3R5bGUgc2hvdWxkIGJlIHVzZWQgd2l0aCBpbmZlcnJlZCB0eXBlIChFbGVtZW50KVxyXG4gIGxldCBpO1xyXG4gIGxldCBkO1xyXG5cclxuICAvL2lmIChkb2N1bWVudCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZWxlbWVudHM7XHJcblxyXG4gIC8vIGdldCBhbGwgZWxlbWVudHMgdmlhIGVsZW1lbnRGcm9tUG9pbnQsIGFuZCByZW1vdmUgdGhlbSBmcm9tIGhpdC10ZXN0aW5nIGluIG9yZGVyXHJcbiAgd2hpbGUgKChjdXJyZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KSkgJiYgZWxlbWVudHMuaW5kZXhPZihjdXJyZW50KSA9PT0gLTEgJiYgY3VycmVudCAhPSBudWxsKSB7XHJcbiAgICAvLyBwdXNoIHRoZSBlbGVtZW50IGFuZCBpdHMgY3VycmVudCBzdHlsZVxyXG4gICAgZWxlbWVudHMucHVzaChjdXJyZW50KTtcclxuICAgIHByZXZpb3VzUG9pbnRlckV2ZW50cy5wdXNoKHtcclxuICAgICAgdmFsdWU6IGN1cnJlbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncG9pbnRlci1ldmVudHMnKSxcclxuICAgICAgcHJpb3JpdHk6IGN1cnJlbnQuc3R5bGUuZ2V0UHJvcGVydHlQcmlvcml0eSgncG9pbnRlci1ldmVudHMnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWRkIFwicG9pbnRlci1ldmVudHM6IG5vbmVcIiwgdG8gZ2V0IHRvIHRoZSB1bmRlcmx5aW5nIGVsZW1lbnRcclxuICAgIGN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnLCAnaW1wb3J0YW50Jyk7XHJcbiAgfVxyXG5cclxuICAvLyByZXN0b3JlIHRoZSBwcmV2aW91cyBwb2ludGVyLWV2ZW50cyB2YWx1ZXNcclxuICBmb3IgKGkgPSBwcmV2aW91c1BvaW50ZXJFdmVudHMubGVuZ3RoOyAoZCA9IHByZXZpb3VzUG9pbnRlckV2ZW50c1stLWldKTsgKSB7XHJcbiAgICBlbGVtZW50c1tpXS5zdHlsZS5zZXRQcm9wZXJ0eSgncG9pbnRlci1ldmVudHMnLCBkLnZhbHVlID8gZC52YWx1ZSA6ICcnLCBkLnByaW9yaXR5KTtcclxuICB9XHJcblxyXG4gIC8vIHJldHVybiBvdXIgcmVzdWx0c1xyXG4gIHJldHVybiBlbGVtZW50cztcclxufVxyXG4vKnRzbGludDplbmFibGUqL1xyXG4iXX0=