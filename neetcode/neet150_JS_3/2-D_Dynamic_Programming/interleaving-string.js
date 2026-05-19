// https://neetcode.io/problems/interleaving-string/question

/**
 * 1. Assumptions
 *  1. |n - m| <= 1 just means alternating substrings from s1 and s2
 *  2. must use all characters
 * 
 * 2. input validation
 *  - s1, s2, s3
 *      - typeof s1 === 'string'
 *      - regex = '/^[a-z]+$/'
 * 
 * 3. time and space constraints
 *  BTTC: O(n + m)
 *  Space: O(k)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if s3.length === 0: return true
 *  2. if s1.length + s2.length !== s3.length: return false
 * 
 *  test cases
 *  1. can interleave
 *      inputs
 *          s1 = 'abc', s2 = 'def', s3 = 'abdcef'
 *      expected output
 *          true
 * 
 *  2. cannot interleave
 *      inputs
 *          s1 = 'abc', s2 = 'def', s3 = 'abdfec'
 *      expected ouput
 *          false
 * 
 *  3. back track
 *      inputs
 *          s1 = 'aa', s2 = 'ab', s3 = 'abaa'
 *      expected output
 *          false
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. dfs recursive backtracking
 *      base case 1: if k >= s3.length: return true
 *      base case 2: if i >= s1.length && j >= s2.length: return false
 * 
 *      2 paths:
 *      if (i < s1.length && s1[i] === s3[k])
 *          match, try to continue with s1. (i + 1, k + 1)
 *          if true: return true
 * 
 *      if (j < s2.length && s2[j] === s3[k])
 *          match, continue with s2. (j + 1, k + 1)
 *          if true: return true
 * 
 *      Time: O(2^(n + m))
 *      Space: O(k) // k = s3.length
 * 
 *  2. add 2D memo to reduce time complexity to O(n * m)
 *      rows = s1.length
 *      cols = s2.length
 *      cell represents where in s1 and s2 combination is in effort to create s3
 * 
 * 7. algos
 *  - dfs recursive backtracking with 2D memo
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity    
 *  Time: O(n * m)
 *  Space: O(n * m)
 *      
 *          
 *      
 */

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if (s3.length === 0) {
            return true
        }
        if (s1.length + s2.length !== s3.length) {return false}
        
        const memo = new Array(s1.length + 1).fill().map((e) => new Array(s2.length + 1).fill(null))
        const res = this.dfs(s1, 0, s2, 0, s3, 0, memo)
        // console.log(memo)
        return res
    }

    dfs(s1, i, s2, j, s3, k, memo) {
        if (k >= s3.length) {
            return true
        }
        if (i >= s1.length && j >= s2.length) {
            return false
        }
        if (memo[i][j] !== null) {  //i < s1.length && j < s2.length && 
            // console.log('hit')
            return memo[i][j]
        }

        let can = false
        if (i < s1.length && s1[i] === s3[k]) {
            can = this.dfs(s1, i + 1, s2, j, s3, k + 1, memo)
        }

        if (can === false && j < s2.length && s2[j] === s3[k]) {
            can = this.dfs(s1, i, s2, j + 1, s3, k + 1, memo)
        }
        
        // if (i < s1.length && j < s2.length) {
        memo[i][j] = can
        // }
        return can
    }
}
