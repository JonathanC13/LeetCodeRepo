// https://neetcode.io/problems/merge-two-sorted-linked-lists

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1 || !list2) {
            return (list1 || list2 || null)
        }

        let dummy = new ListNode(0)
        let new1 = dummy

        while (list1 && list2) {
            if  (list1.val < list2.val) {
                new1.next = list1
                list1 = list1.next
            } else {
                new1.next = list2
                list2 = list2.next
            }
            new1 = new1.next
        }

        if (list1) {
            new1.next = list1
        } else {
            new1.next = list2
        }
        return dummy.next
    }
}
