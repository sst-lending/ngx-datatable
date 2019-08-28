import { EventEmitter, OnChanges, ChangeDetectorRef, SimpleChanges } from '@angular/core';
export declare class DataTableRowWrapperComponent implements OnChanges {
    private cd;
    innerWidth: number;
    rowDetail: any;
    groupHeader: any;
    offsetX: number;
    detailRowHeight: any;
    row: any;
    groupedRows: any;
    rowContextmenu: EventEmitter<{
        event: MouseEvent;
        row: any;
    }>;
    rowIndex: number;
    expanded: boolean;
    groupContext: any;
    rowContext: any;
    private _expanded;
    private _rowIndex;
    constructor(cd: ChangeDetectorRef);
    ngOnChanges({row: rowChange}: SimpleChanges): void;
    onContextmenu($event: MouseEvent): void;
    getGroupHeaderStyle(): any;
}
