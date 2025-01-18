// https://neetcode.io/problems/spiral-matrix

class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let top = 0
        let left = 0
        let right = matrix[0].length - 1
        let bot = matrix.length - 1

        const res = []

        while (top <= bot && left <= right) {
            for (let i = left; i <= right; i ++) {
                res.push(matrix[top][i])
            }
            top += 1

            for (let i = top; i <= bot; i ++) {
                res.push(matrix[i][right])
            }
            right -= 1

            if (!(top <= bot && left <= right)) {
                break
            }

            for (let i = right; i >= left; i --) {
                res.push(matrix[bot][i])
            }
            bot -= 1

            for (let i = bot; i >= top; i --) {
                res.push(matrix[i][left])
            }
            left += 1
        }

        return res
    }
}
