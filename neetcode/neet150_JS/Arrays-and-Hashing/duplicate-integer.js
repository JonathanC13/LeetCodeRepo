// https://neetcode.io/problems/duplicate-integer

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length < 2){
            return false
        }

        const appear = new Set()

        for (let i = 0; i < nums.length; i ++) {
            if (appear.has(nums[i])) {
                return true
            } else {
                appear.add(nums[i])
            }
        }

        return false
    }
}
