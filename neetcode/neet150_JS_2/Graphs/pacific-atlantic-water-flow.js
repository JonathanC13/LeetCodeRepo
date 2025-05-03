// https://neetcode.io/problems/pacific-atlantic-water-flow

/*
create a 2D Array for the cells that can reach the Pacific
    Row 0 is all true
    Col 0 is all true
create a 2D Array for the cells that can reach the Atlantic
    Row = length - 1 is all true
    Col = length - 1 is all true

iterate the rows
    Pacific is starting dfs for row and col = 0
    Atlantic is starting dfs for row, and col = length -1

iterate the cols
    Pacific is starting dfs for row = 0 and col
    Atlantic is starting dfs for row = length - 1, and col

res = new Array()
iterate rows and cols
    if Pacific and Atlantic at the r, c are both true push to res

return res

dfs(r, c, heights, ocean, directions)
    
    ocean[r][c] = true

    for directions
        if (out of bounds or ocean[nr][nc] === true or heights[r][c] > heights[nr][nc]) {
            continue
        }

        water can flow
        this.dfs(...)

- Time: O(r * c)  // 4^(r*c) but reduced to r * c since visited is marked and not retreaded.
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
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        const pac = Array.from(new Array(rows), (e) => new Array(cols).fill(false))
        const atl = Array.from(new Array(rows), (e) => new Array(cols).fill(false))

        for (let r = 0; r < rows; r ++) {
            this.dfs(heights, pac, directions, rows, cols, r, 0)
            this.dfs(heights, atl, directions, rows, cols, r, cols - 1)
        }

        for (let c = 0; c < cols; c ++) {
            this.dfs(heights, pac, directions, rows, cols, 0, c)
            this.dfs(heights, atl, directions, rows, cols, rows - 1, c)
        }

        const res = []
        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (pac[r][c] === true && atl[r][c] === true) {
                    res.push([r, c])
                }
            }
        }

        return res
    }

    dfs(heights, ocean, directions, rows, cols, r, c) {
        ocean[r][c] = true

        for (let [dr, dc] of directions) {
            const nr = r + dr
            const nc = c + dc
            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || ocean[nr][nc] === true || heights[r][c] > heights[nr][nc]) {
                continue
            }

            this.dfs(heights, ocean, directions, rows, cols, nr, nc)
        }

        return
    }
}
