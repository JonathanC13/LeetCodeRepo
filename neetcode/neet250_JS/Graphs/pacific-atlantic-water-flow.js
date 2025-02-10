// https://neetcode.io/problems/pacific-atlantic-water-flow

/*
mulitsource bfs.
starting from the row and col edges that will explore into the land to find tiles that can flow to it.

create an Array for the tiles that can flow into the Pacific
create an Array for the tiles that can flow into the Atlantic

iterate the edges set the edges to True and then call BFS to search for tiles that can reach it.
top row of Pacific = true
bot row of Atlantic = true

left col of Pacific = true
right col of Atlantic = true

iterate the grid
    if both coordinates in Pacific and Atlantic are true. push into res

- Time: O(r * c). Pacific bfs rows r * c. + Pac cols r * c. + Atl rows + r * c. Atl cols r * c.
- Space: O(r * c)
*/

class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        const rows = heights.length
        const cols = heights[0].length

        const pac = new Array(rows).fill().map((e) => {return new Array(cols).fill(false)})
        const atl = new Array(rows).fill().map((e) => {return new Array(cols).fill(false)})
        const res = []

        for (let c = 0; c < cols; c ++) {
            this.bfs(heights, pac, rows, cols, 0, c, directions)
            this.bfs(heights, atl, rows, cols, rows - 1, c, directions)
        }

        for (let r = 0; r < rows; r ++) {
            this.bfs(heights, pac, rows, cols, r, 0, directions)
            this.bfs(heights, atl, rows, cols, r, cols - 1, directions)
        }
        // console.log(pac)
        // console.log(atl)
        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (pac[r][c] && atl[r][c]) {
                    res.push([r, c])
                }
            }
        }

        return res
    }

    bfs(heights, ocean, rows, cols, r, c, directions) {
        const qu = new Deque()
        ocean[r][c] = true
        qu.pushBack([r, c])

        while (qu.size() > 0) {
            const [pr, pc] = qu.popFront()

            for (let [dr, dc] of directions) {
                const nr = pr + dr
                const nc = pc + dc
                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || ocean[nr][nc] || heights[pr][pc] > heights[nr][nc]) {
                    continue
                } else {
                    ocean[nr][nc] = true
                    qu.pushBack([nr, nc])
                }
            }
        }

        return
    }
}
