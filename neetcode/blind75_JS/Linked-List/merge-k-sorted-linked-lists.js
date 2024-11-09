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
        if (!lists || lists.length === 0) {
            return null
        }

        while (lists.length > 1) {
            const mergedList = []

            for (let i = 0; i < lists.length; i += 2) {
                let list1 = lists[i]
                let list2 = (i + 1 < lists.length) ? (lists[i+1]) : null
                mergedList.push(this.mergeLists(list1, list2))
            }
            lists = mergedList
        }
        return lists[0]
    }

    mergeLists(list1, list2) {
        const dummy = new ListNode(0)
        let new1 = dummy
        while (list1 && list2) {
            if (list1.val < list2.val) {
                new1.next = list1
                list1 = list1.next
            } else {
                new1.next = list2
                list2 = list2.next
            }
            new1 = new1.next
        }

        if (list1) {
            new1.next = list1
        } else {
            new1.next = list2
        }

        return dummy.next
    }
}
