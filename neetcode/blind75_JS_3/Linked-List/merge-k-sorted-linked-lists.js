// https://neetcode.io/problems/merge-k-sorted-linked-lists/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. lists
 *      - lists instanceof Array
 *      - lists.length >= 0
 *      - lists's elements are: elem instanceof ListNode
 * 
 * 3. time and space constraints
 *  BTTC: O(n log(m))  // n = lists.length, m = number of nodes
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if lists.length === 0: return null
 *  2. if lists.length === 1: return lists[0]
 * 
 *  test cases
 *  1. 
 *      inputs
 *          lists = [[1,2,4],[1,3,5],[3,6]]
 *      expected output
 *          [1, 1, 2, 3, 3, 4, 5, 6]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. Min priority list method
 *      - For each lists's Linked list, enqueue each ListNode into a Min priority queue
 *      - The result is created by linking each dequeued ListNode
 *      Time: O(m log(m))   // m = total number of nodes
 *      Space: O(m)
 *  2. Merge each pair of lists's Linked lists until one remain
 *      Time: O(n log(m))
 *      Space: O(n) // for the merged Linked Lists
 * 
 * 7. algos
 *  - Linked list traversal
 * 
 * 8. data structures
 *  - Linked lists
 * 
 * 9. complexity
 *  Time: O(n * log(m))
 *  Space: O(n)
 * 
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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) {
            return null
        }
        if (lists.length === 1) {
            return lists[0]
        }

        let listsCopy = [...lists]
        while (listsCopy.length > 1) {
            const mergedLists = new Array()

            for (let i = 0; i < listsCopy.length; i += 2) {
                const l1 = listsCopy[i]
                const l2 = i + 1 < listsCopy.length ? listsCopy[i + 1] : null

                mergedLists.push(this.mergeTwoLists(l1, l2))
            }

            listsCopy = [...mergedLists]
        }

        return listsCopy[0]
    }

    mergeTwoLists(l1, l2) {
        const dummy = new ListNode()
        let itr = dummy

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
}
