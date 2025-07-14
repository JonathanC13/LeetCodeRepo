// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/?envType=study-plan-v2&envId=top-interview-150

/*
create dummy with next = head
front = dummy
conn = dummy
itr = head
let count = 0
while (itr !== null)
    count = 0
    prevVal = itr.val
    while (itr !== null && itr.val === prevVal)
        count += 1
        conn = conn.next
        itr = itr.next

    if (count === 1)
        front.next = conn
        front = conn

if count > 1 at the end, front.next = null

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

const remDupsKeepSingle = function(head) {
    let dummy = new ListNode(0, head)
    let tail = dummy
    let itr = head
    while (itr !== null) {
        let prevVal = itr.val
        let anchor = itr
        while (itr !== null && itr.val === prevVal) {
            itr = itr.next
        }

        tail.next = anchor
        tail = tail.next
    }

    tail.next = null
    return dummy.next
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head === null) {
        return head
    }

    // return remDupsKeepSingle(head)

    const dummy = new ListNode(0, head)
    let front = dummy
    let conn = dummy
    let itr = head
    let cnt = 0
    while (itr !== null) {
        cnt = 0
        let prevVal = itr.val
        while (itr !== null && itr.val === prevVal) {
            cnt += 1
            conn = conn.next
            itr = itr.next
        }
        
        if (cnt === 1) {
            front.next = conn
            front = conn
        }
    }

    if (cnt > 1) {
        front.next = null
    }

    return dummy.next
};
