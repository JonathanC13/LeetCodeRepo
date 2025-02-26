// https://neetcode.io/problems/find-minimum-in-rotated-sorted-array

/*
- edge case 1: if nums.length === 0: return -1

record the min value seen.

since it is rotated, need to determine which halve to continue the search to achieve Time O(log n)

if rotated such that still in asc order
    [1,2,3,4,5,6]
    if val[mid] < right: go left
    else go right

if rotated such that the right contains the min val:
    Two scenarios.
    1. mid val > right: go right
    e.g. [3,4,5,6,1,2]
    2. mid val < right: go left
    e.g. [5,6,1,2,3,4]

- Time: O(log n)
- Space: O(1)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0
        let right = nums.length - 1

        let minFound = Number.POSITIVE_INFINITY
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2)
            minFound = Math.min(minFound, nums[mid])
            if (nums[mid] < nums[right]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

        return minFound
    }
}
