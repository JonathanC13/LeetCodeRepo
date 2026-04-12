// https://neetcode.io/problems/search-2d-matrix/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  1. matrix
 *      - matrix instanceof Array
 *      - matrix.length >= 0
 *      - matrix element's are Number
 *  2. target
 *      - typeof target === 'number'
 * 
 * 3. time and space constraints
 *  BTTC: O(log(m * n)) // this time constraint indicates binary search. log(m) + log(n) = log(m * n)
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if matrix.length === 0: return false
 * 
 *  test cases
 *  1. exists
 *      input
 *          matrix = [[1,2,3],[4,5,6],[7,8,9]], target = 6
 *      expected output
 *          true
 *  2. does not exists
 *      input
 *          matrix = [[1,2,3],[4,5,6],[7,8,9]], target = 10
 *      expected output
 *          false
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  conduct binary search to determine the potential row for the target
 *      go up if target < first col of mid
 *      go down if target > last col of mid
 *      else break
 *  conduct binary search on the row
 * 
 * 7. algos
 *  - binary search
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(log(m * n))
 *  Space: O(1)
 */

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

        let t = 0
        let b = rows - 1
        let row = 0
        while (t <= b) {
            row = Math.floor((b - t) / 2) + t
            if (target < matrix[row][0]) {
                b = row - 1
            } else if (target > matrix[row][cols-1]) {
                t = row + 1
            } else {
                break
            }
        }

        let l = 0
        let r = cols - 1
        while (l <= r) {
            const m = Math.floor((r - l) / 2) + l
            if (target === matrix[row][m]) {
                return true
            } else if (target > matrix[row][m]) {
                l = m + 1
            } else {
                r = m - 1
            }
        }
        return false
    }
}
