// https://leetcode.com/problems/add-two-numbers/description/

/**
create dummyNode where the .next is the reference to the result linked list
itr = dummyNode
carry = 0
while ((l1 !== null && l2 !== null) || carry !== 0) {
    v1 = 0
    if (l1 !== null) 
        v1 = l1.val
        l1 = l1.next

    v2 = 0
    if (l2 !== null)
        v2 = l2.val
        l2 = l2.next

    vR = v1 + v2 + carry
    v3 = vR % 10
    carry = Math.floor(vR / 10)

    itr.next = new ListNode(v3)
    itr = itr.next
}

if (l1 !== null) {
    itr.next = l1
} else if (l2 !== null) {
    itr.next = l2
}

return dummyNode.next

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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode()
    let itr = dummy

    let carry = 0
    while ((l1 !== null && l2!== null) || carry !== 0) {
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
        let vR = v1 + v2 + carry
        let v3 = vR % 10
        carry = Math.floor(vR / 10)
        itr.next = new ListNode(v3)
        itr = itr.next
    }

    if (l1 !== null) {
        itr.next = l1
    } else if (l2 !== null) {
        itr.next = l2
    }

    return dummy.next
};