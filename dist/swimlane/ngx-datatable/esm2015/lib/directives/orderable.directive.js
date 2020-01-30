/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, ContentChildren, QueryList, KeyValueDiffers, Inject } from '@angular/core';
import { DraggableDirective } from './draggable.directive';
import { DOCUMENT } from '@angular/common';
export class OrderableDirective {
    /**
     * @param {?} differs
     * @param {?} document
     */
    constructor(differs, document) {
        this.document = document;
        this.reorder = new EventEmitter();
        this.targetChanged = new EventEmitter();
        this.differ = differs.find({}).create();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // HACK: Investigate Better Way
        this.updateSubscriptions();
        this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.draggables.forEach((/**
         * @param {?} d
         * @return {?}
         */
        d => {
            d.dragStart.unsubscribe();
            d.dragging.unsubscribe();
            d.dragEnd.unsubscribe();
        }));
    }
    /**
     * @return {?}
     */
    updateSubscriptions() {
        /** @type {?} */
        const diffs = this.differ.diff(this.createMapDiffs());
        if (diffs) {
            /** @type {?} */
            const subscribe = (/**
             * @param {?} __0
             * @return {?}
             */
            ({ currentValue, previousValue }) => {
                unsubscribe({ previousValue });
                if (currentValue) {
                    currentValue.dragStart.subscribe(this.onDragStart.bind(this));
                    currentValue.dragging.subscribe(this.onDragging.bind(this));
                    currentValue.dragEnd.subscribe(this.onDragEnd.bind(this));
                }
            });
            /** @type {?} */
            const unsubscribe = (/**
             * @param {?} __0
             * @return {?}
             */
            ({ previousValue }) => {
                if (previousValue) {
                    previousValue.dragStart.unsubscribe();
                    previousValue.dragging.unsubscribe();
                    previousValue.dragEnd.unsubscribe();
                }
            });
            diffs.forEachAddedItem(subscribe);
            // diffs.forEachChangedItem(subscribe.bind(this));
            diffs.forEachRemovedItem(unsubscribe);
        }
    }
    /**
     * @return {?}
     */
    onDragStart() {
        this.positions = {};
        /** @type {?} */
        let i = 0;
        for (const dragger of this.draggables.toArray()) {
            /** @type {?} */
            const elm = dragger.element;
            /** @type {?} */
            const left = parseInt(elm.offsetLeft.toString(), 0);
            this.positions[dragger.dragModel.prop] = {
                left,
                right: left + parseInt(elm.offsetWidth.toString(), 0),
                index: i++,
                element: elm
            };
        }
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onDragging({ element, model, event }) {
        /** @type {?} */
        const prevPos = this.positions[model.prop];
        /** @type {?} */
        const target = this.isTarget(model, event);
        if (target) {
            if (this.lastDraggingIndex !== target.i) {
                this.targetChanged.emit({
                    prevIndex: this.lastDraggingIndex,
                    newIndex: target.i,
                    initialIndex: prevPos.index
                });
                this.lastDraggingIndex = target.i;
            }
        }
        else if (this.lastDraggingIndex !== prevPos.index) {
            this.targetChanged.emit({
                prevIndex: this.lastDraggingIndex,
                initialIndex: prevPos.index
            });
            this.lastDraggingIndex = prevPos.index;
        }
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onDragEnd({ element, model, event }) {
        /** @type {?} */
        const prevPos = this.positions[model.prop];
        /** @type {?} */
        const target = this.isTarget(model, event);
        if (target) {
            this.reorder.emit({
                prevIndex: prevPos.index,
                newIndex: target.i,
                model
            });
        }
        this.lastDraggingIndex = undefined;
        element.style.left = 'auto';
    }
    /**
     * @param {?} model
     * @param {?} event
     * @return {?}
     */
    isTarget(model, event) {
        /** @type {?} */
        let i = 0;
        /** @type {?} */
        const x = event.x || event.clientX;
        /** @type {?} */
        const y = event.y || event.clientY;
        /** @type {?} */
        const targets = this.document.elementsFromPoint(x, y);
        for (const prop in this.positions) {
            // current column position which throws event.
            /** @type {?} */
            const pos = this.positions[prop];
            // since we drag the inner span, we need to find it in the elements at the cursor
            if (model.prop !== prop && targets.find((/**
             * @param {?} el
             * @return {?}
             */
            (el) => el === pos.element))) {
                return {
                    pos,
                    i
                };
            }
            i++;
        }
    }
    /**
     * @private
     * @return {?}
     */
    createMapDiffs() {
        return this.draggables.toArray().reduce((/**
         * @param {?} acc
         * @param {?} curr
         * @return {?}
         */
        (acc, curr) => {
            acc[curr.dragModel.$$id] = curr;
            return acc;
        }), {});
    }
}
OrderableDirective.decorators = [
    { type: Directive, args: [{ selector: '[orderable]' },] }
];
/** @nocollapse */
OrderableDirective.ctorParameters = () => [
    { type: KeyValueDiffers },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
OrderableDirective.propDecorators = {
    reorder: [{ type: Output }],
    targetChanged: [{ type: Output }],
    draggables: [{ type: ContentChildren, args: [DraggableDirective, { descendants: true },] }]
};
if (false) {
    /** @type {?} */
    OrderableDirective.prototype.reorder;
    /** @type {?} */
    OrderableDirective.prototype.targetChanged;
    /** @type {?} */
    OrderableDirective.prototype.draggables;
    /** @type {?} */
    OrderableDirective.prototype.positions;
    /** @type {?} */
    OrderableDirective.prototype.differ;
    /** @type {?} */
    OrderableDirective.prototype.lastDraggingIndex;
    /**
     * @type {?}
     * @private
     */
    OrderableDirective.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvb3JkZXJhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNaLGVBQWUsRUFDZixTQUFTLEVBQ1QsZUFBZSxFQUdmLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHM0MsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFXN0IsWUFBWSxPQUF3QixFQUE0QixRQUFhO1FBQWIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQVZuRSxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEQsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVU5RCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQiwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzFCLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDMUIsQ0FBQyxDQUFDLFFBQVEsQ0FB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aUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXJELEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7O2tCQUUzQixHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFFaEMsaUZBQWlGO1lBQ2pGLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLEVBQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUMsRUFBRTtnQkFDeEUsT0FBTztvQkFDTCxHQUFHO29CQUNILENBQUM7aUJBQ0YsQ0FBQzthQUNIO1lBRUQsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7Ozs7O0lBRU8sY0FBYztRQUNwQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNwRCxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDaEMsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDOzs7WUEzSUYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTs7OztZQVJwQyxlQUFlOzRDQW9Cd0IsTUFBTSxTQUFDLFFBQVE7OztzQkFWckQsTUFBTTs0QkFDTixNQUFNO3lCQUVOLGVBQWUsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7Ozs7SUFIMUQscUNBQTBEOztJQUMxRCwyQ0FBZ0U7O0lBRWhFLHdDQUMwQzs7SUFFMUMsdUNBQWU7O0lBQ2Ysb0NBQVk7O0lBQ1osK0NBQTBCOzs7OztJQUVZLHNDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBLZXlWYWx1ZURpZmZlcnMsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgSW5qZWN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERyYWdnYWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vZHJhZ2dhYmxlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tvcmRlcmFibGVdJyB9KVxyXG5leHBvcnQgY2xhc3MgT3JkZXJhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuICBAT3V0cHV0KCkgcmVvcmRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHRhcmdldENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKERyYWdnYWJsZURpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxyXG4gIGRyYWdnYWJsZXM6IFF1ZXJ5TGlzdDxEcmFnZ2FibGVEaXJlY3RpdmU+O1xyXG5cclxuICBwb3NpdGlvbnM6IGFueTtcclxuICBkaWZmZXI6IGFueTtcclxuICBsYXN0RHJhZ2dpbmdJbmRleDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xyXG4gICAgdGhpcy5kaWZmZXIgPSBkaWZmZXJzLmZpbmQoe30pLmNyZWF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgLy8gSEFDSzogSW52ZXN0aWdhdGUgQmV0dGVyIFdheVxyXG4gICAgdGhpcy51cGRhdGVTdWJzY3JpcHRpb25zKCk7XHJcbiAgICB0aGlzLmRyYWdnYWJsZXMuY2hhbmdlcy5zdWJzY3JpYmUodGhpcy51cGRhdGVTdWJzY3JpcHRpb25zLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaChkID0+IHtcclxuICAgICAgZC5kcmFnU3RhcnQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgZC5kcmFnZ2luZy51bnN1YnNjcmliZSgpO1xyXG4gICAgICBkLmRyYWdFbmQudW5zdWJzY3JpYmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU3Vic2NyaXB0aW9ucygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRpZmZzID0gdGhpcy5kaWZmZXIuZGlmZih0aGlzLmNyZWF0ZU1hcERpZmZzKCkpO1xyXG5cclxuICAgIGlmIChkaWZmcykge1xyXG4gICAgICBjb25zdCBzdWJzY3JpYmUgPSAoeyBjdXJyZW50VmFsdWUsIHByZXZpb3VzVmFsdWUgfTogYW55KSA9PiB7XHJcbiAgICAgICAgdW5zdWJzY3JpYmUoeyBwcmV2aW91c1ZhbHVlIH0pO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICBjdXJyZW50VmFsdWUuZHJhZ1N0YXJ0LnN1YnNjcmliZSh0aGlzLm9uRHJhZ1N0YXJ0LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgY3VycmVudFZhbHVlLmRyYWdnaW5nLnN1YnNjcmliZSh0aGlzLm9uRHJhZ2dpbmcuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICBjdXJyZW50VmFsdWUuZHJhZ0VuZC5zdWJzY3JpYmUodGhpcy5vbkRyYWdFbmQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSAoeyBwcmV2aW91c1ZhbHVlIH06IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChwcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgICAgICBwcmV2aW91c1ZhbHVlLmRyYWdTdGFydC51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgcHJldmlvdXNWYWx1ZS5kcmFnZ2luZy51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgcHJldmlvdXNWYWx1ZS5kcmFnRW5kLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgZGlmZnMuZm9yRWFjaEFkZGVkSXRlbShzdWJzY3JpYmUpO1xyXG4gICAgICAvLyBkaWZmcy5mb3JFYWNoQ2hhbmdlZEl0ZW0oc3Vic2NyaWJlLmJpbmQodGhpcykpO1xyXG4gICAgICBkaWZmcy5mb3JFYWNoUmVtb3ZlZEl0ZW0odW5zdWJzY3JpYmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25EcmFnU3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnBvc2l0aW9ucyA9IHt9O1xyXG5cclxuICAgIGxldCBpID0gMDtcclxuICAgIGZvciAoY29uc3QgZHJhZ2dlciBvZiB0aGlzLmRyYWdnYWJsZXMudG9BcnJheSgpKSB7XHJcbiAgICAgIGNvbnN0IGVsbSA9IGRyYWdnZXIuZWxlbWVudDtcclxuICAgICAgY29uc3QgbGVmdCA9IHBhcnNlSW50KGVsbS5vZmZzZXRMZWZ0LnRvU3RyaW5nKCksIDApO1xyXG4gICAgICB0aGlzLnBvc2l0aW9uc1tkcmFnZ2VyLmRyYWdNb2RlbC5wcm9wXSA9IHtcclxuICAgICAgICBsZWZ0LFxyXG4gICAgICAgIHJpZ2h0OiBsZWZ0ICsgcGFyc2VJbnQoZWxtLm9mZnNldFdpZHRoLnRvU3RyaW5nKCksIDApLFxyXG4gICAgICAgIGluZGV4OiBpKyssXHJcbiAgICAgICAgZWxlbWVudDogZWxtXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkRyYWdnaW5nKHsgZWxlbWVudCwgbW9kZWwsIGV2ZW50IH06IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJldlBvcyA9IHRoaXMucG9zaXRpb25zW21vZGVsLnByb3BdO1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5pc1RhcmdldChtb2RlbCwgZXZlbnQpO1xyXG5cclxuICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgaWYgKHRoaXMubGFzdERyYWdnaW5nSW5kZXggIT09IHRhcmdldC5pKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRDaGFuZ2VkLmVtaXQoe1xyXG4gICAgICAgICAgcHJldkluZGV4OiB0aGlzLmxhc3REcmFnZ2luZ0luZGV4LFxyXG4gICAgICAgICAgbmV3SW5kZXg6IHRhcmdldC5pLFxyXG4gICAgICAgICAgaW5pdGlhbEluZGV4OiBwcmV2UG9zLmluZGV4XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sYXN0RHJhZ2dpbmdJbmRleCA9IHRhcmdldC5pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubGFzdERyYWdnaW5nSW5kZXggIT09IHByZXZQb3MuaW5kZXgpIHtcclxuICAgICAgdGhpcy50YXJnZXRDaGFuZ2VkLmVtaXQoe1xyXG4gICAgICAgIHByZXZJbmRleDogdGhpcy5sYXN0RHJhZ2dpbmdJbmRleCxcclxuICAgICAgICBpbml0aWFsSW5kZXg6IHByZXZQb3MuaW5kZXhcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubGFzdERyYWdnaW5nSW5kZXggPSBwcmV2UG9zLmluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25EcmFnRW5kKHsgZWxlbWVudCwgbW9kZWwsIGV2ZW50IH06IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJldlBvcyA9IHRoaXMucG9zaXRpb25zW21vZGVsLnByb3BdO1xyXG5cclxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuaXNUYXJnZXQobW9kZWwsIGV2ZW50KTtcclxuICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgdGhpcy5yZW9yZGVyLmVtaXQoe1xyXG4gICAgICAgIHByZXZJbmRleDogcHJldlBvcy5pbmRleCxcclxuICAgICAgICBuZXdJbmRleDogdGFyZ2V0LmksXHJcbiAgICAgICAgbW9kZWxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sYXN0RHJhZ2dpbmdJbmRleCA9IHVuZGVmaW5lZDtcclxuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9ICdhdXRvJztcclxuICB9XHJcblxyXG4gIGlzVGFyZ2V0KG1vZGVsOiBhbnksIGV2ZW50OiBhbnkpOiBhbnkge1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgY29uc3QgeCA9IGV2ZW50LnggfHwgZXZlbnQuY2xpZW50WDtcclxuICAgIGNvbnN0IHkgPSBldmVudC55IHx8IGV2ZW50LmNsaWVudFk7XHJcbiAgICBjb25zdCB0YXJnZXRzID0gdGhpcy5kb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludCh4LCB5KTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpcy5wb3NpdGlvbnMpIHtcclxuICAgICAgLy8gY3VycmVudCBjb2x1bW4gcG9zaXRpb24gd2hpY2ggdGhyb3dzIGV2ZW50LlxyXG4gICAgICBjb25zdCBwb3MgPSB0aGlzLnBvc2l0aW9uc1twcm9wXTtcclxuXHJcbiAgICAgIC8vIHNpbmNlIHdlIGRyYWcgdGhlIGlubmVyIHNwYW4sIHdlIG5lZWQgdG8gZmluZCBpdCBpbiB0aGUgZWxlbWVudHMgYXQgdGhlIGN1cnNvclxyXG4gICAgICBpZiAobW9kZWwucHJvcCAhPT0gcHJvcCAmJiB0YXJnZXRzLmZpbmQoKGVsOiBhbnkpID0+IGVsID09PSBwb3MuZWxlbWVudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcG9zLFxyXG4gICAgICAgICAgaVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGkrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTWFwRGlmZnMoKTogeyBba2V5OiBzdHJpbmddOiBEcmFnZ2FibGVEaXJlY3RpdmUgfSB7XHJcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLnRvQXJyYXkoKS5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xyXG4gICAgICBhY2NbY3Vyci5kcmFnTW9kZWwuJCRpZF0gPSBjdXJyO1xyXG4gICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwge30pO1xyXG4gIH1cclxufVxyXG4iXX0=