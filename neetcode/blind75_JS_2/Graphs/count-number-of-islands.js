// https://neetcode.io/problems/count-number-of-islands

/*
edge case 1: if grid.length === 0 || grid[0].length === 0: return 0

recursive DFS and when encounter a land tile, flip it to '0' so that it is not revisited to count an additional island

- Time: O(r * c)    // since no retreading of non-land tiles. Time complexity is r * c instead of r * c * 4^(r*c)
- Space: O(r * c)
*/

class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (grid.length === 0 || grid[0].length === 0){
            return 0
        }

        const rows = grid.length
        const cols = grid[0].length
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        let islands = 0

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (grid[r][c] === '1') {
                    islands += 1
                    this.dfs(grid, rows, cols, r, c, directions)
                }
            }
        }

        return islands
    }

    dfs(grid, rows, cols, r, c, directions) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {
            return
        }

        grid[r][c] = '0'

        for (let [dr, dc] of directions) {
            this.dfs(grid, rows, cols, dr + r, dc + c, directions)
        }
        return
    }
}
