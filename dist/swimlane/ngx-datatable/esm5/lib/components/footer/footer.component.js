/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { DatatableFooterDirective } from './footer.directive';
var DataTableFooterComponent = /** @class */ (function () {
    function DataTableFooterComponent() {
        this.selectedCount = 0;
        this.page = new EventEmitter();
    }
    Object.defineProperty(DataTableFooterComponent.prototype, "isVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.rowCount / this.pageSize > 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableFooterComponent.prototype, "curPage", {
        get: /**
         * @return {?}
         */
        function () {
            return this.offset + 1;
        },
        enumerable: true,
        configurable: true
    });
    DataTableFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'datatable-footer',
                    template: "\n    <div\n      class=\"datatable-footer-inner\"\n      [ngClass]=\"{ 'selected-count': selectedMessage }\"\n      [style.height.px]=\"footerHeight\"\n    >\n      <ng-template\n        *ngIf=\"footerTemplate\"\n        [ngTemplateOutlet]=\"footerTemplate.template\"\n        [ngTemplateOutletContext]=\"{\n          rowCount: rowCount,\n          pageSize: pageSize,\n          selectedCount: selectedCount,\n          curPage: curPage,\n          offset: offset\n        }\"\n      >\n      </ng-template>\n      <div class=\"page-count\" *ngIf=\"!footerTemplate\">\n        <span *ngIf=\"selectedMessage\"> {{ selectedCount?.toLocaleString() }} {{ selectedMessage }} / </span>\n        {{ rowCount?.toLocaleString() }} {{ totalMessage }}\n      </div>\n      <datatable-pager\n        *ngIf=\"!footerTemplate\"\n        [pagerLeftArrowIcon]=\"pagerLeftArrowIcon\"\n        [pagerRightArrowIcon]=\"pagerRightArrowIcon\"\n        [pagerPreviousIcon]=\"pagerPreviousIcon\"\n        [pagerNextIcon]=\"pagerNextIcon\"\n        [page]=\"curPage\"\n        [size]=\"pageSize\"\n        [count]=\"rowCount\"\n        [hidden]=\"!isVisible\"\n        (change)=\"page.emit($event)\"\n      >\n      </datatable-pager>\n    </div>\n  ",
                    host: {
                        class: 'datatable-footer'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    DataTableFooterComponent.propDecorators = {
        footerHeight: [{ type: Input }],
        rowCount: [{ type: Input }],
        pageSize: [{ type: Input }],
        offset: [{ type: Input }],
        pagerLeftArrowIcon: [{ type: Input }],
        pagerRightArrowIcon: [{ type: Input }],
        pagerPreviousIcon: [{ type: Input }],
        pagerNextIcon: [{ type: Input }],
        totalMessage: [{ type: Input }],
        footerTemplate: [{ type: Input }],
        selectedCount: [{ type: Input }],
        selectedMessage: [{ type: Input }],
        page: [{ type: Output }]
    };
    return DataTableFooterComponent;
}());
export { DataTableFooterComponent };
if (false) {
    /** @type {?} */
    DataTableFooterComponent.prototype.footerHeight;
    /** @type {?} */
    DataTableFooterComponent.prototype.rowCount;
    /** @type {?} */
    DataTableFooterComponent.prototype.pageSize;
    /** @type {?} */
    DataTableFooterComponent.prototype.offset;
    /** @type {?} */
    DataTableFooterComponent.prototype.pagerLeftArrowIcon;
    /** @type {?} */
    DataTableFooterComponent.prototype.pagerRightArrowIcon;
    /** @type {?} */
    DataTableFooterComponent.prototype.pagerPreviousIcon;
    /** @type {?} */
    DataTableFooterComponent.prototype.pagerNextIcon;
    /** @type {?} */
    DataTableFooterComponent.prototype.totalMessage;
    /** @type {?} */
    DataTableFooterComponent.prototype.footerTemplate;
    /** @type {?} */
    DataTableFooterComponent.prototype.selectedCount;
    /** @type {?} */
    DataTableFooterComponent.prototype.selectedMessage;
    /** @type {?} */
    DataTableFooterComponent.prototype.page;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQ7SUFBQTtRQXdEVyxrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUd6QixTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFTekQsQ0FBQztJQVBDLHNCQUFJLCtDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2Q0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTs7Z0JBbkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsOHNDQW9DVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLGtCQUFrQjtxQkFDMUI7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7K0JBRUUsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSztxQ0FDTCxLQUFLO3NDQUNMLEtBQUs7b0NBQ0wsS0FBSztnQ0FDTCxLQUFLOytCQUNMLEtBQUs7aUNBQ0wsS0FBSztnQ0FFTCxLQUFLO2tDQUNMLEtBQUs7dUJBRUwsTUFBTTs7SUFTVCwrQkFBQztDQUFBLEFBcEVELElBb0VDO1NBeEJZLHdCQUF3Qjs7O0lBQ25DLGdEQUE4Qjs7SUFDOUIsNENBQTBCOztJQUMxQiw0Q0FBMEI7O0lBQzFCLDBDQUF3Qjs7SUFDeEIsc0RBQW9DOztJQUNwQyx1REFBcUM7O0lBQ3JDLHFEQUFtQzs7SUFDbkMsaURBQStCOztJQUMvQixnREFBOEI7O0lBQzlCLGtEQUFrRDs7SUFFbEQsaURBQW1DOztJQUNuQyxtREFBMkM7O0lBRTNDLHdDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YXRhYmxlRm9vdGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9mb290ZXIuZGlyZWN0aXZlJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkYXRhdGFibGUtZm9vdGVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cImRhdGF0YWJsZS1mb290ZXItaW5uZXJcIlxyXG4gICAgICBbbmdDbGFzc109XCJ7ICdzZWxlY3RlZC1jb3VudCc6IHNlbGVjdGVkTWVzc2FnZSB9XCJcclxuICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJmb290ZXJIZWlnaHRcIlxyXG4gICAgPlxyXG4gICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAqbmdJZj1cImZvb3RlclRlbXBsYXRlXCJcclxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJmb290ZXJUZW1wbGF0ZS50ZW1wbGF0ZVwiXHJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcclxuICAgICAgICAgIHJvd0NvdW50OiByb3dDb3VudCxcclxuICAgICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZSxcclxuICAgICAgICAgIHNlbGVjdGVkQ291bnQ6IHNlbGVjdGVkQ291bnQsXHJcbiAgICAgICAgICBjdXJQYWdlOiBjdXJQYWdlLFxyXG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXRcclxuICAgICAgICB9XCJcclxuICAgICAgPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZS1jb3VudFwiICpuZ0lmPVwiIWZvb3RlclRlbXBsYXRlXCI+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJzZWxlY3RlZE1lc3NhZ2VcIj4ge3sgc2VsZWN0ZWRDb3VudD8udG9Mb2NhbGVTdHJpbmcoKSB9fSB7eyBzZWxlY3RlZE1lc3NhZ2UgfX0gLyA8L3NwYW4+XHJcbiAgICAgICAge3sgcm93Q291bnQ/LnRvTG9jYWxlU3RyaW5nKCkgfX0ge3sgdG90YWxNZXNzYWdlIH19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGF0YXRhYmxlLXBhZ2VyXHJcbiAgICAgICAgKm5nSWY9XCIhZm9vdGVyVGVtcGxhdGVcIlxyXG4gICAgICAgIFtwYWdlckxlZnRBcnJvd0ljb25dPVwicGFnZXJMZWZ0QXJyb3dJY29uXCJcclxuICAgICAgICBbcGFnZXJSaWdodEFycm93SWNvbl09XCJwYWdlclJpZ2h0QXJyb3dJY29uXCJcclxuICAgICAgICBbcGFnZXJQcmV2aW91c0ljb25dPVwicGFnZXJQcmV2aW91c0ljb25cIlxyXG4gICAgICAgIFtwYWdlck5leHRJY29uXT1cInBhZ2VyTmV4dEljb25cIlxyXG4gICAgICAgIFtwYWdlXT1cImN1clBhZ2VcIlxyXG4gICAgICAgIFtzaXplXT1cInBhZ2VTaXplXCJcclxuICAgICAgICBbY291bnRdPVwicm93Q291bnRcIlxyXG4gICAgICAgIFtoaWRkZW5dPVwiIWlzVmlzaWJsZVwiXHJcbiAgICAgICAgKGNoYW5nZSk9XCJwYWdlLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgID5cclxuICAgICAgPC9kYXRhdGFibGUtcGFnZXI+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnZGF0YXRhYmxlLWZvb3RlcidcclxuICB9LFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVGb290ZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGZvb3RlckhlaWdodDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHJvd0NvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgcGFnZVNpemU6IG51bWJlcjtcclxuICBASW5wdXQoKSBvZmZzZXQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBwYWdlckxlZnRBcnJvd0ljb246IHN0cmluZztcclxuICBASW5wdXQoKSBwYWdlclJpZ2h0QXJyb3dJY29uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGFnZXJQcmV2aW91c0ljb246IHN0cmluZztcclxuICBASW5wdXQoKSBwYWdlck5leHRJY29uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdG90YWxNZXNzYWdlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZm9vdGVyVGVtcGxhdGU6IERhdGF0YWJsZUZvb3RlckRpcmVjdGl2ZTtcclxuXHJcbiAgQElucHV0KCkgc2VsZWN0ZWRDb3VudDogbnVtYmVyID0gMDtcclxuICBASW5wdXQoKSBzZWxlY3RlZE1lc3NhZ2U6IHN0cmluZyB8IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKSBwYWdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgZ2V0IGlzVmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnJvd0NvdW50IC8gdGhpcy5wYWdlU2l6ZSA+IDE7XHJcbiAgfVxyXG5cclxuICBnZXQgY3VyUGFnZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0ICsgMTtcclxuICB9XHJcbn1cclxuIl19