// https://leetcode.com/problems/minimum-size-subarray-sum/description/?envType=study-plan-v2&envId=top-interview-150

/*
1. if nums.length === 0: return 0

minLen = pos infin
windowSum = 0
l = 0

iterate r over nums
    windowSum += nums[r]

    while (windowsSum >= target && l <= r) {
        minLen = min(minLen, r - l + 1)

        windowSum -= nums[l]
        l += 1
    }

return minLen

- Time: O(n)
- Space: O(1)

*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    if (nums.length === 0) {
        return 0
    }

    let windowSum = 0
    let minLen = Number.POSITIVE_INFINITY

    let l = 0
    for (let r = 0; r < nums.length; r ++) {
        windowSum += nums[r]
        while (l <= r && windowSum >= target) {
            minLen = Math.min(minLen, r - l + 1)
            windowSum -= nums[l]
            l += 1
        }
    }

    return minLen === Number.POSITIVE_INFINITY ? 0 : minLen
};