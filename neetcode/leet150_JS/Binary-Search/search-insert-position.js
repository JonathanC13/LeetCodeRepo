// https://leetcode.com/problems/search-insert-position/description/?envType=study-plan-v2&envId=top-interview-150

/*
Binary search

If not found at the last Left index; 
    1. since if val < mid: r = mid - 1 therefore val inserted at mid will shift mid up 1.
    2. if val > mid: l = mid + 1

Time: O(log n)
Space: O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length === 0) {
        return 0
    }

    let l = 0
    let r = nums.length - 1
    while (l <= r) {
        const mid = Math.floor((r - l) / 2) + l

        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    return l
};