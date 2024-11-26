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
        if (nums.length === 1) {
            return nums[0]
        }

        let res = nums[0]
        let localSum = 0

        nums.forEach((num) => {
            localSum += num
            res = Math.max(res, localSum)
            if (localSum < 0) {
                localSum = 0
            }
        })

        return res
    }
}
