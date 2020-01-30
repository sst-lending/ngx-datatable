/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * service to make DatatableComponent aware of changes to
 * input bindings of DataTableColumnDirective
 */
var ColumnChangesService = /** @class */ (function () {
    function ColumnChangesService() {
        this.columnInputChanges = new Subject();
    }
    Object.defineProperty(ColumnChangesService.prototype, "columnInputChanges$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.columnInputChanges.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ColumnChangesService.prototype.onInputChange = /**
     * @return {?}
     */
    function () {
        this.columnInputChanges.next();
    };
    ColumnChangesService.decorators = [
        { type: Injectable }
    ];
    return ColumnChangesService;
}());
export { ColumnChangesService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnChangesService.prototype.columnInputChanges;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWNoYW5nZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbHVtbi1jaGFuZ2VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFNM0M7SUFBQTtRQUVVLHVCQUFrQixHQUFHLElBQUksT0FBTyxFQUFhLENBQUM7SUFTeEQsQ0FBQztJQVBDLHNCQUFJLHFEQUFtQjs7OztRQUF2QjtZQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2hELENBQUM7OztPQUFBOzs7O0lBRUQsNENBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7O2dCQVZGLFVBQVU7O0lBV1gsMkJBQUM7Q0FBQSxBQVhELElBV0M7U0FWWSxvQkFBb0I7Ozs7OztJQUMvQixrREFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogc2VydmljZSB0byBtYWtlIERhdGF0YWJsZUNvbXBvbmVudCBhd2FyZSBvZiBjaGFuZ2VzIHRvXHJcbiAqIGlucHV0IGJpbmRpbmdzIG9mIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZVxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29sdW1uQ2hhbmdlc1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgY29sdW1uSW5wdXRDaGFuZ2VzID0gbmV3IFN1YmplY3Q8dW5kZWZpbmVkPigpO1xyXG5cclxuICBnZXQgY29sdW1uSW5wdXRDaGFuZ2VzJCgpOiBPYnNlcnZhYmxlPHVuZGVmaW5lZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29sdW1uSW5wdXRDaGFuZ2VzLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dENoYW5nZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29sdW1uSW5wdXRDaGFuZ2VzLm5leHQoKTtcclxuICB9XHJcbn1cclxuIl19