// https://neetcode.io/problems/jump-game

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        if (nums.length < 2) {
            return true
        }

        const n = nums.length
        let goal = n - 1

        for (let i = n - 2; i >= 0; i --) {
            if (nums[i] >= goal - i) {
                goal = i
            }
        }

        return goal === 0 ? true : false
    }
}
