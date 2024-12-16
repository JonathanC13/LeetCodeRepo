// https://neetcode.io/problems/find-target-in-rotated-sorted-array

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
            let mid = left + Math.floor((right - left) / 2)
            if (nums[mid] === target) {
                return mid
            } 

            if (nums[left] <= nums[mid]) {
                // [1,2,3,4,5,6]
                if (target > nums[mid] || target < nums[left]) {
                    left = mid + 1
                } else {
                    right = mid - 1
                }
            } else {
                // [5 6 1 2 3 4]
                if (target < nums[mid] || target > nums[right]) {
                    right = mid - 1
                } else {
                    left = mid + 1
                }
            }
        }

        return -1
    }
}

