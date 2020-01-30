/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Output, EventEmitter, ContentChildren, QueryList, KeyValueDiffers, Inject } from '@angular/core';
import { DraggableDirective } from './draggable.directive';
import { DOCUMENT } from '@angular/common';
var OrderableDirective = /** @class */ (function () {
    function OrderableDirective(differs, document) {
        this.document = document;
        this.reorder = new EventEmitter();
        this.targetChanged = new EventEmitter();
        this.differ = differs.find({}).create();
    }
    /**
     * @return {?}
     */
    OrderableDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        // HACK: Investigate Better Way
        this.updateSubscriptions();
        this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
    };
    /**
     * @return {?}
     */
    OrderableDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.draggables.forEach((/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            d.dragStart.unsubscribe();
            d.dragging.unsubscribe();
            d.dragEnd.unsubscribe();
        }));
    };
    /**
     * @return {?}
     */
    OrderableDirective.prototype.updateSubscriptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var diffs = this.differ.diff(this.createMapDiffs());
        if (diffs) {
            /** @type {?} */
            var subscribe = (/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var currentValue = _a.currentValue, previousValue = _a.previousValue;
                unsubscribe_1({ previousValue: previousValue });
                if (currentValue) {
                    currentValue.dragStart.subscribe(_this.onDragStart.bind(_this));
                    currentValue.dragging.subscribe(_this.onDragging.bind(_this));
                    currentValue.dragEnd.subscribe(_this.onDragEnd.bind(_this));
                }
            });
            /** @type {?} */
            var unsubscribe_1 = (/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var previousValue = _a.previousValue;
                if (previousValue) {
                    previousValue.dragStart.unsubscribe();
                    previousValue.dragging.unsubscribe();
                    previousValue.dragEnd.unsubscribe();
                }
            });
            diffs.forEachAddedItem(subscribe);
            // diffs.forEachChangedItem(subscribe.bind(this));
            diffs.forEachRemovedItem(unsubscribe_1);
        }
    };
    /**
     * @return {?}
     */
    OrderableDirective.prototype.onDragStart = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        this.positions = {};
        /** @type {?} */
        var i = 0;
        try {
            for (var _b = tslib_1.__values(this.draggables.toArray()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var dragger = _c.value;
                /** @type {?} */
                var elm = dragger.element;
                /** @type {?} */
                var left = parseInt(elm.offsetLeft.toString(), 0);
                this.positions[dragger.dragModel.prop] = {
                    left: left,
                    right: left + parseInt(elm.offsetWidth.toString(), 0),
                    index: i++,
                    element: elm
                };
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    OrderableDirective.prototype.onDragging = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var element = _a.element, model = _a.model, event = _a.event;
        /** @type {?} */
        var prevPos = this.positions[model.prop];
        /** @type {?} */
        var target = this.isTarget(model, event);
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
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    OrderableDirective.prototype.onDragEnd = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var element = _a.element, model = _a.model, event = _a.event;
        /** @type {?} */
        var prevPos = this.positions[model.prop];
        /** @type {?} */
        var target = this.isTarget(model, event);
        if (target) {
            this.reorder.emit({
                prevIndex: prevPos.index,
                newIndex: target.i,
                model: model
            });
        }
        this.lastDraggingIndex = undefined;
        element.style.left = 'auto';
    };
    /**
     * @param {?} model
     * @param {?} event
     * @return {?}
     */
    OrderableDirective.prototype.isTarget = /**
     * @param {?} model
     * @param {?} event
     * @return {?}
     */
    function (model, event) {
        /** @type {?} */
        var i = 0;
        /** @type {?} */
        var x = event.x || event.clientX;
        /** @type {?} */
        var y = event.y || event.clientY;
        /** @type {?} */
        var targets = this.document.elementsFromPoint(x, y);
        var _loop_1 = function (prop) {
            // current column position which throws event.
            /** @type {?} */
            var pos = this_1.positions[prop];
            // since we drag the inner span, we need to find it in the elements at the cursor
            if (model.prop !== prop && targets.find((/**
             * @param {?} el
             * @return {?}
             */
            function (el) { return el === pos.element; }))) {
                return { value: {
                        pos: pos,
                        i: i
                    } };
            }
            i++;
        };
        var this_1 = this;
        for (var prop in this.positions) {
            var state_1 = _loop_1(prop);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    /**
     * @private
     * @return {?}
     */
    OrderableDirective.prototype.createMapDiffs = /**
     * @private
     * @return {?}
     */
    function () {
        return this.draggables.toArray().reduce((/**
         * @param {?} acc
         * @param {?} curr
         * @return {?}
         */
        function (acc, curr) {
            acc[curr.dragModel.$$id] = curr;
            return acc;
        }), {});
    };
    OrderableDirective.decorators = [
        { type: Directive, args: [{ selector: '[orderable]' },] }
    ];
    /** @nocollapse */
    OrderableDirective.ctorParameters = function () { return [
        { type: KeyValueDiffers },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    OrderableDirective.propDecorators = {
        reorder: [{ type: Output }],
        targetChanged: [{ type: Output }],
        draggables: [{ type: ContentChildren, args: [DraggableDirective, { descendants: true },] }]
    };
    return OrderableDirective;
}());
export { OrderableDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvb3JkZXJhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUNULGVBQWUsRUFHZixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDO0lBWUUsNEJBQVksT0FBd0IsRUFBNEIsUUFBYTtRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7UUFWbkUsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hELGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFVOUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCwrQ0FBa0I7OztJQUFsQjtRQUNFLCtCQUErQjtRQUMvQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLENBQUM7WUFDdkIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMxQixDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFB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QWtCOzs7SUFDN0IscUNBQTBEOztJQUMxRCwyQ0FBZ0U7O0lBRWhFLHdDQUMwQzs7SUFFMUMsdUNBQWU7O0lBQ2Ysb0NBQVk7O0lBQ1osK0NBQTBCOzs7OztJQUVZLHNDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBLZXlWYWx1ZURpZmZlcnMsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgSW5qZWN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERyYWdnYWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vZHJhZ2dhYmxlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tvcmRlcmFibGVdJyB9KVxyXG5leHBvcnQgY2xhc3MgT3JkZXJhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuICBAT3V0cHV0KCkgcmVvcmRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHRhcmdldENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKERyYWdnYWJsZURpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxyXG4gIGRyYWdnYWJsZXM6IFF1ZXJ5TGlzdDxEcmFnZ2FibGVEaXJlY3RpdmU+O1xyXG5cclxuICBwb3NpdGlvbnM6IGFueTtcclxuICBkaWZmZXI6IGFueTtcclxuICBsYXN0RHJhZ2dpbmdJbmRleDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xyXG4gICAgdGhpcy5kaWZmZXIgPSBkaWZmZXJzLmZpbmQoe30pLmNyZWF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgLy8gSEFDSzogSW52ZXN0aWdhdGUgQmV0dGVyIFdheVxyXG4gICAgdGhpcy51cGRhdGVTdWJzY3JpcHRpb25zKCk7XHJcbiAgICB0aGlzLmRyYWdnYWJsZXMuY2hhbmdlcy5zdWJzY3JpYmUodGhpcy51cGRhdGVTdWJzY3JpcHRpb25zLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaChkID0+IHtcclxuICAgICAgZC5kcmFnU3RhcnQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgZC5kcmFnZ2luZy51bnN1YnNjcmliZSgpO1xyXG4gICAgICBkLmRyYWdFbmQudW5zdWJzY3JpYmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU3Vic2NyaXB0aW9ucygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRpZmZzID0gdGhpcy5kaWZmZXIuZGlmZih0aGlzLmNyZWF0ZU1hcERpZmZzKCkpO1xyXG5cclxuICAgIGlmIChkaWZmcykge1xyXG4gICAgICBjb25zdCBzdWJzY3JpYmUgPSAoeyBjdXJyZW50VmFsdWUsIHByZXZpb3VzVmFsdWUgfTogYW55KSA9PiB7XHJcbiAgICAgICAgdW5zdWJzY3JpYmUoeyBwcmV2aW91c1ZhbHVlIH0pO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICBjdXJyZW50VmFsdWUuZHJhZ1N0YXJ0LnN1YnNjcmliZSh0aGlzLm9uRHJhZ1N0YXJ0LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgY3VycmVudFZhbHVlLmRyYWdnaW5nLnN1YnNjcmliZSh0aGlzLm9uRHJhZ2dpbmcuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICBjdXJyZW50VmFsdWUuZHJhZ0VuZC5zdWJzY3JpYmUodGhpcy5vbkRyYWdFbmQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSAoeyBwcmV2aW91c1ZhbHVlIH06IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChwcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgICAgICBwcmV2aW91c1ZhbHVlLmRyYWdTdGFydC51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgcHJldmlvdXNWYWx1ZS5kcmFnZ2luZy51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgcHJldmlvdXNWYWx1ZS5kcmFnRW5kLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgZGlmZnMuZm9yRWFjaEFkZGVkSXRlbShzdWJzY3JpYmUpO1xyXG4gICAgICAvLyBkaWZmcy5mb3JFYWNoQ2hhbmdlZEl0ZW0oc3Vic2NyaWJlLmJpbmQodGhpcykpO1xyXG4gICAgICBkaWZmcy5mb3JFYWNoUmVtb3ZlZEl0ZW0odW5zdWJzY3JpYmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25EcmFnU3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnBvc2l0aW9ucyA9IHt9O1xyXG5cclxuICAgIGxldCBpID0gMDtcclxuICAgIGZvciAoY29uc3QgZHJhZ2dlciBvZiB0aGlzLmRyYWdnYWJsZXMudG9BcnJheSgpKSB7XHJcbiAgICAgIGNvbnN0IGVsbSA9IGRyYWdnZXIuZWxlbWVudDtcclxuICAgICAgY29uc3QgbGVmdCA9IHBhcnNlSW50KGVsbS5vZmZzZXRMZWZ0LnRvU3RyaW5nKCksIDApO1xyXG4gICAgICB0aGlzLnBvc2l0aW9uc1tkcmFnZ2VyLmRyYWdNb2RlbC5wcm9wXSA9IHtcclxuICAgICAgICBsZWZ0LFxyXG4gICAgICAgIHJpZ2h0OiBsZWZ0ICsgcGFyc2VJbnQoZWxtLm9mZnNldFdpZHRoLnRvU3RyaW5nKCksIDApLFxyXG4gICAgICAgIGluZGV4OiBpKyssXHJcbiAgICAgICAgZWxlbWVudDogZWxtXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkRyYWdnaW5nKHsgZWxlbWVudCwgbW9kZWwsIGV2ZW50IH06IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJldlBvcyA9IHRoaXMucG9zaXRpb25zW21vZGVsLnByb3BdO1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5pc1RhcmdldChtb2RlbCwgZXZlbnQpO1xyXG5cclxuICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgaWYgKHRoaXMubGFzdERyYWdnaW5nSW5kZXggIT09IHRhcmdldC5pKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRDaGFuZ2VkLmVtaXQoe1xyXG4gICAgICAgICAgcHJldkluZGV4OiB0aGlzLmxhc3REcmFnZ2luZ0luZGV4LFxyXG4gICAgICAgICAgbmV3SW5kZXg6IHRhcmdldC5pLFxyXG4gICAgICAgICAgaW5pdGlhbEluZGV4OiBwcmV2UG9zLmluZGV4XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sYXN0RHJhZ2dpbmdJbmRleCA9IHRhcmdldC5pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubGFzdERyYWdnaW5nSW5kZXggIT09IHByZXZQb3MuaW5kZXgpIHtcclxuICAgICAgdGhpcy50YXJnZXRDaGFuZ2VkLmVtaXQoe1xyXG4gICAgICAgIHByZXZJbmRleDogdGhpcy5sYXN0RHJhZ2dpbmdJbmRleCxcclxuICAgICAgICBpbml0aWFsSW5kZXg6IHByZXZQb3MuaW5kZXhcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubGFzdERyYWdnaW5nSW5kZXggPSBwcmV2UG9zLmluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25EcmFnRW5kKHsgZWxlbWVudCwgbW9kZWwsIGV2ZW50IH06IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJldlBvcyA9IHRoaXMucG9zaXRpb25zW21vZGVsLnByb3BdO1xyXG5cclxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuaXNUYXJnZXQobW9kZWwsIGV2ZW50KTtcclxuICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgdGhpcy5yZW9yZGVyLmVtaXQoe1xyXG4gICAgICAgIHByZXZJbmRleDogcHJldlBvcy5pbmRleCxcclxuICAgICAgICBuZXdJbmRleDogdGFyZ2V0LmksXHJcbiAgICAgICAgbW9kZWxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sYXN0RHJhZ2dpbmdJbmRleCA9IHVuZGVmaW5lZDtcclxuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9ICdhdXRvJztcclxuICB9XHJcblxyXG4gIGlzVGFyZ2V0KG1vZGVsOiBhbnksIGV2ZW50OiBhbnkpOiBhbnkge1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgY29uc3QgeCA9IGV2ZW50LnggfHwgZXZlbnQuY2xpZW50WDtcclxuICAgIGNvbnN0IHkgPSBldmVudC55IHx8IGV2ZW50LmNsaWVudFk7XHJcbiAgICBjb25zdCB0YXJnZXRzID0gdGhpcy5kb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludCh4LCB5KTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpcy5wb3NpdGlvbnMpIHtcclxuICAgICAgLy8gY3VycmVudCBjb2x1bW4gcG9zaXRpb24gd2hpY2ggdGhyb3dzIGV2ZW50LlxyXG4gICAgICBjb25zdCBwb3MgPSB0aGlzLnBvc2l0aW9uc1twcm9wXTtcclxuXHJcbiAgICAgIC8vIHNpbmNlIHdlIGRyYWcgdGhlIGlubmVyIHNwYW4sIHdlIG5lZWQgdG8gZmluZCBpdCBpbiB0aGUgZWxlbWVudHMgYXQgdGhlIGN1cnNvclxyXG4gICAgICBpZiAobW9kZWwucHJvcCAhPT0gcHJvcCAmJiB0YXJnZXRzLmZpbmQoKGVsOiBhbnkpID0+IGVsID09PSBwb3MuZWxlbWVudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcG9zLFxyXG4gICAgICAgICAgaVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGkrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTWFwRGlmZnMoKTogeyBba2V5OiBzdHJpbmddOiBEcmFnZ2FibGVEaXJlY3RpdmUgfSB7XHJcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLnRvQXJyYXkoKS5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xyXG4gICAgICBhY2NbY3Vyci5kcmFnTW9kZWwuJCRpZF0gPSBjdXJyO1xyXG4gICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwge30pO1xyXG4gIH1cclxufVxyXG4iXX0=