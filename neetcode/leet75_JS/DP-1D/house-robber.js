// https://leetcode.com/problems/house-robber/description/?envType=study-plan-v2&envId=leetcode-75

/*
recursive dfs backtracking and use dp with memo to reduce time complexity
    base case 1: if i >= nums.length: return 0

    // 2 paths
    1. do not rob current house, so can move on to direct neighbor i + 1
    2. rob current house, so must move on to i + 2 house

    return Math.max(notRob, rob)

- Time: O(n)
- Space: O(n)
*/

const dp = (nums, i, memo) => {
    if (i >= nums.length) {
        return 0
    }
    if (memo[i] !== -1) {
        return memo[i]
    }

    const notRob = dp(nums, i + 1, memo)
    const rob = dp(nums, i + 2, memo) + nums[i]

    memo[i] = Math.max(notRob, rob)
    return memo[i]
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const memo = new Array(nums.length).fill(-1)

    dp(nums, 0, memo)
    return memo[0]
};