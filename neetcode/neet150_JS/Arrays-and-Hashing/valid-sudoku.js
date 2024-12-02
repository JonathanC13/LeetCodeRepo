// https://neetcode.io/problems/valid-sudoku

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map()
        const cols = new Map()
        const squares = new Map()

        for (let r = 0; r < board.length; r ++) {
            for (let c = 0; c < board[0].length; c ++) {
                if (board[r][c] === '.') {
                    continue
                }

                const squareCoord = `${Math.floor(r/3)},${Math.floor(c/3)}`
                
                if (
                    (rows.get(r) && rows.get(r).has(board[r][c])) ||
                    (cols.get(c) && cols.get(c).has(board[r][c])) ||
                    (squares.get(squareCoord) && squares.get(squareCoord).has(board[r][c]))
                ) {
                    return false
                }

                if (!rows.get(r)) {
                    rows.set(r, new Set())
                }
                if (!cols.get(c)) {
                    cols.set(c, new Set())
                }
                if (!squares.get(squareCoord)) {
                    squares.set(squareCoord, new Set())
                }

                rows.get(r).add(board[r][c])
                cols.get(c).add(board[r][c])
                squares.get(squareCoord).add(board[r][c])
            }
        }
        return true
    }
}
