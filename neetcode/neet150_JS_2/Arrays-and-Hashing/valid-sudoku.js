// https://neetcode.io/problems/valid-sudoku

/*
for the digits in rows, create an Array of Sets
for the digits in cols, create an Array of Sets
for the digits in 3x3 sub boxes, create a 2D Array of Sets

to determine which sub box, floor(row / 3), floor(col / 3)

- Time: O(n^2)
- Space: O(n^2)
*/

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const n = board.length
        const rows = new Array(n).fill().map((e) => new Set())
        const cols = new Array(n).fill().map((e) => new Set())
        const sub = new Array(n).fill().map((e) => new Array(n).fill().map((e) => new Set()))

        for (let r = 0; r < n; r ++) {
            for (let c = 0; c < n; c ++) {
                const digit = board[r][c]

                if (digit === '.') {
                    continue
                }

                const subbox = sub[Math.floor(r / 3)][Math.floor(c / 3)]
                if (rows[r].has(digit) || cols[c].has(digit) || subbox.has(digit)) {
                    return false
                }

                rows[r].add(digit)
                cols[c].add(digit)
                subbox.add(digit)
            }
        }

        return true

    }
}
