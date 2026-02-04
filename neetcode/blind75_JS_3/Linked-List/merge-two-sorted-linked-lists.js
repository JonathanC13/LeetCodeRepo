// https://neetcode.io/problems/merge-two-sorted-linked-lists/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. list1 and list2
 *      - list1 instanceof ListNode
 * 
 * 3. time and space constraints
 *  BTTC: O(m + n)
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if list1 === null: return list2
 *  2. if list2 === null: return list1
 * 
 *  test cases
 *  1. 
 *      inputs
 *          list1 = [1, 3, 4, 6]
 *          list2 = [2, 3, 5, 7]
 *      expected output
 *          [1, 2, 3, 3, 4, 5, 6, 7]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  create a dummy ListNode where .next is the head of the merged linked list, need this since don't know which ListNode will start between list1 and list2
 *  itr = dummy
 * 
 *  iterate while list1 !== null && list2 !== null
 *      if (list1.val <= list2.val) {
 *          itr.next = list1
 *          list1 = list1.next
 *      } else 
 *          itr.next = list2
 *          list2 = list2.next
 * 
 *      itr = itr.next
 * 
 *  Once one of the lists runs out of ListNodes, link itr.next to the list that has remaining elements
 *  
 *  return dummy.next
 * 
 * 7. algos
 *  - Linked list traversal
 * 
 * 8. data structures
 *  - Linked list
 * 
 * 9. complexity
 *  Time: O(m + n)
 *  Space: O(1)
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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (list1 === null) {
            return list2
        }
        if (list2 === null) {
            return list1
        }

        const dummy = new ListNode()
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
    }
}
