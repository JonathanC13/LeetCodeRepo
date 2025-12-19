// https://leetcode.com/problems/merge-k-sorted-lists/description/

/**
The Min priority Queue that utilizes a Heap solution

1. Assumptions
    1. None

2. input validation
    1. all linked lists contain ListNodes and contain no cycles

3. Time and space constraints
    BTTC: O(m * log(m) * 2) // m = total nodes in all the linked lists *, log(m) for Priority queue operation time, * 2 since 1 for pushing (need to heapify maxi m number of items each insert) and then 1 for pop (heapify each time).
    Space: O(n) //  n/2 for the intermediate merged pairs

4. edge cases and some test cases
    edge cases
    1. if lists.length === 0
        return null
    2. if lists.length === 0
        return lists[0]
    test cases
    1.
        input
            lists = [[1,4,5],[1,3,4],[2,6]]
        expected output
            [1,1,2,3,4,4,5,6]

5. visualize by drawing and manaully solve
6. break into subproblems
    create min pri queue    // since objects and need to access the val property, use PriorityQueue with comparator that accesses the val property

    iterate every node in the lists and enqueue into the min pri queue

    since the min pri queue maintains the smallest value on the top
    while min pri queue has values
        dequeue and add to the sorted result linked list

    return res head

7. algos
    1. linked list traversal

8. Data structures
    1. linked lists
    2. Min priority Queue

9. Complexity
    Time: O(m * log(n) * 2)
    Space: O(n)
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
    if (lists.length === 0) {
        return null
    }
    if (lists.length === 1) {
        return lists[0]
    }

    const minPriQ = new PriorityQueue((a, b) => {
        return a.val - b.val
    })

    // Time: O(m * log(m))
    for (let list of lists) {
        let itr = list
        while (itr !== null) {
            // console.log(itr.val)
            minPriQ.enqueue(itr)
            itr = itr.next
        }
    }

    const dummy = new ListNode()
    let itr = dummy
    while (minPriQ.size() > 0) {
        itr.next = minPriQ.dequeue()
        itr = itr.next
    }
    itr.next = null // if last node had a .next originally, nullify it.
    
    return dummy.next
};