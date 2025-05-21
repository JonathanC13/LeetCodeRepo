// https://neetcode.io/problems/longest-increasing-path-in-matrix

/*
* recursive dfs
    base case 1: if r or c out of bounds or visited[r][c] = true: return 0

    visited[r][c] = true

    let longest = 0
    for each direction  
        if direction is within bounds and not visited and current cell < new cell
            longest = max(longest, this.dfs(next cell))

    visited = false
    return longest

globalLongest = 0
iterate rows
    iterate cols
        globalLongest = max(globalLongest, dfs evaluate each cell as the starting point)

return globalLongest

- Time: O(r * c * 4^(r*c))
- Space: O(r * c)

* reduce time complexity with memo
memo:
    rows = rows
    cols = cols
    fill with -1

    * each cell represents the longest increasing path from that cell onward, 
    so when a recursive call lands into a populated cell it means that the previous cell value was less, therefore extends the path length.

- Time: O(r * c)
- Space: O(r * c)
*/

class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        const rows = matrix.length
        const cols = matrix[0].length
        const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        const visited = Array.from(new Array(rows), (e) => new Array(cols).fill(false))
        let globalLongest = 0
        const memo = new Array(rows).fill().map((e) => new Array(cols).fill(-1))

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                globalLongest = Math.max(globalLongest, this.dfs(matrix, rows, cols, r, c, dirs, visited, memo))
            }
        }
        return globalLongest
    }

    dfs(matrix, rows, cols, r, c, dirs, visited, memo) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] === true) {
            return 0
        }
        if (memo[r][c] !== -1) {
            // previous value is less than the value at this r, c, if memo is populated the path length has been extend.
            // Since already calculated from this cell onward, return.
            return memo[r][c]
        }

        let longest = 1 // 1 for itself alone
        visited[r][c] = true

        for (let [dr, dc] of dirs) {
            const nr = r + dr
            const nc = c + dc
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && visited[nr][nc] === false && matrix[r][c] < matrix[nr][nc]) {
                longest = Math.max(longest, 1 + this.dfs(matrix, rows, cols, nr, nc, dirs, visited, memo))
            }
        }

        visited[r][c] = false
        memo[r][c] = longest
        return longest
    }
}
