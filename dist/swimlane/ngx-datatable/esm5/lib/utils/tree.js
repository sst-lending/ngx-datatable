/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
    function (row) { return getterForProp(prop)(row, prop); }));
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
        var nodeById = {};
        /** @type {?} */
        var l = rows.length;
        /** @type {?} */
        var node = null;
        nodeById[0] = new TreeNode(); // that's the root node
        // that's the root node
        /** @type {?} */
        var uniqIDs = rows.reduce((/**
         * @param {?} arr
         * @param {?} item
         * @return {?}
         */
        function (arr, item) {
            /** @type {?} */
            var toValue = to(item);
            if (arr.indexOf(toValue) === -1) {
                arr.push(toValue);
            }
            return arr;
        }), []);
        for (var i = 0; i < l; i++) {
            // make TreeNode objects for each item
            nodeById[to(rows[i])] = new TreeNode(rows[i]);
        }
        for (var i = 0; i < l; i++) {
            // link all TreeNode objects
            node = nodeById[to(rows[i])];
            /** @type {?} */
            var parent_1 = 0;
            /** @type {?} */
            var fromValue = from(node.row);
            if (!!fromValue && uniqIDs.indexOf(fromValue) > -1) {
                parent_1 = fromValue;
            }
            node.parent = nodeById[parent_1];
            node.row['level'] = node.parent.row['level'] + 1;
            node.parent.children.push(node);
        }
        /** @type {?} */
        var resolvedRows_1 = [];
        nodeById[0].flatten((/**
         * @return {?}
         */
        function () {
            resolvedRows_1 = tslib_1.__spread(resolvedRows_1, [this.row]);
        }), true);
        return resolvedRows_1;
    }
    else {
        return rows;
    }
}
var TreeNode = /** @class */ (function () {
    function TreeNode(row) {
        if (row === void 0) { row = null; }
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
    TreeNode.prototype.flatten = /**
     * @param {?} f
     * @param {?} recursive
     * @return {?}
     */
    function (f, recursive) {
        if (this.row['treeStatus'] === 'expanded') {
            for (var i = 0, l = this.children.length; i < l; i++) {
                /** @type {?} */
                var child = this.children[i];
                f.apply(child, Array.prototype.slice.call(arguments, 2));
                if (recursive)
                    child.flatten.apply(child, arguments);
            }
        }
    };
    return TreeNode;
}());
if (false) {
    /** @type {?} */
    TreeNode.prototype.row;
    /** @type {?} */
    TreeNode.prototype.parent;
    /** @type {?} */
    TreeNode.prototype.children;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL3RyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBSXRELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxJQUFxQjtJQUN6RCxPQUFPLElBQUksSUFBSTs7OztJQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBOUIsQ0FBOEIsRUFBQyxDQUFDO0FBQ3pELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0QsTUFBTSxVQUFVLGtCQUFrQixDQUFDLElBQVcsRUFBRSxJQUEwQixFQUFFLEVBQXdCO0lBQ2xHLElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRTs7WUFDUixRQUFRLEdBQUcsRUFBRTs7WUFDYixDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU07O1lBQ2pCLElBQUksR0FBb0IsSUFBSTtRQUVoQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDLHVCQUF1Qjs7O1lBRS9DLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTTs7Ozs7UUFBQyxVQUFDLEdBQUcsRUFBRSxJQUFJOztnQkFDOUIsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDeEIsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25CO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEdBQUUsRUFBRSxDQUFDO1FBRU4sS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixzQ0FBc0M7WUFDdEMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQiw0QkFBNEI7WUFDNUIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Z0JBQ3pCLFFBQU0sR0FBRyxDQUFDOztnQkFDUixTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDaEMsSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xELFFBQU0sR0FBRyxTQUFTLENBQUM7YUFDcEI7WUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxRQUFNLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7O1lBRUcsY0FBWSxHQUFVLEVBQUU7UUFDNUIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87OztRQUFDO1lBQ2xCLGNBQVksb0JBQU8sY0FBWSxHQUFFLElBQUksQ0FBQyxHQUFHLEVBQUMsQ0FBQztRQUM3QyxDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxPQUFPLGNBQVksQ0FBQztLQUNyQjtTQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUM7S0FDYjtBQUNILENBQUM7QUFFRDtJQUtFLGtCQUFZLEdBQXNCO1FBQXRCLG9CQUFBLEVBQUEsVUFBc0I7UUFDaEMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLEdBQUcsR0FBRztnQkFDSixLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUNULFVBQVUsRUFBRSxVQUFVO2FBQ3ZCLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRUQsMEJBQU87Ozs7O0lBQVAsVUFBUSxDQUFNLEVBQUUsU0FBa0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7b0JBQzlDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLFNBQVM7b0JBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ3REO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7OztJQXpCQyx1QkFBZ0I7O0lBQ2hCLDBCQUFtQjs7SUFDbkIsNEJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0dGVyRm9yUHJvcCB9IGZyb20gJy4vY29sdW1uLXByb3AtZ2V0dGVycyc7XHJcbmltcG9ydCB7IFRhYmxlQ29sdW1uUHJvcCB9IGZyb20gJy4uL3R5cGVzL3RhYmxlLWNvbHVtbi50eXBlJztcclxuXHJcbmV4cG9ydCB0eXBlIE9wdGlvbmFsVmFsdWVHZXR0ZXIgPSAocm93OiBhbnkpID0+IGFueSB8IHVuZGVmaW5lZDtcclxuZXhwb3J0IGZ1bmN0aW9uIG9wdGlvbmFsR2V0dGVyRm9yUHJvcChwcm9wOiBUYWJsZUNvbHVtblByb3ApOiBPcHRpb25hbFZhbHVlR2V0dGVyIHtcclxuICByZXR1cm4gcHJvcCAmJiAocm93ID0+IGdldHRlckZvclByb3AocHJvcCkocm93LCBwcm9wKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9ucyByZWFycmFuZ2UgaXRlbXMgYnkgdGhlaXIgcGFyZW50c1xyXG4gKiBBbHNvIHNldHMgdGhlIGxldmVsIHZhbHVlIHRvIGVhY2ggb2YgdGhlIGl0ZW1zXHJcbiAqXHJcbiAqIE5vdGU6IEV4cGVjdGluZyBlYWNoIGl0ZW0gaGFzIGEgcHJvcGVydHkgY2FsbGVkIHBhcmVudElkXHJcbiAqIE5vdGU6IFRoaXMgYWxnb3JpdGhtIHdpbGwgZmFpbCBpZiBhIGxpc3QgaGFzIHR3byBvciBtb3JlIGl0ZW1zIHdpdGggc2FtZSBJRFxyXG4gKiBOT1RFOiBUaGlzIGFsZ29yaXRobSB3aWxsIGZhaWwgaWYgdGhlcmUgaXMgYSBkZWFkbG9jayBvZiByZWxhdGlvbnNoaXBcclxuICpcclxuICogRm9yIGV4YW1wbGUsXHJcbiAqXHJcbiAqIElucHV0XHJcbiAqXHJcbiAqIGlkIC0+IHBhcmVudFxyXG4gKiAxICAtPiAwXHJcbiAqIDIgIC0+IDBcclxuICogMyAgLT4gMVxyXG4gKiA0ICAtPiAxXHJcbiAqIDUgIC0+IDJcclxuICogNyAgLT4gOFxyXG4gKiA2ICAtPiAzXHJcbiAqXHJcbiAqXHJcbiAqIE91dHB1dFxyXG4gKiBpZCAtPiBsZXZlbFxyXG4gKiAxICAgICAgLT4gMFxyXG4gKiAtLTMgICAgLT4gMVxyXG4gKiAtLS0tNiAgLT4gMlxyXG4gKiAtLTQgICAgLT4gMVxyXG4gKiAyICAgICAgLT4gMFxyXG4gKiAtLTUgICAgLT4gMVxyXG4gKiA3ICAgICAtPiA4XHJcbiAqXHJcbiAqXHJcbiAqIEBwYXJhbSByb3dzXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBSb3dzQnlQYXJlbnRzKHJvd3M6IGFueVtdLCBmcm9tPzogT3B0aW9uYWxWYWx1ZUdldHRlciwgdG8/OiBPcHRpb25hbFZhbHVlR2V0dGVyKTogYW55W10ge1xyXG4gIGlmIChmcm9tICYmIHRvKSB7XHJcbiAgICBjb25zdCBub2RlQnlJZCA9IHt9O1xyXG4gICAgY29uc3QgbCA9IHJvd3MubGVuZ3RoO1xyXG4gICAgbGV0IG5vZGU6IFRyZWVOb2RlIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgbm9kZUJ5SWRbMF0gPSBuZXcgVHJlZU5vZGUoKTsgLy8gdGhhdCdzIHRoZSByb290IG5vZGVcclxuXHJcbiAgICBjb25zdCB1bmlxSURzID0gcm93cy5yZWR1Y2UoKGFyciwgaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCB0b1ZhbHVlID0gdG8oaXRlbSk7XHJcbiAgICAgIGlmIChhcnIuaW5kZXhPZih0b1ZhbHVlKSA9PT0gLTEpIHtcclxuICAgICAgICBhcnIucHVzaCh0b1ZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYXJyO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIC8vIG1ha2UgVHJlZU5vZGUgb2JqZWN0cyBmb3IgZWFjaCBpdGVtXHJcbiAgICAgIG5vZGVCeUlkW3RvKHJvd3NbaV0pXSA9IG5ldyBUcmVlTm9kZShyb3dzW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAvLyBsaW5rIGFsbCBUcmVlTm9kZSBvYmplY3RzXHJcbiAgICAgIG5vZGUgPSBub2RlQnlJZFt0byhyb3dzW2ldKV07XHJcbiAgICAgIGxldCBwYXJlbnQgPSAwO1xyXG4gICAgICBjb25zdCBmcm9tVmFsdWUgPSBmcm9tKG5vZGUucm93KTtcclxuICAgICAgaWYgKCEhZnJvbVZhbHVlICYmIHVuaXFJRHMuaW5kZXhPZihmcm9tVmFsdWUpID4gLTEpIHtcclxuICAgICAgICBwYXJlbnQgPSBmcm9tVmFsdWU7XHJcbiAgICAgIH1cclxuICAgICAgbm9kZS5wYXJlbnQgPSBub2RlQnlJZFtwYXJlbnRdO1xyXG4gICAgICBub2RlLnJvd1snbGV2ZWwnXSA9IG5vZGUucGFyZW50LnJvd1snbGV2ZWwnXSArIDE7XHJcbiAgICAgIG5vZGUucGFyZW50LmNoaWxkcmVuLnB1c2gobm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlc29sdmVkUm93czogYW55W10gPSBbXTtcclxuICAgIG5vZGVCeUlkWzBdLmZsYXR0ZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJlc29sdmVkUm93cyA9IFsuLi5yZXNvbHZlZFJvd3MsIHRoaXMucm93XTtcclxuICAgIH0sIHRydWUpO1xyXG5cclxuICAgIHJldHVybiByZXNvbHZlZFJvd3M7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiByb3dzO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVHJlZU5vZGUge1xyXG4gIHB1YmxpYyByb3c6IGFueTtcclxuICBwdWJsaWMgcGFyZW50OiBhbnk7XHJcbiAgcHVibGljIGNoaWxkcmVuOiBhbnlbXTtcclxuXHJcbiAgY29uc3RydWN0b3Iocm93OiBhbnkgfCBudWxsID0gbnVsbCkge1xyXG4gICAgaWYgKCFyb3cpIHtcclxuICAgICAgcm93ID0ge1xyXG4gICAgICAgIGxldmVsOiAtMSxcclxuICAgICAgICB0cmVlU3RhdHVzOiAnZXhwYW5kZWQnXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICB0aGlzLnJvdyA9IHJvdztcclxuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcclxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICB9XHJcblxyXG4gIGZsYXR0ZW4oZjogYW55LCByZWN1cnNpdmU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0aGlzLnJvd1sndHJlZVN0YXR1cyddID09PSAnZXhwYW5kZWQnKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgZi5hcHBseShjaGlsZCwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSk7XHJcbiAgICAgICAgaWYgKHJlY3Vyc2l2ZSkgY2hpbGQuZmxhdHRlbi5hcHBseShjaGlsZCwgYXJndW1lbnRzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=