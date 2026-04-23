// https://neetcode.io/problems/generate-parentheses/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  1. n
 *      - typeof n === 'number'
 *      - n >= 0
 * 
 * 3. time and space constraints
 *  BTTC: O(< 2^n)    combinations where 2 paths for each n
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if n === 0: return []
 * 
 *  test cases
 *  1. n > 0
 *      inputs
 *          n = 3
 *      expected output
 *          ['((()))','(()())','(())()','()(())','()()()',]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  since need well formed;
 *      1. keep track of how many open and close brackets present in the current string
 *      2. maintain global Stack so that close knows when it is valid to add
 * 
 *  recursive backtracking
 *      base case 1:
 *      if open === n && close === n: res.push(str); return
 * 
 *      base case 2:
 *      if str.length > 2*n: return
 * 
 *      2 paths
 *      1. if open < n
 *          stk.push('(')
 *          rec(..., str + '(', open + 1)
 *          stk.pop()
 * 
 *      2. if (close < n && stk not empty)
 *          stk.pop()
 *          rec(..., str + ')', close + 1)
 *          stk.push('(')
 * 
 * 7. algos
 *  - recursive backtracking
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(2^n)
 *  Space: O(n)
 */

class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        if (n === 0) {
            return []
        }
        const res = new Array()
        const stk = new Array()
        this.rec(n, stk, 0, 0, '', res)
        return res
    }

    rec(n, stk, open, close, str, res) {
        if (open === n && close === n) {
            res.push(str)
            return
        }
        if (str.length > 2*n) {
            return
        }

        if (open < n) {
            stk.push('(')
            this.rec(n, stk, open + 1, close, str + '(', res)
            stk.pop()
        }

        if (close < n && stk.length > 0) {
            stk.pop()
            this.rec(n, stk, open, close + 1, str + ')', res)
            stk.push('(')
        }
    }
}
