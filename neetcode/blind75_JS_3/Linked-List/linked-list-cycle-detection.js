// https://neetcode.io/problems/linked-list-cycle-detection/question

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
 *  edge case
 *  1. if head === null || head.next === null: return false
 * 
 *  test cases
 *  1. no cycle
 *      inputs
 *          head = [1, 2, 3, 4, 5]
 *      expected output
 *          false
 * 
 *  2. has cycle
 *      inputs
 *          head = [1, 2, 3, 4, 2]
 *      expected output
 *          true
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  create a slow and fast pointer where slow moves by 1 node and fast moves by 2
 *  if there is no cycle, fast will terminate once at the end of the linked list.
 *  if there is a cycle, slow and fast will eventually land on the same node
 * 
 *  while fast !== null && fast.next !== null
 *      slow = slow.next
 *      fast = fast.next.next
 *      if slow === fast: return true
 *  
 *  return false
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
     * @return {boolean}
     */
    hasCycle(head) {
        if (head === null || head.next === null) {
            return false
        }

        let slow = head
        let fast = head
        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
            if (slow === fast) {
                return true
            }
        }

        return false
    }
}
