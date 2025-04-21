// https://neetcode.io/problems/find-target-in-rotated-sorted-array

/*
Since sorted and searching, can use binary search but must determine the criteria to choose which half to continue into.

1. if right is strictly increasing: nums[mid] < nums[r]
    1.1. if target > nums[mid] AND target <= nums[r], go right
    1.2. else go left

2. else
    2.1. target > nums[mid] OR target <= nums[r], go right
    2.2. else go left

- Time: O(log n)
- Space: O(1)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length - 1

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2)
            if (nums[mid] === target) {
                return mid
            } else if (nums[mid] < nums[r]) {
                if (target > nums[mid] && target <= nums[r]) {
                    l = mid + 1
                } else {
                    r = mid - 1
                }
            } else {
                if (target > nums[mid] || target <= nums[r]) {
                    l = mid + 1
                } else {
                    r = mid - 1
                }
            }
        }

        return -1
    }
}
