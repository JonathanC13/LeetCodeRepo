// https://leetcode.com/problems/combination-sum-iv/

/*
recursive soln
    if (target === 0) {
        comb[0] += 1
        return
    }

    // try every number at each call
    for (let i = 0; i < nums.length; i ++) {
        if (target - nums[i] >= 0) {
            this.dfs(nums, target - nums[i], comb)
        }
    }

    return

- Time: O(n^n)
- Space: O(n)

reduce time complexity with dp.
create Array of: target + 1. fill with -1
initial state dp[0] = 1

- Time: O(n^2)

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const dp = new Array(target + 1).fill(-1)
    dp[0] = 1
    const res = dfs(nums, target, dp)
    console.log(dp)
    return res
};

var dfs = function(nums, target, dp) {
    if (dp[target] !== -1) {
        return dp[target]
    }

    let ways = 0
    for (let i = 0; i < nums.length; i ++) {
        if (target - nums[i] >= 0) {
            ways += dfs(nums, target - nums[i], dp)
        }
    }
    dp[target] = ways
    return dp[target]
}