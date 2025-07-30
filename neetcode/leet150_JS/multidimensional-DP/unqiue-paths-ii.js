// https://leetcode.com/problems/unique-paths-ii/description/?envType=study-plan-v2&envId=top-interview-150

/**
create memo 2D array of same dimensions of obstacleGrid, fill with -1
each cell with contain the min paths to end
init state:
    memo[rows - 1][cols - 1] = 1

recursive dfs backtracking
    base case 1: if r or c out of bounds or obstacle (1): return 0

    base case 2: if memo[r][c] !== -1:
        return memo[r][c]

    paths = 0
    for directions
        paths += next cell

    memo[r][c] = paths
    return memo[r][c]
 */

const dfs = function(grid, r, c, rows, cols, memo) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 1) {
        return 0
    }
    if (memo[r][c] !== -1) {
        return memo[r][c]
    }

    paths = 0
    paths += dfs(grid, r + 1, c, rows, cols, memo)
    paths += dfs(grid, r, c + 1, rows, cols, memo)

    memo[r][c] = paths
    return memo[r][c]
}

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const rows = obstacleGrid.length
    const cols = obstacleGrid[0].length
    const memo = Array.from(new Array(rows), (e) => new Array(cols).fill(-1))
    memo[rows-1][cols-1] = 1

    return dfs(obstacleGrid, 0, 0, rows, cols, memo)
};