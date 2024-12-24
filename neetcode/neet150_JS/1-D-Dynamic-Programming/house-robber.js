// https://neetcode.io/problems/house-robber

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 0) {
            return 0
        }

        const n = nums.length

        const dp = Array(n).fill(0)
        dp[0] = nums[0]
        dp[1] = Math.max(nums[0], nums[1])

        for (let i = 2; i < n; i ++) {
            dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
        }
        console.log(dp)

        return dp[n - 1]
    }
}
