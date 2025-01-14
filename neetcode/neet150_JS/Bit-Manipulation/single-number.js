// https://neetcode.io/problems/single-number

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let res = 0
        for (let i = 0; i < nums.length; i ++) {
            res = res ^ nums[i]
        }

        return res
    }
}
