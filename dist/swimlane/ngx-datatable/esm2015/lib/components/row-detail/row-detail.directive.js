/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input, Output, EventEmitter, Directive, TemplateRef, ContentChild } from '@angular/core';
import { DatatableRowDetailTemplateDirective } from './row-detail-template.directive';
export class DatatableRowDetailDirective {
    constructor() {
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
    /**
     * @return {?}
     */
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle the expansion of the row
     * @param {?} row
     * @return {?}
     */
    toggleExpandRow(row) {
        this.toggle.emit({
            type: 'row',
            value: row
        });
    }
    /**
     * API method to expand all the rows.
     * @return {?}
     */
    expandAllRows() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * API method to collapse all the rows.
     * @return {?}
     */
    collapseAllRows() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
}
DatatableRowDetailDirective.decorators = [
    { type: Directive, args: [{ selector: 'ngx-datatable-row-detail' },] }
];
DatatableRowDetailDirective.propDecorators = {
    rowHeight: [{ type: Input }],
    _templateInput: [{ type: Input, args: ['template',] }],
    _templateQuery: [{ type: ContentChild, args: [DatatableRowDetailTemplateDirective, { read: TemplateRef, static: true },] }],
    toggle: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWRldGFpbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Jvdy1kZXRhaWwvcm93LWRldGFpbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUd0RixNQUFNLE9BQU8sMkJBQTJCO0lBRHhDOzs7OztRQU1XLGNBQVMsR0FBcUQsQ0FBQyxDQUFDOzs7O1FBZS9ELFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQStCM0QsQ0FBQzs7OztJQXRDQyxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUNwRCxDQUFDOzs7Ozs7SUFVRCxlQUFlLENBQUMsR0FBUTtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNmLElBQUksRUFBRSxLQUFLO1lBQ1gsS0FBSyxFQUFFLEdBQUc7U0FDWCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUtELGFBQWE7UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNmLElBQUksRUFBRSxLQUFLO1lBQ1gsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUtELGVBQWU7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNmLElBQUksRUFBRSxLQUFLO1lBQ1gsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFuREYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLDBCQUEwQixFQUFFOzs7d0JBTWhELEtBQUs7NkJBRUwsS0FBSyxTQUFDLFVBQVU7NkJBR2hCLFlBQVksU0FBQyxtQ0FBbUMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtxQkFVckYsTUFBTTs7Ozs7Ozs7SUFmUCxnREFBeUU7O0lBRXpFLHFEQUNpQzs7SUFFakMscURBQ2lDOzs7OztJQVNqQyw2Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhdGFibGVSb3dEZXRhaWxUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vcm93LWRldGFpbC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbmd4LWRhdGF0YWJsZS1yb3ctZGV0YWlsJyB9KVxyXG5leHBvcnQgY2xhc3MgRGF0YXRhYmxlUm93RGV0YWlsRGlyZWN0aXZlIHtcclxuICAvKipcclxuICAgKiBUaGUgZGV0YWlsIHJvdyBoZWlnaHQgaXMgcmVxdWlyZWQgZXNwZWNpYWxseVxyXG4gICAqIHdoZW4gdmlydHVhbCBzY3JvbGwgaXMgZW5hYmxlZC5cclxuICAgKi9cclxuICBASW5wdXQoKSByb3dIZWlnaHQ6IG51bWJlciB8ICgocm93PzogYW55LCBpbmRleD86IG51bWJlcikgPT4gbnVtYmVyKSA9IDA7XHJcblxyXG4gIEBJbnB1dCgndGVtcGxhdGUnKVxyXG4gIF90ZW1wbGF0ZUlucHV0OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAQ29udGVudENoaWxkKERhdGF0YWJsZVJvd0RldGFpbFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcclxuICBfdGVtcGxhdGVRdWVyeTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgZ2V0IHRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlSW5wdXQgfHwgdGhpcy5fdGVtcGxhdGVRdWVyeTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJvdyBkZXRhaWwgcm93IHZpc2JpbGl0eSB3YXMgdG9nZ2xlZC5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgdG9nZ2xlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVG9nZ2xlIHRoZSBleHBhbnNpb24gb2YgdGhlIHJvd1xyXG4gICAqL1xyXG4gIHRvZ2dsZUV4cGFuZFJvdyhyb3c6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy50b2dnbGUuZW1pdCh7XHJcbiAgICAgIHR5cGU6ICdyb3cnLFxyXG4gICAgICB2YWx1ZTogcm93XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFQSSBtZXRob2QgdG8gZXhwYW5kIGFsbCB0aGUgcm93cy5cclxuICAgKi9cclxuICBleHBhbmRBbGxSb3dzKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b2dnbGUuZW1pdCh7XHJcbiAgICAgIHR5cGU6ICdhbGwnLFxyXG4gICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBUEkgbWV0aG9kIHRvIGNvbGxhcHNlIGFsbCB0aGUgcm93cy5cclxuICAgKi9cclxuICBjb2xsYXBzZUFsbFJvd3MoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvZ2dsZS5lbWl0KHtcclxuICAgICAgdHlwZTogJ2FsbCcsXHJcbiAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==