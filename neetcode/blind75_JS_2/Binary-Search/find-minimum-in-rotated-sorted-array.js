// https://neetcode.io/problems/find-minimum-in-rotated-sorted-array

/*
edge case 1: if nums.length === 0: return null
edge case 2: if nums.length === 1: return nums[0]

employ binary search to achieve a time compexity of O(log n)

since the Array is rotated, need to determine which half to continue the search based on the mid value and the ends of the current halves.

e.x. 1. No rotation
    [1, 2, 3, 4, 5, 6]
    mid = 3
    if mid value < right end value, then the minimum value must be in the left half.
    else go right

e.x. 2. rotation of 1 (right)
    [6, 1, 2, 3, 4, 5]
    mid = 2
    same as e.x. 1
    if mid value < right end value, then the minimum value must be in the left half.
    else go right

e.x. 3. rotation of 3
    [4, 5, 6, 1, 2, 3]
    mid = 6
    if mid value < right end value, then the minimum value must be in the left half.
    else go right

- Time: O(log n)
- Space: O(1)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if (nums.length === 0) {
            return null
        }
        if (nums.length === 1) {
            return nums[0]
        }

        let l = 0
        let r = nums.length - 1
        let min = Number.POSITIVE_INFINITY

        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2)

            min = Math.min(min, nums[mid])

            if (nums[mid] < nums[r]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }

        return min
    }
}
