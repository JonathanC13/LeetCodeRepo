// https://neetcode.io/problems/linked-list-cycle-detection

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
     * @return {boolean}
     */
    hasCycle(head) {
        if (head === null) {
            return head
        }

        let slow = head
        let fast = head.next

        while (fast && fast.next) {
            if (slow === fast) {
                return true
            }
            slow = slow.next
            fast = fast.next.next
        }

        return false
    }
}
