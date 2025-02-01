// https://neetcode.io/problems/merge-k-sorted-linked-lists

/*
- edge case 1: if lists.length === 0 : return null
- edge case 2: if lists.length === 1: return lists[0]

while lists length !== 1
    create empty Array to hold intermediate merged lists
    iterate the lists by 2
        const list1 = lists[i]
        const list2 = i + 1 < lists.length ? lists[i + 1] : null
        mergedLists.push(this.mergeLists(list1, list2))

    lists = mergedLists

return lists

func mergedList(list1, list2) {
    dummy = new ListNode(0)
    itr = dummy

    while (list1 && list2)
        merge by picking lesser value

    add on the list that still has remaining elements

    return dummy.next

}

- Time: O(k log k * n). k is length of lists * log k (since halving the problem set.) * n (max length of a list)
- Space: O(k)   . k for the mergedLists
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
            console.log(lists.length)
            const mergedLists = []
            for (let i = 0; i < lists.length; i += 2) {
                const list1 = lists[i]
                const list2 = i + 1 < lists.length ? lists[i + 1] : null
                mergedLists.push(this.mergeLists(list1, list2))
            }
            lists = mergedLists
        }
        
        return lists[0]
    }

    mergeLists(list1, list2) {
        const dummy = new ListNode(0)
        let itr = dummy
        
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
        }
        if (list2) {
            itr.next = list2
        }

        return dummy.next
    }
}
