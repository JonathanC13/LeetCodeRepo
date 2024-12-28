// https://neetcode.io/problems/maximum-subarray

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        if (nums.length === 0) {
            return 0
        }

        let max = Number.NEGATIVE_INFINITY
        let local = 0

        for (let i = 0; i < nums.length; i ++) {
            local += nums[i]
            max = Math.max(max, local)

            if (local < 0) {
                local = 0
            }
        }

        return max
    }
}
