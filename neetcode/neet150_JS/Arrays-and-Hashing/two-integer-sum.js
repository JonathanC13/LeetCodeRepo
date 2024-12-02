// https://neetcode.io/problems/two-integer-sum

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (nums.length < 2) {
            return []
        }

        const diff = new Map()

        for (let i = 0; i < nums.length; i ++) {
            if (diff.has(nums[i])) {
                return [diff.get(nums[i]), i]
            } else {
                diff.set(target - nums[i], i)
            }
        }

        return []
    }
}
