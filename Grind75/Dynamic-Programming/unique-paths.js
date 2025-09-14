// https://leetcode.com/problems/unique-paths/description/

/**
recursive backtracking

main
    create memo 2D Array of dimensions m, n fill with -1. Memo will store that cell's number of way to get to end.
    init state:
        memo[m-1][n-1] = 1  // if get here, then return 1 way to get to end

    dfs(m, n, 0, 0, directions, memo)
    return memo[0][0]

dfs
    base case 1:
    if (r < 0 || r >= m || c < 0 || c >= n) {
        return 0
    }

    if (memo[r][c] !== -1) {
        return memo[r][c]
    }
    
    let ways = 0

    for (let [dr, dc] of directions) {
        ways += dfs(m, n, r + dr, c + dc, directions, memo)
    }

    memo[r][c] = ways
    return ways

- Time: O(m * n)    // without memo O(m * n * 2^(m + n))
- Space: O(m * n)

 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const memo = Array.from(new Array(m), (e) => new Array(n).fill(-1))
    memo[m - 1][n - 1] = 1

    const dirs = [[0, 1], [1, 0]]

    dfs(m, n, 0, 0, dirs, memo)
    return memo[0][0]
};

const dfs = function(m, n, r, c, dirs, memo) {
    if (r < 0 || r >= m || c < 0 || c >= n) {
        return 0
    }
    if (memo[r][c] !== -1) {
        return memo[r][c]
    }

    let ways = 0
    for (let [dr, dc] of dirs) {
        ways += dfs(m, n, r + dr, c + dc, dirs, memo)
    }

    memo[r][c] = ways
    return ways
}