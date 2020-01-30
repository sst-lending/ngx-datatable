/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getVendorPrefixedName } from './prefixes';
import { camelCase } from './camel-case';
// browser detection and prefixing tools
/** @type {?} */
const transform = typeof window !== 'undefined' ? getVendorPrefixedName('transform') : undefined;
/** @type {?} */
const backfaceVisibility = typeof window !== 'undefined' ? getVendorPrefixedName('backfaceVisibility') : undefined;
/** @type {?} */
const hasCSSTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('transform') : undefined;
/** @type {?} */
const hasCSS3DTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('perspective') : undefined;
/** @type {?} */
const ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
/** @type {?} */
const isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);
/**
 * @param {?} styles
 * @param {?} x
 * @param {?} y
 * @return {?}
 */
export function translateXY(styles, x, y) {
    if (typeof transform !== 'undefined' && hasCSSTransforms) {
        if (!isSafari && hasCSS3DTransforms) {
            styles[transform] = `translate3d(${x}px, ${y}px, 0)`;
            styles[backfaceVisibility] = 'hidden';
        }
        else {
            styles[camelCase(transform)] = `translate(${x}px, ${y}px)`;
        }
    }
    else {
        styles.top = `${y}px`;
        styles.left = `${x}px`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN3aW1sYW5lL25neC1kYXRhdGFibGUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvdHJhbnNsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7O01BR25DLFNBQVMsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTOztNQUMxRixrQkFBa0IsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7O01BQzVHLGdCQUFnQixHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTOztNQUNuRyxrQkFBa0IsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7TUFDdkcsRUFBRSxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVE7O01BQzFFLFFBQVEsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Ozs7Ozs7QUFFNUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxNQUFXLEVBQUUsQ0FBUyxFQUFFLENBQVM7SUFDM0QsSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLElBQUksZ0JBQWdCLEVBQUU7UUFDeEQsSUFBSSxDQUFDLFFBQVEsSUFBSSxrQkFBa0IsRUFBRTtZQUNuQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDckQsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsUUFBUSxDQUFDO1NBQ3ZDO2FBQU07WUFDTCxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7U0FDNUQ7S0FDRjtTQUFNO1FBQ0wsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztLQUN4QjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRWZW5kb3JQcmVmaXhlZE5hbWUgfSBmcm9tICcuL3ByZWZpeGVzJztcclxuaW1wb3J0IHsgY2FtZWxDYXNlIH0gZnJvbSAnLi9jYW1lbC1jYXNlJztcclxuXHJcbi8vIGJyb3dzZXIgZGV0ZWN0aW9uIGFuZCBwcmVmaXhpbmcgdG9vbHNcclxuY29uc3QgdHJhbnNmb3JtID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBnZXRWZW5kb3JQcmVmaXhlZE5hbWUoJ3RyYW5zZm9ybScpIDogdW5kZWZpbmVkO1xyXG5jb25zdCBiYWNrZmFjZVZpc2liaWxpdHkgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGdldFZlbmRvclByZWZpeGVkTmFtZSgnYmFja2ZhY2VWaXNpYmlsaXR5JykgOiB1bmRlZmluZWQ7XHJcbmNvbnN0IGhhc0NTU1RyYW5zZm9ybXMgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/ICEhZ2V0VmVuZG9yUHJlZml4ZWROYW1lKCd0cmFuc2Zvcm0nKSA6IHVuZGVmaW5lZDtcclxuY29uc3QgaGFzQ1NTM0RUcmFuc2Zvcm1zID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyAhIWdldFZlbmRvclByZWZpeGVkTmFtZSgncGVyc3BlY3RpdmUnKSA6IHVuZGVmaW5lZDtcclxuY29uc3QgdWEgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IDogJ0Nocm9tZSc7XHJcbmNvbnN0IGlzU2FmYXJpID0gL1NhZmFyaVxcLy8udGVzdCh1YSkgJiYgIS9DaHJvbWVcXC8vLnRlc3QodWEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZVhZKHN0eWxlczogYW55LCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gIGlmICh0eXBlb2YgdHJhbnNmb3JtICE9PSAndW5kZWZpbmVkJyAmJiBoYXNDU1NUcmFuc2Zvcm1zKSB7XHJcbiAgICBpZiAoIWlzU2FmYXJpICYmIGhhc0NTUzNEVHJhbnNmb3Jtcykge1xyXG4gICAgICBzdHlsZXNbdHJhbnNmb3JtXSA9IGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgMClgO1xyXG4gICAgICBzdHlsZXNbYmFja2ZhY2VWaXNpYmlsaXR5XSA9ICdoaWRkZW4nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3R5bGVzW2NhbWVsQ2FzZSh0cmFuc2Zvcm0pXSA9IGB0cmFuc2xhdGUoJHt4fXB4LCAke3l9cHgpYDtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgc3R5bGVzLnRvcCA9IGAke3l9cHhgO1xyXG4gICAgc3R5bGVzLmxlZnQgPSBgJHt4fXB4YDtcclxuICB9XHJcbn1cclxuIl19