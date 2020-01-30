/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, ElementRef, HostBinding, NgZone } from '@angular/core';
/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
var VisibilityDirective = /** @class */ (function () {
    function VisibilityDirective(element, zone) {
        this.element = element;
        this.zone = zone;
        this.isVisible = false;
        this.visible = new EventEmitter();
    }
    /**
     * @return {?}
     */
    VisibilityDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.runCheck();
    };
    /**
     * @return {?}
     */
    VisibilityDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        clearTimeout(this.timeout);
    };
    /**
     * @return {?}
     */
    VisibilityDirective.prototype.onVisibilityChange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // trigger zone recalc for columns
        this.zone.run((/**
         * @return {?}
         */
        function () {
            _this.isVisible = true;
            _this.visible.emit(true);
        }));
    };
    /**
     * @return {?}
     */
    VisibilityDirective.prototype.runCheck = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var check = (/**
         * @return {?}
         */
        function () {
            // https://davidwalsh.name/offsetheight-visibility
            var _a = _this.element.nativeElement, offsetHeight = _a.offsetHeight, offsetWidth = _a.offsetWidth;
            if (offsetHeight && offsetWidth) {
                clearTimeout(_this.timeout);
                _this.onVisibilityChange();
            }
            else {
                clearTimeout(_this.timeout);
                _this.zone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () {
                    _this.timeout = setTimeout((/**
                     * @return {?}
                     */
                    function () { return check(); }), 50);
                }));
            }
        });
        this.timeout = setTimeout((/**
         * @return {?}
         */
        function () { return check(); }));
    };
    VisibilityDirective.decorators = [
        { type: Directive, args: [{ selector: '[visibilityObserver]' },] }
    ];
    /** @nocollapse */
    VisibilityDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone }
    ]; };
    VisibilityDirective.propDecorators = {
        isVisible: [{ type: HostBinding, args: ['class.visible',] }],
        visible: [{ type: Output }]
    };
    return VisibilityDirective;
}());
export { VisibilityDirective };
if (false) {
    /** @type {?} */
    VisibilityDirective.prototype.isVisible;
    /** @type {?} */
    VisibilityDirective.prototype.visible;
    /** @type {?} */
    VisibilityDirective.prototype.timeout;
    /**
     * @type {?}
     * @private
     */
    VisibilityDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    VisibilityDirective.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaWJpbGl0eS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3Zpc2liaWxpdHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQXFCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7QUFhcEg7SUFTRSw2QkFBb0IsT0FBbUIsRUFBVSxJQUFZO1FBQXpDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBTjdELGNBQVMsR0FBWSxLQUFLLENBQUM7UUFFakIsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBSU0sQ0FBQzs7OztJQUVqRSxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELGdEQUFrQjs7O0lBQWxCO1FBQUEsaUJBTUM7UUFMQyxrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7UUFBQztZQUNaLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQWlCQzs7WUFoQk8sS0FBSzs7O1FBQUc7O1lBRU4sSUFBQSxnQ0FBMEQsRUFBeEQsOEJBQVksRUFBRSw0QkFBMEM7WUFFaEUsSUFBSSxZQUFZLElBQUksV0FBVyxFQUFFO2dCQUMvQixZQUFZLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQixLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUMzQjtpQkFBTTtnQkFDTCxZQUFZLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQixLQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O2dCQUFDO29CQUMxQixLQUFJLENBQUMsT0FBTyxHQUFHLFVBQVU7OztvQkFBQyxjQUFNLE9BQUEsS0FBSyxFQUFFLEVBQVAsQ0FBTyxHQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDLEVBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFBO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVOzs7UUFBQyxjQUFNLE9BQUEsS0FBSyxFQUFFLEVBQVAsQ0FBTyxFQUFDLENBQUM7SUFDM0MsQ0FBQzs7Z0JBNUNGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRTs7OztnQkFiTCxVQUFVO2dCQUFlLE1BQU07Ozs0QkFldEUsV0FBVyxTQUFDLGVBQWU7MEJBRzNCLE1BQU07O0lBd0NULDBCQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7U0E1Q1ksbUJBQW1COzs7SUFDOUIsd0NBQzJCOztJQUUzQixzQ0FBMEQ7O0lBRTFELHNDQUFhOzs7OztJQUVELHNDQUEyQjs7Ozs7SUFBRSxtQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgTmdab25lLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIFZpc2liaWxpdHkgT2JzZXJ2ZXIgRGlyZWN0aXZlXHJcbiAqXHJcbiAqIFVzYWdlOlxyXG4gKlxyXG4gKiBcdFx0PGRpdlxyXG4gKiBcdFx0XHR2aXNpYmlsaXR5T2JzZXJ2ZXJcclxuICogXHRcdFx0KHZpc2libGUpPVwib25WaXNpYmxlKCRldmVudClcIj5cclxuICogXHRcdDwvZGl2PlxyXG4gKlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3Zpc2liaWxpdHlPYnNlcnZlcl0nIH0pXHJcbmV4cG9ydCBjbGFzcyBWaXNpYmlsaXR5RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MudmlzaWJsZScpXHJcbiAgaXNWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSB2aXNpYmxlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgdGltZW91dDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgem9uZTogTmdab25lKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucnVuQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgfVxyXG5cclxuICBvblZpc2liaWxpdHlDaGFuZ2UoKTogdm9pZCB7XHJcbiAgICAvLyB0cmlnZ2VyIHpvbmUgcmVjYWxjIGZvciBjb2x1bW5zXHJcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLnZpc2libGUuZW1pdCh0cnVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcnVuQ2hlY2soKTogdm9pZCB7XHJcbiAgICBjb25zdCBjaGVjayA9ICgpID0+IHtcclxuICAgICAgLy8gaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvb2Zmc2V0aGVpZ2h0LXZpc2liaWxpdHlcclxuICAgICAgY29uc3QgeyBvZmZzZXRIZWlnaHQsIG9mZnNldFdpZHRoIH0gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgIGlmIChvZmZzZXRIZWlnaHQgJiYgb2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgICAgICB0aGlzLm9uVmlzaWJpbGl0eUNoYW5nZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IGNoZWNrKCksIDUwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IGNoZWNrKCkpO1xyXG4gIH1cclxufVxyXG4iXX0=