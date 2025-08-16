// https://leetcode.com/problems/palindrome-linked-list/description/

/**
slow = head
fast = head.next    // initial for the "first middle" if even number of nodes

// get the "first middle" if even number of nodes
// Time: O(n)
while (fast !== null && fast.next !== null)
    slow = slow.next
    fast = fast.next.next

// disconnect first half to second
slow2 = slow.next
slow.next = null

// Time: O(n/2)
revHead = null
reverse the second half of the list

// compare the first half, starting at head, to the reversed list, starting at prev
// Time: O(n)
while (head !== null || revHead !== null) {
    if (head === null || revHead === null || (head.val !== revHead.val)) {
        return false
    }
    head = head.next
    revHead = revHead.next
}
return true

- Time: O(n)    // n + n/2 + n ~= O(n)
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null) {
        return true
    }

    let slow = head
    let fast = head.next
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }  

    let slow2 = slow.next
    slow.next = null
    let revHead = null
    while (slow2 !== null) {
        const next = slow2.next
        slow2.next = revHead
        revHead = slow2
        slow2 = next
    }

    // if odd number of nodes, first half will have 1 extra node. Therefore if revHead becomes null, just quit since it is the "true" middle
    while (head !== null && revHead !== null) {
        if (head.val !== revHead.val) {
            return false
        }
        revHead = revHead.next
        head = head.next
    }

    return true
};