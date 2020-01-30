/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Output, EventEmitter, Renderer2, NgZone, HostBinding, ChangeDetectionStrategy } from '@angular/core';
export class ScrollerComponent {
    /**
     * @param {?} ngZone
     * @param {?} element
     * @param {?} renderer
     */
    constructor(ngZone, element, renderer) {
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
    ngOnInit() {
        // manual bind so we don't always listen
        if (this.scrollbarV || this.scrollbarH) {
            /** @type {?} */
            const renderer = this.renderer;
            this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
            this._scrollEventListener = this.onScrolled.bind(this);
            this.parentElement.addEventListener('scroll', this._scrollEventListener);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._scrollEventListener) {
            this.parentElement.removeEventListener('scroll', this._scrollEventListener);
            this._scrollEventListener = null;
        }
    }
    /**
     * @param {?} offsetY
     * @return {?}
     */
    setOffset(offsetY) {
        if (this.parentElement) {
            this.parentElement.scrollTop = offsetY;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onScrolled(event) {
        /** @type {?} */
        const dom = (/** @type {?} */ (event.currentTarget));
        requestAnimationFrame((/**
         * @return {?}
         */
        () => {
            this.scrollYPos = dom.scrollTop;
            this.scrollXPos = dom.scrollLeft;
            this.updateOffset();
        }));
    }
    /**
     * @return {?}
     */
    updateOffset() {
        /** @type {?} */
        let direction;
        if (this.scrollYPos < this.prevScrollYPos) {
            direction = 'down';
        }
        else if (this.scrollYPos > this.prevScrollYPos) {
            direction = 'up';
        }
        this.scroll.emit({
            direction,
            scrollYPos: this.scrollYPos,
            scrollXPos: this.scrollXPos
        });
        this.prevScrollYPos = this.scrollYPos;
        this.prevScrollXPos = this.scrollXPos;
    }
}
ScrollerComponent.decorators = [
    { type: Component, args: [{
                selector: 'datatable-scroller',
                template: `
    <ng-content></ng-content>
  `,
                host: {
                    class: 'datatable-scroll'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ScrollerComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ElementRef },
    { type: Renderer2 }
];
ScrollerComponent.propDecorators = {
    scrollbarV: [{ type: Input }],
    scrollbarH: [{ type: Input }],
    scrollHeight: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
    scrollWidth: [{ type: HostBinding, args: ['style.width.px',] }, { type: Input }],
    scroll: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN3aW1sYW5lL25neC1kYXRhdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9ib2R5L3Njcm9sbGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixZQUFZLEVBQ1osU0FBUyxFQUNULE1BQU0sRUFHTixXQUFXLEVBQ1gsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBY3ZCLE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQXdCNUIsWUFBb0IsTUFBYyxFQUFFLE9BQW1CLEVBQVUsUUFBbUI7UUFBaEUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUErQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBdkIzRSxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFVM0IsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpELGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMzQixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUtuQix5QkFBb0IsR0FBUSxJQUFJLENBQUM7UUFHdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sd0NBQXdDO1FBQ3hDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFOztrQkFDaEMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUMxRTtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE9BQWU7UUFDdkIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztTQUN4QztJQUNILENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQWlCOztjQUNwQixHQUFHLEdBQVksbUJBQVMsS0FBSyxDQUFDLGFBQWEsRUFBQTtRQUNqRCxxQkFBcUI7OztRQUFDLEdBQUcsRUFBRTtZQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxZQUFZOztZQUNOLFNBQWlCO1FBQ3JCLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3pDLFNBQVMsR0FBRyxNQUFNLENBQUM7U0FDcEI7YUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNoRCxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZixTQUFTO1lBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUM1QixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hDLENBQUM7OztZQXRGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOztHQUVUO2dCQUNELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsa0JBQWtCO2lCQUMxQjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQWxCQyxNQUFNO1lBSk4sVUFBVTtZQUdWLFNBQVM7Ozt5QkFxQlIsS0FBSzt5QkFDTCxLQUFLOzJCQUVMLFdBQVcsU0FBQyxpQkFBaUIsY0FDN0IsS0FBSzswQkFHTCxXQUFXLFNBQUMsZ0JBQWdCLGNBQzVCLEtBQUs7cUJBR0wsTUFBTTs7OztJQVhQLHVDQUFxQzs7SUFDckMsdUNBQXFDOztJQUVyQyx5Q0FFcUI7O0lBRXJCLHdDQUVvQjs7SUFFcEIsbUNBQXlEOztJQUV6RCx1Q0FBdUI7O0lBQ3ZCLHVDQUF1Qjs7SUFDdkIsMkNBQTJCOztJQUMzQiwyQ0FBMkI7O0lBQzNCLG9DQUFhOztJQUNiLDBDQUFtQjs7SUFDbkIsNkNBQXNCOzs7OztJQUV0QixpREFBeUM7Ozs7O0lBRTdCLG1DQUFzQjs7Ozs7SUFBdUIscUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgRWxlbWVudFJlZixcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIFJlbmRlcmVyMixcclxuICBOZ1pvbmUsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBIb3N0QmluZGluZyxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTW91c2VFdmVudCB9IGZyb20gJy4uLy4uL2V2ZW50cyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RhdGF0YWJsZS1zY3JvbGxlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnZGF0YXRhYmxlLXNjcm9sbCdcclxuICB9LFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBzY3JvbGxiYXJWOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2Nyb2xsYmFySDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXHJcbiAgQElucHV0KClcclxuICBzY3JvbGxIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aC5weCcpXHJcbiAgQElucHV0KClcclxuICBzY3JvbGxXaWR0aDogbnVtYmVyO1xyXG5cclxuICBAT3V0cHV0KCkgc2Nyb2xsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgc2Nyb2xsWVBvczogbnVtYmVyID0gMDtcclxuICBzY3JvbGxYUG9zOiBudW1iZXIgPSAwO1xyXG4gIHByZXZTY3JvbGxZUG9zOiBudW1iZXIgPSAwO1xyXG4gIHByZXZTY3JvbGxYUG9zOiBudW1iZXIgPSAwO1xyXG4gIGVsZW1lbnQ6IGFueTtcclxuICBwYXJlbnRFbGVtZW50OiBhbnk7XHJcbiAgb25TY3JvbGxMaXN0ZW5lcjogYW55O1xyXG5cclxuICBwcml2YXRlIF9zY3JvbGxFdmVudExpc3RlbmVyOiBhbnkgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lLCBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gbWFudWFsIGJpbmQgc28gd2UgZG9uJ3QgYWx3YXlzIGxpc3RlblxyXG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyViB8fCB0aGlzLnNjcm9sbGJhckgpIHtcclxuICAgICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyO1xyXG4gICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSByZW5kZXJlci5wYXJlbnROb2RlKHJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50KSk7XHJcbiAgICAgIHRoaXMuX3Njcm9sbEV2ZW50TGlzdGVuZXIgPSB0aGlzLm9uU2Nyb2xsZWQuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbEV2ZW50TGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fc2Nyb2xsRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICB0aGlzLnBhcmVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsRXZlbnRMaXN0ZW5lcik7XHJcbiAgICAgIHRoaXMuX3Njcm9sbEV2ZW50TGlzdGVuZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0T2Zmc2V0KG9mZnNldFk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGFyZW50RWxlbWVudCkge1xyXG4gICAgICB0aGlzLnBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wID0gb2Zmc2V0WTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2Nyb2xsZWQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRvbTogRWxlbWVudCA9IDxFbGVtZW50PmV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNjcm9sbFlQb3MgPSBkb20uc2Nyb2xsVG9wO1xyXG4gICAgICB0aGlzLnNjcm9sbFhQb3MgPSBkb20uc2Nyb2xsTGVmdDtcclxuICAgICAgdGhpcy51cGRhdGVPZmZzZXQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlT2Zmc2V0KCk6IHZvaWQge1xyXG4gICAgbGV0IGRpcmVjdGlvbjogc3RyaW5nO1xyXG4gICAgaWYgKHRoaXMuc2Nyb2xsWVBvcyA8IHRoaXMucHJldlNjcm9sbFlQb3MpIHtcclxuICAgICAgZGlyZWN0aW9uID0gJ2Rvd24nO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbFlQb3MgPiB0aGlzLnByZXZTY3JvbGxZUG9zKSB7XHJcbiAgICAgIGRpcmVjdGlvbiA9ICd1cCc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zY3JvbGwuZW1pdCh7XHJcbiAgICAgIGRpcmVjdGlvbixcclxuICAgICAgc2Nyb2xsWVBvczogdGhpcy5zY3JvbGxZUG9zLFxyXG4gICAgICBzY3JvbGxYUG9zOiB0aGlzLnNjcm9sbFhQb3NcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucHJldlNjcm9sbFlQb3MgPSB0aGlzLnNjcm9sbFlQb3M7XHJcbiAgICB0aGlzLnByZXZTY3JvbGxYUG9zID0gdGhpcy5zY3JvbGxYUG9zO1xyXG4gIH1cclxufVxyXG4iXX0=