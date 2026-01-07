// https://leetcode.com/problems/unique-paths/

/**
1. Assumptions
    1. None

2. input validation
    m and n are Numbers

3. time and space constraints
    BTTC: O(m * n)
    Space: O(m * n)

4. edge cases and some test cases
    edge cases
    1. if m === 0 || n === 0: return 0

    test cases
    1.
        inputs
            m = 3, n = 7
        expected output
            28

5. visualize by drawing and manually solve
6. break into subproblems
    recursive backtracking to try paths right and down
    use dp memoization
        - rows = m
        - cols = n
        - fill with -1
        - each cell represents the number of unique paths to [m-1][n-1]

7. algos
    - recursive backtracking
    - dp memoization

8. data structure
    - Matrix

9. complexity
    Time: O(m * n)
    Space: O(m * n)
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m === 0 || n === 0) {
        return 0
    }

    const rec = (m, n, r, c, memo) => {
        if (r < 0 || r >= m || c < 0 || c >= n) {
            return 0
        }
        if (memo[r][c] !== -1) {
            // console.log('hit', r, c)
            return memo[r][c]
        }

        let paths = 0
        paths += rec(m, n, r, c + 1, memo)
        paths += rec(m, n, r + 1, c, memo)
        memo[r][c] = paths
        return paths
    }

    const memo = new Array(m).fill().map((e) => new Array(n).fill(-1))
    memo[m-1][n-1] = 1
    const res = rec(m, n, 0, 0, memo)
    // console.log(memo)
    return res
};