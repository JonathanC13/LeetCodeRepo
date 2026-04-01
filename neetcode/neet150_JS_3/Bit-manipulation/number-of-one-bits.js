// https://neetcode.io/problems/number-of-one-bits/question

/**
 * 1. Assumptions
 *  1. Given: Number given is a positive 32 bit
 * 
 * 2. input validation
 *  1. n
 *      - typeof n === 'number'
 *      - n < = 2^31 - 1
 * 
 * 3. time and space constraints
 *  BTTC: O(1)  // 32 bits
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if n === 0: return 0
 *  
 *  test cases
 *  1. arbitrary value
 *      inputs
 *          n = 5
 *      expected output
 *          2
 * 
 *  2. max positive 32 bit
 *      inputs
 *          n = 2^31 - 1
 *      expected output
 *          31
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  while n !== 0
 *      check if least significant bit (most right bit) is 1
 *      shift with zero fill right
 * 
 * 7. algos
 *  - binary operations
 * 
 * 8. data structures
 *  - Binary
 * 
 * 9. complexity
 *  Time: O(1)
 *  Space: O(1)
 */

class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        if (n === 0) {
            return 0
        }

        let ones = 0
        while (n !== 0) {
            if (n & 1 === 1) {
                ones += 1
            }
            n = n >> 1
        }

        return ones
    }
}
