// https://neetcode.io/problems/reverse-a-linked-list/question

/**
 * 1. Assumptions
 *  1. None
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
 *  1. 2 nodes
 *      inputs
 *          head = [0, 1]
 *      expected output
 *          [1, 0]
 *  2. 3 nodes
 *      inputs
 *          head = [0, 1, 2]
 *      expected output
 *          [2, 1, 0]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  create a pointer for the previous node reversed, initialize to null
 *  traverse the linked list while head !== null
 *      save the next node = head.next, since changing the link
 *      reverse by head.next = previous
 *      the new previous is the current node, prev = head
 *      move head to next node to reverse, head = savedNext
 * 
 *  return previous, since head went to null the 'previous' is the head of the reversed linked list
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
     * @return {ListNode}
     */
    reverseList(head) {
        if (head === null || head.next === null) {
            return head
        }

        let previous = null
        while (head !== null) {
            const savedNext = head.next
            head.next = previous
            previous = head
            head = savedNext
        }

        return previous
    }
}
