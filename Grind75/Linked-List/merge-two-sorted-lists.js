// https://leetcode.com/problems/merge-two-sorted-lists/description/

/**
create dummyNode as the head
create pointer to dummyNode

while (list1 !== null && list2 !== null)
    if (list1.val <= list2.val) {
        ptr.next = list1
        list1 = list1.next
    } else {
        ptr.next = list2
        list2 = list2.next
    }
    ptr = ptr.next

// attach remainder of list that still has nodes
if (list1 !== null) {
    ptr.next = list1
} else if (list2 !== null) {
    ptr.next = list2
}

return dummy.next

- Time: O(n + m)
- Space: O(1)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode(0)
    let ptr = dummy

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            ptr.next = list1
            list1 = list1.next
        } else {
            ptr.next = list2
            list2 = list2.next
        }
        ptr = ptr.next
    }

    if (list1 !== null) {
        ptr.next = list1
    } else if (list2 !== null) {
        ptr.next = list2
    }

    return dummy.next
};