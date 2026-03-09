// https://neetcode.io/problems/decode-ways/question

/**
 * 1. Assumptions
 *  1. Given: conversion to uppercase English characters
 * 
 * 2. input validation
 *  1. s
 *      - typeof s === 'string'
 *      - s.length >= 0
 *      - regex = '/^[0-9]*$/'
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if s.length === 0: return 0
 * 
 *  test cases
 *  1. all 1 and 2 digit combination values can be converted
 *      inputs
 *          s = '123'
 *      expected output
 *          3
 *          = [[1,2,3],[1,23],[12,3]]
 *  2. some 1 and 2 digit combinations values cannot be converted
 *      inputs
 *          s = '1012'
 *      expected output
 *          2
 *          = [[10,1,2], [10,12]]
 *  3. totally invalid
 *      inputs
 *          s = 01
 *      expected output
 *          0
 * 
 * 5. visualize by drawing and manaully solve
 * 6. break into subproblems
 *  recursive backtracking to take paths:
 *      1. single digit if s[i] > 0
 *      2. 2 digits if (s[i] === 1 or (if s[i] === 2 && s[i+1] between 0 and 6))
 *  to reduce time complexity with memoization
 *      Array of length s.length fill with -1
 *      Each index holds the number of unique combinations from i to the end so that when a previous index reaches i it can return the number unique combinations that would extend the incoming.
 * 
 *  Time: O(n * 2^n) to O(n)
 * 
 * 7. algos
 *  - recursive backtracking for 1D DP
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n)
 * 
 */

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (s.length === 0) {
            return 0
        }

        const n = s.length
        const memo = new Array(n).fill(-1)

        this.rec(s,0,memo)
        console.log(memo)
        return memo[0]
    }

    rec(s, i, memo) {
        if (i === s.length) {
            return 1
        }
        if (i > s.length) {
            return 0
        }
        if (memo[i] !== -1) {
            return memo[i]
        }

        let count = 0
        // 1 digit
        if (s[i] !== '0') {
            count += this.rec(s, i + 1, memo)
        }
        // 2 digits
        if (s[i] === '1' || (i + 1 < s.length && s[i] === '2' && Number(s[i+1]) <= 6)) {
            count += this.rec(s, i + 2, memo)
        }

        memo[i] = count
        return count
    }
}
