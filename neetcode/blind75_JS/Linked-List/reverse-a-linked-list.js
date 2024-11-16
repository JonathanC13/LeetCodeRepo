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

/*
Need to iterate the linked list while keeping track of the previous node to reverse the link
Time: O(n), n is the number of nodes
Space: O(1)
*/

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null
        let curr = head

        while(curr) {
            const tmp = curr.next
            curr.next = prev
            prev = curr
            curr = tmp
        }

        return prev
    }
}
