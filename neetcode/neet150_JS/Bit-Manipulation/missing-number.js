// https://neetcode.io/problems/missing-number

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length
        let missing = n
        for (let i = 0; i < n; i ++) {
            missing ^= i ^ nums[i]
        }

        return missing
    }
}
