/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MouseEvent } from '../events';
export class LongPressDirective {
    constructor() {
        this.pressEnabled = true;
        this.duration = 500;
        this.longPressStart = new EventEmitter();
        this.longPressing = new EventEmitter();
        this.longPressEnd = new EventEmitter();
        this.mouseX = 0;
        this.mouseY = 0;
    }
    /**
     * @return {?}
     */
    get press() {
        return this.pressing;
    }
    /**
     * @return {?}
     */
    get isLongPress() {
        return this.isLongPressing;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseDown(event) {
        // don't do right/middle clicks
        if (event.which !== 1 || !this.pressEnabled)
            return;
        // don't start drag if its on resize handle
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        if (target.classList.contains('resize-handle'))
            return;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.pressing = true;
        this.isLongPressing = false;
        /** @type {?} */
        const mouseup = fromEvent(document, 'mouseup');
        this.subscription = mouseup.subscribe((/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => this.onMouseup()));
        this.timeout = setTimeout((/**
         * @return {?}
         */
        () => {
            this.isLongPressing = true;
            this.longPressStart.emit({
                event,
                model: this.pressModel
            });
            this.subscription.add(fromEvent(document, 'mousemove')
                .pipe(takeUntil(mouseup))
                .subscribe((/**
             * @param {?} mouseEvent
             * @return {?}
             */
            (mouseEvent) => this.onMouseMove(mouseEvent))));
            this.loop(event);
        }), this.duration);
        this.loop(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseMove(event) {
        if (this.pressing && !this.isLongPressing) {
            /** @type {?} */
            const xThres = Math.abs(event.clientX - this.mouseX) > 10;
            /** @type {?} */
            const yThres = Math.abs(event.clientY - this.mouseY) > 10;
            if (xThres || yThres) {
                this.endPress();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    loop(event) {
        if (this.isLongPressing) {
            this.timeout = setTimeout((/**
             * @return {?}
             */
            () => {
                this.longPressing.emit({
                    event,
                    model: this.pressModel
                });
                this.loop(event);
            }), 50);
        }
    }
    /**
     * @return {?}
     */
    endPress() {
        clearTimeout(this.timeout);
        this.isLongPressing = false;
        this.pressing = false;
        this._destroySubscription();
        this.longPressEnd.emit({
            model: this.pressModel
        });
    }
    /**
     * @return {?}
     */
    onMouseup() {
        this.endPress();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroySubscription();
    }
    /**
     * @private
     * @return {?}
     */
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy1wcmVzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2xvbmctcHJlc3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUE0QixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHdkMsTUFBTSxPQUFPLGtCQUFrQjtJQUQvQjtRQUVXLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGFBQVEsR0FBVyxHQUFHLENBQUM7UUFFdEIsbUJBQWMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2RCxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JELGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFLL0QsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixXQUFNLEdBQVcsQ0FBQyxDQUFDO0lBbUdyQixDQUFDOzs7O0lBL0ZDLElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsSUFDSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBR0QsV0FBVyxDQUFDLEtBQWlCO1FBQzNCLCtCQUErQjtRQUMvQixJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPOzs7Y0FHOUMsTUFBTSxHQUFHLG1CQUFhLEtB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QUNQLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRU8sb0JBQW9CO1FBQzFCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7O1lBaEhGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7OzsyQkFFcEMsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBRUwsTUFBTTsyQkFDTixNQUFNOzJCQUNOLE1BQU07b0JBVU4sV0FBVyxTQUFDLGFBQWE7MEJBS3pCLFdBQVcsU0FBQyxpQkFBaUI7MEJBSzdCLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUExQnJDLDBDQUFzQzs7SUFDdEMsd0NBQXlCOztJQUN6QixzQ0FBZ0M7O0lBRWhDLDRDQUFpRTs7SUFDakUsMENBQStEOztJQUMvRCwwQ0FBK0Q7O0lBRS9ELHNDQUFrQjs7SUFDbEIsNENBQXdCOztJQUN4QixxQ0FBYTs7SUFDYixvQ0FBbUI7O0lBQ25CLG9DQUFtQjs7SUFFbkIsMENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE1vdXNlRXZlbnQgfSBmcm9tICcuLi9ldmVudHMnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2xvbmctcHJlc3NdJyB9KVxyXG5leHBvcnQgY2xhc3MgTG9uZ1ByZXNzRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBwcmVzc0VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHByZXNzTW9kZWw6IGFueTtcclxuICBASW5wdXQoKSBkdXJhdGlvbjogbnVtYmVyID0gNTAwO1xyXG5cclxuICBAT3V0cHV0KCkgbG9uZ1ByZXNzU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBsb25nUHJlc3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBsb25nUHJlc3NFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwcmVzc2luZzogYm9vbGVhbjtcclxuICBpc0xvbmdQcmVzc2luZzogYm9vbGVhbjtcclxuICB0aW1lb3V0OiBhbnk7XHJcbiAgbW91c2VYOiBudW1iZXIgPSAwO1xyXG4gIG1vdXNlWTogbnVtYmVyID0gMDtcclxuXHJcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MucHJlc3MnKVxyXG4gIGdldCBwcmVzcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnByZXNzaW5nO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sb25ncHJlc3MnKVxyXG4gIGdldCBpc0xvbmdQcmVzcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzTG9uZ1ByZXNzaW5nO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcclxuICBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgLy8gZG9uJ3QgZG8gcmlnaHQvbWlkZGxlIGNsaWNrc1xyXG4gICAgaWYgKGV2ZW50LndoaWNoICE9PSAxIHx8ICF0aGlzLnByZXNzRW5hYmxlZCkgcmV0dXJuO1xyXG5cclxuICAgIC8vIGRvbid0IHN0YXJ0IGRyYWcgaWYgaXRzIG9uIHJlc2l6ZSBoYW5kbGVcclxuICAgIGNvbnN0IHRhcmdldCA9IDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQ7XHJcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVzaXplLWhhbmRsZScpKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5tb3VzZVggPSBldmVudC5jbGllbnRYO1xyXG4gICAgdGhpcy5tb3VzZVkgPSBldmVudC5jbGllbnRZO1xyXG5cclxuICAgIHRoaXMucHJlc3NpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5pc0xvbmdQcmVzc2luZyA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IG1vdXNldXAgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdtb3VzZXVwJyk7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IG1vdXNldXAuc3Vic2NyaWJlKChldjogTW91c2VFdmVudCkgPT4gdGhpcy5vbk1vdXNldXAoKSk7XHJcblxyXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuaXNMb25nUHJlc3NpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmxvbmdQcmVzc1N0YXJ0LmVtaXQoe1xyXG4gICAgICAgIGV2ZW50LFxyXG4gICAgICAgIG1vZGVsOiB0aGlzLnByZXNzTW9kZWxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXHJcbiAgICAgICAgZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2Vtb3ZlJylcclxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbChtb3VzZXVwKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQpID0+IHRoaXMub25Nb3VzZU1vdmUobW91c2VFdmVudCkpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmxvb3AoZXZlbnQpO1xyXG4gICAgfSwgdGhpcy5kdXJhdGlvbik7XHJcblxyXG4gICAgdGhpcy5sb29wKGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wcmVzc2luZyAmJiAhdGhpcy5pc0xvbmdQcmVzc2luZykge1xyXG4gICAgICBjb25zdCB4VGhyZXMgPSBNYXRoLmFicyhldmVudC5jbGllbnRYIC0gdGhpcy5tb3VzZVgpID4gMTA7XHJcbiAgICAgIGNvbnN0IHlUaHJlcyA9IE1hdGguYWJzKGV2ZW50LmNsaWVudFkgLSB0aGlzLm1vdXNlWSkgPiAxMDtcclxuXHJcbiAgICAgIGlmICh4VGhyZXMgfHwgeVRocmVzKSB7XHJcbiAgICAgICAgdGhpcy5lbmRQcmVzcygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb29wKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0xvbmdQcmVzc2luZykge1xyXG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmxvbmdQcmVzc2luZy5lbWl0KHtcclxuICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgbW9kZWw6IHRoaXMucHJlc3NNb2RlbFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubG9vcChldmVudCk7XHJcbiAgICAgIH0sIDUwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVuZFByZXNzKCk6IHZvaWQge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICB0aGlzLmlzTG9uZ1ByZXNzaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLnByZXNzaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLl9kZXN0cm95U3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5sb25nUHJlc3NFbmQuZW1pdCh7XHJcbiAgICAgIG1vZGVsOiB0aGlzLnByZXNzTW9kZWxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZXVwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbmRQcmVzcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kZXN0cm95U3Vic2NyaXB0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9kZXN0cm95U3Vic2NyaXB0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=