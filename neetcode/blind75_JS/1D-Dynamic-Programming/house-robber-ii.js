// https://neetcode.io/problems/house-robber-ii

class Solution {

    /*
    must conduct the dp twice:
        1. for excluding the first house
        2. for exluding the last house
    */
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 0) { return 0}
        if (nums.length === 1) { return nums[0]}
        
        return Math.max(this.robCheck(nums.slice(1)), this.robCheck(nums.slice(0, nums.length - 1)))
        
    }

    robCheck(houses) {
        if (houses.length === 0) { return 0}
        if (houses.length === 1) { return houses[0]}

        const dp = Array(houses.length).fill(0)
        dp[0] = houses[0]
        dp[1] = Math.max(houses[0], houses[1])

        for (let i = 2; i < houses.length; i ++) {
            // rob, not rob
            dp[i] = Math.max(dp[i - 2] + houses[i], dp[i - 1])
        }

        return dp[houses.length - 1]
    }
}
