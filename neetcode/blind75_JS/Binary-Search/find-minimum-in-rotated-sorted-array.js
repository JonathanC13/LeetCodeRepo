// https://neetcode.io/problems/find-minimum-in-rotated-sorted-array

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if (nums.length === 1){
            return nums[0]
        }

        let left = 0
        let right = nums.length - 1
        let mid = 0
        let min = Number.POSITIVE_INFINITY

        while (left <= right) {
            mid = left + Math.floor((right - left)/2)
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
