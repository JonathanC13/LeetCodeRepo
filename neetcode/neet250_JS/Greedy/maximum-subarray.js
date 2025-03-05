// https://neetcode.io/problems/maximum-subarray

/*
- edge case 1: if nums.length === 0: return 0

res = nums[0]
localSum = 0
iterate nums
    add current num to localSum
    res = Math.max(res, localSum)

    if the localSum < 0
        reset localSum to 0 because we want to remove that portion of the Array that results in negative

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

        let res = nums[0]
        let localSum = 0

        for (let i = 0; i < nums.length; i ++) {
            localSum += nums[i]
            res = Math.max(res, localSum)

            if (localSum < 0) {
                localSum = 0
            }
        }

        return res
    }
}
