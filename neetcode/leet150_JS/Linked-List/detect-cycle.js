// https://leetcode.com/problems/linked-list-cycle/description/?envType=study-plan-v2&envId=top-interview-150

/*
slow and fast pointer. if the pointers ever meet, then a cycle exists.

- Time: O(n/2)
- Space: O(1)
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null) {

        return false
    }

    let slow = head
    let fast = head.next

    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            return true
        }
    }

    return false
};