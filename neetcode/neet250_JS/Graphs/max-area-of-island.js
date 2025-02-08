// https://neetcode.io/problems/max-area-of-island

/*
iterate the rows
    iterate the cols
        if grid[r][c] === 1 and !visited[r][c]
            maxArea = max(maxArea, recursive func to explore island)

return maxArea

*Recur
    - base case 1: if out of bounds OR visited OR tile === water
        return 0

    visited[r][c] = true

    currArea = 1    // initial is 1 for itself.
    for directions
        // the recur pop will return the area of the tiles ahead
        currArea += call recur func with new tile coordinate

    return currArea

- Time: O(r * c)    iterate the grid to find all islands. Does not approach 4^n (4 directions each tile) since we keep track of visited and only look at land tiles.
- Space: O(r * c)
*/

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        const rows = grid.length
        const cols = grid[0].length
        const visited = new Array(rows).fill().map((e) => {return new Array(cols).fill(false)})

        let maxArea = 0

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (grid[r][c] === 1 && !visited[r][c]) {
                    maxArea = Math.max(maxArea, this.getIslandArea(grid, rows, cols, r, c, visited, directions))
                }
            }
        }

        return maxArea

    }

    getIslandArea(grid, rows, cols, r, c, visited, directions) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0 || visited[r][c]) {
            return 0
        }

        visited[r][c] = true
        let currArea = 1
        for (let [dr, dc] of directions) {
            currArea += this.getIslandArea(grid, rows, cols, r + dr, c + dc, visited, directions)
        }

        return currArea
    }
}
