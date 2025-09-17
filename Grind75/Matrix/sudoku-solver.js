// https://leetcode.com/problems/sudoku-solver/description/

/**
recursive backtracking. Cannot use memo since the selected value for a cell needs to re-eval all values for the next selections.

main
    create 2D Array to record the rows' used values. dimensions 9 * 10. fill with false
        false = not used
        true = used
    create 2D Array to record the cols' used values. dimensions 9 * 10. fill with false
    create 3D Array for the quadrant. 3 * 3 * 10. fill with false

    iterate board and store the initial values used in each row, col, and quadrant.

    rec(board, rowUsed, colUsed, quadUsed, r = 0, c = 0)

rec
    base case 1: The end, meaning all chosen values were valid to get here.
    if (r === rows - 1 && c === cols) {
        return true
    }

    base case 2: out of rows
    if (r >= rows) {
        return false
    }

    // move rows when out of columns, go to next row and first col.
    if (c >= cols) {
        return rec(board, rowUsed, colUsed, quadUsed, r + 1, 0)
    }

    val = board[r][c]
    if (val !== '.') {
        // static value already here, go to next cell
        if (rec(board, rowUsed, colUsed, quadUsed, r, c + 1) === true) {
            // once solution is found, return the recursive stack out
            return true
        }
    } else {
        // need to choose a value for this cell in search for overall solution.
        for (let i = 1; i <= 9; i ++) {
            if (rowUsed[r][i] === true || colUsed[c][i] === true || quadUsed[Math.floor(r/3)][Math.floor(c/3)][i] === true) {
                continue    // try next value
            }

            // ok value to use, put into cell and evaluate if the other cells can also complete for an overall solution
            rowUsed[r][i] = true
            colUsed[c][i] = true
            quadUsed[Math.floor(r/3)][Math.floor(c/3)][i] = true

            if (rec(board, rowUsed, colUsed, quadUsed, r, c + 1) === true) {
                // once solution is found, return the recursive stack out
                return true
            }

            // remove for next path
            rowUsed[r][i] = false
            colUsed[c][i] = false
            quadUsed[Math.floor(r/3)][Math.floor(c/3)][i] = false
        }
    }
    return false

- Time: O(r * c * 9^(r + c)) // r * c for initial logging of values, + r * c * 9^(r + c) there are 9 paths for each row and col but r + c since choosing a value reduces the available values to choose from for the subsequent cells, * r * c since need to go to each cell.
- Space: O(r * c)   // recursive stack max at r * c
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const rows = board.length
    const cols = board[0].length

    const rowUsed = new Array(rows).fill().map((e) => new Array(cols + 1).fill(false))
    const colUsed = new Array(cols).fill().map((e) => new Array(rows + 1).fill(false))
    const quadUsed = new Array(Math.floor(rows/3)).fill().map((e) => new Array(Math.floor(cols/3)).fill().map((e) => new Array(rows + 1).fill(false)))

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            let val = board[r][c]
            if (val === '.') {
                continue
            }

            val = Number(val)
            rowUsed[r][val] = true
            colUsed[c][val] = true
            quadUsed[Math.floor(r/3)][Math.floor(c/3)][val] = true
        }
    }
    // console.log(rowUsed)
    const res = rec(board, rowUsed, colUsed, quadUsed, 0, 0, rows, cols)
    // if not guarenteed for a solution, if res === false, then no solution, else true then the board holds the final solution.
};

const rec = function(board, rowUsed, colUsed, quadUsed, r, c, rows, cols) {
    if (r === rows - 1 && c === cols) {
        return true
    }
    if (r >= rows) {
        return false
    }

    if (c >= cols) {
        return rec(board, rowUsed, colUsed, quadUsed, r + 1, 0, rows, cols)
    }

    let val = board[r][c]
    if (val !== '.') {
        if (rec(board, rowUsed, colUsed, quadUsed, r, c + 1, rows, cols) === true) {
            return true
        }
    } else {
        for (let i = 1; i <= 9; i ++) {
            if (rowUsed[r][i] === true || colUsed[c][i] === true || quadUsed[Math.floor(r/3)][Math.floor(c/3)][i] === true) {
                continue
            }

            rowUsed[r][i] = true
            colUsed[c][i] = true
            quadUsed[Math.floor(r/3)][Math.floor(c/3)][i] = true
            board[r][c] = String(i)

            if (rec(board, rowUsed, colUsed, quadUsed, r, c + 1, rows, cols) === true) {
                return true
            }

            rowUsed[r][i] = false
            colUsed[c][i] = false
            quadUsed[Math.floor(r/3)][Math.floor(c/3)][i] = false
            board[r][c] = '.'
        }
    }

    return false
}