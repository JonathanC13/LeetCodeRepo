// https://neetcode.io/problems/min-cost-climbing-stairs/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  1. cost
 *      - cost instanceof Array
 *      - cost.length >= 0
 *      - cost's elements are Number
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if cost.length <= 1: return 0
 * 
 *  test cases
 *  1. the is a min cost
 *      inputs
 *          cost = [1,2,3]
 *      expected output
 *          2
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. DFS recursive backtracking
 *      - min(start from 0, start from 1)
 *      backtracking
 *          2 paths, this step cost +
 *          1. move to i + 1
 *          2. move to i + 2
 *      Time: O(n * 2^n)    // each n *, 2 paths ^ remaining n
 *      Space: O(n)
 *  2. add memoization to reduce time complexity to O(n)
 * 
 * 7. algos
 *  - Recursive backtracking with memo
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n)
 */

class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        if (cost.length <= 1) {
            return 0
        }
        const memo = new Array(cost.length + 1).fill(-1)
        memo[cost.length] = 0
        const res = Math.min(this.dfs(cost, 0, memo), this.dfs(cost, 1, memo))
        // console.log(memo)
        return res
    }

    dfs(cost, i, memo) {
        if (i >= cost.length) {
            return 0
        }
        if (memo[i] !== -1) {
            return memo[i]
        }

        const minCost = cost[i] + Math.min(this.dfs(cost, i + 1, memo), this.dfs(cost, i + 2, memo))
        memo[i] = minCost
        return minCost
    }
}
