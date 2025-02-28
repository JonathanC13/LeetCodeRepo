// https://neetcode.io/problems/house-robber

/*
- edge case 1: if nums.length === 0: return 0
- edge case 2: if nums.length === 1: return nums[0]

DP top down with memoization
Recurise
DFS()
    - base case 1: if i >= nums.length: return 0
    - base case 2: memo
        if (dp[i] !=== -1) {
            return dp[i]
        }

    // 2 options
    // 1. don't rob and move to next house
    // 2. or rob and move to house + 2

    dp[i] = Math.max(don't rob, rob)
    return dp[i]

- Time: O(n). without DP, 2^n
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

        const dp = new Array(nums.length).fill(-1)

        return this.dfs(0, nums, dp)
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
