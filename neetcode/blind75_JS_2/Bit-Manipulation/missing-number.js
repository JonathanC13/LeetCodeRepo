// https://neetcode.io/problems/missing-number

/*
nums is sorted in ascending order

res = nums.length
from 0 to < nums.length
    res ^= i ^ nums[i]  // the end result will be the missing number. This works because 1 XOR 1 is 0 and etc, therefore when there is a missing number the res will be it. There will always be a missing number because the range is [0. n]

- Time: O(n)
- Space: O(1)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let res = nums.length
        for (let n = 0; n < nums.length; n ++) {
            res ^= n ^ nums[n]
        }

        return res
    }
}
