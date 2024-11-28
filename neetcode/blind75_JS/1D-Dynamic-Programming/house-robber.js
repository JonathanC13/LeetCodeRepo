// https://neetcode.io/problems/house-robber

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 0) {
            return 0;
        }
        if (nums.length === 1) {
            return nums[0];
        }

        const dp = Array(nums.length).fill(0)
        dp[0] = nums[0]
        dp[1] = Math.max(nums[1], dp[0])

        for (let i = 2; i < nums.length; i ++){
            dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1])
        }
        
        return dp[nums.length-1]
    }
}

