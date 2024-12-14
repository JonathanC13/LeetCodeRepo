// https://neetcode.io/problems/search-2d-matrix

class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (matrix.length === 0) {
            return false
        }

        const rows = matrix.length
        const cols = matrix[0].length

        let left = 0
        let right = (rows * cols) - 1

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2)
            const row = Math.floor(mid / cols)
            const col = mid % cols

            // console.log(matrix[row][col])

            if (target === matrix[row][col]) {
                return true
            } else if (target > matrix[row][col]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return false
    }
}
