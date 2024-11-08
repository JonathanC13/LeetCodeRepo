// https://neetcode.io/problems/reverse-a-linked-list

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
        if (head === null){
            return head
        }
        let prev = null
        let next = head.next

        while (next !== null) {
            head.next = prev

            prev = head
            head = next
            next = head.next
        }

        head.next = prev
        return head
    }
}
