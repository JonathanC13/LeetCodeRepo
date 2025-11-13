// https://leetcode.com/problems/set-matrix-zeroes/description/

/**
1. Assumptions
    1. None

2. Input validation
    matrix is a 2D Array and the content are Numbers

3. Time and space constraints
    BTTC: O(r*c)    // need to check every cell for 0
    Space: O(1)     // Can be completed with constant space

4. edge cases and some test cases
    edge cases
    1. if matrix.length === 0: return
    test cases
    1. 0s not in first row or column
        input
            matrix = [  [1, 2, 3, 4], 
                        [2, 0, 4, 5], 
                        [9, 3, 0, 6]]
        output
            matrix = [  [1, 0, 0, 4],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]]
    2. 0 in first row
        input
            matrix = [  [1, 0, 3, 4], 
                        [2, 2, 4, 5], 
                        [9, 3, 0, 6]]
        output
            matrix = [  [0, 0, 0, 0],
                        [2, 0, 0, 5],
                        [0, 0, 0, 0]]

5. visualize by drawing and manually solve
6. break into subproblems
    maintain flags for if a zero exists in the first row and if in the first column. This elimates the need for 2 additional Arrays to track 0 in a row and 0 in a column. Need additional flags/memory so that when zeroing a row or column those zeroes do not cause additional zeroing.

    iterate the rows
        iterate the cols
            if (matrix[r][c] === 0) {
                if (r === 0 || c === 0) {
                    if (r === 0) {
                        firstRow = true
                    }
                    if (c === 0) {
                        firstCol = true
                    }
                    continue
                } else {
                    // set in the first row and column that a zero exist
                    matrix[r][0] = 0
                    matrix[0][c] = 0
                }
            }

    iterate the first row from 1 and for each 0, zero the column

    iterate the first column from 1 and for each 0, zero the row

    zero the row if firstRow = true
    zero the col if firstCol = true
    // these are done last so that it did not affect the zeroing of the other cells.

7. algos
    - state flags

8. Data structures
    - Matrix

9. Complexity
    Time: O(r * c)
    Space: O(1)
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if (matrix.length === 0) {
        return
    }

    const rows = matrix.length
    const cols = matrix[0].length
    let firstRow = false
    let firstCol = false

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            if (matrix[r][c] === 0) {
                if (r === 0 || c === 0) {
                    if (r === 0) {
                        firstRow = true
                    }
                    if (c === 0) {
                        firstCol = true
                    }
                    continue
                } else {
                    matrix[r][0] = 0
                    matrix[0][c] = 0
                }
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