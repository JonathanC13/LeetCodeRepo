// https://neetcode.io/problems/maximum-product-subarray

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {

        if (nums.length === 0) {
            return 0
        }

        let prefix = 0
        let postfix = 0
        let max = nums[0]

        for (let i = 0; i < nums.length; i ++) {
            prefix = nums[i] * (prefix === 0 ? 1 : prefix)
            postfix = nums[nums.length - 1 - i] * (postfix === 0 ? 1 : postfix)
            max = Math.max(max, prefix, postfix)
        }

        return max === -0 ? 0 : max
    }
}
