// https://leetcode.com/problems/search-insert-position/

/*
Same as binary-search but record the final index when all indexes exhausted.

- Time: O(log n)
- Space: O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length === 0) {
        return -1
    }
    if (nums.length === 1) {
        if (target <= nums[0]) {
            return 0
        } else {
            return 1
        }
    }

    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)

        if (nums[mid] === target) {
            return mid
        } else if (target < nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    // why left? because if the target is < final nums[mid], left is === mid and the right is moved to mid - 1. The place of insert would be at left and the mid is shifted up 1
    // if the target is > final nums[mid]. the left === mid + 1. 
    return left
};