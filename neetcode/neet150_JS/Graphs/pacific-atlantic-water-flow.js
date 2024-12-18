// https://neetcode.io/problems/pacific-atlantic-water-flow

class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        if (heights.length === 0) {
            return []
        }

        const rows = heights.length
        const cols = heights[0].length
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        
        const pacific = Array(rows).fill().map((e) => {return Array(cols).fill(false)})
        const atlantic = Array(rows).fill().map((e) => {return Array(cols).fill(false)})

        for (let c = 0; c < cols; c ++) {
            this.DFS(heights, 0, c, rows, cols, pacific, directions)
            this.DFS(heights, rows-1, c, rows, cols, atlantic, directions)
        }

        for (let r = 0; r < rows; r ++) {
            this.DFS(heights, r, 0, rows, cols, pacific, directions)
            this.DFS(heights, r, cols-1, rows, cols, atlantic, directions)
        }
        // console.log(pacific)
        // console.log(atlantic)
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

    DFS(heights, r, c, rows, cols, ocean, directions) {
        if (r < 0 || r >= rows ||
            c < 0 || c >= cols ||
            ocean[r][c]) {
                return
            }

        ocean[r][c] = true
    
        for (let [dr, dc] of directions) {
            const nr = r + dr
            const nc = c + dc

            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !ocean[nr][nc] && heights[nr][nc] >= heights[r][c]) {
                this.DFS(heights, nr, nc, rows, cols, ocean, directions)
            }
        }
    }
}
