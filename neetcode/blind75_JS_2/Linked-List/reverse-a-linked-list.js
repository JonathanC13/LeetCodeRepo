// https://neetcode.io/problems/reverse-a-linked-list

/*
edge case 1: if head === null: return head

create a var to hold the prev node, initial value = null

while (head !== null)
    create a var to hold the head.next since it will be disconnected
    head.next = prev
    prev = head
    head = next

after head === null, the new head of the reversed linked list is prev

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
        if (head === null) {
            return head
        }

        let prev = null
        while (head !== null) {
            const next = head.next
            head.next = prev
            prev = head
            head = next
        }

        return prev
    }
}
