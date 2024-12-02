// https://neetcode.io/problems/longest-consecutive-sequence

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) {
            return 0
        }

        let max = 0
        const streaks = new Map()

        for (let i = 0; i < nums.length; i ++) {
            if (!streaks.has(nums[i])) {
                streaks.set(nums[i], (streaks.get(nums[i] - 1) || 0) + (streaks.get(nums[i] + 1) || 0) + 1)

                streaks.set(nums[i] - (streaks.get(nums[i] - 1) || 0), streaks.get(nums[i]))
                streaks.set(nums[i] + (streaks.get(nums[i] + 1) || 0), streaks.get(nums[i]))
            
                max = Math.max(max, streaks.get(nums[i]))
            }
        }

        return max
    }
}
