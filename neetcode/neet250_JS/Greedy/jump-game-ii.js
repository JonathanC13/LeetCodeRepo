// https://neetcode.io/problems/jump-game-ii

/*
dfs recursive
    - Time: O(n!)
    - Space: O(n)

with DP Array
    - Time: O(n ^ 2)
    - Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        if (nums.length === 0) {
            return 0
        }
        const dp = new Array(nums.length).fill(-1)
        return this.dfs(nums, 0, dp)
    }

    dfs(nums, i, dp) {
        if (i >= nums.length - 1) {
            return 0
        }
        if (dp[i] !== -1) {
            return dp[i]
        }

        let minJumps = Number.POSITIVE_INFINITY
        for (let j = nums[i]; j > 0; j --) {
            minJumps = Math.min(minJumps, 1 + this.dfs(nums, i + j, dp))
        }
        dp[i] = minJumps
        return dp[i]
    }
}
