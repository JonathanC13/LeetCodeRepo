// https://neetcode.io/problems/min-cost-climbing-stairs

/*
recursive backtrack with memo for 1D dynamic

2 options.
    1. jump 1 step
    2. jump 2 steps

    return this step cost + min(1 step, 2 steps)

- Time: O(n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const memo = new Array(cost.length).fill(-1)

        this.dfs(cost, 0, memo)
        return Math.min(memo[0], memo[1])
    }

    dfs(cost, i, memo) {
        if (i >= cost.length) {
            return 0
        }
        if (memo[i] !== -1) {
            return memo[i]
        }

        const one = this.dfs(cost, i + 1, memo)
        const two = this.dfs(cost, i + 2, memo)

        memo[i] = cost[i] + Math.min(one, two)
        return memo[i]
    }
}
