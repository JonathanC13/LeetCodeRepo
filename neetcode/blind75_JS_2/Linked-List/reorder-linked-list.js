// https://neetcode.io/problems/reorder-linked-list

/*
edge case 1: if head === null: return head

Create a dummyNode where next = head

Use slow fast pointer technique to reach the middle node of the linked list. 
Slow pointer will reach node -1 of the middle
create pointer for the head of the list that will be reversed, revHead = slow.next
Remove the half from the first half. slow.next = null

reverse the linked list that starts with the slow pointer.
create new pointer to iterate

once reversed, 
alternate lists

return dummyNode.next

- Time: O(n). n/2 for slow fast, + n/2 for reverse, + n for merge
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
     * @return {void}
     */
    reorderList(head) {
        if (head === null) {
            return head
        }

        const dummyNode = new ListNode(0, head)
        let slow = head
        let fast = head.next
        
        // get slow to mid - 1 node
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }

        let revHead = slow.next
        slow.next = null
        
        // reverse
        let head2 = null
        while (revHead) {
            const next = revHead.next
            revHead.next = head2
            head2 = revHead
            revHead = next
        }

        // head2 is the head of the newly reversed list
        while (head && head2) {
            const headNext = head.next
            head.next = head2
            head = headNext

            const head2Next = head2.next
            head2.next = head
            head2 = head2Next
        }

        return dummyNode.next
    }
}
