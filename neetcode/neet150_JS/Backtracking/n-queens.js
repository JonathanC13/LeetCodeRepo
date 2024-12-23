// https://neetcode.io/problems/n-queens

class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        if (n === 0) {
            return []
        }

        const res = []

        const colVisited = Array(n).fill(false)
        const posDiag = Array(2 * n).fill(false)
        const negDiag = Array(2 * n).fill(false)
        const board = Array(n).fill().map((e) => {return Array(n).fill('.')})

        this.DFS(board, n, 0, colVisited, posDiag, negDiag, res)

        return res
    }

    DFS(board, n, row, colVisited, posDiag, negDiag, res) {
        if (row === n) {
            res.push(board.map((e) => {return e.join('')}))
            return
        }

        for (let c = 0; c < n; c ++) {
            if (colVisited[c] || posDiag[row + c] || negDiag[row - c + n]) {
                continue
            }

            board[row][c] = 'Q'
            colVisited[c] = true
            posDiag[row + c] = true
            negDiag[row - c + n] = true

            this.DFS(board, n, row + 1, colVisited, posDiag, negDiag, res)

            board[row][c] = '.'
            colVisited[c] = false
            posDiag[row + c] = false
            negDiag[row - c + n] = false
        }

        return
    }
}
