// https://neetcode.io/problems/pacific-atlantic-water-flow

/*
create a 2D array of the same dimensions of heights to store the cells that can reach the Pacific.
    row = 0 or col == 0, all values are true, these are the starting cells

create a 2D array of the same dimensions of heights to store the cells that can reach the Atlantic.
    row = length - 1 or col == length - 1, all values are true

func: each starting cell, recursive DFS to mark all neighbor cells that have a height equal or higher
    base case 1: cell is true: return

    mark cell in oceanArr as true

    for each direction
        if (within array bounds && this height <= neighbor height) {
            this.dfs(...)
        }

    return

    - Time: O(r * c)  // 4^(r*c): each cell has 4 directions to check. 2 oceans with 2 sides each = (2r + 2c) * 4^(r*c) still = 4^(r*c). BUT since marking visited overall it reduces down to r * c
    - Space: O(r * c)

After marking in both ocean Arrays, iterate and if common true, mark in result.
    - Time: O(r * c)
    - Space: O(r * c)

Overall:
    - Time: O(4^(r*c))
    - Space: O(r * c)
*/

class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length
        const cols = heights[0].length

        const pacific = Array.from(new Array(rows), (v) => new Array(cols).fill(false))
        const atlantic = Array.from(new Array(rows), (v) => new Array(cols).fill(false))

        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        // horizontal
        for (let c = 0; c < cols; c ++) {
            this.dfs(heights, pacific, rows, cols, directions, 0, c)
            this.dfs(heights, atlantic, rows, cols, directions, rows - 1, c)
        }

        // vertical
        for (let r = 0; r < rows; r ++) {
            this.dfs(heights, pacific, rows, cols, directions, r, 0)
            this.dfs(heights, atlantic, rows, cols, directions, r, cols - 1)
        }

        const res = []
        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (pacific[r][c] && atlantic[r][c]) {
                    res.push([r, c])
                }
            }
        }

        return res
    }

    dfs(heights, ocean, rows, cols, directions, r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || ocean[r][c] === true) {
            return
        }

        ocean[r][c] = true

        for (let [dr, dc] of directions) {
            const nr = dr + r
            const nc = dc + c
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && ocean[nr][nc] === false && heights[r][c] <= heights[nr][nc]) {
                this.dfs(heights, ocean, rows, cols, directions, nr, nc)
            }
        }

        return
    }
}
