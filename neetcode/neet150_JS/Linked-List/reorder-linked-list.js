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
        let fast = head

        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }

        let list2 = slow.next
        slow.next = null
        let prev = null
        while (list2) {
            let tmp = list2.next
            list2.next = prev
            prev = list2
            list2 = tmp
        }

        let pointer = head
        let revList = prev
        while (pointer && revList) {
            let tmp = pointer.next
            pointer.next = revList
            pointer = tmp

            tmp = revList.next
            revList.next = pointer
            revList = tmp
        }
    }
}
