// https://neetcode.io/problems/n-queens/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  - typeof n === 'number'
 *  - n >= 0
 * 
 * 3. time and space constraints
 *  BTTC: O(n * n!) // each n *, n! paths since restriction
 *  Space: O(n^2)   // n for stack +, n*n to hold board being built
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if n === 0: return []
 * 
 *  test cases
 *  1. n > 0
 *      inputs
 *          n = 4
 *      expected output
 *          [[".Q..","...Q","Q...","..Q."],
 *          ["..Q.","Q...","...Q",".Q.."]]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  maintain Array to mark that column is occupied
 *  maintain Array of length n*2 to mark positive diagonal is occupied. index = r + c
 *  maintain Set to mark negative diagonal is occupied. key = r - c, can go negative
 * 
 *  recursive backtracking to choose new position of current queen to continue solution
 *      base case 1
 *      if i === n: no more rows
 *          res.push([...board.map((r) => r.join(''))])  // spread board for copy, for each row join into String
 *          return
 * 
 *      iterate each col in current row
 *          if not in col, pos diag, and neg diag
 *              board[r][c] = 'Q'
 *              mark in col, pos diag, and neg diag
 *              board[r][c] = '.'
 * 
 *      return
 * 
 * 7. algos
 *  - recursive backtracking
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n * n!)
 *  Space: O(n^2)
 */

class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        if (n === 0) {
            return []
        }

        const colUsed = new Array(n).fill(false)
        const pos = new Array(n*2).fill(false)
        const neg = new Set()
        const board = Array.from(new Array(n), (e) => new Array(n).fill('.'))
        const res = new Array()

        this.rec(n, 0, board, colUsed, pos, neg, res)
        return res
    }

    rec(n, r, board, colUsed, pos, neg, res) {
        if (r === n) {
            res.push([...board.map((r) => r.join(''))])
            return
        }

        for (let c = 0; c < n; c ++) {
            const pd = r + c
            const nd = r - c
            if (!colUsed[c] && !pos[pd] && !neg.has(nd)) {
                board[r][c] = 'Q'
                colUsed[c] = true
                pos[pd] = true
                neg.add(nd)
                this.rec(n, r + 1, board, colUsed, pos, neg, res)
                colUsed[c] = false
                pos[pd] = false
                neg.delete(nd)
                board[r][c] = '.'
            }
        }

        return
    }
}
