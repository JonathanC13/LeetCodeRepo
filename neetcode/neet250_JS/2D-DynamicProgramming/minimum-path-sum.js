// https://leetcode.com/problems/minimum-path-sum/

/*
method 1: dfs recursive
    recursively traverse while adding the sum, when reach bottom right, return
    each tile will only retain that min sum of the proceeding paths

    - Time: O(2^(rows + cols))  // each tile has 2 decisions, rows + cols because there is only max rows + cols calls due to going right or down which reduces the grid
    - Space: O(rows + cols)

method 2: dfs with memoization
    Store already calculated path min sums into a table
    -Time: O(rows * cols)
    -Space: O(rows * cols)

method 3: bottom up with tabulation
    -Time: O(rows * cols)
    -Space: O(rows * cols)
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (grid.length === 0) {
        return 0
    }
    const rows = grid.length
    const cols = grid[0].length

    // return initDFS(grid, rows, cols, 0, 0)

    // return topDown(grid, rows, cols)

    return bottomUp(grid, rows, cols)
};

var bottomUp = function(grid, rows, cols) {
    const dp = new Array(rows).fill().map((e) => new Array(cols).fill(-1))
    dp[0][0] = grid[0][0]

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            if (r === 0 && c === 0) {
                continue
            }
            const leftMin = c === 0 ? Number.POSITIVE_INFINITY : dp[r][c-1]
            const upMin = r === 0 ? Number.POSITIVE_INFINITY : dp[r-1][c]
            dp[r][c] = Math.min(leftMin, upMin) + grid[r][c]
        }
    }
    
    return dp[rows-1][cols-1]
}

var topDown = function(grid, rows, cols) {
    const dp = new Array(rows).fill().map((e) => new Array(cols).fill(-1))
    dp[rows-1][cols-1] = grid[rows-1][cols-1]

    dfs(grid, rows, cols, 0, 0, dp, 0)

    return dp[0][0]
}

var dfs = function(grid, rows, cols, r, c, dp) {
    if (r >= rows || c >= cols) {
        return Number.POSITIVE_INFINITY
    }
    if (dp[r][c] !== -1) {
        return dp[r][c]
    }

    const rightSum = grid[r][c] + dfs(grid, rows, cols, r, c + 1, dp)
    const downSum = grid[r][c] + dfs(grid, rows, cols, r + 1, c, dp)

    dp[r][c] = Math.min(rightSum, downSum)
    return dp[r][c]
}

var initDFS = function(grid, rows, cols, r, c) {
    if (r >= rows || c >= cols) {
        return Number.POSITIVE_INFINITY
    }
    if (r === rows - 1 && c === cols - 1) {
        return grid[r][c]
    }

    const rightSum = grid[r][c] + initDFS(grid, rows, cols, r, c + 1)
    const downSum = grid[r][c] + initDFS(grid, rows, cols, r + 1, c)
    
    return Math.min(rightSum, downSum)
}