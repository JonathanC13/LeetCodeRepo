// https://neetcode.io/problems/remove-node-from-end-of-linked-list

/*
edge case 1: if head === null: return head

create a pointer itr at head
create a dummyNode to point to head
create a pointer remItr at dummyNode

move itr forward while n > 0, this will put a pointer in the mirror position of the node to be removed

while (itr !== null) {
    move itr forward
    move remItr forward
}

since remItr started at dummyNode, it will end at the node before the one to be removed.

remove next node
remIter.next = remIter.next.next

return dummyNode.next

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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if (head === null) {
            return head
        }

        const dummyNode = new ListNode(0, head)
        let itr = head
        let remItr = dummyNode

        while (n > 0) {
            if (itr === null) {
                // n is larger than the number of nodes
                return head
            }
            itr = itr.next
            n -= 1
        }

        while (itr !== null) {
            remItr = remItr.next
            itr = itr.next
        }

        remItr.next = remItr.next.next

        return dummyNode.next
    }
}
