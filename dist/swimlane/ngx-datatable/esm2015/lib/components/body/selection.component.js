/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class DataTableSelectionComponent {
    constructor() {
        this.activate = new EventEmitter();
        this.select = new EventEmitter();
    }
    /**
     * @param {?} event
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    selectRow(event, index, row) {
        if (!this.selectEnabled)
            return;
        /** @type {?} */
        const chkbox = this.selectionType === SelectionType.checkbox;
        /** @type {?} */
        const multi = this.selectionType === SelectionType.multi;
        /** @type {?} */
        const multiClick = this.selectionType === SelectionType.multiClick;
        /** @type {?} */
        let selected = [];
        if (multi || chkbox || multiClick) {
            if (event.shiftKey) {
                selected = selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
            }
            else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
                selected = selectRows([...this.selected], row, this.getRowSelectedIdx.bind(this));
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
        this.selected.push(...selected);
        this.prevIndex = index;
        this.select.emit({
            selected
        });
    }
    /**
     * @param {?} model
     * @param {?} index
     * @return {?}
     */
    onActivate(model, index) {
        const { type, event, row } = model;
        /** @type {?} */
        const chkbox = this.selectionType === SelectionType.checkbox;
        /** @type {?} */
        const select = (!chkbox && (type === 'click' || type === 'dblclick')) || (chkbox && type === 'checkbox');
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
    }
    /**
     * @param {?} model
     * @return {?}
     */
    onKeyboardFocus(model) {
        const { keyCode } = (/** @type {?} */ (model.event));
        /** @type {?} */
        const shouldFocus = keyCode === Keys.up || keyCode === Keys.down || keyCode === Keys.right || keyCode === Keys.left;
        if (shouldFocus) {
            /** @type {?} */
            const isCellSelection = this.selectionType === SelectionType.cell;
            if (!model.cellElement || !isCellSelection) {
                this.focusRow(model.rowElement, keyCode);
            }
            else if (isCellSelection) {
                this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
            }
        }
    }
    /**
     * @param {?} rowElement
     * @param {?} keyCode
     * @return {?}
     */
    focusRow(rowElement, keyCode) {
        /** @type {?} */
        const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
        if (nextRowElement)
            nextRowElement.focus();
    }
    /**
     * @param {?} rowElement
     * @param {?} keyCode
     * @return {?}
     */
    getPrevNextRow(rowElement, keyCode) {
        /** @type {?} */
        const parentElement = rowElement.parentElement;
        if (parentElement) {
            /** @type {?} */
            let focusElement;
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
    }
    /**
     * @param {?} cellElement
     * @param {?} rowElement
     * @param {?} keyCode
     * @param {?} cellIndex
     * @return {?}
     */
    focusCell(cellElement, rowElement, keyCode, cellIndex) {
        /** @type {?} */
        let nextCellElement;
        if (keyCode === Keys.left) {
            nextCellElement = cellElement.previousElementSibling;
        }
        else if (keyCode === Keys.right) {
            nextCellElement = cellElement.nextElementSibling;
        }
        else if (keyCode === Keys.up || keyCode === Keys.down) {
            /** @type {?} */
            const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
            if (nextRowElement) {
                /** @type {?} */
                const children = nextRowElement.getElementsByClassName('datatable-body-cell');
                if (children.length)
                    nextCellElement = children[cellIndex];
            }
        }
        if (nextCellElement)
            nextCellElement.focus();
    }
    /**
     * @param {?} row
     * @return {?}
     */
    getRowSelected(row) {
        return this.getRowSelectedIdx(row, this.selected) > -1;
    }
    /**
     * @param {?} row
     * @param {?} selected
     * @return {?}
     */
    getRowSelectedIdx(row, selected) {
        if (!selected || !selected.length)
            return -1;
        /** @type {?} */
        const rowId = this.rowIdentity(row);
        return selected.findIndex((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            /** @type {?} */
            const id = this.rowIdentity(r);
            return id === rowId;
        }));
    }
}
DataTableSelectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'datatable-selection',
                template: `
    <ng-content></ng-content>
  `,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYm9keS9zZWxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRXhDLDJCQU9DOzs7SUFOQyxxQkFBYTs7SUFDYixzQkFBa0M7O0lBQ2xDLG9CQUFTOztJQUNULDJCQUFnQjs7SUFDaEIsNEJBQWlCOztJQUNqQiwwQkFBa0I7O0FBVXBCLE1BQU0sT0FBTywyQkFBMkI7SUFQeEM7UUFlWSxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBMkgzRCxDQUFDOzs7Ozs7O0lBdkhDLFNBQVMsQ0FBQyxLQUFpQyxFQUFFLEtBQWEsRUFBRSxHQUFRO1FBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYTtZQUFFLE9BQU87O2NBRTFCLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxLQUFLLGFBQWEsQ0FBQyxRQUFROztjQUN0RCxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsS0FBSyxhQUFhLENBQUMsS0FBSzs7Y0FDbEQsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEtBQUssYUFBYSxDQUFDLFVBQVU7O1lBQzlELFFBQVEsR0FBVSxFQUFFO1FBRXhCLElBQUksS0FBSyxJQUFJLE1BQU0s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UUFBQyxDQUFDLENBQUMsRUFBRTs7a0JBQ3RCLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUM5QixPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUExSUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7R0FFVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O21CQUVFLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUVMLE1BQU07cUJBQ04sTUFBTTs7OztJQVJQLDJDQUFxQjs7SUFDckIsK0NBQXlCOztJQUN6QixvREFBZ0M7O0lBQ2hDLG9EQUFzQzs7SUFDdEMsa0RBQTBCOztJQUMxQixrREFBMEI7O0lBRTFCLCtDQUEyRDs7SUFDM0QsNkNBQXlEOztJQUV6RCxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzL3NlbGVjdGlvbi50eXBlJztcclxuaW1wb3J0IHsgc2VsZWN0Um93c0JldHdlZW4sIHNlbGVjdFJvd3MgfSBmcm9tICcuLi8uLi91dGlscy9zZWxlY3Rpb24nO1xyXG5pbXBvcnQgeyBLZXlzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5cyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vZGVsIHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgZXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50O1xyXG4gIHJvdzogYW55O1xyXG4gIHJvd0VsZW1lbnQ6IGFueTtcclxuICBjZWxsRWxlbWVudDogYW55O1xyXG4gIGNlbGxJbmRleDogbnVtYmVyO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RhdGF0YWJsZS1zZWxlY3Rpb24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlU2VsZWN0aW9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSByb3dzOiBhbnlbXTtcclxuICBASW5wdXQoKSBzZWxlY3RlZDogYW55W107XHJcbiAgQElucHV0KCkgc2VsZWN0RW5hYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25UeXBlO1xyXG4gIEBJbnB1dCgpIHJvd0lkZW50aXR5OiBhbnk7XHJcbiAgQElucHV0KCkgc2VsZWN0Q2hlY2s6IGFueTtcclxuXHJcbiAgQE91dHB1dCgpIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHJldkluZGV4OiBudW1iZXI7XHJcblxyXG4gIHNlbGVjdFJvdyhldmVudDogS2V5Ym9hcmRFdmVudCB8IE1vdXNlRXZlbnQsIGluZGV4OiBudW1iZXIsIHJvdzogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuc2VsZWN0RW5hYmxlZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGNoa2JveCA9IHRoaXMuc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uVHlwZS5jaGVja2JveDtcclxuICAgIGNvbnN0IG11bHRpID0gdGhpcy5zZWxlY3Rpb25UeXBlID09PSBTZWxlY3Rpb25UeXBlLm11bHRpO1xyXG4gICAgY29uc3QgbXVsdGlDbGljayA9IHRoaXMuc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uVHlwZS5tdWx0aUNsaWNrO1xyXG4gICAgbGV0IHNlbGVjdGVkOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIGlmIChtdWx0aSB8fCBjaGtib3ggfHwgbXVsdGlDbGljaykge1xyXG4gICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgICBzZWxlY3RlZCA9IHNlbGVjdFJvd3NCZXR3ZWVuKFtdLCB0aGlzLnJvd3MsIGluZGV4LCB0aGlzLnByZXZJbmRleCwgdGhpcy5nZXRSb3dTZWxlY3RlZElkeC5iaW5kKHRoaXMpKTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkgfHwgbXVsdGlDbGljayB8fCBjaGtib3gpIHtcclxuICAgICAgICBzZWxlY3RlZCA9IHNlbGVjdFJvd3MoWy4uLnRoaXMuc2VsZWN0ZWRdLCByb3csIHRoaXMuZ2V0Um93U2VsZWN0ZWRJZHguYmluZCh0aGlzKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZWN0ZWQgPSBzZWxlY3RSb3dzKFtdLCByb3csIHRoaXMuZ2V0Um93U2VsZWN0ZWRJZHguYmluZCh0aGlzKSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNlbGVjdGVkID0gc2VsZWN0Um93cyhbXSwgcm93LCB0aGlzLmdldFJvd1NlbGVjdGVkSWR4LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3RDaGVjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBzZWxlY3RlZCA9IHNlbGVjdGVkLmZpbHRlcih0aGlzLnNlbGVjdENoZWNrLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWQuc3BsaWNlKDAsIHRoaXMuc2VsZWN0ZWQubGVuZ3RoKTtcclxuICAgIHRoaXMuc2VsZWN0ZWQucHVzaCguLi5zZWxlY3RlZCk7XHJcblxyXG4gICAgdGhpcy5wcmV2SW5kZXggPSBpbmRleDtcclxuXHJcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHtcclxuICAgICAgc2VsZWN0ZWRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25BY3RpdmF0ZShtb2RlbDogTW9kZWwsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgdHlwZSwgZXZlbnQsIHJvdyB9ID0gbW9kZWw7XHJcbiAgICBjb25zdCBjaGtib3ggPSB0aGlzLnNlbGVjdGlvblR5cGUgPT09IFNlbGVjdGlvblR5cGUuY2hlY2tib3g7XHJcbiAgICBjb25zdCBzZWxlY3QgPSAoIWNoa2JveCAmJiAodHlwZSA9PT0gJ2NsaWNrJyB8fCB0eXBlID09PSAnZGJsY2xpY2snKSkgfHwgKGNoa2JveCAmJiB0eXBlID09PSAnY2hlY2tib3gnKTtcclxuXHJcbiAgICBpZiAoc2VsZWN0KSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0Um93KGV2ZW50LCBpbmRleCwgcm93KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2tleWRvd24nKSB7XHJcbiAgICAgIGlmICgoPEtleWJvYXJkRXZlbnQ+ZXZlbnQpLmtleUNvZGUgPT09IEtleXMucmV0dXJuKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RSb3coZXZlbnQsIGluZGV4LCByb3cpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMub25LZXlib2FyZEZvY3VzKG1vZGVsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5hY3RpdmF0ZS5lbWl0KG1vZGVsKTtcclxuICB9XHJcblxyXG4gIG9uS2V5Ym9hcmRGb2N1cyhtb2RlbDogTW9kZWwpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gPEtleWJvYXJkRXZlbnQ+bW9kZWwuZXZlbnQ7XHJcbiAgICBjb25zdCBzaG91bGRGb2N1cyA9IGtleUNvZGUgPT09IEtleXMudXAgfHwga2V5Q29kZSA9PT0gS2V5cy5kb3duIHx8IGtleUNvZGUgPT09IEtleXMucmlnaHQgfHwga2V5Q29kZSA9PT0gS2V5cy5sZWZ0O1xyXG5cclxuICAgIGlmIChzaG91bGRGb2N1cykge1xyXG4gICAgICBjb25zdCBpc0NlbGxTZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvblR5cGUgPT09IFNlbGVjdGlvblR5cGUuY2VsbDtcclxuXHJcbiAgICAgIGlmICghbW9kZWwuY2VsbEVsZW1lbnQgfHwgIWlzQ2VsbFNlbGVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuZm9jdXNSb3cobW9kZWwucm93RWxlbWVudCwga2V5Q29kZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNDZWxsU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c0NlbGwobW9kZWwuY2VsbEVsZW1lbnQsIG1vZGVsLnJvd0VsZW1lbnQsIGtleUNvZGUsIG1vZGVsLmNlbGxJbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzUm93KHJvd0VsZW1lbnQ6IGFueSwga2V5Q29kZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBuZXh0Um93RWxlbWVudCA9IHRoaXMuZ2V0UHJldk5leHRSb3cocm93RWxlbWVudCwga2V5Q29kZSk7XHJcbiAgICBpZiAobmV4dFJvd0VsZW1lbnQpIG5leHRSb3dFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2TmV4dFJvdyhyb3dFbGVtZW50OiBhbnksIGtleUNvZGU6IG51bWJlcik6IGFueSB7XHJcbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gcm93RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChwYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgIGxldCBmb2N1c0VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgICBpZiAoa2V5Q29kZSA9PT0gS2V5cy51cCkge1xyXG4gICAgICAgIGZvY3VzRWxlbWVudCA9IHBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBLZXlzLmRvd24pIHtcclxuICAgICAgICBmb2N1c0VsZW1lbnQgPSBwYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGZvY3VzRWxlbWVudCAmJiBmb2N1c0VsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZvY3VzRWxlbWVudC5jaGlsZHJlblswXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9jdXNDZWxsKGNlbGxFbGVtZW50OiBhbnksIHJvd0VsZW1lbnQ6IGFueSwga2V5Q29kZTogbnVtYmVyLCBjZWxsSW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgbGV0IG5leHRDZWxsRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGtleUNvZGUgPT09IEtleXMubGVmdCkge1xyXG4gICAgICBuZXh0Q2VsbEVsZW1lbnQgPSBjZWxsRWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBLZXlzLnJpZ2h0KSB7XHJcbiAgICAgIG5leHRDZWxsRWxlbWVudCA9IGNlbGxFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcclxuICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gS2V5cy51cCB8fCBrZXlDb2RlID09PSBLZXlzLmRvd24pIHtcclxuICAgICAgY29uc3QgbmV4dFJvd0VsZW1lbnQgPSB0aGlzLmdldFByZXZOZXh0Um93KHJvd0VsZW1lbnQsIGtleUNvZGUpO1xyXG4gICAgICBpZiAobmV4dFJvd0VsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG5leHRSb3dFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RhdGF0YWJsZS1ib2R5LWNlbGwnKTtcclxuICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSBuZXh0Q2VsbEVsZW1lbnQgPSBjaGlsZHJlbltjZWxsSW5kZXhdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5leHRDZWxsRWxlbWVudCkgbmV4dENlbGxFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRSb3dTZWxlY3RlZChyb3c6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Um93U2VsZWN0ZWRJZHgocm93LCB0aGlzLnNlbGVjdGVkKSA+IC0xO1xyXG4gIH1cclxuXHJcbiAgZ2V0Um93U2VsZWN0ZWRJZHgocm93OiBhbnksIHNlbGVjdGVkOiBhbnlbXSk6IG51bWJlciB7XHJcbiAgICBpZiAoIXNlbGVjdGVkIHx8ICFzZWxlY3RlZC5sZW5ndGgpIHJldHVybiAtMTtcclxuXHJcbiAgICBjb25zdCByb3dJZCA9IHRoaXMucm93SWRlbnRpdHkocm93KTtcclxuICAgIHJldHVybiBzZWxlY3RlZC5maW5kSW5kZXgociA9PiB7XHJcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5yb3dJZGVudGl0eShyKTtcclxuICAgICAgcmV0dXJuIGlkID09PSByb3dJZDtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=