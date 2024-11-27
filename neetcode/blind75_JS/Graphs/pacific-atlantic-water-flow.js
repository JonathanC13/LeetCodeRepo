// https://neetcode.io/problems/pacific-atlantic-water-flow

class Solution {

    dfs(row, col, rows, cols, oceanTiles, directions, heights) {
        // since starting on the boundary, the initial tile can be set to true. The following tiles are only true if can reach a tile that reached the ocean
        oceanTiles[row][col] = true

        for (let [dr, dc] of directions) {
            const newR = row + dr
            const newC = col + dc

            if (newR >= 0 && newR < rows && newC >= 0 && newC < cols && oceanTiles[newR][newC] === false && heights[newR][newC] >= heights[row][col]) {
                this.dfs(newR, newC, rows, cols, oceanTiles, directions, heights)
            }
        }

        return
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

        for (let r = 0; r < rows; r ++){
            this.dfs(r, 0, rows, cols, pacific, directions, heights)
            this.dfs(r, cols - 1, rows, cols, atlantic, directions, heights)
        }

        for (let c = 0; c < cols; c ++){
            this.dfs(0, c, rows, cols, pacific, directions, heights)
            this.dfs(rows - 1, c, rows, cols, atlantic, directions, heights)
        }

        console.log(pacific)
        console.log(atlantic)

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++){
                if (pacific[r][c] && atlantic[r][c]) {
                    result.push([r, c])
                }
            }
        }

        return result
    }
}
