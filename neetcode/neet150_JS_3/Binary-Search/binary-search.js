// https://neetcode.io/problems/binary-search/question

/**
 * 1. Assumptions
 *  1. Given: nums sorted in ascending order
 *  2. elements in nums are unique
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 0
 *      - nums element's are Number
 *  2. target
 *      - typeof target === 'number'
 * 
 * 3. time and space constaints
 *  BTTC: O(log(n)) // log(n) constraint indicates binary search
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length === 0: return -1
 * 
 *  test cases
 *  1. target exists
 *      inputs
 *          nums = [1,2,3,4,5,6], target = 3
 *      expected output
 *          2
 *  2. target does not exist
 *      inputs
 *          nums = [1,2,3,4,5,6], target = 7
 *      expected output
 *          -1
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Binary search to achieve time: O(log(n))
 *  get the middle of l and r
 *      if (nums[mid] === target): return mid
 *      else if (nums[mid] > target): r = mid - 1
 *      else: l = mid + 1
 * 
 *  return -1
 * 
 * 7. algos
 *  - binary search
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(log(n))
 *  Space: O(1)
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

        let l = 0
        let r = nums.length - 1

        while (l <= r) {
            const m = Math.floor((r - l) / 2) + l   // to avoid potential int overflow if l + r > max in equation floor((l + r) / 2)

            if (nums[m] === target) {
                return m
            } else if (nums[m] > target) {
                r = m - 1
            } else {
                l = m + 1
            }
        }

        return -1
    }
}
