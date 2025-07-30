// https://leetcode.com/problems/minimum-path-sum/description/?envType=study-plan-v2&envId=top-interview-150

/*
directions = [[1, 0], [0, 1]]

create memo 2D array of same dimensions of the grid fill with -1
init state
memo[rows - 1][cols - 1] = grid[rows - 1][cols - 1]

recursive dfs backtracking
    base case 1: if r or c out of bounds
        return POS infin

    base case 2: if memo[r][c] !== -1:
        return memo[r][c]

    let minPath = Number.POSITIVE_INFINITY
    for directions
        minPath = min(memo[r][c], next cell + grid[r][c])

    memo[r][c] = minPath
    return memo[r][c]

- Time: O(r * c)    // without DP, O(2^(r + c))
- Space: O(r * c)
*/

const dfs = (grid, r, c, rows, cols, memo, directions) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols) {
        return Number.POSITIVE_INFINITY
    }

    if (memo[r][c] !== -1) {
        return memo[r][c]
    }

    let minPath = Number.POSITIVE_INFINITY
    for (let [dr, dc] of directions) {
        minPath = Math.min(minPath, dfs(grid, r + dr, c + dc, rows, cols, memo, directions) + grid[r][c])
    }

    memo[r][c] = minPath
    return memo[r][c]
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    const directions = [[1, 0], [0, 1]]
    const memo = new Array(rows).fill().map((e) => new Array(cols).fill(-1))
    memo[rows-1][cols-1] = grid[rows-1][cols-1]

    return dfs(grid, 0, 0, rows, cols, memo, directions)
};