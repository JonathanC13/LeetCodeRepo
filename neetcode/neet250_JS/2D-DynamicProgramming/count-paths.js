// https://neetcode.io/problems/count-paths

/*
initial dfs recursive to traverse all paths and return the sum of each paths' unique paths

method 1
recursive top down with memoization
    create a 2d array and fill with -1
    initial state dp[m-1][n-1] = 1 for the goal tile

    base case 1: if out of bounds return 0
    base case 2: if dp[r][c] !== -1: return dp[r][c]

    recursively traverse right and down to get the paths to the current tile
    dp[r][c] = dfs(r, c + 1) + dfs(r + 1, c)

    the final answer is in dp[0][0]

    -Time: O(m * n)
    -Space: O(m * n)

method 2
iterative bottom up
    create a 2d Array of m and n and fill with -1
    initial state dp[0][0] = 1

    iterate 0 to m
        iterate 0 to n
            the unique paths to the current tile are the paths to the left + top tile
            dp[r][c] = dp[r][c-1] ?? 0 + dp[r - 1][c] ?? 0

    the final answer is in dp[m-1][n-1]

    -Time: O(m * n)
    -Space: O(m * n)

*/

class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        // return this.initDFS(m, n, 0, 0)

        // return this.topDown(m, n)

        return this.bottomUp(m, n)
    }

    initDFS(m, n, r, c) {
        if (r >= m || c >= n) {
            return 0
        }

        if (r === m - 1 && c == n - 1) {
            return 1
        }

        return this.initDFS(m, n, r, c + 1) + this.initDFS(m, n, r + 1, c)
    }

    bottomUp(m, n) {
        const dp = new Array(m).fill().map((e) => new Array(n).fill(-1))
        dp[0][0] = 1

        for (let r = 0; r < m; r ++) {
            for (let c = 0; c < n; c ++) {
                if (r === 0 && c === 0) {
                    continue
                }
                const left = c === 0 ? 0 : dp[r][c - 1]
                const up = r === 0 ? 0 : dp[r - 1][c]
                dp[r][c] = left + up
            }
        }
        // console.log(dp)
        return dp[m-1][n-1]
    }

    topDown(m, n) {
        const dp = new Array(m).fill().map((e) => new Array(n).fill(-1))
        dp[m-1][n-1] = 1
        
        this.dfs(m, n, 0, 0, dp)

        return dp[0][0]
    }

    dfs(m, n, r, c, dp) {
        if (r >= m || c >= n) {
            return 0
        }
        if (dp[r][c] !== -1) {
            return dp[r][c]
        }

        dp[r][c] = this.dfs(m, n, r, c + 1, dp) + this.dfs(m, n, r + 1, c, dp)

        return dp[r][c] 
    }
}
