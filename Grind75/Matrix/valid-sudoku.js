// https://leetcode.com/problems/valid-sudoku/description/
/**
create a 2D Array of length 9 x 9. for each row(row) record which numbers have been used (col)
create a 2D Array of length 9 x 9. for each col(row) record which numbers have been used (col)
create a 3D Array of length 3 x 3 x 9. for the quadrants. row = floor(r/3), col = floor(c/3)

iterate rows of board
    iterate cols of board
        if values used in arrRows or arrCols or arrQuad:
            return false

        mark the value in arrRows, arrCols, and arrQuad

return true

- Time: O(r * c)
- Space: O(r * c)
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = board.length
    const cols = board[0].length

    const arrRows = new Array(rows).fill().map((e) => new Array(cols).fill(false))
    const arrCols = new Array(cols).fill().map((e) => new Array(rows).fill(false))
    const arrQuad = new Array(rows/3).fill().map((e) => new Array(cols/3).fill().map((e) => new Array(rows).fill(false)))

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            let val = board[r][c]
            if (val === '.') {
                continue
            }
            val -= 1

            if (arrRows[r][val] === true || arrCols[c][val] === true || arrQuad[Math.floor(r/3)][Math.floor(c/3)][val] === true) {
                return false
            }

            arrRows[r][val] = true
            arrCols[c][val] = true
            arrQuad[Math.floor(r/3)][Math.floor(c/3)][val] = true
        }
    }

    return true
};