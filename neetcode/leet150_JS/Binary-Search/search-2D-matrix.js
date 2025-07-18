// https://leetcode.com/problems/search-a-2d-matrix/description/?envType=study-plan-v2&envId=top-interview-150

/*
determine which row the value is in and then which column if exists

Time: O(log(m * n)) // m and n are being reduced
Space: O(1)
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const rows = matrix.length
    const cols = matrix[0].length
    let top = 0
    let bot = rows - 1
    let midRow = 0

    while (top <= bot) {
        midRow = Math.floor((bot - top) / 2) + top

        if (matrix[midRow][0] <= target && matrix[midRow][cols - 1] >= target) {
            break
        } else if (target < matrix[midRow][0]) {
            bot = midRow - 1
        } else {
            top = midRow + 1
        }
    }
    if (top > bot) {
        return false
    }

    let l = 0
    let r = cols - 1
    let midCol = 0
    while (l <= r) {
        midCol = Math.floor((r - l) / 2) + l

        if (matrix[midRow][midCol] === target) {
            return true
        } else if (matrix[midRow][midCol] < target) {
            l = midCol + 1
        } else {
            r = midCol - 1
        }
    }

    return false
};