// https://neetcode.io/problems/find-target-in-rotated-sorted-array/question

/**
 * 1. Assumptions
 *  1. Numbers are unique
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 0
 *      - nums's elements are unique Numbers
 *  2. target
 *      - typeof target === 'String'
 *      - target is a Number
 * 
 * 3. time and space constraints
 *  BTTC: O(log(n))
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length === 0: return -1
 *  2. if nums.length === 1: return if nums[0] === target ? 0 : -1
 * 
 *  test cases
 *  1. left side is ascending and target in left
 *      inputs
 *          nums = [1, 2, 3, 4, 5, 6]
 *          target = 2
 *      expected output
 *          1
 *  2. left side is ascending and target in right
 *      inputs
 *          nums = [1, 2, 3, 4, 5, 6]
 *          target = 5
 *      expected output
 *          4
 *  3. left side is not ascending and target in left
 *      inputs
 *          nums = [5, 6, 1, 2, 3, 4]
 *          target = 6
 *      expected output
 *          1
 *  4. left side is not ascending and target in right
 *      inputs
 *          nums = [5, 6, 1, 2, 3, 4]
 *          target = 3
 *      expected output
 *          4
 *  5. length = 2 and rotated by 1
 *      inputs
 *          nums = [2, 1]
 *          target = 1
 *      expected output
 *          1
 *      
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Since desire Time: O(log(n)), need to apply binary search. Due to the original Array being sorted in ascending order, it can be applied but the determination to go left or right needs to be adjusted to find the target
 * 
 *  Cases:
 *      1. left side is ascending
 *          1.1. go left if target >= nums[left] && target < nums[mid]
 *          1.2. else right
 *      2. left side is not ascending
 *          1.1. go left if target >= nums[left] || target < nums[mid]
 *          1.2. else right
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
 * 
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

        let l = 0
        let r = nums.length - 1
        while (l <= r) {
            const mid = Math.floor((r - l) / 2) + l

            if (target === nums[mid]) {
                return mid
            } else if (nums[l] <= nums[mid]) {
                if (target >= nums[l] && target < nums[mid]) {
                    r = mid - 1
                } else {
                    l = mid + 1
                }
            } else {
                if (target >= nums[l] || target < nums[mid]) {
                    r = mid - 1
                } else {
                    l = mid + 1
                }
            }
        }

        return -1
    }
}
