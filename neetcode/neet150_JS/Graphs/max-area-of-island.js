// https://neetcode.io/problems/max-area-of-island

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        if (grid.length === 0) {
            return 0
        }

        let maxArea = 0
        const rows = grid.length
        const cols = grid[0].length
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (grid[r][c] === 1) {
                    maxArea = Math.max(maxArea, this.DFS(grid, r, c, rows, cols, directions))
                }
            }
        }

        return maxArea
    }

    DFS(grid, r, c, rows, cols, directions) {
        if (r < 0 || r >= rows ||
            c < 0 || c >= cols ||
            grid[r][c] === 0) {
                return 0
            }

        grid[r][c] = 0
        let land = 1

        for (let [dr, dc] of directions) {
            land += this.DFS(grid, r + dr, c + dc, rows, cols, directions)
        }

        return land
    }
}
