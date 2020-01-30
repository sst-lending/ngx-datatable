/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, TemplateRef, ContentChild, Input } from '@angular/core';
import { DataTableColumnHeaderDirective } from './column-header.directive';
import { DataTableColumnCellDirective } from './column-cell.directive';
import { DataTableColumnCellTreeToggle } from './tree.directive';
import { ColumnChangesService } from '../../services/column-changes.service';
export class DataTableColumnDirective {
    /**
     * @param {?} columnChangesService
     */
    constructor(columnChangesService) {
        this.columnChangesService = columnChangesService;
        this.isFirstChange = true;
    }
    /**
     * @return {?}
     */
    get cellTemplate() {
        return this._cellTemplateInput || this._cellTemplateQuery;
    }
    /**
     * @return {?}
     */
    get headerTemplate() {
        return this._headerTemplateInput || this._headerTemplateQuery;
    }
    /**
     * @return {?}
     */
    get treeToggleTemplate() {
        return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.isFirstChange) {
            this.isFirstChange = false;
        }
        else {
            this.columnChangesService.onInputChange();
        }
    }
}
DataTableColumnDirective.decorators = [
    { type: Directive, args: [{ selector: 'ngx-datatable-column' },] }
];
/** @nocollapse */
DataTableColumnDirective.ctorParameters = () => [
    { type: ColumnChangesService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29sdW1ucy9jb2x1bW4uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUk3RSxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBd0RuQyxZQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUZ0RCxrQkFBYSxHQUFHLElBQUksQ0FBQztJQUVvQyxDQUFDOzs7O0lBMUJsRSxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDNUQsQ0FBQzs7OztJQVFELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDaEUsQ0FBQzs7OztJQVFELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixJQUFJLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUN4RSxDQUFDOzs7O0lBTUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7O1lBakVGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRTs7OztZQUh0QyxvQkFBb0I7OzttQkFLMUIsS0FBSzttQkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7aUNBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzBCQUNMLEtBQUs7OEJBQ0wsS0FBSztpQ0FFTCxLQUFLLFNBQUMsY0FBYztpQ0FHcEIsWUFBWSxTQUFDLDRCQUE0QixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO21DQU85RSxLQUFLLFNBQUMsZ0JBQWdCO21DQUd0QixZQUFZLFNBQUMsOEJBQThCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7dUNBT2hGLEtBQUssU0FBQyxvQkFBb0I7dUNBRzFCLFlBQVksU0FBQyw2QkFBNkIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQTlDaEYsd0NBQXNCOztJQUN0Qix3Q0FBK0I7O0lBQy9CLDhDQUF5Qjs7SUFDekIsK0NBQTBCOztJQUMxQiw0Q0FBMEI7O0lBQzFCLDhDQUE2Qjs7SUFDN0IsOENBQXlCOztJQUN6Qix3Q0FBbUI7O0lBQ25CLDRDQUEyQjs7SUFDM0IsNkNBQTRCOztJQUM1QixpREFBZ0M7O0lBQ2hDLDRDQUEwQjs7SUFDMUIseUNBQXVCOztJQUN2Qiw0Q0FBMEI7O0lBQzFCLGdEQUErQjs7SUFDL0Isc0RBQXFDOztJQUNyQywrQ0FBNkQ7O0lBQzdELDZDQUEyRDs7SUFDM0QsZ0RBQStCOztJQUMvQixtREFBaUM7O0lBQ2pDLCtDQUE0Qzs7SUFDNUMsbURBQTJDOztJQUUzQyxzREFDcUM7O0lBRXJDLHNEQUNxQzs7SUFNckMsd0RBQ3VDOztJQUV2Qyx3REFDdUM7O0lBTXZDLDREQUMyQzs7SUFFM0MsNERBQzJDOzs7OztJQU0zQyxpREFBNkI7Ozs7O0lBRWpCLHdEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5IZWFkZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NvbHVtbi1oZWFkZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uQ2VsbERpcmVjdGl2ZSB9IGZyb20gJy4vY29sdW1uLWNlbGwuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uQ2VsbFRyZWVUb2dnbGUgfSBmcm9tICcuL3RyZWUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ29sdW1uQ2hhbmdlc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb2x1bW4tY2hhbmdlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGFibGVDb2x1bW5Qcm9wIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGFibGUtY29sdW1uLnR5cGUnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbmd4LWRhdGF0YWJsZS1jb2x1bW4nIH0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBwcm9wOiBUYWJsZUNvbHVtblByb3A7XHJcbiAgQElucHV0KCkgZnJvemVuTGVmdDogYW55O1xyXG4gIEBJbnB1dCgpIGZyb3plblJpZ2h0OiBhbnk7XHJcbiAgQElucHV0KCkgZmxleEdyb3c6IG51bWJlcjtcclxuICBASW5wdXQoKSByZXNpemVhYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNvbXBhcmF0b3I6IGFueTtcclxuICBASW5wdXQoKSBwaXBlOiBhbnk7XHJcbiAgQElucHV0KCkgc29ydGFibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZHJhZ2dhYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNhbkF1dG9SZXNpemU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbWluV2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG1heFdpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgY2hlY2tib3hhYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGhlYWRlckNoZWNrYm94YWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBoZWFkZXJDbGFzczogc3RyaW5nIHwgKChkYXRhOiBhbnkpID0+IHN0cmluZyB8IGFueSk7XHJcbiAgQElucHV0KCkgY2VsbENsYXNzOiBzdHJpbmcgfCAoKGRhdGE6IGFueSkgPT4gc3RyaW5nIHwgYW55KTtcclxuICBASW5wdXQoKSBpc1RyZWVDb2x1bW46IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdHJlZUxldmVsSW5kZW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgc3VtbWFyeUZ1bmM6IChjZWxsczogYW55W10pID0+IGFueTtcclxuICBASW5wdXQoKSBzdW1tYXJ5VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgnY2VsbFRlbXBsYXRlJylcclxuICBfY2VsbFRlbXBsYXRlSW5wdXQ6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoRGF0YVRhYmxlQ29sdW1uQ2VsbERpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXHJcbiAgX2NlbGxUZW1wbGF0ZVF1ZXJ5OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBnZXQgY2VsbFRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NlbGxUZW1wbGF0ZUlucHV0IHx8IHRoaXMuX2NlbGxUZW1wbGF0ZVF1ZXJ5O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdoZWFkZXJUZW1wbGF0ZScpXHJcbiAgX2hlYWRlclRlbXBsYXRlSW5wdXQ6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoRGF0YVRhYmxlQ29sdW1uSGVhZGVyRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcclxuICBfaGVhZGVyVGVtcGxhdGVRdWVyeTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgZ2V0IGhlYWRlclRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlclRlbXBsYXRlSW5wdXQgfHwgdGhpcy5faGVhZGVyVGVtcGxhdGVRdWVyeTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgndHJlZVRvZ2dsZVRlbXBsYXRlJylcclxuICBfdHJlZVRvZ2dsZVRlbXBsYXRlSW5wdXQ6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoRGF0YVRhYmxlQ29sdW1uQ2VsbFRyZWVUb2dnbGUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxyXG4gIF90cmVlVG9nZ2xlVGVtcGxhdGVRdWVyeTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgZ2V0IHRyZWVUb2dnbGVUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl90cmVlVG9nZ2xlVGVtcGxhdGVJbnB1dCB8fCB0aGlzLl90cmVlVG9nZ2xlVGVtcGxhdGVRdWVyeTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNGaXJzdENoYW5nZSA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29sdW1uQ2hhbmdlc1NlcnZpY2U6IENvbHVtbkNoYW5nZXNTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLmlzRmlyc3RDaGFuZ2UpIHtcclxuICAgICAgdGhpcy5pc0ZpcnN0Q2hhbmdlID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbHVtbkNoYW5nZXNTZXJ2aWNlLm9uSW5wdXRDaGFuZ2UoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19