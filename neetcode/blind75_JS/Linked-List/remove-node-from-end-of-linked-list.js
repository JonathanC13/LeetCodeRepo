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
            return null
        }

        // 2 pointer
        const dummy = new ListNode(0, head)
        let left = dummy
        let right = head
        while (n > 0) {
            n -= 1
            right = right.next
        }

        while (right) {
            left = left.next
            right = right.next
        }

        
        left.next = left.next.next
        
        return dummy.next

        // Two pass with stack
        // const stack = []

        // let p = head
        // while (p !== null) {
        //     stack.push(p)
        //     p = p.next
        // }

        // while (stack.length > 0) {
        //     const currNode = stack.pop()
        //     n -= 1
        //     if (n === 0) {
        //         if (head === currNode) {
        //             head = currNode.next
        //         } else {
        //             stack.pop().next = currNode.next
        //         }
        //         break
        //     }
        // }
        // return head
    }
}
