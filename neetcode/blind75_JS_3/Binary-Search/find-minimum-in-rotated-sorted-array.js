// https://neetcode.io/problems/find-minimum-in-rotated-sorted-array/question

/**
 * 1. Assumptions
 *  1. original Array sorted in ascending order
 *  2. Values are unique
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 0
 *      - nums's elements are Numbers that are unique
 * 
 * 3. time and space constraints
 *  BTTC: O(log(n))
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length === 0: return null
 *  2. if nums.length === 1: return nums[0]
 * 
 *  test cases
 *  1. the minimum is on the left and rotated such that numbers are greater of the left of the minimum
 *      inputs
 *          nums = [5, 6, 0, 1, 2, 3, 4]
 *      expected output
 *          0
 * 
 *  2. the minimum is on the left and sorted in ascending
 *      inputs
 *          nums = [0, 1, 2, 3, 4, 5, 6]
 *      expected output
 *          0
 * 
 *  3. the minimum is on the right and rotated such that numbers greater are on the left
 *      inputs
 *          nums = [3, 4, 5, 6, 0, 1, 2]
 *      expected output 
 *          0
 * 
 *  4. floor decision
 *      inputs
 *          nums = [1, 0]
 *      expected output
 *          0
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  To achieve Time O(log(n)), need binary search. Since binary search only works on sorted sets of values need to adjust algorithm to choose which side to search
 * 
 *  if left <= mid, then left is non-descending
 *      if left < right
 *          go left, since the original Array is sorted
 *      else
 *          go right
 *  else
 *      // in situation like: [5, 6, 0, 1, 2, 3, 4]
 *      go left
 * 
 * 7. algos
 *  - Binary Search
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9. complexity
 *  Time: O(log(n))
 *  Space: O(1)
 * 
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

        let min = nums[0]
        let l = 0
        let r = nums.length - 1

        while (l <= r) {
            const mid = Math.floor((r - l) / 2) + l
            min = Math.min(min, nums[mid])

            if (nums[l] <= nums[mid]) {
                if (nums[l] < nums[r]) {
                    r = mid - 1
                } else {
                    l = mid + 1
                }
            } else {
                r = mid - 1
            }
        }

        return min
    }
}
