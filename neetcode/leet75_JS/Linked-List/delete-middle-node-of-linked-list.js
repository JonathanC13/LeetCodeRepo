// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

/*
edge case 1: if head === null: return head

create a dummy node that points to the initial head // dummy so offset of slow and fast starts at 1 and if head needs to be deleted.
create a slow pointer to point at dummy
create a fast pointer to point at head

Since fast pointer is moving 2x nodes per slow, the slow pointer will land at the node right before the middle node to delete.
while fast !== null && fast.next !== null
    slow = slow.next
    fast.next.next

delete middle node
if slow.next !== null
    slow.next = slow.next.next

return dummy.next

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
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if (head === null) {
        return head
    }

    const dummy = new ListNode(0, head)
    let slow = dummy
    let fast = head

    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    if (slow.next !== null) {
        slow.next = slow.next.next
    }

    return dummy.next
};