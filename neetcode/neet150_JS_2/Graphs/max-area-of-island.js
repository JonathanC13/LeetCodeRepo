// https://neetcode.io/problems/max-area-of-island

/*
iterate rows
    iterate cols
        if (grid[r][c] === 1) {
            maxArea = Math.max(maxArea, this.rec(grid, rows, cols, r, c, directions))
        }

rec(grid, rows, cols, r, c, directions)
    if (r or c out of bounds or grid[r][c] === 0) {
        return 0
    }

    convert to water so not to be retreaded
    let cells = 1   // 1 for itself

    for each direction search for more land tiles.
        cells += this.rec(...)  // each path will return its number of cells of the island ahead

    return cells

- Time: O(r * c)
- Space: O(r * c)
*/

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length
        const cols = grid[0].length
        let maxArea = 0
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (grid[r][c] === 1) {
                    maxArea = Math.max(maxArea, this.rec(grid, rows, cols, r, c, directions))
                }
            }
        }

        return maxArea
    }

    rec(grid, rows, cols, r, c, directions) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) {
            return 0
        }

        grid[r][c] = 0
        let cells = 1

        for (let [dr, dc] of directions) {
            cells += this.rec(grid, rows, cols, r + dr, c + dc, directions)
        }

        return cells
    }
}
