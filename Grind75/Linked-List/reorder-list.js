// https://leetcode.com/problems/reorder-list/description/

/**
//iterate to middle, if even number of nodes go to "first middle"
slow = head
fast = head.next
while (fast !== null && fast.next !== null)
    slow = slow.next
    fast = fast.next.next

// disconnected first half from second
slow2 = slow.next
slow.next = null

// reverse second half

// iterate both and add to result linked list
dummy = new ListNode()
itr = dummy
while (head !== null || revHead !== null) {
    if (head !== null)
        itr.next = head
        head = head.next
        itr = itr.next

    if (revHead !== null) 
        itr.next = revHead
        revHead = revHead.next
        itr = itr.next
}

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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head
    let fast = head.next
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    let slow2 = slow.next
    slow.next = null

    let revHead = null
    while (slow2 !== null) {
        const nxt = slow2.next
        slow2.next = revHead
        revHead = slow2
        slow2 = nxt
    }

    const dummy = new ListNode()
    let itr = dummy
    while (head !== null || revHead !== null) {
        if (head !== null) {
            itr.next = head
            head = head.next
            itr = itr.next
        }
        if (revHead !== null) {
            itr.next = revHead
            revHead = revHead.next
            itr = itr.next
        }
    }
    return dummy.next
};