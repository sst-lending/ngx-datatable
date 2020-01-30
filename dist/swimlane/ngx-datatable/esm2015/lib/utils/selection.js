/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} selected
 * @param {?} row
 * @param {?} comparefn
 * @return {?}
 */
export function selectRows(selected, row, comparefn) {
    /** @type {?} */
    const selectedIndex = comparefn(row, selected);
    if (selectedIndex > -1) {
        selected.splice(selectedIndex, 1);
    }
    else {
        selected.push(row);
    }
    return selected;
}
/**
 * @param {?} selected
 * @param {?} rows
 * @param {?} index
 * @param {?} prevIndex
 * @param {?} comparefn
 * @return {?}
 */
export function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
    /** @type {?} */
    const reverse = index < prevIndex;
    for (let i = 0; i < rows.length; i++) {
        /** @type {?} */
        const row = rows[i];
        /** @type {?} */
        const greater = i >= prevIndex && i <= index;
        /** @type {?} */
        const lesser = i <= prevIndex && i >= index;
        /** @type {?} */
        let range = { start: 0, end: 0 };
        if (reverse) {
            range = {
                start: index,
                end: prevIndex
            };
        }
        else {
            range = {
                start: prevIndex,
                end: index + 1
            };
        }
        if ((reverse && lesser) || (!reverse && greater)) {
            // if in the positive range to be added to `selected`, and
            // not already in the selected array, add it
            if (i >= range.start && i <= range.end) {
                selected.push(row);
            }
        }
    }
    return selected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN3aW1sYW5lL25neC1kYXRhdGFibGUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvc2VsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxNQUFNLFVBQVUsVUFBVSxDQUFDLFFBQWUsRUFBRSxHQUFRLEVBQUUsU0FBYzs7VUFDNUQsYUFBYSxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO0lBRTlDLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3RCLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ25DO1NBQU07UUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3BCO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQzs7Ozs7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUMvQixRQUFlLEVBQ2YsSUFBVyxFQUNYLEtBQWEsRUFDYixTQUFpQixFQUNqQixTQUFjOztVQUVSLE9BQU8sR0FBRyxLQUFLLEdBQUcsU0FBUztJQUVqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Y0FDOUIsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7O2NBQ2IsT0FBTyxHQUFHLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxJQUFJLEtBQUs7O2NBQ3RDLE1BQU0sR0FBRyxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsSUFBSSxLQUFLOztZQUV2QyxLQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7UUFDaEMsSUFBSSxPQUFPLEVBQUU7WUFDWCxLQUFLLEdBQUc7Z0JBQ04sS0FBSyxFQUFFLEtBQUs7Z0JBQ1osR0FBRyxFQUFFLFNBQVM7YUFDZixDQUFDO1NBQ0g7YUFBTTtZQUNMLEtBQUssR0FBRztnQkFDTixLQUFLLEVBQUUsU0FBUztnQkFDaEIsR0FBRyxFQUFFLEtBQUssR0FBRyxDQUFDO2FBQ2YsQ0FBQztTQUNIO1FBRUQsSUFBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxFQUFFO1lBQ2hELDBEQUEwRDtZQUMxRCw0Q0FBNEM7WUFDNUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRTtnQkFDdEMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNwQjtTQUNGO0tBQ0Y7SUFFRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFJvd3Moc2VsZWN0ZWQ6IGFueVtdLCByb3c6IGFueSwgY29tcGFyZWZuOiBhbnkpIHtcclxuICBjb25zdCBzZWxlY3RlZEluZGV4ID0gY29tcGFyZWZuKHJvdywgc2VsZWN0ZWQpO1xyXG5cclxuICBpZiAoc2VsZWN0ZWRJbmRleCA+IC0xKSB7XHJcbiAgICBzZWxlY3RlZC5zcGxpY2Uoc2VsZWN0ZWRJbmRleCwgMSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNlbGVjdGVkLnB1c2gocm93KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBzZWxlY3RlZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFJvd3NCZXR3ZWVuKFxyXG4gIHNlbGVjdGVkOiBhbnlbXSxcclxuICByb3dzOiBhbnlbXSxcclxuICBpbmRleDogbnVtYmVyLFxyXG4gIHByZXZJbmRleDogbnVtYmVyLFxyXG4gIGNvbXBhcmVmbjogYW55XHJcbik6IGFueVtdIHtcclxuICBjb25zdCByZXZlcnNlID0gaW5kZXggPCBwcmV2SW5kZXg7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qgcm93ID0gcm93c1tpXTtcclxuICAgIGNvbnN0IGdyZWF0ZXIgPSBpID49IHByZXZJbmRleCAmJiBpIDw9IGluZGV4O1xyXG4gICAgY29uc3QgbGVzc2VyID0gaSA8PSBwcmV2SW5kZXggJiYgaSA+PSBpbmRleDtcclxuXHJcbiAgICBsZXQgcmFuZ2UgPSB7IHN0YXJ0OiAwLCBlbmQ6IDAgfTtcclxuICAgIGlmIChyZXZlcnNlKSB7XHJcbiAgICAgIHJhbmdlID0ge1xyXG4gICAgICAgIHN0YXJ0OiBpbmRleCxcclxuICAgICAgICBlbmQ6IHByZXZJbmRleFxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmFuZ2UgPSB7XHJcbiAgICAgICAgc3RhcnQ6IHByZXZJbmRleCxcclxuICAgICAgICBlbmQ6IGluZGV4ICsgMVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgocmV2ZXJzZSAmJiBsZXNzZXIpIHx8ICghcmV2ZXJzZSAmJiBncmVhdGVyKSkge1xyXG4gICAgICAvLyBpZiBpbiB0aGUgcG9zaXRpdmUgcmFuZ2UgdG8gYmUgYWRkZWQgdG8gYHNlbGVjdGVkYCwgYW5kXHJcbiAgICAgIC8vIG5vdCBhbHJlYWR5IGluIHRoZSBzZWxlY3RlZCBhcnJheSwgYWRkIGl0XHJcbiAgICAgIGlmIChpID49IHJhbmdlLnN0YXJ0ICYmIGkgPD0gcmFuZ2UuZW5kKSB7XHJcbiAgICAgICAgc2VsZWN0ZWQucHVzaChyb3cpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2VsZWN0ZWQ7XHJcbn1cclxuIl19