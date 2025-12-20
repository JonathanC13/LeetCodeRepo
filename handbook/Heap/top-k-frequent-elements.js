// https://leetcode.com/problems/top-k-frequent-elements/

/**
1. Assumptions
    1. None

2. Input validation
    1. nums
        - nums instanceof Array
        - nums.length > 0
        - nums elements are Numbers
    2. k
        - typeof k === 'number'
        - k >= 0

3. time and space constraints
    BTTC: O(n + (m + k)log(k))  // n = nums.length +, (m = unqiue Numbers +, k = k to dequeue), * log(k) max size of Heap will be k
    Space: O(m + k)

4. edge cases and some test cases
    edge cases
    1. if k === 0: return []
    test cases
    1.
        inputs
            nums = [1,1,1,2,2,3], k = 2
        expected output
            [1, 2]
        
5. visualize by drawing and manually solve
6. break into subproblems
    Create and populate a Map for the frequencies of the Numbers in nums

    create a Priority queue that has a capacity of k. Sorted so that the min frequency is at the top, so when over capacity the lowest frequency Numbers are dequeued

7. algos
    - Min Priority Heap maintenance

8. Data structures
    - Heap for priority Queue

9. complexity
    Time: O(n log(k))
    Space: O(k)

 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if (k === 0) {
        return []
    }

    const freq = new Map()
    for (let i = 0; i < nums.length; i ++) {
        if (!freq.has(nums[i])) {
            freq.set(nums[i], 0)
        }
        freq.set(nums[i], freq.get(nums[i]) + 1)
    }

    const priQ = new PriorityQueue((a, b) => {
        return a[1] - b[1]  // min pri queue, from top ascending down
    })

    for (let [key, val] of freq) {
        priQ.enqueue([key, val])
        while (priQ.size() > k) {
            priQ.dequeue()
        }
    }

    const res = new Array()
    while (priQ.size() > 0) {
        res.push(priQ.dequeue()[0])
    }

    return res

};