// https://neetcode.io/problems/house-robber-ii/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 0
 *      - nums elements' are Number
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
 *  1. max profit includes the first house
 *      inputs
 *          nums = [12, 2, 5, 8]
 *      expected output
 *          17
 *  2. max profit includes the last house
 *      inputs
 *          nums = [12, 2, 5, 20]
 *      expected output
 *          22
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  conduct the recursive backtracking solution for:
 *      1. all houses excluding first
 *      2. all houses excluding last
 *      This prevents a combination where first and last are both chosen in the max profit
 * 
 *  recursive backtracking:
 *      2 paths:
 *      1. not rob, therefore can go to i + 1 house
 *      2. rob, nums[i] + rec(i + 2)    // i + 2 since cannot rob i + 1 house
 * 
 *      without memo, Time: O(n * 2^n)
 * 
 * 7. algos
 *  - recursive backtraing with memo
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
        const n = nums.length
        if (n === 0) {
            return 0
        }
        if (n === 1) {
            return nums[0]
        }


        let memo = new Array(n).fill(-1)
        const first = this.rec(nums.slice(0,n-1), 0, memo)
        memo = new Array(n).fill(-1)
        const last = this.rec(nums.slice(1), 0, memo)
        return Math.max(first, last)
    }

    rec(nums, i, memo) {
        if (i >= nums.length) {
            return 0
        }
        if (memo[i] !== -1) {
            return memo[i]
        }

        const notRob = this.rec(nums, i + 1, memo)
        const rob = nums[i] + this.rec(nums, i + 2, memo)
        memo[i] = Math.max(notRob, rob)
        return memo[i]
    }
}
