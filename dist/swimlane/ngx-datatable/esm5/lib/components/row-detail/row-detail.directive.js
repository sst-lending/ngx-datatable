/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input, Output, EventEmitter, Directive, TemplateRef, ContentChild } from '@angular/core';
import { DatatableRowDetailTemplateDirective } from './row-detail-template.directive';
var DatatableRowDetailDirective = /** @class */ (function () {
    function DatatableRowDetailDirective() {
        /**
         * The detail row height is required especially
         * when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Row detail row visbility was toggled.
         */
        this.toggle = new EventEmitter();
    }
    Object.defineProperty(DatatableRowDetailDirective.prototype, "template", {
        get: /**
         * @return {?}
         */
        function () {
            return this._templateInput || this._templateQuery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Toggle the expansion of the row
     */
    /**
     * Toggle the expansion of the row
     * @param {?} row
     * @return {?}
     */
    DatatableRowDetailDirective.prototype.toggleExpandRow = /**
     * Toggle the expansion of the row
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.toggle.emit({
            type: 'row',
            value: row
        });
    };
    /**
     * API method to expand all the rows.
     */
    /**
     * API method to expand all the rows.
     * @return {?}
     */
    DatatableRowDetailDirective.prototype.expandAllRows = /**
     * API method to expand all the rows.
     * @return {?}
     */
    function () {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    };
    /**
     * API method to collapse all the rows.
     */
    /**
     * API method to collapse all the rows.
     * @return {?}
     */
    DatatableRowDetailDirective.prototype.collapseAllRows = /**
     * API method to collapse all the rows.
     * @return {?}
     */
    function () {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    };
    DatatableRowDetailDirective.decorators = [
        { type: Directive, args: [{ selector: 'ngx-datatable-row-detail' },] }
    ];
    DatatableRowDetailDirective.propDecorators = {
        rowHeight: [{ type: Input }],
        _templateInput: [{ type: Input, args: ['template',] }],
        _templateQuery: [{ type: ContentChild, args: [DatatableRowDetailTemplateDirective, { read: TemplateRef, static: true },] }],
        toggle: [{ type: Output }]
    };
    return DatatableRowDetailDirective;
}());
export { DatatableRowDetailDirective };
if (false) {
    /**
     * The detail row height is required especially
     * when virtual scroll is enabled.
     * @type {?}
     */
    DatatableRowDetailDirective.prototype.rowHeight;
    /** @type {?} */
    DatatableRowDetailDirective.prototype._templateInput;
    /** @type {?} */
    DatatableRowDetailDirective.prototype._templateQuery;
    /**
     * Row detail row visbility was toggled.
     * @type {?}
     */
    DatatableRowDetailDirective.prototype.toggle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWRldGFpbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Jvdy1kZXRhaWwvcm93LWRldGFpbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUV0RjtJQUFBOzs7OztRQU1XLGNBQVMsR0FBcUQsQ0FBQyxDQUFDOzs7O1FBZS9ELFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQStCM0QsQ0FBQztJQXRDQyxzQkFBSSxpREFBUTs7OztRQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFPRDs7T0FFRzs7Ozs7O0lBQ0gscURBQWU7Ozs7O0lBQWYsVUFBZ0IsR0FBUTtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNmLElBQUksRUFBRSxLQUFLO1lBQ1gsS0FBSyxFQUFFLEdBQUc7U0FDWCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsbURBQWE7Ozs7SUFBYjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSSxFQUFFLEtBQUs7WUFDWCxLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxxREFBZTs7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZixJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBbkRGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSwwQkFBMEIsRUFBRTs7OzRCQU1oRCxLQUFLO2lDQUVMLEtBQUssU0FBQyxVQUFVO2lDQUdoQixZQUFZLFNBQUMsbUNBQW1DLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7eUJBVXJGLE1BQU07O0lBK0JULGtDQUFDO0NBQUEsQUFwREQsSUFvREM7U0FuRFksMkJBQTJCOzs7Ozs7O0lBS3RDLGdEQUF5RTs7SUFFekUscURBQ2lDOztJQUVqQyxxREFDaUM7Ozs7O0lBU2pDLDZDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGF0YWJsZVJvd0RldGFpbFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9yb3ctZGV0YWlsLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICduZ3gtZGF0YXRhYmxlLXJvdy1kZXRhaWwnIH0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhdGFibGVSb3dEZXRhaWxEaXJlY3RpdmUge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkZXRhaWwgcm93IGhlaWdodCBpcyByZXF1aXJlZCBlc3BlY2lhbGx5XHJcbiAgICogd2hlbiB2aXJ0dWFsIHNjcm9sbCBpcyBlbmFibGVkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHJvd0hlaWdodDogbnVtYmVyIHwgKChyb3c/OiBhbnksIGluZGV4PzogbnVtYmVyKSA9PiBudW1iZXIpID0gMDtcclxuXHJcbiAgQElucHV0KCd0ZW1wbGF0ZScpXHJcbiAgX3RlbXBsYXRlSW5wdXQ6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoRGF0YXRhYmxlUm93RGV0YWlsVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxyXG4gIF90ZW1wbGF0ZVF1ZXJ5OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBnZXQgdGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVJbnB1dCB8fCB0aGlzLl90ZW1wbGF0ZVF1ZXJ5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUm93IGRldGFpbCByb3cgdmlzYmlsaXR5IHdhcyB0b2dnbGVkLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSB0b2dnbGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBUb2dnbGUgdGhlIGV4cGFuc2lvbiBvZiB0aGUgcm93XHJcbiAgICovXHJcbiAgdG9nZ2xlRXhwYW5kUm93KHJvdzogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnRvZ2dsZS5lbWl0KHtcclxuICAgICAgdHlwZTogJ3JvdycsXHJcbiAgICAgIHZhbHVlOiByb3dcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQVBJIG1ldGhvZCB0byBleHBhbmQgYWxsIHRoZSByb3dzLlxyXG4gICAqL1xyXG4gIGV4cGFuZEFsbFJvd3MoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvZ2dsZS5lbWl0KHtcclxuICAgICAgdHlwZTogJ2FsbCcsXHJcbiAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFQSSBtZXRob2QgdG8gY29sbGFwc2UgYWxsIHRoZSByb3dzLlxyXG4gICAqL1xyXG4gIGNvbGxhcHNlQWxsUm93cygpOiB2b2lkIHtcclxuICAgIHRoaXMudG9nZ2xlLmVtaXQoe1xyXG4gICAgICB0eXBlOiAnYWxsJyxcclxuICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19