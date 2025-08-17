// https://leetcode.com/problems/odd-even-linked-list/

/**
create dummy node
itr = head
create dummy for Odd indexed nodes
odd = dummyOdd
create dummy for Even indexed nodes
even = dummyEven

let i = 1
while (itr !== null) {
    if (i % 2 === 0) {
        // even
        even.next = itr
        even = even.next
    } else {
        odd.next = itr
        odd = odd.next
    }
    itr = itr.next
    i += 1
}

odd.next = dummyEven.next
return dummyOdd.next

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
var oddEvenList = function(head) {
    if (head === null) {
        return head
    }
    let dummy = new ListNode()
    let itr = head
    let dummyOdd = new ListNode()
    let odd = dummyOdd
    let dummyEven = new ListNode()
    let even = dummyEven

    let i = 1
    while (itr !== null) {
        if (i % 2 === 0) {
            even.next = itr
            even = even.next
        } else {
            odd.next = itr
            odd = odd.next
        }
        itr = itr.next
        i += 1
    }

    even.next = null
    odd.next = dummyEven.next
    dummy.next = dummyOdd.next
    return dummy.next
};