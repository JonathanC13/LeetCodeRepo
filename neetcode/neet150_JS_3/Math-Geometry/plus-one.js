// https://neetcode.io/problems/plus-one/question

/**
 * 1. Assumptions
 *  1. Given, no leading 0s
 * 
 * 2. input validation
 *  1. digits
 *      - digits instanceof Array
 *      - digits.length >= 0
 *      - digits's elements are Number [0, 9]
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if digits.length === 0: return [1]
 * 
 *  test cases
 *  1. need carry on most significant digit
 *      inputs
 *          digits = [9,9]
 *      expected output
 *          [1,0,0]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  reverse the digits array to work on the least significant digit first
 * 
 *  carry = 1
 *  while (carry > 0 && i < digits.length)
 *      dig = carry + digits[i]
 *      carry = floor(dig / 10)
 *      digits[i] = dig % 10
 * 
 *  if (carry > 0)
 *      digits.push(carry)
 * 
 *  return digits.reverse()
 * 
 * 7. algos
 *  - Math
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
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        if (digits.length === 0) {
            return [1]
        }

        digits.reverse()
        let carry = 1
        let i = 0
        while (carry > 0 && i < digits.length) {
            let dig = digits[i] + carry
            carry = Math.floor(dig / 10)
            digits[i] = dig % 10
            i += 1
        }

        if (carry > 0) {
            digits.push(carry)
        }

        return digits.reverse()
    }
}
