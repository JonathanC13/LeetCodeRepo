// https://neetcode.io/problems/jump-game-ii

/*
recursive backtrack with 1D memo to store already calculated the min number of jumps to end for an index
    j paths; each index gets number of jumps from jump lengths toward 0

    base cases:
        1. if i >= nums.length - 1: return 0
        2. if memo[i] !== Number.POSITIVE_INFINITY, return memo[i]

- Time: O(n^2)
- Space: O(n)

*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        if (nums.length <= 1) {
            return 0
        }

        const memo = new Array(nums.length).fill(Number.POSITIVE_INFINITY)
        this.dfs(nums, 0, memo)
        return memo[0] === Number.POSITIVE_INFINITY ? 0 : memo[0]
    }

    dfs(nums, i, memo) {
        if (i >= nums.length - 1) {
            return 0
        }
        if (memo[i] !== Number.POSITIVE_INFINITY) {
            return memo[i]
        }

        for (let j = nums[i]; j > 0; j --) {
            memo[i] = Math.min(memo[i], 1 + this.dfs(nums, i + j, memo))
        }

        return memo[i]
    }
}
