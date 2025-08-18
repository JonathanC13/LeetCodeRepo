// https://leetcode.com/problems/rotate-list/

/**
itr = head
iterate linked list to last node, also record the length of the linked list
hook itr.next to head to create circular linked list

k = k % length

tail = head
ref = head
// iterate ref into offset position for tail
while (k > 1) {
    ref = ref.next
    k -= 1
}
// move tail into position
while (ref.next !== head) // the circular linked (if not linked would be null)
    tail = tail.next
    ref = ref.next

// the head of the rotated array
newHead = tail.next
// cut tail
tail.next = null

return newHead

- Time: O(n)    // n + n
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head === null) {
        return head
    }
    let len = 1
    let itr = head
    while (itr.next !== null) {
        itr = itr.next
        len += 1
    }
    itr.next = head

    k = k % len

    let tail = head
    let ref = head
    while (k > 0) {
        ref = ref.next
        k -= 1
    }
    while (ref.next !== head) {
        tail = tail.next
        ref = ref.next
    }
    const newHead = tail.next
    tail.next = null

    return newHead
};

/**
if (head === null) {
    return head
}

let tail = head
let len = 1
while (tail.next !== null) {
    len += 1
    tail = tail.next
}
tail.next = head

k = k % len
if (k !== 0) {
    for (let i = 0; i < len - k; i ++) {
        tail = tail.next
    }
}

const newHead = tail.next
tail.next = null

return newHead
 */