// https://neetcode.io/problems/search-2d-matrix

/*
conduct binary search on the rows first value to determine the row the target may exist in.
Then conduct binary search on the columns of the row to determine if it exists.

- Time: O(log (r * c))
- Space: O(1)
*/

class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length
        const cols = matrix[0].length

        let row = 0
        let t = 0
        let b = rows - 1
        while (t <= b) {
            row = t + Math.floor(b - t / 2)

            if (matrix[row][0] <= target && target <= matrix[row][cols - 1]) {
                break
            } else if (matrix[row][0] > target) {
                b = row - 1
            } else {
                t = row + 1
            }
        }
        
        let l = 0
        let r = cols - 1
        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2)

            if (matrix[row][mid] === target) {
                return true
            } else if (matrix[row][mid] > target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }

        return false
    }
}
