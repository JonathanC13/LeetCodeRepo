// https://neetcode.io/problems/n-queens

/*
const res = []
create an Array of size n fill with false that will indicate that the column cannot be used since a Queen already occupied it.
create a Set that will indicate that positive diagonal cannot be used. calculated by: r + c
create a Set that will indicate that negative diagonal cannot be used. calculated by: r - c

recursive dfs
    base case 1: if (r === n): res.push(board); return; // if able to complete entire board with no conflict, add to result.

    iterate the columns to determine if and where the queen can be placed in the current row

        if (colUsed[c] === true || posDiag.has(r + c) || negDiag.has(r - c)) {
            continue
        }

        // can place, mark for paths branching from this
        colUsed[c] = true
        posDiag.add(r + c)
        negDiag.add(r - c)
        board[r][c] = 'Q'

        // branch to next row
        this.dfs(r + 1, ...)

        // after remove this placement so that another can be evaluated
        colUsed[c] = false
        posDiag.delete(r + c)
        negDiag.delete(r - c)
        board[r][c] = '.'

- Time: O(n!)   . n! since each branch problem set is reduced.
- Space: O(n ^ 2)
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
        const posDiag = new Set()
        const negDiag = new Set()
        const board = Array.from(new Array(n), (e) => new Array(n).fill('.'))
        const res = new Array()

        this.dfs(n, 0, res, colUsed, posDiag, negDiag, board)
        return res
    }

    dfs(n, r, res, colUsed, posDiag, negDiag, board) {
        if (r === n) {
            res.push(board.map((e) => e.join('')))  // remember to save the copy, not the reference to the persistent board.
            return
        }

        for (let c = 0; c < n; c ++) {
            if (board[r][c] === 'Q' || colUsed[c] === true || posDiag.has(r + c) || negDiag.has(r - c)) {
                continue
            }

            board[r][c] = 'Q'
            colUsed[c] = true
            posDiag.add(r + c)
            negDiag.add(r - c)

            this.dfs(n, r + 1, res, colUsed, posDiag, negDiag, board)

            board[r][c] = '.'
            colUsed[c] = false
            posDiag.delete(r + c)
            negDiag.delete(r - c)
        }

        return
    }
}
