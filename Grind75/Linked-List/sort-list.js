// https://leetcode.com/problems/sort-list/description/

/**
mergesort: 
    1. divide the current partition until smallest unti. In linked list it is when .next = null, lone node
    2. merge with the next partition's linked list by comparing each node and returning the result sorted

    - Time: O(n log(n))
    - Space: O(n)

func sort(head)
    if (head === null || head.next === null) {
        return head
    }

    slow = head
    fast = fast.next    // get "first middle"
    while (fast !== null && fast.next !== null)
        slow = slow.next
        fast = fast.next.next

    slow2 = slow.next
    slow.next = null

    left = sort(head)  // left side
    right = sort(slow2)  // right side

    return mergeSort(left, right)

mergeSort(l1, l2)
    dummy = new ListNode
    iterate both and link smallest first
    return dummy.next


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
var sortList = function(head) {
    if (head === null || head.next === null) {
        return head
    }
    let slow = head
    let fast = head.next
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    let slow2 = slow.next
    slow.next = null

    const left = sortList(head)
    const right = sortList(slow2)

    return mergeSort(left, right)
};

const mergeSort = function(l1, l2) {
    const dummy = new ListNode()
    let itr = dummy
    // can do this since, already broken down to smallest unit and merged, therefore every successive merging will be on sorted linked lists
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            itr.next = l1
            l1 = l1.next
        } else {
            itr.next = l2
            l2 = l2.next
        }
        itr = itr.next
    }
    if (l1 !== null) {
        itr.next = l1
    } else if (l2 !== null) {
        itr.next = l2
    }

    return dummy.next
}