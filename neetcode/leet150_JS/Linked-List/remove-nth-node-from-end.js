// https://leetcode.com/problems/remove-nth-node-from-end-of-list/?envType=study-plan-v2&envId=top-interview-150

/*
create a dummy with next to head
itr = head

i = 1
1. move the itr while i <= n
and then front = dummy
2. move front and itr by 1 while itr !== null
This will put front one node before the one to be removed.

Remove the node
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head === null) {
        return head
    }

    const dummy = new ListNode(0, head)
    let front = dummy
    let itr = head

    let i = 1
    while (i <= n && itr !== null) {
        i += 1
        itr = itr.next
    }
    
    // if i <= n: then ith node from end is out of range
    if (i <= n) {return head}

    while (itr !== null) {
        front = front.next
        itr = itr.next
    }

    const conn = front.next.next
    // remove nth node next
    front.next.next = null
    // connect to remove from linked list
    front.next = conn
    
    return dummy.next
};