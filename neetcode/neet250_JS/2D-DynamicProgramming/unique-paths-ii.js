// https://leetcode.com/problems/unique-paths-ii/

/*
bottom up with dp tabulation
-Time: O(m * n)
-Space: O(m * n)
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid.length === 0) {
        return 0
    }
    const rows = obstacleGrid.length
    const cols = obstacleGrid[0].length
    const dp = new Array(rows).fill().map((e) => new Array(cols).fill(-1))
    dp[0][0] = 1

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            if (obstacleGrid[r][c] === 1) {
                dp[r][c] = 0
                continue
            }
            
            if (r === 0 && c === 0) {
                continue
            }
            const left = c === 0 ? 0 : dp[r][c-1]
            const up = r === 0 ? 0 : dp[r-1][c]
            dp[r][c] = left + up
        }
    }

    return dp[rows-1][cols-1]
};