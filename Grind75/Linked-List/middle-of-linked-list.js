// https://leetcode.com/problems/middle-of-the-linked-list/description/

/**
create slow pointer at head
create fast pointer at head    // by initializing slow and fast to start at the same node will get cause the slow pointer to land on the "second middle" node if even number of nodes

while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
}

return slow

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
var middleNode = function(head) {
    if (head === null) {
        return null
    }

    let slow = head
    let fast = head

    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
};