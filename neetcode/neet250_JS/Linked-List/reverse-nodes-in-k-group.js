// https://neetcode.io/problems/reverse-nodes-in-k-group

/*
create dummy = new ListNode(0)
let tail = dummy
let left = head

while (left) {
    Check if there are enough nodes to reverse
    let right = left
    i = 1
    while (i < k && right !== null) {
        right = right.next
        i ++
    }
    if (i !== 3 || right === null) {
        break
    }

    let prev = null
    tail.next = right
    tail = left
    right = right.next

    while (left !== right) {
        const next = left.next
        left.next = prev
        prev = left
        left = next
    }
}

return dummy.next

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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        if (head === null) {
            return head
        }

        const dummy = new ListNode(0, head)
        let tail = dummy
        let left = head

        while (left) {
            let right = left
            let i = 1
            while (i < k && right !== null) {
                right = right.next
                i ++
            }
            if (i !== k || right === null) {
                break
            }
            
            tail.next = right
            tail = left
            right = right.next
            let prev = right

            while (left !== right) {
                const next = left.next
                left.next = prev
                prev = left
                left = next
            }

        }

        return dummy.next
    }
}
