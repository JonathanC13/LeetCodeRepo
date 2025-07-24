// https://leetcode.com/problems/set-matrix-zeroes/description/?envType=study-plan-v2&envId=top-interview-150

/**
Use the first row and col as markers to convert all elements in row or col to 0
create var firstRow = false // flag that the first row needs to be zeroed later
create var firstCol = false

iterate rows
    iterate cols
        if (matrix[r][c] === 0) {
            if (r === 0) {
                firstRow = true
            }
            if (c === 0) {
                firstCol = true
            }

            matrix[0][c] = 0
            matrix[r][0] = 0
        }
        
// flip inside cells first
iterate row 0 from 1 to < cols
    if (matrix[0][i] === 0) {
        change all cells in that column to 0
    }

iterate col 0 from 1 to < rows
    if (matrix[i][0] === 0) {
        change all cells in that row to 0
    }

// flip mark row and col
if firstRow === true: change all cells to 0
if firstCol === true: change all cells to 0

- Time: O(r * c)
- Space: O(1)
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length

    let firstRow = false
    let firstCol = false

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            if (matrix[r][c] === 0) {
                if (r === 0) {
                    firstRow = true
                }
                if (c === 0) {
                    firstCol = true
                }

                matrix[0][c] = 0
                matrix[r][0] = 0
            }
        }
    }

    for (let c = 1; c < cols; c ++) {
        if (matrix[0][c] === 0) {
            for (let r = 1; r < rows; r ++) {
                matrix[r][c] = 0
            }
        }
    }
    for (let r = 1; r < rows; r ++) {
        if (matrix[r][0] === 0) {
            for (let c = 1; c < cols; c ++) {
                matrix[r][c] = 0
            }
        }
    }

    if (firstRow === true) {
        for (let c = 0; c < cols; c ++) {
            matrix[0][c] = 0
        }
    }
    if (firstCol === true) {
        for (let r = 0; r < rows; r ++) {
            matrix[r][0] = 0
        }
    }
};