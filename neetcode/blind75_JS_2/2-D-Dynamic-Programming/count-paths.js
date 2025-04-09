// https://neetcode.io/problems/count-paths

/*
edge case 1: if m === 0 || n === 0: return 0

recursive dfs to return the number of unique paths
    when reach m - 1, n - 1. return 1

    paths = 0
    paths += go down
    paths += go right

    return paths

- Time: O(2^(m+n))  // + because each cell moved reduces the grid cells to continue from.
- Space: O(m + n)

Reduce time with memo
- Time: O(m * n)
- Space: O(m * n)
*/

class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        if (m === 0 || n === 0) {
            return 0
        }

        const memo = new Array(m).fill().map((v) => new Array(n).fill(-1))
        memo[m - 1][n - 1] = 1
        return this.dfs(m, n, 0, 0, memo)
    }

    dfs(m, n, r, c, memo) {
        if (r < 0 || r >= m || c < 0 || c >= n) {
            return 0
        }
        if (r === m - 1 && c === n - 1) {
            return 1
        }
        if (memo[r][c] !== -1) {
            return memo[r][c]
        }

        memo[r][c] = this.dfs(m, n, r + 1, c, memo) + this.dfs(m, n, r, c + 1, memo)
        return memo[r][c]
    }
}
