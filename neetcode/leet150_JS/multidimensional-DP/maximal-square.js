// https://leetcode.com/problems/maximal-square/description/?envType=study-plan-v2&envId=top-interview-150

/**
main
    maxSquare = [0, [0,0]]  // square side length, top left coord

    iterate rows
        iterate cols
            dfs with this r, c as the starting point.

recursive dfs
    base case 1: if r or c out of bounds or if cell === '0'
    base case 2: if memo[r][c] !== -1
        return memo[r][c]

    // 3 paths to check
    1. get min square length going right
    2. get min square length going diagonal right down  // since square this will ensure return is the length of a square and not a rectangle
    3. get min square length going down

    res = min(right, rightDown, down) + 1  // 1 for this cell. min of the 3 because we desire a square so taking the min is the most valid square found

    if res > maxSquare[0]
        maxSquare[0] = res
        maxSquare[1] = [r, c]

    memo[r][c] = res
    return res

- Time: O(r * c)    // w/o DP, time = O(3^(r + c))
- Space: O(r * c)
 */

const dfs = (matrix, r, c, rows, cols, memo) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || matrix[r][c] === '0') {
        return 0
    }
    if (memo[r][c] !== -1) {
        return memo[r][c]
    }

    const right = dfs(matrix, r, c + 1, rows, cols, memo)
    const downRight = dfs(matrix, r + 1, c + 1, rows, cols, memo)
    const down = dfs(matrix, r + 1, c, rows, cols, memo)

    memo[r][c] = 1 + Math.min(right, downRight, down)
    return memo[r][c]
}

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const maxSquare = [0, [0, 0]]
    const rows = matrix.length
    const cols = matrix[0].length
    const memo = Array.from(new Array(rows), (e) => new Array(cols).fill(-1))

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            const res = dfs(matrix, r, c, rows, cols, memo)
            
            if (res > maxSquare[0]) {
                maxSquare[0] = res
                maxSquare[1] = [r, c]
            }
        }
    }
    //console.log(memo)
    //console.log(maxSquare)

    return maxSquare[0] * maxSquare[0]
};