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

/*
Since the lists are reversed, the place values of l1 and l2 are lined up. Create a new Linked list and populate by simply adding the current node value of l1 and l2 and keeping track of the carry.

const dummy = new ListNode()
let itr = dummy
let carry = 0
while (l1 || l2) {
    let sum = carry
    if (l1) {
        sum += l1.val
        l1 = l1.next
    }
    if (l2) {
        sum += l2.val
        l2 = l2.next
    }

    const newNode = new ListNode(sum % 10)
    carry = Math.floor(sum / 10)
    itr.next = newNode
    itr = itr.next
}

if (carry) {
    itr.next = new ListNode(carry)
}

return dummy.next

- Time: O(n). n is the max length of l1 and l2
- Space: O(n). new linked list
*/

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode()
        let itr = dummy
        let carry = 0
        while (l1 || l2) {
            let sum = carry
            if (l1) {
                sum += l1.val
                l1 = l1.next
            }
            if (l2) {
                sum += l2.val
                l2 = l2.next
            }
            
            const newNode = new ListNode(sum % 10)
            carry = Math.floor(sum / 10)
            itr.next = newNode
            itr = itr.next
        }

        if (carry) {
            itr.next = new ListNode(carry)
        }

        return dummy.next
    }
}
