// https://neetcode.io/problems/linked-list-cycle-detection

/*
edge case 1: if head === null: return false

method 1: create a Set and store each Node referece, while (head !== null) iterate through and add to the Set
    if Node is seen again, return true
    if exits the while loop due to head = null, then no cycle return false

    - Time: O(n)
    - Space: O(n)

method 2: two pointers
    slow and fast pointers
    fast pointer moves 2x nodes than slow
    while fast !== null or fast.next !== null
        move the pointers and if they are assigned the same node, there is a cycle

    if exits the loop, then no cycle return false

    - Time: O(n)
    - Space: O(1)
    
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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if (head === null) {
            return false
        }

        let slow = head
        let fast = head.next

        while (fast && fast.next) {
            if (slow === fast) {
                return true
            }
            slow = slow.next
            fast = fast.next.next
        }

        return false
    }
}
