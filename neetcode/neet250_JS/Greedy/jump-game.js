// https://neetcode.io/problems/jump-game

/*
recursive dfs

- Time: O(n!). 3 = 3 jumps, 2 jumps, 1 jump
- Space: O(1)

Add DP memoization to reduce time complexity
dp = new Array(nums.length).fill(null)
- Time: O(n^2)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const dp = new Array(nums.length).fill(null)
        return this.dfs(nums, 0, dp)
    }

    dfs(nums, i, dp) {
        if (i === nums.length - 1) {
            return true
        }
        if (dp[i] !== null) {
            return dp[i]
        }

        for (let jump = nums[i]; jump > 0; jump --) {
            if (this.dfs(nums, i + jump, dp)) {
                dp[i] = true
                return true
            }
        }
        dp[i] = false
        return dp[i]
    }
}
