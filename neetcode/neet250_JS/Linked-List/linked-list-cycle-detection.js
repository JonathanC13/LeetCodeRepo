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

/*
- edge case 1: if (head === null) {return false}

use the technique of slow and fast pointer
where the fast pointer moves twice as fast as the slow pointer.

If there is no cycle, the fast pointer will eventually === null
If there is a cycle, the slow and fast pointer will eventually point at the same node

- Time: O(n). n is the number of nodes and if no cycle, it will be < n
- Space: O(1)
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
