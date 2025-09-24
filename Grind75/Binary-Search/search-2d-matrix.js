// https://leetcode.com/problems/search-a-2d-matrix/description/

/**
use binary search to determine which row the target may be in.
use binary search to determine the index of the target if it exists in the row

- Time: O(log(rows + cols))  // log rows + log cols
- Space: O(1)
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let r0 = 0
    let r1 = matrix.length - 1
    let midR = 0
    let c0 = 0
    let c1 = matrix[0].length - 1

    while (r0 <= r1) {
        midR = Math.floor((r1 - r0) / 2) + r0
        
        if (matrix[midR][0] <= target && matrix[midR][c1] >= target) {
            break
        } else if (matrix[midR][0] > target) {
            r1 = midR - 1
        } else {
            r0 = midR + 1
        }
    }

    while (c0 <= c1) {
        const midC = Math.floor((c1 - c0) / 2) + c0

        if (matrix[midR][midC] > target) {
            c1 = midC - 1
        } else if (matrix[midR][midC] < target) {
            c0 = midC + 1
        } else {
            return true
        }
    }

    return false
};