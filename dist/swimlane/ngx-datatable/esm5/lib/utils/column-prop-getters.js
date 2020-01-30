/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Always returns the empty string ''
 * @return {?}
 */
export function emptyStringGetter() {
    return '';
}
/**
 * Returns the appropriate getter function for this kind of prop.
 * If prop == null, returns the emptyStringGetter.
 * @param {?} prop
 * @return {?}
 */
export function getterForProp(prop) {
    if (prop == null) {
        return emptyStringGetter;
    }
    if (typeof prop === 'number') {
        return numericIndexGetter;
    }
    else {
        // deep or simple
        if (prop.indexOf('.') !== -1) {
            return deepValueGetter;
        }
        else {
            return shallowValueGetter;
        }
    }
}
/**
 * Returns the value at this numeric index.
 * @param {?} row array of values
 * @param {?} index numeric index
 * @return {?} any or '' if invalid index
 */
export function numericIndexGetter(row, index) {
    if (row == null) {
        return '';
    }
    // mimic behavior of deepValueGetter
    if (!row || index == null) {
        return row;
    }
    /** @type {?} */
    var value = row[index];
    if (value == null) {
        return '';
    }
    return value;
}
/**
 * Returns the value of a field.
 * (more efficient than deepValueGetter)
 * @param {?} obj object containing the field
 * @param {?} fieldName field name string
 * @return {?}
 */
export function shallowValueGetter(obj, fieldName) {
    if (obj == null) {
        return '';
    }
    if (!obj || !fieldName) {
        return obj;
    }
    /** @type {?} */
    var value = obj[fieldName];
    if (value == null) {
        return '';
    }
    return value;
}
/**
 * Returns a deep object given a string. zoo['animal.type']
 * @param {?} obj
 * @param {?} path
 * @return {?}
 */
