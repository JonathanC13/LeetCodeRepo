// https://neetcode.io/problems/house-robber-ii

/*
conduct house robber 2 times:
    1. exclude first house
    2. exclude last house
    This guarentees the dfs will not trigger the alarms on the ends if they are not included.

- Time: O(2 * n)
- Space: O(2 * n)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) {
            return nums[0]
        }

        const memo1 = new Array(nums.length).fill(-1)
        this.dfs(nums.slice(1), 0, memo1)

        const memo2 = new Array(nums.length).fill(-1)
        this.dfs(nums.slice(0, nums.length - 1), 0, memo2)

        return Math.max(memo1[0], memo2[0])
    }

    dfs(nums, i, memo) {
        if (i >= nums.length) {
            return 0
        }
        if (memo[i] !== -1) {
            return memo[i]
        } 

        const rob = this.dfs(nums, i + 2, memo) + nums[i]
        const notRob = this.dfs(nums, i + 1, memo)

        memo[i] = Math.max(rob, notRob)
        return memo[i]
    }
}
