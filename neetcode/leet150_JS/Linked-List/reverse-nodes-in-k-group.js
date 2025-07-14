// https://leetcode.com/problems/reverse-nodes-in-k-group/?envType=study-plan-v2&envId=top-interview-150

/*
if (head === null) return null

create a dummy with next point to head
front = dummy
itr = head
tailConn = itr

while(itr !== null)
    i = 1

    // determine if have enough nodes to reverse
    while (i <= k && tailConn !== null)
        i += 1
        tailConn = tailConn.next

    if (i <= k) {
        break
    }

    //reverse
    i = 1
    prev = tailConn
    tail = itr
    nxt = itr
    while (i <= k && itr !== null) {
        i += 1
        nxt = itr.next
        front.next = itr
        itr.next = prev

        prev = itr
        itr = nxt
    }
    front = tail

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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (head === null) {
        return head
    }

    const dummy = new ListNode(0, head)
    let front = dummy
    let itr = head
    let tailConn = itr

    while (itr !== null) {
        let i = 1
        while (i <= k && tailConn !== null) {
            i += 1
            tailConn = tailConn.next
        }

        if (i <= k) {
            break
        }

        i = 1
        let tail = itr
        let prev = tailConn
        let nxt = itr
        while (i <= k && itr !== null) {
            i += 1
            nxt = itr.next
            itr.next = prev
            front.next = itr

            prev = itr
            itr = nxt
        }
        front = tail
    }

    return dummy.next
};