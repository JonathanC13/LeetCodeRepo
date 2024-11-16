// https://neetcode.io/problems/count-number-of-islands

class Solution {

    /*
    iterate through the grid and once a land tile is found increment the island counter and DFS to flip all 
    the connected island tiles to water so that they are not revisited.

    Time: O(r * c)
    Space: O(r * c)
    */

    dfs(grid, x, y, rows, cols, directions) {
        if (x < 0 || x >= rows || y < 0 || y >= cols || grid[x][y] === '0') {
            return
        }

        grid[x][y] = '0'

        for (let [dirx, diry] of directions) {
            this.dfs(grid, x + dirx, y + diry, rows, cols, directions)
        }

        return
    }

    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {

        // up, right, down, left
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        const rows = grid.length
        const cols = grid[0].length
        let numIslands = 0

        for (let x = 0; x < rows; x ++) {
            for (let y = 0; y < cols; y ++) {
                if (grid[x][y] === '1') {
                    numIslands += 1
                    this.dfs(grid, x, y, rows, cols, directions)
                    console.log(grid)
                }
            }
        }

        return numIslands

    }
}