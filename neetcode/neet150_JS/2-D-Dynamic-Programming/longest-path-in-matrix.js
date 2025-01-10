// https://neetcode.io/problems/longest-increasing-path-in-matrix

class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        let maxIncreasePathLen = 0
        const rows = matrix.length;
        const cols = matrix[0].length
        const visited = Array(rows).fill().map((e) => {return Array(cols).fill(false)})
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        const dp = new Map()

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                //maxIncreasePathLen = Math.max(maxIncreasePathLen, this.dfsNoDP(matrix, r, c, rows, cols, visited, -1, directions))
                maxIncreasePathLen = Math.max(maxIncreasePathLen, this.dfsWithDP(matrix, r, c, rows, cols, visited, -1, directions, dp))
            }
        }

        return maxIncreasePathLen
    }

    dfsWithDP(matrix, r, c, rows, cols, visited, prevVal, directions, dp) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] === true || prevVal >= matrix[r][c]) {
            return 0
        }
        
        if (dp.has(`(${r}, ${c})`)) {
            return dp.get(`(${r}, ${c})`)
        }

        visited[r][c] = true

        let maxIncrease = 0
        for (let [dr, dc] of directions) {
            maxIncrease = Math.max(maxIncrease, this.dfsWithDP(matrix, dr + r, dc + c, rows, cols, visited, matrix[r][c], directions, dp))
        }

        visited[r][c] = false
        dp.set(`(${r}, ${c})`, 1 + maxIncrease)
        
        return dp.get(`(${r}, ${c})`) 
    }

    dfsNoDP(matrix, r, c, rows, cols, visited, prevVal, directions) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] === true || prevVal >= matrix[r][c]) {
            return 0
        }

        visited[r][c] = true

        let maxIncrease = 0
        for (let [dr, dc] of directions) {
            maxIncrease = Math.max(maxIncrease, this.dfsNoDP(matrix, dr + r, dc + c, rows, cols, visited, matrix[r][c], directions))
        }

        visited[r][c] = false
        return 1 + maxIncrease
    }
}
