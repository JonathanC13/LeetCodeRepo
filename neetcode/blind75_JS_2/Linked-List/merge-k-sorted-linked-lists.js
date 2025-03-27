// https://neetcode.io/problems/merge-k-sorted-linked-lists

/*
edge case 1: if lists.length === 0: return null
edge case 2: if lists.length === 1: returh lists[0]

while lists.length > 1
    const mergedLists = []
    iterate the lists by pairs, i += 2
        list1 = lists[i]
        list2 = (i + 1 < lists.length) ? lists[i + 1] : null

        merge list1 and list2

        mergedLists.push(merged)

    // reassign to reduce
    lists = mergedLists

return lists[0] // the head of the remaining linked list

- Time: O(n log k). Where k is the total number of lists and n is the total number of nodes across k lists. Each iteration reduces the number of lists = log k, * n to iterate the nodes in each pair.
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
        if (lists.length === 0) {
            return null
        }
        if (lists.length === 1) {
            return lists[0]
        }

        while (lists.length > 1) {
            const mergedLists = []
            for (let i = 0; i < lists.length; i += 2) {
                const list1 = lists[i]
                const list2 = i + 1 < lists.length ? lists[i + 1] : null

                mergedLists.push(this.mergeTwoLists(list1, list2))
            }
            
            lists = [...mergedLists]
        }

        return lists[0]

    }

    mergeTwoLists(list1, list2) {
        const dummyNode = new ListNode(0, null)
        let itr = dummyNode

        while (list1 && list2) {
            if (list1.val <= list2.val) {
                itr.next = list1
                list1 = list1.next
            } else {
                itr.next = list2
                list2 = list2.next
            }
            itr = itr.next
        }

        if (list1) {
            itr.next = list1
        } else if (list2) {
            itr.next = list2
        }

        return dummyNode.next
    }
}
