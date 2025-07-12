// https://leetcode.com/problems/merge-two-sorted-lists/description/?envType=study-plan-v2&envId=top-interview-150

/*
while (l1 !== null && l2 !== null)
    if (l1.val <= l2.val) {
        itr.next = l1
        l1 = l1.next
    } else 
        itr.next = l2
        l2 = l2.next

    itr = itr.next

// attach remainder
if (l1 !== null) {
    itr.next = l1
} else
    itr.next = l2

return dummy.next

- Time: O(l1 + l2 len)
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
    if (list1 === null && list2 === null) {
        return null
    }

    const dummy = new ListNode(0)
    let itr = dummy

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            itr.next = list1
            list1 = list1.next
        } else {
            itr.next = list2
            list2 = list2.next
        }

        itr = itr.next
    }

    if (list1 !== null) {
        itr.next = list1
    } else {
        itr.next = list2
    }

    return dummy.next
};