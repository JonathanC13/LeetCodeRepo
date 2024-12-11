// https://neetcode.io/problems/merge-k-sorted-linked-lists

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

        while (lists.length > 1) {
            const mergedLists = []

            for (let i = 0; i < lists.length; i += 2) {
                const l1 = lists[i]
                const l2 = (i + 1 < lists.length ? lists[i + 1] : null)
                mergedLists.push(this.merge(l1, l2))
            }
            
            lists = mergedLists
        }

        return lists[0]
    }

    merge(l1, l2) {
        const dummy = new ListNode(0)
        let ptr = dummy

        while (l1 && l2) {
            if (l1.val < l2.val) {
                ptr.next = l1
                l1 = l1.next
            } else {
                ptr.next = l2
                l2 = l2.next
            }

            ptr = ptr.next
        }

        if (l1) {
            ptr.next = l1
        } else {
            ptr.next = l2
        }

        return dummy.next
    }
}
