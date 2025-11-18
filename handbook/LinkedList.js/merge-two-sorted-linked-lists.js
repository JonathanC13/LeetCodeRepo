// https://leetcode.com/problems/merge-two-sorted-lists/

/**
1. Assumptions
    1. Both list1 and list2 have no cycles

2. input validation
    list1 is a Linked list of ListNodes and has no cycles
    list2 is a Linked list of ListNodes and has no cycles

3. time and space constraints
    BTTC: O(m + n)
    Space: O(1) // reuse nodes

4. edge cases and some test cases
    edge cases
    1. if list1 is empty
        return list2
    2. if list2 is empty
        return list1
    test cases
    1. normal op
        inputs
            list1 = ListNode(1) -> ListNode(3) -> ListNode(4) -> null
            list2 = ListNode(1) -> ListNode(2) -> ListNode(5) -> null
        expected output
            head = ListNode(1) -> ListNode(1) -> ListNode(2) -> ListNode(3) -> ListNode(4) -> ListNode(5) -> null

5. visualize by drawing and manually solve
6. break into subproblems
    create a dummy node to be the new head
    assign itr for the new merged linked list iterator, itr = dummy
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            itr.next = list1
            list1 = list1.next
        } else {
            itr.next = list2
            list2 = list2.next
        }
        itr = itr.next
    }

    // link remainder if needed
    if (list1 !== null) {
        itr.next = list1
    } else if (list2 !== null) {
        itr.next = list2
    }

    return dummy.next

7. algos
    1. linked list traversal

8. data structures
    1. linked lists

9. complexity
    Time: O(m + n)
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (list1 === null) {
        return list2
    }
    if (list2 === null) {
        return list1
    }

    const dummy = new ListNode(0)
    let itr = dummy
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            itr.next = list1
            list1 = list1.next
        } else {
            itr.next = list2
            list2 = list2.next
        }
        itr = itr.next
    }

    if (list1 !== null) {
        itr.next = list1
    } else if (list2 !== null) {
        itr.next = list2
    }

    return dummy.next
};