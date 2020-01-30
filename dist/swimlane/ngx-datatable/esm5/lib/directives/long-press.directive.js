/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MouseEvent } from '../events';
var LongPressDirective = /** @class */ (function () {
    function LongPressDirective() {
        this.pressEnabled = true;
        this.duration = 500;
        this.longPressStart = new EventEmitter();
        this.longPressing = new EventEmitter();
        this.longPressEnd = new EventEmitter();
        this.mouseX = 0;
        this.mouseY = 0;
    }
    Object.defineProperty(LongPressDirective.prototype, "press", {
        get: /**
         * @return {?}
         */
        function () {
            return this.pressing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LongPressDirective.prototype, "isLongPress", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isLongPressing;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    LongPressDirective.prototype.onMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // don't do right/middle clicks
        if (event.which !== 1 || !this.pressEnabled)
            return;
        // don't start drag if its on resize handle
        /** @type {?} */
        var target = (/** @type {?} */ (event.target));
        if (target.classList.contains('resize-handle'))
            return;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.pressing = true;
        this.isLongPressing = false;
        /** @type {?} */
        var mouseup = fromEvent(document, 'mouseup');
        this.subscription = mouseup.subscribe((/**
         * @param {?} ev
         * @return {?}
         */
        function (ev) { return _this.onMouseup(); }));
        this.timeout = setTimeout((/**
         * @return {?}
         */
        function () {
            _this.isLongPressing = true;
            _this.longPressStart.emit({
                event: event,
                model: _this.pressModel
            });
            _this.subscription.add(fromEvent(document, 'mousemove')
                .pipe(takeUntil(mouseup))
                .subscribe((/**
             * @param {?} mouseEvent
             * @return {?}
             */
            function (mouseEvent) { return _this.onMouseMove(mouseEvent); })));
            _this.loop(event);
        }), this.duration);
        this.loop(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LongPressDirective.prototype.onMouseMove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.pressing && !this.isLongPressing) {
            /** @type {?} */
            var xThres = Math.abs(event.clientX - this.mouseX) > 10;
            /** @type {?} */
            var yThres = Math.abs(event.clientY - this.mouseY) > 10;
            if (xThres || yThres) {
                this.endPress();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LongPressDirective.prototype.loop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (this.isLongPressing) {
            this.timeout = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.longPressing.emit({
                    event: event,
                    model: _this.pressModel
                });
                _this.loop(event);
            }), 50);
        }
    };
    /**
     * @return {?}
     */
    LongPressDirective.prototype.endPress = /**
     * @return {?}
     */
    function () {
        clearTimeout(this.timeout);
        this.isLongPressing = false;
        this.pressing = false;
        this._destroySubscription();
        this.longPressEnd.emit({
            model: this.pressModel
        });
    };
    /**
     * @return {?}
     */
    LongPressDirective.prototype.onMouseup = /**
     * @return {?}
     */
    function () {
        this.endPress();
    };
    /**
     * @return {?}
     */
    LongPressDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroySubscription();
    };
    /**
     * @private
     * @return {?}
     */
    LongPressDirective.prototype._destroySubscription = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    };
    LongPressDirective.decorators = [
        { type: Directive, args: [{ selector: '[long-press]' },] }
    ];
    LongPressDirective.propDecorators = {
        pressEnabled: [{ type: Input }],
        pressModel: [{ type: Input }],
        duration: [{ type: Input }],
        longPressStart: [{ type: Output }],
        longPressing: [{ type: Output }],
        longPressEnd: [{ type: Output }],
        press: [{ type: HostBinding, args: ['class.press',] }],
        isLongPress: [{ type: HostBinding, args: ['class.longpress',] }],
        onMouseDown: [{ type: HostListener, args: ['mousedown', ['$event'],] }]
    };
    return LongPressDirective;
}());
export { LongPressDirective };
if (false) {
    /** @type {?} */
    LongPressDirective.prototype.pressEnabled;
    /** @type {?} */
    LongPressDirective.prototype.pressModel;
    /** @type {?} */
    LongPressDirective.prototype.duration;
    /** @type {?} */
    LongPressDirective.prototype.longPressStart;
    /** @type {?} */
    LongPressDirective.prototype.longPressing;
    /** @type {?} */
    LongPressDirective.prototype.longPressEnd;
    /** @type {?} */
    LongPressDirective.prototype.pressing;
    /** @type {?} */
    LongPressDirective.prototype.isLongPressing;
    /** @type {?} */
    LongPressDirective.prototype.timeout;
    /** @type {?} */
    LongPressDirective.prototype.mouseX;
    /** @type {?} */
    LongPressDirective.prototype.mouseY;
    /** @type {?} */
    LongPressDirective.prototype.subscription;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy1wcmVzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2xvbmctcHJlc3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUE0QixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFdkM7SUFBQTtRQUVXLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGFBQVEsR0FBVyxHQUFHLENBQUM7UUFFdEIsbUJBQWMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2RCxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JELGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFLL0QsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixXQUFNLEdBQVcsQ0FBQyxDQUFDO0lBbUdyQixDQUFDO0lBL0ZDLHNCQUNJLHFDQUFLOzs7O1FBRFQ7WUFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSwyQ0FBVzs7OztRQURmO1lBRUUsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7OztPQUFBOzs7OztJQUdELHdDQUFXOzs7O0lBRFgsVUFDWSxLQUFpQjtRQUQ3QixpQkFtQ0M7UUFqQ0MsK0JBQStCO1FBQy9CLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUFF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QztZQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHNDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFTyxpREFBb0I7Ozs7SUFBNUI7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztTQUMvQjtJQUNILENBQUM7O2dCQWhIRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFOzs7K0JBRXBDLEtBQUs7NkJBQ0wsS0FBSzsyQkFDTCxLQUFLO2lDQUVMLE1BQU07K0JBQ04sTUFBTTsrQkFDTixNQUFNO3dCQVVOLFdBQVcsU0FBQyxhQUFhOzhCQUt6QixXQUFXLFNBQUMsaUJBQWlCOzhCQUs3QixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQXFGdkMseUJBQUM7Q0FBQSxBQWpIRCxJQWlIQztTQWhIWSxrQkFBa0I7OztJQUM3QiwwQ0FBc0M7O0lBQ3RDLHdDQUF5Qjs7SUFDekIsc0NBQWdDOztJQUVoQyw0Q0FBaUU7O0lBQ2pFLDBDQUErRDs7SUFDL0QsMENBQStEOztJQUUvRCxzQ0FBa0I7O0lBQ2xCLDRDQUF3Qjs7SUFDeEIscUNBQWE7O0lBQ2Isb0NBQW1COztJQUNuQixvQ0FBbUI7O0lBRW5CLDBDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBNb3VzZUV2ZW50IH0gZnJvbSAnLi4vZXZlbnRzJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tsb25nLXByZXNzXScgfSlcclxuZXhwb3J0IGNsYXNzIExvbmdQcmVzc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgcHJlc3NFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwcmVzc01vZGVsOiBhbnk7XHJcbiAgQElucHV0KCkgZHVyYXRpb246IG51bWJlciA9IDUwMDtcclxuXHJcbiAgQE91dHB1dCgpIGxvbmdQcmVzc1N0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbG9uZ1ByZXNzaW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbG9uZ1ByZXNzRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHJlc3Npbmc6IGJvb2xlYW47XHJcbiAgaXNMb25nUHJlc3Npbmc6IGJvb2xlYW47XHJcbiAgdGltZW91dDogYW55O1xyXG4gIG1vdXNlWDogbnVtYmVyID0gMDtcclxuICBtb3VzZVk6IG51bWJlciA9IDA7XHJcblxyXG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnByZXNzJylcclxuICBnZXQgcHJlc3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmVzc2luZztcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MubG9uZ3ByZXNzJylcclxuICBnZXQgaXNMb25nUHJlc3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0xvbmdQcmVzc2luZztcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXHJcbiAgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIC8vIGRvbid0IGRvIHJpZ2h0L21pZGRsZSBjbGlja3NcclxuICAgIGlmIChldmVudC53aGljaCAhPT0gMSB8fCAhdGhpcy5wcmVzc0VuYWJsZWQpIHJldHVybjtcclxuXHJcbiAgICAvLyBkb24ndCBzdGFydCBkcmFnIGlmIGl0cyBvbiByZXNpemUgaGFuZGxlXHJcbiAgICBjb25zdCB0YXJnZXQgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xyXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Jlc2l6ZS1oYW5kbGUnKSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMubW91c2VYID0gZXZlbnQuY2xpZW50WDtcclxuICAgIHRoaXMubW91c2VZID0gZXZlbnQuY2xpZW50WTtcclxuXHJcbiAgICB0aGlzLnByZXNzaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNMb25nUHJlc3NpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBtb3VzZXVwID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2V1cCcpO1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSBtb3VzZXVwLnN1YnNjcmliZSgoZXY6IE1vdXNlRXZlbnQpID0+IHRoaXMub25Nb3VzZXVwKCkpO1xyXG5cclxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmlzTG9uZ1ByZXNzaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5sb25nUHJlc3NTdGFydC5lbWl0KHtcclxuICAgICAgICBldmVudCxcclxuICAgICAgICBtb2RlbDogdGhpcy5wcmVzc01vZGVsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxyXG4gICAgICAgIGZyb21FdmVudChkb2N1bWVudCwgJ21vdXNlbW92ZScpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwobW91c2V1cCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChtb3VzZUV2ZW50OiBNb3VzZUV2ZW50KSA9PiB0aGlzLm9uTW91c2VNb3ZlKG1vdXNlRXZlbnQpKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5sb29wKGV2ZW50KTtcclxuICAgIH0sIHRoaXMuZHVyYXRpb24pO1xyXG5cclxuICAgIHRoaXMubG9vcChldmVudCk7XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucHJlc3NpbmcgJiYgIXRoaXMuaXNMb25nUHJlc3NpbmcpIHtcclxuICAgICAgY29uc3QgeFRocmVzID0gTWF0aC5hYnMoZXZlbnQuY2xpZW50WCAtIHRoaXMubW91c2VYKSA+IDEwO1xyXG4gICAgICBjb25zdCB5VGhyZXMgPSBNYXRoLmFicyhldmVudC5jbGllbnRZIC0gdGhpcy5tb3VzZVkpID4gMTA7XHJcblxyXG4gICAgICBpZiAoeFRocmVzIHx8IHlUaHJlcykge1xyXG4gICAgICAgIHRoaXMuZW5kUHJlc3MoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9vcChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNMb25nUHJlc3NpbmcpIHtcclxuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb25nUHJlc3NpbmcuZW1pdCh7XHJcbiAgICAgICAgICBldmVudCxcclxuICAgICAgICAgIG1vZGVsOiB0aGlzLnByZXNzTW9kZWxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmxvb3AoZXZlbnQpO1xyXG4gICAgICB9LCA1MCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbmRQcmVzcygpOiB2b2lkIHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgdGhpcy5pc0xvbmdQcmVzc2luZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5wcmVzc2luZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fZGVzdHJveVN1YnNjcmlwdGlvbigpO1xyXG5cclxuICAgIHRoaXMubG9uZ1ByZXNzRW5kLmVtaXQoe1xyXG4gICAgICBtb2RlbDogdGhpcy5wcmVzc01vZGVsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uTW91c2V1cCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZW5kUHJlc3MoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fZGVzdHJveVN1YnNjcmlwdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZGVzdHJveVN1YnNjcmlwdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19