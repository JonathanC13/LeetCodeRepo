// https://neetcode.io/problems/sliding-window-maximum/question

/**
 * 1. Assumptions
 *  1. k <= nums.length
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 0 && >= k
 *      - nums element's are Number
 *  2. k
 *      - typeof k === 'number'
 *      - k <= nums.length
 * 
 * 3. time and space constraints
 *  BTTC: O(m * log(m) + n/k)   // m = size of pri queue, pri queue operations are Log(n)
 *  Space: O(m) // 
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length === 0: return 0
 *  
 *  test cases
 *  1. max updated in different windows
 *      inputs
 *          nums = [5,4,2,2,10,1]
 *          k = 2
 *      expected output
 *          12
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Use a max priority queue so that the maximum value in the window is at the top for O(1) access time.
 *  Elements of [val, idx] so if the max is outside the current window since moving right pop it until a value within the current window is found.
 * 
 * 7. algos
 *  - Sliding window
 *  - max priority Queue operations
 * 
 * 8. data structures
 *  - Array
 *  - Heap to implement a priority queue abstract data structure
 * 
 * 9. complexity
 *  Time: O(m * log(m))
 *  Space: O(m)
 */

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if (nums.length === 0) {
            return 0
        }
        const n = nums.length
        const maxPriQ = new PriorityQueue((a, b) => {
            // if < 0, a on top before b
            return b[0] - a[0]
        })

        // build initial window
        let l = 0
        let r = 0
        while (r < k && r < n) {
            maxPriQ.enqueue([nums[r], r])
            r += 1
        }

        const res = []
        res.push(maxPriQ.front()[0])

        // move window
        for (r; r < n; r ++) {
            l += 1
            maxPriQ.enqueue([nums[r], r])
            // remove all max that is outside of window
            while (maxPriQ.front()[1] < l) {
                maxPriQ.dequeue()
            }

            res.push(maxPriQ.front()[0])
        }

        return res
    }
}
