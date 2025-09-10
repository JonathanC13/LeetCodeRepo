// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

/**
2 scenarios:
    1. rotated so that the left of mid is still in increasing order
        e.g. [2, 3, 4, 5, 1]
        therefore:
            if nums[l] < target AND nums[r] > target. 
                search in left
            else right

    2. left is not in increasing order
        e.g. [4, 5, 1, 2, 3]
        therefore:
            if nums[l] < target OR nums[r] > target
                search left
            else right

- Time: O(log n)
- Space: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0
    let r = nums.length - 1

    while (l <= r) {
        const mid = Math.floor((r - l) / 2) + l

        if (nums[mid] === target) {
            return mid
        }

        if (nums[l] <= nums[mid]) {
            // increasing

            if (nums[l] <= target && nums[mid] > target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        } else {
            // not increasing

            if (nums[l] <= target || nums[mid] > target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
    }
    return -1
};