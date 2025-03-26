// https://neetcode.io/problems/merge-two-sorted-linked-lists

/*
edge case 1: if (list1 === null) { return list2 }
edge case 2: if (list2 === null) { return list1 }

create a new Head node; val = 0, next = null
create curr = new Head node as the iterator

while (list1 && list2) {
    if (list1.val <= list2.val) {
        curr.next = list1
        list1 = list1.next
    } else {
        curr.next = list2
        list2 = list2.next
    }

    curr = curr.next    // move forward onto the node that was added.
}

handle when a list has remaining nodes
if (list1) {
    curr.next = list1
} else if (list2) {
    curr.next = list2
}

- Time: O(m + n). m is the number of nodes in list1, n is the number of nodes in list2
- Space: O(1)
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

        const dummyNode = new ListNode(0, null)
        let curr = dummyNode
        while (list1 && list2) {
            if (list1.val < list2.val) {
                curr.next = list1
                list1 = list1.next
            } else {
                curr.next = list2
                list2 = list2.next
            }
            curr = curr.next
        }
        
        if (list1) {
            curr.next = list1
        } else if (list2) {
            curr.next = list2
        }

        return dummyNode.next
    }
}
