// https://leetcode.com/problems/reverse-linked-list/description/

/**
create a pointer prev to hold the previous node's reference
create an pointer itr for the current node's reference

while (itr !== null) {
    //store the current node's next in tmp var since re-assigning node.next to reverse linked list.
    next = itr.next

    itr.next = prev
    prev = itr
    itr = next
}

return prev     // since itr iterates until null, prev is the head of the reversed linked list.

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
var reverseList = function(head) {
    if (head === null) {
        return null
    }

    let prev = null
    let itr = head
    while (itr !== null) {
        const next = itr.next
        itr.next = prev
        prev = itr
        itr = next
    }

    return prev
};