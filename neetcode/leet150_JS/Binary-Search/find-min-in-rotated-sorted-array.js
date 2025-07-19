// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

/*

minVal = min(minVal, mid val)

to determine which side to continue the binary search, must check first the sequence from l to r
if (left val <= right)  // increasing and could be same index or non distinct
    minVal = min(minVal, nums[l])   // could be left index
    // since already evaluated left portion, go right since the min val could still be on the right
    l = mid + 1

if left val > mid val
    go left
    r = mid - 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let minVal = Number.POSITIVE_INFINITY
    let l = 0
    let r = nums.length - 1

    while (l <= r) {
        const mid = Math.floor((r - l) / 2) + l

        minVal = Math.min(minVal, nums[mid])

        if (nums[l] <= nums[mid]) {
            minVal = Math.min(minVal, nums[l])
            l = mid + 1
        } else {    // nums[l] > nums[mid]
            r = mid - 1
        }
    }

    return minVal
};