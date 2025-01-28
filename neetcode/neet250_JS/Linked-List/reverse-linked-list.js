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
- edge case 1: if head === null: return head

prev = null

while (head !== null) {
    const next = head.next

    head.next = prev
    prev = head
    head = next
}

return prev

- Time: O(n). n = number of nodes
- Space: O(1)
*/

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (head === null) {
            return head
        }

        let prev = null
        while(head !== null) {
            const next = head.next

            head.next = prev
            prev = head
            head = next
        }

        return prev
    }
}
