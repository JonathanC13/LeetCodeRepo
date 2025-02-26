// https://neetcode.io/problems/find-target-in-rotated-sorted-array 
/*
- edge case 1: if nums.length === 0: return -1

Need to interpret how each halve is arranged and then decide if the target is which one.

scenarios:
    1. [1,2,3,4,5,6]. Rotated such that still in asc order.
        Check the 'arrangement'; if mid val < num right, that section is ASC 
        And then if the target is > mid val and <= num right: Go right
        ELSE left

    2. [5,6,1,2,3,4]. same case as above. The right half is ASC so if the target is within that range, go right

    3. [3,4,5,6,1,2]. case where the mid val is > num right, that secion contains the start of the original Array.
        If the target is <= right OR > mid val
        else go left

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
        if (nums.length === 0) {
            return -1
        }

        let left = 0
        let right = nums.length - 1

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2)

            if (nums[mid] === target) {
                return mid
            } else if ((nums[mid] < nums[right] && target > nums[mid] && target <= nums[right]) ||
                (nums[mid] > nums[right] && (target <= nums[right] || target > nums[mid]))) 
            {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return -1
    }
}
