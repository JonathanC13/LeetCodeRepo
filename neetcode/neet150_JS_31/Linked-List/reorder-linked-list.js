// https://neetcode.io/problems/reorder-linked-list/question

/**
 * 1. Assumptions
 *  1. re-order the existing nodes
 * 
 * 2. input validation
 *  1. head
 *      - head instanceof ListNode
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if head === null || head.next === null: return head
 * 
 *  test cases
 *  1. odd number of nodes
 *      inputs
 *          head = [1, 2, 3]
 *      expected output
 *          [1, 3, 2]
 *  2. even number of nodes
 *      inputs
 *          head = [1, 2, 3, 4]
 *      expected output
 *          [1, 4, 2, 3]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  split the linked list in half.
 *  if even, right middle
 *  if odd, right node. e.g. [1,2,3] = [1,2] and [3] since alternate to [1,3,2]
 *  - accomplish this by slow and fast pointer. init slow = head, fast = head.next, then move slow by 1 and fast by 2 until fast === null and fast.next === null.
 *      This causes slow to stop at the end of the first half, then save the secondHead = slow.next, and disconnect the first half with slow.next = null.
 * 
 *  Now reverse the second half.
 * 
 *  merge first and second half.
 * 
 *  return dummy.next
 * 
 * 7. algos
 *  - linked list traversal
 * 
 * 8. data structures
 *  - linked lists
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(1)
 * 
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
        if (head === null || head.next === null) {
            return head
        }

        // Get half
        let slow = head
        let fast = head.next
        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
        }

        // disconnect
        let secHead = slow.next
        slow.next = null

        // reverse
        let revHead = null
        while (secHead !== null) {
            const nxt = secHead.next
            secHead.next = revHead
            revHead = secHead
            secHead = nxt
        }

        // merge
        const dummy = new ListNode()
        let itr = dummy
        while (head !== null && revHead !== null) {
            itr.next = head
            itr = itr.next
            head = head.next

            itr.next = revHead
            itr = itr.next
            revHead = revHead.next
        }

        if (head !== null) {
            itr.next = head
        } else if (revHead !== null) {
            itr.nexxt = revHead
        }

        return dummy.next
    }
}
