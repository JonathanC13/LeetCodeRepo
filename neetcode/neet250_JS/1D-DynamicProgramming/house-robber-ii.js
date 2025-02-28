// https://neetcode.io/problems/house-robber-ii

/*
since in a circle, run the house-robber dfs 2 times:
    1. without the first house
    2. without the last house
    This will ensure that the first and last house will not trigger an alarm and can include them in the max
    Need to reset the DP Array before each run since the elements are different.

- Time: O(n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 0) {
            return 0
        }
        if (nums.length === 1) {
            return nums[0]
        }

        let dp = new Array(nums.length).fill(-1)
        const withoutFirst = this.dfs(1, nums, dp)
        dp = new Array(nums.length).fill(-1)
        const withoutLast = this.dfs(0, nums.slice(0, nums.length - 1), dp)

        return Math.max(withoutFirst, withoutLast)
    }

    dfs(i, nums, dp) {
        if (i >= nums.length) {
            return 0
        }
        if (dp[i] !== -1) {
            return dp[i]
        }

        const dontRob = this.dfs(i + 1, nums, dp)
        const rob = nums[i] + this.dfs(i + 2, nums, dp)

        dp[i] = Math.max(dontRob, rob)
        return dp[i]
    }
}
