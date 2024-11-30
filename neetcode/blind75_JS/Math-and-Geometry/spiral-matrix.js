// https://neetcode.io/problems/spiral-matrix

class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        if (matrix === null) {
            return []
        }

        const res = []

        let l = 0
        let r = matrix[0].length
        let t = 0
        let b = matrix.length

        while (l < r && t < b) {
            for (let i = l; i < r; i ++) {
                res.push(matrix[t][i])
            }
            t += 1

            for (let i = t; i < b; i ++) {
                res.push(matrix[i][r - 1])
            }
            r -= 1

            if (!(l < r && t < b)) {
                break;
            }

            for (let i = r-1; i >= l; i --) {
                res.push(matrix[b - 1][i])
            }
            b -= 1

            for (let i = b-1; i >= t; i --) {
                res.push(matrix[i][l])
            }
            l += 1
        }

        return res
    }
}
