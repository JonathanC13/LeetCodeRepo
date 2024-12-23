// https://neetcode.io/problems/min-cost-climbing-stairs

class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        if (cost.length === 0) {
            return 0
        }

        const n = cost.length
        const dpTable = Array(n + 1).fill(0)

        for (let i = 2; i < n + 1; i ++) {
            dpTable[i] = Math.min(dpTable[i-1] + cost[i-1], dpTable[i-2] + cost[i-2])
        }
        

        return dpTable[n]
    }
}
