// https://neetcode.io/problems/duplicate-integer/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation  
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 0
 *      - nums's elements are Numbers
 * 
 * 3. time and space constraints
 *  BTTC: O(n)  // n = nums.length
 *  Space: O(n) // need a structure to record previously seen Numbers
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length <= 1: return false
 * 
 *  test cases
 *  1. no duplicates
 *      inputs
 *          nums = [1, 2, 3, 4, 5, 6]
 *      expected output
 *          false
 * 
 *  2. at least one duplicate
 *      inputs
 *          nums = [1, 2, 3, 4, 1, 5]
 *      expected output
 *          true
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Add current Number into a Set (hash table), if already exists then it indicates duplicate return true
 * 
 * 7. Algorithms
 *  - iteration
 * 
 * 8. data structures
 *  - Arrays
 *  - Set
 * 
 * 9. complexity
 *  Time: O(n)  // n = nums.length
 *  Space: O(n)
 * 
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length <= 1) {
            return false
        }

        const setSeen = new Set()

        for (let i = 0; i < nums.length; i ++) {
            if (setSeen.has(nums[i])) {
                return true
            }
            setSeen.add(nums[i])
        }

        return false
    }
}
