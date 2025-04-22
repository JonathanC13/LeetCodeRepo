// https://neetcode.io/problems/linked-list-cycle-detection

/*
slow and fast pointer. In this case fast will be 2x faster than slow pointer.
If no cycle, fast will terminate with null
If there is a cycle, slow and fast will eventually meet.

- Time: O(n)
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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if (head === null) {
            return false
        }
        let slow = head
        let fast = head
        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
            if (slow === fast) {
                return true
            }
        }

        return false
    }
}
