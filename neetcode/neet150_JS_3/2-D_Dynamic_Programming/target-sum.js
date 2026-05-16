// https://neetcode.io/problems/target-sum/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 0
 *      - nums's elements are Number
 *  2. target
 *      - typeof target === 'number'
 * 
 * 3. time and space constraints
 *  BTTC: O(n^2)
 *  Space: O(n^2)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length === 0: return 0
 * 
 *  test cases
 *  1. > 1 combinations
 *      inputs
 *          nums = [2,2,2], target = 2
 *      expected output
 *          3
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. dfs recursive backtracking
 *      base case 1: 
 *      if i >= nums.length
 *          return target === 0
 * 
 *      ways = 0
 *      at current i, 2 paths:
 *      1. ways += rec(substract i)
 *      2. ways += rec(add i)
 * 
 *      return ways
 * 
 *      Time: O(n * 2^n)
 *      Space: O(n)
 *  
 *  2. add memo to reduce time complexity to Time: O(n^2)
 *      memo is a Map of elements `${i},${target}`: ways to end
 * 
 * 7. algos
 *  - DFS with memo
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n^2)
 *  Space: O(n^2)
 * 
 */

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        if (nums.length === 0) {
            return 0
        }

        const memo = new Map()
        const res = this.dfs(nums, 0, target, memo)
        // console.log(memo)
        return res
    }

    dfs(nums, i, target, memo) {
        if (i >= nums.length) {
            return target === 0
        }
        const key = `${i},${target}`
        if (memo.has(key)) {
            // console.log('hit, ', key)
            return memo.get(key)
        }

        let ways = 0
        ways += this.dfs(nums, i + 1, target - nums[i], memo)
        ways += this.dfs(nums, i + 1, target + nums[i], memo)

        memo.set(key, ways)
        return ways
    }
}
