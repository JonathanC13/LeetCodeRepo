// https://leetcode.com/problems/min-cost-climbing-stairs/?envType=study-plan-v2&envId=leetcode-75

/*
top is defined as n th step

dp with memo
Array(n + 1) fill with POS INFIN
Array[n] = 0
final answer will be stored in Array[0], since can start from 0th or 1st step, the final answer is min(Array[0], Array[1])

- Time: O(n)
- Space: O(n)
*/

const dp = (cost, i, memo) => {
    if (i >= cost.length) {
        return 0
    }
    if (memo[i] !== Number.POSITIVE_INFINITY) {
        return memo[i]
    }

    const oneStep = dp(cost, i + 1, memo)
    const twoStep = dp(cost, i + 2, memo)

    memo[i] = cost[i] + Math.min(oneStep, twoStep)
    return memo[i]
}

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const memo = new Array(cost.length + 1).fill(Number.POSITIVE_INFINITY)
    memo[cost.length] = 0

    dp(cost, 0, memo)
    return Math.min(memo[0], memo[1])
};