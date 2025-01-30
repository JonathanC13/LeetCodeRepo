// https://leetcode.com/problems/reverse-linked-list-ii/

/*
Since left can be 1. Need dummy Node to point at the current head.

get the left position of the first index to reverse.
dummy = new ListNode(0, head)
prev = dummy

// prev is the node before the reversed porition of the linked list
for (l = 0; l < left - 1; l ++) {
    prev = prev.next
}
let itr = prev.next

// ex 4 - 2 = at most 2 swaps because we reverse the head of the reversed portion and the tail (itr)
for (let swaps = 0; swaps < right - left; swaps ++) {
    // need to save the current head of the reversed portion because we need to link the new head to it after.
    const prevH = p.next

    // make the node pointed TO by the tail the new head of the reversed portion
    p.next = itr.next
    // assign the tail to the node that is front of the non reversed.
    itr.next = itr.next.next
    // assign the new head of the reversed portion to prev head
    p.next.next = prevH
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (head === null) {
        return head
    }

    //get the left position of the first index to reverse.
    dummy = new ListNode(0, head)
    prev = dummy

    // prev is the node before the reversed porition of the linked list
    for (l = 0; l < left - 1; l ++) {
        prev = prev.next
    }
    let itr = prev.next

    // ex 4 - 2 = at most 2 swaps because we reverse the head of the reversed portion and the tail (itr)
    for (let swaps = 0; swaps < right - left; swaps ++) {
        // need to save the current head of the reversed portion because we need to link the new head to it after.
        const prevH = prev.next

        // make the node pointed TO by the tail the new head of the reversed portion
        prev.next = itr.next
        // assign the tail to the node that is front of the non reversed.
        itr.next = itr.next.next
        // assign the new head of the reversed portion to prev head
        prev.next.next = prevH
    }

    return dummy.next
};