// https://neetcode.io/problems/jump-game

/*
edge case 1: if nums.length <= 1: return true

recursive backtrack with memo 1D
    j paths; each index jump from max jump toward 0

    base cases:
        1. if i >= length -1: return true
        2. if memo[i] !== null: return memo[i]

- Time: O(n^2)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        if (nums.length <= 1) {
            return true
        }

        const memo = new Array(nums.length).fill(null)
        this.dfs(nums, 0, memo)
        return memo[0]
    }

    dfs(nums, i, memo) {
        if (i >= nums.length - 1) {
            return true
        }
        if (memo[i] !== null) {
            return memo[i]
        }

        memo[i] = false
        for (let j = nums[i]; j > 0; j --) {
            if (this.dfs(nums, i + j, memo)) {
                memo[i] = true
                break
            }
        }

        return memo[i]
    }
}
