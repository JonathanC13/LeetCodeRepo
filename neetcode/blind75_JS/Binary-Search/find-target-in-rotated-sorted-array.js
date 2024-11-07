// https://neetcode.io/problems/find-target-in-rotated-sorted-array

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length-1
        let mid = 0

        while (left <= right) {
            mid = left + Math.floor((right - left) / 2)
            if (nums[left] === target) {return left}
            else if (nums[mid] === target) {return mid}
            else if (nums[right] === target) {return right}

            if (nums[left] < nums[mid]) {
                if (target > nums[mid] || target < nums[left]) {
                    left = mid + 1
                } else {
                    right = mid - 1
                }
            } else {
                if (target > nums[left] || target < nums[mid]) {
                    right = mid - 1
                } else {
                    left = mid + 1
                }
            }
        }

        return -1
    }
}
