// https://neetcode.io/problems/count-number-of-islands

/*

visited = copy of grid fill with false

islands = 0
iterate the rows
    iterate the cols
        if (grid[r][c] === "1" and !visited[r][c]) {
            islands += 1
            recursive func to mark all land tiles connected in this island
        } 

return islands

*recur
    - base case 1: if hit water (water tile or out of bounds or already visited), do not continue
    if r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === "0" || visited[r][c]
        return

    visited[r][c] = true

    for the directions
        call the recursive func with the new tile

    return

- Time: O(r * c). r * c to iterate the grid. Since marking visited, it will not exceed into 4^n.
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
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        let islands = 0
        const visited = new Array(rows).fill().map((e) => {return new Array(cols).fill(false)})

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (grid[r][c] === "1" && !visited[r][c]) {
                    islands += 1
                    this.markIslandTiles(grid, rows, cols, r, c, visited, directions)
                }
            }
        }

        return islands
    }

    markIslandTiles(grid, rows, cols, r, c, visited, directions) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === "0" || visited[r][c]) {
            return
        }

        visited[r][c] = true

        for (let [dr, dc] of directions) {
            this.markIslandTiles(grid, rows, cols, r + dr, c + dc, visited, directions)
        }

        return
    }
}
