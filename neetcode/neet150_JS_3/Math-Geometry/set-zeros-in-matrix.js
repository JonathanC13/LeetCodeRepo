// https://neetcode.io/problems/set-zeroes-in-matrix/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  1. matrix
 *      - matrix instanceof Array
 *      - matrix.length >= 0
 *      - matrix element's are Array of Number
 * 
 * 3. time and space constraints
 *  BTTC: O(r * c)
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if matrix.length === 0: return
 * 
 *  test cases
 *  1. n x n with no 0s in first row or column
 *      inputs
 *          matrix = [
 *              [1,2,3],
 *              [4,0,5],
 *              [7,8,0]]
 *      expected output
 *          [   [1,0,0],
 *              [0,0,0],
 *              [0,0,0]
 *          ]
 * 
 *  2. n x n with a zero in the first row
 *      inputs
 *          matrix = [
 *              [1,0,2],
 *              [3,4,5],
 *              [6,7,8]]
 *      expected output
 *          [
 *              [0,0,0],
 *              [3,0,5],
 *              [6,0,8]]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. Space O(r * c) method
 *      create a copy of the matrix
 *      iterate the copy and when there is a 0. 0 the row and column in the matrix.
 *      The copy is unaltered so that cells turned to 0 do not trigger a zeroing.
 * 
 *  2. To reduce to Space: O(1)
 *      Use the first row and col for marks on which rows to be 0ed and cols to be 0ed, respectively, then iterate and mark where 0s are found.
 *      Afterward, based on the marks, 0 the rows and then cols.
 *      Since altering the original matrix, this introduces a problem where [0][0] overlap the row and col markers.
 *          If a 0 is in the first row, [0][0] would be marked 0 and then when 0ing it would erroneously 0 the first col as well.
 *          To solve this problem, create flags for firstRowZero and firstColZero. If a 0 appears, instead of marking at [0][0] = 0 flip the flag to true
 * 
 * 7. algos
 *  - Geometry
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(r * c)
 *  Space: O(1)
 *      
 */

class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        if (matrix.length === 0) {
            return
        }

        let rows = matrix.length
        let cols = matrix[0].length
        let firstRowZero = false
        let firstColZero = false

        // marking 0 in row and col
        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (matrix[r][c] === 0) {
                    if (r !== 0 && c !== 0) {
                        matrix[0][c] = 0
                        matrix[r][0] = 0
                    } else {
                        // possible at [0][0] is zero, so both conditions need to be checked
                        if (r === 0) {
                            firstRowZero = true
                        }
                        if (c === 0) {
                            firstColZero = true
                        }
                    }
                }
            }
        }

        // zeroing
        for (let r = 1; r < rows; r ++) {
            if (matrix[r][0] === 0) {
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

        // if needed, zero the first row and col
        if (firstRowZero) {
            for (let c = 0; c < cols; c ++) {
                matrix[0][c] = 0
            }
        }
        if (firstColZero) {
            for (let r = 0; r < rows; r ++) {
                matrix[r][0] = 0
            }
        }
    }
}
