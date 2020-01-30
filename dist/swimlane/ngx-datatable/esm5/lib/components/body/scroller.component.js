/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Output, EventEmitter, Renderer2, NgZone, HostBinding, ChangeDetectionStrategy } from '@angular/core';
var ScrollerComponent = /** @class */ (function () {
    function ScrollerComponent(ngZone, element, renderer) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.scrollbarV = false;
        this.scrollbarH = false;
        this.scroll = new EventEmitter();
        this.scrollYPos = 0;
        this.scrollXPos = 0;
        this.prevScrollYPos = 0;
        this.prevScrollXPos = 0;
        this._scrollEventListener = null;
        this.element = element.nativeElement;
    }
    /**
     * @return {?}
     */
    ScrollerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // manual bind so we don't always listen
        if (this.scrollbarV || this.scrollbarH) {
            /** @type {?} */
            var renderer = this.renderer;
            this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
            this._scrollEventListener = this.onScrolled.bind(this);
            this.parentElement.addEventListener('scroll', this._scrollEventListener);
        }
    };
    /**
     * @return {?}
     */
    ScrollerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._scrollEventListener) {
            this.parentElement.removeEventListener('scroll', this._scrollEventListener);
            this._scrollEventListener = null;
        }
    };
    /**
     * @param {?} offsetY
     * @return {?}
     */
    ScrollerComponent.prototype.setOffset = /**
     * @param {?} offsetY
     * @return {?}
     */
    function (offsetY) {
        if (this.parentElement) {
            this.parentElement.scrollTop = offsetY;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ScrollerComponent.prototype.onScrolled = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var dom = (/** @type {?} */ (event.currentTarget));
        requestAnimationFrame((/**
         * @return {?}
         */
        function () {
            _this.scrollYPos = dom.scrollTop;
            _this.scrollXPos = dom.scrollLeft;
            _this.updateOffset();
        }));
    };
    /**
     * @return {?}
     */
    ScrollerComponent.prototype.updateOffset = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var direction;
        if (this.scrollYPos < this.prevScrollYPos) {
            direction = 'down';
        }
        else if (this.scrollYPos > this.prevScrollYPos) {
            direction = 'up';
        }
        this.scroll.emit({
            direction: direction,
            scrollYPos: this.scrollYPos,
            scrollXPos: this.scrollXPos
        });
        this.prevScrollYPos = this.scrollYPos;
        this.prevScrollXPos = this.scrollXPos;
    };
    ScrollerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'datatable-scroller',
                    template: "\n    <ng-content></ng-content>\n  ",
                    host: {
                        class: 'datatable-scroll'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ScrollerComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    ScrollerComponent.propDecorators = {
        scrollbarV: [{ type: Input }],
        scrollbarH: [{ type: Input }],
        scrollHeight: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
        scrollWidth: [{ type: HostBinding, args: ['style.width.px',] }, { type: Input }],
        scroll: [{ type: Output }]
    };
    return ScrollerComponent;
}());
export { ScrollerComponent };
if (false) {
    /** @type {?} */
    ScrollerComponent.prototype.scrollbarV;
    /** @type {?} */
    ScrollerComponent.prototype.scrollbarH;
    /** @type {?} */
    ScrollerComponent.prototype.scrollHeight;
    /** @type {?} */
    ScrollerComponent.prototype.scrollWidth;
    /** @type {?} */
    ScrollerComponent.prototype.scroll;
    /** @type {?} */
    ScrollerComponent.prototype.scrollYPos;
    /** @type {?} */
    ScrollerComponent.prototype.scrollXPos;
    /** @type {?} */
    ScrollerComponent.prototype.prevScrollYPos;
    /** @type {?} */
    ScrollerComponent.prototype.prevScrollXPos;
    /** @type {?} */
    ScrollerComponent.prototype.element;
    /** @type {?} */
    ScrollerComponent.prototype.parentElement;
    /** @type {?} */
    ScrollerComponent.prototype.onScrollListener;
    /**
     * @type {?}
     * @private
     */
    ScrollerComponent.prototype._scrollEventListener;
    /**
     * @type {?}
     * @private
     */
    ScrollerComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    ScrollerComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN3aW1sYW5lL25neC1kYXRhdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9ib2R5L3Njcm9sbGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixZQUFZLEVBQ1osU0FBUyxFQUNULE1BQU0sRUFHTixXQUFXLEVBQ1gsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBSXZCO0lBa0NFLDJCQUFvQixNQUFjLEVBQUUsT0FBbUIsRUFBVSxRQUFtQjtRQUFoRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQStCLGFBQVEsR0FBUixRQUFRLENBQVc7UUF2QjNFLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQVUzQixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekQsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBS25CLHlCQUFvQixHQUFRLElBQUksQ0FBQztRQUd2QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELG9DQUFROzs7SUFBUjtRQUNFLHdDQUF3QztRQUN4QyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTs7Z0JBQ2hDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTtZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7O0lBRUQscUNBQVM7Ozs7SUFBVCxVQUFVLE9BQWU7UUFDdkIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztTQUN4QztJQUNILENBQUM7Ozs7O0lBRUQsc0NBQVU7Ozs7SUFBVixVQUFXLEtBQWlCO1FBQTVCLGlCQU9DOztZQU5PLEdBQUcsR0FBWSxtQkFBUyxLQUFLLENBQUMsYUFBYSxFQUFBO1FBQ2pELHFCQUFxQjs7O1FBQUM7WUFDcEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUNqQyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsd0NBQVk7OztJQUFaOztZQUNNLFNBQWlCO1FBQ3JCLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3pDLFNBQVMsR0FBRyxNQUFNLENBQUM7U0FDcEI7YUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNoRCxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZixTQUFTLFdBQUE7WUFDVCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQzVCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEMsQ0FBQzs7Z0JBdEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUscUNBRVQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxrQkFBa0I7cUJBQzFCO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFsQkMsTUFBTTtnQkFKTixVQUFVO2dCQUdWLFNBQVM7Ozs2QkFxQlIsS0FBSzs2QkFDTCxLQUFLOytCQUVMLFdBQVcsU0FBQyxpQkFBaUIsY0FDN0IsS0FBSzs4QkFHTCxXQUFXLFNBQUMsZ0JBQWdCLGNBQzVCLEtBQUs7eUJBR0wsTUFBTTs7SUFpRVQsd0JBQUM7Q0FBQSxBQXZGRCxJQXVGQztTQTdFWSxpQkFBaUI7OztJQUM1Qix1Q0FBcUM7O0lBQ3JDLHVDQUFxQzs7SUFFckMseUNBRXFCOztJQUVyQix3Q0FFb0I7O0lBRXBCLG1DQUF5RDs7SUFFekQsdUNBQXVCOztJQUN2Qix1Q0FBdUI7O0lBQ3ZCLDJDQUEyQjs7SUFDM0IsMkNBQTJCOztJQUMzQixvQ0FBYTs7SUFDYiwwQ0FBbUI7O0lBQ25CLDZDQUFzQjs7Ozs7SUFFdEIsaURBQXlDOzs7OztJQUU3QixtQ0FBc0I7Ozs7O0lBQXVCLHFDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBSZW5kZXJlcjIsXHJcbiAgTmdab25lLFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1vdXNlRXZlbnQgfSBmcm9tICcuLi8uLi9ldmVudHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkYXRhdGFibGUtc2Nyb2xsZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2RhdGF0YWJsZS1zY3JvbGwnXHJcbiAgfSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2Nyb2xsZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgc2Nyb2xsYmFyVjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNjcm9sbGJhckg6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKVxyXG4gIEBJbnB1dCgpXHJcbiAgc2Nyb2xsSGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgucHgnKVxyXG4gIEBJbnB1dCgpXHJcbiAgc2Nyb2xsV2lkdGg6IG51bWJlcjtcclxuXHJcbiAgQE91dHB1dCgpIHNjcm9sbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHNjcm9sbFlQb3M6IG51bWJlciA9IDA7XHJcbiAgc2Nyb2xsWFBvczogbnVtYmVyID0gMDtcclxuICBwcmV2U2Nyb2xsWVBvczogbnVtYmVyID0gMDtcclxuICBwcmV2U2Nyb2xsWFBvczogbnVtYmVyID0gMDtcclxuICBlbGVtZW50OiBhbnk7XHJcbiAgcGFyZW50RWxlbWVudDogYW55O1xyXG4gIG9uU2Nyb2xsTGlzdGVuZXI6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBfc2Nyb2xsRXZlbnRMaXN0ZW5lcjogYW55ID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIG1hbnVhbCBiaW5kIHNvIHdlIGRvbid0IGFsd2F5cyBsaXN0ZW5cclxuICAgIGlmICh0aGlzLnNjcm9sbGJhclYgfHwgdGhpcy5zY3JvbGxiYXJIKSB7XHJcbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlcjtcclxuICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gcmVuZGVyZXIucGFyZW50Tm9kZShyZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudCkpO1xyXG4gICAgICB0aGlzLl9zY3JvbGxFdmVudExpc3RlbmVyID0gdGhpcy5vblNjcm9sbGVkLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGxFdmVudExpc3RlbmVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX3Njcm9sbEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbEV2ZW50TGlzdGVuZXIpO1xyXG4gICAgICB0aGlzLl9zY3JvbGxFdmVudExpc3RlbmVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldE9mZnNldChvZmZzZXRZOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcCA9IG9mZnNldFk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNjcm9sbGVkKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBkb206IEVsZW1lbnQgPSA8RWxlbWVudD5ldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgdGhpcy5zY3JvbGxZUG9zID0gZG9tLnNjcm9sbFRvcDtcclxuICAgICAgdGhpcy5zY3JvbGxYUG9zID0gZG9tLnNjcm9sbExlZnQ7XHJcbiAgICAgIHRoaXMudXBkYXRlT2Zmc2V0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU9mZnNldCgpOiB2b2lkIHtcclxuICAgIGxldCBkaXJlY3Rpb246IHN0cmluZztcclxuICAgIGlmICh0aGlzLnNjcm9sbFlQb3MgPCB0aGlzLnByZXZTY3JvbGxZUG9zKSB7XHJcbiAgICAgIGRpcmVjdGlvbiA9ICdkb3duJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGxZUG9zID4gdGhpcy5wcmV2U2Nyb2xsWVBvcykge1xyXG4gICAgICBkaXJlY3Rpb24gPSAndXAnO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2Nyb2xsLmVtaXQoe1xyXG4gICAgICBkaXJlY3Rpb24sXHJcbiAgICAgIHNjcm9sbFlQb3M6IHRoaXMuc2Nyb2xsWVBvcyxcclxuICAgICAgc2Nyb2xsWFBvczogdGhpcy5zY3JvbGxYUG9zXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnByZXZTY3JvbGxZUG9zID0gdGhpcy5zY3JvbGxZUG9zO1xyXG4gICAgdGhpcy5wcmV2U2Nyb2xsWFBvcyA9IHRoaXMuc2Nyb2xsWFBvcztcclxuICB9XHJcbn1cclxuIl19