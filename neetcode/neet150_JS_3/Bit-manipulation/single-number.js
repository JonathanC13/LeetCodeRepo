// https://neetcode.io/problems/single-number/question

/**
 * 1. Assumptions
 *  1. There is guarenteed a solution
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 2
 *      - nums's elements are Number (integer)
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length === 2: return nums[0]
 * 
 *  test cases
 *  1. one integer appears twice
 *      inputs
 *          nums = [3,1,2,3,2]
 *      expected output
 *          1
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  With extra space. A Set to add integer when first seen and if exists remove it. Then the final integer in Set is the solution
 *  Or count frequency and return the integer with 1.
 * 
 *  Without extra space, use XOR method where the same integer will 'zero' itself.
 *  2 = 10
 *  10 XOR 10 = 00
 *  The integer without a duplicate will be the solution since not zeroed
 * 
 * 7. algos
 *  - XOR
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. Complexity
 *  Time: O(n)
 *  Space: O(1)
 *  
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let single = 0
        for (let num of nums) {
            single ^= num
        }

        return single
    }
}
