// https://neetcode.io/problems/remove-node-from-end-of-linked-list

/*
create a dummy node and point to the head and then point an iterator to it as the 'remover'. This is because:
    1. By pointing to 1 node before head, we can get to the node right before the one for removal.
    2. Edge case that the head node is the one to remove.

Find the mirror position node, assign an iterator to head. while (n > 0) move the iterator.
Then while iterator !== null. Move both 'remover' and iterator forward by 1 node.
After, the 'remover' will be right before the node that is to be removed.

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
        const dummyNode = new ListNode(0, head)
        let removerItr = dummyNode

        let itr = head
        while (n > 0) {
            itr = itr.next
            n -= 1
        }

        while (itr !== null) {
            removerItr = removerItr.next
            itr = itr.next
        }
        console.log(removerItr.val)

        // remove
        removerItr.next = removerItr.next.next

        return dummyNode.next
    }
}
