// https://neetcode.io/problems/house-robber-ii

/*
To ensure no adjacent houses on the ends are both robbed.
Conduct house robber 2 times and get the max value
    1. exclude the first house
    2. exclude the last house
    This guarentees both ends are not robbed.

- Time: O(n).   2 * n
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

        let memo = new Array(nums.length).fill(-1)
        const exLastHouse = this.dfs(nums.slice(0, nums.length - 1), 0, memo)

        memo = new Array(nums.length).fill(-1)
        const exFirstHouse = this.dfs(nums.slice(1), 0, memo)

        return Math.max(exLastHouse, exFirstHouse)
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
