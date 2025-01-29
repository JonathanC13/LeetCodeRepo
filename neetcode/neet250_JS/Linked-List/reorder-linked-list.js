// https://neetcode.io/problems/reorder-linked-list

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

Since need the order of [0, n-1, 1, n-2, 2, n-3, ...], get half of the linked list and reverse it, then merge

to get to the half way of the lined list, use a slow = head and fast pointer = head.next, which is 2x faster than slow.
once fast or fast.next === null, remove the tail of the 1st partition and adjust for the head for the 2nd partition.

to reverse the 2nd partition, create prev = null
while (slow !== null), const next = slow.next; slow.next = prev; prev = slow; slow = next
at the end of the loop, prev is the head of the reversed 2nd partition

merge
const mergeHead = new ListNode(0)
let itr = head
while (head && prev)
    itr.next = head
    head = head.next

    itr.next = prev.next
    prev = prev.next

if (head)
    itr.next = head
if (prev)
    itr.next = prev

return mergeHead.next

- Time: O(n). n to traverse to mid and then reverse to end. + n to merge
- Space: O(1)
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

        let slow = head
        let fast = head.next
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        let n1 = slow.next
        slow.next = null

        let prev = null
        while (n1) {
            const next = n1.next
            n1.next = prev
            prev = n1
            n1 = next
        }

        const mergeHead = new ListNode()
        let itr  = mergeHead
        while (head && prev) {
            itr.next = head
            head = head.next
            itr = itr.next

            itr.next = prev
            prev = prev.next
            itr = itr.next
        }

        if (head) {
            itr.next = head
        }
        if (prev) {
            itr.next = prev
        }

        return mergeHead.next
    }
}
