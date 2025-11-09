// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

/**
Binary search
Time: O(log n)
Space: O(1) // iterative is O(1). O(log n) for recursive
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) {
        return -1
    }
    
    let l = 0
    let r = nums.length - 1

    while (l <= r) {
        const mid = Math.floor((r - l) / 2) + l
        if (nums[mid] === target) {
            return mid
        } else if (nums[l] <= nums[mid]) {
            // left is in non-descending order
            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        } else {
            if (nums[l] <= target || target < nums[mid]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
    }

    return -1
};