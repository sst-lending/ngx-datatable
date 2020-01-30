/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Converts strings from something to camel case
 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
 * @param {?} str
 * @return {?}
 */
export function camelCase(str) {
    // Replace special characters with a space
    str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');
    // put a space before an uppercase letter
    str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
    // Lower case first character and some other stuff
    str = str
        .replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '')
        .trim()
        .toLowerCase();
    // uppercase characters preceded by a space or number
    str = str.replace(/([ 0-9]+)([a-zA-Z])/g, (/**
     * @param {?} a
     * @param {?} b
     * @param {?} c
     * @return {?}
     */
    function (a, b, c) {
        return b.trim() + c.toUpperCase();
    }));
    return str;
}
/**
 * Converts strings from camel case to words
 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
 * @param {?} str
 * @return {?}
 */
export function deCamelCase(str) {
    return str.replace(/([A-Z])/g, (/**
     * @param {?} match
     * @return {?}
     */
    match => ` ${match}`)).replace(/^./, (/**
     * @param {?} match
     * @return {?}
     */
    match => match.toUpperCase()));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZWwtY2FzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2NhbWVsLWNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUlBLE1BQU0sVUFBVSxTQUFTLENBQUMsR0FBVztJQUNuQywwQ0FBMEM7SUFDMUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekMseUNBQXlDO0lBQ3pDLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRTlDLGtEQUFrRDtJQUNsRCxHQUFHLEdBQUcsR0FBRztTQUNOLE9BQU8sQ0FBQywwQkFBMEIsRUFBRSxFQUFFLENBQUM7U0FDdkMsSUFBSSxFQUFFO1NBQ04sV0FBVyxFQUFFLENBQUM7SUFFakIscURBQXFEO0lBQ3JELEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLHNCQUFzQjs7Ozs7O0lBQUUsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDeEQsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BDLENBQUMsRUFBQyxDQUFDO0lBRUgsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDOzs7Ozs7O0FBTUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxHQUFXO0lBQ3JDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVOzs7O0lBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFDLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7SUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBQyxDQUFDO0FBQ25HLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ29udmVydHMgc3RyaW5ncyBmcm9tIHNvbWV0aGluZyB0byBjYW1lbCBjYXNlXHJcbiAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA0MjUyODcvY29udmVydC1kYXNoLXNlcGFyYXRlZC1zdHJpbmctdG8tY2FtZWxjYXNlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAvLyBSZXBsYWNlIHNwZWNpYWwgY2hhcmFjdGVycyB3aXRoIGEgc3BhY2VcclxuICBzdHIgPSBzdHIucmVwbGFjZSgvW15hLXpBLVowLTkgXS9nLCAnICcpO1xyXG4gIC8vIHB1dCBhIHNwYWNlIGJlZm9yZSBhbiB1cHBlcmNhc2UgbGV0dGVyXHJcbiAgc3RyID0gc3RyLnJlcGxhY2UoLyhbYS16XSg/PVtBLVpdKSkvZywgJyQxICcpO1xyXG5cclxuICAvLyBMb3dlciBjYXNlIGZpcnN0IGNoYXJhY3RlciBhbmQgc29tZSBvdGhlciBzdHVmZlxyXG4gIHN0ciA9IHN0clxyXG4gICAgLnJlcGxhY2UoLyhbXmEtekEtWjAtOSBdKXxeWzAtOV0rL2csICcnKVxyXG4gICAgLnRyaW0oKVxyXG4gICAgLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gIC8vIHVwcGVyY2FzZSBjaGFyYWN0ZXJzIHByZWNlZGVkIGJ5IGEgc3BhY2Ugb3IgbnVtYmVyXHJcbiAgc3RyID0gc3RyLnJlcGxhY2UoLyhbIDAtOV0rKShbYS16QS1aXSkvZywgZnVuY3Rpb24oYSwgYiwgYykge1xyXG4gICAgcmV0dXJuIGIudHJpbSgpICsgYy50b1VwcGVyQ2FzZSgpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gc3RyO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgc3RyaW5ncyBmcm9tIGNhbWVsIGNhc2UgdG8gd29yZHNcclxuICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MjI1NDA3L2NvbnZlcnQtY2FtZWxjYXNldGV4dC10by1jYW1lbC1jYXNlLXRleHRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZUNhbWVsQ2FzZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIG1hdGNoID0+IGAgJHttYXRjaH1gKS5yZXBsYWNlKC9eLi8sIG1hdGNoID0+IG1hdGNoLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcbiJdfQ==