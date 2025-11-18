// https://leetcode.com/problems/merge-k-sorted-lists/

/**
1. Assumptions
    1. All linked lists have no cycles

2. input validation
    1. all linked lists contain ListNodes and contain no cycles

3. Time and space constraints
    BTTC: O(log(n) * (a + b)) // log(n) for merging pairs *, (a + b) size of the lists in the pairs
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
    let output = [...lists]
    while output.length > 1
        const merged = new Array()
        iterate pairs of linked lists in lists
            merged.push(mergePair(...))

        output = [...merged]

    // at the end, there will be one linked list
    return output[0]

7. algos
    1. linked list traversal

8. Data structures
    1. linked lists
    2. Arrays

9. Complexity
    Time: O(log(n) * (a + b))
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

    let output = [...lists]
    while (output.length > 1) {
        const merged = new Array()
        for (let i = 0; i < output.length; i = i + 2) {
            const list1 = output[i]
            const list2 = i + 1 >= output.length ? null : output[i + 1]
            merged.push(mergePair(list1, list2))
        }
        output = [...merged]
    }

    return output[0]
};

const mergePair = (list1, list2) => {
    if (list1 === null) {
        return list2
    }
    if (list2 === null) {
        return list1
    }

    const dummy = new ListNode(0)
    let itr = dummy
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
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