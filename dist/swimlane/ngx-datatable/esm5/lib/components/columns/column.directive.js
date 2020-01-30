/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, TemplateRef, ContentChild, Input } from '@angular/core';
import { DataTableColumnHeaderDirective } from './column-header.directive';
import { DataTableColumnCellDirective } from './column-cell.directive';
import { DataTableColumnCellTreeToggle } from './tree.directive';
import { ColumnChangesService } from '../../services/column-changes.service';
var DataTableColumnDirective = /** @class */ (function () {
    function DataTableColumnDirective(columnChangesService) {
        this.columnChangesService = columnChangesService;
        this.isFirstChange = true;
    }
    Object.defineProperty(DataTableColumnDirective.prototype, "cellTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._cellTemplateInput || this._cellTemplateQuery;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableColumnDirective.prototype, "headerTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._headerTemplateInput || this._headerTemplateQuery;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableColumnDirective.prototype, "treeToggleTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DataTableColumnDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.isFirstChange) {
            this.isFirstChange = false;
        }
        else {
            this.columnChangesService.onInputChange();
        }
    };
    DataTableColumnDirective.decorators = [
        { type: Directive, args: [{ selector: 'ngx-datatable-column' },] }
    ];
    /** @nocollapse */
    DataTableColumnDirective.ctorParameters = function () { return [
        { type: ColumnChangesService }
    ]; };
    DataTableColumnDirective.propDecorators = {
        name: [{ type: Input }],
        prop: [{ type: Input }],
        frozenLeft: [{ type: Input }],
        frozenRight: [{ type: Input }],
        flexGrow: [{ type: Input }],
        resizeable: [{ type: Input }],
        comparator: [{ type: Input }],
        pipe: [{ type: Input }],
        sortable: [{ type: Input }],
        draggable: [{ type: Input }],
        canAutoResize: [{ type: Input }],
        minWidth: [{ type: Input }],
        width: [{ type: Input }],
        maxWidth: [{ type: Input }],
        checkboxable: [{ type: Input }],
        headerCheckboxable: [{ type: Input }],
        headerClass: [{ type: Input }],
        cellClass: [{ type: Input }],
        isTreeColumn: [{ type: Input }],
        treeLevelIndent: [{ type: Input }],
        summaryFunc: [{ type: Input }],
        summaryTemplate: [{ type: Input }],
        _cellTemplateInput: [{ type: Input, args: ['cellTemplate',] }],
        _cellTemplateQuery: [{ type: ContentChild, args: [DataTableColumnCellDirective, { read: TemplateRef, static: true },] }],
        _headerTemplateInput: [{ type: Input, args: ['headerTemplate',] }],
        _headerTemplateQuery: [{ type: ContentChild, args: [DataTableColumnHeaderDirective, { read: TemplateRef, static: true },] }],
        _treeToggleTemplateInput: [{ type: Input, args: ['treeToggleTemplate',] }],
        _treeToggleTemplateQuery: [{ type: ContentChild, args: [DataTableColumnCellTreeToggle, { read: TemplateRef, static: true },] }]
    };
    return DataTableColumnDirective;
}());
export { DataTableColumnDirective };
if (false) {
    /** @type {?} */
    DataTableColumnDirective.prototype.name;
    /** @type {?} */
    DataTableColumnDirective.prototype.prop;
    /** @type {?} */
    DataTableColumnDirective.prototype.frozenLeft;
    /** @type {?} */
    DataTableColumnDirective.prototype.frozenRight;
    /** @type {?} */
    DataTableColumnDirective.prototype.flexGrow;
    /** @type {?} */
    DataTableColumnDirective.prototype.resizeable;
    /** @type {?} */
    DataTableColumnDirective.prototype.comparator;
    /** @type {?} */
    DataTableColumnDirective.prototype.pipe;
    /** @type {?} */
    DataTableColumnDirective.prototype.sortable;
    /** @type {?} */
    DataTableColumnDirective.prototype.draggable;
    /** @type {?} */
    DataTableColumnDirective.prototype.canAutoResize;
    /** @type {?} */
    DataTableColumnDirective.prototype.minWidth;
    /** @type {?} */
    DataTableColumnDirective.prototype.width;
    /** @type {?} */
    DataTableColumnDirective.prototype.maxWidth;
    /** @type {?} */
    DataTableColumnDirective.prototype.checkboxable;
    /** @type {?} */
    DataTableColumnDirective.prototype.headerCheckboxable;
    /** @type {?} */
    DataTableColumnDirective.prototype.headerClass;
    /** @type {?} */
    DataTableColumnDirective.prototype.cellClass;
    /** @type {?} */
    DataTableColumnDirective.prototype.isTreeColumn;
    /** @type {?} */
    DataTableColumnDirective.prototype.treeLevelIndent;
    /** @type {?} */
    DataTableColumnDirective.prototype.summaryFunc;
    /** @type {?} */
    DataTableColumnDirective.prototype.summaryTemplate;
    /** @type {?} */
    DataTableColumnDirective.prototype._cellTemplateInput;
    /** @type {?} */
    DataTableColumnDirective.prototype._cellTemplateQuery;
    /** @type {?} */
    DataTableColumnDirective.prototype._headerTemplateInput;
    /** @type {?} */
    DataTableColumnDirective.prototype._headerTemplateQuery;
    /** @type {?} */
    DataTableColumnDirective.prototype._treeToggleTemplateInput;
    /** @type {?} */
    DataTableColumnDirective.prototype._treeToggleTemplateQuery;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnDirective.prototype.isFirstChange;
    /**
     * @type {?}
     * @private
     */
    DataTableColumnDirective.prototype.columnChangesService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29sdW1ucy9jb2x1bW4uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUc3RTtJQXlERSxrQ0FBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFGdEQsa0JBQWEsR0FBRyxJQUFJLENBQUM7SUFFb0MsQ0FBQztJQTFCbEUsc0JBQUksa0RBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDNUQsQ0FBQzs7O09BQUE7SUFRRCxzQkFBSSxvREFBYzs7OztRQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUNoRSxDQUFDOzs7T0FBQTtJQVFELHNCQUFJLHdEQUFrQjs7OztRQUF0QjtZQUNFLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixJQUFJLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztRQUN4RSxDQUFDOzs7T0FBQTs7OztJQU1ELDhDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7Z0JBakVGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRTs7OztnQkFIdEMsb0JBQW9COzs7dUJBSzFCLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7Z0NBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzsrQkFDTCxLQUFLO3FDQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLOytCQUNMLEtBQUs7a0NBQ0wsS0FBSzs4QkFDTCxLQUFLO2tDQUNMLEtBQUs7cUNBRUwsS0FBSyxTQUFDLGNBQWM7cUNBR3BCLFlBQVksU0FBQyw0QkFBNEIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt1Q0FPOUUsS0FBSyxTQUFDLGdCQUFnQjt1Q0FHdEIsWUFBWSxTQUFDLDhCQUE4QixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJDQU9oRixLQUFLLFNBQUMsb0JBQW9COzJDQUcxQixZQUFZLFNBQUMsNkJBQTZCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBa0JsRiwrQkFBQztDQUFBLEFBbEVELElBa0VDO1NBakVZLHdCQUF3Qjs7O0lBQ25DLHdDQUFzQjs7SUFDdEIsd0NBQStCOztJQUMvQiw4Q0FBeUI7O0lBQ3pCLCtDQUEwQjs7SUFDMUIsNENBQTBCOztJQUMxQiw4Q0FBNkI7O0lBQzdCLDhDQUF5Qjs7SUFDekIsd0NBQW1COztJQUNuQiw0Q0FBMkI7O0lBQzNCLDZDQUE0Qjs7SUFDNUIsaURBQWdDOztJQUNoQyw0Q0FBMEI7O0lBQzFCLHlDQUF1Qjs7SUFDdkIsNENBQTBCOztJQUMxQixnREFBK0I7O0lBQy9CLHNEQUFxQzs7SUFDckMsK0NBQTZEOztJQUM3RCw2Q0FBMkQ7O0lBQzNELGdEQUErQjs7SUFDL0IsbURBQWlDOztJQUNqQywrQ0FBNEM7O0lBQzVDLG1EQUEyQzs7SUFFM0Msc0RBQ3FDOztJQUVyQyxzREFDcUM7O0lBTXJDLHdEQUN1Qzs7SUFFdkMsd0RBQ3VDOztJQU12Qyw0REFDMkM7O0lBRTNDLDREQUMyQzs7Ozs7SUFNM0MsaURBQTZCOzs7OztJQUVqQix3REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBDb250ZW50Q2hpbGQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jb2x1bW4taGVhZGVyLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkNlbGxEaXJlY3RpdmUgfSBmcm9tICcuL2NvbHVtbi1jZWxsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkNlbGxUcmVlVG9nZ2xlIH0gZnJvbSAnLi90cmVlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENvbHVtbkNoYW5nZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29sdW1uLWNoYW5nZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IFRhYmxlQ29sdW1uUHJvcCB9IGZyb20gJy4uLy4uL3R5cGVzL3RhYmxlLWNvbHVtbi50eXBlJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ25neC1kYXRhdGFibGUtY29sdW1uJyB9KVxyXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHJvcDogVGFibGVDb2x1bW5Qcm9wO1xyXG4gIEBJbnB1dCgpIGZyb3plbkxlZnQ6IGFueTtcclxuICBASW5wdXQoKSBmcm96ZW5SaWdodDogYW55O1xyXG4gIEBJbnB1dCgpIGZsZXhHcm93OiBudW1iZXI7XHJcbiAgQElucHV0KCkgcmVzaXplYWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjb21wYXJhdG9yOiBhbnk7XHJcbiAgQElucHV0KCkgcGlwZTogYW55O1xyXG4gIEBJbnB1dCgpIHNvcnRhYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRyYWdnYWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjYW5BdXRvUmVzaXplOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG1pbldpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBtYXhXaWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGNoZWNrYm94YWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBoZWFkZXJDaGVja2JveGFibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaGVhZGVyQ2xhc3M6IHN0cmluZyB8ICgoZGF0YTogYW55KSA9PiBzdHJpbmcgfCBhbnkpO1xyXG4gIEBJbnB1dCgpIGNlbGxDbGFzczogc3RyaW5nIHwgKChkYXRhOiBhbnkpID0+IHN0cmluZyB8IGFueSk7XHJcbiAgQElucHV0KCkgaXNUcmVlQ29sdW1uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRyZWVMZXZlbEluZGVudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHN1bW1hcnlGdW5jOiAoY2VsbHM6IGFueVtdKSA9PiBhbnk7XHJcbiAgQElucHV0KCkgc3VtbWFyeVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoJ2NlbGxUZW1wbGF0ZScpXHJcbiAgX2NlbGxUZW1wbGF0ZUlucHV0OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAQ29udGVudENoaWxkKERhdGFUYWJsZUNvbHVtbkNlbGxEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxyXG4gIF9jZWxsVGVtcGxhdGVRdWVyeTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgZ2V0IGNlbGxUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9jZWxsVGVtcGxhdGVJbnB1dCB8fCB0aGlzLl9jZWxsVGVtcGxhdGVRdWVyeTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnaGVhZGVyVGVtcGxhdGUnKVxyXG4gIF9oZWFkZXJUZW1wbGF0ZUlucHV0OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAQ29udGVudENoaWxkKERhdGFUYWJsZUNvbHVtbkhlYWRlckRpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXHJcbiAgX2hlYWRlclRlbXBsYXRlUXVlcnk6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIGdldCBoZWFkZXJUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9oZWFkZXJUZW1wbGF0ZUlucHV0IHx8IHRoaXMuX2hlYWRlclRlbXBsYXRlUXVlcnk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ3RyZWVUb2dnbGVUZW1wbGF0ZScpXHJcbiAgX3RyZWVUb2dnbGVUZW1wbGF0ZUlucHV0OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAQ29udGVudENoaWxkKERhdGFUYWJsZUNvbHVtbkNlbGxUcmVlVG9nZ2xlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcclxuICBfdHJlZVRvZ2dsZVRlbXBsYXRlUXVlcnk6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIGdldCB0cmVlVG9nZ2xlVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHJlZVRvZ2dsZVRlbXBsYXRlSW5wdXQgfHwgdGhpcy5fdHJlZVRvZ2dsZVRlbXBsYXRlUXVlcnk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzRmlyc3RDaGFuZ2UgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbHVtbkNoYW5nZXNTZXJ2aWNlOiBDb2x1bW5DaGFuZ2VzU2VydmljZSkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBpZiAodGhpcy5pc0ZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuaXNGaXJzdENoYW5nZSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jb2x1bW5DaGFuZ2VzU2VydmljZS5vbklucHV0Q2hhbmdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==