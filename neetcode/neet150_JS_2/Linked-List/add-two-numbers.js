// https://neetcode.io/problems/add-two-numbers
// 
/*
Number is reversed in the linked lists because when adding, add the lowest place first and record carry

- Time: O(n)    // n = longest linked list
- Space: O(n)
*/

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
        if (l1 === null) {
            return l2
        } else if (l2 === null) {
            return l1
        }

        const head = new ListNode()
        let itr = head
        let carry = 0

        while (l1 !== null || l2 !== null) {
            let sum = (l1 !== null ? l1.val : 0 ) + (l2 !== null ? l2.val : 0) + carry

            carry = Math.floor(sum / 10)
            let digit = sum % 10

            itr.next = new ListNode(digit)
            itr = itr.next

            if (l1 !== null) {
                l1 = l1.next
            }
            if (l2 !== null) {
                l2 = l2.next
            }
            
        }

        if (carry !== 0) {
            itr.next = new ListNode(carry)
        }

        return head.next

    }
}

