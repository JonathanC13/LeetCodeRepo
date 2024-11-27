// https://neetcode.io/problems/count-number-of-islands

class Solution {

    dfs(grid, r, c, rows, cols, directions) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {
            return
        }

        grid[r][c] = '0'

        for (let [dr, dc] of directions) {
            this.dfs(grid, r + dr, c + dc, rows, cols, directions)
        }

        return
    }

    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (grid.length === 0) {
            return 0
        }

        // up, right, down, left
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        const rows = grid.length
        const cols = grid[0].length
        let islands = 0

        for (let r = 0; r < rows; r ++){
            for (let c = 0; c < cols; c ++) {
                if (grid[r][c] === '1') {
                    islands += 1
                    this.dfs(grid, r, c, rows, cols, directions)
                }
            }
        }

        return islands

    }
}
