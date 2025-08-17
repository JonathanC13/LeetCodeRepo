// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

/**
create a pointer at head
while n > 0
    ptr = ptr.next  // from ptr to end, this is the offset dummy has to move to be placed before the node that needs to be removed

create dummy
dummy.next = head
itr = dummy

while (ptr !== null) {
    itr = itr.next
    ptr = ptr.next
}

itr.next = itr.next.next

return dummy.next   // since head could have been removed.

- Time: O(n)
- Space: O(1)

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head === null) {
        return head
    }

    let ptr = head
    while (n > 0 && ptr !== null) {
        ptr = ptr.next
        n -= 1
    }
    if (n > 0) {
        // n is greater than number of elements
        return head
    }

    const dummy = new ListNode(0, head)
    let itr = dummy
    while (ptr !== null) {
        itr = itr.next
        ptr = ptr.next
    }
    itr.next = itr.next.next

    return dummy.next
};