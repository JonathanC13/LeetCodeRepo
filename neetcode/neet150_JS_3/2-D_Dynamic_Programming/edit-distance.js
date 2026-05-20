// https://neetcode.io/problems/edit-distance/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  - word1/word2
 *      - typeof word1 === 'string'
 *      - regex = /^[a-z]+$/
 * 
 * 3. time and space constraints
 *  BTTC: O(n * m)
 *  Space: O(n * m)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if word1.length === 0: return word2.length
 *  2. if word2.length === 0: return word1.length
 * 
 *  test cases
 *  1. operations of word1
 *      inputs
 *          word1 = 'adles', word2 = 'apple'
 *      expected output
 *          3, replace d, insert p, remove s
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. dfs recursive backtracking to try different operations for the current char in word 2 to match
 *      base case 1: if i >= word1.length: return word2.length - j // word1 needs to insert remaining chars of word2
 *      base case 2: if j >= word2.length: return word1.length - i  // delete remaining chars in word1
 * 
 *      if word1[i] === word2[j]: go next rec(i + 1, j + 1)     
 * 
 *      if word1[i] !== word2[j], then 3 paths:
 *      1. insert a char in word1. rec(i, j + 1)    // place word2[j] char 'before' i, therefore maintain i index. Since 'match' j + 1 to next
 *      2. delete. rec(i + 1, j), 'delete' by moving i += 1, but still need to match so maintain j index.
 *      3. replace. rec(i + 1, j + 1), replace will cause match, i += 1, j += 1
 * 
 *      return min
 * 
 *      Time: O(n * 3^(n + m))  // each n * 3 paths ^ (remaining n in word1 + remaining m to match)
 * 
 *  2. add 2D dp memo to reduce time complexity to O(n * m)
 *      rows = word1.length
 *      cols = word2.length
 *      each cell is the min operations for r in word1, c in word2 to get to match word2
 *      Space: O(n * m)
 * 
 * 7. algos
 *  - recursive backtracking with 2D memo
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n * m)
 *  Space: O(n * m)
 *      
 */

class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        
        const memo = Array.from(new Array(word1.length + 1), (e) => new Array(word2.length + 1).fill(-1))
        const res = this.dfs(word1, word2, 0, 0, memo)
        // console.log(memo)
        return res
    }

    dfs(word1, word2, i, j, memo) {
        if (i >= word1.length) {
            return word2.length - j
        }
        if (j >= word2.length) {
            return word1.length - i
        }
        if (memo[i][j] !== -1) {
            // console.log('hit: ', i, j, memo[i][j])
            return memo[i][j]
        }

        if (word1[i] === word2[j]) {
            return this.dfs(word1, word2, i + 1, j + 1, memo)
        }

        const ins = this.dfs(word1, word2, i, j + 1, memo)
        const del = this.dfs(word1, word2, i + 1, j, memo)
        const rep = this.dfs(word1, word2, i + 1, j + 1, memo)
        
        memo[i][j] = Math.min(ins, del, rep) + 1
        return memo[i][j]
        
    }
}
