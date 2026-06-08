// https://neetcode.io/problems/reverse-nodes-in-k-group/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  1. head
 *      - head instanceof ListNode
 *  2. k
 *      - typeof k === 'number'
 *      - k > 0
 * 
 * 3. time and space constraints
 *  BTTC: O(n + n/k)    // n = number of nodes
 *  Space: O(k)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if k <= 1: return head
 * 
 *  test cases
 *  1. remaining nodes < k so do not reverse
 *      inputs
 *          head = [1,2,3,4,5,6,7,8]
 *          k = 3
 *      expected output
 *          [3,2,1,6,5,4,7,8]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  check if have k nodes to reverse
 *  reverse the nodes
 * 
 * 7. algos
 *  - linked list traversal
 * 
 * 8. data structures
 *  - Linked list
 * 
 * 9. complexity
 *  Time: O(n + n/k)
 *  Space: O(k)
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
        if (k <= 1) {
            return head
        }

        const dummy = new ListNode(0, head)
        let prevTail = dummy

        while (prevTail !== null) {
            let i = 0
            let itr = prevTail
            while (i < k && itr !== null) {
                i += 1
                itr = itr.next
            }
            if (i !== k || itr === null) {
                // not enough to reverse
                break
            }
            
            let revHead = prevTail.next // get first node to reverse
            prevTail.next = itr         // assign prevTail to head of new reversed section
            prevTail = revHead          // new prevTail when this section reversed
            let prev = itr.next         // the first prev is the first node of the next section
            i = 0
            while (i < k) {
                i += 1
                const nxt = revHead.next
                revHead.next = prev
                prev = revHead
                revHead = nxt
            }
        }

        return dummy.next
    }

    reverseKGroupRec(head, k) {
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
