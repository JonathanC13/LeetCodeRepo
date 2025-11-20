// https://leetcode.com/problems/linked-list-cycle/description/

/**
1. Assumptions
    1. All nodes are connected in the single linked list

2. input validation
    1. Linked list of ListNode objects

3. time and space constraints
    BTTC: O(n)
    Space: O(1)

4. edge cases and some test cases
    edge cases
    1. no nodes
        if (head === null) {return false}
    test cases
    1. 1 node and no cycle
        input
            head = ListNode(1) -> null
        expected output
            false
    2. 1 node and cycle
        input
            head = ListNode(1) -> head

5. visualize by drawing and manually solve
6. break into subproblems
    To detect cycles in a singly linked list, use two pointer solution.
    Create variables slow and fast where:
        1. slow traverses one node at a time
        2. fast traverses two nodes at a time
        * Note, for this problem fast can either start at init slow or slow.next
            1. If fast init to slow, for even number of nodes. When fast or fast.next === null, slow will land on the right middle
            2. if fast init to slow.next, slow will land on the left middle.

    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) {
            // there is a cycle
            return true
        }
    }

    return false

7. algos
    1. cycle detection

8. data structures
    1. singly linked list

9. complexity
    Time: O(n)
    Space: O(1)
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