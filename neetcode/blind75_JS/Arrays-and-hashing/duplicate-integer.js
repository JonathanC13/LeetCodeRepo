// https://neetcode.io/problems/duplicate-integer

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const ints = new Set();

        for (let i = 0; i < nums.length; i ++) {
            if (ints.has(nums[i])) {
                return true;
            } else {
                ints.add(nums[i]);
            }
        }

        return false;
    }
}
