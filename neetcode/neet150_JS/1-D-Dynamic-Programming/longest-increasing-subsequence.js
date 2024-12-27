// https://neetcode.io/problems/longest-increasing-subsequence

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        if (nums.length === 0) {
            return 0
        }

        const dp = Array(nums.length).fill(1)

        let max = 1

        for (let i = 0; i < nums.length; i ++) {
            for (let j = i; j < nums.length; j ++) {
                if (nums[j] > nums[i]) {
                    dp[j] = Math.max(dp[j], dp[i] + 1)

                    max = Math.max(max, dp[j])
                }
            }
        }
        return max
    }
}
