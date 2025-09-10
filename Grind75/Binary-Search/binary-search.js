// https://leetcode.com/problems/binary-search/description/

/**
binary search for:
Time: O(log n)
Space: O(1)
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
        } else if (nums[mid] > target) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    return -1
};