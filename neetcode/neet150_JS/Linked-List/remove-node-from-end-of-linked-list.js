// https://neetcode.io/problems/remove-node-from-end-of-linked-list

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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if (head === null) {
            return head
        }

        const dummy = new ListNode(0, head)
        let slow = dummy
        let fast = head

        while (n > 0) {
            fast = fast.next
            n -= 1
        }

        while (fast) {
            slow = slow.next
            fast = fast.next
        }

        slow.next = slow.next.next
        return dummy.next
    }
}
