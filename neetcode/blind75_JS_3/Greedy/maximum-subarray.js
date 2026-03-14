// https://neetcode.io/problems/maximum-subarray/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 0
 *      - nums's elements are Number
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length === 0: return 0
 * 
 *  test cases
 *  1. mixed negatives
 *      inputs
 *          nums = [2,-3,4,-2,2,1,-1,4]
 *      expected output
 *          8
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Kadane algorithm
 *      iterate the nums
 *          track the sum of the subarray and update the global max
 *          if the sum becomes < 0: reset to 0 to end the previous subarray and start the new subarray in the next index since the goal is maximum subarray sum
 * 
 *  
 * 7. algos
 *  - Kadane algorithm
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(1)
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        if (nums.length === 0) {
            return 0
        }

        let maxSum = nums[0]
        let localSum = 0
        for (let i = 0; i < nums.length; i ++) {
            localSum += nums[i]
            maxSum = Math.max(maxSum, localSum)
            if (localSum < 0) {
                localSum = 0
            }
        }

        return maxSum
    }
}
