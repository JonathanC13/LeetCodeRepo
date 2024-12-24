// https://neetcode.io/problems/house-robber-ii

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
        
        return Math.max(this.houseRobHelper(nums.slice(1)), this.houseRobHelper(nums.slice(0, nums.length - 1)))
    }

    houseRobHelper(nums) {
        if (nums.length === 0) {
            return 0
        }
        if (nums.length === 1) {
            return nums[0]
        }

        const n = nums.length
        const dp = Array(n).fill(0)
        dp[0] = nums[0]
        dp[1] = Math.max(nums[0], nums[1])
        
        for (let i = 2; i < n; i ++) {
            dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
        }

        return dp[n - 1]
    }
}
