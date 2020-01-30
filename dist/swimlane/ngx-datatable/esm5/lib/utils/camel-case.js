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
    function (match) { return " " + match; })).replace(/^./, (/**
     * @param {?} match
     * @return {?}
     */
    function (match) { return match.toUpperCase(); }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZWwtY2FzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2NhbWVsLWNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUlBLE1BQU0sVUFBVSxTQUFTLENBQUMsR0FBVztJQUNuQywwQ0FBMEM7SUFDMUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekMseUNBQXlDO0lBQ3pDLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRTlDLGtEQUFrRDtJQUNsRCxHQUFHLEdBQUcsR0FBRztTQUNOLE9BQU8sQ0FBQywwQkFBMEIsRUFBRSxFQUFFLENBQUM7U0FDdkMsSUFBSSxFQUFFO1NBQ04sV0FBVyxFQUFFLENBQUM7SUFFakIscURBQXFEO0lBQ3JELEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLHNCQUFzQjs7Ozs7O0lBQUUsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDeEQsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BDLENBQUMsRUFBQyxDQUFDO0lBRUgsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDOzs7Ozs7O0FBTUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxHQUFXO0lBQ3JDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVOzs7O0lBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxNQUFJLEtBQU8sRUFBWCxDQUFXLEVBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSTs7OztJQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFuQixDQUFtQixFQUFDLENBQUM7QUFDbkcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDb252ZXJ0cyBzdHJpbmdzIGZyb20gc29tZXRoaW5nIHRvIGNhbWVsIGNhc2VcclxuICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDQyNTI4Ny9jb252ZXJ0LWRhc2gtc2VwYXJhdGVkLXN0cmluZy10by1jYW1lbGNhc2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW1lbENhc2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIC8vIFJlcGxhY2Ugc3BlY2lhbCBjaGFyYWN0ZXJzIHdpdGggYSBzcGFjZVxyXG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9bXmEtekEtWjAtOSBdL2csICcgJyk7XHJcbiAgLy8gcHV0IGEgc3BhY2UgYmVmb3JlIGFuIHVwcGVyY2FzZSBsZXR0ZXJcclxuICBzdHIgPSBzdHIucmVwbGFjZSgvKFthLXpdKD89W0EtWl0pKS9nLCAnJDEgJyk7XHJcblxyXG4gIC8vIExvd2VyIGNhc2UgZmlyc3QgY2hhcmFjdGVyIGFuZCBzb21lIG90aGVyIHN0dWZmXHJcbiAgc3RyID0gc3RyXHJcbiAgICAucmVwbGFjZSgvKFteYS16QS1aMC05IF0pfF5bMC05XSsvZywgJycpXHJcbiAgICAudHJpbSgpXHJcbiAgICAudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgLy8gdXBwZXJjYXNlIGNoYXJhY3RlcnMgcHJlY2VkZWQgYnkgYSBzcGFjZSBvciBudW1iZXJcclxuICBzdHIgPSBzdHIucmVwbGFjZSgvKFsgMC05XSspKFthLXpBLVpdKS9nLCBmdW5jdGlvbihhLCBiLCBjKSB7XHJcbiAgICByZXR1cm4gYi50cmltKCkgKyBjLnRvVXBwZXJDYXNlKCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBzdHI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBzdHJpbmdzIGZyb20gY2FtZWwgY2FzZSB0byB3b3Jkc1xyXG4gKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzcyMjU0MDcvY29udmVydC1jYW1lbGNhc2V0ZXh0LXRvLWNhbWVsLWNhc2UtdGV4dFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlQ2FtZWxDYXNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgbWF0Y2ggPT4gYCAke21hdGNofWApLnJlcGxhY2UoL14uLywgbWF0Y2ggPT4gbWF0Y2gudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuIl19