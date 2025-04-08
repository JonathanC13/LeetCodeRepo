// https://neetcode.io/problems/jump-game

/*
- edge case 1: if nums.length <= 1: return true

recursive dfs backtrack to determine if there is a path to the last index

- Time: O(n!)
- Space: O(n)

Reduce Time with memo
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

        // return this.dfs(nums, 0)
        const memo = new Array(nums.length).fill(null)
        memo[nums.length - 1] = true
        return this.dfsMemo(nums, 0, memo)
    }

    dfsMemo(nums, i , memo) {
        if (i >= nums.length - 1) {
            return true
        }
        if (memo[i] !== null) {
            return memo[i]
        }
        
        for (let j = nums[i]; j > 0; j --) {
            if (this.dfs(nums, i + j)) {
                memo[i] = true
                return true
            }
        }
        memo[i] = false
        return memo[i]
    }

    dfs(nums, i) {
        if (i >= nums.length - 1) {
            return true
        }

        for (let j = nums[i]; j > 0; j --) {
            if (this.dfs(nums, i + j)) {
                return true
            }
        }

        return false
    }
}
