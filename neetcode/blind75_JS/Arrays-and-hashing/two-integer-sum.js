// https://neetcode.io/problems/two-integer-sum

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const differences = new Object();

        for (let i = 0; i < nums.length; i ++) {
            if (Object.hasOwn(differences, nums[i])) {
                return [differences[nums[i]], i]
            } else {
                differences[target - nums[i]] = i
            }
        }

        return []
    }
}
