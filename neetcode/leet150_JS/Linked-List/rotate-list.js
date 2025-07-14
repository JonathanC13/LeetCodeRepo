// https://leetcode.com/problems/rotate-list/?envType=study-plan-v2&envId=top-interview-150

/*
create dummy with next = head
tail = dummy
itr = head

iterate linked list once to get the length
    tail = tail.next
    itr = itr.next
    len += 1

connect tail.next to head to create circular

k = k % len // this is to get the min rotation for the same outcome

if (k !== 0) {
    // find location to cut; since new tail is tail idx - k, then new head is tail - k + 1. Due to linked list forward, to get to new tail it is forward 0 to < len - k
    for (let i = 0; i < len - k; i ++)
        tail = tail.next
}

const newHead = tail.next
tail.next = null
return newHead

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

/*
- Time: O(n)
- Space: O(1)

4ms
*/
const firstSoln = function(head, k) {
    if (head === null || k === 0) {
        return head
    }

    let len = 0
    let itr = head
    while (itr !== null) {
        len += 1
        itr = itr.next
    }

    k = k % len
    console.log(k)
    if (k === 0) {
        return head
    }

    const dummy = new ListNode(0, head)
    let tail = dummy
    itr = head
    let i = 0
    while (i < k && itr !== null) {
        i += 1
        itr = itr.next
    }

    while (itr !== null) {
        tail = tail.next
        itr = itr.next
    }

    let newHead = tail.next
    tail.next = null
    itr = newHead
    while (itr.next !== null) {
        itr = itr.next
    }
    itr.next = head

    return newHead
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
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
    
};