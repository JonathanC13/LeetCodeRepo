// https://leetcode.com/problems/swap-nodes-in-pairs/description/

/**
create dummy node where .next references head
partTail = dummy
itr = head

while (itr !== null) {
    // check if enough nodes to reverse
    let revHead = itr
    n = 2
    while (n > 1 && revHead !== null) {
        revHead = revHead.next
        n -= 1
    }
    if (n > 1) {    // not enough nodes, don't need to reverse
        partTail.next = itr
        break
    }
    partTail.next = revHead
    partTail = itr

    n = 2
    prev = null
    while (n > 0) {
        const next = itr.next
        itr.next = prev
        prev = next
        itr = next
        n += 1
    }

}
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
var swapPairs = function(head) {
    if (head === null) {
        return head
    }

    const dummy = new ListNode(0, head)
    let partTail = dummy
    let itr = head

    while (itr !== null) {
        let n = 2
        let revHead = itr
        while (n > 1 && revHead !== null) { // n > 1 so that the revHead lands on the node that is the head for the reversed pair.
            revHead = revHead.next
            n -= 1
        }
        
        if (revHead === null) {
            partTail.next = itr // since not enough nodes to reverse, the tail of the previous partition connects to the unaltered this partition.
            break
        }

        partTail.next = revHead // connect tail of previous partition to head of the partition that will be reversed
        partTail = itr  // assign to the tail of the reversed partition

        // reverse partition
        n = 2
        let prev = null
        while (n > 0 && itr !== null) { // n > 0, so that last iteration will put itr into the first node of the next partition
            const next = itr.next
            itr.next = prev
            prev = itr
            itr = next
            n -= 1
        }
    }

    return dummy.next
};