// https://neetcode.io/problems/count-paths

/*
recursive backtrack
once reach grid[m-1][n-1] return 1

each recursive call determines and returns the number of ways to the end with the directions right and down.

- Time: O(2^(r + c))    // 1 = single source. * 2^(r+c) = since each move reduces the remaining array size
Space: O(r * c)

To reduce the time complexity, create a 2D array to store calculated number of ways to the end so that other paths that reach that cell do not have to re-tread.
The final answer is the final return of the recursive function.
If want to return memo[0][0], need to handle the case when m = 1 and n = 1, this will always return 1

- Time: O(r * c)
- Space: O(r * c)
*/

class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const directions = [[0, 1], [1, 0]]
        const memo = new Array(m).fill().map((e) => new Array(n).fill(-1))

        return this.dfs(m, n, 0, 0, directions, memo)
    }

    dfs(rows, cols, r, c, directions, memo) {
        if (r < 0 || r >= rows || c < 0 || c >= cols) {
            return 0
        }
        if (r === rows - 1 && c === cols - 1) {
            return 1
        }
        if (memo[r][c] !== -1) {
            return memo[r][c]
        }

        let paths = 0
        for (let [dr, dc] of directions) {
            paths += this.dfs(rows, cols, r + dr, c + dc, directions, memo)
        }

        memo[r][c] = paths
        return paths
    }
}
