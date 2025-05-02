// https://neetcode.io/problems/count-number-of-islands

/*
iterate the rows
    iterate the cols
        if (grid[r][c]=== '1') {
            islands += 1
            call recursive function to convert all connected land times to water so that they are not counted as a different island.
        }


rec(grid, rows, cols, r, c, directions)
    if (r or c out of bounds or grid[r][c] === '0') {
        return
    }

    this tile is a land tile, convert to water

    in the directions search for connected land tiles

- Time: O(r * c)
- Space: O(r * c)
*/

class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length
        const cols = grid[0].length
        let islands = 0
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (grid[r][c] === '1') {
                    islands += 1
                    this.rec(grid, rows, cols, r, c, directions)
                }
            }
        }

        return islands
    }

    rec(grid, rows, cols, r, c, directions) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {
            return
        }

        grid[r][c] = '0'

        for (let [dr, dc] of directions) {
            this.rec(grid, rows, cols, r + dr, c + dc, directions)
        }

        return
    }
}
