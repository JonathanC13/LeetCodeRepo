// https://neetcode.io/problems/binary-search

/*
Binary search is to systematically halve the search space in search of the target. It works with sorted values sicne it can determine which half to continue the search.

- edge case 1: if nums.length === 0: return false
- edge case 2: if nums.length === 1: return nums[0] === target

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
        if (nums.length === 1) {
            return nums[0] === target ? 0 : -1
        }

        let left = 0
        let right = nums.length - 1

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2)

            if (nums[mid] === target) {
                return mid
            } else if (nums[mid] < target) {
                // go right
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return -1

    }
}
