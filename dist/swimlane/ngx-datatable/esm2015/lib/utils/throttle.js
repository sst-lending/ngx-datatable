/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Throttle a function
 * @param {?} func
 * @param {?} wait
 * @param {?=} options
 * @return {?}
 */
export function throttle(func, wait, options) {
    options = options || {};
    /** @type {?} */
    let context;
    /** @type {?} */
    let args;
    /** @type {?} */
    let result;
    /** @type {?} */
    let timeout = null;
    /** @type {?} */
    let previous = 0;
    /**
     * @return {?}
     */
    function later() {
        previous = options.leading === false ? 0 : +new Date();
        timeout = null;
        result = func.apply(context, args);
    }
    return (/**
     * @this {?}
     * @return {?}
     */
    function () {
        /** @type {?} */
        const now = +new Date();
        if (!previous && options.leading === false) {
            previous = now;
        }
        /** @type {?} */
        const remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    });
}
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 * @param {?} duration
 * @param {?=} options
 * @return {?}
 */
export function throttleable(duration, options) {
    return (/**
     * @param {?} target
     * @param {?} key
     * @param {?} descriptor
     * @return {?}
     */
    function innerDecorator(target, key, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: (/**
             * @return {?}
             */
            function getter() {
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: throttle(descriptor.value, duration, options)
                });
                return this[key];
            })
        };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyb3R0bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy90aHJvdHRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLE1BQU0sVUFBVSxRQUFRLENBQUMsSUFBUyxFQUFFLElBQVksRUFBRSxPQUFhO0lBQzdELE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDOztRQUNwQixPQUFZOztRQUNaLElBQVM7O1FBQ1QsTUFBVzs7UUFDWCxPQUFPLEdBQVEsSUFBSTs7UUFDbkIsUUFBUSxHQUFHLENBQUM7Ozs7SUFFaEIsU0FBUyxLQUFLO1FBQ1osUUFBUSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN2RCxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7OztJQUFPOztjQUNDLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFO1FBRXZCLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7WUFDMUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztTQUNoQjs7Y0FFSyxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQztRQUN6QyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUVqQixJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUU7WUFDbEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDZixRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ2YsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3BDO2FBQU0sSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBRTtZQUNqRCxPQUFPLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN4QztRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7Ozs7Ozs7OztBQVVELE1BQU0sVUFBVSxZQUFZLENBQUMsUUFBZ0IsRUFBRSxPQUFhO0lBQzFEOzs7Ozs7SUFBTyxTQUFTLGNBQWMsQ0FBQyxNQUFXLEVBQUUsR0FBZ0IsRUFBRSxVQUE4QjtRQUMxRixPQUFPO1lBQ0wsWUFBWSxFQUFFLElBQUk7WUFDbEIsVUFBVSxFQUFFLFVBQVUsQ0FBQyxVQUFVO1lBQ2pDLEdBQUc7OztZQUFFLFNBQVMsTUFBTTtnQkFDbEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO29CQUMvQixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsVUFBVSxFQUFFLFVBQVUsQ0FBQyxVQUFVO29CQUNqQyxLQUFLLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQztpQkFDckQsQ0FBQyxDQUFDO2dCQUVILE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLENBQUMsQ0FBQTtTQUNGLENBQUM7SUFDSixDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRocm90dGxlIGEgZnVuY3Rpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZShmdW5jOiBhbnksIHdhaXQ6IG51bWJlciwgb3B0aW9ucz86IGFueSkge1xyXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gIGxldCBjb250ZXh0OiBhbnk7XHJcbiAgbGV0IGFyZ3M6IGFueTtcclxuICBsZXQgcmVzdWx0OiBhbnk7XHJcbiAgbGV0IHRpbWVvdXQ6IGFueSA9IG51bGw7XHJcbiAgbGV0IHByZXZpb3VzID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbGF0ZXIoKSB7XHJcbiAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogK25ldyBEYXRlKCk7XHJcbiAgICB0aW1lb3V0ID0gbnVsbDtcclxuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24odGhpczogYW55KSB7XHJcbiAgICBjb25zdCBub3cgPSArbmV3IERhdGUoKTtcclxuXHJcbiAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHtcclxuICAgICAgcHJldmlvdXMgPSBub3c7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XHJcbiAgICBjb250ZXh0ID0gdGhpcztcclxuICAgIGFyZ3MgPSBhcmd1bWVudHM7XHJcblxyXG4gICAgaWYgKHJlbWFpbmluZyA8PSAwKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgdGltZW91dCA9IG51bGw7XHJcbiAgICAgIHByZXZpb3VzID0gbm93O1xyXG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xyXG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaHJvdHRsZSBkZWNvcmF0b3JcclxuICpcclxuICogIGNsYXNzIE15Q2xhc3Mge1xyXG4gKiAgICB0aHJvdHRsZWFibGUoMTApXHJcbiAqICAgIG15Rm4oKSB7IC4uLiB9XHJcbiAqICB9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGVhYmxlKGR1cmF0aW9uOiBudW1iZXIsIG9wdGlvbnM/OiBhbnkpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gaW5uZXJEZWNvcmF0b3IodGFyZ2V0OiBhbnksIGtleTogUHJvcGVydHlLZXksIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICBlbnVtZXJhYmxlOiBkZXNjcmlwdG9yLmVudW1lcmFibGUsXHJcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0dGVyKCkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcclxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGVudW1lcmFibGU6IGRlc2NyaXB0b3IuZW51bWVyYWJsZSxcclxuICAgICAgICAgIHZhbHVlOiB0aHJvdHRsZShkZXNjcmlwdG9yLnZhbHVlLCBkdXJhdGlvbiwgb3B0aW9ucylcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXNba2V5XTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9O1xyXG59XHJcbiJdfQ==