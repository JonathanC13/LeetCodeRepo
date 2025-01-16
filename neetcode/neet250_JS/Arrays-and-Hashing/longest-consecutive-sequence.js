// https://neetcode.io/problems/longest-consecutive-sequence

/*
O(n) time means iterate nums once

maintain variable for max streak seen
create a Map for the key: number, value: streak it contributes to or if on the end of a streak, updated.

iterate the nums
    if nums[i] not in Map
        Map insert key: nums[i] and value: get streak of nums[i] - 1 number if exists in Map + streak of nums[i] + 1 number if exists
        Update streak of the lowest number of the streak because if another number connects to it, it will continue the streak. The key will be nums[i] - (streak of nums[i] - 1)
        update streak of the highest number of the streak. The key will be nums[i] + (streak of nums[i] + 1)

        max = Math.max(max, Map.get(nums[i]))

    // else no reason to update Map 

return max

Time: O(n)
Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length < 2) {
            return nums.length
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
