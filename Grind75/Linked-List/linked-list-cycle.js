// https://leetcode.com/problems/linked-list-cycle/description/

/**
create a slow pointer at head
create a fast pointer at head.next

// if there is no cycle, the fast will terminate at null
// if there is a cycle, the slow and fast will eventually reference the same node.
while (fast !== null && fast.next !== null)
    if (slow === fast) {
        return true
    }
    slow = slow.next
    fast = fast.next.next

return false



- Time: O(n)
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
        if (slow === fast) {
            return true
        }
        slow = slow.next
        fast = fast.next.next
    }
    return false
};