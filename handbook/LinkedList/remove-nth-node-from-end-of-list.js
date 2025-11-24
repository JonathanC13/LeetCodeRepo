// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

/**
1. Assumptions
    1. No cycles
    2. n <= number of nodes

2. Input validation
    head is a ListNode
    The linked list contains only ListNodes and no cycles

3. time and space constraints
    BTTC: O(n)
    Space: O(1)

4. edge cases and some test cases
    edge cases
    1. 0 items
        if head === null: return null
    test cases
    1. remove first item
        inputs
            head = [1, 2, 3, 4]
            n = 4
        expected output
            head = [2, 3, 4]
    2. remove last item
        inputs
            head = [1, 2, 3, 4]
            n = 1
        expected output
            head = [1, 2, 3]
    3. remove first item and linked list only has one item
        inputs
            head = [1]
            n = 1
        expected output
            head = null

5. visualize by drawing and manaully solve
6. break into subproblems
    create a dummy node where next = head
    slow = dummy
    fast = head // fast starts one node ahead so that "slow" will land on the node before the one to remove

    // move fast to create n nodes between slow and fast.
    while (n > 0 && fast !== null) {
        fast = fast.next
    }

    // if n allowed to be > number of nodes
    if (n !== 0) {
        return head
    }

    // since slow and fast have n nodes between them, by moving slow and fast until fast === null the final position of slow will be node - 1 to be removed.
    while (fast !== null) {
        slow = slow.next
        fast = fast.next
    }

    nxt = slow.next
    slow.next = slow.next.next
    nxt.next = null // disconnect for garbage collection

    return dummy.next

7. algos
    - singly linked list traversal

8. data structures
    - singly linked list

9. complexity
    Time: O(n)
    Space: O(1)

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head === null) {
        return head
    }

    const dummy = new ListNode(0, head)
    let slow = dummy
    let fast = head

    while (n > 0 && fast !== null) {
        fast = fast.next
        n -= 1
    }
    if (n !== 0) {
        return head
    }

    while (fast !== null) {
        slow = slow.next
        fast = fast.next
    }
    const nxt = slow.next
    slow.next = nxt.next
    nxt.next = null

    return dummy.next
};