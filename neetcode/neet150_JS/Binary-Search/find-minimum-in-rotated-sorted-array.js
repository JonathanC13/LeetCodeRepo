// https://neetcode.io/problems/find-minimum-in-rotated-sorted-array

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if (nums.length === 0) {
            return null
        }

        let left = 0
        let right = nums.length - 1

        let min = Number.POSITIVE_INFINITY

        while (left <= right) {
            // since sorted asc, if left val < right val do not need to continue, check if the left value is potentially the new min
            if (nums[left] < nums[right]) {
                min = Math.min(min, nums[left])
                break;
            }

            let mid = left + Math.floor((right - left)/2)

            min = Math.min(min, nums[mid])

            if (nums[mid] > nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return min
    }
}
