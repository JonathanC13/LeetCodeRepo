// https://leetcode.com/problems/reverse-linked-list-ii/description/?envType=study-plan-v2&envId=top-interview-150

/*
create dummy node
dummy.next = head
front ptr = dummy
itr = head
i = 1

iterate i to left; move front to left -1 node and itr to left node

tail = itr

prev = null
nxt = itr
//reverse
while (itr !== null && i <= right)
    nxt = itr.next
    itr.next = prev
    front.next = itr

    prev = itr
    itr = nxt
    i += 1

tail.next = nxt

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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (head === null) {
        return null
    }

    const dummy = new ListNode(0, head)
    let front = dummy
    let itr = head
    let i = 1

    while (itr !== null && i < left) {
        i += 1
        front = front.next
        itr = itr.next
    }

    let tail = itr

    let prev = null
    let nxt = itr

    while (itr !== null && i <= right) {
        nxt = itr.next
        front.next = itr
        itr.next = prev

        prev = itr
        itr = nxt
        i += 1
    }

    tail.next = itr

    return dummy.next
};