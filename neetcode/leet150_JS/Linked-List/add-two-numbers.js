// https://leetcode.com/problems/add-two-numbers/description/?envType=study-plan-v2&envId=top-interview-150

/*

head = dummy
itr = head

carry = 0
iterate while (either l1 or l2 has values)
    v1 = 0
    if l1 is not null
        v1 = l1.val

    if l2 is not null
        v2 = l2.val

    sum = v1 + v2 + carry
    
    if sum >= 10
        carry = floor(sum / 10)

    itr.next = new ListNode(sum % 10)
    itr = itr.next

if carry still present (!== 0)
    final node is the carry

return dummy.next

- Time: O(n)    // n = longest of l1 and l2
- Space: O(n)
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (l1 === null && l2 === null) {
        return null
    }

    const dummy = new ListNode(0)
    let itr = dummy
    let carry = 0

    while (l1 !== null || l2 !== null) {
        let v1 = 0
        if (l1 !== null) {
            v1 = l1.val
            l1 = l1.next
        }

        let v2 = 0
        if (l2 !== null) {
            v2 = l2.val
            l2 = l2.next
        }

        const sum = v1 + v2 + carry
        carry = Math.floor(sum / 10)

        itr.next = new ListNode(sum % 10)
        itr = itr.next
    }

    if (carry !== 0) {
        itr.next = new ListNode(carry)
    }

    return dummy.next
};