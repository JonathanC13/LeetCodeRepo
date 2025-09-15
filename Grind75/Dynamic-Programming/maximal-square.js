// https://leetcode.com/problems/maximal-square/

/**
recursive backtracking with memo

main
    memo = 2D Array of dimensions r and c. fill with -1. Each cell holds the maximal square evaluated right, diag, and down.

    maxSquareLen = 0

    // traverse matrix from end to fill the memo so that cells before it can expand a maximal square
    for (rows - 1 to 0)
        for (cols - 1 to 0)
            if (cell === "0") 
                memo[r][c] = 0
            else
                maxSquareLen = Math.max(maxSquareLen, rec(matrix, rows, cols, r, c, memo))

    return maxSquareLen * maxSquareLen  // for area

rec
    base case 1: out of bounds or 0
    if (r or c out of bounds or cell === "0")
        return 0
    if (memo[r][c] !== -1) {
        // a square has been evaluated at this cell right, diag, and down
        return memo[r][c]
    }

    right = rec(matrix, rows, cols, r, c + 1, memo)
    diag = rec(matrix, rows, cols, r + 1, c + 1, memo)
    down = rec(matrix, rows, cols, r + 1, c, memo)

    return Math.min(right, diag, down) + 1  // min because we want a square. + 1 for this cell being 1

- Time: O(r * c)    // without memo. O(r*c * 3^(r+c))
- Space: O(r * c)
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length
    const dirs = [[0, 1], [1, 1], [1, 0]]
    const memo = new Array(rows).fill().map((e) => new Array(cols).fill(-1))

    let maxSquareLen = 0

    for (let r = rows - 1; r >= 0; r --) {
        for (let c = cols - 1; c >= 0; c --) {
            if (matrix[r][c] === "0") {
                memo[r][c] = 0
            } else {
                maxSquareLen = Math.max(maxSquareLen, rec(matrix, rows, cols, r, c, memo, dirs))
            }
        }
    }

    // console.log(memo)

    return maxSquareLen * maxSquareLen
};

const rec = function(matrix, rows, cols, r, c, memo, dirs) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || matrix[r][c] === "0") {
        return 0
    }
    if (memo[r][c] !== -1) {
        return memo[r][c]
    }

    let sqrLen = Number.POSITIVE_INFINITY

    for (let [dr, dc] of dirs) {
        sqrLen = Math.min(sqrLen, rec(matrix, rows, cols, r + dr, c + dc, memo, dirs))
    }
    memo[r][c] = sqrLen + 1   // 1 for this cell
    return memo[r][c]
}