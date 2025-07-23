// https://leetcode.com/problems/sort-list/description/?envType=study-plan-v2&envId=top-interview-150

/*
merge sort.

recursive split
    if (node.next === null) {
        // single node
        return node
    }

    // get to the mid of the linked list to split into halves
    slow = head
    fast = head
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    // slow is at the tail of the left half
    right = slow.next
    slow.next = null

    leftHalf = split(head)
    rightHalf = split(right)

    return mergeSort(leftHalf, rightHalf)

mergeSort
    create dummy node
    itr = dummy

    while (left !== null && right !== null) {
        if left.val <= right.val
            itr.next = left
            left = left.next
        else
            itr.next = right
            right = right.next

        itr = itr.next
    }

    if (left !== null)
        itr.next = left
    else if (right !== null)
        itr.next = right

    return dummy.next
    
- Time: O(n * log n)    // sorting each half is log n (since sorting a small section) and perform n times due to split into smallest entity which is size 1.
- Space: O(log n)
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const mergeLists = function(left, right) {
    console.log('merge: ', left, right)
    const dummy = new ListNode(0)
    let itr = dummy

    while (left !== null && right !== null) {
        if (left.val <= right.val) {
            itr.next = left 
            left = left.next
        } else {
            itr.next = right
            right = right.next
        }
        itr = itr.next
    }

    if (left !== null) {
        itr.next = left
    } else if (right !== null) {
        itr.next = right
    }

    return dummy.next
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (head === null || head.next === null) {
        return head
    }

    let slow = head
    let fast = head.next
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    const right = slow.next
    slow.next = null

    const leftHalf = sortList(head)
    const rightHalf = sortList(right)

    return mergeLists(leftHalf, rightHalf)
};