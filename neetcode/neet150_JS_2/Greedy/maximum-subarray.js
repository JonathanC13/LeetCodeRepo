// https://neetcode.io/problems/maximum-subarray

/*
iterate the nums in one direction
    calculate the subarray sum
    record if larger than currently recorded max
    AFTER, if the sum results in negative, reset the sum to 0, this is because the previous subarray does not benefit in search of the max so discard it.

- Time: O(n)
- Space: O(1)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        if (nums.length === 0) {
            return 0
        }

        let max = nums[0]
        let subArraySum = 0

        for (let i = 0; i < nums.length; i ++) {
            subArraySum += nums[i]
            max = Math.max(max, subArraySum)

            if (subArraySum < 0) {
                subArraySum = 0
            }
        }

        return max
    }
}
