// https://leetcode.com/problems/unique-paths/description/?envType=study-plan-v2&envId=leetcode-75

/*
recursive 2D dfs
    base case 1: if r === m - 1 && c === n - 1: return 1    // 1 path to end

    paths = 0

    for directions right and down
        if out of bounds: continue

        paths += dfs(new row, new col)

    return paths

- Time: O(2^(m+n))  // 2 paths for each cell, but m + n since moving to the cell reduces the problem size
- Space: O(m + n)

With dp memo to save a cell's already calculated unqiue paths to the destination
- Time: O(m + n)
- Space: O(m * n)
*/

const dfs = (m, n, r, c, memo, directions) => {
    if (memo[r][c] !== -1) {
        return memo[r][c]
    }

    let paths = 0

    for (let [dr, dc] of directions) {
        const nr = r + dr
        const nc = c + dc
        if (nr >= m || nc >= n) {
            continue
        }

        paths += dfs(m, n, nr, nc, memo, directions)
    }

    memo[r][c] = paths
    return memo[r][c]
}

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const memo = new Array(m).fill().map((e) => new Array(n).fill(-1))
    memo[m - 1][n - 1] = 1

    const directions = [[0, 1], [1, 0]]

    const res = dfs(m, n, 0, 0, memo, directions)
    console.log(memo)
    return res
};