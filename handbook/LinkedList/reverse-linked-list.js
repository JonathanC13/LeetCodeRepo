// https://leetcode.com/problems/reverse-linked-list/description/

/**
1. Assumptions
    1. Linked list is connected

2. Validation inputs
    1. Linked list where each node is of class ListNode()

3. Time and space constraints
    BTTC: O(n)  // must traverse each node
    Space: O(1)

4. edge cases and some test cases
    edge cases
    1. if empty linked list
        if (head === null) {return null}
    test cases
    1. 1 node
        input
            head = ListNode(1) -> null
        expected output
            ListNode(1) -> null

    2. more than one node
        input
            head = ListNode(1) -> ListNode(2) -> ListNode(3) -> null
        expected output
            out = ListNode(3) -> ListNode(2) -> ListNode(1) -> null

5. visualize by drawing and manually solve
6. break into subproblems
    create a variable to hold the current previous node, init to null

    while (head is not null) {
        save the head.next into a variable: next. Since re-linking itr.next
        head.next = prev

        prev = head  // update new prev for the next node.next
        head = next  // next node to reverse

    }

    return prev // since head will go to null, prev will point to the new head of the reversed list

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
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null) {
        return head
    }

    let prev = null
    
    while (head !== null) {
        const nxt = head.next
        head.next = prev
        prev = head
        head = nxt
    }

    return prev
};