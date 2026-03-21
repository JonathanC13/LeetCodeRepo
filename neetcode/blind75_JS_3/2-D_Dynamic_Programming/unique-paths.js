// https://neetcode.io/problems/count-paths/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  - m and n
 *      - type of m === 'Number'
 *      - m >= 0
 * 
 * 3. time and space constraints
 *  BTTC: O(m * n)
 *  Space: O(m * n)
 * 
 * 4. edge cases and test cases
 *  edge cases
 *  1. if m === 0 || n === 0: return 0
 * 
 *  test cases
 *  1. m > 0 and n > 0
 *      inputs
 *          m = 2, n = 2
 *      expected output
 *          2
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  recursive backtracking so that at every cell it evaluates every direction, in this case right and down.
 *  paths = rec(go right) + rec(go down)
 *  Time: O(m*n * 2^(m+n)) // for each cell *, 2 paths ^, m + n remaining cells
 * 
 *  To reduce the time complexity the number of unique paths from the current cell to the destination can be saved in a memoization Array.
 *  memo[m-1][n-1] destination set to 1
 *  Time: O(m * n)
 * 
 * 7. algos
 *  - 2D dynamic programming
 * 
 * 8. data structures
 *  - 2D Array
 * 
 * 9. time and space complexity
 *  Time: O(m * n)
 *  Space: O(m * n)
 * 
 * 
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

        const memo = new Array(m).fill().map((e) => new Array(n).fill(-1))
        memo[m-1][n-1] = 1
        const dirs = [[0,1],[1,0]]
        return this.rec(m, n, 0, 0, memo, dirs)
    }

    rec(m, n, r, c, memo, dirs) {
        if (r >= m || c >= n) {
            return 0
        }
        if (memo[r][c] !== -1) {
            return memo[r][c]
        }

        let paths = 0
        for (let [dr, dc] of dirs) {
            paths += this.rec(m, n, r + dr, c + dc, memo, dirs)
        }
        memo[r][c] = paths
        return paths
    }
}
