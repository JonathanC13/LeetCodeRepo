// https://neetcode.io/problems/remove-node-from-end-of-linked-list/question

/**
 * 1. Assumptions
 *  1. No cycles
 * 
 * 2. input validation
 *  1. head
 *      - head instanceof ListNode
 *  2. n
 *      - typeof n === 'number'
 *      - n > 0
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if head === null: return head
 * 
 *  test cases
 *  1. removing head
 *      inputs
 *          head = [1, 2, 3]
 *          n = 3
 *      expected output
 *          [2, 3]
 *  2. not removing head
 *      inputs
 *          head = [1, 2, 3]
 *          n = 2
 *      expected output
 *          [1, 3]
 *  3. removing tail
 *      inputs
 *          head = [1, 2, 3]
 *          n = 1
 *      expected output
 *          [1, 2]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  create a dummy and dummy.next = head
 *  itr = dummy
 *  - need to move itr to node - 1 of target
 *  move head forward while n > 0, this puts the offset between itr and head by n nodes
 * 
 *  Then move itr and head forward by 1 until head === null. Since the offset between itr and head is n, once head === null, then itr will be at nth + 1 from the end
 * 
 *  remove itr.next from the linked list
 *  return dummy.next
 * 
 * 7. algos
 *  - linked list traversal
 * 
 * 8. data structures
 *  - linked list
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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if (head === null) {
            return head
        }

        const dummy = new ListNode(0, head)
        let itr = dummy
        // create offset of n nodes between itr and head
        while (n > 0) {
            head = head.next
            n -= 1
        }

        // move itr to nth + 1 node from end
        while (head !== null) {
            itr = itr.next
            head = head.next
        }

        // remove nth node from end
        const nth = itr.next
        itr.next = itr.next.next    // link over nth from end node
        nth.next = null // disconnect for garbage collection

        return dummy.next
    }
}
