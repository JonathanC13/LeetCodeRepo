// https://leetcode.com/problems/partition-list/description/?envType=study-plan-v2&envId=top-interview-150

/*
* Misleading image, x is not a value of a node, it is arbitrarily chosen. 

The description for this problem is somewhat very misleading.
I took at least 15 min and tested serval test cases so that I understood what it was asking for.

Let me briefly explain it to relieve your pain.

Basically, it asks us:
reorder the sequence by the given number x

The rules are:

    1. Any number that is less than x has to be before x, and maintain the relative order with thoese that are less than x but already before x.
    e.g. [3,4,1,2], target = 4 -> [3,1,2,4], so the order of [3,1,2] is maintained.
    2. Any number that is greater than x but already before x will still be before x, but all of them come after those that are less than x and at the same time maintain their relative order.
    e.g. [3,6,5,4,1,2] target = 4 -> [3,1,2,6,5,4]
    3. Any number that is greater than x and after x will only need to maintain their relative order
    e.g. [3,6,5,4,8,1,7,2] target = 4 -> [3,1,2,6,5,4,8,7]

create a dummy head for nodes less than value x
create a dummy head for nodes greater or equal to value x

iterate list and append

after link lesser to greater linked list

return lesser dummy.next

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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (head === null) {
        return null
    }

    const less = new ListNode(0)
    let ptrl = less
    const gte = new ListNode(0)
    let ptrg = gte

    let itr = head
    while (itr !== null) {
        if (itr.val < x) {
            ptrl.next = itr
            ptrl = ptrl.next
        } else {
            ptrg.next = itr
            ptrg = ptrg.next
        }
        itr = itr.next
    }
    ptrl.next = gte.next
    ptrg.next = null

    return less.next
};