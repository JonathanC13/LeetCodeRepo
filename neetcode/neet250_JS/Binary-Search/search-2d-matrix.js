// https://neetcode.io/problems/search-2d-matrix

/*
first determine which row the target may be in by if matrix[i][0] <= target && matrix[i][cols - 1] >= target
Then search that row, i

- Time: O(log(m * n)). Since reducing the rows (m) to search and then cols (n) in the row.
- Space: O(1)
*/
class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let i = 0
        let j = matrix.length - 1
        let row = 0

        // find which row
        while (i <= j) {
            row = i + Math.floor((j - i) / 2)

            if (matrix[row][0] <= target && target <= matrix[row][matrix[row].length - 1]) {
                break
            } else if (target < matrix[row][0]) {
                j = row - 1
            } else {
                i = row + 1
            }
        }

        // find which col
        let left = 0
        let right = matrix[row].length - 1

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2)
            if (matrix[row][mid] === target) {
                return true
            } else if (matrix[row][mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return false
    }
}
