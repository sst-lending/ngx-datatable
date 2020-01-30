/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { camelCase } from './camel-case';
/** @type {?} */
var cache = {};
/** @type {?} */
var testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined;
// Get Prefix
// http://davidwalsh.name/vendor-prefix
var ɵ0 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
    /** @type {?} */
    var match = typeof styles !== 'undefined'
        ? Array.prototype.slice
            .call(styles)
            .join('')
            .match(/-(moz|webkit|ms)-/)
        : null;
    /** @type {?} */
    var pre = match !== null ? match[1] : undefined;
    // tslint:disable-next-line: tsr-detect-non-literal-regexp
    /** @type {?} */
    var dom = typeof pre !== 'undefined' ? 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
    return dom
        ? {
            dom: dom,
            lowercase: pre,
            css: "-" + pre + "-",
            js: pre[0].toUpperCase() + pre.substr(1)
        }
        : undefined;
};
/** @type {?} */
var prefix = ((ɵ0))();
/**
 * @param {?} property
 * @return {?}
 */
export function getVendorPrefixedName(property) {
    /** @type {?} */
    var name = camelCase(property);
    if (!cache[name]) {
        if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
            cache[name] = prefix.css + property;
        }
        else if (testStyle[property] !== undefined) {
            cache[name] = property;
        }
    }
    return cache[name];
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZml4ZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9wcmVmaXhlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7SUFFbkMsS0FBSyxHQUFHLEVBQUU7O0lBQ1YsU0FBUyxHQUFHLE9BQU8sUUFBUSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7OztBQUluRjs7UUFDUixNQUFNLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7UUFDMUcsS0FBSyxHQUNULE9BQU8sTUFBTSxLQUFLLFdBQVc7UUFDM0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSzthQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ1osSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUNSLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztRQUMvQixDQUFDLENBQUMsSUFBSTs7UUFDSixHQUFHLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7UUFFM0MsR0FBRyxHQUFHLE9BQU8sR0FBRyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7SUFFakgsT0FBTyxHQUFHO1FBQ1IsQ0FBQyxDQUFDO1lBQ0UsR0FBRyxLQUFBO1lBQ0gsU0FBUyxFQUFFLEdBQUc7WUFDZCxHQUFHLEVBQUUsTUFBSSxHQUFHLE1BQUc7WUFDZixFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0gsQ0FBQyxDQUFDLFNBQVMsQ0FBQztBQUNoQixDQUFDOztJQXJCSyxNQUFNLEdBQUcsTUFxQmIsRUFBRTs7Ozs7QUFFSixNQUFNLFVBQVUscUJBQXFCLENBQUMsUUFBZ0I7O1FBQzlDLElBQUksR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO0lBRWhDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDaEIsSUFBSSxNQUFNLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUMxRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUM7U0FDckM7YUFBTSxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDNUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUN4QjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbWVsQ2FzZSB9IGZyb20gJy4vY2FtZWwtY2FzZSc7XHJcblxyXG5jb25zdCBjYWNoZSA9IHt9O1xyXG5jb25zdCB0ZXN0U3R5bGUgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGUgOiB1bmRlZmluZWQ7XHJcblxyXG4vLyBHZXQgUHJlZml4XHJcbi8vIGh0dHA6Ly9kYXZpZHdhbHNoLm5hbWUvdmVuZG9yLXByZWZpeFxyXG5jb25zdCBwcmVmaXggPSAoZnVuY3Rpb24oKSB7XHJcbiAgY29uc3Qgc3R5bGVzID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICcnKSA6IHVuZGVmaW5lZDtcclxuICBjb25zdCBtYXRjaCA9XHJcbiAgICB0eXBlb2Ygc3R5bGVzICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICA/IEFycmF5LnByb3RvdHlwZS5zbGljZVxyXG4gICAgICAgICAgLmNhbGwoc3R5bGVzKVxyXG4gICAgICAgICAgLmpvaW4oJycpXHJcbiAgICAgICAgICAubWF0Y2goLy0obW96fHdlYmtpdHxtcyktLylcclxuICAgICAgOiBudWxsO1xyXG4gIGNvbnN0IHByZSA9IG1hdGNoICE9PSBudWxsID8gbWF0Y2hbMV0gOiB1bmRlZmluZWQ7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB0c3ItZGV0ZWN0LW5vbi1saXRlcmFsLXJlZ2V4cFxyXG4gIGNvbnN0IGRvbSA9IHR5cGVvZiBwcmUgIT09ICd1bmRlZmluZWQnID8gJ1dlYktpdHxNb3p8TVN8TycubWF0Y2gobmV3IFJlZ0V4cCgnKCcgKyBwcmUgKyAnKScsICdpJykpWzFdIDogdW5kZWZpbmVkO1xyXG5cclxuICByZXR1cm4gZG9tXHJcbiAgICA/IHtcclxuICAgICAgICBkb20sXHJcbiAgICAgICAgbG93ZXJjYXNlOiBwcmUsXHJcbiAgICAgICAgY3NzOiBgLSR7cHJlfS1gLFxyXG4gICAgICAgIGpzOiBwcmVbMF0udG9VcHBlckNhc2UoKSArIHByZS5zdWJzdHIoMSlcclxuICAgICAgfVxyXG4gICAgOiB1bmRlZmluZWQ7XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmVuZG9yUHJlZml4ZWROYW1lKHByb3BlcnR5OiBzdHJpbmcpIHtcclxuICBjb25zdCBuYW1lID0gY2FtZWxDYXNlKHByb3BlcnR5KTtcclxuXHJcbiAgaWYgKCFjYWNoZVtuYW1lXSkge1xyXG4gICAgaWYgKHByZWZpeCAhPT0gdW5kZWZpbmVkICYmIHRlc3RTdHlsZVtwcmVmaXguY3NzICsgcHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY2FjaGVbbmFtZV0gPSBwcmVmaXguY3NzICsgcHJvcGVydHk7XHJcbiAgICB9IGVsc2UgaWYgKHRlc3RTdHlsZVtwcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjYWNoZVtuYW1lXSA9IHByb3BlcnR5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNhY2hlW25hbWVdO1xyXG59XHJcbiJdfQ==