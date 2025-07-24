// https://leetcode.com/problems/valid-sudoku/?envType=study-plan-v2&envId=top-interview-150

/**
create a 2D Array of length n fill with Arrays of length 9 to mark if a number has been used in that row
create a 2D Array of length n fill with Arrays of length 9 to mark if a number has been used in that col
create a 3D Array of length 3 fill with Arrays of length 3 fill with Array of length 9 to mark if a number has been used in that square
    determine which square by: r = floor(r / 3), c = floor(c / 3)

iterate rows
    iterate cols
        if board[r][c] !== '.'
            check if current cell is valid in rows
            check if current cell is valid in cols
            check if current cell is valid in sqaure

            if not valid, return false

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
    
    const rowVals = new Array(rows).fill().map((e) => {return new Array(rows + 1).fill(false)})
    const colVals = new Array(cols).fill().map((e) => {return new Array(cols + 1).fill(false)})
    const squareVals = new Array(3).fill().map((e) => {return new Array(3).fill().map((e) => {return Array(rows + 1).fill(false)})})

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            if (board[r][c] !== '.') {
                const val = Number(board[r][c])
                const sr = Math.floor(r/3)
                const sc = Math.floor(c/3)
                if (rowVals[r][val] === true || colVals[c][val] === true || squareVals[sr][sc][val] === true) {
                    return false
                }

                // mark
                rowVals[r][val] = true
                colVals[c][val] = true
                squareVals[sr][sc][val] = true
            }
        }
    }

    return true
};