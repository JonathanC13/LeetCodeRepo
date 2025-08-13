// https://leetcode.com/problems/sliding-window-maximum/description/

/*
maintain a max pri Queue for the max value of the window
    element stored: [val, index]

populate first window
res.push(top of heap)

let l = 0
iterate r in nums from l + k to end
    l += 1
    add nums[r] to heap

    // find the max in the window. Since moved l += 1. pop all indexed that are < l
    while (heap.top[1] < l) {
        heap.dequeue
    }

    res.push(heap.front())

- Time: O(n * log n)    // .log n is for heap operations, n because possible window keeps introducing new max so it could eventually have all values.
- Space: O(n)
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (k > nums.length) {
        return -1
    }

    const priQ = new PriorityQueue((a, b) => {
        const diff = b[0] - a[0]    // non-ascending
        if (diff === 0) {
            return b[0] - a[0]  // if tie, put the higher index on top
        }
        return diff
    })

    const res = new Array()
    for (let i = 0; i < k; i ++) {
        priQ.enqueue([nums[i], i])
    }
    res.push(priQ.front()[0])

    let l = 0
    for (let r = l + k; r < nums.length; r ++) {
        l += 1
        priQ.enqueue([nums[r], r])
        while (priQ.front()[1] < l) {
            priQ.dequeue()
        }

        res.push(priQ.front()[0])
    }

    return res
};