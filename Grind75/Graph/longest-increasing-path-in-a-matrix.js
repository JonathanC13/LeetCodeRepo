// https://leetcode.com/problems/longest-increasing-path-in-a-matrix/description/

/**
recursive backtracking with memo since can save the cell's longest increasing path and if another cell goes to that cell and has a lower value it extends into that cell, therefore return that cell's length

main
    create incPath Array of dimensions matrix fill with 0

    longest = 0

    iterate the rows
        iterate the cols
            longest = max(longest, rec(...))    // from the starting cell return the max increasing path length

    return longest

* {Number[][]} matrix
* {Number[][]} incPath
* {Number} r
* {Number} c
* {Number} rows
* {Number} cols
* {Number} prevVal
rec
    base case 1:
    if (r or c out of bounds or prevVal >= matrix[r][c])
        return 0    // cannot extend increasing path length

    base case 2:
    if (incPath[r][c] !== 0) {
        // that cell already evaluated its max increasing path length, since the prevVal < matrix[r][c] that cell adds to the length of this one
        return incPath[r][c]
    }

    longest = 0

    // explore neighbors
    for (let [dr, dc] of directions)
        longest = max(longest, rec(matrix, incPath, r + dr, c + dc, rows, cols, matrix[r][c]) + 1)  // + 1 for the current cell

    incPath[r][c] = longest
    return longest


- Time: O(r * c)
- Space: O(r * c)
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length

    const incPath = Array.from(new Array(rows), (e) => new Array(cols).fill(0))
    let longest = 0

    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            longest = Math.max(longest, rec(matrix, incPath, r, c, rows, cols, Number.NEGATIVE_INFINITY, directions))
        }
    }
    // console.log(incPath)

    return longest
};

const rec = (matrix, incPath, r, c, rows, cols, prevVal, directions) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || prevVal >= matrix[r][c]) {
        return 0
    }

    if (incPath[r][c] !== 0) {
        return incPath[r][c]
    }

    let longest = 0

    for (let [dr, dc] of directions) {
        longest = Math.max(longest, rec(matrix, incPath, r + dr, c + dc, rows, cols, matrix[r][c], directions) + 1)
    }

    incPath[r][c] = longest
    return longest

}