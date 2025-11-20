// https://leetcode.com/problems/reorder-list/description/

/**
1. Assumptions
    1. The linked list has no cycles

2. input validation
    head points to null or a ListNode object.
    The linked list contains only ListNodes and has no cycles

3. time and space constraints
    BTTC: O(n)  // n/2 to middle +, n/2 to reverse +, n to create reordered linked list
    Space: O(1)

4. edge cases and some test cases
    edge cases
    1. no items
        if head === null: return head
    test cases
    1. 1 item
        inputs
            head = [1]
        expected output
            [1]
    2. 4 items
        inputs
            head = [1, 2, 3, 4]
        expected output
            [1, 4, 2, 3]

5. visualize by drawing and solve manually
6. break into subproblems
    Since the reorder needs items from right to left, need to reverse the right half of the linked list.

    // get to last node of first half of linked list
    slow = head
    fast = head.next // by starting fast = head.next, for even number of nodes the slow will land on the left middle node.

    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    // assign iterator for right half and unlink left half from second
    fast = slow.next
    slow.next = null

    // reverse right half
    slow = null
    while (fast !== null) {
        nxt = fast.next
        fast.next = slow
        slow = fast
        fast = nxt
    }

    // at this point slow has the reference to the head of the reversed list

    // relink for reordered list
    let itr = dummy
    while (head !== null && slow !== null) {
        // relink in specific order
        itr.next = head
        nxtL = head.next
        head.next = slow
        head = nxtL

        nxtR = slow.next
        slow.next = head
        slow = nxtR

        itr = head
    }

    return dummy.next

7. algos
    1. linked list traversal

8. data structrues
    1. singly linked list

9. Complexity
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (head === null) {
        return null
    }

    // get to left middle
    let slow = head
    let fast = head.next
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    // unlink
    fast = slow.next
    slow.next = null

    // reverse
    slow = null
    while (fast !== null) {
        const nxt = fast.next
        fast.next = slow
        slow = fast
        fast = nxt
    }

    // create reordered
    const dummy = new ListNode(0)
    let itr = dummy
    while (head !== null && slow !== null) {
        const nxtL = head.next
        itr.next = head
        head.next = slow
        head = nxtL

        const nxtR = slow.next
        slow.next = head
        slow = nxtR

        itr = head
    }

    return dummy.next
};