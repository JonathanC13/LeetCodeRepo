// https://neetcode.io/problems/add-two-numbers/question

/**
 * 1. Assumptions
 *  1. node values are [0,9]
 * 
 * 2. input validation
 *  1. l1 and l2
 *      - l1 instanceof ListNode
 * 
 * 3. time and space contraints
 *  BTTC: O(n)  // n = longest of l1 and l2
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. ...
 * 
 *  test cases
 *  1. l1 and l2 are different length
 *      inputs
 *          l1 = [1,8,3], l2 = [2,3]
 *      expected output
 *          [3,1,4]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  since reversed, calculate the sum at the nodes in the same positon + carry
 * 
 * 7. algos
 *  - linked list traversal
 * 
 * 8. data structures
 *  - Linked list
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n)
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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0
        const dummy = new ListNode()
        let itr = dummy

        while (l1 !== null || l2 !== null) {
            let v1 = 0
            if (l1 !== null) {
                v1 = l1.val
                l1 = l1.next
            }
            let v2 = 0
            if (l2 !== null) {
                v2 = l2.val
                l2 = l2.next
            }

            let sum = v1 + v2 + carry
            itr.next = new ListNode(sum % 10)
            itr = itr.next
            carry = Math.floor(sum / 10)
        }

        if (carry !== 0) {
            itr.next = new ListNode(carry)
        }

        return dummy.next
    }
}
