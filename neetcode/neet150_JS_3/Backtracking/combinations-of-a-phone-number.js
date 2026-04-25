// https://neetcode.io/problems/combinations-of-a-phone-number/question

/**
 * 1. Assumptions
 *  1. none
 * 
 * 2. input validation
 *  - typeof digits === 'string'
 *  - characters are: 2 <= c <= 9
 * 
 * 3. time and space constraints
 *  BTTC: O(n * 3^n)    // for each n *, 3 paths continuing remaining n digits
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if digits.length === 0: return ['']
 * 
 *  test cases
 *  1. digits.length > 1
 *      inputs
 *          digits = '34'
 *      expected output
 *          ['dg',dh,di,eg,eh,ei,fg,fh,fi]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  recursive backtracking to expore the next path from n
 *      base case 1: when no more digits
 *      if i === digits.length:
 *          res.push(combo)
 *          return
 * 
 *      for the current digit at i, use each letter it represents.
 * 
 * 7. algos
 *  - recursive backtracking
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n * 3^n)
 *  Space: O(n)
 */

class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length === 0) {
            return []
        }

        const mapping = new Array(10)
        mapping[2] = ['a','b','c']
        mapping[3] = ['d','e','f']
        mapping[4] = ['g','h','i']
        mapping[5] = ['j','k','l']
        mapping[6] = ['m','n','o']
        mapping[7] = ['p','q','r','s']
        mapping[8] = ['t','u','v']
        mapping[9] = ['w','x','y','z']

        const res = new Array()
        this.rec(digits, 0, mapping, '', res)
        return res
    }

    rec(digits, i, mapping, combo, res) {
        if (i === digits.length) {
            res.push(combo)
            return
        }
        const dig = Number(digits[i])
        for (let j = 0; j < mapping[dig].length; j ++) {
            // continue combo with letter
            this.rec(digits, i + 1, mapping, combo + mapping[dig][j], res)
        }

        return
    }
}
