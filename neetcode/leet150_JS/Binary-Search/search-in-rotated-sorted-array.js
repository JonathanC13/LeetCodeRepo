// https://leetcode.com/problems/search-in-rotated-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

/*
Time of log n requires binary search

Like always determine mid and check if target is there.
To determine which side to continue the search:
    left:
        determine the sequence order
            if (left val < mid val) // strictly increasing
                go left:
                if target >= left val AND target < mid val

            if mid val < left val
                go left:
                if target >= left val
                or
                target < mid val
    else go right
        more specifically
        if mid val < right val
            if target > mid val AND target <= right val

        if mid val > right val
            if target > mid val

- Time: O(log n)
- Space: O(1)
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
        const mid = Math.floor((r - l)/2) + l
        if (nums[mid] === target) {
            return mid
        } else if (nums[l] <= nums[mid]) {  // <= since mid and left can be the same and in the case of non-distinct
            if (target >= nums[l] && target < nums[mid]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        } else {    // essentially if (nums[l] > nums[mid]) {    
            if (target >= nums[l] || target < nums[mid]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
    }

    return -1
};