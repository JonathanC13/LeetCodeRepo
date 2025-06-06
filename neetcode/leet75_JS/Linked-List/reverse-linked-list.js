// https://leetcode.com/problems/reverse-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

/*
create a pointer to the prev node, init null

iterate the linked list, while head !== null
    save the head.next
    new head.next = prev node
    prev = head
    head = next

return prev

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
    let prev = null

    while (head !== null) {
        const next = head.next
        head.next = prev
        prev = head
        head = next
    }

    return prev
};