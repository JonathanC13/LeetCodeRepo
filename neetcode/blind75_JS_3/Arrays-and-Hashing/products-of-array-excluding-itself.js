// https://neetcode.io/problems/products-of-array-discluding-self/question

/**
 * With the division operator:
 *  - Get the total product of all the nums excluding 0, if there is a zeroes then count them; zeros ++
 *  - if zeros > 1:
 *      return res Array with all 0
 *  - result Array
 *      iterate len
 *          if zeros > 0
 *              if nums[i] === 0: res[i] = total
 *              else: res[i] = 0
 *          else
 *              res[i] = total / nums[i]
 *  
 * 
 * Without division
 * 1. Assumptions
 *  1. nums.length >= 2
 * 
 * 2. input validation
 *  - nums
 *      - nums instanceof Array
 *      - nums.length >= 2 so that the result has some values
 *      - nums's elements are Numbers within 32 bit range
 * 
 * 3. time and space constraints
 *  BTTC: O(n)  // n + n + n
 *  Space: O(n) // n + n + n. prefix, suffix, result
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length < 2: return []
 *  2. if nums.length === 2: return [nums[1], nums[0]]
 * 
 *  test cases
 *  1. without 0
 *      input
 *          nums = [1, 2, 4, 6]
 *      expected output
 *          [48,24,12,8]
 *  2. with 0
 *      input
 *          nums = [-1, 0, 1, 2, 3]
 *      expected output
 *          [0, -6, 0, 0, 0]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  populate a prefix and suffix products' Array where each index is the product before/after index
 *  Then for the result, res[i] = prefix[i] * suffix[i]
 * 
 * 7. algos
 *  - prefix and suffix
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n)
 * 
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length
        const prefix = new Array(n).fill(1)
        const suffix = new Array(n).fill(1)
        const res = new Array(n).fill(0)

        for (let i = 1; i < n; i ++) {
            suffix[i] = suffix[i - 1] * nums[i - 1] // since suffix[i - 1] is the product of all values before i - 1, * nums[i - 1] to calculate the product of all values before i
            prefix[n - 1 - i] = prefix[n - 1 - i + 1] * nums[n - 1 - i + 1]
        }

        for (let i = 0; i < n; i ++) {
            res[i] = prefix[i] * suffix[i]
        }

        return res
    }
}
