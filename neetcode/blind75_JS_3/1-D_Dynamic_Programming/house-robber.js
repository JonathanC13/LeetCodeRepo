// https://neetcode.io/problems/house-robber/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length === 0: return 0
 *  2. if nums.length === 1: return nums[0]
 * 
 *  test cases
 *  1. max is an alternating pattern
 *      inputs
 *          nums = [1, 1, 3]
 *      expected output
 *          4
 *  2. max is a non-alternating pattern
 *      inputs
 *          nums = [1, 10, 8, 5, 20, 2]
 *      expected output
 *          30
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  recursive backtracking with 2 paths
 *      1. rob the current house
 *      2. do not rob the current house
 *      return the max(rob, not rob) since want the path with the max profit
 *      Time: O(n * 2^n), each house *, 2 paths ^n remaining paths
 * 
 *  To reduce the time complexity, store the calculated max profit from i to end with memoization
 *  Time: O(n)
 *  Space: O(n)
 * 
 * 7. algos
 *  - recursive backtracking
 *  - 1 dp memoization
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n)
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 0) {
            return 0
        }
        if (nums.length === 1) {
            return nums[0]
        }

        const memo = new Array(nums.length).fill(-1)

        this.rec(nums, 0, memo)
        return memo[0]
    }

    rec(nums, i, memo) {
        if (i >= nums.length) {
            return 0
        }
        if (memo[i] !== -1) {
            return memo[i]
        }

        const notRob = this.rec(nums, i + 1, memo)
        const rob = this.rec(nums, i + 2, memo) + nums[i]

        memo[i] = Math.max(notRob, rob)
        return memo[i]

    }
}
