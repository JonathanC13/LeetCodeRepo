// https://neetcode.io/problems/reverse-nodes-in-k-group

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
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
            return head
        }

        let ptr = head
        let n = 0
        while (n < k) {
            if (ptr === null) {
                return head
            }
            ptr = ptr.next
            n += 1
        }

        const retHead = this.reverse(head, k)

        if (ptr !== null) {
            head.next = this.reverseKGroup(ptr, k)
        }

        return retHead
    }

    reverse(node, k) {
        let prev = null

        while (k > 0) {
            const tmp = node.next
            node.next = prev
            prev = node
            node = tmp
            k -= 1
        }

        return prev
    }
}
