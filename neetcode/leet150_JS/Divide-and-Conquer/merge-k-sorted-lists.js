// https://leetcode.com/problems/merge-k-sorted-lists/description/?envType=study-plan-v2&envId=top-interview-150

/*
while lists.length > 1
    create mergedLists Array
    iterate pairs of list heads in lists
        list1 = lists[i]
        list2 = if i + 1 < lists.length ? lists[i + 1] : null
        merge(list1, list2)
        
    lists = [...mergedLists]
return lists[0]

- Time: O(log(n) *  )   // log(n) to keep dividing the lists Array. * m = longest common linked list pair to merge
- Space: O(n)
*/

const mergePair = (l1, l2) => {
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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    while (lists.length > 1) {
        const mergedLists = new Array()
        let i = 0
        while (i < lists.length) {
            const l1 = lists[i]
            const l2 = (i + 1 < lists.length) ? lists[i + 1] : null
            mergedLists.push(mergePair(l1, l2))
            i = i + 2
        }
        lists = [...mergedLists]
    }

    return lists.length === 0 ? null : lists[0]
};