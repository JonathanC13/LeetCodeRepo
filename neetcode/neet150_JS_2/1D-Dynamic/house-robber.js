// https://neetcode.io/problems/house-robber

/*
recursive backtracking with memo to reduce time

2 options
    1. rob the current house, then must move to house i + 2
    2. do not rob, move to house i + 1

    record Max of rob and not rob

- Time: O(n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memo = new Array(nums.length).fill(-1)

        this.dfs(nums, 0, memo)
        return memo[0]
    }

    dfs(nums, i, memo) {
        if (i >= nums.length) {
            return 0
        }
        if (memo[i] !== -1) {
            return memo[i]
        }

        const rob = this.dfs(nums, i + 2, memo) + nums[i]
        const notRob = this.dfs(nums, i + 1, memo)

        memo[i] = Math.max(rob, notRob)
        return memo[i]
    }
}
