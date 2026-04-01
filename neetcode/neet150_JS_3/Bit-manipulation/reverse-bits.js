// https://neetcode.io/problems/reverse-bits/question

/**
 * 1. Assumptions
 *  1. unsigned int
 * 
 * 2. input validation
 *  1. n
 *      - typeof n === 'number'
 *      - positive 32 bit number
 * 
 * 3. time and space constraints
 *  BTTC: O(1) // max 32 bits
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if n === 0: return 0
 *  
 *  test cases
 *  1. n reversed causes the MSb = 0
 *      inputs     
 *          n = 4
 *      expected output
 *          536870912
 *  2. n reversed causes MSb = 1
 *      inputs
 *          n = 5
 *      expected output
 *          2684354560
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  res = 0
 *  for i = 31; i >= 0
 *      get the LSb from n
 *      place in res = res | bit << i
 *      zero shift n left by 1
 * 
 *  return res >>> 0    // in JS, use >>> 0 to get unsigned int
 * 
 * 7. algos
 *  - bit manipulation
 * 
 * 8. data structures
 *  - primative Number
 * 
 * 9. complexity
 *  Time: O(1)
 *  Space: O(1)
 */

class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        if (n === 0) {
            return 0
        }

        let res = 0
        for (let i = 31; i >= 0; i --) {
            res = res | (n & 1) << i
            n = n >>> 1
        }

        return res >>> 0
    }
}
