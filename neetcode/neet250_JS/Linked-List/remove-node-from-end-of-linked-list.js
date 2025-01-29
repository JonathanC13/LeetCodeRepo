// https://neetcode.io/problems/remove-node-from-end-of-linked-list

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

create a dummyNode and assign next to the head
create a itr1 ans assign to dummyNode, this is used to keep a reference for the node previous to the one to be removed.

itr 2 = head
Since linked list and don't have the length, to find the position from the end find the reflected node in the first half.
while (n > 0): move itr2 = itr2.next

now to put itr1 to the node right befor the one to be removed
while (itr2 !== null)
    move both itr1 and itr2 forward by one

at this point itr1 is right before the node to be removed, so just adjust the next
itr1.next = itr1.next.next

return dummyNode.next

- Time: O(x). n to move to position n. + m to move into removal position
- Space: O(1)

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
        let itr1 = dummy
        let itr2 = head
        while (n > 0) {
            itr2 = itr2.next
            n -= 1
        }

        while (itr2) {
            itr1 = itr1.next
            itr2 = itr2.next
        }
        
        itr1.next = itr1.next.next

        return dummy.next
    }
}
