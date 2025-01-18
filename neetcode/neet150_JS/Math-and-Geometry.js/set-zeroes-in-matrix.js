// https://neetcode.io/problems/set-zeroes-in-matrix

class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let firstRowZero = false

        const rows = matrix.length
        const cols = matrix[0].length

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (matrix[r][c] === 0) {
                    matrix[0][c] = 0    // mark col for zeroing
                    if (r > 0) {
                        matrix[r][0] = 0    // mark row for zeroing
                    } else {
                        firstRowZero = true
                    }
                }
            }
        }
        console.log(firstRowZero)
        console.log(matrix)

        // check the matrix elements excluding the marking first row and col. if marked, then zero
        for (let r = 1; r < rows; r ++) {
            for (let c = 1; c < cols; c ++) {
                if (matrix[0][c] === 0 || matrix[r][0] === 0) {
                    matrix[r][c] = 0
                }
            }
        }

        // handle if first col should be zeroed
        if (matrix[0][0] === 0) {
            for (let r = 0; r < rows; r ++) {
                matrix[r][0] = 0
            }
        }

        // handle if first row should be zeroed
        if (firstRowZero) {
            for (let c = 0; c < cols; c ++) {
                matrix[0][c] = 0
            }
        }
    }
}
