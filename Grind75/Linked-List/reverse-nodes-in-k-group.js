// https://leetcode.com/problems/reverse-nodes-in-k-group/description/

/**
create dummy node
create prevTail = dummy // this node's .next will link to the head of the the partition
itr = head

while (itr !== null) {
    // get to the last node of the partition to be reversed
    n = 1   // start at 1 for the current node
    revHead = itr   // this will go to the head of the reversed partition to check if there are enough nodes to reverse
    while (n < k && revHead !== null) {
        revHead = revHead.next
        n += 1
    }

    if (revHead === null) // not enough nodes to reverse. link tail of previous parition to un-altered head of this partition
        prevTail.next = itr
        break
    
    prevTail.next = revHead
    revHead = revHead.next
    prevTail = itr  // new tail of partition
    prev = null
    while (itr !== revHead.next) {
        const nxt = itr.next
        itr.next = prev
        prev = itr
        itr = nxt
    }
}

return dummy.next

- Time: O(n)  // n + (k*n)/k  = n + n
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
var reverseKGroup = function(head, k) {
    const dummy = new ListNode()
    let prevTail = dummy
    let itr = head

    while (itr !== null) {
        n = 1
        let revHead = itr
        while (n < k && revHead !== null) {
            revHead = revHead.next
            n += 1
        }
        if (revHead === null) {
            prevTail.next = itr
            break
        }

        prevTail.next = revHead
        revHead = revHead.next
        prevTail = itr
        let prev = null
        while (itr !== revHead) {
            const nxt = itr.next
            itr.next = prev
            prev = itr
            itr = nxt
        }
    }

    return dummy.next
};