// https://neetcode.io/problems/set-zeroes-in-matrix

class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        // mine
        if (matrix === null) {
            return matrix
        }

        const rLen = matrix.length
        const cLen = matrix[0].length

        const rows = Array(rLen).fill(false)
        const cols = Array(cLen).fill(false)

        for (let r = 0; r < rLen; r ++) {
            for (let c = 0; c < cLen; c ++) {
                if (matrix[r][c] === 0) {
                    rows[r] = true
                    cols[c] = true
                }
            }
        }

        rows.forEach((val, i) => {
            if (val) {
                for (let c = 0; c < cLen; c ++) {
                    matrix[i][c] = 0
                }
            }
        })

        cols.forEach((val, i) => {
            if (val) {
                for (let r = 0; r < rLen; r ++) {
                    matrix[r][i] = 0
                }
            }
        })

        return matrix
    }
}
