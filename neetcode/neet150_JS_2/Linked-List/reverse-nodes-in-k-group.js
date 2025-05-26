// https://neetcode.io/problems/reverse-nodes-in-k-group

/*
recursive dfs
    let curr = head
    iterate while i <k && curr !== null to find the head of the next partition

    if (i === k) {
        // has enough nodes to revserse
        let nextHead = this.reverseKGroup(curr, k)  // returns the head of the next partition
        // reverse this partition
        let prev = nextHead
        while (head !== nextHead)
            next = head.next
            head.next = prev
            prev = head
            head = next

        head = prev
    }

    return head // if not enough nodes to revserse the head would remain unchanged

- Time: O(n)
- Space: O(n/k)

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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        if (head === null) {
            return null
        }

        let curr = head
        let i = 0
        while (curr && i < k) {
            curr = curr.next
            i += 1
        }

        if (i === k) {
            let prev = this.reverseKGroup(curr, k)
            while (head !== curr) {
                const next = head.next
                head.next = prev
                prev = head
                head = next
            }

            head = prev
        }

        return head
    }
}
