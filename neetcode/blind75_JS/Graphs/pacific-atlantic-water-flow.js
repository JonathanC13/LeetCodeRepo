// https://neetcode.io/problems/pacific-atlantic-water-flow

class Solution {

    /*

    console.log(Array(5).fill().map((elm) => Array(2).fill(false)))


    Loop through each element in the heights
    DFS and populate the elements can reach the pacific
    DFS and populate the elements can reach the altantic

    the overlapping elements in both are part of the solution

    */

    dfs(row, col, rows, cols, oceanTiles, directions, heights) {
        // since starting on the boundary, the initial tile can be set to true. The following tiles are only true if can reach a tile that reached the ocean
        oceanTiles[row][col] = true

        for (let [x, y] of directions) {
            const newR = row + x
            const newC = col + y
            
            if (newR >= 0 && newR < rows && newC >= 0 && newC < cols && !oceanTiles[newR][newC] && heights[newR][newC] >= heights[row][col]) {
                this.dfs(newR, newC, rows, cols, oceanTiles, directions, heights)
            }
        }
    }
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {

        if (!heights) {
            return []
        }

        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        const result = []
        const rows = heights.length
        const cols = heights[0].length
        const pacific = Array(rows).fill().map((elm) => Array(cols).fill(false))
        const atlantic = Array(rows).fill().map((elm) => Array(cols).fill(false))

        // check the elements that reach the row boundary
        for (let c = 0; c < cols; c ++) {
            // pacific
            this.dfs(0, c, rows, cols, pacific, directions, heights)

            // atlantic
            this.dfs(rows - 1, c, rows, cols, atlantic, directions, heights)
        }

        // check the elements that reach the cols boundary
        for (let r = 0; r < rows; r ++) {
            this.dfs(r, 0, rows, cols, pacific, directions, heights)
            this.dfs(r, cols - 1, rows, cols, atlantic, directions, heights)
        }

        console.log(pacific)
        console.log(atlantic)

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (pacific[r][c] && atlantic[r][c]) {
                    result.push([r, c])
                }
            }
        }
        return result
    }
}
