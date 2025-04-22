// https://neetcode.io/problems/reorder-linked-list

/*
slow and fast pointer whre fast is 2x faster than slow pointer with:
    Initial slow = head
    Initial fast = head.next
        This is so Slow ptr lands on the node before the center when fast terminates.

In the case of odd number of nodes, slow ptr will land on the on the exact center node
When even, slow ptr will land on Math.ceil(length / 2)'s node.

Reverse the list Slow is pointing to.

Alternate merging both lists.

- Time: O(n)    // 2 * n
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
     * @return {void}
     */
    reorderList(head) {
        if (head === null) {
            return head
        }

        let slow = head
        let fast = head.next
        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
        }

        let rev = slow.next
        slow.next = null    // terminate first half linked list end

        let revListItr = null
        while (rev !== null) {
            const next = rev.next
            rev.next = revListItr
            revListItr = rev
            rev = next
        }

        // merge
        let itr = head
        while (itr !== null && revListItr !== null) {
            const next = itr.next
            itr.next = revListItr
            itr = next

            const nextRev = revListItr.next
            revListItr.next = next
            revListItr = nextRev
        }

        return head
    }
}
