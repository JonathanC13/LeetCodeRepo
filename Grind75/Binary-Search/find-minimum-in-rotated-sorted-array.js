// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

/**
binary search
    let min = nums[0]

    while (l <= r) {
        get mid

        // determine which half a new min could be
        if (left is purely increasing) {
            record if nums[l] is a new min
            then continue search in the right half
        } else {
            record if nums[mid] is a new min
            then continue search in the left half
        }
    }

- Time: O(log n)
- Space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0
    let r = nums.length - 1
    let min = nums[0]

    while (l <= r) {
        const mid = Math.floor((r - l) / 2) + l

        if (nums[l] <= nums[mid]) {
            min = Math.min(min, nums[l])
            l = mid + 1
        } else {
            min = Math.min(min, nums[mid])
            r = mid - 1
        }
    }

    return min
};