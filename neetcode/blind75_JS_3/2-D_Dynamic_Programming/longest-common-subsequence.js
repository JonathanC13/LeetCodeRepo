// https://neetcode.io/problems/longest-common-subsequence/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  1. text1 and text2
 *      - typeof text1 === 'string'
 *      - text1.length >= 0
 * 
 * 3. time and space constraints
 *  BTTC: O(m * n)  // m = text1.length, n = text2.length
 *  Space: O(m * n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if text1.length === 0 || text2.length === 0: return 0
 * 
 *  test cases
 *  1. no common subsequence
 *      inputs
 *          text1 = 'apple'
 *          text2 = 'soul'
 *      expected output
 *          0
 *  2. has a common subsequence
 *      inputs
 *          text1 = 'applesause'
 *          text2 = 'zplesep'
 *      expected output
 *          5
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  recursive backtracking
 *      base case 1: if i >= m.length || j >= n.length: return 0
 *      
 *      // path 1: do not use char at i in text1
 *      longest = rec(i + 1, j) // [max len, subseq]
 * 
 *      // path 2: iterate text2 from j to end to try to match char at text1[i]
 *          if match
 *              ret = rec(i + 1, k + 1) // since match, continue looking for subsequece from next char of text1 and text2 
 *              if ret[0] > longest[0]
 *                  longest = [ret[0], text2[k] + ret[1]]
 *      
 *      Time: O(m * n^m)
 * 
 *  To reduce time complexity, use memoization where each cell (i,j) has the longest common subsequence from i,j to end
 *  Time: O(m * n)
 *  Space: O(m * n)
 * 
 * 7. algos
 *  - recursive backtracking
 *  - 2D Dynamic programming
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(m * n)
 *  Space: O(m * n)
 * 
 *      
 */

class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        if (text1.length === 0 || text2.length === 0) {
            return 0
        }

        const m = text1.length
        const n = text2.length
        const memo = Array.from(new Array(m), (e) => new Array(n).fill(null))

        const ret = this.rec(text1, text2, 0, 0, memo)
        // console.log(ret[1], memo)
        return ret[0]
    }

    rec(text1, text2, i, j, memo) {
        if (i >= text1.length || j >= text2.length) {
            return [0,'']
        }
        if (memo[i][j] !== null) {
            return memo[i][j]
        }

        let longest = this.rec(text1, text2, i + 1, j, memo)

        for (let k = j; k < text2.length; k ++) {
            if (text1[i] === text2[k]) {
                const ret = this.rec(text1, text2, i + 1, k + 1, memo)
                if (ret[0] + 1 > longest[0]) {
                    longest = [ret[0] + 1, text2[k] + ret[1]]
                }
            }
        }

        memo[i][j] = longest
        return longest
    }
}
