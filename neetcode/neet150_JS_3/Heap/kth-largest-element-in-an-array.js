// https://neetcode.io/problems/kth-largest-element-in-an-array/question

/**
 * 1. Assumptions
 *  1. k <= nums.length
 * 
 * 2. input validation
 *  1. nums
 *      - nums instance of Array
 *      - nums.length >= 0
 *      - nums's elements are Number
 *  2. k
 *      - typeof k === 'number'
 *      - k >= 0
 * 
 * 3. time and space constraints
 *  BTTC: O(n * log(k)) // n items * pri q operations. If sort time: O(n log(n))
 *  Space: O(k)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if k === 0: return 0
 * 
 *  test cases
 *  1. 
 *      inputs
 *          nums = [2,3,1,5,4]
 *          k = 3
 *      expected output
 *          3
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  without sorting, use a min priority queue (a - b). Maintain the size of k, the front is the smallest of the other elements.
 *  When above capacity; enqueue smaller element it is dequeued since at front, enqueue larger element the current front dequeued.
 * 
 * 7. algos
 *  - min priority queue operations
 * 
 * 8. data structures
 *  - min priority queue (impl w/ heap)
 * 
 * 9. complexity
 *  Time: O(n * log(k))
 *  Space: O(n)
 */

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const minPriQ = new PriorityQueue((a, b) => a - b)

        for (let num of nums) {
            minPriQ.enqueue(num)
            if (minPriQ.size() > k) {
                minPriQ.dequeue()
            }
        }

        return minPriQ.front()
    }
}
