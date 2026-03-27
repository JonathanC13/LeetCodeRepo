// https://neetcode.io/problems/counting-bits/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  1. n
 *      - typeof n === 'number'
 *      - 0 <= 0 <= 1000
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  --
 * 
 *  test cases
 *  1. min n
 *      inputs
 *          n = 0
 *      expected output
 *          [0]
 *  2. arbitrary
 *      inputs
 *          n = 4
 *      expected output
 *          [0,1,1,2,1]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Redoing the counting of number of 1 bits in each i from 0 to n is too time consuming.
 *  Therefore, use 1D dynamic programming:
 *      Array of length n + 1, init states:
 *          1. arr[0] = 0
 *          2. arr[1] = 1
 * 
 *  Then the forward number of 1s for i is:
 *      if i % 2 === 0: arr[i] = arr[i >> 1]
 *      else: it is odd, so there will be a carry
 *          arr[i] = arr[i >> 1] + 1
 * 
 *      OR
 *      arr[i] = a number that shares the same number of 1 bits + (if odd add 1, else 0)
 *      arr[1] = arr[floor(i/2)] + arr[i % 2]
 * 
 * 7. algos
 *  - bit manipulation
 *  - 1D dp
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n)
 */

class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let arr = new Array(n + 1).fill(0)
        if (n === 0) {
            return arr
        }
        arr[1] = 1
        if (n === 1) {
            return arr
        }

        for (let i = 2; i <= n; i ++) {
            arr[i] = arr[i >> 1] + arr[i % 2]
        }

        return arr
    }
}
