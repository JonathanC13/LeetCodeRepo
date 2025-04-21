// https://neetcode.io/problems/find-minimum-in-rotated-sorted-array

/*
Since sorted and searching, can use binary search but must determine the criteria to choose which half to continue into.

1. If nums[mid] < nums[right], then it is strictly increasing in the right half. That indicates that a smaller number may be found in the left.
2. else go right

e.g:
    1. [1,2,3,4,5,6]
        1st search decision: go left since right half is strictly increasing

    2. [3,4,5,6,1,2] if it was rotated 4 times
        1st search decision: go right since right half is not strictly increasing

    3. [5,6,1,2,3,4] if it was rotated 2 times.
        1st search decision: go left

- Time: O(log n)
- Space: O(1)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0
        let r = nums.length - 1

        let min = nums[0]
        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2)
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
