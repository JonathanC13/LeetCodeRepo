// https://neetcode.io/problems/reverse-a-linked-list

/*
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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null
        while (head !== null) {
            const next = head.next  // save next since head.next will be re-assigned to prev
            head.next = prev
            prev = head
            head = next
        }

        return prev // since head will be null at the end to indicate no more elements to reverse.
    }
}
