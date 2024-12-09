// https://neetcode.io/problems/add-two-numbers

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0
        let value = 0
        let head = new ListNode(0)
        let iter = head
        let newNode = null
        
        while (l1 || l2) {
            let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry

            carry = Math.floor(sum / 10)
            value = sum % 10

            newNode = new ListNode(value)
            iter.next = newNode

            iter = iter.next

            l1 = l1 ? l1.next : null
            l2 = l2 ? l2.next : null
        }

        if (carry !== 0) {
            newNode = new ListNode(carry)
            iter.next = newNode
        }

        return head.next
    }
}
