// https://neetcode.io/problems/min-cost-climbing-stairs

/*
- edge case 1: if cost.length === 1: return cost[0]
- edge case 2: if cost.length === 2: return Math.min(cost[0], cost[1])

n = cost.length

// improve Time complexity with memoization so that when a previously calculated path appears again, retreive instead of re-calculation.
const dp = new Array(n).fill(0)

DFS(i, n, cost, dp)
    if (i >= n) {
        return 0
    }
    if (dp[i] !== 0) {
        return dp[i]
    }

    // 2 options: pay the cost of the current step and then
    // 1. take 1 step
    // 2. take 2 steps

    // move 1 step
    const one = DFS(i + 1, n, cost)

    // move 2 steps
    const two = DFS(i + 2, n, cost)

    // on the back track, return the min Cost path + the current step cost
    dp[i] = cost[i] + Math.min(one, two)
    return dp[i]


// need to return the min whre start at step 0 or step 1
return Math.min(this.dfs(0, cost.length, cost, 0), this.dfs(1, cost.length, cost, 0))

- Time: O(n)
- Space: O(n)

*/

class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        if (cost.length === 0) {
            return 0
        }
        if (cost.length === 1) {
            return cost[0]
        }
        if (cost.length === 2) {
            return Math.min(cost[0], cost[1])
        }

        const n = cost.length

        const dp = new Array(n).fill(0)

        return Math.min(this.dfs(0, cost.length, cost, dp), this.dfs(1, cost.length, cost, dp))
    }

    dfs(i, n, cost, dp) {
        if (i >= n) {
            return 0
        }
        if (dp[i] !== 0) {
            return dp[i]
        }

        // 1 step
        const one = this.dfs(i + 1, n, cost, dp)

        // 2 steps
        const two = this.dfs(i + 2, n, cost, dp)

        dp[i] = cost[i] + Math.min(one, two)
        return dp[i]
    }
}
