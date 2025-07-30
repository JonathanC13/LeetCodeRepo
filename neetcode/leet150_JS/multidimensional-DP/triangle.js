// https://leetcode.com/problems/triangle/description/?envType=study-plan-v2&envId=top-interview-150

/*
create a memo 2D array of size: triangle.length x last row length. fill with Number.POSITIVE_INFINITY

recursive dfs backtracking
    base case 1: if r >= rows:
        return 0

    base case 2: if i out of bounds
        return pos infin
    
    base case 3: if memo[r][i] !== -1
        return memo[r][i]

    get minPath if use next row with i index
    get minPath if use next row with i + 1 index

    memo[r][i] = min(left, right) + triangle[r][i]
    return memo[r][i]

- Time: O(r * c)        // without DP: O(2^r)   // each row has 2 paths.
- Space: O(r * c)
*/

const dfs = function(triangle, r, i, memo) {
    if (r >= triangle.length) {
        return 0
    }

    if (i >= triangle[r].length) {
        return Number.POSITIVE_INFINITY
    }

    if (memo[r][i] !== Number.POSITIVE_INFINITY) {
        return memo[r][i]
    }

    const left = dfs(triangle, r + 1, i, memo)
    const right = dfs(triangle, r + 1, i + 1, memo)
    memo[r][i] = Math.min(left, right) + triangle[r][i]
    return memo[r][i]
}

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const rows = triangle.length
    const cols = triangle[triangle.length - 1].length

    const memo = new Array(rows).fill().map((e) => new Array(cols).fill(Number.POSITIVE_INFINITY))

    return dfs(triangle, 0, 0, memo)
};