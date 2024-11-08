// https://neetcode.io/problems/reorder-linked-list

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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head.next
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }

        let list2 = slow.next
        let prev = null
        slow.next = null

        // reverse
        while (list2) {
            let tmp = list2.next
            list2.next = prev
            prev = list2
            list2 = tmp
        }
        list2 = prev

        // merge
        let list1 = head
        while (list2) {
            let tmp1 = list1.next
            list1.next = list2
            list1 = tmp1

            let tmp2 = list2.next
            list2.next = list1
            list2 = tmp2

        }
        
        return head
    }
}
