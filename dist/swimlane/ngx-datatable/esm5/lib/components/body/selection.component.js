/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { SelectionType } from '../../types/selection.type';
import { selectRowsBetween, selectRows } from '../../utils/selection';
import { Keys } from '../../utils/keys';
/**
 * @record
 */
export function Model() { }
if (false) {
    /** @type {?} */
    Model.prototype.type;
    /** @type {?} */
    Model.prototype.event;
    /** @type {?} */
    Model.prototype.row;
    /** @type {?} */
    Model.prototype.rowElement;
    /** @type {?} */
    Model.prototype.cellElement;
    /** @type {?} */
    Model.prototype.cellIndex;
}
var DataTableSelectionComponent = /** @class */ (function () {
    function DataTableSelectionComponent() {
        this.activate = new EventEmitter();
        this.select = new EventEmitter();
    }
    /**
     * @param {?} event
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    DataTableSelectionComponent.prototype.selectRow = /**
     * @param {?} event
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    function (event, index, row) {
        var _a;
        if (!this.selectEnabled)
            return;
        /** @type {?} */
        var chkbox = this.selectionType === SelectionType.checkbox;
        /** @type {?} */
        var multi = this.selectionType === SelectionType.multi;
        /** @type {?} */
        var multiClick = this.selectionType === SelectionType.multiClick;
        /** @type {?} */
        var selected = [];
        if (multi || chkbox || multiClick) {
            if (event.shiftKey) {
                selected = selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
            }
            else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
                selected = selectRows(tslib_1.__spread(this.selected), row, this.getRowSelectedIdx.bind(this));
            }
            else {
                selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
            }
        }
        else {
            selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
        }
        if (typeof this.selectCheck === 'function') {
            selected = selected.filter(this.selectCheck.bind(this));
        }
        this.selected.splice(0, this.selected.length);
        (_a = this.selected).push.apply(_a, tslib_1.__spread(selected));
        this.prevIndex = index;
        this.select.emit({
            selected: selected
        });
    };
    /**
     * @param {?} model
     * @param {?} index
     * @return {?}
     */
    DataTableSelectionComponent.prototype.onActivate = /**
     * @param {?} model
     * @param {?} index
     * @return {?}
     */
    function (model, index) {
        var type = model.type, event = model.event, row = model.row;
        /** @type {?} */
        var chkbox = this.selectionType === SelectionType.checkbox;
        /** @type {?} */
        var select = (!chkbox && (type === 'click' || type === 'dblclick')) || (chkbox && type === 'checkbox');
        if (select) {
            this.selectRow(event, index, row);
        }
        else if (type === 'keydown') {
            if (((/** @type {?} */ (event))).keyCode === Keys.return) {
                this.selectRow(event, index, row);
            }
            else {
                this.onKeyboardFocus(model);
            }
        }
        this.activate.emit(model);
    };
    /**
     * @param {?} model
     * @return {?}
     */
    DataTableSelectionComponent.prototype.onKeyboardFocus = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        var keyCode = (/** @type {?} */ (model.event)).keyCode;
        /** @type {?} */
        var shouldFocus = keyCode === Keys.up || keyCode === Keys.down || keyCode === Keys.right || keyCode === Keys.left;
        if (shouldFocus) {
            /** @type {?} */
            var isCellSelection = this.selectionType === SelectionType.cell;
            if (!model.cellElement || !isCellSelection) {
                this.focusRow(model.rowElement, keyCode);
            }
            else if (isCellSelection) {
                this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
            }
        }
    };
    /**
     * @param {?} rowElement
     * @param {?} keyCode
     * @return {?}
     */
    DataTableSelectionComponent.prototype.focusRow = /**
     * @param {?} rowElement
     * @param {?} keyCode
     * @return {?}
     */
    function (rowElement, keyCode) {
        /** @type {?} */
        var nextRowElement = this.getPrevNextRow(rowElement, keyCode);
        if (nextRowElement)
            nextRowElement.focus();
    };
    /**
     * @param {?} rowElement
     * @param {?} keyCode
     * @return {?}
     */
    DataTableSelectionComponent.prototype.getPrevNextRow = /**
     * @param {?} rowElement
     * @param {?} keyCode
     * @return {?}
     */
    function (rowElement, keyCode) {
        /** @type {?} */
        var parentElement = rowElement.parentElement;
        if (parentElement) {
            /** @type {?} */
            var focusElement = void 0;
            if (keyCode === Keys.up) {
                focusElement = parentElement.previousElementSibling;
            }
            else if (keyCode === Keys.down) {
                focusElement = parentElement.nextElementSibling;
            }
            if (focusElement && focusElement.children.length) {
                return focusElement.children[0];
            }
        }
    };
    /**
     * @param {?} cellElement
     * @param {?} rowElement
     * @param {?} keyCode
     * @param {?} cellIndex
     * @return {?}
     */
    DataTableSelectionComponent.prototype.focusCell = /**
     * @param {?} cellElement
     * @param {?} rowElement
     * @param {?} keyCode
     * @param {?} cellIndex
     * @return {?}
     */
    function (cellElement, rowElement, keyCode, cellIndex) {
        /** @type {?} */
        var nextCellElement;
        if (keyCode === Keys.left) {
            nextCellElement = cellElement.previousElementSibling;
        }
        else if (keyCode === Keys.right) {
            nextCellElement = cellElement.nextElementSibling;
        }
        else if (keyCode === Keys.up || keyCode === Keys.down) {
            /** @type {?} */
            var nextRowElement = this.getPrevNextRow(rowElement, keyCode);
            if (nextRowElement) {
                /** @type {?} */
                var children = nextRowElement.getElementsByClassName('datatable-body-cell');
                if (children.length)
                    nextCellElement = children[cellIndex];
            }
        }
        if (nextCellElement)
            nextCellElement.focus();
    };
    /**
     * @param {?} row
     * @return {?}
     */
    DataTableSelectionComponent.prototype.getRowSelected = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        return this.getRowSelectedIdx(row, this.selected) > -1;
    };
    /**
     * @param {?} row
     * @param {?} selected
     * @return {?}
     */
    DataTableSelectionComponent.prototype.getRowSelectedIdx = /**
     * @param {?} row
     * @param {?} selected
     * @return {?}
     */
    function (row, selected) {
        var _this = this;
        if (!selected || !selected.length)
            return -1;
        /** @type {?} */
        var rowId = this.rowIdentity(row);
        return selected.findIndex((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            /** @type {?} */
            var id = _this.rowIdentity(r);
            return id === rowId;
        }));
    };
    DataTableSelectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'datatable-selection',
                    template: "\n    <ng-content></ng-content>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    DataTableSelectionComponent.propDecorators = {
        rows: [{ type: Input }],
        selected: [{ type: Input }],
        selectEnabled: [{ type: Input }],
        selectionType: [{ type: Input }],
        rowIdentity: [{ type: Input }],
        selectCheck: [{ type: Input }],
        activate: [{ type: Output }],
        select: [{ type: Output }]
    };
    return DataTableSelectionComponent;
}());
export { DataTableSelectionComponent };
if (false) {
    /** @type {?} */
    DataTableSelectionComponent.prototype.rows;
    /** @type {?} */
    DataTableSelectionComponent.prototype.selected;
    /** @type {?} */
    DataTableSelectionComponent.prototype.selectEnabled;
    /** @type {?} */
    DataTableSelectionComponent.prototype.selectionType;
    /** @type {?} */
    DataTableSelectionComponent.prototype.rowIdentity;
    /** @type {?} */
    DataTableSelectionComponent.prototype.selectCheck;
    /** @type {?} */
    DataTableSelectionComponent.prototype.activate;
    /** @type {?} */
    DataTableSelectionComponent.prototype.select;
    /** @type {?} */
    DataTableSelectionComponent.prototype.prevIndex;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYm9keS9zZWxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUV4QywyQkFPQzs7O0lBTkMscUJBQWE7O0lBQ2Isc0JBQWtDOztJQUNsQyxvQkFBUzs7SUFDVCwyQkFBZ0I7O0lBQ2hCLDRCQUFpQjs7SUFDakIsMEJBQWtCOztBQUdwQjtJQUFBO1FBZVksYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pELFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQTJIM0QsQ0FBQzs7Ozs7OztJQXZIQywrQ0FBUzs7Ozs7O0lBQVQsVUFBVSxLQUFpQyxFQUFFLEtBQWEsRUFBRSxHQUFROztRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWE7WUFBRSxPQUFPOztZQUUxQixNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsS0FBSyxhQUFhLENBQUMsUUFBUTs7WUFDdEQsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLEtBQUssYUFBYSxDQUFDLEtBQUs7O1lBQ2xELFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxLQUFLLGFBQWEsQ0FBQyxVQUFVOztZQUM5RCxRQUFRLEdBQVUsRUFBRTtRQUV4QixJQUFJLEtBQUssSUFBSSxNQUFNLElBQUks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O1FBQ25DLE9BQU8sUUFBUSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLENBQUM7O2dCQUNuQixFQUFFLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDOUIsT0FBTyxFQUFFLEtBQUssS0FBSyxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBMUlGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUscUNBRVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7dUJBRUUsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7MkJBRUwsTUFBTTt5QkFDTixNQUFNOztJQTJIVCxrQ0FBQztDQUFBLEFBM0lELElBMklDO1NBcElZLDJCQUEyQjs7O0lBQ3RDLDJDQUFxQjs7SUFDckIsK0NBQXlCOztJQUN6QixvREFBZ0M7O0lBQ2hDLG9EQUFzQzs7SUFDdEMsa0RBQTBCOztJQUMxQixrREFBMEI7O0lBRTFCLCtDQUEyRDs7SUFDM0QsNkNBQXlEOztJQUV6RCxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzL3NlbGVjdGlvbi50eXBlJztcclxuaW1wb3J0IHsgc2VsZWN0Um93c0JldHdlZW4sIHNlbGVjdFJvd3MgfSBmcm9tICcuLi8uLi91dGlscy9zZWxlY3Rpb24nO1xyXG5pbXBvcnQgeyBLZXlzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5cyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vZGVsIHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgZXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50O1xyXG4gIHJvdzogYW55O1xyXG4gIHJvd0VsZW1lbnQ6IGFueTtcclxuICBjZWxsRWxlbWVudDogYW55O1xyXG4gIGNlbGxJbmRleDogbnVtYmVyO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RhdGF0YWJsZS1zZWxlY3Rpb24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlU2VsZWN0aW9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSByb3dzOiBhbnlbXTtcclxuICBASW5wdXQoKSBzZWxlY3RlZDogYW55W107XHJcbiAgQElucHV0KCkgc2VsZWN0RW5hYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25UeXBlO1xyXG4gIEBJbnB1dCgpIHJvd0lkZW50aXR5OiBhbnk7XHJcbiAgQElucHV0KCkgc2VsZWN0Q2hlY2s6IGFueTtcclxuXHJcbiAgQE91dHB1dCgpIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHJldkluZGV4OiBudW1iZXI7XHJcblxyXG4gIHNlbGVjdFJvdyhldmVudDogS2V5Ym9hcmRFdmVudCB8IE1vdXNlRXZlbnQsIGluZGV4OiBudW1iZXIsIHJvdzogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuc2VsZWN0RW5hYmxlZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGNoa2JveCA9IHRoaXMuc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uVHlwZS5jaGVja2JveDtcclxuICAgIGNvbnN0IG11bHRpID0gdGhpcy5zZWxlY3Rpb25UeXBlID09PSBTZWxlY3Rpb25UeXBlLm11bHRpO1xyXG4gICAgY29uc3QgbXVsdGlDbGljayA9IHRoaXMuc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uVHlwZS5tdWx0aUNsaWNrO1xyXG4gICAgbGV0IHNlbGVjdGVkOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIGlmIChtdWx0aSB8fCBjaGtib3ggfHwgbXVsdGlDbGljaykge1xyXG4gICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgICBzZWxlY3RlZCA9IHNlbGVjdFJvd3NCZXR3ZWVuKFtdLCB0aGlzLnJvd3MsIGluZGV4LCB0aGlzLnByZXZJbmRleCwgdGhpcy5nZXRSb3dTZWxlY3RlZElkeC5iaW5kKHRoaXMpKTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkgfHwgbXVsdGlDbGljayB8fCBjaGtib3gpIHtcclxuICAgICAgICBzZWxlY3RlZCA9IHNlbGVjdFJvd3MoWy4uLnRoaXMuc2VsZWN0ZWRdLCByb3csIHRoaXMuZ2V0Um93U2VsZWN0ZWRJZHguYmluZCh0aGlzKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZWN0ZWQgPSBzZWxlY3RSb3dzKFtdLCByb3csIHRoaXMuZ2V0Um93U2VsZWN0ZWRJZHguYmluZCh0aGlzKSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNlbGVjdGVkID0gc2VsZWN0Um93cyhbXSwgcm93LCB0aGlzLmdldFJvd1NlbGVjdGVkSWR4LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3RDaGVjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBzZWxlY3RlZCA9IHNlbGVjdGVkLmZpbHRlcih0aGlzLnNlbGVjdENoZWNrLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWQuc3BsaWNlKDAsIHRoaXMuc2VsZWN0ZWQubGVuZ3RoKTtcclxuICAgIHRoaXMuc2VsZWN0ZWQucHVzaCguLi5zZWxlY3RlZCk7XHJcblxyXG4gICAgdGhpcy5wcmV2SW5kZXggPSBpbmRleDtcclxuXHJcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHtcclxuICAgICAgc2VsZWN0ZWRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25BY3RpdmF0ZShtb2RlbDogTW9kZWwsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgdHlwZSwgZXZlbnQsIHJvdyB9ID0gbW9kZWw7XHJcbiAgICBjb25zdCBjaGtib3ggPSB0aGlzLnNlbGVjdGlvblR5cGUgPT09IFNlbGVjdGlvblR5cGUuY2hlY2tib3g7XHJcbiAgICBjb25zdCBzZWxlY3QgPSAoIWNoa2JveCAmJiAodHlwZSA9PT0gJ2NsaWNrJyB8fCB0eXBlID09PSAnZGJsY2xpY2snKSkgfHwgKGNoa2JveCAmJiB0eXBlID09PSAnY2hlY2tib3gnKTtcclxuXHJcbiAgICBpZiAoc2VsZWN0KSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0Um93KGV2ZW50LCBpbmRleCwgcm93KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2tleWRvd24nKSB7XHJcbiAgICAgIGlmICgoPEtleWJvYXJkRXZlbnQ+ZXZlbnQpLmtleUNvZGUgPT09IEtleXMucmV0dXJuKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RSb3coZXZlbnQsIGluZGV4LCByb3cpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMub25LZXlib2FyZEZvY3VzKG1vZGVsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5hY3RpdmF0ZS5lbWl0KG1vZGVsKTtcclxuICB9XHJcblxyXG4gIG9uS2V5Ym9hcmRGb2N1cyhtb2RlbDogTW9kZWwpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gPEtleWJvYXJkRXZlbnQ+bW9kZWwuZXZlbnQ7XHJcbiAgICBjb25zdCBzaG91bGRGb2N1cyA9IGtleUNvZGUgPT09IEtleXMudXAgfHwga2V5Q29kZSA9PT0gS2V5cy5kb3duIHx8IGtleUNvZGUgPT09IEtleXMucmlnaHQgfHwga2V5Q29kZSA9PT0gS2V5cy5sZWZ0O1xyXG5cclxuICAgIGlmIChzaG91bGRGb2N1cykge1xyXG4gICAgICBjb25zdCBpc0NlbGxTZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvblR5cGUgPT09IFNlbGVjdGlvblR5cGUuY2VsbDtcclxuXHJcbiAgICAgIGlmICghbW9kZWwuY2VsbEVsZW1lbnQgfHwgIWlzQ2VsbFNlbGVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuZm9jdXNSb3cobW9kZWwucm93RWxlbWVudCwga2V5Q29kZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNDZWxsU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c0NlbGwobW9kZWwuY2VsbEVsZW1lbnQsIG1vZGVsLnJvd0VsZW1lbnQsIGtleUNvZGUsIG1vZGVsLmNlbGxJbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzUm93KHJvd0VsZW1lbnQ6IGFueSwga2V5Q29kZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBuZXh0Um93RWxlbWVudCA9IHRoaXMuZ2V0UHJldk5leHRSb3cocm93RWxlbWVudCwga2V5Q29kZSk7XHJcbiAgICBpZiAobmV4dFJvd0VsZW1lbnQpIG5leHRSb3dFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2TmV4dFJvdyhyb3dFbGVtZW50OiBhbnksIGtleUNvZGU6IG51bWJlcik6IGFueSB7XHJcbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gcm93RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChwYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgIGxldCBmb2N1c0VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgICBpZiAoa2V5Q29kZSA9PT0gS2V5cy51cCkge1xyXG4gICAgICAgIGZvY3VzRWxlbWVudCA9IHBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBLZXlzLmRvd24pIHtcclxuICAgICAgICBmb2N1c0VsZW1lbnQgPSBwYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGZvY3VzRWxlbWVudCAmJiBmb2N1c0VsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZvY3VzRWxlbWVudC5jaGlsZHJlblswXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9jdXNDZWxsKGNlbGxFbGVtZW50OiBhbnksIHJvd0VsZW1lbnQ6IGFueSwga2V5Q29kZTogbnVtYmVyLCBjZWxsSW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgbGV0IG5leHRDZWxsRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGtleUNvZGUgPT09IEtleXMubGVmdCkge1xyXG4gICAgICBuZXh0Q2VsbEVsZW1lbnQgPSBjZWxsRWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBLZXlzLnJpZ2h0KSB7XHJcbiAgICAgIG5leHRDZWxsRWxlbWVudCA9IGNlbGxFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcclxuICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gS2V5cy51cCB8fCBrZXlDb2RlID09PSBLZXlzLmRvd24pIHtcclxuICAgICAgY29uc3QgbmV4dFJvd0VsZW1lbnQgPSB0aGlzLmdldFByZXZOZXh0Um93KHJvd0VsZW1lbnQsIGtleUNvZGUpO1xyXG4gICAgICBpZiAobmV4dFJvd0VsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG5leHRSb3dFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RhdGF0YWJsZS1ib2R5LWNlbGwnKTtcclxuICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSBuZXh0Q2VsbEVsZW1lbnQgPSBjaGlsZHJlbltjZWxsSW5kZXhdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5leHRDZWxsRWxlbWVudCkgbmV4dENlbGxFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRSb3dTZWxlY3RlZChyb3c6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Um93U2VsZWN0ZWRJZHgocm93LCB0aGlzLnNlbGVjdGVkKSA+IC0xO1xyXG4gIH1cclxuXHJcbiAgZ2V0Um93U2VsZWN0ZWRJZHgocm93OiBhbnksIHNlbGVjdGVkOiBhbnlbXSk6IG51bWJlciB7XHJcbiAgICBpZiAoIXNlbGVjdGVkIHx8ICFzZWxlY3RlZC5sZW5ndGgpIHJldHVybiAtMTtcclxuXHJcbiAgICBjb25zdCByb3dJZCA9IHRoaXMucm93SWRlbnRpdHkocm93KTtcclxuICAgIHJldHVybiBzZWxlY3RlZC5maW5kSW5kZXgociA9PiB7XHJcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5yb3dJZGVudGl0eShyKTtcclxuICAgICAgcmV0dXJuIGlkID09PSByb3dJZDtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=