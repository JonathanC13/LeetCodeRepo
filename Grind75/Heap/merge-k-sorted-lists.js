// https://leetcode.com/problems/merge-k-sorted-lists/description/

/**
** soln 1: merging pairs until 1 linked list left
    - Time: O(n * m)    // n = lists, m = nodes
    - Space: O(1)

** soln 2: push all nodes into a min heap
    - Time: O(m log m)  // m = all nodes
    - Space: O(m)
 */

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
    const minH = new PriorityQueue((a, b) => {
        return a.val - b.val
    })

    for (let i = 0; i < lists.length; i ++) {
        let itr = lists[i]

        while (itr !== null) {
            // disconnect node
            const next = itr.next
            itr.next = null
            minH.enqueue(itr)
            itr = next
        }
    }

    // dequeue all into final merged list
    const dummy = new ListNode()
    let itr = dummy
    while (minH.size() > 0) {
        const deq = minH.dequeue()
        itr.next = deq
        itr = itr.next
    }
    
    return dummy.next

};