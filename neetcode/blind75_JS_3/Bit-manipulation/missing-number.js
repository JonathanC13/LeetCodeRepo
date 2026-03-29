// https://neetcode.io/problems/missing-number/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 0
 *      - nums element's are Number
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if n === 0: return -1
 * 
 *  test cases
 *  1. missing 0
 *      inputs
 *          nums = [1,2,3]
 *      expected output
 *          0
 *  2. missing a middle number
 *      inputs
 *          nums = [0,1,3]
 *      expected output
 *          2
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. method 1: Use visited Array of length n + 1
 *      For values in nums, mark visited
 *      Iterate and return the first marked unvisited
 *      Time: O(2*n)
 *      Space: O(n + 1)
 *  2. method 2: Use bit manipulation
 *      Since the nums values range from 0 to n
 *      res = nums.length
 *      iterate nums and res = res XOR i XOR nums[i]
 *      The final value of res is the missing value. If a element value exists it will XOR with the same index value to zero itself out.
 * 
 * 7. algos
 *  - bit manipulation
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(1)
 *      
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        if (nums.length === 0) {
            return -1
        }

        let res = nums.length
        for (let i = 0; i < nums.length; i ++) {
            res = res ^ i ^ nums[i]
        }

        return res
    }
}
