// https://neetcode.io/problems/top-k-elements-in-list/question

/**
 * Hashing solution
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 0
 *      - nums elements are Numbers
 *  2. k
 *      - typeof k === 'number'
 * 
 * 3. time and space constraints
 *  BTTC: O(n log(n))  // n = nums.length
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length === 0: return []
 * 
 *  test cases
 *  1. 
 *      inputs
 *          nums = [1,2,2,3,3,3], k = 2
 *      expected output
 *          [2, 3]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Create a Map. k = Number as the bucket, v = frequency
 * 
 *  iterate and increment in the Map
 *  
 *  Convert Map to Array where [freq, number], then sort by freq in non-ascending
 *      // alternatively use a min Heap and maintain max size of k
 *  Take top k
 * 
 * 7. algos
 *  - Hashing
 * 
 * 8. data structures
 *  - Arrays
 *  - Hash table
 * 
 * 9. complexity
 *  Time: O(n log(n))   // n log(n) for sort or if use Heap also n log(n) of heap operations
 *  Space: O(n)
 */

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        if (nums.length === 0) {
            return []
        }

        const minPriQueue = new PriorityQueue((a, b) => {
            // return a[0] > b[0] ? 1 : -1
            return a[0] - b[0]
        })

        const mapFreq = new Map()
        for (let i = 0; i < nums.length; i ++) {
            if (!mapFreq.has(nums[i])) {
                mapFreq.set(nums[i], 0)
            }
            mapFreq.set(nums[i], mapFreq.get(nums[i]) + 1)
        }

        for (let [key, val] of mapFreq) {
            minPriQueue.enqueue([val, key])
            while (minPriQueue.size() > k) {
                minPriQueue.dequeue()
            }
        }

        const res = new Array()
        while (minPriQueue.size() > 0) {
            res.push(minPriQueue.dequeue()[1])
        }

        return res
    }
}
