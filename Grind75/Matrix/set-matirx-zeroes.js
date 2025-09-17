// https://leetcode.com/problems/set-matrix-zeroes/description/

/**
** The space O(m + n) solution is one Array to mark which rows to be zeroed and one Array to mark which columns to be zeroed.
iterate rowsZeroed
    if (rowsZeroed[r] === true)
        iterate the cols in matrix for that row and zero

iterate colsZeroed
    if (colsZeroed[c] === true)
        iterate the rows in matrix for that col and zero

- Time: O(r * c)    // r * c to find all 0s in the matrix, + r to zero the cols, + c to zero the rows

** The constant space solution
Use the first row and first column to store if that row/col should be zeroed, but since it is also possible the first row/col can be zeroed save additional variables firstRow = false, firstCol = false to indicate that it should be zeroed at the end.

- Time: O(r * c)    // r * c to find all 0s in the matrix, + r (the first row) to zero the cols, + c (the first col) to zero the rows
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

                matrix[r][0] = 0
                matrix[0][c] = 0
            }
        }
    }

    for (let r = 1; r < rows; r ++) {
        if (matrix[r][0] === 0) {
            // zero the row
            for (let c = 1; c < cols; c ++) {
                matrix[r][c] = 0
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

    // at end handle the first row/col since is handled first the entire row/col would be zeroed!
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