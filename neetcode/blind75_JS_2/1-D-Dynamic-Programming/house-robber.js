// https://neetcode.io/problems/house-robber

/*
edge case 1: if nums.length === 0: return 0
edge case 2: if nums.length === 1: return nums[0]

Need to evaluate if rob current house or do not rob.
If rob then this house value + eval rob(i + 2). since cannot rob next house, must be + 2
if not rob, then eval rob(i + 1)
return max(rob, not rob)

Backtracking and Dynamic programming with memo to store already calculated results to reduce time complexity.

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

        const memo = new Array(nums.length).fill(-1)

        return this.dfs(nums, 0, memo)
    }

    dfs(nums, i, memo) {
        if (i >= nums.length) {
            return 0
        }
        if (memo[i] !== -1) {
            return memo[i]
        }

        const rob = nums[i] + this.dfs(nums, i + 2, memo)

        const notRob = this.dfs(nums, i + 1, memo)

        memo[i] = Math.max(rob, notRob)
        return memo[i]
    }
}
