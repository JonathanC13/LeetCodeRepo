// https://neetcode.io/problems/maximum-subarray

/*
edge case 1: if nums.length === 0: return 0
edge case 2: if nums.length === 1: return nums[0]

let max = negative infi
let subSum = 0  // to hold the current subarray sum

iterate nums
    subSum += nums[i]   // include the current value
    max = Math.max(max, subSum)

    if the subSum is negative, disregard all the values by setting subSum = 0. This is so that the next iteration is will only include the next value, meaning new subarray start

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
        if (nums.length === 1) {
            return nums[0]
        }

        let max = Number.NEGATIVE_INFINITY
        let subSum = 0

        for (let i = 0; i < nums.length; i ++) {
            subSum += nums[i]
            max = Math.max(max, subSum)

            if (subSum < 0) {
                subSum = 0
            }
        }

        return max
    }
}
