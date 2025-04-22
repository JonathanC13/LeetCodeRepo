// https://neetcode.io/problems/merge-two-sorted-linked-lists

/*
- Time: O(m + n)
- Space: O(1)
*/

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

        const dummy = new  ListNode()
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

        // remainder
        if (list1 !== null) {
            ptr.next = list1
        } else if (list2 !== null) {
            ptr.next = list2
        }

        return dummy.next
    }
}
