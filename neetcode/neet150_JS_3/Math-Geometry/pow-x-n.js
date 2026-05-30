// https://neetcode.io/problems/pow-x-n/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  1. x
 *      - typeof x === 'number'
 *  2. n
 *      - typeof n === 'number'
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if n === 0: return 1
 * 
 *  test cases
 *  1. positive n
 *      inputs
 *          x = 1.1, n = 10
 *      expected output
 *          2.59
 *  2. negative n
 *      inputs
 *          x = 2.0, n = -3
 *      expected output
 *          0.125
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 * 
 *  1. Brute
 *      if n < 0: x = 1/x; n = -1 * n
 * 
 *      res = 1
 *      for i = 0 to n
 *          res *= x
 * 
 *      return res
 * 
 *  2. binary_exponentiation to reduce Time to O(log(n))
 *      Must know:
 *          1. if n is even: x^n = x*x ^ {n/2}
 *          2. if n is odd: x^n = x * (x*x) ^ {(n-1)/2}
 * 
 *      1. recursive to halve n conpute result
 *          base case 1: if x === 0: return 0
 *          base case 2: if n === 0: return 1
 * 
 *          // halve
 *          res = dfs(x, n // 2)
 *          return n % 2 === 0: res ? x * res
 * 
 * 
 *      res = dfs(x, abs(n))
 *      return n < 0 ? 1/res : res
 *          
 * 
 *      
 * 
 * 7. algos
 *  - Math
 * 
 * 8. data structures
 *  - 
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(1)
 * 
 *  
 */

class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if (x === 0) {
            return 0
        }
        if (n < 0) {
            x = 1/x
            n = -1 * n
        }

        let res = 1
        while (n > 0) {
            if (n % 2 === 1) {
                res = x * res
            }

            x *= x
            n = Math.floor(n/2)
        }

        return res
    }

    brute(x, n) {
        if (n < 0) {
            x = 1/x
            n = -1 * n
        }

        let res = 1
        for (let i = 0; i < n; i ++) {
            res *= x
        }

        return res
    }
}
