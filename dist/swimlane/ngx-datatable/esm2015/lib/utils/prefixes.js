/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { camelCase } from './camel-case';
/** @type {?} */
const cache = {};
/** @type {?} */
const testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined;
// Get Prefix
// http://davidwalsh.name/vendor-prefix
const ɵ0 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    const styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
    /** @type {?} */
    const match = typeof styles !== 'undefined'
        ? Array.prototype.slice
            .call(styles)
            .join('')
            .match(/-(moz|webkit|ms)-/)
        : null;
    /** @type {?} */
    const pre = match !== null ? match[1] : undefined;
    // tslint:disable-next-line: tsr-detect-non-literal-regexp
    /** @type {?} */
    const dom = typeof pre !== 'undefined' ? 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
    return dom
        ? {
            dom,
            lowercase: pre,
            css: `-${pre}-`,
            js: pre[0].toUpperCase() + pre.substr(1)
        }
        : undefined;
};
/** @type {?} */
const prefix = ((ɵ0))();
/**
 * @param {?} property
 * @return {?}
 */
export function getVendorPrefixedName(property) {
    /** @type {?} */
    const name = camelCase(property);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZml4ZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9wcmVmaXhlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7TUFFbkMsS0FBSyxHQUFHLEVBQUU7O01BQ1YsU0FBUyxHQUFHLE9BQU8sUUFBUSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7OztBQUluRjs7VUFDUixNQUFNLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7VUFDMUcsS0FBSyxHQUNULE9BQU8sTUFBTSxLQUFLLFdBQVc7UUFDM0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSzthQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ1osSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUNSLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztRQUMvQixDQUFDLENBQUMsSUFBSTs7VUFDSixHQUFHLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7VUFFM0MsR0FBRyxHQUFHLE9BQU8sR0FBRyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7SUFFakgsT0FBTyxHQUFHO1FBQ1IsQ0FBQyxDQUFDO1lBQ0UsR0FBRztZQUNILFNBQVMsRUFBRSxHQUFHO1lBQ2QsR0FBRyxFQUFFLElBQUksR0FBRyxHQUFHO1lBQ2YsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUNILENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDaEIsQ0FBQzs7TUFyQkssTUFBTSxHQUFHLE1BcUJiLEVBQUU7Ozs7O0FBRUosTUFBTSxVQUFVLHFCQUFxQixDQUFDLFFBQWdCOztVQUM5QyxJQUFJLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztJQUVoQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2hCLElBQUksTUFBTSxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDMUUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDO1NBQ3JDO2FBQU0sSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQzVDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUM7U0FDeEI7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW1lbENhc2UgfSBmcm9tICcuL2NhbWVsLWNhc2UnO1xyXG5cclxuY29uc3QgY2FjaGUgPSB7fTtcclxuY29uc3QgdGVzdFN0eWxlID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlIDogdW5kZWZpbmVkO1xyXG5cclxuLy8gR2V0IFByZWZpeFxyXG4vLyBodHRwOi8vZGF2aWR3YWxzaC5uYW1lL3ZlbmRvci1wcmVmaXhcclxuY29uc3QgcHJlZml4ID0gKGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IHN0eWxlcyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnJykgOiB1bmRlZmluZWQ7XHJcbiAgY29uc3QgbWF0Y2ggPVxyXG4gICAgdHlwZW9mIHN0eWxlcyAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgPyBBcnJheS5wcm90b3R5cGUuc2xpY2VcclxuICAgICAgICAgIC5jYWxsKHN0eWxlcylcclxuICAgICAgICAgIC5qb2luKCcnKVxyXG4gICAgICAgICAgLm1hdGNoKC8tKG1venx3ZWJraXR8bXMpLS8pXHJcbiAgICAgIDogbnVsbDtcclxuICBjb25zdCBwcmUgPSBtYXRjaCAhPT0gbnVsbCA/IG1hdGNoWzFdIDogdW5kZWZpbmVkO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdHNyLWRldGVjdC1ub24tbGl0ZXJhbC1yZWdleHBcclxuICBjb25zdCBkb20gPSB0eXBlb2YgcHJlICE9PSAndW5kZWZpbmVkJyA/ICdXZWJLaXR8TW96fE1TfE8nLm1hdGNoKG5ldyBSZWdFeHAoJygnICsgcHJlICsgJyknLCAnaScpKVsxXSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgcmV0dXJuIGRvbVxyXG4gICAgPyB7XHJcbiAgICAgICAgZG9tLFxyXG4gICAgICAgIGxvd2VyY2FzZTogcHJlLFxyXG4gICAgICAgIGNzczogYC0ke3ByZX0tYCxcclxuICAgICAgICBqczogcHJlWzBdLnRvVXBwZXJDYXNlKCkgKyBwcmUuc3Vic3RyKDEpXHJcbiAgICAgIH1cclxuICAgIDogdW5kZWZpbmVkO1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZlbmRvclByZWZpeGVkTmFtZShwcm9wZXJ0eTogc3RyaW5nKSB7XHJcbiAgY29uc3QgbmFtZSA9IGNhbWVsQ2FzZShwcm9wZXJ0eSk7XHJcblxyXG4gIGlmICghY2FjaGVbbmFtZV0pIHtcclxuICAgIGlmIChwcmVmaXggIT09IHVuZGVmaW5lZCAmJiB0ZXN0U3R5bGVbcHJlZml4LmNzcyArIHByb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNhY2hlW25hbWVdID0gcHJlZml4LmNzcyArIHByb3BlcnR5O1xyXG4gICAgfSBlbHNlIGlmICh0ZXN0U3R5bGVbcHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY2FjaGVbbmFtZV0gPSBwcm9wZXJ0eTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjYWNoZVtuYW1lXTtcclxufVxyXG4iXX0=