// https://neetcode.io/problems/merge-k-sorted-linked-lists

/*
iterate the lists of linked lists
    replace original list with merged pairs

- Time: O(m * log n)    // n = number of lists, m = total nodes
- Space: O(n)
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
        if (lists === null || lists.length === 0) {
            return null
        }

        while (lists.length > 1) {
            const mergedLists = new Array()

            for (let i = 0; i < lists.length; i += 2) {
                const list1 = lists[i]
                const list2 = (i + 1 < lists.length) ? lists[i + 1] : null
                mergedLists.push(this.mergeLists(list1, list2))
            }

            lists = mergedLists
        }
        
        return lists[0]
    }

    mergeLists(list1, list2) {
        const dummy = new ListNode()
        let itr = dummy
        while (list1 !== null && list2 !== null) {
            if (list1.val < list2.val) {
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
