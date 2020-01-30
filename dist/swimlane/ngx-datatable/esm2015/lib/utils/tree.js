/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getterForProp } from './column-prop-getters';
/**
 * @param {?} prop
 * @return {?}
 */
export function optionalGetterForProp(prop) {
    return prop && ((/**
     * @param {?} row
     * @return {?}
     */
    row => getterForProp(prop)(row, prop)));
}
/**
 * This functions rearrange items by their parents
 * Also sets the level value to each of the items
 *
 * Note: Expecting each item has a property called parentId
 * Note: This algorithm will fail if a list has two or more items with same ID
 * NOTE: This algorithm will fail if there is a deadlock of relationship
 *
 * For example,
 *
 * Input
 *
 * id -> parent
 * 1  -> 0
 * 2  -> 0
 * 3  -> 1
 * 4  -> 1
 * 5  -> 2
 * 7  -> 8
 * 6  -> 3
 *
 *
 * Output
 * id -> level
 * 1      -> 0
 * --3    -> 1
 * ----6  -> 2
 * --4    -> 1
 * 2      -> 0
 * --5    -> 1
 * 7     -> 8
 *
 *
 * @param {?} rows
 *
 * @param {?=} from
 * @param {?=} to
 * @return {?}
 */
export function groupRowsByParents(rows, from, to) {
    if (from && to) {
        /** @type {?} */
        const nodeById = {};
        /** @type {?} */
        const l = rows.length;
        /** @type {?} */
        let node = null;
        nodeById[0] = new TreeNode(); // that's the root node
        // that's the root node
        /** @type {?} */
        const uniqIDs = rows.reduce((/**
         * @param {?} arr
         * @param {?} item
         * @return {?}
         */
        (arr, item) => {
            /** @type {?} */
            const toValue = to(item);
            if (arr.indexOf(toValue) === -1) {
                arr.push(toValue);
            }
            return arr;
        }), []);
        for (let i = 0; i < l; i++) {
            // make TreeNode objects for each item
            nodeById[to(rows[i])] = new TreeNode(rows[i]);
        }
        for (let i = 0; i < l; i++) {
            // link all TreeNode objects
            node = nodeById[to(rows[i])];
            /** @type {?} */
            let parent = 0;
            /** @type {?} */
            const fromValue = from(node.row);
            if (!!fromValue && uniqIDs.indexOf(fromValue) > -1) {
                parent = fromValue;
            }
            node.parent = nodeById[parent];
            node.row['level'] = node.parent.row['level'] + 1;
            node.parent.children.push(node);
        }
        /** @type {?} */
        let resolvedRows = [];
        nodeById[0].flatten((/**
         * @return {?}
         */
        function () {
            resolvedRows = [...resolvedRows, this.row];
        }), true);
        return resolvedRows;
    }
    else {
        return rows;
    }
}
class TreeNode {
    /**
     * @param {?=} row
     */
    constructor(row = null) {
        if (!row) {
            row = {
                level: -1,
                treeStatus: 'expanded'
            };
        }
        this.row = row;
        this.parent = null;
        this.children = [];
    }
    /**
     * @param {?} f
     * @param {?} recursive
     * @return {?}
     */
    flatten(f, recursive) {
        if (this.row['treeStatus'] === 'expanded') {
            for (let i = 0, l = this.children.length; i < l; i++) {
                /** @type {?} */
                const child = this.children[i];
                f.apply(child, Array.prototype.slice.call(arguments, 2));
                if (recursive)
                    child.flatten.apply(child, arguments);
            }
        }
    }
}
if (false) {
    /** @type {?} */
    TreeNode.prototype.row;
    /** @type {?} */
    TreeNode.prototype.parent;
    /** @type {?} */
    TreeNode.prototype.children;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL3RyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFJdEQsTUFBTSxVQUFVLHFCQUFxQixDQUFDLElBQXFCO0lBQ3pELE9BQU8sSUFBSSxJQUFJOzs7O0lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFDLENBQUM7QUFDekQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsSUFBVyxFQUFFLElBQTBCLEVBQUUsRUFBd0I7SUFDbEcsSUFBSSxJQUFJLElBQUksRUFBRSxFQUFFOztjQUNSLFFBQVEsR0FBRyxFQUFFOztjQUNiLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTTs7WUFDakIsSUFBSSxHQUFvQixJQUFJO1FBRWhDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUMsdUJBQXVCOzs7Y0FFL0MsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNOzs7OztRQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFOztrQkFDbEMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDeEIsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25CO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEdBQUUsRUFBRSxDQUFDO1FBRU4sS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixzQ0FBc0M7WUFDdEMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQiw0QkFBNEI7WUFDNUIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Z0JBQ3pCLE1BQU0sR0FBRyxDQUFDOztrQkFDUixTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDaEMsSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xELE1BQU0sR0FBRyxTQUFTLENBQUM7YUFDcEI7WUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7O1lBRUcsWUFBWSxHQUFVLEVBQUU7UUFDNUIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87OztRQUFDO1lBQ2xCLFlBQVksR0FBRyxDQUFDLEdBQUcsWUFBWSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxPQUFPLFlBQVksQ0FBQztLQUNyQjtTQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUM7S0FDYjtBQUNILENBQUM7QUFFRCxNQUFNLFFBQVE7Ozs7SUFLWixZQUFZLE1BQWtCLElBQUk7UUFDaEMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLEdBQUcsR0FBRztnQkFDSixLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUNULFVBQVUsRUFBRSxVQUFVO2FBQ3ZCLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLENBQU0sRUFBRSxTQUFrQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssVUFBVSxFQUFFO1lBQ3pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztzQkFDOUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELElBQUksU0FBUztvQkFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDdEQ7U0FDRjtJQUNILENBQUM7Q0FDRjs7O0lBekJDLHVCQUFnQjs7SUFDaEIsMEJBQW1COztJQUNuQiw0QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXR0ZXJGb3JQcm9wIH0gZnJvbSAnLi9jb2x1bW4tcHJvcC1nZXR0ZXJzJztcclxuaW1wb3J0IHsgVGFibGVDb2x1bW5Qcm9wIH0gZnJvbSAnLi4vdHlwZXMvdGFibGUtY29sdW1uLnR5cGUnO1xyXG5cclxuZXhwb3J0IHR5cGUgT3B0aW9uYWxWYWx1ZUdldHRlciA9IChyb3c6IGFueSkgPT4gYW55IHwgdW5kZWZpbmVkO1xyXG5leHBvcnQgZnVuY3Rpb24gb3B0aW9uYWxHZXR0ZXJGb3JQcm9wKHByb3A6IFRhYmxlQ29sdW1uUHJvcCk6IE9wdGlvbmFsVmFsdWVHZXR0ZXIge1xyXG4gIHJldHVybiBwcm9wICYmIChyb3cgPT4gZ2V0dGVyRm9yUHJvcChwcm9wKShyb3csIHByb3ApKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb25zIHJlYXJyYW5nZSBpdGVtcyBieSB0aGVpciBwYXJlbnRzXHJcbiAqIEFsc28gc2V0cyB0aGUgbGV2ZWwgdmFsdWUgdG8gZWFjaCBvZiB0aGUgaXRlbXNcclxuICpcclxuICogTm90ZTogRXhwZWN0aW5nIGVhY2ggaXRlbSBoYXMgYSBwcm9wZXJ0eSBjYWxsZWQgcGFyZW50SWRcclxuICogTm90ZTogVGhpcyBhbGdvcml0aG0gd2lsbCBmYWlsIGlmIGEgbGlzdCBoYXMgdHdvIG9yIG1vcmUgaXRlbXMgd2l0aCBzYW1lIElEXHJcbiAqIE5PVEU6IFRoaXMgYWxnb3JpdGhtIHdpbGwgZmFpbCBpZiB0aGVyZSBpcyBhIGRlYWRsb2NrIG9mIHJlbGF0aW9uc2hpcFxyXG4gKlxyXG4gKiBGb3IgZXhhbXBsZSxcclxuICpcclxuICogSW5wdXRcclxuICpcclxuICogaWQgLT4gcGFyZW50XHJcbiAqIDEgIC0+IDBcclxuICogMiAgLT4gMFxyXG4gKiAzICAtPiAxXHJcbiAqIDQgIC0+IDFcclxuICogNSAgLT4gMlxyXG4gKiA3ICAtPiA4XHJcbiAqIDYgIC0+IDNcclxuICpcclxuICpcclxuICogT3V0cHV0XHJcbiAqIGlkIC0+IGxldmVsXHJcbiAqIDEgICAgICAtPiAwXHJcbiAqIC0tMyAgICAtPiAxXHJcbiAqIC0tLS02ICAtPiAyXHJcbiAqIC0tNCAgICAtPiAxXHJcbiAqIDIgICAgICAtPiAwXHJcbiAqIC0tNSAgICAtPiAxXHJcbiAqIDcgICAgIC0+IDhcclxuICpcclxuICpcclxuICogQHBhcmFtIHJvd3NcclxuICpcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBncm91cFJvd3NCeVBhcmVudHMocm93czogYW55W10sIGZyb20/OiBPcHRpb25hbFZhbHVlR2V0dGVyLCB0bz86IE9wdGlvbmFsVmFsdWVHZXR0ZXIpOiBhbnlbXSB7XHJcbiAgaWYgKGZyb20gJiYgdG8pIHtcclxuICAgIGNvbnN0IG5vZGVCeUlkID0ge307XHJcbiAgICBjb25zdCBsID0gcm93cy5sZW5ndGg7XHJcbiAgICBsZXQgbm9kZTogVHJlZU5vZGUgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBub2RlQnlJZFswXSA9IG5ldyBUcmVlTm9kZSgpOyAvLyB0aGF0J3MgdGhlIHJvb3Qgbm9kZVxyXG5cclxuICAgIGNvbnN0IHVuaXFJRHMgPSByb3dzLnJlZHVjZSgoYXJyLCBpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRvVmFsdWUgPSB0byhpdGVtKTtcclxuICAgICAgaWYgKGFyci5pbmRleE9mKHRvVmFsdWUpID09PSAtMSkge1xyXG4gICAgICAgIGFyci5wdXNoKHRvVmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgLy8gbWFrZSBUcmVlTm9kZSBvYmplY3RzIGZvciBlYWNoIGl0ZW1cclxuICAgICAgbm9kZUJ5SWRbdG8ocm93c1tpXSldID0gbmV3IFRyZWVOb2RlKHJvd3NbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIC8vIGxpbmsgYWxsIFRyZWVOb2RlIG9iamVjdHNcclxuICAgICAgbm9kZSA9IG5vZGVCeUlkW3RvKHJvd3NbaV0pXTtcclxuICAgICAgbGV0IHBhcmVudCA9IDA7XHJcbiAgICAgIGNvbnN0IGZyb21WYWx1ZSA9IGZyb20obm9kZS5yb3cpO1xyXG4gICAgICBpZiAoISFmcm9tVmFsdWUgJiYgdW5pcUlEcy5pbmRleE9mKGZyb21WYWx1ZSkgPiAtMSkge1xyXG4gICAgICAgIHBhcmVudCA9IGZyb21WYWx1ZTtcclxuICAgICAgfVxyXG4gICAgICBub2RlLnBhcmVudCA9IG5vZGVCeUlkW3BhcmVudF07XHJcbiAgICAgIG5vZGUucm93WydsZXZlbCddID0gbm9kZS5wYXJlbnQucm93WydsZXZlbCddICsgMTtcclxuICAgICAgbm9kZS5wYXJlbnQuY2hpbGRyZW4ucHVzaChub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVzb2x2ZWRSb3dzOiBhbnlbXSA9IFtdO1xyXG4gICAgbm9kZUJ5SWRbMF0uZmxhdHRlbihmdW5jdGlvbigpIHtcclxuICAgICAgcmVzb2x2ZWRSb3dzID0gWy4uLnJlc29sdmVkUm93cywgdGhpcy5yb3ddO1xyXG4gICAgfSwgdHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc29sdmVkUm93cztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHJvd3M7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBUcmVlTm9kZSB7XHJcbiAgcHVibGljIHJvdzogYW55O1xyXG4gIHB1YmxpYyBwYXJlbnQ6IGFueTtcclxuICBwdWJsaWMgY2hpbGRyZW46IGFueVtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihyb3c6IGFueSB8IG51bGwgPSBudWxsKSB7XHJcbiAgICBpZiAoIXJvdykge1xyXG4gICAgICByb3cgPSB7XHJcbiAgICAgICAgbGV2ZWw6IC0xLFxyXG4gICAgICAgIHRyZWVTdGF0dXM6ICdleHBhbmRlZCdcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHRoaXMucm93ID0gcm93O1xyXG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xyXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZmxhdHRlbihmOiBhbnksIHJlY3Vyc2l2ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMucm93Wyd0cmVlU3RhdHVzJ10gPT09ICdleHBhbmRlZCcpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcclxuICAgICAgICBmLmFwcGx5KGNoaWxkLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpKTtcclxuICAgICAgICBpZiAocmVjdXJzaXZlKSBjaGlsZC5mbGF0dGVuLmFwcGx5KGNoaWxkLCBhcmd1bWVudHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==