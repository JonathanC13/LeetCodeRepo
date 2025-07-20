// https://leetcode.com/problems/house-robber/description/?envType=study-plan-v2&envId=top-interview-150

/*
recursive backtracking to choose different paths
- Time: O(2^n)  // each house has two choices of rob or not rob
- Space: O(n)

Reduce the time complexity with dynamic programming to store the previously calculated max money from index onward
- Time: O(n)
- Space: O(n)

dfs
    - base case 1: if (i >= nums): return 0 //no more houses
    - base case 2: if (dp[i] !== -1): return dp[i]  // dp at i holds the max value robbed of that house and onward.

    // 2 choices per house
    1. rob the current house. rob = this house value + dfs(i + 2, dp)   // i + 2 since cannot rob next one, must move to i + 2
    2. not rob. notRob = dfs(i + 1) // just move to next house

    dp[i] = max(rob, notRob)
    return dp[i]
*/

const dfs = function(nums, i, memo) {
    if (i >= nums.length) {
        return 0
    }
    if (memo[i] !== -1) {
        return memo[i]
    }

    const rob = nums[i] + dfs(nums, i + 2, memo)
    const notRob = dfs(nums, i + 1, memo)

    memo[i] = Math.max(rob, notRob)
    return memo[i]
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const memo = new Array(nums.length).fill(-1)
    return dfs(nums, 0, memo)
};