// https://leetcode.com/problems/minimum-size-subarray-sum/

/*
- edge case 1: if nums.length === 0: return 0

let minLen = Number.POSITIVE_INIFINITY
let sum = 0
let l = 0
iterate nums, r, to < nums.length
    sum of current window += nums[r]

    while (l <= r && sum >= target) {
        minLen = Math.min(minLen, r - l + 1)
        //move left of window forward
        sum -= nums[l]
        l += 1
    }

return minLen

- Time: O(n). n = nums.length
- Spacel: O(1)
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

    let minLen = Number.POSITIVE_INFINITY
    let sum = 0
    let l = 0
    for (let r = l; r < nums.length; r ++) {
        sum += nums[r]
        while (l <= r && sum >= target) {
            minLen = Math.min(minLen, r - l + 1)
            sum -= nums[l]
            l += 1
        }

    }
    return minLen === Number.POSITIVE_INFINITY ? 0 : minLen
};