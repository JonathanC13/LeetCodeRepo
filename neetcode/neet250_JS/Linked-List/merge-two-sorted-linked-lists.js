// https://neetcode.io/problems/merge-two-sorted-linked-lists

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

/*
- edge case 1: if (list1 === null) {return list2}
- edge case 2: if (list2 === null) {return list1}

mergeList = new ListNode(0) // dummy head
itr = mergeList

while(list1 && list2) {
    if (list1.val < list2.val) {
        itr.next = list1
        list1 = list1.next
    } else {
        itr.next = list2
        list2 = list2.next
    }
    itr = itr.next
}

remainder
if (list1) {
    itr.next = list1
}
if (list2) {
    itr.next = list2
}

return mergeList.next

- Time: O(m + n)
- Space: O(1)
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

        const mergedList = new ListNode(0)
        let itr = mergedList

        while (list1 && list2) {
            if (list1.val < list2.val) {
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

        return mergedList.next
    }
}
