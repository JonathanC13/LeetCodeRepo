// https://neetcode.io/problems/rotate-matrix

class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        let l = 0
        let r = matrix.length - 1

        while (l < r) {
            for (let i = 0; i < r - l; i ++) {
                const tempTL = matrix[l][l + i]

                // tl <= bl
                matrix[l][l + i] = matrix[r - i][l]

                // bl <= br
                matrix[r - i][l] = matrix[r][r - i]

                // br <= tr
                matrix[r][r - i] = matrix[l + i][r]

                // temp tl to tr
                matrix[l + i][r] = tempTL     
            }

            l += 1
            r -= 1
        }
    }
}
