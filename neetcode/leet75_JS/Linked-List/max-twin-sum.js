// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

/*
edge case 1: if head === null: return 0

-- first, reverse the 2nd half of the linked list

// move a pointer (slow), to the node before the head of the 2nd half of the linked list
slow = head
fast = head.next
while fast and fast next !== null
    slow = slow.next
    fast = fast.next.next

itr = slow.next
slow.next = null    // disconnect 1st half from second half

// reverse 2nd half
let revHead = null
while (itr !== null) {
    const next = itr.next
    itr.next = revHead
    revHead = itr
    itr = next
}

--

-- iterate while either linked list's node !== null. Since in problem, it will always be even 'n', they will both always have a twin
let maxSum = Number.NEGATIVE INFIN
while (head !== null || revHead !== null)
    maxSum = Math.max(maxSum, (head !== null ? head.val : 0) + (revHead !== null ? revHead.val : 0))
    head = head.next
    revHead = revHead.next

return maxSum

- Time: O(n)    // n + n/2
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
 * @return {number}
 */
var pairSum = function(head) {
    if (head === null) {
        return 0
    }

    let slow = head
    let fast = head.next

    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    let itr = slow.next
    slow.next = null

    let revHead = null
    while (itr !== null) {
        const next = itr.next
        itr.next = revHead
        revHead = itr
        itr = next
    }

    // 
    let maxSum = Number.NEGATIVE_INFINITY
    while (head !== null || revHead !== null) {
        maxSum = Math.max(maxSum, (head !== null ? head.val : 0) + (revHead !== null ? revHead.val : 0))
        head = head.next
        revHead = revHead.next
    }

    return maxSum
};