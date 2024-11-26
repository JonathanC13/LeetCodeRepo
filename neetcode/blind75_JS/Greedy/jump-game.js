// https://neetcode.io/problems/jump-game

class Solution {

    // recursive
    dfs(nums, i) {
        if (i >= nums.length) {
            return false
        }

        if (i === nums.length - 1) {
            return true
        }

        const end = Math.min(nums.length - 1, i + nums[i])
        for (let j = i + 1; j <= end; j ++) {
            if (this.dfs(nums, j)) {
                return true
            }
        }

        return false
    }

    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        if (nums.length === 0) {
            return true
        }

        // recursive
        //return this.dfs(nums, 0)

        // greedy
        let goal = nums.length - 1

        for (let i = nums.length - 2; i >= 0; i --){
            if (i + nums[i] >= goal){
                goal = i
            }
        }

        return goal === 0
    }
}
