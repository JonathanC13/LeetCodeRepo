// https://neetcode.io/problems/target-sum

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const totalSum = nums.reduce((acc, curr) => {return acc + curr}, 0)

        const dp = Array(nums.length).fill().map((e) => {return Array(2 * totalSum + 1).fill(Number.NEGATIVE_INFINITY)})

        const res = this.dfs(0, nums, target, 0, dp, totalSum)
        console.log(dp)
        return res
    }

    dfs(i, nums, target, currTotal, dp, totalSum) {
        if (i === nums.length) {
            return currTotal === target ? 1 : 0
        }

        if (dp[i][currTotal + totalSum] !== Number.NEGATIVE_INFINITY) {
            return dp[i][currTotal + totalSum]
        }

        dp[i][currTotal + totalSum] = this.dfs(i + 1, nums, target, currTotal + nums[i], dp, totalSum) + this.dfs(i + 1, nums, target, currTotal - nums[i], dp, totalSum)
    
        return dp[i][currTotal + totalSum]
    }
}