export function deepValueGetter(obj, path) {
    if (obj == null) {
        return '';
    }
    if (!obj || !path) {
        return obj;
    }
    // check if path matches a root-level field
    // { "a.b.c": 123 }
    /** @type {?} */
    var current = obj[path];
    if (current !== undefined) {
        return current;
    }
    current = obj;
    /** @type {?} */
    var split = path.split('.');
    if (split.length) {
        for (var i = 0; i < split.length; i++) {
            current = current[split[i]];
            // if found undefined, return empty string
            if (current === undefined || current === null) {
                return '';
            }
        }
    }
    return current;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXByb3AtZ2V0dGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2NvbHVtbi1wcm9wLWdldHRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFTQSxNQUFNLFVBQVUsaUJBQWlCO0lBQy9CLE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQzs7Ozs7OztBQU1ELE1BQU0sVUFBVSxhQUFhLENBQUMsSUFBcUI7SUFDakQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1FBQ2hCLE9BQU8saUJBQWlCLENBQUM7S0FDMUI7SUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUM1QixPQUFPLGtCQUFrQixDQUFDO0tBQzNCO1NBQU07UUFDTCxpQkFBaUI7UUFDakIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzVCLE9BQU8sZUFBZSxDQUFDO1NBQ3hCO2FBQU07WUFDTCxPQUFPLGtCQUFrQixDQUFDO1NBQzNCO0tBQ0Y7QUFDSCxDQUFDOzs7Ozs7O0FBUUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLEdBQVUsRUFBRSxLQUFhO0lBQzFELElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtRQUNmLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxvQ0FBb0M7SUFDcEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ3pCLE9BQU8sR0FBRyxDQUFDO0tBQ1o7O1FBRUssS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDeEIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2pCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7Ozs7O0FBUUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLEdBQVEsRUFBRSxTQUFpQjtJQUM1RCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDZixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUN0QixPQUFPLEdBQUcsQ0FBQztLQUNaOztRQUVLLEtBQUssR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQzVCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNqQixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOzs7Ozs7O0FBS0QsTUFBTSxVQUFVLGVBQWUsQ0FBQyxHQUFRLEVBQUUsSUFBWTtJQUNwRCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDZixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNqQixPQUFPLEdBQUcsQ0FBQztLQUNaOzs7O1FBSUcsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDdkIsSUFBSSxPQUFPLEtBQUssU0FBUyxFQUFFO1FBQ3pCLE9BQU8sT0FBTyxDQUFDO0tBQ2hCO0lBRUQsT0FBTyxHQUFHLEdBQUcsQ0FBQzs7UUFDUixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFFN0IsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFNUIsMENBQTBDO1lBQzFDLElBQUksT0FBTyxLQUFLLFNBQVMsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO2dCQUM3QyxPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7S0FDRjtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZUNvbHVtblByb3AgfSBmcm9tICcuLi90eXBlcy90YWJsZS1jb2x1bW4udHlwZSc7XHJcblxyXG4vLyBtYXliZSByZW5hbWUgdGhpcyBmaWxlIHRvIHByb3AtZ2V0dGVycy50c1xyXG5cclxuZXhwb3J0IHR5cGUgVmFsdWVHZXR0ZXIgPSAob2JqOiBhbnksIHByb3A6IFRhYmxlQ29sdW1uUHJvcCkgPT4gYW55O1xyXG5cclxuLyoqXHJcbiAqIEFsd2F5cyByZXR1cm5zIHRoZSBlbXB0eSBzdHJpbmcgJydcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbXB0eVN0cmluZ0dldHRlcigpOiBzdHJpbmcge1xyXG4gIHJldHVybiAnJztcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGFwcHJvcHJpYXRlIGdldHRlciBmdW5jdGlvbiBmb3IgdGhpcyBraW5kIG9mIHByb3AuXHJcbiAqIElmIHByb3AgPT0gbnVsbCwgcmV0dXJucyB0aGUgZW1wdHlTdHJpbmdHZXR0ZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0dGVyRm9yUHJvcChwcm9wOiBUYWJsZUNvbHVtblByb3ApOiBWYWx1ZUdldHRlciB7XHJcbiAgaWYgKHByb3AgPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGVtcHR5U3RyaW5nR2V0dGVyO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBwcm9wID09PSAnbnVtYmVyJykge1xyXG4gICAgcmV0dXJuIG51bWVyaWNJbmRleEdldHRlcjtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gZGVlcCBvciBzaW1wbGVcclxuICAgIGlmIChwcm9wLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcclxuICAgICAgcmV0dXJuIGRlZXBWYWx1ZUdldHRlcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBzaGFsbG93VmFsdWVHZXR0ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgdmFsdWUgYXQgdGhpcyBudW1lcmljIGluZGV4LlxyXG4gKiBAcGFyYW0gcm93IGFycmF5IG9mIHZhbHVlc1xyXG4gKiBAcGFyYW0gaW5kZXggbnVtZXJpYyBpbmRleFxyXG4gKiBAcmV0dXJucyBhbnkgb3IgJycgaWYgaW52YWxpZCBpbmRleFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG51bWVyaWNJbmRleEdldHRlcihyb3c6IGFueVtdLCBpbmRleDogbnVtYmVyKTogYW55IHtcclxuICBpZiAocm93ID09IG51bGwpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbiAgLy8gbWltaWMgYmVoYXZpb3Igb2YgZGVlcFZhbHVlR2V0dGVyXHJcbiAgaWYgKCFyb3cgfHwgaW5kZXggPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIHJvdztcclxuICB9XHJcblxyXG4gIGNvbnN0IHZhbHVlID0gcm93W2luZGV4XTtcclxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIGZpZWxkLlxyXG4gKiAobW9yZSBlZmZpY2llbnQgdGhhbiBkZWVwVmFsdWVHZXR0ZXIpXHJcbiAqIEBwYXJhbSBvYmogb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZpZWxkXHJcbiAqIEBwYXJhbSBmaWVsZE5hbWUgZmllbGQgbmFtZSBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaGFsbG93VmFsdWVHZXR0ZXIob2JqOiBhbnksIGZpZWxkTmFtZTogc3RyaW5nKTogYW55IHtcclxuICBpZiAob2JqID09IG51bGwpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbiAgaWYgKCFvYmogfHwgIWZpZWxkTmFtZSkge1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIGNvbnN0IHZhbHVlID0gb2JqW2ZpZWxkTmFtZV07XHJcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGRlZXAgb2JqZWN0IGdpdmVuIGEgc3RyaW5nLiB6b29bJ2FuaW1hbC50eXBlJ11cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwVmFsdWVHZXR0ZXIob2JqOiBhbnksIHBhdGg6IHN0cmluZyk6IGFueSB7XHJcbiAgaWYgKG9iaiA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG4gIGlmICghb2JqIHx8ICFwYXRoKSB7XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH1cclxuXHJcbiAgLy8gY2hlY2sgaWYgcGF0aCBtYXRjaGVzIGEgcm9vdC1sZXZlbCBmaWVsZFxyXG4gIC8vIHsgXCJhLmIuY1wiOiAxMjMgfVxyXG4gIGxldCBjdXJyZW50ID0gb2JqW3BhdGhdO1xyXG4gIGlmIChjdXJyZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBjdXJyZW50O1xyXG4gIH1cclxuXHJcbiAgY3VycmVudCA9IG9iajtcclxuICBjb25zdCBzcGxpdCA9IHBhdGguc3BsaXQoJy4nKTtcclxuXHJcbiAgaWYgKHNwbGl0Lmxlbmd0aCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxpdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjdXJyZW50ID0gY3VycmVudFtzcGxpdFtpXV07XHJcblxyXG4gICAgICAvLyBpZiBmb3VuZCB1bmRlZmluZWQsIHJldHVybiBlbXB0eSBzdHJpbmdcclxuICAgICAgaWYgKGN1cnJlbnQgPT09IHVuZGVmaW5lZCB8fCBjdXJyZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3VycmVudDtcclxufVxyXG4iXX0=